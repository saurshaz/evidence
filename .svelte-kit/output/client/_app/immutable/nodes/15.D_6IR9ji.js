import{s as Re,a as d,e as P,b as x,c as R,h as ve,d as V,f as l,g as oe,i as M,j as u,k as se,l as le,m as ye,o as fe,p as Oe,q as ce,t as be,r as he,u as Se,n as j}from"../chunks/scheduler.BVCo5HCX.js";import{S as Ce,i as Ae,c as b,a as h,m as S,t as g,b as $,d as ae,e as C,g as ne}from"../chunks/index.C9mGAhn_.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.ZGqga9CZ.js";import{s as Te,Q as J,p as ke,r as ue,t as pe}from"../chunks/index.C8RIryS8.js";import{h as G}from"../chunks/setTrackProxy.Cl20Y9Hv.js";import{I as Ne,C as Be}from"../chunks/globalContexts.1hDlTDmj.js";import{w as De}from"../chunks/entry.BCF5SsRs.js";import{D as de,C as F}from"../chunks/DataTable.BKISIfxk.js";import{p as Le}from"../chunks/stores.C2AzUxyb.js";import{p as Me}from"../chunks/profile.BW8tN6E9.js";import{B as He,a as Ue}from"../chunks/ButtonGroup.EQV9VhhY.js";import{Q as ie}from"../chunks/QueryViewer.CwykzcKw.js";function Fe(o){var i;let a,s=(E.title??((i=E.og)==null?void 0:i.title))+"",t;return{c(){a=P("h1"),t=be(s),this.h()},l(r){a=V(r,"H1",{class:!0});var m=he(a);t=Se(m,s),m.forEach(l),this.h()},h(){M(a,"class","title")},m(r,m){u(r,a,m),se(a,t)},p:j,d(r){r&&l(a)}}}function Ie(o){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:j,p:j,d:j}}function Ye(o){var m;let a,s,t,i,r;return document.title=a=E.title??((m=E.og)==null?void 0:m.title),{c(){s=d(),t=P("meta"),i=d(),r=P("meta"),this.h()},l(_){s=R(_),t=V(_,"META",{property:!0,content:!0}),i=R(_),r=V(_,"META",{name:!0,content:!0}),this.h()},h(){var _,p;M(t,"property","og:title"),M(t,"content",((_=E.og)==null?void 0:_.title)??E.title),M(r,"name","twitter:title"),M(r,"content",((p=E.og)==null?void 0:p.title)??E.title)},m(_,p){u(_,s,p),u(_,t,p),u(_,i,p),u(_,r,p)},p(_,p){var w;p&0&&a!==(a=E.title??((w=E.og)==null?void 0:w.title))&&(document.title=a)},d(_){_&&(l(s),l(t),l(i),l(r))}}}function qe(o){var r,m;let a,s,t=(E.description||((r=E.og)==null?void 0:r.description))&&Ke(),i=((m=E.og)==null?void 0:m.image)&&Pe();return{c(){t&&t.c(),a=d(),i&&i.c(),s=x()},l(_){t&&t.l(_),a=R(_),i&&i.l(_),s=x()},m(_,p){t&&t.m(_,p),u(_,a,p),i&&i.m(_,p),u(_,s,p)},p(_,p){var w,U;(E.description||(w=E.og)!=null&&w.description)&&t.p(_,p),(U=E.og)!=null&&U.image&&i.p(_,p)},d(_){_&&(l(a),l(s)),t&&t.d(_),i&&i.d(_)}}}function Ke(o){let a,s,t,i,r;return{c(){a=P("meta"),s=d(),t=P("meta"),i=d(),r=P("meta"),this.h()},l(m){a=V(m,"META",{name:!0,content:!0}),s=R(m),t=V(m,"META",{property:!0,content:!0}),i=R(m),r=V(m,"META",{name:!0,content:!0}),this.h()},h(){var m,_,p;M(a,"name","description"),M(a,"content",E.description??((m=E.og)==null?void 0:m.description)),M(t,"property","og:description"),M(t,"content",((_=E.og)==null?void 0:_.description)??E.description),M(r,"name","twitter:description"),M(r,"content",((p=E.og)==null?void 0:p.description)??E.description)},m(m,_){u(m,a,_),u(m,s,_),u(m,t,_),u(m,i,_),u(m,r,_)},p:j,d(m){m&&(l(a),l(s),l(t),l(i),l(r))}}}function Pe(o){let a,s,t;return{c(){a=P("meta"),s=d(),t=P("meta"),this.h()},l(i){a=V(i,"META",{property:!0,content:!0}),s=R(i),t=V(i,"META",{name:!0,content:!0}),this.h()},h(){var i,r;M(a,"property","og:image"),M(a,"content",(i=E.og)==null?void 0:i.image),M(t,"name","twitter:image"),M(t,"content",(r=E.og)==null?void 0:r.image)},m(i,r){u(i,a,r),u(i,s,r),u(i,t,r)},p:j,d(i){i&&(l(a),l(s),l(t))}}}function ge(o){let a,s;return a=new ie({props:{queryID:"reg_season",queryResult:o[1]}}),{c(){b(a.$$.fragment)},l(t){h(a.$$.fragment,t)},m(t,i){S(a,t,i),s=!0},p(t,i){const r={};i[0]&2&&(r.queryResult=t[1]),a.$set(r)},i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){C(a,t)}}}function we(o){let a,s;return a=new ie({props:{queryID:"standings",queryResult:o[2]}}),{c(){b(a.$$.fragment)},l(t){h(a.$$.fragment,t)},m(t,i){S(a,t,i),s=!0},p(t,i){const r={};i[0]&4&&(r.queryResult=t[2]),a.$set(r)},i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){C(a,t)}}}function Ee(o){let a,s;return a=new ie({props:{queryID:"summary_by_team",queryResult:o[3]}}),{c(){b(a.$$.fragment)},l(t){h(a.$$.fragment,t)},m(t,i){S(a,t,i),s=!0},p(t,i){const r={};i[0]&8&&(r.queryResult=t[3]),a.$set(r)},i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){C(a,t)}}}function $e(o){let a,s;return a=new ie({props:{queryID:"filtered_summary_by_team",queryResult:o[4]}}),{c(){b(a.$$.fragment)},l(t){h(a.$$.fragment,t)},m(t,i){S(a,t,i),s=!0},p(t,i){const r={};i[0]&16&&(r.queryResult=t[4]),a.$set(r)},i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){C(a,t)}}}function Ve(o){let a,s;return a=new Ue({props:{valueLabel:"All",value:"%",default:!0}}),{c(){b(a.$$.fragment)},l(t){h(a.$$.fragment,t)},m(t,i){S(a,t,i),s=!0},p:j,i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){C(a,t)}}}function We(o){let a,s;return a=new de({props:{data:o[3],link:"team_link",rows:"30",$$slots:{default:[Je]},$$scope:{ctx:o}}}),{c(){b(a.$$.fragment)},l(t){h(a.$$.fragment,t)},m(t,i){S(a,t,i),s=!0},p(t,i){const r={};i[0]&8&&(r.data=t[3]),i[1]&16&&(r.$$scope={dirty:i,ctx:t}),a.$set(r)},i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){C(a,t)}}}function Qe(o){let a,s;return a=new de({props:{data:o[4],link:"team_link",rows:"30",$$slots:{default:[je]},$$scope:{ctx:o}}}),{c(){b(a.$$.fragment)},l(t){h(a.$$.fragment,t)},m(t,i){S(a,t,i),s=!0},p(t,i){const r={};i[0]&16&&(r.data=t[4]),i[1]&16&&(r.$$scope={dirty:i,ctx:t}),a.$set(r)},i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){C(a,t)}}}function Je(o){let a,s,t,i,r,m,_,p,w,U,y,A,H,I,v,D,T,O;return a=new F({props:{id:"seed"}}),t=new F({props:{id:" ",contentType:"image",height:"25px"}}),r=new F({props:{id:"team"}}),_=new F({props:{id:"record"}}),w=new F({props:{id:"elo_rating"}}),y=new F({props:{id:"avg_wins"}}),H=new F({props:{id:"elo_vs_vegas_num1",contentType:"delta"}}),v=new F({props:{id:"make_playoffs_pct1"}}),T=new F({props:{id:"win_finals_pct1"}}),{c(){b(a.$$.fragment),s=d(),b(t.$$.fragment),i=d(),b(r.$$.fragment),m=d(),b(_.$$.fragment),p=d(),b(w.$$.fragment),U=d(),b(y.$$.fragment),A=d(),b(H.$$.fragment),I=d(),b(v.$$.fragment),D=d(),b(T.$$.fragment)},l(e){h(a.$$.fragment,e),s=R(e),h(t.$$.fragment,e),i=R(e),h(r.$$.fragment,e),m=R(e),h(_.$$.fragment,e),p=R(e),h(w.$$.fragment,e),U=R(e),h(y.$$.fragment,e),A=R(e),h(H.$$.fragment,e),I=R(e),h(v.$$.fragment,e),D=R(e),h(T.$$.fragment,e)},m(e,f){S(a,e,f),u(e,s,f),S(t,e,f),u(e,i,f),S(r,e,f),u(e,m,f),S(_,e,f),u(e,p,f),S(w,e,f),u(e,U,f),S(y,e,f),u(e,A,f),S(H,e,f),u(e,I,f),S(v,e,f),u(e,D,f),S(T,e,f),O=!0},p:j,i(e){O||(g(a.$$.fragment,e),g(t.$$.fragment,e),g(r.$$.fragment,e),g(_.$$.fragment,e),g(w.$$.fragment,e),g(y.$$.fragment,e),g(H.$$.fragment,e),g(v.$$.fragment,e),g(T.$$.fragment,e),O=!0)},o(e){$(a.$$.fragment,e),$(t.$$.fragment,e),$(r.$$.fragment,e),$(_.$$.fragment,e),$(w.$$.fragment,e),$(y.$$.fragment,e),$(H.$$.fragment,e),$(v.$$.fragment,e),$(T.$$.fragment,e),O=!1},d(e){e&&(l(s),l(i),l(m),l(p),l(U),l(A),l(I),l(D)),C(a,e),C(t,e),C(r,e),C(_,e),C(w,e),C(y,e),C(H,e),C(v,e),C(T,e)}}}function je(o){let a,s,t,i,r,m,_,p,w,U,y,A,H,I,v,D,T,O;return a=new F({props:{id:"seed"}}),t=new F({props:{id:" ",contentType:"image",height:"25px"}}),r=new F({props:{id:"team"}}),_=new F({props:{id:"record"}}),w=new F({props:{id:"elo_rating"}}),y=new F({props:{id:"avg_wins"}}),H=new F({props:{id:"elo_vs_vegas_num1",contentType:"delta"}}),v=new F({props:{id:"make_playoffs_pct1"}}),T=new F({props:{id:"win_finals_pct1"}}),{c(){b(a.$$.fragment),s=d(),b(t.$$.fragment),i=d(),b(r.$$.fragment),m=d(),b(_.$$.fragment),p=d(),b(w.$$.fragment),U=d(),b(y.$$.fragment),A=d(),b(H.$$.fragment),I=d(),b(v.$$.fragment),D=d(),b(T.$$.fragment)},l(e){h(a.$$.fragment,e),s=R(e),h(t.$$.fragment,e),i=R(e),h(r.$$.fragment,e),m=R(e),h(_.$$.fragment,e),p=R(e),h(w.$$.fragment,e),U=R(e),h(y.$$.fragment,e),A=R(e),h(H.$$.fragment,e),I=R(e),h(v.$$.fragment,e),D=R(e),h(T.$$.fragment,e)},m(e,f){S(a,e,f),u(e,s,f),S(t,e,f),u(e,i,f),S(r,e,f),u(e,m,f),S(_,e,f),u(e,p,f),S(w,e,f),u(e,U,f),S(y,e,f),u(e,A,f),S(H,e,f),u(e,I,f),S(v,e,f),u(e,D,f),S(T,e,f),O=!0},p:j,i(e){O||(g(a.$$.fragment,e),g(t.$$.fragment,e),g(r.$$.fragment,e),g(_.$$.fragment,e),g(w.$$.fragment,e),g(y.$$.fragment,e),g(H.$$.fragment,e),g(v.$$.fragment,e),g(T.$$.fragment,e),O=!0)},o(e){$(a.$$.fragment,e),$(t.$$.fragment,e),$(r.$$.fragment,e),$(_.$$.fragment,e),$(w.$$.fragment,e),$(y.$$.fragment,e),$(H.$$.fragment,e),$(v.$$.fragment,e),$(T.$$.fragment,e),O=!1},d(e){e&&(l(s),l(i),l(m),l(p),l(U),l(A),l(I),l(D)),C(a,e),C(t,e),C(r,e),C(_,e),C(w,e),C(y,e),C(H,e),C(v,e),C(T,e)}}}function Ge(o){var te;let a,s,t,i,r,m,_,p,w,U='<a href="#team-browser">Team Browser</a>',y,A,H='<a href="#select-a-conference">Select a conference</a>',I,v,D,T,O,e,f,Q,Y=typeof E<"u"&&(E.title||((te=E.og)==null?void 0:te.title))&&E.hide_title!==!0&&Fe();function ee(n,c){var Z;return typeof E<"u"&&(E.title||(Z=E.og)!=null&&Z.title)?Ye:Ie}let W=ee()(o),q=typeof E=="object"&&qe(),k=o[1]&&ge(o),B=o[2]&&we(o),L=o[3]&&Ee(o),N=o[4]&&$e(o);D=new He({props:{data:o[3],name:"conference",value:"conf",$$slots:{default:[Ve]},$$scope:{ctx:o}}});const X=[Qe,We],K=[];function z(n,c){return n[0].conference!="null"?0:1}return O=z(o),e=K[O]=X[O](o),{c(){Y&&Y.c(),a=d(),W.c(),s=P("meta"),t=P("meta"),q&&q.c(),i=x(),r=d(),k&&k.c(),m=d(),B&&B.c(),_=d(),L&&L.c(),p=d(),w=P("h1"),w.innerHTML=U,y=d(),A=P("h2"),A.innerHTML=H,I=d(),N&&N.c(),v=d(),b(D.$$.fragment),T=d(),e.c(),f=x(),this.h()},l(n){Y&&Y.l(n),a=R(n);const c=ve("svelte-1j2izld",document.head);W.l(c),s=V(c,"META",{name:!0,content:!0}),t=V(c,"META",{name:!0,content:!0}),q&&q.l(c),i=x(),c.forEach(l),r=R(n),k&&k.l(n),m=R(n),B&&B.l(n),_=R(n),L&&L.l(n),p=R(n),w=V(n,"H1",{class:!0,id:!0,"data-svelte-h":!0}),oe(w)!=="svelte-6botrr"&&(w.innerHTML=U),y=R(n),A=V(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(A)!=="svelte-khbmdt"&&(A.innerHTML=H),I=R(n),N&&N.l(n),v=R(n),h(D.$$.fragment,n),T=R(n),e.l(n),f=x(),this.h()},h(){M(s,"name","twitter:card"),M(s,"content","summary"),M(t,"name","twitter:site"),M(t,"content","@evidence_dev"),M(w,"class","markdown"),M(w,"id","team-browser"),M(A,"class","markdown"),M(A,"id","select-a-conference")},m(n,c){Y&&Y.m(n,c),u(n,a,c),W.m(document.head,null),se(document.head,s),se(document.head,t),q&&q.m(document.head,null),se(document.head,i),u(n,r,c),k&&k.m(n,c),u(n,m,c),B&&B.m(n,c),u(n,_,c),L&&L.m(n,c),u(n,p,c),u(n,w,c),u(n,y,c),u(n,A,c),u(n,I,c),N&&N.m(n,c),u(n,v,c),S(D,n,c),u(n,T,c),K[O].m(n,c),u(n,f,c),Q=!0},p(n,c){var me;typeof E<"u"&&(E.title||(me=E.og)!=null&&me.title)&&E.hide_title!==!0&&Y.p(n,c),W.p(n,c),typeof E=="object"&&q.p(n,c),n[1]?k?(k.p(n,c),c[0]&2&&g(k,1)):(k=ge(n),k.c(),g(k,1),k.m(m.parentNode,m)):k&&(ne(),$(k,1,1,()=>{k=null}),ae()),n[2]?B?(B.p(n,c),c[0]&4&&g(B,1)):(B=we(n),B.c(),g(B,1),B.m(_.parentNode,_)):B&&(ne(),$(B,1,1,()=>{B=null}),ae()),n[3]?L?(L.p(n,c),c[0]&8&&g(L,1)):(L=Ee(n),L.c(),g(L,1),L.m(p.parentNode,p)):L&&(ne(),$(L,1,1,()=>{L=null}),ae()),n[4]?N?(N.p(n,c),c[0]&16&&g(N,1)):(N=$e(n),N.c(),g(N,1),N.m(v.parentNode,v)):N&&(ne(),$(N,1,1,()=>{N=null}),ae());const Z={};c[0]&8&&(Z.data=n[3]),c[1]&16&&(Z.$$scope={dirty:c,ctx:n}),D.$set(Z);let _e=O;O=z(n),O===_e?K[O].p(n,c):(ne(),$(K[_e],1,1,()=>{K[_e]=null}),ae(),e=K[O],e?e.p(n,c):(e=K[O]=X[O](n),e.c()),g(e,1),e.m(f.parentNode,f))},i(n){Q||(g(k),g(B),g(L),g(N),g(D.$$.fragment,n),g(e),Q=!0)},o(n){$(k),$(B),$(L),$(N),$(D.$$.fragment,n),$(e),Q=!1},d(n){n&&(l(a),l(r),l(m),l(_),l(p),l(w),l(y),l(A),l(I),l(v),l(T),l(f)),Y&&Y.d(n),W.d(n),l(s),l(t),q&&q.d(n),l(i),k&&k.d(n),B&&B.d(n),L&&L.d(n),N&&N.d(n),C(D,n),K[O].d(n)}}}const E={queries:[{reg_season:"nba/reg_season.sql"},{standings:"nba/standings.sql"},{summary_by_team:"nba/summary_by_team.sql"}]};function Xe(o,a,s){let t,i;le(o,Le,n=>s(15,t=n)),le(o,ue,n=>s(25,i=n));let{data:r}=a,{data:m={},customFormattingSettings:_,__db:p,inputs:w}=r;ye(ue,i="35191ca311a2aea7c4e423ef2fe335ca",i);let U=De(w);fe(Ne,U),Oe(U.subscribe(n=>s(0,w=n))),fe(Be,{getCustomFormats:()=>_.customFormats||[]});const y=(n,c)=>Me(p.query,n,{query_name:c});Te(y);let A;const H=()=>{A||(A=setTimeout(()=>{pe.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},I=()=>{A?(clearTimeout(A),A=null):pe.dismiss("LoadingToast")};ce(()=>(J.addEventListener("inFlightQueryStart",H),J.addEventListener("inFlightQueryEnd",I),J.QueriesLoading&&H(),()=>{J.removeEventListener("inFlightQueryStart",H),J.removeEventListener("inFlightQueryEnd",I)})),t.params,ce(()=>!0);let v={initialData:void 0,initialError:void 0},D=G`select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc`,T=`select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc`;m.reg_season&&(m.reg_season instanceof Error?v.initialError=m.reg_season:v.initialData=m.reg_season);let O;const e=J.createReactive({callback:n=>{s(1,O=n)},execFn:y},{id:"reg_season",initialData:v.initialData,initialError:v.initialError});e(T,{noResolve:D}),globalThis[Symbol.for("reg_season")]={get value(){return O}};let f={initialData:void 0,initialError:void 0},Q=G`SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched`,Y=`SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched`;m.standings&&(m.standings instanceof Error?f.initialError=m.standings:f.initialData=m.standings);let ee;const re=J.createReactive({callback:n=>{s(2,ee=n)},execFn:y},{id:"standings",initialData:f.initialData,initialError:f.initialError});re(Y,{noResolve:Q}),globalThis[Symbol.for("standings")]={get value(){return ee}};let W={initialData:void 0,initialError:void 0},q=G`select
  ROW_NUMBER() OVER (PARTITION BY conf ORDER BY avg_wins DESC) AS seed,
  ROW_NUMBER() OVER (ORDER BY elo_rating DESC) AS elo_rank,
  '/nba/teams/' || R.team as team_link,
  R.team,
  R." ",
  S.record,
  elo_rating,
  avg_wins,
  make_playoffs_pct1,
  win_finals_pct1,
  conf,
  elo_vs_vegas as elo_vs_vegas_num1
FROM (select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc) R
LEFT JOIN (SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched) S ON S.team = R.team
ORDER BY avg_wins DESC`,k=`select
  ROW_NUMBER() OVER (PARTITION BY conf ORDER BY avg_wins DESC) AS seed,
  ROW_NUMBER() OVER (ORDER BY elo_rating DESC) AS elo_rank,
  '/nba/teams/' || R.team as team_link,
  R.team,
  R." ",
  S.record,
  elo_rating,
  avg_wins,
  make_playoffs_pct1,
  win_finals_pct1,
  conf,
  elo_vs_vegas as elo_vs_vegas_num1
FROM (select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc) R
LEFT JOIN (SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched) S ON S.team = R.team
ORDER BY avg_wins DESC`;m.summary_by_team&&(m.summary_by_team instanceof Error?W.initialError=m.summary_by_team:W.initialData=m.summary_by_team);let B;const L=J.createReactive({callback:n=>{s(3,B=n)},execFn:y},{id:"summary_by_team",initialData:W.initialData,initialError:W.initialError});L(k,{noResolve:q}),globalThis[Symbol.for("summary_by_team")]={get value(){return B}};let N={initialData:void 0,initialError:void 0},X=G`select * 
    from (select
  ROW_NUMBER() OVER (PARTITION BY conf ORDER BY avg_wins DESC) AS seed,
  ROW_NUMBER() OVER (ORDER BY elo_rating DESC) AS elo_rank,
  '/nba/teams/' || R.team as team_link,
  R.team,
  R." ",
  S.record,
  elo_rating,
  avg_wins,
  make_playoffs_pct1,
  win_finals_pct1,
  conf,
  elo_vs_vegas as elo_vs_vegas_num1
FROM (select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc) R
LEFT JOIN (SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched) S ON S.team = R.team
ORDER BY avg_wins DESC)
    where conf like '${w.conference}'`,K=`select * 
    from (select
  ROW_NUMBER() OVER (PARTITION BY conf ORDER BY avg_wins DESC) AS seed,
  ROW_NUMBER() OVER (ORDER BY elo_rating DESC) AS elo_rank,
  '/nba/teams/' || R.team as team_link,
  R.team,
  R." ",
  S.record,
  elo_rating,
  avg_wins,
  make_playoffs_pct1,
  win_finals_pct1,
  conf,
  elo_vs_vegas as elo_vs_vegas_num1
FROM (select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc) R
LEFT JOIN (SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched) S ON S.team = R.team
ORDER BY avg_wins DESC)
    where conf like '${w.conference}'`;m.filtered_summary_by_team&&(m.filtered_summary_by_team instanceof Error?N.initialError=m.filtered_summary_by_team:N.initialData=m.filtered_summary_by_team);let z;const te=J.createReactive({callback:n=>{s(4,z=n)},execFn:y},{id:"filtered_summary_by_team",initialData:N.initialData,initialError:N.initialError});return te(K,{noResolve:X}),globalThis[Symbol.for("filtered_summary_by_team")]={get value(){return z}},o.$$set=n=>{"data"in n&&s(5,r=n.data)},o.$$.update=()=>{o.$$.dirty[0]&32&&s(6,{data:m={},customFormattingSettings:_,__db:p}=r,m),o.$$.dirty[0]&64&&ke.set(Object.keys(m).length>0),o.$$.dirty[0]&32768&&t.params,o.$$.dirty[0]&384&&e(T,{noResolve:D}),o.$$.dirty[0]&1536&&re(Y,{noResolve:Q}),o.$$.dirty[0]&6144&&L(k,{noResolve:q}),o.$$.dirty[0]&1&&s(13,X=G`select * 
    from (select
  ROW_NUMBER() OVER (PARTITION BY conf ORDER BY avg_wins DESC) AS seed,
  ROW_NUMBER() OVER (ORDER BY elo_rating DESC) AS elo_rank,
  '/nba/teams/' || R.team as team_link,
  R.team,
  R." ",
  S.record,
  elo_rating,
  avg_wins,
  make_playoffs_pct1,
  win_finals_pct1,
  conf,
  elo_vs_vegas as elo_vs_vegas_num1
FROM (select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc) R
LEFT JOIN (SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched) S ON S.team = R.team
ORDER BY avg_wins DESC)
    where conf like '${w.conference}'`),o.$$.dirty[0]&1&&s(14,K=`select * 
    from (select
  ROW_NUMBER() OVER (PARTITION BY conf ORDER BY avg_wins DESC) AS seed,
  ROW_NUMBER() OVER (ORDER BY elo_rating DESC) AS elo_rank,
  '/nba/teams/' || R.team as team_link,
  R.team,
  R." ",
  S.record,
  elo_rating,
  avg_wins,
  make_playoffs_pct1,
  win_finals_pct1,
  conf,
  elo_vs_vegas as elo_vs_vegas_num1
FROM (select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc) R
LEFT JOIN (SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched) S ON S.team = R.team
ORDER BY avg_wins DESC)
    where conf like '${w.conference}'`),o.$$.dirty[0]&24576&&te(K,{noResolve:X})},s(7,D=G`select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc`),s(8,T=`select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc`),s(9,Q=G`SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched`),s(10,Y=`SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched`),s(11,q=G`select
  ROW_NUMBER() OVER (PARTITION BY conf ORDER BY avg_wins DESC) AS seed,
  ROW_NUMBER() OVER (ORDER BY elo_rating DESC) AS elo_rank,
  '/nba/teams/' || R.team as team_link,
  R.team,
  R." ",
  S.record,
  elo_rating,
  avg_wins,
  make_playoffs_pct1,
  win_finals_pct1,
  conf,
  elo_vs_vegas as elo_vs_vegas_num1
FROM (select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc) R
LEFT JOIN (SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched) S ON S.team = R.team
ORDER BY avg_wins DESC`),s(12,k=`select
  ROW_NUMBER() OVER (PARTITION BY conf ORDER BY avg_wins DESC) AS seed,
  ROW_NUMBER() OVER (ORDER BY elo_rating DESC) AS elo_rank,
  '/nba/teams/' || R.team as team_link,
  R.team,
  R." ",
  S.record,
  elo_rating,
  avg_wins,
  make_playoffs_pct1,
  win_finals_pct1,
  conf,
  elo_vs_vegas as elo_vs_vegas_num1
FROM (select
  conf,
  team,
  case 
    when team = 'CHO' then 'CHA'
    when team = 'BRK' then 'BKN'
    when team = 'NOP' then 'NO'
    when team = 'UTA' then 'UTAH'
    else team
  end as team_espn_code,
  'https://secure.espn.com/combiner/i?img=/i/teamlogos/nba/500/' || team_espn_code || '.png&w=56&h=56' as " ",
  elo_rating,
  avg_wins,
  COALESCE(made_playoffs / 10000.0,0) as make_playoffs_pct1,
  COALESCE(won_finals / 10000.0,0) as win_finals_pct1,
  elo_vs_vegas *-1 as elo_vs_vegas
from src_season_summary
order by conf, avg_wins desc) R
LEFT JOIN (SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched) S ON S.team = R.team
ORDER BY avg_wins DESC`),[w,O,ee,B,z,r,m,D,T,Q,Y,q,k,X,K,t]}class ot extends Ce{constructor(a){super(),Ae(this,a,Xe,Ge,Re,{data:5},null,[-1,-1])}}export{ot as component};
