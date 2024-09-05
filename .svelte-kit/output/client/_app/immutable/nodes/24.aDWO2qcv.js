import{s as le,a as N,e as v,b as j,c as w,h as ce,d as C,f as p,g as ee,i as R,j as f,k as x,l as ae,m as ue,o as ie,p as pe,q as _e,t as Ee,r as fe,u as ge,n as U}from"../chunks/scheduler.BVCo5HCX.js";import{S as de,i as ye,t as T,b as h,d as X,c as F,a as k,m as W,e as P,g as z}from"../chunks/index.C9mGAhn_.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.COvZ985M.js";import{s as be,Q as G,p as Re,r as re,t as se}from"../chunks/index.DAWWTyat.js";import{h as Q}from"../chunks/setTrackProxy.Cl20Y9Hv.js";import{I as Se,C as Te}from"../chunks/globalContexts.1hDlTDmj.js";import{w as Ae}from"../chunks/entry.ZsnkuR_y.js";import{D as he}from"../chunks/DataTable.C27QukxD.js";import{p as Ne}from"../chunks/stores.C49gDDi_.js";import{B as Z}from"../chunks/BigValue.fsHmo18v.js";import{L as we}from"../chunks/LineChart.4dpktC06.js";import{p as Oe}from"../chunks/profile.BW8tN6E9.js";import{Q as te}from"../chunks/QueryViewer.CXzVRZ_y.js";import{A as De,a as $e}from"../chunks/AccordionItem.DAYPUhQ2.js";function Le(l){var i;let t,_=(c.title??((i=c.og)==null?void 0:i.title))+"",e;return{c(){t=v("h1"),e=Ee(_),this.h()},l(s){t=C(s,"H1",{class:!0});var r=fe(t);e=ge(r,_),r.forEach(p),this.h()},h(){R(t,"class","title")},m(s,r){f(s,t,r),x(t,e)},p:U,d(s){s&&p(t)}}}function ve(l){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:U,p:U,d:U}}function Ce(l){var r;let t,_,e,i,s;return document.title=t=c.title??((r=c.og)==null?void 0:r.title),{c(){_=N(),e=v("meta"),i=N(),s=v("meta"),this.h()},l(a){_=w(a),e=C(a,"META",{property:!0,content:!0}),i=w(a),s=C(a,"META",{name:!0,content:!0}),this.h()},h(){var a,o;R(e,"property","og:title"),R(e,"content",((a=c.og)==null?void 0:a.title)??c.title),R(s,"name","twitter:title"),R(s,"content",((o=c.og)==null?void 0:o.title)??c.title)},m(a,o){f(a,_,o),f(a,e,o),f(a,i,o),f(a,s,o)},p(a,o){var g;o&0&&t!==(t=c.title??((g=c.og)==null?void 0:g.title))&&(document.title=t)},d(a){a&&(p(_),p(e),p(i),p(s))}}}function He(l){var s,r;let t,_,e=(c.description||((s=c.og)==null?void 0:s.description))&&Me(),i=((r=c.og)==null?void 0:r.image)&&Fe();return{c(){e&&e.c(),t=N(),i&&i.c(),_=j()},l(a){e&&e.l(a),t=w(a),i&&i.l(a),_=j()},m(a,o){e&&e.m(a,o),f(a,t,o),i&&i.m(a,o),f(a,_,o)},p(a,o){var g,A;(c.description||(g=c.og)!=null&&g.description)&&e.p(a,o),(A=c.og)!=null&&A.image&&i.p(a,o)},d(a){a&&(p(t),p(_)),e&&e.d(a),i&&i.d(a)}}}function Me(l){let t,_,e,i,s;return{c(){t=v("meta"),_=N(),e=v("meta"),i=N(),s=v("meta"),this.h()},l(r){t=C(r,"META",{name:!0,content:!0}),_=w(r),e=C(r,"META",{property:!0,content:!0}),i=w(r),s=C(r,"META",{name:!0,content:!0}),this.h()},h(){var r,a,o;R(t,"name","description"),R(t,"content",c.description??((r=c.og)==null?void 0:r.description)),R(e,"property","og:description"),R(e,"content",((a=c.og)==null?void 0:a.description)??c.description),R(s,"name","twitter:description"),R(s,"content",((o=c.og)==null?void 0:o.description)??c.description)},m(r,a){f(r,t,a),f(r,_,a),f(r,e,a),f(r,i,a),f(r,s,a)},p:U,d(r){r&&(p(t),p(_),p(e),p(i),p(s))}}}function Fe(l){let t,_,e;return{c(){t=v("meta"),_=N(),e=v("meta"),this.h()},l(i){t=C(i,"META",{property:!0,content:!0}),_=w(i),e=C(i,"META",{name:!0,content:!0}),this.h()},h(){var i,s;R(t,"property","og:image"),R(t,"content",(i=c.og)==null?void 0:i.image),R(e,"name","twitter:image"),R(e,"content",(s=c.og)==null?void 0:s.image)},m(i,s){f(i,t,s),f(i,_,s),f(i,e,s)},p:U,d(i){i&&(p(t),p(_),p(e))}}}function ne(l){let t,_;return t=new te({props:{queryID:"past_games",queryResult:l[0]}}),{c(){F(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,i){W(t,e,i),_=!0},p(e,i){const s={};i&1&&(s.queryResult=e[0]),t.$set(s)},i(e){_||(T(t.$$.fragment,e),_=!0)},o(e){h(t.$$.fragment,e),_=!1},d(e){P(t,e)}}}function me(l){let t,_;return t=new te({props:{queryID:"past_games_summary",queryResult:l[1]}}),{c(){F(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,i){W(t,e,i),_=!0},p(e,i){const s={};i&2&&(s.queryResult=e[1]),t.$set(s)},i(e){_||(T(t.$$.fragment,e),_=!0)},o(e){h(t.$$.fragment,e),_=!1},d(e){P(t,e)}}}function oe(l){let t,_;return t=new te({props:{queryID:"past_games_summary_by_team",queryResult:l[2]}}),{c(){F(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,i){W(t,e,i),_=!0},p(e,i){const s={};i&4&&(s.queryResult=e[2]),t.$set(s)},i(e){_||(T(t.$$.fragment,e),_=!0)},o(e){h(t.$$.fragment,e),_=!1},d(e){P(t,e)}}}function ke(l){let t,_='<em class="markdown">The regular season has yet to begin. Check back soon!</em>';return{c(){t=v("p"),t.innerHTML=_,this.h()},l(e){t=C(e,"P",{class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-170ognw"&&(t.innerHTML=_),this.h()},h(){R(t,"class","markdown")},m(e,i){f(e,t,i)},p:U,i:U,o:U,d(e){e&&p(t)}}}function We(l){let t,_='<a href="#past-performance">Past Performance</a>',e,i,s,r,a,o,g,A,D;return i=new Z({props:{data:l[1],value:"total_games_played"}}),r=new Z({props:{data:l[1],value:"correct_predictions"}}),o=new Z({props:{data:l[1],value:"accuracy_pct1"}}),A=new De({props:{$$slots:{default:[Be]},$$scope:{ctx:l}}}),{c(){t=v("h2"),t.innerHTML=_,e=N(),F(i.$$.fragment),s=N(),F(r.$$.fragment),a=N(),F(o.$$.fragment),g=N(),F(A.$$.fragment),this.h()},l(m){t=C(m,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ee(t)!=="svelte-r55kci"&&(t.innerHTML=_),e=w(m),k(i.$$.fragment,m),s=w(m),k(r.$$.fragment,m),a=w(m),k(o.$$.fragment,m),g=w(m),k(A.$$.fragment,m),this.h()},h(){R(t,"class","markdown"),R(t,"id","past-performance")},m(m,E){f(m,t,E),f(m,e,E),W(i,m,E),f(m,s,E),W(r,m,E),f(m,a,E),W(o,m,E),f(m,g,E),W(A,m,E),D=!0},p(m,E){const H={};E&2&&(H.data=m[1]),i.$set(H);const M={};E&2&&(M.data=m[1]),r.$set(M);const O={};E&2&&(O.data=m[1]),o.$set(O);const B={};E&1073741828&&(B.$$scope={dirty:E,ctx:m}),A.$set(B)},i(m){D||(T(i.$$.fragment,m),T(r.$$.fragment,m),T(o.$$.fragment,m),T(A.$$.fragment,m),D=!0)},o(m){h(i.$$.fragment,m),h(r.$$.fragment,m),h(o.$$.fragment,m),h(A.$$.fragment,m),D=!1},d(m){m&&(p(t),p(e),p(s),p(a),p(g)),P(i,m),P(r,m),P(o,m),P(A,m)}}}function Pe(l){let t,_;return t=new he({props:{data:l[2],title:"Prediction Accuracy by Team",rows:"32"}}),{c(){F(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,i){W(t,e,i),_=!0},p(e,i){const s={};i&4&&(s.data=e[2]),t.$set(s)},i(e){_||(T(t.$$.fragment,e),_=!0)},o(e){h(t.$$.fragment,e),_=!1},d(e){P(t,e)}}}function Be(l){let t,_,e,i,s,r;return t=new $e({props:{title:"Detailed Results by Team",$$slots:{default:[Pe]},$$scope:{ctx:l}}}),e=new we({props:{data:l[2],x:"team",y:"accuracy_pct1",title:"past_games_summary_by_team",xAxisTitle:"TeamName",xTickMarks:"true",yMax:"1"}}),s=new Z({props:{data:{a:123},value:"a"}}),{c(){F(t.$$.fragment),_=N(),F(e.$$.fragment),i=N(),F(s.$$.fragment)},l(a){k(t.$$.fragment,a),_=w(a),k(e.$$.fragment,a),i=w(a),k(s.$$.fragment,a)},m(a,o){W(t,a,o),f(a,_,o),W(e,a,o),f(a,i,o),W(s,a,o),r=!0},p(a,o){const g={};o&1073741828&&(g.$$scope={dirty:o,ctx:a}),t.$set(g);const A={};o&4&&(A.data=a[2]),e.$set(A)},i(a){r||(T(t.$$.fragment,a),T(e.$$.fragment,a),T(s.$$.fragment,a),r=!0)},o(a){h(t.$$.fragment,a),h(e.$$.fragment,a),h(s.$$.fragment,a),r=!1},d(a){a&&(p(_),p(i)),P(t,a),P(e,a),P(s,a)}}}function Ue(l){var I;let t,_,e,i,s,r,a,o,g,A='<a href="#predictions">Predictions</a>',D,m,E,H,M,O=typeof c<"u"&&(c.title||((I=c.og)==null?void 0:I.title))&&c.hide_title!==!0&&Le();function B(n,u){var S;return typeof c<"u"&&(c.title||(S=c.og)!=null&&S.title)?Ce:ve}let Y=B()(l),$=typeof c=="object"&&He(),d=l[0]&&ne(l),y=l[1]&&me(l),b=l[2]&&oe(l);const J=[We,ke],L=[];function q(n,u){return n[0].length>0?0:1}return m=q(l),E=L[m]=J[m](l),{c(){O&&O.c(),t=N(),Y.c(),_=v("meta"),e=v("meta"),$&&$.c(),i=j(),s=N(),d&&d.c(),r=N(),y&&y.c(),a=N(),b&&b.c(),o=N(),g=v("h1"),g.innerHTML=A,D=N(),E.c(),H=j(),this.h()},l(n){O&&O.l(n),t=w(n);const u=ce("svelte-1j2izld",document.head);Y.l(u),_=C(u,"META",{name:!0,content:!0}),e=C(u,"META",{name:!0,content:!0}),$&&$.l(u),i=j(),u.forEach(p),s=w(n),d&&d.l(n),r=w(n),y&&y.l(n),a=w(n),b&&b.l(n),o=w(n),g=C(n,"H1",{class:!0,id:!0,"data-svelte-h":!0}),ee(g)!=="svelte-1pi22ig"&&(g.innerHTML=A),D=w(n),E.l(n),H=j(),this.h()},h(){R(_,"name","twitter:card"),R(_,"content","summary"),R(e,"name","twitter:site"),R(e,"content","@evidence_dev"),R(g,"class","markdown"),R(g,"id","predictions")},m(n,u){O&&O.m(n,u),f(n,t,u),Y.m(document.head,null),x(document.head,_),x(document.head,e),$&&$.m(document.head,null),x(document.head,i),f(n,s,u),d&&d.m(n,u),f(n,r,u),y&&y.m(n,u),f(n,a,u),b&&b.m(n,u),f(n,o,u),f(n,g,u),f(n,D,u),L[m].m(n,u),f(n,H,u),M=!0},p(n,[u]){var K;typeof c<"u"&&(c.title||(K=c.og)!=null&&K.title)&&c.hide_title!==!0&&O.p(n,u),Y.p(n,u),typeof c=="object"&&$.p(n,u),n[0]?d?(d.p(n,u),u&1&&T(d,1)):(d=ne(n),d.c(),T(d,1),d.m(r.parentNode,r)):d&&(z(),h(d,1,1,()=>{d=null}),X()),n[1]?y?(y.p(n,u),u&2&&T(y,1)):(y=me(n),y.c(),T(y,1),y.m(a.parentNode,a)):y&&(z(),h(y,1,1,()=>{y=null}),X()),n[2]?b?(b.p(n,u),u&4&&T(b,1)):(b=oe(n),b.c(),T(b,1),b.m(o.parentNode,o)):b&&(z(),h(b,1,1,()=>{b=null}),X());let S=m;m=q(n),m===S?L[m].p(n,u):(z(),h(L[S],1,1,()=>{L[S]=null}),X(),E=L[m],E?E.p(n,u):(E=L[m]=J[m](n),E.c()),T(E,1),E.m(H.parentNode,H))},i(n){M||(T(d),T(y),T(b),T(E),M=!0)},o(n){h(d),h(y),h(b),h(E),M=!1},d(n){n&&(p(t),p(s),p(r),p(a),p(o),p(g),p(D),p(H)),O&&O.d(n),Y.d(n),p(_),p(e),$&&$.d(n),p(i),d&&d.d(n),y&&y.d(n),b&&b.d(n),L[m].d(n)}}}const c={queries:[{past_games:"nfl/past_games.sql"},{past_games_summary:"nfl/past_games_summary.sql"},{past_games_summary_by_team:"nfl/past_games_summary_by_team.sql"}]};function Ye(l,t,_){let e,i;ae(l,Ne,S=>_(11,e=S)),ae(l,re,S=>_(21,i=S));let{data:s}=t,{data:r={},customFormattingSettings:a,__db:o,inputs:g}=s;ue(re,i="9e3b3ff320e1a73dc2302cf50baa8eca",i);let A=Ae(g);ie(Se,A),pe(A.subscribe(S=>g=S)),ie(Te,{getCustomFormats:()=>a.customFormats||[]});const D=(S,K)=>Oe(o.query,S,{query_name:K});be(D);let m;const E=()=>{m||(m=setTimeout(()=>{se.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},H=()=>{m?(clearTimeout(m),m=null):se.dismiss("LoadingToast")};_e(()=>(G.addEventListener("inFlightQueryStart",E),G.addEventListener("inFlightQueryEnd",H),G.QueriesLoading&&E(),()=>{G.removeEventListener("inFlightQueryStart",E),G.removeEventListener("inFlightQueryEnd",H)})),e.params,_e(()=>!0);let M={initialData:void 0,initialError:void 0},O=Q`SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`,B=`SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`;r.past_games&&(r.past_games instanceof Error?M.initialError=r.past_games:M.initialData=r.past_games);let V;const Y=G.createReactive({callback:S=>{_(0,V=S)},execFn:D},{id:"past_games",initialData:M.initialData,initialError:M.initialError});Y(B,{noResolve:O}),globalThis[Symbol.for("past_games")]={get value(){return V}};let $={initialData:void 0,initialError:void 0},d=Q`SELECT
    COUNT(*) as total_games_played, 
    SUM(accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id)`,y=`SELECT
    COUNT(*) as total_games_played, 
    SUM(accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id)`;r.past_games_summary&&(r.past_games_summary instanceof Error?$.initialError=r.past_games_summary:$.initialData=r.past_games_summary);let b;const J=G.createReactive({callback:S=>{_(1,b=S)},execFn:D},{id:"past_games_summary",initialData:$.initialData,initialError:$.initialError});J(y,{noResolve:d}),globalThis[Symbol.for("past_games_summary")]={get value(){return b}};let L={initialData:void 0,initialError:void 0},q=Q`WITH cte_team AS 
    (SELECT winning_team AS team FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) GROUP BY ALL)
SELECT
    T.Team,
    COUNT(*) as total_games_played, 
    SUM(PG.accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) PG
    LEFT JOIN cte_team T ON T.team = PG.visiting_team OR T.Team = PG.home_team
GROUP BY ALL
ORDER BY accuracy_pct1 DESC`,I=`WITH cte_team AS 
    (SELECT winning_team AS team FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) GROUP BY ALL)
SELECT
    T.Team,
    COUNT(*) as total_games_played, 
    SUM(PG.accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) PG
    LEFT JOIN cte_team T ON T.team = PG.visiting_team OR T.Team = PG.home_team
GROUP BY ALL
ORDER BY accuracy_pct1 DESC`;r.past_games_summary_by_team&&(r.past_games_summary_by_team instanceof Error?L.initialError=r.past_games_summary_by_team:L.initialData=r.past_games_summary_by_team);let n;const u=G.createReactive({callback:S=>{_(2,n=S)},execFn:D},{id:"past_games_summary_by_team",initialData:L.initialData,initialError:L.initialError});return u(I,{noResolve:q}),globalThis[Symbol.for("past_games_summary_by_team")]={get value(){return n}},l.$$set=S=>{"data"in S&&_(3,s=S.data)},l.$$.update=()=>{l.$$.dirty&8&&_(4,{data:r={},customFormattingSettings:a,__db:o}=s,r),l.$$.dirty&16&&Re.set(Object.keys(r).length>0),l.$$.dirty&2048&&e.params,l.$$.dirty&96&&Y(B,{noResolve:O}),l.$$.dirty&384&&J(y,{noResolve:d}),l.$$.dirty&1536&&u(I,{noResolve:q})},_(5,O=Q`SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`),_(6,B=`SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`),_(7,d=Q`SELECT
    COUNT(*) as total_games_played, 
    SUM(accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id)`),_(8,y=`SELECT
    COUNT(*) as total_games_played, 
    SUM(accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id)`),_(9,q=Q`WITH cte_team AS 
    (SELECT winning_team AS team FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) GROUP BY ALL)
SELECT
    T.Team,
    COUNT(*) as total_games_played, 
    SUM(PG.accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) PG
    LEFT JOIN cte_team T ON T.team = PG.visiting_team OR T.Team = PG.home_team
GROUP BY ALL
ORDER BY accuracy_pct1 DESC`),_(10,I=`WITH cte_team AS 
    (SELECT winning_team AS team FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) GROUP BY ALL)
SELECT
    T.Team,
    COUNT(*) as total_games_played, 
    SUM(PG.accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 500.0 AND winning_team = home_team)
            OR (home_team_win_probability < 500.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_nfl_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) PG
    LEFT JOIN cte_team T ON T.team = PG.visiting_team OR T.Team = PG.home_team
GROUP BY ALL
ORDER BY accuracy_pct1 DESC`),[V,b,n,s,r,O,B,d,y,q,I,e]}class at extends de{constructor(t){super(),ye(this,t,Ye,Ue,le,{data:3})}}export{at as component};
