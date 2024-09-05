import{s as qe,a as y,e as T,b as Ee,t as Ie,c as h,h as He,d as k,f as c,r as Re,u as Ue,g as Se,i as p,j as u,k as le,l as Ce,m as Qe,o as Ae,p as Be,q as Te,n as me}from"../chunks/scheduler.BVCo5HCX.js";import{S as Je,i as je,c as Q,a as B,m as J,t as d,b as w,d as fe,e as j,g as ue}from"../chunks/index.C9mGAhn_.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.ZGqga9CZ.js";import{s as Ye,Q as G,p as Ve,r as ke,t as Oe}from"../chunks/index.C8RIryS8.js";import{h as K}from"../chunks/setTrackProxy.Cl20Y9Hv.js";import{I as We,C as Ge}from"../chunks/globalContexts.1hDlTDmj.js";import{w as Ke}from"../chunks/entry.BCF5SsRs.js";import{D as Pe}from"../chunks/DataTable.BKISIfxk.js";import{p as Xe}from"../chunks/stores.C2AzUxyb.js";import{B as pe}from"../chunks/BigValue.B1VPH2Fw.js";import{L as ze}from"../chunks/LineChart.DMZMcY3L.js";import{V as Ze}from"../chunks/Value.Blyz8mIZ.js";import{p as xe}from"../chunks/profile.BW8tN6E9.js";import{Q as ge}from"../chunks/QueryViewer.CwykzcKw.js";function ea(_){var s;let t,r=(f.title??((s=f.og)==null?void 0:s.title))+"",a;return{c(){t=T("h1"),a=Ie(r),this.h()},l(o){t=k(o,"H1",{class:!0});var i=Re(t);a=Ue(i,r),i.forEach(c),this.h()},h(){p(t,"class","title")},m(o,i){u(o,t,i),le(t,a)},p:me,d(o){o&&c(t)}}}function aa(_){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:me,p:me,d:me}}function ta(_){var i;let t,r,a,s,o;return document.title=t=f.title??((i=f.og)==null?void 0:i.title),{c(){r=y(),a=T("meta"),s=y(),o=T("meta"),this.h()},l(l){r=h(l),a=k(l,"META",{property:!0,content:!0}),s=h(l),o=k(l,"META",{name:!0,content:!0}),this.h()},h(){var l,g;p(a,"property","og:title"),p(a,"content",((l=f.og)==null?void 0:l.title)??f.title),p(o,"name","twitter:title"),p(o,"content",((g=f.og)==null?void 0:g.title)??f.title)},m(l,g){u(l,r,g),u(l,a,g),u(l,s,g),u(l,o,g)},p(l,g){var S;g&0&&t!==(t=f.title??((S=f.og)==null?void 0:S.title))&&(document.title=t)},d(l){l&&(c(r),c(a),c(s),c(o))}}}function ra(_){var o,i;let t,r,a=(f.description||((o=f.og)==null?void 0:o.description))&&sa(),s=((i=f.og)==null?void 0:i.image)&&na();return{c(){a&&a.c(),t=y(),s&&s.c(),r=Ee()},l(l){a&&a.l(l),t=h(l),s&&s.l(l),r=Ee()},m(l,g){a&&a.m(l,g),u(l,t,g),s&&s.m(l,g),u(l,r,g)},p(l,g){var S,I;(f.description||(S=f.og)!=null&&S.description)&&a.p(l,g),(I=f.og)!=null&&I.image&&s.p(l,g)},d(l){l&&(c(t),c(r)),a&&a.d(l),s&&s.d(l)}}}function sa(_){let t,r,a,s,o;return{c(){t=T("meta"),r=y(),a=T("meta"),s=y(),o=T("meta"),this.h()},l(i){t=k(i,"META",{name:!0,content:!0}),r=h(i),a=k(i,"META",{property:!0,content:!0}),s=h(i),o=k(i,"META",{name:!0,content:!0}),this.h()},h(){var i,l,g;p(t,"name","description"),p(t,"content",f.description??((i=f.og)==null?void 0:i.description)),p(a,"property","og:description"),p(a,"content",((l=f.og)==null?void 0:l.description)??f.description),p(o,"name","twitter:description"),p(o,"content",((g=f.og)==null?void 0:g.description)??f.description)},m(i,l){u(i,t,l),u(i,r,l),u(i,a,l),u(i,s,l),u(i,o,l)},p:me,d(i){i&&(c(t),c(r),c(a),c(s),c(o))}}}function na(_){let t,r,a;return{c(){t=T("meta"),r=y(),a=T("meta"),this.h()},l(s){t=k(s,"META",{property:!0,content:!0}),r=h(s),a=k(s,"META",{name:!0,content:!0}),this.h()},h(){var s,o;p(t,"property","og:image"),p(t,"content",(s=f.og)==null?void 0:s.image),p(a,"name","twitter:image"),p(a,"content",(o=f.og)==null?void 0:o.image)},m(s,o){u(s,t,o),u(s,r,o),u(s,a,o)},p:me,d(s){s&&(c(t),c(r),c(a))}}}function $e(_){let t,r;return t=new ge({props:{queryID:"all_teams",queryResult:_[1]}}),{c(){Q(t.$$.fragment)},l(a){B(t.$$.fragment,a)},m(a,s){J(t,a,s),r=!0},p(a,s){const o={};s[0]&2&&(o.queryResult=a[1]),t.$set(o)},i(a){r||(d(t.$$.fragment,a),r=!0)},o(a){w(t.$$.fragment,a),r=!1},d(a){j(t,a)}}}function Fe(_){let t,r;return t=new ge({props:{queryID:"season_summary",queryResult:_[2]}}),{c(){Q(t.$$.fragment)},l(a){B(t.$$.fragment,a)},m(a,s){J(t,a,s),r=!0},p(a,s){const o={};s[0]&4&&(o.queryResult=a[2]),t.$set(o)},i(a){r||(d(t.$$.fragment,a),r=!0)},o(a){w(t.$$.fragment,a),r=!1},d(a){j(t,a)}}}function Ne(_){let t,r;return t=new ge({props:{queryID:"elo_latest",queryResult:_[3]}}),{c(){Q(t.$$.fragment)},l(a){B(t.$$.fragment,a)},m(a,s){J(t,a,s),r=!0},p(a,s){const o={};s[0]&8&&(o.queryResult=a[3]),t.$set(o)},i(a){r||(d(t.$$.fragment,a),r=!0)},o(a){w(t.$$.fragment,a),r=!1},d(a){j(t,a)}}}function De(_){let t,r;return t=new ge({props:{queryID:"most_recent_games",queryResult:_[4]}}),{c(){Q(t.$$.fragment)},l(a){B(t.$$.fragment,a)},m(a,s){J(t,a,s),r=!0},p(a,s){const o={};s[0]&16&&(o.queryResult=a[4]),t.$set(o)},i(a){r||(d(t.$$.fragment,a),r=!0)},o(a){w(t.$$.fragment,a),r=!1},d(a){j(t,a)}}}function Me(_){let t,r;return t=new ge({props:{queryID:"game_trend",queryResult:_[5]}}),{c(){Q(t.$$.fragment)},l(a){B(t.$$.fragment,a)},m(a,s){J(t,a,s),r=!0},p(a,s){const o={};s[0]&32&&(o.queryResult=a[5]),t.$set(o)},i(a){r||(d(t.$$.fragment,a),r=!0)},o(a){w(t.$$.fragment,a),r=!1},d(a){j(t,a)}}}function ia(_){var de;let t,r,a,s,o,i,l,g,S,I,C,O,se,Y,P,A,ne='<a href="#season-to-date-results">Season-to-date Results</a>',ee,V,X,$,z,U,ie,F,Z,N,ae,q,_e='<a href="#most-recent-games">Most Recent Games</a>',x,D,te,H=typeof f<"u"&&(f.title||((de=f.og)==null?void 0:de.title))&&f.hide_title!==!0&&ea();function oe(e,n){var m;return typeof f<"u"&&(f.title||(m=f.og)!=null&&m.title)?ta:aa}let W=oe()(_),M=typeof f=="object"&&ra(),E=_[1]&&$e(_),R=_[2]&&Fe(_),L=_[3]&&Ne(_),v=_[4]&&De(_),b=_[5]&&Me(_);return Y=new Ze({props:{data:_[1].filter(_[18]),column:"team"}}),V=new pe({props:{data:_[3].filter(_[19]),value:"elo_rating",comparison:"since_start_num1"}}),$=new pe({props:{data:_[2].filter(_[20]),value:"avg_wins",comparison:"elo_vs_vegas_num1"}}),U=new pe({props:{data:_[2].filter(_[21]),value:"seed_range",title:"Conf. Seed"}}),F=new pe({props:{data:_[2].filter(_[22]),value:"win_range"}}),N=new ze({props:{data:_[5].filter(_[23]),x:"week",y:"cumulative_elo_change_num0",title:"elo change over time",xMax:"12"}}),D=new Pe({props:{data:_[4].filter(_[24]),rows:"12"}}),{c(){H&&H.c(),t=y(),W.c(),r=T("meta"),a=T("meta"),M&&M.c(),s=Ee(),o=y(),E&&E.c(),i=y(),R&&R.c(),l=y(),L&&L.c(),g=y(),v&&v.c(),S=y(),b&&b.c(),I=y(),C=T("h1"),O=T("a"),se=Ie("Detailed Analysis for "),Q(Y.$$.fragment),P=y(),A=T("h2"),A.innerHTML=ne,ee=y(),Q(V.$$.fragment),X=y(),Q($.$$.fragment),z=y(),Q(U.$$.fragment),ie=y(),Q(F.$$.fragment),Z=y(),Q(N.$$.fragment),ae=y(),q=T("h3"),q.innerHTML=_e,x=y(),Q(D.$$.fragment),this.h()},l(e){H&&H.l(e),t=h(e);const n=He("svelte-1j2izld",document.head);W.l(n),r=k(n,"META",{name:!0,content:!0}),a=k(n,"META",{name:!0,content:!0}),M&&M.l(n),s=Ee(),n.forEach(c),o=h(e),E&&E.l(e),i=h(e),R&&R.l(e),l=h(e),L&&L.l(e),g=h(e),v&&v.l(e),S=h(e),b&&b.l(e),I=h(e),C=k(e,"H1",{class:!0,id:!0});var m=Re(C);O=k(m,"A",{href:!0});var re=Re(O);se=Ue(re,"Detailed Analysis for "),B(Y.$$.fragment,re),re.forEach(c),m.forEach(c),P=h(e),A=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Se(A)!=="svelte-5bljsu"&&(A.innerHTML=ne),ee=h(e),B(V.$$.fragment,e),X=h(e),B($.$$.fragment,e),z=h(e),B(U.$$.fragment,e),ie=h(e),B(F.$$.fragment,e),Z=h(e),B(N.$$.fragment,e),ae=h(e),q=k(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),Se(q)!=="svelte-efyf5h"&&(q.innerHTML=_e),x=h(e),B(D.$$.fragment,e),this.h()},h(){p(r,"name","twitter:card"),p(r,"content","summary"),p(a,"name","twitter:site"),p(a,"content","@evidence_dev"),p(O,"href","#detailed-analysis-for-value-dataall_teamsfilterd--dteamtouppercase--pageparamsncaaf_teamstouppercase-columnteam"),p(C,"class","markdown"),p(C,"id","detailed-analysis-for-value-dataall_teamsfilterd--dteamtouppercase--pageparamsncaaf_teamstouppercase-columnteam"),p(A,"class","markdown"),p(A,"id","season-to-date-results"),p(q,"class","markdown"),p(q,"id","most-recent-games")},m(e,n){H&&H.m(e,n),u(e,t,n),W.m(document.head,null),le(document.head,r),le(document.head,a),M&&M.m(document.head,null),le(document.head,s),u(e,o,n),E&&E.m(e,n),u(e,i,n),R&&R.m(e,n),u(e,l,n),L&&L.m(e,n),u(e,g,n),v&&v.m(e,n),u(e,S,n),b&&b.m(e,n),u(e,I,n),u(e,C,n),le(C,O),le(O,se),J(Y,O,null),u(e,P,n),u(e,A,n),u(e,ee,n),J(V,e,n),u(e,X,n),J($,e,n),u(e,z,n),J(U,e,n),u(e,ie,n),J(F,e,n),u(e,Z,n),J(N,e,n),u(e,ae,n),u(e,q,n),u(e,x,n),J(D,e,n),te=!0},p(e,n){var he;typeof f<"u"&&(f.title||(he=f.og)!=null&&he.title)&&f.hide_title!==!0&&H.p(e,n),W.p(e,n),typeof f=="object"&&M.p(e,n),e[1]?E?(E.p(e,n),n[0]&2&&d(E,1)):(E=$e(e),E.c(),d(E,1),E.m(i.parentNode,i)):E&&(ue(),w(E,1,1,()=>{E=null}),fe()),e[2]?R?(R.p(e,n),n[0]&4&&d(R,1)):(R=Fe(e),R.c(),d(R,1),R.m(l.parentNode,l)):R&&(ue(),w(R,1,1,()=>{R=null}),fe()),e[3]?L?(L.p(e,n),n[0]&8&&d(L,1)):(L=Ne(e),L.c(),d(L,1),L.m(g.parentNode,g)):L&&(ue(),w(L,1,1,()=>{L=null}),fe()),e[4]?v?(v.p(e,n),n[0]&16&&d(v,1)):(v=De(e),v.c(),d(v,1),v.m(S.parentNode,S)):v&&(ue(),w(v,1,1,()=>{v=null}),fe()),e[5]?b?(b.p(e,n),n[0]&32&&d(b,1)):(b=Me(e),b.c(),d(b,1),b.m(I.parentNode,I)):b&&(ue(),w(b,1,1,()=>{b=null}),fe());const m={};n[0]&3&&(m.data=e[1].filter(e[18])),Y.$set(m);const re={};n[0]&9&&(re.data=e[3].filter(e[19])),V.$set(re);const Le={};n[0]&5&&(Le.data=e[2].filter(e[20])),$.$set(Le);const ve={};n[0]&5&&(ve.data=e[2].filter(e[21])),U.$set(ve);const be={};n[0]&5&&(be.data=e[2].filter(e[22])),F.$set(be);const we={};n[0]&33&&(we.data=e[5].filter(e[23])),N.$set(we);const ye={};n[0]&17&&(ye.data=e[4].filter(e[24])),D.$set(ye)},i(e){te||(d(E),d(R),d(L),d(v),d(b),d(Y.$$.fragment,e),d(V.$$.fragment,e),d($.$$.fragment,e),d(U.$$.fragment,e),d(F.$$.fragment,e),d(N.$$.fragment,e),d(D.$$.fragment,e),te=!0)},o(e){w(E),w(R),w(L),w(v),w(b),w(Y.$$.fragment,e),w(V.$$.fragment,e),w($.$$.fragment,e),w(U.$$.fragment,e),w(F.$$.fragment,e),w(N.$$.fragment,e),w(D.$$.fragment,e),te=!1},d(e){e&&(c(t),c(o),c(i),c(l),c(g),c(S),c(I),c(C),c(P),c(A),c(ee),c(X),c(z),c(ie),c(Z),c(ae),c(q),c(x)),H&&H.d(e),W.d(e),c(r),c(a),M&&M.d(e),c(s),E&&E.d(e),R&&R.d(e),L&&L.d(e),v&&v.d(e),b&&b.d(e),j(Y),j(V,e),j($,e),j(U,e),j(F,e),j(N,e),j(D,e)}}}const f={queries:[{all_teams:"ncaaf/all_teams.sql"},{season_summary:"ncaaf/reg_season.sql"},{elo_latest:"ncaaf/elo_latest.sql"},{most_recent_games:"ncaaf/most_recent_games.sql"},{game_trend:"ncaaf/game_trend.sql"}]};function _a(_,t,r){let a,s;Ce(_,Xe,m=>r(0,a=m)),Ce(_,ke,m=>r(36,s=m));let{data:o}=t,{data:i={},customFormattingSettings:l,__db:g,inputs:S}=o;Qe(ke,s="06b3c3ac37f2ebda04db118624556ea5",s);let I=Ke(S);Ae(We,I),Be(I.subscribe(m=>S=m)),Ae(Ge,{getCustomFormats:()=>l.customFormats||[]});const C=(m,re)=>xe(g.query,m,{query_name:re});Ye(C);let O;const se=()=>{O||(O=setTimeout(()=>{Oe.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},Y=()=>{O?(clearTimeout(O),O=null):Oe.dismiss("LoadingToast")};Te(()=>(G.addEventListener("inFlightQueryStart",se),G.addEventListener("inFlightQueryEnd",Y),G.QueriesLoading&&se(),()=>{G.removeEventListener("inFlightQueryStart",se),G.removeEventListener("inFlightQueryEnd",Y)})),a.params,Te(()=>!0);let P={initialData:void 0,initialError:void 0},A=K`SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/ncaaf/teams/' || team as team_link
from src_ncaaf_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC`,ne=`SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/ncaaf/teams/' || team as team_link
from src_ncaaf_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC`;i.all_teams&&(i.all_teams instanceof Error?P.initialError=i.all_teams:P.initialData=i.all_teams);let ee;const V=G.createReactive({callback:m=>{r(1,ee=m)},execFn:C},{id:"all_teams",initialData:P.initialData,initialError:P.initialError});V(ne,{noResolve:A}),globalThis[Symbol.for("all_teams")]={get value(){return ee}};let X={initialData:void 0,initialError:void 0},$=K`select
  conf,
  team,
  avg_wins,
  elo_rating,
  win_range,
  seed_range,
  vegas_wins,
  record,
  elo_vs_vegas*-1 as elo_vs_vegas_num1,
  '/ncaaf/teams/' || team as team_link,
  COALESCE(first_round_bye / 10000.0,0) as first_round_bye_pct1,
  COALESCE((first_round_bye + made_postseason) / 10000.0,0) as make_playoffs_pct1
from src_ncaaf_reg_season_summary
order by conf, avg_wins desc`,z=`select
  conf,
  team,
  avg_wins,
  elo_rating,
  win_range,
  seed_range,
  vegas_wins,
  record,
  elo_vs_vegas*-1 as elo_vs_vegas_num1,
  '/ncaaf/teams/' || team as team_link,
  COALESCE(first_round_bye / 10000.0,0) as first_round_bye_pct1,
  COALESCE((first_round_bye + made_postseason) / 10000.0,0) as make_playoffs_pct1
from src_ncaaf_reg_season_summary
order by conf, avg_wins desc`;i.season_summary&&(i.season_summary instanceof Error?X.initialError=i.season_summary:X.initialData=i.season_summary);let U;const ie=G.createReactive({callback:m=>{r(2,U=m)},execFn:C},{id:"season_summary",initialData:X.initialData,initialError:X.initialError});ie(z,{noResolve:$}),globalThis[Symbol.for("season_summary")]={get value(){return U}};let F={initialData:void 0,initialError:void 0},Z=K`SELECT
    *,
    elo_rating - original_rating AS since_start_num1
FROM src_ncaaf_latest_elo`,N=`SELECT
    *,
    elo_rating - original_rating AS since_start_num1
FROM src_ncaaf_latest_elo`;i.elo_latest&&(i.elo_latest instanceof Error?F.initialError=i.elo_latest:F.initialData=i.elo_latest);let ae;const q=G.createReactive({callback:m=>{r(3,ae=m)},execFn:C},{id:"elo_latest",initialData:F.initialData,initialError:F.initialError});q(N,{noResolve:Z}),globalThis[Symbol.for("elo_latest")]={get value(){return ae}};let _e={initialData:void 0,initialError:void 0},x=K`SELECT
    RL.week_number as week,
    RL.visiting_team,
    '@' as " ",
    RL.home_team,
    RL.home_team_score::int || ' - ' || RL.visiting_team_score::int as score,
    RL.winning_team,
    ABS(AR.elo_change) AS elo_change_num1
FROM src_ncaaf_latest_results RL
LEFT JOIN src_ncaaf_elo_rollforward AR ON
    AR.game_id = RL.game_id
ORDER BY RL.week_number`,D=`SELECT
    RL.week_number as week,
    RL.visiting_team,
    '@' as " ",
    RL.home_team,
    RL.home_team_score::int || ' - ' || RL.visiting_team_score::int as score,
    RL.winning_team,
    ABS(AR.elo_change) AS elo_change_num1
FROM src_ncaaf_latest_results RL
LEFT JOIN src_ncaaf_elo_rollforward AR ON
    AR.game_id = RL.game_id
ORDER BY RL.week_number`;i.most_recent_games&&(i.most_recent_games instanceof Error?_e.initialError=i.most_recent_games:_e.initialData=i.most_recent_games);let te;const H=G.createReactive({callback:m=>{r(4,te=m)},execFn:C},{id:"most_recent_games",initialData:_e.initialData,initialError:_e.initialError});H(D,{noResolve:x}),globalThis[Symbol.for("most_recent_games")]={get value(){return te}};let oe={initialData:void 0,initialError:void 0},ce=K`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_ncaaf_ratings
UNION ALL
SELECT game_id, visiting_team as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_ncaaf_elo_rollforward
UNION ALL
SELECT game_id, home_team as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_ncaaf_elo_rollforward
 )
SELECT 
    COALESCE(AR.week_number,0) AS week,
    RL.team,
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.Week_number,0) asc rows between unbounded preceding and current row) as cumulative_elo_change_num0
FROM cte_games RL
LEFT JOIN src_ncaaf_schedules AR ON
    AR.game_id = RL.game_id`,W=`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_ncaaf_ratings
UNION ALL
SELECT game_id, visiting_team as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_ncaaf_elo_rollforward
UNION ALL
SELECT game_id, home_team as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_ncaaf_elo_rollforward
 )
SELECT 
    COALESCE(AR.week_number,0) AS week,
    RL.team,
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.Week_number,0) asc rows between unbounded preceding and current row) as cumulative_elo_change_num0
FROM cte_games RL
LEFT JOIN src_ncaaf_schedules AR ON
    AR.game_id = RL.game_id`;i.game_trend&&(i.game_trend instanceof Error?oe.initialError=i.game_trend:oe.initialData=i.game_trend);let M;const E=G.createReactive({callback:m=>{r(5,M=m)},execFn:C},{id:"game_trend",initialData:oe.initialData,initialError:oe.initialError});E(W,{noResolve:ce}),globalThis[Symbol.for("game_trend")]={get value(){return M}};const R=m=>m.team.toUpperCase()===a.params.ncaaf_teams.toUpperCase(),L=m=>m.team.toUpperCase()===a.params.ncaaf_teams.toUpperCase(),v=m=>m.team.toUpperCase()===a.params.ncaaf_teams.toUpperCase(),b=m=>m.team.toUpperCase()===a.params.ncaaf_teams.toUpperCase(),de=m=>m.team.toUpperCase()===a.params.ncaaf_teams.toUpperCase(),e=m=>m.team.toUpperCase()===a.params.ncaaf_teams.toUpperCase(),n=m=>m.home_team.toUpperCase()===a.params.ncaaf_teams.toUpperCase()|m.visiting_team.toUpperCase()===a.params.ncaaf_teams.toUpperCase();return _.$$set=m=>{"data"in m&&r(6,o=m.data)},_.$$.update=()=>{_.$$.dirty[0]&64&&r(7,{data:i={},customFormattingSettings:l,__db:g}=o,i),_.$$.dirty[0]&128&&Ve.set(Object.keys(i).length>0),_.$$.dirty[0]&1&&a.params,_.$$.dirty[0]&768&&V(ne,{noResolve:A}),_.$$.dirty[0]&3072&&ie(z,{noResolve:$}),_.$$.dirty[0]&12288&&q(N,{noResolve:Z}),_.$$.dirty[0]&49152&&H(D,{noResolve:x}),_.$$.dirty[0]&196608&&E(W,{noResolve:ce})},r(8,A=K`SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/ncaaf/teams/' || team as team_link
from src_ncaaf_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC`),r(9,ne=`SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/ncaaf/teams/' || team as team_link
from src_ncaaf_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC`),r(10,$=K`select
  conf,
  team,
  avg_wins,
  elo_rating,
  win_range,
  seed_range,
  vegas_wins,
  record,
  elo_vs_vegas*-1 as elo_vs_vegas_num1,
  '/ncaaf/teams/' || team as team_link,
  COALESCE(first_round_bye / 10000.0,0) as first_round_bye_pct1,
  COALESCE((first_round_bye + made_postseason) / 10000.0,0) as make_playoffs_pct1
from src_ncaaf_reg_season_summary
order by conf, avg_wins desc`),r(11,z=`select
  conf,
  team,
  avg_wins,
  elo_rating,
  win_range,
  seed_range,
  vegas_wins,
  record,
  elo_vs_vegas*-1 as elo_vs_vegas_num1,
  '/ncaaf/teams/' || team as team_link,
  COALESCE(first_round_bye / 10000.0,0) as first_round_bye_pct1,
  COALESCE((first_round_bye + made_postseason) / 10000.0,0) as make_playoffs_pct1
from src_ncaaf_reg_season_summary
order by conf, avg_wins desc`),r(12,Z=K`SELECT
    *,
    elo_rating - original_rating AS since_start_num1
FROM src_ncaaf_latest_elo`),r(13,N=`SELECT
    *,
    elo_rating - original_rating AS since_start_num1
FROM src_ncaaf_latest_elo`),r(14,x=K`SELECT
    RL.week_number as week,
    RL.visiting_team,
    '@' as " ",
    RL.home_team,
    RL.home_team_score::int || ' - ' || RL.visiting_team_score::int as score,
    RL.winning_team,
    ABS(AR.elo_change) AS elo_change_num1
FROM src_ncaaf_latest_results RL
LEFT JOIN src_ncaaf_elo_rollforward AR ON
    AR.game_id = RL.game_id
ORDER BY RL.week_number`),r(15,D=`SELECT
    RL.week_number as week,
    RL.visiting_team,
    '@' as " ",
    RL.home_team,
    RL.home_team_score::int || ' - ' || RL.visiting_team_score::int as score,
    RL.winning_team,
    ABS(AR.elo_change) AS elo_change_num1
FROM src_ncaaf_latest_results RL
LEFT JOIN src_ncaaf_elo_rollforward AR ON
    AR.game_id = RL.game_id
ORDER BY RL.week_number`),r(16,ce=K`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_ncaaf_ratings
UNION ALL
SELECT game_id, visiting_team as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_ncaaf_elo_rollforward
UNION ALL
SELECT game_id, home_team as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_ncaaf_elo_rollforward
 )
SELECT 
    COALESCE(AR.week_number,0) AS week,
    RL.team,
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.Week_number,0) asc rows between unbounded preceding and current row) as cumulative_elo_change_num0
FROM cte_games RL
LEFT JOIN src_ncaaf_schedules AR ON
    AR.game_id = RL.game_id`),r(17,W=`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_ncaaf_ratings
UNION ALL
SELECT game_id, visiting_team as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_ncaaf_elo_rollforward
UNION ALL
SELECT game_id, home_team as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_ncaaf_elo_rollforward
 )
SELECT 
    COALESCE(AR.week_number,0) AS week,
    RL.team,
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.Week_number,0) asc rows between unbounded preceding and current row) as cumulative_elo_change_num0
FROM cte_games RL
LEFT JOIN src_ncaaf_schedules AR ON
    AR.game_id = RL.game_id`),[a,ee,U,ae,te,M,o,i,A,ne,$,z,Z,N,x,D,ce,W,R,L,v,b,de,e,n]}class wa extends Je{constructor(t){super(),je(this,t,_a,ia,qe,{data:6},null,[-1,-1])}}export{wa as component};
