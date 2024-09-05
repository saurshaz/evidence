import{s as Ee,a as y,e as H,b as J,c as b,h as pe,d as I,f as l,g as te,i as R,j as g,k as x,l as ie,m as de,o as oe,p as $e,q as _e,t as we,r as ve,u as Re,n as j}from"../chunks/scheduler.BVCo5HCX.js";import{S as ye,i as be,c as L,a as T,m as N,t as d,b as D,d as ne,e as A,g as ae}from"../chunks/index.C9mGAhn_.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.ZGqga9CZ.js";import{s as Se,Q as V,p as Ce,r as le,t as me}from"../chunks/index.C8RIryS8.js";import{h as P}from"../chunks/setTrackProxy.Cl20Y9Hv.js";import{I as De,C as ke}from"../chunks/globalContexts.1hDlTDmj.js";import{w as Oe}from"../chunks/entry.BCF5SsRs.js";import{D as fe,C as q}from"../chunks/DataTable.BKISIfxk.js";import{p as Le}from"../chunks/stores.C2AzUxyb.js";import{p as Te}from"../chunks/profile.BW8tN6E9.js";import{Q as re}from"../chunks/QueryViewer.CwykzcKw.js";function Ne(u){var s;let n,r=(c.title??((s=c.og)==null?void 0:s.title))+"",e;return{c(){n=H("h1"),e=we(r),this.h()},l(o){n=I(o,"H1",{class:!0});var _=ve(n);e=Re(_,r),_.forEach(l),this.h()},h(){R(n,"class","title")},m(o,_){g(o,n,_),x(n,e)},p:j,d(o){o&&l(n)}}}function Ae(u){return{c(){this.h()},l(n){this.h()},h(){document.title="Evidence"},m:j,p:j,d:j}}function Fe(u){var _;let n,r,e,s,o;return document.title=n=c.title??((_=c.og)==null?void 0:_.title),{c(){r=y(),e=H("meta"),s=y(),o=H("meta"),this.h()},l(i){r=b(i),e=I(i,"META",{property:!0,content:!0}),s=b(i),o=I(i,"META",{name:!0,content:!0}),this.h()},h(){var i,f;R(e,"property","og:title"),R(e,"content",((i=c.og)==null?void 0:i.title)??c.title),R(o,"name","twitter:title"),R(o,"content",((f=c.og)==null?void 0:f.title)??c.title)},m(i,f){g(i,r,f),g(i,e,f),g(i,s,f),g(i,o,f)},p(i,f){var E;f&0&&n!==(n=c.title??((E=c.og)==null?void 0:E.title))&&(document.title=n)},d(i){i&&(l(r),l(e),l(s),l(o))}}}function Me(u){var o,_;let n,r,e=(c.description||((o=c.og)==null?void 0:o.description))&&he(),s=((_=c.og)==null?void 0:_.image)&&Ue();return{c(){e&&e.c(),n=y(),s&&s.c(),r=J()},l(i){e&&e.l(i),n=b(i),s&&s.l(i),r=J()},m(i,f){e&&e.m(i,f),g(i,n,f),s&&s.m(i,f),g(i,r,f)},p(i,f){var E,O;(c.description||(E=c.og)!=null&&E.description)&&e.p(i,f),(O=c.og)!=null&&O.image&&s.p(i,f)},d(i){i&&(l(n),l(r)),e&&e.d(i),s&&s.d(i)}}}function he(u){let n,r,e,s,o;return{c(){n=H("meta"),r=y(),e=H("meta"),s=y(),o=H("meta"),this.h()},l(_){n=I(_,"META",{name:!0,content:!0}),r=b(_),e=I(_,"META",{property:!0,content:!0}),s=b(_),o=I(_,"META",{name:!0,content:!0}),this.h()},h(){var _,i,f;R(n,"name","description"),R(n,"content",c.description??((_=c.og)==null?void 0:_.description)),R(e,"property","og:description"),R(e,"content",((i=c.og)==null?void 0:i.description)??c.description),R(o,"name","twitter:description"),R(o,"content",((f=c.og)==null?void 0:f.description)??c.description)},m(_,i){g(_,n,i),g(_,r,i),g(_,e,i),g(_,s,i),g(_,o,i)},p:j,d(_){_&&(l(n),l(r),l(e),l(s),l(o))}}}function Ue(u){let n,r,e;return{c(){n=H("meta"),r=y(),e=H("meta"),this.h()},l(s){n=I(s,"META",{property:!0,content:!0}),r=b(s),e=I(s,"META",{name:!0,content:!0}),this.h()},h(){var s,o;R(n,"property","og:image"),R(n,"content",(s=c.og)==null?void 0:s.image),R(e,"name","twitter:image"),R(e,"content",(o=c.og)==null?void 0:o.image)},m(s,o){g(s,n,o),g(s,r,o),g(s,e,o)},p:j,d(s){s&&(l(n),l(r),l(e))}}}function ue(u){let n,r;return n=new re({props:{queryID:"all_teams",queryResult:u[0]}}),{c(){L(n.$$.fragment)},l(e){T(n.$$.fragment,e)},m(e,s){N(n,e,s),r=!0},p(e,s){const o={};s&1&&(o.queryResult=e[0]),n.$set(o)},i(e){r||(d(n.$$.fragment,e),r=!0)},o(e){D(n.$$.fragment,e),r=!1},d(e){A(n,e)}}}function ce(u){let n,r;return n=new re({props:{queryID:"afc_conf",queryResult:u[1]}}),{c(){L(n.$$.fragment)},l(e){T(n.$$.fragment,e)},m(e,s){N(n,e,s),r=!0},p(e,s){const o={};s&2&&(o.queryResult=e[1]),n.$set(o)},i(e){r||(d(n.$$.fragment,e),r=!0)},o(e){D(n.$$.fragment,e),r=!1},d(e){A(n,e)}}}function ge(u){let n,r;return n=new re({props:{queryID:"nfc_conf",queryResult:u[2]}}),{c(){L(n.$$.fragment)},l(e){T(n.$$.fragment,e)},m(e,s){N(n,e,s),r=!0},p(e,s){const o={};s&4&&(o.queryResult=e[2]),n.$set(o)},i(e){r||(d(n.$$.fragment,e),r=!0)},o(e){D(n.$$.fragment,e),r=!1},d(e){A(n,e)}}}function Be(u){let n,r,e,s,o,_,i,f,E,O,$,w;return n=new q({props:{id:"seed"}}),e=new q({props:{id:"team"}}),o=new q({props:{id:"record"}}),i=new q({props:{id:"elo_rating_num0"}}),E=new q({props:{id:"avg_wins_num1"}}),$=new q({props:{id:"make_playoffs_pct1"}}),{c(){L(n.$$.fragment),r=y(),L(e.$$.fragment),s=y(),L(o.$$.fragment),_=y(),L(i.$$.fragment),f=y(),L(E.$$.fragment),O=y(),L($.$$.fragment)},l(t){T(n.$$.fragment,t),r=b(t),T(e.$$.fragment,t),s=b(t),T(o.$$.fragment,t),_=b(t),T(i.$$.fragment,t),f=b(t),T(E.$$.fragment,t),O=b(t),T($.$$.fragment,t)},m(t,p){N(n,t,p),g(t,r,p),N(e,t,p),g(t,s,p),N(o,t,p),g(t,_,p),N(i,t,p),g(t,f,p),N(E,t,p),g(t,O,p),N($,t,p),w=!0},p:j,i(t){w||(d(n.$$.fragment,t),d(e.$$.fragment,t),d(o.$$.fragment,t),d(i.$$.fragment,t),d(E.$$.fragment,t),d($.$$.fragment,t),w=!0)},o(t){D(n.$$.fragment,t),D(e.$$.fragment,t),D(o.$$.fragment,t),D(i.$$.fragment,t),D(E.$$.fragment,t),D($.$$.fragment,t),w=!1},d(t){t&&(l(r),l(s),l(_),l(f),l(O)),A(n,t),A(e,t),A(o,t),A(i,t),A(E,t),A($,t)}}}function He(u){let n,r,e,s,o,_,i,f,E,O,$,w;return n=new q({props:{id:"seed"}}),e=new q({props:{id:"team"}}),o=new q({props:{id:"record"}}),i=new q({props:{id:"elo_rating_num0"}}),E=new q({props:{id:"avg_wins_num1"}}),$=new q({props:{id:"make_playoffs_pct1"}}),{c(){L(n.$$.fragment),r=y(),L(e.$$.fragment),s=y(),L(o.$$.fragment),_=y(),L(i.$$.fragment),f=y(),L(E.$$.fragment),O=y(),L($.$$.fragment)},l(t){T(n.$$.fragment,t),r=b(t),T(e.$$.fragment,t),s=b(t),T(o.$$.fragment,t),_=b(t),T(i.$$.fragment,t),f=b(t),T(E.$$.fragment,t),O=b(t),T($.$$.fragment,t)},m(t,p){N(n,t,p),g(t,r,p),N(e,t,p),g(t,s,p),N(o,t,p),g(t,_,p),N(i,t,p),g(t,f,p),N(E,t,p),g(t,O,p),N($,t,p),w=!0},p:j,i(t){w||(d(n.$$.fragment,t),d(e.$$.fragment,t),d(o.$$.fragment,t),d(i.$$.fragment,t),d(E.$$.fragment,t),d($.$$.fragment,t),w=!0)},o(t){D(n.$$.fragment,t),D(e.$$.fragment,t),D(o.$$.fragment,t),D(i.$$.fragment,t),D(E.$$.fragment,t),D($.$$.fragment,t),w=!1},d(t){t&&(l(r),l(s),l(_),l(f),l(O)),A(n,t),A(e,t),A(o,t),A(i,t),A(E,t),A($,t)}}}function Ie(u){var k;let n,r,e,s,o,_,i,f,E,O='<a href="#nfl-teams">NFL Teams</a>',$,w,t='<a href="#american-football-conference">American Football Conference</a>',p,U,W,F,G='<a href="#national-football-conference">National Football Conference</a>',z,B,Q,M=typeof c<"u"&&(c.title||((k=c.og)==null?void 0:k.title))&&c.hide_title!==!0&&Ne();function X(a,m){var K;return typeof c<"u"&&(c.title||(K=c.og)!=null&&K.title)?Fe:Ae}let Y=X()(u),h=typeof c=="object"&&Me(),v=u[0]&&ue(u),S=u[1]&&ce(u),C=u[2]&&ge(u);return U=new fe({props:{data:u[1],link:"team_link",rows:"16",rowShading:"true",$$slots:{default:[Be]},$$scope:{ctx:u}}}),B=new fe({props:{data:u[2],link:"team_link",rows:"16",rowShading:"true",$$slots:{default:[He]},$$scope:{ctx:u}}}),{c(){M&&M.c(),n=y(),Y.c(),r=H("meta"),e=H("meta"),h&&h.c(),s=J(),o=y(),v&&v.c(),_=y(),S&&S.c(),i=y(),C&&C.c(),f=y(),E=H("h1"),E.innerHTML=O,$=y(),w=H("h2"),w.innerHTML=t,p=y(),L(U.$$.fragment),W=y(),F=H("h2"),F.innerHTML=G,z=y(),L(B.$$.fragment),this.h()},l(a){M&&M.l(a),n=b(a);const m=pe("svelte-1j2izld",document.head);Y.l(m),r=I(m,"META",{name:!0,content:!0}),e=I(m,"META",{name:!0,content:!0}),h&&h.l(m),s=J(),m.forEach(l),o=b(a),v&&v.l(a),_=b(a),S&&S.l(a),i=b(a),C&&C.l(a),f=b(a),E=I(a,"H1",{class:!0,id:!0,"data-svelte-h":!0}),te(E)!=="svelte-sqlhdi"&&(E.innerHTML=O),$=b(a),w=I(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),te(w)!=="svelte-19zts81"&&(w.innerHTML=t),p=b(a),T(U.$$.fragment,a),W=b(a),F=I(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),te(F)!=="svelte-1rxg0uh"&&(F.innerHTML=G),z=b(a),T(B.$$.fragment,a),this.h()},h(){R(r,"name","twitter:card"),R(r,"content","summary"),R(e,"name","twitter:site"),R(e,"content","@evidence_dev"),R(E,"class","markdown"),R(E,"id","nfl-teams"),R(w,"class","markdown"),R(w,"id","american-football-conference"),R(F,"class","markdown"),R(F,"id","national-football-conference")},m(a,m){M&&M.m(a,m),g(a,n,m),Y.m(document.head,null),x(document.head,r),x(document.head,e),h&&h.m(document.head,null),x(document.head,s),g(a,o,m),v&&v.m(a,m),g(a,_,m),S&&S.m(a,m),g(a,i,m),C&&C.m(a,m),g(a,f,m),g(a,E,m),g(a,$,m),g(a,w,m),g(a,p,m),N(U,a,m),g(a,W,m),g(a,F,m),g(a,z,m),N(B,a,m),Q=!0},p(a,[m]){var se;typeof c<"u"&&(c.title||(se=c.og)!=null&&se.title)&&c.hide_title!==!0&&M.p(a,m),Y.p(a,m),typeof c=="object"&&h.p(a,m),a[0]?v?(v.p(a,m),m&1&&d(v,1)):(v=ue(a),v.c(),d(v,1),v.m(_.parentNode,_)):v&&(ae(),D(v,1,1,()=>{v=null}),ne()),a[1]?S?(S.p(a,m),m&2&&d(S,1)):(S=ce(a),S.c(),d(S,1),S.m(i.parentNode,i)):S&&(ae(),D(S,1,1,()=>{S=null}),ne()),a[2]?C?(C.p(a,m),m&4&&d(C,1)):(C=ge(a),C.c(),d(C,1),C.m(f.parentNode,f)):C&&(ae(),D(C,1,1,()=>{C=null}),ne());const K={};m&2&&(K.data=a[1]),m&1073741824&&(K.$$scope={dirty:m,ctx:a}),U.$set(K);const ee={};m&4&&(ee.data=a[2]),m&1073741824&&(ee.$$scope={dirty:m,ctx:a}),B.$set(ee)},i(a){Q||(d(v),d(S),d(C),d(U.$$.fragment,a),d(B.$$.fragment,a),Q=!0)},o(a){D(v),D(S),D(C),D(U.$$.fragment,a),D(B.$$.fragment,a),Q=!1},d(a){a&&(l(n),l(o),l(_),l(i),l(f),l(E),l($),l(w),l(p),l(W),l(F),l(z)),M&&M.d(a),Y.d(a),l(r),l(e),h&&h.d(a),l(s),v&&v.d(a),S&&S.d(a),C&&C.d(a),A(U,a),A(B,a)}}}const c={queries:[{all_teams:"nfl/all_teams.sql"}]};function qe(u,n,r){let e,s;ie(u,Le,k=>r(11,e=k)),ie(u,le,k=>r(21,s=k));let{data:o}=n,{data:_={},customFormattingSettings:i,__db:f,inputs:E}=o;de(le,s="b9fea012512f9d3813161fc900c8d890",s);let O=Oe(E);oe(De,O),$e(O.subscribe(k=>E=k)),oe(ke,{getCustomFormats:()=>i.customFormats||[]});const $=(k,a)=>Te(f.query,k,{query_name:a});Se($);let w;const t=()=>{w||(w=setTimeout(()=>{me.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},p=()=>{w?(clearTimeout(w),w=null):me.dismiss("LoadingToast")};_e(()=>(V.addEventListener("inFlightQueryStart",t),V.addEventListener("inFlightQueryEnd",p),V.QueriesLoading&&t(),()=>{V.removeEventListener("inFlightQueryStart",t),V.removeEventListener("inFlightQueryEnd",p)})),e.params,_e(()=>!0);let U={initialData:void 0,initialError:void 0},W=P`SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC`,F=`SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC`;_.all_teams&&(_.all_teams instanceof Error?U.initialError=_.all_teams:U.initialData=_.all_teams);let G;const z=V.createReactive({callback:k=>{r(0,G=k)},execFn:$},{id:"all_teams",initialData:U.initialData,initialError:U.initialError});z(F,{noResolve:W}),globalThis[Symbol.for("all_teams")]={get value(){return G}};let B={initialData:void 0,initialError:void 0},Q=P`select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM (SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC) R
WHERE conf = 'AFC'
ORDER BY avg_wins_num1 DESC`,M=`select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM (SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC) R
WHERE conf = 'AFC'
ORDER BY avg_wins_num1 DESC`;_.afc_conf&&(_.afc_conf instanceof Error?B.initialError=_.afc_conf:B.initialData=_.afc_conf);let X;const Z=V.createReactive({callback:k=>{r(1,X=k)},execFn:$},{id:"afc_conf",initialData:B.initialData,initialError:B.initialError});Z(M,{noResolve:Q}),globalThis[Symbol.for("afc_conf")]={get value(){return X}};let Y={initialData:void 0,initialError:void 0},h=P`select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM (SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC) R
WHERE conf = 'NFC'
ORDER BY avg_wins_num1 DESC`,v=`select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM (SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC) R
WHERE conf = 'NFC'
ORDER BY avg_wins_num1 DESC`;_.nfc_conf&&(_.nfc_conf instanceof Error?Y.initialError=_.nfc_conf:Y.initialData=_.nfc_conf);let S;const C=V.createReactive({callback:k=>{r(2,S=k)},execFn:$},{id:"nfc_conf",initialData:Y.initialData,initialError:Y.initialError});return C(v,{noResolve:h}),globalThis[Symbol.for("nfc_conf")]={get value(){return S}},u.$$set=k=>{"data"in k&&r(3,o=k.data)},u.$$.update=()=>{u.$$.dirty&8&&r(4,{data:_={},customFormattingSettings:i,__db:f}=o,_),u.$$.dirty&16&&Ce.set(Object.keys(_).length>0),u.$$.dirty&2048&&e.params,u.$$.dirty&96&&z(F,{noResolve:W}),u.$$.dirty&384&&Z(M,{noResolve:Q}),u.$$.dirty&1536&&C(v,{noResolve:h})},r(5,W=P`SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC`),r(6,F=`SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC`),r(7,Q=P`select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM (SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC) R
WHERE conf = 'AFC'
ORDER BY avg_wins_num1 DESC`),r(8,M=`select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM (SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC) R
WHERE conf = 'AFC'
ORDER BY avg_wins_num1 DESC`),r(9,h=P`select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM (SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC) R
WHERE conf = 'NFC'
ORDER BY avg_wins_num1 DESC`),r(10,v=`select
  ROW_NUMBER() OVER (ORDER BY avg_wins_num1 DESC) AS seed,
  *
FROM (SELECT
    row_number() over (order by elo_rating DESC) as Rk,
    team,
    conf,
    elo_rating as elo_rating_num0,
    win_range,
    avg_wins as avg_wins_num1,
    record,
    '/nfl/teams/' || team as team_link,
    COALESCE((made_postseason + first_round_bye) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
where elo_vs_vegas IS NOT NULL
order by elo_rating DESC) R
WHERE conf = 'NFC'
ORDER BY avg_wins_num1 DESC`),[G,X,S,o,_,W,F,Q,M,h,v,e]}class Je extends ye{constructor(n){super(),be(this,n,qe,Ie,Ee,{data:3})}}export{Je as component};
