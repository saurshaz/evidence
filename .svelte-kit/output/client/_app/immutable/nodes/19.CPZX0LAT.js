import{s as se,a as w,e as C,b as K,t as ae,c as E,h as ne,d as T,f as u,r as Y,u as re,g as ie,i as y,j as d,k as V,l as z,m as oe,o as B,p as me,q as J,n as N}from"../chunks/scheduler.BVCo5HCX.js";import{S as le,i as fe,c as O,a as Q,m as q,t as S,b as L,d as _e,e as F,g as ue}from"../chunks/index.C9mGAhn_.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.ZGqga9CZ.js";import{s as ce,Q as R,p as pe,r as W,t as Z}from"../chunks/index.C8RIryS8.js";import{h as ee}from"../chunks/setTrackProxy.Cl20Y9Hv.js";import{I as de,C as ge}from"../chunks/globalContexts.1hDlTDmj.js";import{w as ye}from"../chunks/entry.BCF5SsRs.js";import{D as $e,C as j}from"../chunks/DataTable.BKISIfxk.js";import{p as ve}from"../chunks/stores.C2AzUxyb.js";import{V as be}from"../chunks/Value.Blyz8mIZ.js";import{p as we}from"../chunks/profile.BW8tN6E9.js";import{Q as Ee}from"../chunks/QueryViewer.CwykzcKw.js";function he(c){var s;let a,o=(f.title??((s=f.og)==null?void 0:s.title))+"",e;return{c(){a=C("h1"),e=ae(o),this.h()},l(n){a=T(n,"H1",{class:!0});var i=Y(a);e=re(i,o),i.forEach(u),this.h()},h(){y(a,"class","title")},m(n,i){d(n,a,i),V(a,e)},p:N,d(n){n&&u(a)}}}function ke(c){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:N,p:N,d:N}}function Ce(c){var i;let a,o,e,s,n;return document.title=a=f.title??((i=f.og)==null?void 0:i.title),{c(){o=w(),e=C("meta"),s=w(),n=C("meta"),this.h()},l(t){o=E(t),e=T(t,"META",{property:!0,content:!0}),s=E(t),n=T(t,"META",{name:!0,content:!0}),this.h()},h(){var t,_;y(e,"property","og:title"),y(e,"content",((t=f.og)==null?void 0:t.title)??f.title),y(n,"name","twitter:title"),y(n,"content",((_=f.og)==null?void 0:_.title)??f.title)},m(t,_){d(t,o,_),d(t,e,_),d(t,s,_),d(t,n,_)},p(t,_){var $;_&0&&a!==(a=f.title??(($=f.og)==null?void 0:$.title))&&(document.title=a)},d(t){t&&(u(o),u(e),u(s),u(n))}}}function Te(c){var n,i;let a,o,e=(f.description||((n=f.og)==null?void 0:n.description))&&Se(),s=((i=f.og)==null?void 0:i.image)&&Ae();return{c(){e&&e.c(),a=w(),s&&s.c(),o=K()},l(t){e&&e.l(t),a=E(t),s&&s.l(t),o=K()},m(t,_){e&&e.m(t,_),d(t,a,_),s&&s.m(t,_),d(t,o,_)},p(t,_){var $,v;(f.description||($=f.og)!=null&&$.description)&&e.p(t,_),(v=f.og)!=null&&v.image&&s.p(t,_)},d(t){t&&(u(a),u(o)),e&&e.d(t),s&&s.d(t)}}}function Se(c){let a,o,e,s,n;return{c(){a=C("meta"),o=w(),e=C("meta"),s=w(),n=C("meta"),this.h()},l(i){a=T(i,"META",{name:!0,content:!0}),o=E(i),e=T(i,"META",{property:!0,content:!0}),s=E(i),n=T(i,"META",{name:!0,content:!0}),this.h()},h(){var i,t,_;y(a,"name","description"),y(a,"content",f.description??((i=f.og)==null?void 0:i.description)),y(e,"property","og:description"),y(e,"content",((t=f.og)==null?void 0:t.description)??f.description),y(n,"name","twitter:description"),y(n,"content",((_=f.og)==null?void 0:_.description)??f.description)},m(i,t){d(i,a,t),d(i,o,t),d(i,e,t),d(i,s,t),d(i,n,t)},p:N,d(i){i&&(u(a),u(o),u(e),u(s),u(n))}}}function Ae(c){let a,o,e;return{c(){a=C("meta"),o=w(),e=C("meta"),this.h()},l(s){a=T(s,"META",{property:!0,content:!0}),o=E(s),e=T(s,"META",{name:!0,content:!0}),this.h()},h(){var s,n;y(a,"property","og:image"),y(a,"content",(s=f.og)==null?void 0:s.image),y(e,"name","twitter:image"),y(e,"content",(n=f.og)==null?void 0:n.image)},m(s,n){d(s,a,n),d(s,o,n),d(s,e,n)},p:N,d(s){s&&(u(a),u(o),u(e))}}}function te(c){let a,o;return a=new Ee({props:{queryID:"team_summary",queryResult:c[1]}}),{c(){O(a.$$.fragment)},l(e){Q(a.$$.fragment,e)},m(e,s){q(a,e,s),o=!0},p(e,s){const n={};s&2&&(n.queryResult=e[1]),a.$set(n)},i(e){o||(S(a.$$.fragment,e),o=!0)},o(e){L(a.$$.fragment,e),o=!1},d(e){F(a,e)}}}function Le(c){let a,o,e,s,n,i,t,_,$,v,h,b;return a=new j({props:{id:"team"}}),e=new j({props:{id:"record"}}),n=new j({props:{id:"elo_rating",title:"ELO"}}),t=new j({props:{id:"avg_wins"}}),$=new j({props:{id:"vegas_wins"}}),h=new j({props:{id:"elo_vs_vegas_num1",contentType:"delta"}}),{c(){O(a.$$.fragment),o=w(),O(e.$$.fragment),s=w(),O(n.$$.fragment),i=w(),O(t.$$.fragment),_=w(),O($.$$.fragment),v=w(),O(h.$$.fragment)},l(r){Q(a.$$.fragment,r),o=E(r),Q(e.$$.fragment,r),s=E(r),Q(n.$$.fragment,r),i=E(r),Q(t.$$.fragment,r),_=E(r),Q($.$$.fragment,r),v=E(r),Q(h.$$.fragment,r)},m(r,g){q(a,r,g),d(r,o,g),q(e,r,g),d(r,s,g),q(n,r,g),d(r,i,g),q(t,r,g),d(r,_,g),q($,r,g),d(r,v,g),q(h,r,g),b=!0},p:N,i(r){b||(S(a.$$.fragment,r),S(e.$$.fragment,r),S(n.$$.fragment,r),S(t.$$.fragment,r),S($.$$.fragment,r),S(h.$$.fragment,r),b=!0)},o(r){L(a.$$.fragment,r),L(e.$$.fragment,r),L(n.$$.fragment,r),L(t.$$.fragment,r),L($.$$.fragment,r),L(h.$$.fragment,r),b=!1},d(r){r&&(u(o),u(s),u(i),u(_),u(v)),F(a,r),F(e,r),F(n,r),F(t,r),F($,r),F(h,r)}}}function Me(c){var G;let a,o,e,s,n,i,t,_,$,v,h,b,r,g,H='<em class="markdown">Not all teams had vegas win totals provided, which explains why total wins compared to vegas wins doesn&#39;t match perfectly for some conferences.</em>',M,k=typeof f<"u"&&(f.title||((G=f.og)==null?void 0:G.title))&&f.hide_title!==!0&&he();function P(m,p){var D;return typeof f<"u"&&(f.title||(D=f.og)!=null&&D.title)?Ce:ke}let I=P()(c),A=typeof f=="object"&&Te(),l=c[1]&&te(c);return v=new be({props:{data:c[1].filter(c[6]),column:"conf"}}),b=new $e({props:{data:c[1].filter(c[7]),title:"Conference Standings",rowShading:"true",rowLine:"false",rows:"100",link:"team_link",$$slots:{default:[Le]},$$scope:{ctx:c}}}),{c(){k&&k.c(),a=w(),I.c(),o=C("meta"),e=C("meta"),A&&A.c(),s=K(),n=w(),l&&l.c(),i=w(),t=C("h1"),_=C("a"),$=ae("Detailed Analysis for "),O(v.$$.fragment),h=w(),O(b.$$.fragment),r=w(),g=C("p"),g.innerHTML=H,this.h()},l(m){k&&k.l(m),a=E(m);const p=ne("svelte-1j2izld",document.head);I.l(p),o=T(p,"META",{name:!0,content:!0}),e=T(p,"META",{name:!0,content:!0}),A&&A.l(p),s=K(),p.forEach(u),n=E(m),l&&l.l(m),i=E(m),t=T(m,"H1",{class:!0,id:!0});var D=Y(t);_=T(D,"A",{href:!0});var U=Y(_);$=re(U,"Detailed Analysis for "),Q(v.$$.fragment,U),U.forEach(u),D.forEach(u),h=E(m),Q(b.$$.fragment,m),r=E(m),g=T(m,"P",{class:!0,"data-svelte-h":!0}),ie(g)!=="svelte-1quymny"&&(g.innerHTML=H),this.h()},h(){y(o,"name","twitter:card"),y(o,"content","summary"),y(e,"name","twitter:site"),y(e,"content","@evidence_dev"),y(_,"href","#detailed-analysis-for-value-datateam_summaryfilterd--dconftouppercase--pageparamsncaaf_conferencestouppercase-columnconf"),y(t,"class","markdown"),y(t,"id","detailed-analysis-for-value-datateam_summaryfilterd--dconftouppercase--pageparamsncaaf_conferencestouppercase-columnconf"),y(g,"class","markdown")},m(m,p){k&&k.m(m,p),d(m,a,p),I.m(document.head,null),V(document.head,o),V(document.head,e),A&&A.m(document.head,null),V(document.head,s),d(m,n,p),l&&l.m(m,p),d(m,i,p),d(m,t,p),V(t,_),V(_,$),q(v,_,null),d(m,h,p),q(b,m,p),d(m,r,p),d(m,g,p),M=!0},p(m,[p]){var x;typeof f<"u"&&(f.title||(x=f.og)!=null&&x.title)&&f.hide_title!==!0&&k.p(m,p),I.p(m,p),typeof f=="object"&&A.p(m,p),m[1]?l?(l.p(m,p),p&2&&S(l,1)):(l=te(m),l.c(),S(l,1),l.m(i.parentNode,i)):l&&(ue(),L(l,1,1,()=>{l=null}),_e());const D={};p&3&&(D.data=m[1].filter(m[6])),v.$set(D);const U={};p&3&&(U.data=m[1].filter(m[7])),p&4194304&&(U.$$scope={dirty:p,ctx:m}),b.$set(U)},i(m){M||(S(l),S(v.$$.fragment,m),S(b.$$.fragment,m),M=!0)},o(m){L(l),L(v.$$.fragment,m),L(b.$$.fragment,m),M=!1},d(m){m&&(u(a),u(n),u(i),u(t),u(h),u(r),u(g)),k&&k.d(m),I.d(m),u(o),u(e),A&&A.d(m),u(s),l&&l.d(m),F(v),F(b,m)}}}const f={queries:[{team_summary:"ncaaf/reg_season.sql"}]};function Oe(c,a,o){let e,s;z(c,ve,l=>o(0,e=l)),z(c,W,l=>o(15,s=l));let{data:n}=a,{data:i={},customFormattingSettings:t,__db:_,inputs:$}=n;oe(W,s="47bf9fba76ec1bd5246957495f850bd6",s);let v=ye($);B(de,v),me(v.subscribe(l=>$=l)),B(ge,{getCustomFormats:()=>t.customFormats||[]});const h=(l,G)=>we(_.query,l,{query_name:G});ce(h);let b;const r=()=>{b||(b=setTimeout(()=>{Z.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},g=()=>{b?(clearTimeout(b),b=null):Z.dismiss("LoadingToast")};J(()=>(R.addEventListener("inFlightQueryStart",r),R.addEventListener("inFlightQueryEnd",g),R.QueriesLoading&&r(),()=>{R.removeEventListener("inFlightQueryStart",r),R.removeEventListener("inFlightQueryEnd",g)})),e.params,J(()=>!0);let H={initialData:void 0,initialError:void 0},M=ee`select
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
order by conf, avg_wins desc`,k=`select
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
order by conf, avg_wins desc`;i.team_summary&&(i.team_summary instanceof Error?H.initialError=i.team_summary:H.initialData=i.team_summary);let P;const X=R.createReactive({callback:l=>{o(1,P=l)},execFn:h},{id:"team_summary",initialData:H.initialData,initialError:H.initialError});X(k,{noResolve:M}),globalThis[Symbol.for("team_summary")]={get value(){return P}};const I=l=>l.conf.toUpperCase()===e.params.ncaaf_conferences.toUpperCase(),A=l=>l.conf.toUpperCase()===e.params.ncaaf_conferences.toUpperCase();return c.$$set=l=>{"data"in l&&o(2,n=l.data)},c.$$.update=()=>{c.$$.dirty&4&&o(3,{data:i={},customFormattingSettings:t,__db:_}=n,i),c.$$.dirty&8&&pe.set(Object.keys(i).length>0),c.$$.dirty&1&&e.params,c.$$.dirty&48&&X(k,{noResolve:M})},o(4,M=ee`select
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
order by conf, avg_wins desc`),o(5,k=`select
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
order by conf, avg_wins desc`),[e,P,n,i,M,k,I,A]}class Ge extends le{constructor(a){super(),fe(this,a,Oe,Me,se,{data:2})}}export{Ge as component};
