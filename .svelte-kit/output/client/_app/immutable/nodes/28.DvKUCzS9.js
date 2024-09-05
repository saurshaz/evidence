import{s as ca,a as w,e as H,b as Et,t as Lt,c as $,h as da,d as I,f as m,r as ct,u as bt,g as We,i as T,v as yt,j as u,k as Le,A as ga,l as Mt,m as pa,o as Ht,p as Ea,q as At,n as Ie}from"../chunks/scheduler.BVCo5HCX.js";import{S as wa,i as $a,c as R,a as v,m as L,t as l,b as f,d as oe,e as b,g as le}from"../chunks/index.C9mGAhn_.js";import{g as ya}from"../chunks/globals.D0QH3NT1.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.COvZ985M.js";import{s as Ra,Q as te,p as va,r as It,t as qt}from"../chunks/index.DAWWTyat.js";import{h as F}from"../chunks/setTrackProxy.Cl20Y9Hv.js";import{I as La,C as ba}from"../chunks/globalContexts.1hDlTDmj.js";import{w as Sa}from"../chunks/entry.ZsnkuR_y.js";import{D as Rt,C as ae}from"../chunks/DataTable.C27QukxD.js";import{p as ha}from"../chunks/stores.C49gDDi_.js";import{A as Ta}from"../chunks/AreaChart.BteOLp13.js";import{B as Oa}from"../chunks/BarChart.CThAdPla.js";import{B as dt}from"../chunks/BigValue.fsHmo18v.js";import{E as Ut}from"../chunks/getCompletedData.fKIlR-gu.js";import{L as Aa}from"../chunks/LineChart.4dpktC06.js";import{V as Ca}from"../chunks/Value.D-dvCgmI.js";import{p as ka}from"../chunks/profile.BW8tN6E9.js";import{B as Da,a as Na}from"../chunks/ButtonGroup.B_f0KjbD.js";import{Q as we}from"../chunks/QueryViewer.CXzVRZ_y.js";const{document:Xe}=ya;function Fa(n){var i;let a,s=(O.title??((i=O.og)==null?void 0:i.title))+"",e;return{c(){a=H("h1"),e=Lt(s),this.h()},l(r){a=I(r,"H1",{class:!0});var _=ct(a);e=bt(_,s),_.forEach(m),this.h()},h(){T(a,"class","title")},m(r,_){u(r,a,_),Le(a,e)},p:Ie,d(r){r&&m(a)}}}function Ma(n){return{c(){this.h()},l(a){this.h()},h(){Xe.title="Evidence"},m:Ie,p:Ie,d:Ie}}function Ha(n){var _;let a,s,e,i,r;return Xe.title=a=O.title??((_=O.og)==null?void 0:_.title),{c(){s=w(),e=H("meta"),i=w(),r=H("meta"),this.h()},l(p){s=$(p),e=I(p,"META",{property:!0,content:!0}),i=$(p),r=I(p,"META",{name:!0,content:!0}),this.h()},h(){var p,S;T(e,"property","og:title"),T(e,"content",((p=O.og)==null?void 0:p.title)??O.title),T(r,"name","twitter:title"),T(r,"content",((S=O.og)==null?void 0:S.title)??O.title)},m(p,S){u(p,s,S),u(p,e,S),u(p,i,S),u(p,r,S)},p(p,S){var E;S&0&&a!==(a=O.title??((E=O.og)==null?void 0:E.title))&&(Xe.title=a)},d(p){p&&(m(s),m(e),m(i),m(r))}}}function Ia(n){var r,_;let a,s,e=(O.description||((r=O.og)==null?void 0:r.description))&&qa(),i=((_=O.og)==null?void 0:_.image)&&Ua();return{c(){e&&e.c(),a=w(),i&&i.c(),s=Et()},l(p){e&&e.l(p),a=$(p),i&&i.l(p),s=Et()},m(p,S){e&&e.m(p,S),u(p,a,S),i&&i.m(p,S),u(p,s,S)},p(p,S){var E,D;(O.description||(E=O.og)!=null&&E.description)&&e.p(p,S),(D=O.og)!=null&&D.image&&i.p(p,S)},d(p){p&&(m(a),m(s)),e&&e.d(p),i&&i.d(p)}}}function qa(n){let a,s,e,i,r;return{c(){a=H("meta"),s=w(),e=H("meta"),i=w(),r=H("meta"),this.h()},l(_){a=I(_,"META",{name:!0,content:!0}),s=$(_),e=I(_,"META",{property:!0,content:!0}),i=$(_),r=I(_,"META",{name:!0,content:!0}),this.h()},h(){var _,p,S;T(a,"name","description"),T(a,"content",O.description??((_=O.og)==null?void 0:_.description)),T(e,"property","og:description"),T(e,"content",((p=O.og)==null?void 0:p.description)??O.description),T(r,"name","twitter:description"),T(r,"content",((S=O.og)==null?void 0:S.description)??O.description)},m(_,p){u(_,a,p),u(_,s,p),u(_,e,p),u(_,i,p),u(_,r,p)},p:Ie,d(_){_&&(m(a),m(s),m(e),m(i),m(r))}}}function Ua(n){let a,s,e;return{c(){a=H("meta"),s=w(),e=H("meta"),this.h()},l(i){a=I(i,"META",{property:!0,content:!0}),s=$(i),e=I(i,"META",{name:!0,content:!0}),this.h()},h(){var i,r;T(a,"property","og:image"),T(a,"content",(i=O.og)==null?void 0:i.image),T(e,"name","twitter:image"),T(e,"content",(r=O.og)==null?void 0:r.image)},m(i,r){u(i,a,r),u(i,s,r),u(i,e,r)},p:Ie,d(i){i&&(m(a),m(s),m(e))}}}function Bt(n){let a,s;return a=new we({props:{queryID:"season_summary",queryResult:n[1]}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p(e,i){const r={};i[0]&2&&(r.queryResult=e[1]),a.$set(r)},i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function Yt(n){let a,s;return a=new we({props:{queryID:"records_table",queryResult:n[2]}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p(e,i){const r={};i[0]&4&&(r.queryResult=e[2]),a.$set(r)},i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function Wt(n){let a,s;return a=new we({props:{queryID:"elo_latest",queryResult:n[3]}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p(e,i){const r={};i[0]&8&&(r.queryResult=e[3]),a.$set(r)},i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function Pt(n){let a,s;return a=new we({props:{queryID:"seed_details",queryResult:n[4]}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p(e,i){const r={};i[0]&16&&(r.queryResult=e[4]),a.$set(r)},i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function Gt(n){let a,s;return a=new we({props:{queryID:"wins_details",queryResult:n[5]}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p(e,i){const r={};i[0]&32&&(r.queryResult=e[5]),a.$set(r)},i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function jt(n){let a,s;return a=new we({props:{queryID:"playoff_wins",queryResult:n[6]}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p(e,i){const r={};i[0]&64&&(r.queryResult=e[6]),a.$set(r)},i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function Qt(n){let a,s;return a=new we({props:{queryID:"playoff_odds",queryResult:n[7]}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p(e,i){const r={};i[0]&128&&(r.queryResult=e[7]),a.$set(r)},i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function Vt(n){let a,s;return a=new we({props:{queryID:"most_recent_games",queryResult:n[8]}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p(e,i){const r={};i[0]&256&&(r.queryResult=e[8]),a.$set(r)},i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function Jt(n){let a,s;return a=new we({props:{queryID:"game_trend",queryResult:n[9]}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p(e,i){const r={};i[0]&512&&(r.queryResult=e[9]),a.$set(r)},i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function Kt(n){let a,s;return a=new we({props:{queryID:"future_games",queryResult:n[10]}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p(e,i){const r={};i[0]&1024&&(r.queryResult=e[10]),a.$set(r)},i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function Xt(n){let a,s;return a=new we({props:{queryID:"filtered_season_summary",queryResult:n[11]}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p(e,i){const r={};i[0]&2048&&(r.queryResult=e[11]),a.$set(r)},i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function Ba(n){let a,s,e,i,r,_,p,S,E,D,h,M,A,P;return a=new ae({props:{id:"date"}}),e=new ae({props:{id:"T",title:" "}}),r=new ae({props:{id:"visiting_team"}}),p=new ae({props:{id:" "}}),E=new ae({props:{id:"home_team"}}),h=new ae({props:{id:"winning_team"}}),A=new ae({props:{id:"score"}}),{c(){R(a.$$.fragment),s=w(),R(e.$$.fragment),i=w(),R(r.$$.fragment),_=w(),R(p.$$.fragment),S=w(),R(E.$$.fragment),D=w(),R(h.$$.fragment),M=w(),R(A.$$.fragment)},l(g){v(a.$$.fragment,g),s=$(g),v(e.$$.fragment,g),i=$(g),v(r.$$.fragment,g),_=$(g),v(p.$$.fragment,g),S=$(g),v(E.$$.fragment,g),D=$(g),v(h.$$.fragment,g),M=$(g),v(A.$$.fragment,g)},m(g,C){L(a,g,C),u(g,s,C),L(e,g,C),u(g,i,C),L(r,g,C),u(g,_,C),L(p,g,C),u(g,S,C),L(E,g,C),u(g,D,C),L(h,g,C),u(g,M,C),L(A,g,C),P=!0},p:Ie,i(g){P||(l(a.$$.fragment,g),l(e.$$.fragment,g),l(r.$$.fragment,g),l(p.$$.fragment,g),l(E.$$.fragment,g),l(h.$$.fragment,g),l(A.$$.fragment,g),P=!0)},o(g){f(a.$$.fragment,g),f(e.$$.fragment,g),f(r.$$.fragment,g),f(p.$$.fragment,g),f(E.$$.fragment,g),f(h.$$.fragment,g),f(A.$$.fragment,g),P=!1},d(g){g&&(m(s),m(i),m(_),m(S),m(D),m(M)),b(a,g),b(e,g),b(r,g),b(p,g),b(E,g),b(h,g),b(A,g)}}}function zt(n){let a,s='<a href="#upcoming-schedule">Upcoming Schedule</a>',e,i,r,_,p='<a href="#playoff-odds">Playoff Odds</a>',S,E,D,h,M,A,P,g,C,d,N,$e,se;i=new Rt({props:{data:n[10].filter(ra),rows:"5",link:"game_link",$$slots:{default:[Ya]},$$scope:{ctx:n}}}),E=new dt({props:{data:n[7].filter(_a),value:"top_six_pct1"}}),h=new dt({props:{data:n[7].filter(oa),value:"play_in_pct1"}}),A=new dt({props:{data:n[7].filter(la),value:"missed_playoffs_pct1"}}),g=new Ta({props:{data:n[6].filter(ma),x:"wins",y:"odds_pct1",series:"season_result",xAxisTitle:"wins",title:"projected end of season wins"}}),d=new Oa({props:{data:n[4].filter(fa),x:"seed",y:"occurances_pct1",xAxisTitle:"seed",title:"projected end of season seeding"}});let q=n[9].length==0&&Zt();return{c(){a=H("h3"),a.innerHTML=s,e=w(),R(i.$$.fragment),r=w(),_=H("h3"),_.innerHTML=p,S=w(),R(E.$$.fragment),D=w(),R(h.$$.fragment),M=w(),R(A.$$.fragment),P=w(),R(g.$$.fragment),C=w(),R(d.$$.fragment),N=w(),q&&q.c(),$e=Et(),this.h()},l(c){a=I(c,"H3",{class:!0,id:!0,"data-svelte-h":!0}),We(a)!=="svelte-1aiam6d"&&(a.innerHTML=s),e=$(c),v(i.$$.fragment,c),r=$(c),_=I(c,"H3",{class:!0,id:!0,"data-svelte-h":!0}),We(_)!=="svelte-1mwkix9"&&(_.innerHTML=p),S=$(c),v(E.$$.fragment,c),D=$(c),v(h.$$.fragment,c),M=$(c),v(A.$$.fragment,c),P=$(c),v(g.$$.fragment,c),C=$(c),v(d.$$.fragment,c),N=$(c),q&&q.l(c),$e=Et(),this.h()},h(){T(a,"class","markdown"),T(a,"id","upcoming-schedule"),T(_,"class","markdown"),T(_,"id","playoff-odds")},m(c,k){u(c,a,k),u(c,e,k),L(i,c,k),u(c,r,k),u(c,_,k),u(c,S,k),L(E,c,k),u(c,D,k),L(h,c,k),u(c,M,k),L(A,c,k),u(c,P,k),L(g,c,k),u(c,C,k),L(d,c,k),u(c,N,k),q&&q.m(c,k),u(c,$e,k),se=!0},p(c,k){const Ae={};k[0]&1024&&(Ae.data=c[10].filter(ra)),k[2]&536870912&&(Ae.$$scope={dirty:k,ctx:c}),i.$set(Ae);const re={};k[0]&128&&(re.data=c[7].filter(_a)),E.$set(re);const be={};k[0]&128&&(be.data=c[7].filter(oa)),h.$set(be);const _e={};k[0]&128&&(_e.data=c[7].filter(la)),A.$set(_e);const Ce={};k[0]&64&&(Ce.data=c[6].filter(ma)),g.$set(Ce);const me={};k[0]&16&&(me.data=c[4].filter(fa)),d.$set(me),c[9].length==0?q||(q=Zt(),q.c(),q.m($e.parentNode,$e)):q&&(q.d(1),q=null)},i(c){se||(l(i.$$.fragment,c),l(E.$$.fragment,c),l(h.$$.fragment,c),l(A.$$.fragment,c),l(g.$$.fragment,c),l(d.$$.fragment,c),se=!0)},o(c){f(i.$$.fragment,c),f(E.$$.fragment,c),f(h.$$.fragment,c),f(A.$$.fragment,c),f(g.$$.fragment,c),f(d.$$.fragment,c),se=!1},d(c){c&&(m(a),m(e),m(r),m(_),m(S),m(D),m(M),m(P),m(C),m(N),m($e)),b(i,c),b(E,c),b(h,c),b(A,c),b(g,c),b(d,c),q&&q.d(c)}}}function Ya(n){let a,s,e,i,r,_,p,S,E,D,h,M,A,P,g,C;return a=new ae({props:{id:"date"}}),e=new ae({props:{id:"T",title:" "}}),r=new ae({props:{id:"visitor"}}),p=new ae({props:{id:"home"}}),E=new ae({props:{id:"home_win_pct1",title:"Win % (Home)"}}),h=new ae({props:{id:"american_odds",align:"right",title:"Odds (Home)"}}),A=new ae({props:{id:"implied_line_num1",title:"Line (Home)"}}),g=new ae({props:{id:"predicted_score",title:"Score"}}),{c(){R(a.$$.fragment),s=w(),R(e.$$.fragment),i=w(),R(r.$$.fragment),_=w(),R(p.$$.fragment),S=w(),R(E.$$.fragment),D=w(),R(h.$$.fragment),M=w(),R(A.$$.fragment),P=w(),R(g.$$.fragment)},l(d){v(a.$$.fragment,d),s=$(d),v(e.$$.fragment,d),i=$(d),v(r.$$.fragment,d),_=$(d),v(p.$$.fragment,d),S=$(d),v(E.$$.fragment,d),D=$(d),v(h.$$.fragment,d),M=$(d),v(A.$$.fragment,d),P=$(d),v(g.$$.fragment,d)},m(d,N){L(a,d,N),u(d,s,N),L(e,d,N),u(d,i,N),L(r,d,N),u(d,_,N),L(p,d,N),u(d,S,N),L(E,d,N),u(d,D,N),L(h,d,N),u(d,M,N),L(A,d,N),u(d,P,N),L(g,d,N),C=!0},p:Ie,i(d){C||(l(a.$$.fragment,d),l(e.$$.fragment,d),l(r.$$.fragment,d),l(p.$$.fragment,d),l(E.$$.fragment,d),l(h.$$.fragment,d),l(A.$$.fragment,d),l(g.$$.fragment,d),C=!0)},o(d){f(a.$$.fragment,d),f(e.$$.fragment,d),f(r.$$.fragment,d),f(p.$$.fragment,d),f(E.$$.fragment,d),f(h.$$.fragment,d),f(A.$$.fragment,d),f(g.$$.fragment,d),C=!1},d(d){d&&(m(s),m(i),m(_),m(S),m(D),m(M),m(P)),b(a,d),b(e,d),b(r,d),b(p,d),b(E,d),b(h,d),b(A,d),b(g,d)}}}function Zt(n){let a,s='<a href="#playoff-analysis">Playoff Analysis</a>',e,i,r="add the following:",_,p,S='<li class="markdown">play-in analysis (if playin games exist, i.e. count &gt; 1)<ul class="markdown"><li class="markdown">this will show % of time by spot, and then % of advancing by seed</li></ul></li> <li class="markdown">playoff analysis<ul class="markdown"><li class="markdown">most common opponents with win rate by series (mostly nulls, sparsely populated)</li></ul></li>';return{c(){a=H("h2"),a.innerHTML=s,e=w(),i=H("p"),i.textContent=r,_=w(),p=H("ul"),p.innerHTML=S,this.h()},l(E){a=I(E,"H2",{class:!0,id:!0,"data-svelte-h":!0}),We(a)!=="svelte-3nubcd"&&(a.innerHTML=s),e=$(E),i=I(E,"P",{class:!0,"data-svelte-h":!0}),We(i)!=="svelte-1ugq117"&&(i.textContent=r),_=$(E),p=I(E,"UL",{class:!0,"data-svelte-h":!0}),We(p)!=="svelte-1au48wa"&&(p.innerHTML=S),this.h()},h(){T(a,"class","markdown"),T(a,"id","playoff-analysis"),T(i,"class","markdown"),T(p,"class","markdown")},m(E,D){u(E,a,D),u(E,e,D),u(E,i,D),u(E,_,D),u(E,p,D)},d(E){E&&(m(a),m(e),m(i),m(_),m(p))}}}function xt(n){let a,s;return a=new we({props:{queryID:"aaa",queryResult:n[12]}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p(e,i){const r={};i[0]&4096&&(r.queryResult=e[12]),a.$set(r)},i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function Wa(n){let a,s;return a=new Na({props:{valueLabel:"All",value:"%",default:!0}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p:Ie,i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function Pa(n){let a,s;return a=new Rt({props:{data:n[12],link:"team_link",rows:"30",$$slots:{default:[ja]},$$scope:{ctx:n}}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p(e,i){const r={};i[0]&4096&&(r.data=e[12]),i[2]&536870912&&(r.$$scope={dirty:i,ctx:e}),a.$set(r)},i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function Ga(n){let a,s;return a=new Rt({props:{data:n[12],link:"team_link",rows:"30",$$slots:{default:[Qa]},$$scope:{ctx:n}}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p(e,i){const r={};i[0]&4096&&(r.data=e[12]),i[2]&536870912&&(r.$$scope={dirty:i,ctx:e}),a.$set(r)},i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function ja(n){let a,s,e,i;return a=new ae({props:{id:"conf"}}),e=new ae({props:{id:"_count"}}),{c(){R(a.$$.fragment),s=w(),R(e.$$.fragment)},l(r){v(a.$$.fragment,r),s=$(r),v(e.$$.fragment,r)},m(r,_){L(a,r,_),u(r,s,_),L(e,r,_),i=!0},p:Ie,i(r){i||(l(a.$$.fragment,r),l(e.$$.fragment,r),i=!0)},o(r){f(a.$$.fragment,r),f(e.$$.fragment,r),i=!1},d(r){r&&m(s),b(a,r),b(e,r)}}}function Qa(n){let a,s,e,i;return a=new ae({props:{id:"conf"}}),e=new ae({props:{id:"_count"}}),{c(){R(a.$$.fragment),s=w(),R(e.$$.fragment)},l(r){v(a.$$.fragment,r),s=$(r),v(e.$$.fragment,r)},m(r,_){L(a,r,_),u(r,s,_),L(e,r,_),i=!0},p:Ie,i(r){i||(l(a.$$.fragment,r),l(e.$$.fragment,r),i=!0)},o(r){f(a.$$.fragment,r),f(e.$$.fragment,r),i=!1},d(r){r&&m(s),b(a,r),b(e,r)}}}function ea(n){let a,s;return a=new we({props:{queryID:"pieTestData1",queryResult:n[13]}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p(e,i){const r={};i[0]&8192&&(r.queryResult=e[13]),a.$set(r)},i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function ta(n){let a,s;return a=new we({props:{queryID:"pieTestData2",queryResult:n[14]}}),{c(){R(a.$$.fragment)},l(e){v(a.$$.fragment,e)},m(e,i){L(a,e,i),s=!0},p(e,i){const r={};i[0]&16384&&(r.queryResult=e[14]),a.$set(r)},i(e){s||(l(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){b(a,e)}}}function Va(n){var Ct;let a,s,e,i,r,_,p,S,E,D,h,M,A,P,g,C,d,N,$e,se,q,c,k='<a href="#season-to-date-results">Season-to-date Results</a>',Ae,re,be,_e,Ce,me,Pe,ye,Ge,Se,tt,fe,at='<a href="#most-recent-games">Most Recent Games</a>',je,he,st,ue,nt='<a href="#matchup-summary">Matchup Summary</a>',Qe,Te,it,ke,ce,rt='<a href="#sample-dashboard">Sample Dashboard</a>',ze,De,_t="aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",Ve,Ne,Oe,ot,ne,ie,Fe,qe,Je,de,ge,Me,lt,Ze=n[0].conference+"",Ke,xe,Re,mt,Ue,ve,Be,pe=typeof O<"u"&&(O.title||((Ct=O.og)==null?void 0:Ct.title))&&O.hide_title!==!0&&Fa();function wt(t,o){var et;return typeof O<"u"&&(O.title||(et=O.og)!=null&&et.title)?Ha:Ma}let Ye=wt()(n),Ee=typeof O=="object"&&Ia(),U=n[1]&&Bt(n),G=n[2]&&Yt(n),Q=n[3]&&Wt(n),B=n[4]&&Pt(n),Y=n[5]&&Gt(n),W=n[6]&&jt(n),j=n[7]&&Qt(n),V=n[8]&&Vt(n),K=n[9]&&Jt(n),X=n[10]&&Kt(n),z=n[11]&&Xt(n);se=new Ca({props:{data:n[11],column:"team_long"}}),re=new dt({props:{data:n[3].filter(aa),value:"elo_rating",comparison:"since_start"}}),_e=new dt({props:{data:n[11],value:"predicted_wins",comparison:"vs_vegas_num1"}}),me=new dt({props:{data:n[11],value:"seed_range"}}),ye=new dt({props:{data:n[11],value:"win_range"}}),Se=new Aa({props:{data:n[9].filter(sa),x:"date",y:"cumulative_elo_change_num0",title:"elo change over time"}}),he=new Rt({props:{data:n[8].filter(na),rows:"5",$$slots:{default:[Ba]},$$scope:{ctx:n}}}),Te=new Rt({props:{data:n[2].filter(ia),rows:"7"}});let Z=n[10].length>0&&zt(n),x=n[12]&&xt(n);Oe=new Da({props:{data:n[12],name:"conference",value:"conf",$$slots:{default:[Wa]},$$scope:{ctx:n}}});const vt=[Ga,Pa],y=[];function He(t,o){return t[0].conference!="null"?0:1}ne=He(n),ie=y[ne]=vt[ne](n);let J=n[13]&&ea(n),ee=n[14]&&ta(n);return Re=new Ut({props:{connextGroup:1,contextMenuOptions:n[15],contextMenuClickHandler:n[16],contextmenuEnabled:!0,dblclickEnabled:!0,dblclickHandler:n[17],config:{tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["40%","70%"],data:[...n[13]],itemStyle:{emphasis:{click:n[49]}}}],init:n[50]()}}}),ve=new Ut({props:{contextMenuOptions:n[15],contextMenuClickHandler:n[16],dblclickEnabled:!0,dblclickHandler:n[17],contextmenuEnabled:!0,connextGroup:1,config:{tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["40%","70%"],data:[...n[14]]}],init:n[51](),tooltip:{trigger:"item",formatter:ua}}}}),{c(){pe&&pe.c(),a=w(),Ye.c(),s=H("meta"),e=H("meta"),Ee&&Ee.c(),i=Et(),r=w(),U&&U.c(),_=w(),G&&G.c(),p=w(),Q&&Q.c(),S=w(),B&&B.c(),E=w(),Y&&Y.c(),D=w(),W&&W.c(),h=w(),j&&j.c(),M=w(),V&&V.c(),A=w(),K&&K.c(),P=w(),X&&X.c(),g=w(),z&&z.c(),C=w(),d=H("h1"),N=H("a"),$e=Lt("Detailed Analysis for "),R(se.$$.fragment),q=w(),c=H("h2"),c.innerHTML=k,Ae=w(),R(re.$$.fragment),be=w(),R(_e.$$.fragment),Ce=w(),R(me.$$.fragment),Pe=w(),R(ye.$$.fragment),Ge=w(),R(Se.$$.fragment),tt=w(),fe=H("h3"),fe.innerHTML=at,je=w(),R(he.$$.fragment),st=w(),ue=H("h3"),ue.innerHTML=nt,Qe=w(),R(Te.$$.fragment),it=w(),Z&&Z.c(),ke=w(),ce=H("h1"),ce.innerHTML=rt,ze=w(),De=H("p"),De.textContent=_t,Ve=w(),x&&x.c(),Ne=w(),R(Oe.$$.fragment),ot=w(),ie.c(),Fe=w(),J&&J.c(),qe=w(),ee&&ee.c(),Je=w(),de=H("span"),ge=H("div"),Me=H("h2"),lt=Lt("The filter applied is: "),Ke=Lt(Ze),xe=w(),R(Re.$$.fragment),mt=w(),Ue=H("div"),R(ve.$$.fragment),this.h()},l(t){pe&&pe.l(t),a=$(t);const o=da("svelte-1j2izld",Xe.head);Ye.l(o),s=I(o,"META",{name:!0,content:!0}),e=I(o,"META",{name:!0,content:!0}),Ee&&Ee.l(o),i=Et(),o.forEach(m),r=$(t),U&&U.l(t),_=$(t),G&&G.l(t),p=$(t),Q&&Q.l(t),S=$(t),B&&B.l(t),E=$(t),Y&&Y.l(t),D=$(t),W&&W.l(t),h=$(t),j&&j.l(t),M=$(t),V&&V.l(t),A=$(t),K&&K.l(t),P=$(t),X&&X.l(t),g=$(t),z&&z.l(t),C=$(t),d=I(t,"H1",{class:!0,id:!0});var et=ct(d);N=I(et,"A",{href:!0});var gt=ct(N);$e=bt(gt,"Detailed Analysis for "),v(se.$$.fragment,gt),gt.forEach(m),et.forEach(m),q=$(t),c=I(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),We(c)!=="svelte-5bljsu"&&(c.innerHTML=k),Ae=$(t),v(re.$$.fragment,t),be=$(t),v(_e.$$.fragment,t),Ce=$(t),v(me.$$.fragment,t),Pe=$(t),v(ye.$$.fragment,t),Ge=$(t),v(Se.$$.fragment,t),tt=$(t),fe=I(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),We(fe)!=="svelte-efyf5h"&&(fe.innerHTML=at),je=$(t),v(he.$$.fragment,t),st=$(t),ue=I(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),We(ue)!=="svelte-fhdi38"&&(ue.innerHTML=nt),Qe=$(t),v(Te.$$.fragment,t),it=$(t),Z&&Z.l(t),ke=$(t),ce=I(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),We(ce)!=="svelte-1x8efvu"&&(ce.innerHTML=rt),ze=$(t),De=I(t,"P",{class:!0,"data-svelte-h":!0}),We(De)!=="svelte-18tr17t"&&(De.textContent=_t),Ve=$(t),x&&x.l(t),Ne=$(t),v(Oe.$$.fragment,t),ot=$(t),ie.l(t),Fe=$(t),J&&J.l(t),qe=$(t),ee&&ee.l(t),Je=$(t),de=I(t,"SPAN",{style:!0});var ft=ct(de);ge=I(ft,"DIV",{style:!0});var ut=ct(ge);Me=I(ut,"H2",{});var pt=ct(Me);lt=bt(pt,"The filter applied is: "),Ke=bt(pt,Ze),pt.forEach(m),xe=$(ut),v(Re.$$.fragment,ut),ut.forEach(m),mt=$(ft),Ue=I(ft,"DIV",{style:!0});var $t=ct(Ue);v(ve.$$.fragment,$t),$t.forEach(m),ft.forEach(m),this.h()},h(){T(s,"name","twitter:card"),T(s,"content","summary"),T(e,"name","twitter:site"),T(e,"content","@evidence_dev"),T(N,"href","#detailed-analysis-for-"),T(d,"class","markdown"),T(d,"id","detailed-analysis-for-"),T(c,"class","markdown"),T(c,"id","season-to-date-results"),T(fe,"class","markdown"),T(fe,"id","most-recent-games"),T(ue,"class","markdown"),T(ue,"id","matchup-summary"),T(ce,"class","markdown"),T(ce,"id","sample-dashboard"),T(De,"class","markdown"),yt(ge,"width","40vw"),yt(ge,"left","10vw"),yt(Ue,"width","40vw"),yt(Ue,"left","50vw"),yt(de,"display","flex")},m(t,o){pe&&pe.m(t,o),u(t,a,o),Ye.m(Xe.head,null),Le(Xe.head,s),Le(Xe.head,e),Ee&&Ee.m(Xe.head,null),Le(Xe.head,i),u(t,r,o),U&&U.m(t,o),u(t,_,o),G&&G.m(t,o),u(t,p,o),Q&&Q.m(t,o),u(t,S,o),B&&B.m(t,o),u(t,E,o),Y&&Y.m(t,o),u(t,D,o),W&&W.m(t,o),u(t,h,o),j&&j.m(t,o),u(t,M,o),V&&V.m(t,o),u(t,A,o),K&&K.m(t,o),u(t,P,o),X&&X.m(t,o),u(t,g,o),z&&z.m(t,o),u(t,C,o),u(t,d,o),Le(d,N),Le(N,$e),L(se,N,null),u(t,q,o),u(t,c,o),u(t,Ae,o),L(re,t,o),u(t,be,o),L(_e,t,o),u(t,Ce,o),L(me,t,o),u(t,Pe,o),L(ye,t,o),u(t,Ge,o),L(Se,t,o),u(t,tt,o),u(t,fe,o),u(t,je,o),L(he,t,o),u(t,st,o),u(t,ue,o),u(t,Qe,o),L(Te,t,o),u(t,it,o),Z&&Z.m(t,o),u(t,ke,o),u(t,ce,o),u(t,ze,o),u(t,De,o),u(t,Ve,o),x&&x.m(t,o),u(t,Ne,o),L(Oe,t,o),u(t,ot,o),y[ne].m(t,o),u(t,Fe,o),J&&J.m(t,o),u(t,qe,o),ee&&ee.m(t,o),u(t,Je,o),u(t,de,o),Le(de,ge),Le(ge,Me),Le(Me,lt),Le(Me,Ke),Le(ge,xe),L(Re,ge,null),Le(de,mt),Le(de,Ue),L(ve,Ue,null),Be=!0},p(t,o){var Ft;typeof O<"u"&&(O.title||(Ft=O.og)!=null&&Ft.title)&&O.hide_title!==!0&&pe.p(t,o),Ye.p(t,o),typeof O=="object"&&Ee.p(t,o),t[1]?U?(U.p(t,o),o[0]&2&&l(U,1)):(U=Bt(t),U.c(),l(U,1),U.m(_.parentNode,_)):U&&(le(),f(U,1,1,()=>{U=null}),oe()),t[2]?G?(G.p(t,o),o[0]&4&&l(G,1)):(G=Yt(t),G.c(),l(G,1),G.m(p.parentNode,p)):G&&(le(),f(G,1,1,()=>{G=null}),oe()),t[3]?Q?(Q.p(t,o),o[0]&8&&l(Q,1)):(Q=Wt(t),Q.c(),l(Q,1),Q.m(S.parentNode,S)):Q&&(le(),f(Q,1,1,()=>{Q=null}),oe()),t[4]?B?(B.p(t,o),o[0]&16&&l(B,1)):(B=Pt(t),B.c(),l(B,1),B.m(E.parentNode,E)):B&&(le(),f(B,1,1,()=>{B=null}),oe()),t[5]?Y?(Y.p(t,o),o[0]&32&&l(Y,1)):(Y=Gt(t),Y.c(),l(Y,1),Y.m(D.parentNode,D)):Y&&(le(),f(Y,1,1,()=>{Y=null}),oe()),t[6]?W?(W.p(t,o),o[0]&64&&l(W,1)):(W=jt(t),W.c(),l(W,1),W.m(h.parentNode,h)):W&&(le(),f(W,1,1,()=>{W=null}),oe()),t[7]?j?(j.p(t,o),o[0]&128&&l(j,1)):(j=Qt(t),j.c(),l(j,1),j.m(M.parentNode,M)):j&&(le(),f(j,1,1,()=>{j=null}),oe()),t[8]?V?(V.p(t,o),o[0]&256&&l(V,1)):(V=Vt(t),V.c(),l(V,1),V.m(A.parentNode,A)):V&&(le(),f(V,1,1,()=>{V=null}),oe()),t[9]?K?(K.p(t,o),o[0]&512&&l(K,1)):(K=Jt(t),K.c(),l(K,1),K.m(P.parentNode,P)):K&&(le(),f(K,1,1,()=>{K=null}),oe()),t[10]?X?(X.p(t,o),o[0]&1024&&l(X,1)):(X=Kt(t),X.c(),l(X,1),X.m(g.parentNode,g)):X&&(le(),f(X,1,1,()=>{X=null}),oe()),t[11]?z?(z.p(t,o),o[0]&2048&&l(z,1)):(z=Xt(t),z.c(),l(z,1),z.m(C.parentNode,C)):z&&(le(),f(z,1,1,()=>{z=null}),oe());const et={};o[0]&2048&&(et.data=t[11]),se.$set(et);const gt={};o[0]&8&&(gt.data=t[3].filter(aa)),re.$set(gt);const ft={};o[0]&2048&&(ft.data=t[11]),_e.$set(ft);const ut={};o[0]&2048&&(ut.data=t[11]),me.$set(ut);const pt={};o[0]&2048&&(pt.data=t[11]),ye.$set(pt);const $t={};o[0]&512&&($t.data=t[9].filter(sa)),Se.$set($t);const ht={};o[0]&256&&(ht.data=t[8].filter(na)),o[2]&536870912&&(ht.$$scope={dirty:o,ctx:t}),he.$set(ht);const kt={};o[0]&4&&(kt.data=t[2].filter(ia)),Te.$set(kt),t[10].length>0?Z?(Z.p(t,o),o[0]&1024&&l(Z,1)):(Z=zt(t),Z.c(),l(Z,1),Z.m(ke.parentNode,ke)):Z&&(le(),f(Z,1,1,()=>{Z=null}),oe()),t[12]?x?(x.p(t,o),o[0]&4096&&l(x,1)):(x=xt(t),x.c(),l(x,1),x.m(Ne.parentNode,Ne)):x&&(le(),f(x,1,1,()=>{x=null}),oe());const Tt={};o[0]&4096&&(Tt.data=t[12]),o[2]&536870912&&(Tt.$$scope={dirty:o,ctx:t}),Oe.$set(Tt);let Ot=ne;ne=He(t),ne===Ot?y[ne].p(t,o):(le(),f(y[Ot],1,1,()=>{y[Ot]=null}),oe(),ie=y[ne],ie?ie.p(t,o):(ie=y[ne]=vt[ne](t),ie.c()),l(ie,1),ie.m(Fe.parentNode,Fe)),t[13]?J?(J.p(t,o),o[0]&8192&&l(J,1)):(J=ea(t),J.c(),l(J,1),J.m(qe.parentNode,qe)):J&&(le(),f(J,1,1,()=>{J=null}),oe()),t[14]?ee?(ee.p(t,o),o[0]&16384&&l(ee,1)):(ee=ta(t),ee.c(),l(ee,1),ee.m(Je.parentNode,Je)):ee&&(le(),f(ee,1,1,()=>{ee=null}),oe()),(!Be||o[0]&1)&&Ze!==(Ze=t[0].conference+"")&&ga(Ke,Ze);const Dt={};o[0]&8192&&(Dt.config={tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["40%","70%"],data:[...t[13]],itemStyle:{emphasis:{click:t[49]}}}],init:t[50]()}),Re.$set(Dt);const Nt={};o[0]&16384&&(Nt.config={tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["40%","70%"],data:[...t[14]]}],init:t[51](),tooltip:{trigger:"item",formatter:ua}}),ve.$set(Nt)},i(t){Be||(l(U),l(G),l(Q),l(B),l(Y),l(W),l(j),l(V),l(K),l(X),l(z),l(se.$$.fragment,t),l(re.$$.fragment,t),l(_e.$$.fragment,t),l(me.$$.fragment,t),l(ye.$$.fragment,t),l(Se.$$.fragment,t),l(he.$$.fragment,t),l(Te.$$.fragment,t),l(Z),l(x),l(Oe.$$.fragment,t),l(ie),l(J),l(ee),l(Re.$$.fragment,t),l(ve.$$.fragment,t),Be=!0)},o(t){f(U),f(G),f(Q),f(B),f(Y),f(W),f(j),f(V),f(K),f(X),f(z),f(se.$$.fragment,t),f(re.$$.fragment,t),f(_e.$$.fragment,t),f(me.$$.fragment,t),f(ye.$$.fragment,t),f(Se.$$.fragment,t),f(he.$$.fragment,t),f(Te.$$.fragment,t),f(Z),f(x),f(Oe.$$.fragment,t),f(ie),f(J),f(ee),f(Re.$$.fragment,t),f(ve.$$.fragment,t),Be=!1},d(t){t&&(m(a),m(r),m(_),m(p),m(S),m(E),m(D),m(h),m(M),m(A),m(P),m(g),m(C),m(d),m(q),m(c),m(Ae),m(be),m(Ce),m(Pe),m(Ge),m(tt),m(fe),m(je),m(st),m(ue),m(Qe),m(it),m(ke),m(ce),m(ze),m(De),m(Ve),m(Ne),m(ot),m(Fe),m(qe),m(Je),m(de)),pe&&pe.d(t),Ye.d(t),m(s),m(e),Ee&&Ee.d(t),m(i),U&&U.d(t),G&&G.d(t),Q&&Q.d(t),B&&B.d(t),Y&&Y.d(t),W&&W.d(t),j&&j.d(t),V&&V.d(t),K&&K.d(t),X&&X.d(t),z&&z.d(t),b(se),b(re,t),b(_e,t),b(me,t),b(ye,t),b(Se,t),b(he,t),b(Te,t),Z&&Z.d(t),x&&x.d(t),b(Oe,t),y[ne].d(t),J&&J.d(t),ee&&ee.d(t),b(Re),b(ve)}}}const O={queries:[{season_summary:"nba/season_summary.sql"},{records_table:"nba/records_table.sql"},{elo_latest:"nba/elo_latest.sql"},{seed_details:"nba/seed_details.sql"},{wins_details:"nba/wins_details.sql"},{playoff_wins:"nba/playoff_odds_by_team_by_wins.sql"},{playoff_odds:"nba/playoff_odds.sql"},{most_recent_games:"nba/most_recent_games.sql"},{game_trend:"nba/game_trend.sql"},{future_games:"nba/future_games.sql"}]},aa=n=>n.team==="BOS",sa=n=>n.team==="BOS",na=n=>n.home_team===n.team==="BOS",ia=n=>n.team==="BOS",ra=n=>n.team==="BOS",_a=n=>n.team==="BOS",oa=n=>n.team==="BOS",la=n=>n.team==="BOS",ma=n=>n.team==="BOS",fa=n=>n.team==="BOS",ua=function(n){return n.name+": "+n.value+'<br/><a href="report_details.html?category='+n.name+'">Details</a>'};function Ja(n,a,s){let e,i;Mt(n,ha,y=>s(48,e=y)),Mt(n,It,y=>s(71,i=y));let{data:r}=a,{data:_={},customFormattingSettings:p,__db:S,inputs:E}=r;pa(It,i="4539330648b80f94ef3bf911f6d77ac9",i);let D=Sa(E);Ht(La,D),Ea(D.subscribe(y=>s(0,E=y))),Ht(ba,{getCustomFormats:()=>p.customFormats||[]});const h=(y,He)=>ka(S.query,y,{query_name:He});Ra(h);let M;const A=()=>{M||(M=setTimeout(()=>{qt.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},P=()=>{M?(clearTimeout(M),M=null):qt.dismiss("LoadingToast")};At(()=>(te.addEventListener("inFlightQueryStart",A),te.addEventListener("inFlightQueryEnd",P),te.QueriesLoading&&A(),()=>{te.removeEventListener("inFlightQueryStart",A),te.removeEventListener("inFlightQueryEnd",P)})),e.params,At(()=>!0);let g={initialData:void 0,initialError:void 0},C=F`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`,d=`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`;_.season_summary&&(_.season_summary instanceof Error?g.initialError=_.season_summary:g.initialData=_.season_summary);let N;const $e=te.createReactive({callback:y=>{s(1,N=y)},execFn:h},{id:"season_summary",initialData:g.initialData,initialError:g.initialError});$e(d,{noResolve:C}),globalThis[Symbol.for("season_summary")]={get value(){return N}};let se={initialData:void 0,initialError:void 0},q=F`SELECT
    team,
    'all games' as type,
    wins,
    losses,
    wins::real / (wins+losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'at home' as type,
    home_wins,
    home_losses,
    home_wins::real / (home_wins+home_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'away' as type,
    away_wins,
    away_losses,
    away_wins::real / (away_wins+away_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as favorite',
    wins_as_favorite,
    losses_as_favorite,
    wins_as_favorite::real / (wins_as_favorite+losses_as_favorite)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as underdog',
    wins_as_underdog,
    losses_as_underdog,
    wins_as_underdog::real / (wins_as_underdog+losses_as_underdog)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs good teams',
    wins_vs_good_teams,
    losses_vs_good_teams,
    wins_vs_good_teams::real / (wins_vs_good_teams+losses_vs_good_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs bad teams',
    wins_vs_bad_teams,
    losses_vs_bad_teams,
    wins_vs_bad_teams::real / (wins_vs_bad_teams+losses_vs_bad_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched`,c=`SELECT
    team,
    'all games' as type,
    wins,
    losses,
    wins::real / (wins+losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'at home' as type,
    home_wins,
    home_losses,
    home_wins::real / (home_wins+home_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'away' as type,
    away_wins,
    away_losses,
    away_wins::real / (away_wins+away_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as favorite',
    wins_as_favorite,
    losses_as_favorite,
    wins_as_favorite::real / (wins_as_favorite+losses_as_favorite)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as underdog',
    wins_as_underdog,
    losses_as_underdog,
    wins_as_underdog::real / (wins_as_underdog+losses_as_underdog)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs good teams',
    wins_vs_good_teams,
    losses_vs_good_teams,
    wins_vs_good_teams::real / (wins_vs_good_teams+losses_vs_good_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs bad teams',
    wins_vs_bad_teams,
    losses_vs_bad_teams,
    wins_vs_bad_teams::real / (wins_vs_bad_teams+losses_vs_bad_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched`;_.records_table&&(_.records_table instanceof Error?se.initialError=_.records_table:se.initialData=_.records_table);let k;const Ae=te.createReactive({callback:y=>{s(2,k=y)},execFn:h},{id:"records_table",initialData:se.initialData,initialError:se.initialError});Ae(c,{noResolve:q}),globalThis[Symbol.for("records_table")]={get value(){return k}};let re={initialData:void 0,initialError:void 0},be=F`SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`,_e=`SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`;_.elo_latest&&(_.elo_latest instanceof Error?re.initialError=_.elo_latest:re.initialData=_.elo_latest);let Ce;const me=te.createReactive({callback:y=>{s(3,Ce=y)},execFn:h},{id:"elo_latest",initialData:re.initialData,initialError:re.initialError});me(_e,{noResolve:be}),globalThis[Symbol.for("elo_latest")]={get value(){return Ce}};let Pe={initialData:void 0,initialError:void 0},ye=F`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`,Ge=`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`;_.seed_details&&(_.seed_details instanceof Error?Pe.initialError=_.seed_details:Pe.initialData=_.seed_details);let Se;const tt=te.createReactive({callback:y=>{s(4,Se=y)},execFn:h},{id:"seed_details",initialData:Pe.initialData,initialError:Pe.initialError});tt(Ge,{noResolve:ye}),globalThis[Symbol.for("seed_details")]={get value(){return Se}};let fe={initialData:void 0,initialError:void 0},at=F`SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`,je=`SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`;_.wins_details&&(_.wins_details instanceof Error?fe.initialError=_.wins_details:fe.initialData=_.wins_details);let he;const st=te.createReactive({callback:y=>{s(5,he=y)},execFn:h},{id:"wins_details",initialData:fe.initialData,initialError:fe.initialError});st(je,{noResolve:at}),globalThis[Symbol.for("wins_details")]={get value(){return he}};let ue={initialData:void 0,initialError:void 0},nt=F`SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key`,Qe=`SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key`;_.playoff_wins&&(_.playoff_wins instanceof Error?ue.initialError=_.playoff_wins:ue.initialData=_.playoff_wins);let Te;const it=te.createReactive({callback:y=>{s(6,Te=y)},execFn:h},{id:"playoff_wins",initialData:ue.initialData,initialError:ue.initialError});it(Qe,{noResolve:nt}),globalThis[Symbol.for("playoff_wins")]={get value(){return Te}};let ke={initialData:void 0,initialError:void 0},ce=F`SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'top six seed'),0) as top_six_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'play in'),0) as play_in_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key)
GROUP BY ALL`,rt=`SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'top six seed'),0) as top_six_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'play in'),0) as play_in_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key)
GROUP BY ALL`;_.playoff_odds&&(_.playoff_odds instanceof Error?ke.initialError=_.playoff_odds:ke.initialData=_.playoff_odds);let ze;const De=te.createReactive({callback:y=>{s(7,ze=y)},execFn:h},{id:"playoff_odds",initialData:ke.initialData,initialError:ke.initialError});De(rt,{noResolve:ce}),globalThis[Symbol.for("playoff_odds")]={get value(){return ze}};let _t={initialData:void 0,initialError:void 0},Ve=F`SELECT
    game_date AS date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
    ELSE '' END AS "T",
    vstm AS visiting_team,
    '@' AS " ",
    hmtm AS home_team,
    CASE 
        WHEN home_team_score > visiting_team_score THEN home_team_score::int || ' - ' || visiting_team_score::int 
        ELSE visiting_team_score::int || ' - ' || home_team_score::int
    END AS score,
    winning_team,
    ABS(elo_change) AS elo_change_num1,
    type,
    vstm || ' @ ' || hmtm AS matchup
FROM src_nba_results_log RL
ORDER BY game_date desc`,Ne=`SELECT
    game_date AS date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
    ELSE '' END AS "T",
    vstm AS visiting_team,
    '@' AS " ",
    hmtm AS home_team,
    CASE 
        WHEN home_team_score > visiting_team_score THEN home_team_score::int || ' - ' || visiting_team_score::int 
        ELSE visiting_team_score::int || ' - ' || home_team_score::int
    END AS score,
    winning_team,
    ABS(elo_change) AS elo_change_num1,
    type,
    vstm || ' @ ' || hmtm AS matchup
FROM src_nba_results_log RL
ORDER BY game_date desc`;_.most_recent_games&&(_.most_recent_games instanceof Error?_t.initialError=_.most_recent_games:_t.initialData=_.most_recent_games);let Oe;const ot=te.createReactive({callback:y=>{s(8,Oe=y)},execFn:h},{id:"most_recent_games",initialData:_t.initialData,initialError:_t.initialError});ot(Ne,{noResolve:Ve}),globalThis[Symbol.for("most_recent_games")]={get value(){return Oe}};let ne={initialData:void 0,initialError:void 0},ie=F`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nba_latest_elo
UNION ALL
SELECT game_id, vstm as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nba_results_log
UNION ALL
SELECT game_id, hmtm as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nba_results_log )
SELECT 
    COALESCE(AR.game_date,'2023-10-23')::date AS date,
    RL.team, 
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.game_date,'2023-10-23') asc rows between unbounded preceding and current row) as cumulative_elo_change_num0,
    RL.elo_rating + RL.elo_change AS elo_post
FROM cte_games RL
LEFT JOIN src_nba_results_log AR ON AR.game_id = RL.game_id
ORDER BY date`,Fe=`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nba_latest_elo
UNION ALL
SELECT game_id, vstm as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nba_results_log
UNION ALL
SELECT game_id, hmtm as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nba_results_log )
SELECT 
    COALESCE(AR.game_date,'2023-10-23')::date AS date,
    RL.team, 
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.game_date,'2023-10-23') asc rows between unbounded preceding and current row) as cumulative_elo_change_num0,
    RL.elo_rating + RL.elo_change AS elo_post
FROM cte_games RL
LEFT JOIN src_nba_results_log AR ON AR.game_id = RL.game_id
ORDER BY date`;_.game_trend&&(_.game_trend instanceof Error?ne.initialError=_.game_trend:ne.initialData=_.game_trend);let qe;const Je=te.createReactive({callback:y=>{s(9,qe=y)},execFn:h},{id:"game_trend",initialData:ne.initialData,initialError:ne.initialError});Je(Fe,{noResolve:ie}),globalThis[Symbol.for("game_trend")]={get value(){return qe}};let de={initialData:void 0,initialError:void 0},ge=F`SELECT
    game_id,
    date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
        ELSE '' END 
    AS "T",
    visiting_team as visitor,
    visiting_team_elo_rating AS visitor_ELO,
    home_team as home, 
    home_team_elo_rating AS home_ELO,
    home_team_elo_rating - visiting_team_elo_rating AS elo_diff,
    elo_diff + 100 AS elo_diff_hfa,
    home_team_win_probability/10000 AS home_win_pct1,
    american_odds,
    implied_line AS implied_line_num1,
    predicted_score,
    type,
    '/nba/predictions/' || (game_id::int) as game_link
FROM src_reg_season_predictions
WHERE include_actuals = false AND winning_team = home_team
ORDER BY game_id`,Me=`SELECT
    game_id,
    date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
        ELSE '' END 
    AS "T",
    visiting_team as visitor,
    visiting_team_elo_rating AS visitor_ELO,
    home_team as home, 
    home_team_elo_rating AS home_ELO,
    home_team_elo_rating - visiting_team_elo_rating AS elo_diff,
    elo_diff + 100 AS elo_diff_hfa,
    home_team_win_probability/10000 AS home_win_pct1,
    american_odds,
    implied_line AS implied_line_num1,
    predicted_score,
    type,
    '/nba/predictions/' || (game_id::int) as game_link
FROM src_reg_season_predictions
WHERE include_actuals = false AND winning_team = home_team
ORDER BY game_id`;_.future_games&&(_.future_games instanceof Error?de.initialError=_.future_games:de.initialData=_.future_games);let lt;const Ze=te.createReactive({callback:y=>{s(10,lt=y)},execFn:h},{id:"future_games",initialData:de.initialData,initialError:de.initialError});Ze(Me,{noResolve:ge}),globalThis[Symbol.for("future_games")]={get value(){return lt}};let Ke={initialData:void 0,initialError:void 0},xe=F`select *
    from (select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team)
    where team like 'BOS'`,Re=`select *
    from (select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team)
    where team like 'BOS'`;_.filtered_season_summary&&(_.filtered_season_summary instanceof Error?Ke.initialError=_.filtered_season_summary:Ke.initialData=_.filtered_season_summary);let mt;const Ue=te.createReactive({callback:y=>{s(11,mt=y)},execFn:h},{id:"filtered_season_summary",initialData:Ke.initialData,initialError:Ke.initialError});Ue(Re,{noResolve:xe}),globalThis[Symbol.for("filtered_season_summary")]={get value(){return mt}};let ve={initialData:void 0,initialError:void 0},Be=F`select  conf, count(conf) as _count from src_nba_teams where conf like '${E.conference}' group by conf order by _count desc`,pe=`select  conf, count(conf) as _count from src_nba_teams where conf like '${E.conference}' group by conf order by _count desc`;_.aaa&&(_.aaa instanceof Error?ve.initialError=_.aaa:ve.initialData=_.aaa);let wt;const St=te.createReactive({callback:y=>{s(12,wt=y)},execFn:h},{id:"aaa",initialData:ve.initialData,initialError:ve.initialError});St(pe,{noResolve:Be}),globalThis[Symbol.for("aaa")]={get value(){return wt}};let Ye={initialData:void 0,initialError:void 0},Ee=F`select  count(conf) as value, conf as name from src_nba_teams where conf like '${E.conference}' group by name order by value desc`,U=`select  count(conf) as value, conf as name from src_nba_teams where conf like '${E.conference}' group by name order by value desc`;_.pieTestData1&&(_.pieTestData1 instanceof Error?Ye.initialError=_.pieTestData1:Ye.initialData=_.pieTestData1);let G;const Q=te.createReactive({callback:y=>{s(13,G=y)},execFn:h},{id:"pieTestData1",initialData:Ye.initialData,initialError:Ye.initialError});Q(U,{noResolve:Ee}),globalThis[Symbol.for("pieTestData1")]={get value(){return G}};let B={initialData:void 0,initialError:void 0},Y=F`select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${E.conference}' group by name, tournament_group order by value desc`,W=`select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${E.conference}' group by name, tournament_group order by value desc`;_.pieTestData2&&(_.pieTestData2 instanceof Error?B.initialError=_.pieTestData2:B.initialData=_.pieTestData2);let j;const V=te.createReactive({callback:y=>{s(14,j=y)},execFn:h},{id:"pieTestData2",initialData:B.initialData,initialError:B.initialError});V(W,{noResolve:Y}),globalThis[Symbol.for("pieTestData2")]={get value(){return j}};let K=[{key:"Cross Filter",menuClass:"menu-option"},{key:"Drill to Detail",menuClass:"menu-option"},{key:"Drill By",menuClass:"menu-option",menuClass:"menu-option"},{key:"Show Correlations",menuClass:"menu-option"}],X=()=>{var y,He;console.log("clicked contextmenu option >>",event.target," params ::: ",window.__selectedContextMenuParams),s(0,E.conference=(He=(y=window.__selectedContextMenuParams)==null?void 0:y.data)==null?void 0:He.name,E),event.target.parentElement.parentElement.style.display="none",window.__selectedContextMenuParams=void 0},z=()=>{var y;console.log("dblclickHandler option >>",event.target),E.conference=="%"?s(0,E.conference=__dblclickParams.name||((y=__dblclickParams==null?void 0:__dblclickParams.data)==null?void 0:y.name),E):s(0,E.conference="%",E)};At(()=>{const y=document.querySelector("div.chart-container div.chart");for(let He=0;He<y.length;He++){let J=y[He];const ee=echarts.getInstanceByDom(J);console.log("_echartDom ",J),console.log("Echart instance is ",ee)}});const Z=function(y){alert("Clicked on category: "+y.name+", value: "+y.value)},x=function(y){console.log(y)},vt=function(y){console.log(y)};return n.$$set=y=>{"data"in y&&s(18,r=y.data)},n.$$.update=()=>{n.$$.dirty[0]&262144&&s(19,{data:_={},customFormattingSettings:p,__db:S}=r,_),n.$$.dirty[0]&524288&&va.set(Object.keys(_).length>0),n.$$.dirty[1]&131072&&e.params,n.$$.dirty[0]&3145728&&$e(d,{noResolve:C}),n.$$.dirty[0]&12582912&&Ae(c,{noResolve:q}),n.$$.dirty[0]&50331648&&me(_e,{noResolve:be}),n.$$.dirty[0]&201326592&&tt(Ge,{noResolve:ye}),n.$$.dirty[0]&805306368&&st(je,{noResolve:at}),n.$$.dirty[0]&1073741824|n.$$.dirty[1]&1&&it(Qe,{noResolve:nt}),n.$$.dirty[1]&6&&De(rt,{noResolve:ce}),n.$$.dirty[1]&24&&ot(Ne,{noResolve:Ve}),n.$$.dirty[1]&96&&Je(Fe,{noResolve:ie}),n.$$.dirty[1]&384&&Ze(Me,{noResolve:ge}),n.$$.dirty[1]&1536&&Ue(Re,{noResolve:xe}),n.$$.dirty[0]&1&&s(42,Be=F`select  conf, count(conf) as _count from src_nba_teams where conf like '${E.conference}' group by conf order by _count desc`),n.$$.dirty[0]&1&&s(43,pe=`select  conf, count(conf) as _count from src_nba_teams where conf like '${E.conference}' group by conf order by _count desc`),n.$$.dirty[1]&6144&&St(pe,{noResolve:Be}),n.$$.dirty[0]&1&&s(44,Ee=F`select  count(conf) as value, conf as name from src_nba_teams where conf like '${E.conference}' group by name order by value desc`),n.$$.dirty[0]&1&&s(45,U=`select  count(conf) as value, conf as name from src_nba_teams where conf like '${E.conference}' group by name order by value desc`),n.$$.dirty[1]&24576&&Q(U,{noResolve:Ee}),n.$$.dirty[0]&1&&s(46,Y=F`select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${E.conference}' group by name, tournament_group order by value desc`),n.$$.dirty[0]&1&&s(47,W=`select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${E.conference}' group by name, tournament_group order by value desc`),n.$$.dirty[1]&98304&&V(W,{noResolve:Y})},s(20,C=F`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`),s(21,d=`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`),s(22,q=F`SELECT
    team,
    'all games' as type,
    wins,
    losses,
    wins::real / (wins+losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'at home' as type,
    home_wins,
    home_losses,
    home_wins::real / (home_wins+home_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'away' as type,
    away_wins,
    away_losses,
    away_wins::real / (away_wins+away_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as favorite',
    wins_as_favorite,
    losses_as_favorite,
    wins_as_favorite::real / (wins_as_favorite+losses_as_favorite)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as underdog',
    wins_as_underdog,
    losses_as_underdog,
    wins_as_underdog::real / (wins_as_underdog+losses_as_underdog)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs good teams',
    wins_vs_good_teams,
    losses_vs_good_teams,
    wins_vs_good_teams::real / (wins_vs_good_teams+losses_vs_good_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs bad teams',
    wins_vs_bad_teams,
    losses_vs_bad_teams,
    wins_vs_bad_teams::real / (wins_vs_bad_teams+losses_vs_bad_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched`),s(23,c=`SELECT
    team,
    'all games' as type,
    wins,
    losses,
    wins::real / (wins+losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'at home' as type,
    home_wins,
    home_losses,
    home_wins::real / (home_wins+home_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'away' as type,
    away_wins,
    away_losses,
    away_wins::real / (away_wins+away_losses)::real as win_pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as favorite',
    wins_as_favorite,
    losses_as_favorite,
    wins_as_favorite::real / (wins_as_favorite+losses_as_favorite)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'as underdog',
    wins_as_underdog,
    losses_as_underdog,
    wins_as_underdog::real / (wins_as_underdog+losses_as_underdog)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs good teams',
    wins_vs_good_teams,
    losses_vs_good_teams,
    wins_vs_good_teams::real / (wins_vs_good_teams+losses_vs_good_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched
UNION ALL
SELECT
    team,
    'vs bad teams',
    wins_vs_bad_teams,
    losses_vs_bad_teams,
    wins_vs_bad_teams::real / (wins_vs_bad_teams+losses_vs_bad_teams)::real as pct_num3
FROM src_reg_season_actuals_enriched`),s(24,be=F`SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`),s(25,_e=`SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`),s(26,ye=F`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`),s(27,Ge=`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`),s(28,at=F`SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`),s(29,je=`SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`),s(30,nt=F`SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key`),s(31,Qe=`SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key`),s(32,ce=F`SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'top six seed'),0) as top_six_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'play in'),0) as play_in_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key)
GROUP BY ALL`),s(33,rt=`SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'top six seed'),0) as top_six_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'play in'),0) as play_in_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key)
GROUP BY ALL`),s(34,Ve=F`SELECT
    game_date AS date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
    ELSE '' END AS "T",
    vstm AS visiting_team,
    '@' AS " ",
    hmtm AS home_team,
    CASE 
        WHEN home_team_score > visiting_team_score THEN home_team_score::int || ' - ' || visiting_team_score::int 
        ELSE visiting_team_score::int || ' - ' || home_team_score::int
    END AS score,
    winning_team,
    ABS(elo_change) AS elo_change_num1,
    type,
    vstm || ' @ ' || hmtm AS matchup
FROM src_nba_results_log RL
ORDER BY game_date desc`),s(35,Ne=`SELECT
    game_date AS date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
    ELSE '' END AS "T",
    vstm AS visiting_team,
    '@' AS " ",
    hmtm AS home_team,
    CASE 
        WHEN home_team_score > visiting_team_score THEN home_team_score::int || ' - ' || visiting_team_score::int 
        ELSE visiting_team_score::int || ' - ' || home_team_score::int
    END AS score,
    winning_team,
    ABS(elo_change) AS elo_change_num1,
    type,
    vstm || ' @ ' || hmtm AS matchup
FROM src_nba_results_log RL
ORDER BY game_date desc`),s(36,ie=F`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nba_latest_elo
UNION ALL
SELECT game_id, vstm as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nba_results_log
UNION ALL
SELECT game_id, hmtm as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nba_results_log )
SELECT 
    COALESCE(AR.game_date,'2023-10-23')::date AS date,
    RL.team, 
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.game_date,'2023-10-23') asc rows between unbounded preceding and current row) as cumulative_elo_change_num0,
    RL.elo_rating + RL.elo_change AS elo_post
FROM cte_games RL
LEFT JOIN src_nba_results_log AR ON AR.game_id = RL.game_id
ORDER BY date`),s(37,Fe=`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nba_latest_elo
UNION ALL
SELECT game_id, vstm as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nba_results_log
UNION ALL
SELECT game_id, hmtm as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nba_results_log )
SELECT 
    COALESCE(AR.game_date,'2023-10-23')::date AS date,
    RL.team, 
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.game_date,'2023-10-23') asc rows between unbounded preceding and current row) as cumulative_elo_change_num0,
    RL.elo_rating + RL.elo_change AS elo_post
FROM cte_games RL
LEFT JOIN src_nba_results_log AR ON AR.game_id = RL.game_id
ORDER BY date`),s(38,ge=F`SELECT
    game_id,
    date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
        ELSE '' END 
    AS "T",
    visiting_team as visitor,
    visiting_team_elo_rating AS visitor_ELO,
    home_team as home, 
    home_team_elo_rating AS home_ELO,
    home_team_elo_rating - visiting_team_elo_rating AS elo_diff,
    elo_diff + 100 AS elo_diff_hfa,
    home_team_win_probability/10000 AS home_win_pct1,
    american_odds,
    implied_line AS implied_line_num1,
    predicted_score,
    type,
    '/nba/predictions/' || (game_id::int) as game_link
FROM src_reg_season_predictions
WHERE include_actuals = false AND winning_team = home_team
ORDER BY game_id`),s(39,Me=`SELECT
    game_id,
    date,
    CASE WHEN type = 'tournament' THEN '🏆' 
        WHEN type = 'knockout' THEN '🥊'
        ELSE '' END 
    AS "T",
    visiting_team as visitor,
    visiting_team_elo_rating AS visitor_ELO,
    home_team as home, 
    home_team_elo_rating AS home_ELO,
    home_team_elo_rating - visiting_team_elo_rating AS elo_diff,
    elo_diff + 100 AS elo_diff_hfa,
    home_team_win_probability/10000 AS home_win_pct1,
    american_odds,
    implied_line AS implied_line_num1,
    predicted_score,
    type,
    '/nba/predictions/' || (game_id::int) as game_link
FROM src_reg_season_predictions
WHERE include_actuals = false AND winning_team = home_team
ORDER BY game_id`),s(40,xe=F`select *
    from (select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team)
    where team like 'BOS'`),s(41,Re=`select *
    from (select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team)
    where team like 'BOS'`),[E,N,k,Ce,Se,he,Te,ze,Oe,qe,lt,mt,wt,G,j,K,X,z,r,_,C,d,q,c,be,_e,ye,Ge,at,je,nt,Qe,ce,rt,Ve,Ne,ie,Fe,ge,Me,xe,Re,Be,pe,Ee,U,Y,W,e,Z,x,vt]}class ds extends wa{constructor(a){super(),$a(this,a,Ja,Va,ca,{data:18},null,[-1,-1,-1])}}export{ds as component};
