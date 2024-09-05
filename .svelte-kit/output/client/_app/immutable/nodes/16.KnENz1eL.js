import{s as vs,a as R,e as X,b as Ce,t as ds,c as L,h as $s,d as z,f as u,r as Je,u as gs,g as Ne,i as T,j as g,k as Be,l as Xe,m as Ss,o as ze,p as bs,q as Ze,n as ke}from"../chunks/scheduler.BVCo5HCX.js";import{S as hs,i as As,c as $,a as S,m as b,t as d,b as p,d as Ee,e as h,g as we}from"../chunks/index.C9mGAhn_.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.COvZ985M.js";import{s as Ts,Q as ee,p as Os,r as xe,t as es}from"../chunks/index.DAWWTyat.js";import{h as K}from"../chunks/setTrackProxy.Cl20Y9Hv.js";import{I as Cs,C as Ns}from"../chunks/globalContexts.1hDlTDmj.js";import{w as ks}from"../chunks/entry.ZsnkuR_y.js";import{D as Ke,C as ae}from"../chunks/DataTable.C27QukxD.js";import{p as Fs}from"../chunks/stores.C49gDDi_.js";import{A as Ms}from"../chunks/AreaChart.BteOLp13.js";import{B as Ds}from"../chunks/BarChart.CThAdPla.js";import{B as He}from"../chunks/BigValue.fsHmo18v.js";import{L as Hs}from"../chunks/LineChart.4dpktC06.js";import{V as Us}from"../chunks/Value.D-dvCgmI.js";import{p as Is}from"../chunks/profile.BW8tN6E9.js";import{Q as Le}from"../chunks/QueryViewer.CXzVRZ_y.js";function qs(i){var n;let a,t=(A.title??((n=A.og)==null?void 0:n.title))+"",e;return{c(){a=X("h1"),e=ds(t),this.h()},l(o){a=z(o,"H1",{class:!0});var _=Je(a);e=gs(_,t),_.forEach(u),this.h()},h(){T(a,"class","title")},m(o,_){g(o,a,_),Be(a,e)},p:ke,d(o){o&&u(a)}}}function Bs(i){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:ke,p:ke,d:ke}}function Ys(i){var _;let a,t,e,n,o;return document.title=a=A.title??((_=A.og)==null?void 0:_.title),{c(){t=R(),e=X("meta"),n=R(),o=X("meta"),this.h()},l(c){t=L(c),e=z(c,"META",{property:!0,content:!0}),n=L(c),o=z(c,"META",{name:!0,content:!0}),this.h()},h(){var c,y;T(e,"property","og:title"),T(e,"content",((c=A.og)==null?void 0:c.title)??A.title),T(o,"name","twitter:title"),T(o,"content",((y=A.og)==null?void 0:y.title)??A.title)},m(c,y){g(c,t,y),g(c,e,y),g(c,n,y),g(c,o,y)},p(c,y){var E;y&0&&a!==(a=A.title??((E=A.og)==null?void 0:E.title))&&(document.title=a)},d(c){c&&(u(t),u(e),u(n),u(o))}}}function Ws(i){var o,_;let a,t,e=(A.description||((o=A.og)==null?void 0:o.description))&&Ps(),n=((_=A.og)==null?void 0:_.image)&&Gs();return{c(){e&&e.c(),a=R(),n&&n.c(),t=Ce()},l(c){e&&e.l(c),a=L(c),n&&n.l(c),t=Ce()},m(c,y){e&&e.m(c,y),g(c,a,y),n&&n.m(c,y),g(c,t,y)},p(c,y){var E,k;(A.description||(E=A.og)!=null&&E.description)&&e.p(c,y),(k=A.og)!=null&&k.image&&n.p(c,y)},d(c){c&&(u(a),u(t)),e&&e.d(c),n&&n.d(c)}}}function Ps(i){let a,t,e,n,o;return{c(){a=X("meta"),t=R(),e=X("meta"),n=R(),o=X("meta"),this.h()},l(_){a=z(_,"META",{name:!0,content:!0}),t=L(_),e=z(_,"META",{property:!0,content:!0}),n=L(_),o=z(_,"META",{name:!0,content:!0}),this.h()},h(){var _,c,y;T(a,"name","description"),T(a,"content",A.description??((_=A.og)==null?void 0:_.description)),T(e,"property","og:description"),T(e,"content",((c=A.og)==null?void 0:c.description)??A.description),T(o,"name","twitter:description"),T(o,"content",((y=A.og)==null?void 0:y.description)??A.description)},m(_,c){g(_,a,c),g(_,t,c),g(_,e,c),g(_,n,c),g(_,o,c)},p:ke,d(_){_&&(u(a),u(t),u(e),u(n),u(o))}}}function Gs(i){let a,t,e;return{c(){a=X("meta"),t=R(),e=X("meta"),this.h()},l(n){a=z(n,"META",{property:!0,content:!0}),t=L(n),e=z(n,"META",{name:!0,content:!0}),this.h()},h(){var n,o;T(a,"property","og:image"),T(a,"content",(n=A.og)==null?void 0:n.image),T(e,"name","twitter:image"),T(e,"content",(o=A.og)==null?void 0:o.image)},m(n,o){g(n,a,o),g(n,t,o),g(n,e,o)},p:ke,d(n){n&&(u(a),u(t),u(e))}}}function ss(i){let a,t;return a=new Le({props:{queryID:"season_summary",queryResult:i[1]}}),{c(){$(a.$$.fragment)},l(e){S(a.$$.fragment,e)},m(e,n){b(a,e,n),t=!0},p(e,n){const o={};n[0]&2&&(o.queryResult=e[1]),a.$set(o)},i(e){t||(d(a.$$.fragment,e),t=!0)},o(e){p(a.$$.fragment,e),t=!1},d(e){h(a,e)}}}function as(i){let a,t;return a=new Le({props:{queryID:"records_table",queryResult:i[2]}}),{c(){$(a.$$.fragment)},l(e){S(a.$$.fragment,e)},m(e,n){b(a,e,n),t=!0},p(e,n){const o={};n[0]&4&&(o.queryResult=e[2]),a.$set(o)},i(e){t||(d(a.$$.fragment,e),t=!0)},o(e){p(a.$$.fragment,e),t=!1},d(e){h(a,e)}}}function ts(i){let a,t;return a=new Le({props:{queryID:"elo_latest",queryResult:i[3]}}),{c(){$(a.$$.fragment)},l(e){S(a.$$.fragment,e)},m(e,n){b(a,e,n),t=!0},p(e,n){const o={};n[0]&8&&(o.queryResult=e[3]),a.$set(o)},i(e){t||(d(a.$$.fragment,e),t=!0)},o(e){p(a.$$.fragment,e),t=!1},d(e){h(a,e)}}}function ns(i){let a,t;return a=new Le({props:{queryID:"seed_details",queryResult:i[4]}}),{c(){$(a.$$.fragment)},l(e){S(a.$$.fragment,e)},m(e,n){b(a,e,n),t=!0},p(e,n){const o={};n[0]&16&&(o.queryResult=e[4]),a.$set(o)},i(e){t||(d(a.$$.fragment,e),t=!0)},o(e){p(a.$$.fragment,e),t=!1},d(e){h(a,e)}}}function _s(i){let a,t;return a=new Le({props:{queryID:"wins_details",queryResult:i[5]}}),{c(){$(a.$$.fragment)},l(e){S(a.$$.fragment,e)},m(e,n){b(a,e,n),t=!0},p(e,n){const o={};n[0]&32&&(o.queryResult=e[5]),a.$set(o)},i(e){t||(d(a.$$.fragment,e),t=!0)},o(e){p(a.$$.fragment,e),t=!1},d(e){h(a,e)}}}function is(i){let a,t;return a=new Le({props:{queryID:"playoff_wins",queryResult:i[6]}}),{c(){$(a.$$.fragment)},l(e){S(a.$$.fragment,e)},m(e,n){b(a,e,n),t=!0},p(e,n){const o={};n[0]&64&&(o.queryResult=e[6]),a.$set(o)},i(e){t||(d(a.$$.fragment,e),t=!0)},o(e){p(a.$$.fragment,e),t=!1},d(e){h(a,e)}}}function rs(i){let a,t;return a=new Le({props:{queryID:"playoff_odds",queryResult:i[7]}}),{c(){$(a.$$.fragment)},l(e){S(a.$$.fragment,e)},m(e,n){b(a,e,n),t=!0},p(e,n){const o={};n[0]&128&&(o.queryResult=e[7]),a.$set(o)},i(e){t||(d(a.$$.fragment,e),t=!0)},o(e){p(a.$$.fragment,e),t=!1},d(e){h(a,e)}}}function os(i){let a,t;return a=new Le({props:{queryID:"most_recent_games",queryResult:i[8]}}),{c(){$(a.$$.fragment)},l(e){S(a.$$.fragment,e)},m(e,n){b(a,e,n),t=!0},p(e,n){const o={};n[0]&256&&(o.queryResult=e[8]),a.$set(o)},i(e){t||(d(a.$$.fragment,e),t=!0)},o(e){p(a.$$.fragment,e),t=!1},d(e){h(a,e)}}}function ls(i){let a,t;return a=new Le({props:{queryID:"game_trend",queryResult:i[9]}}),{c(){$(a.$$.fragment)},l(e){S(a.$$.fragment,e)},m(e,n){b(a,e,n),t=!0},p(e,n){const o={};n[0]&512&&(o.queryResult=e[9]),a.$set(o)},i(e){t||(d(a.$$.fragment,e),t=!0)},o(e){p(a.$$.fragment,e),t=!1},d(e){h(a,e)}}}function ms(i){let a,t;return a=new Le({props:{queryID:"future_games",queryResult:i[10]}}),{c(){$(a.$$.fragment)},l(e){S(a.$$.fragment,e)},m(e,n){b(a,e,n),t=!0},p(e,n){const o={};n[0]&1024&&(o.queryResult=e[10]),a.$set(o)},i(e){t||(d(a.$$.fragment,e),t=!0)},o(e){p(a.$$.fragment,e),t=!1},d(e){h(a,e)}}}function fs(i){let a,t;return a=new Le({props:{queryID:"filtered_season_summary",queryResult:i[11]}}),{c(){$(a.$$.fragment)},l(e){S(a.$$.fragment,e)},m(e,n){b(a,e,n),t=!0},p(e,n){const o={};n[0]&2048&&(o.queryResult=e[11]),a.$set(o)},i(e){t||(d(a.$$.fragment,e),t=!0)},o(e){p(a.$$.fragment,e),t=!1},d(e){h(a,e)}}}function js(i){let a,t,e,n,o,_,c,y,E,k,v,M,O,G;return a=new ae({props:{id:"date"}}),e=new ae({props:{id:"T",title:" "}}),o=new ae({props:{id:"visiting_team"}}),c=new ae({props:{id:" "}}),E=new ae({props:{id:"home_team"}}),v=new ae({props:{id:"winning_team"}}),O=new ae({props:{id:"score"}}),{c(){$(a.$$.fragment),t=R(),$(e.$$.fragment),n=R(),$(o.$$.fragment),_=R(),$(c.$$.fragment),y=R(),$(E.$$.fragment),k=R(),$(v.$$.fragment),M=R(),$(O.$$.fragment)},l(l){S(a.$$.fragment,l),t=L(l),S(e.$$.fragment,l),n=L(l),S(o.$$.fragment,l),_=L(l),S(c.$$.fragment,l),y=L(l),S(E.$$.fragment,l),k=L(l),S(v.$$.fragment,l),M=L(l),S(O.$$.fragment,l)},m(l,C){b(a,l,C),g(l,t,C),b(e,l,C),g(l,n,C),b(o,l,C),g(l,_,C),b(c,l,C),g(l,y,C),b(E,l,C),g(l,k,C),b(v,l,C),g(l,M,C),b(O,l,C),G=!0},p:ke,i(l){G||(d(a.$$.fragment,l),d(e.$$.fragment,l),d(o.$$.fragment,l),d(c.$$.fragment,l),d(E.$$.fragment,l),d(v.$$.fragment,l),d(O.$$.fragment,l),G=!0)},o(l){p(a.$$.fragment,l),p(e.$$.fragment,l),p(o.$$.fragment,l),p(c.$$.fragment,l),p(E.$$.fragment,l),p(v.$$.fragment,l),p(O.$$.fragment,l),G=!1},d(l){l&&(u(t),u(n),u(_),u(y),u(k),u(M)),h(a,l),h(e,l),h(o,l),h(c,l),h(E,l),h(v,l),h(O,l)}}}function us(i){let a,t='<a href="#upcoming-schedule">Upcoming Schedule</a>',e,n,o,_,c='<a href="#playoff-odds">Playoff Odds</a>',y,E,k,v,M,O,G,l,C,f,F,te,Z;n=new Ke({props:{data:i[10].filter(i[41]),rows:"5",link:"game_link",$$slots:{default:[Qs]},$$scope:{ctx:i}}}),E=new He({props:{data:i[7].filter(i[42]),value:"top_six_pct1"}}),v=new He({props:{data:i[7].filter(i[43]),value:"play_in_pct1"}}),O=new He({props:{data:i[7].filter(i[44]),value:"missed_playoffs_pct1"}}),l=new Ms({props:{data:i[6].filter(i[45]),x:"wins",y:"odds_pct1",series:"season_result",xAxisTitle:"wins",title:"projected end of season wins"}}),f=new Ds({props:{data:i[4].filter(i[46]),x:"seed",y:"occurances_pct1",xAxisTitle:"seed",title:"projected end of season seeding"}});let D=i[9].length==0&&cs();return{c(){a=X("h3"),a.innerHTML=t,e=R(),$(n.$$.fragment),o=R(),_=X("h3"),_.innerHTML=c,y=R(),$(E.$$.fragment),k=R(),$(v.$$.fragment),M=R(),$(O.$$.fragment),G=R(),$(l.$$.fragment),C=R(),$(f.$$.fragment),F=R(),D&&D.c(),te=Ce(),this.h()},l(m){a=z(m,"H3",{class:!0,id:!0,"data-svelte-h":!0}),Ne(a)!=="svelte-1aiam6d"&&(a.innerHTML=t),e=L(m),S(n.$$.fragment,m),o=L(m),_=z(m,"H3",{class:!0,id:!0,"data-svelte-h":!0}),Ne(_)!=="svelte-1mwkix9"&&(_.innerHTML=c),y=L(m),S(E.$$.fragment,m),k=L(m),S(v.$$.fragment,m),M=L(m),S(O.$$.fragment,m),G=L(m),S(l.$$.fragment,m),C=L(m),S(f.$$.fragment,m),F=L(m),D&&D.l(m),te=Ce(),this.h()},h(){T(a,"class","markdown"),T(a,"id","upcoming-schedule"),T(_,"class","markdown"),T(_,"id","playoff-odds")},m(m,N){g(m,a,N),g(m,e,N),b(n,m,N),g(m,o,N),g(m,_,N),g(m,y,N),b(E,m,N),g(m,k,N),b(v,m,N),g(m,M,N),b(O,m,N),g(m,G,N),b(l,m,N),g(m,C,N),b(f,m,N),g(m,F,N),D&&D.m(m,N),g(m,te,N),Z=!0},p(m,N){const ue={};N[0]&1025&&(ue.data=m[10].filter(m[41])),N[2]&262144&&(ue.$$scope={dirty:N,ctx:m}),n.$set(ue);const ne={};N[0]&129&&(ne.data=m[7].filter(m[42])),E.$set(ne);const ce={};N[0]&129&&(ce.data=m[7].filter(m[43])),v.$set(ce);const x={};N[0]&129&&(x.data=m[7].filter(m[44])),O.$set(x);const de={};N[0]&65&&(de.data=m[6].filter(m[45])),l.$set(de);const se={};N[0]&17&&(se.data=m[4].filter(m[46])),f.$set(se),m[9].length==0?D||(D=cs(),D.c(),D.m(te.parentNode,te)):D&&(D.d(1),D=null)},i(m){Z||(d(n.$$.fragment,m),d(E.$$.fragment,m),d(v.$$.fragment,m),d(O.$$.fragment,m),d(l.$$.fragment,m),d(f.$$.fragment,m),Z=!0)},o(m){p(n.$$.fragment,m),p(E.$$.fragment,m),p(v.$$.fragment,m),p(O.$$.fragment,m),p(l.$$.fragment,m),p(f.$$.fragment,m),Z=!1},d(m){m&&(u(a),u(e),u(o),u(_),u(y),u(k),u(M),u(G),u(C),u(F),u(te)),h(n,m),h(E,m),h(v,m),h(O,m),h(l,m),h(f,m),D&&D.d(m)}}}function Qs(i){let a,t,e,n,o,_,c,y,E,k,v,M,O,G,l,C;return a=new ae({props:{id:"date"}}),e=new ae({props:{id:"T",title:" "}}),o=new ae({props:{id:"visitor"}}),c=new ae({props:{id:"home"}}),E=new ae({props:{id:"home_win_pct1",title:"Win % (Home)"}}),v=new ae({props:{id:"american_odds",align:"right",title:"Odds (Home)"}}),O=new ae({props:{id:"implied_line_num1",title:"Line (Home)"}}),l=new ae({props:{id:"predicted_score",title:"Score"}}),{c(){$(a.$$.fragment),t=R(),$(e.$$.fragment),n=R(),$(o.$$.fragment),_=R(),$(c.$$.fragment),y=R(),$(E.$$.fragment),k=R(),$(v.$$.fragment),M=R(),$(O.$$.fragment),G=R(),$(l.$$.fragment)},l(f){S(a.$$.fragment,f),t=L(f),S(e.$$.fragment,f),n=L(f),S(o.$$.fragment,f),_=L(f),S(c.$$.fragment,f),y=L(f),S(E.$$.fragment,f),k=L(f),S(v.$$.fragment,f),M=L(f),S(O.$$.fragment,f),G=L(f),S(l.$$.fragment,f)},m(f,F){b(a,f,F),g(f,t,F),b(e,f,F),g(f,n,F),b(o,f,F),g(f,_,F),b(c,f,F),g(f,y,F),b(E,f,F),g(f,k,F),b(v,f,F),g(f,M,F),b(O,f,F),g(f,G,F),b(l,f,F),C=!0},p:ke,i(f){C||(d(a.$$.fragment,f),d(e.$$.fragment,f),d(o.$$.fragment,f),d(c.$$.fragment,f),d(E.$$.fragment,f),d(v.$$.fragment,f),d(O.$$.fragment,f),d(l.$$.fragment,f),C=!0)},o(f){p(a.$$.fragment,f),p(e.$$.fragment,f),p(o.$$.fragment,f),p(c.$$.fragment,f),p(E.$$.fragment,f),p(v.$$.fragment,f),p(O.$$.fragment,f),p(l.$$.fragment,f),C=!1},d(f){f&&(u(t),u(n),u(_),u(y),u(k),u(M),u(G)),h(a,f),h(e,f),h(o,f),h(c,f),h(E,f),h(v,f),h(O,f),h(l,f)}}}function cs(i){let a,t='<a href="#playoff-analysis">Playoff Analysis</a>',e,n,o="add the following:",_,c,y='<li class="markdown">play-in analysis (if playin games exist, i.e. count &gt; 1)<ul class="markdown"><li class="markdown">this will show % of time by spot, and then % of advancing by seed</li></ul></li> <li class="markdown">playoff analysis<ul class="markdown"><li class="markdown">most common opponents with win rate by series (mostly nulls, sparsely populated)</li></ul></li>';return{c(){a=X("h2"),a.innerHTML=t,e=R(),n=X("p"),n.textContent=o,_=R(),c=X("ul"),c.innerHTML=y,this.h()},l(E){a=z(E,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ne(a)!=="svelte-3nubcd"&&(a.innerHTML=t),e=L(E),n=z(E,"P",{class:!0,"data-svelte-h":!0}),Ne(n)!=="svelte-1ugq117"&&(n.textContent=o),_=L(E),c=z(E,"UL",{class:!0,"data-svelte-h":!0}),Ne(c)!=="svelte-1au48wa"&&(c.innerHTML=y),this.h()},h(){T(a,"class","markdown"),T(a,"id","playoff-analysis"),T(n,"class","markdown"),T(c,"class","markdown")},m(E,k){g(E,a,k),g(E,e,k),g(E,n,k),g(E,_,k),g(E,c,k)},d(E){E&&(u(a),u(e),u(n),u(_),u(c))}}}function Vs(i){var Ie;let a,t,e,n,o,_,c,y,E,k,v,M,O,G,l,C,f,F,te,Z,D,m,N='<a href="#season-to-date-results">Season-to-date Results</a>',ue,ne,ce,x,de,se,Fe,re,ye,oe,he,ge,Me='<a href="#most-recent-games">Most Recent Games</a>',ve,le,Ae,pe,De='<a href="#matchup-summary">Matchup Summary</a>',$e,me,Te,Se,be,_e=typeof A<"u"&&(A.title||((Ie=A.og)==null?void 0:Ie.title))&&A.hide_title!==!0&&qs();function Ue(s,r){var fe;return typeof A<"u"&&(A.title||(fe=A.og)!=null&&fe.title)?Ys:Bs}let Oe=Ue()(i),ie=typeof A=="object"&&Ws(),H=i[1]&&ss(i),U=i[2]&&as(i),j=i[3]&&ts(i),V=i[4]&&ns(i),I=i[5]&&_s(i),q=i[6]&&is(i),B=i[7]&&rs(i),Q=i[8]&&os(i),J=i[9]&&ls(i),Y=i[10]&&ms(i),W=i[11]&&fs(i);Z=new Us({props:{data:i[11],column:"team_long"}}),ne=new He({props:{data:i[3].filter(i[37]),value:"elo_rating",comparison:"since_start"}}),x=new He({props:{data:i[11],value:"predicted_wins",comparison:"vs_vegas_num1"}}),se=new He({props:{data:i[11],value:"seed_range"}}),re=new He({props:{data:i[11],value:"win_range"}}),oe=new Hs({props:{data:i[9].filter(i[38]),x:"date",y:"cumulative_elo_change_num0",title:"elo change over time"}}),le=new Ke({props:{data:i[8].filter(i[39]),rows:"5",$$slots:{default:[js]},$$scope:{ctx:i}}}),me=new Ke({props:{data:i[2].filter(i[40]),rows:"7"}});let P=i[10].length>0&&us(i);return{c(){_e&&_e.c(),a=R(),Oe.c(),t=X("meta"),e=X("meta"),ie&&ie.c(),n=Ce(),o=R(),H&&H.c(),_=R(),U&&U.c(),c=R(),j&&j.c(),y=R(),V&&V.c(),E=R(),I&&I.c(),k=R(),q&&q.c(),v=R(),B&&B.c(),M=R(),Q&&Q.c(),O=R(),J&&J.c(),G=R(),Y&&Y.c(),l=R(),W&&W.c(),C=R(),f=X("h1"),F=X("a"),te=ds("Detailed Analysis for "),$(Z.$$.fragment),D=R(),m=X("h2"),m.innerHTML=N,ue=R(),$(ne.$$.fragment),ce=R(),$(x.$$.fragment),de=R(),$(se.$$.fragment),Fe=R(),$(re.$$.fragment),ye=R(),$(oe.$$.fragment),he=R(),ge=X("h3"),ge.innerHTML=Me,ve=R(),$(le.$$.fragment),Ae=R(),pe=X("h3"),pe.innerHTML=De,$e=R(),$(me.$$.fragment),Te=R(),P&&P.c(),Se=Ce(),this.h()},l(s){_e&&_e.l(s),a=L(s);const r=$s("svelte-1j2izld",document.head);Oe.l(r),t=z(r,"META",{name:!0,content:!0}),e=z(r,"META",{name:!0,content:!0}),ie&&ie.l(r),n=Ce(),r.forEach(u),o=L(s),H&&H.l(s),_=L(s),U&&U.l(s),c=L(s),j&&j.l(s),y=L(s),V&&V.l(s),E=L(s),I&&I.l(s),k=L(s),q&&q.l(s),v=L(s),B&&B.l(s),M=L(s),Q&&Q.l(s),O=L(s),J&&J.l(s),G=L(s),Y&&Y.l(s),l=L(s),W&&W.l(s),C=L(s),f=z(s,"H1",{class:!0,id:!0});var fe=Je(f);F=z(fe,"A",{href:!0});var Re=Je(F);te=gs(Re,"Detailed Analysis for "),S(Z.$$.fragment,Re),Re.forEach(u),fe.forEach(u),D=L(s),m=z(s,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ne(m)!=="svelte-5bljsu"&&(m.innerHTML=N),ue=L(s),S(ne.$$.fragment,s),ce=L(s),S(x.$$.fragment,s),de=L(s),S(se.$$.fragment,s),Fe=L(s),S(re.$$.fragment,s),ye=L(s),S(oe.$$.fragment,s),he=L(s),ge=z(s,"H3",{class:!0,id:!0,"data-svelte-h":!0}),Ne(ge)!=="svelte-efyf5h"&&(ge.innerHTML=Me),ve=L(s),S(le.$$.fragment,s),Ae=L(s),pe=z(s,"H3",{class:!0,id:!0,"data-svelte-h":!0}),Ne(pe)!=="svelte-fhdi38"&&(pe.innerHTML=De),$e=L(s),S(me.$$.fragment,s),Te=L(s),P&&P.l(s),Se=Ce(),this.h()},h(){T(t,"name","twitter:card"),T(t,"content","summary"),T(e,"name","twitter:site"),T(e,"content","@evidence_dev"),T(F,"href","#detailed-analysis-for-"),T(f,"class","markdown"),T(f,"id","detailed-analysis-for-"),T(m,"class","markdown"),T(m,"id","season-to-date-results"),T(ge,"class","markdown"),T(ge,"id","most-recent-games"),T(pe,"class","markdown"),T(pe,"id","matchup-summary")},m(s,r){_e&&_e.m(s,r),g(s,a,r),Oe.m(document.head,null),Be(document.head,t),Be(document.head,e),ie&&ie.m(document.head,null),Be(document.head,n),g(s,o,r),H&&H.m(s,r),g(s,_,r),U&&U.m(s,r),g(s,c,r),j&&j.m(s,r),g(s,y,r),V&&V.m(s,r),g(s,E,r),I&&I.m(s,r),g(s,k,r),q&&q.m(s,r),g(s,v,r),B&&B.m(s,r),g(s,M,r),Q&&Q.m(s,r),g(s,O,r),J&&J.m(s,r),g(s,G,r),Y&&Y.m(s,r),g(s,l,r),W&&W.m(s,r),g(s,C,r),g(s,f,r),Be(f,F),Be(F,te),b(Z,F,null),g(s,D,r),g(s,m,r),g(s,ue,r),b(ne,s,r),g(s,ce,r),b(x,s,r),g(s,de,r),b(se,s,r),g(s,Fe,r),b(re,s,r),g(s,ye,r),b(oe,s,r),g(s,he,r),g(s,ge,r),g(s,ve,r),b(le,s,r),g(s,Ae,r),g(s,pe,r),g(s,$e,r),b(me,s,r),g(s,Te,r),P&&P.m(s,r),g(s,Se,r),be=!0},p(s,r){var Ve;typeof A<"u"&&(A.title||(Ve=A.og)!=null&&Ve.title)&&A.hide_title!==!0&&_e.p(s,r),Oe.p(s,r),typeof A=="object"&&ie.p(s,r),s[1]?H?(H.p(s,r),r[0]&2&&d(H,1)):(H=ss(s),H.c(),d(H,1),H.m(_.parentNode,_)):H&&(we(),p(H,1,1,()=>{H=null}),Ee()),s[2]?U?(U.p(s,r),r[0]&4&&d(U,1)):(U=as(s),U.c(),d(U,1),U.m(c.parentNode,c)):U&&(we(),p(U,1,1,()=>{U=null}),Ee()),s[3]?j?(j.p(s,r),r[0]&8&&d(j,1)):(j=ts(s),j.c(),d(j,1),j.m(y.parentNode,y)):j&&(we(),p(j,1,1,()=>{j=null}),Ee()),s[4]?V?(V.p(s,r),r[0]&16&&d(V,1)):(V=ns(s),V.c(),d(V,1),V.m(E.parentNode,E)):V&&(we(),p(V,1,1,()=>{V=null}),Ee()),s[5]?I?(I.p(s,r),r[0]&32&&d(I,1)):(I=_s(s),I.c(),d(I,1),I.m(k.parentNode,k)):I&&(we(),p(I,1,1,()=>{I=null}),Ee()),s[6]?q?(q.p(s,r),r[0]&64&&d(q,1)):(q=is(s),q.c(),d(q,1),q.m(v.parentNode,v)):q&&(we(),p(q,1,1,()=>{q=null}),Ee()),s[7]?B?(B.p(s,r),r[0]&128&&d(B,1)):(B=rs(s),B.c(),d(B,1),B.m(M.parentNode,M)):B&&(we(),p(B,1,1,()=>{B=null}),Ee()),s[8]?Q?(Q.p(s,r),r[0]&256&&d(Q,1)):(Q=os(s),Q.c(),d(Q,1),Q.m(O.parentNode,O)):Q&&(we(),p(Q,1,1,()=>{Q=null}),Ee()),s[9]?J?(J.p(s,r),r[0]&512&&d(J,1)):(J=ls(s),J.c(),d(J,1),J.m(G.parentNode,G)):J&&(we(),p(J,1,1,()=>{J=null}),Ee()),s[10]?Y?(Y.p(s,r),r[0]&1024&&d(Y,1)):(Y=ms(s),Y.c(),d(Y,1),Y.m(l.parentNode,l)):Y&&(we(),p(Y,1,1,()=>{Y=null}),Ee()),s[11]?W?(W.p(s,r),r[0]&2048&&d(W,1)):(W=fs(s),W.c(),d(W,1),W.m(C.parentNode,C)):W&&(we(),p(W,1,1,()=>{W=null}),Ee());const fe={};r[0]&2048&&(fe.data=s[11]),Z.$set(fe);const Re={};r[0]&9&&(Re.data=s[3].filter(s[37])),ne.$set(Re);const qe={};r[0]&2048&&(qe.data=s[11]),x.$set(qe);const Ye={};r[0]&2048&&(Ye.data=s[11]),se.$set(Ye);const Ge={};r[0]&2048&&(Ge.data=s[11]),re.$set(Ge);const je={};r[0]&513&&(je.data=s[9].filter(s[38])),oe.$set(je);const We={};r[0]&257&&(We.data=s[8].filter(s[39])),r[2]&262144&&(We.$$scope={dirty:r,ctx:s}),le.$set(We);const Qe={};r[0]&5&&(Qe.data=s[2].filter(s[40])),me.$set(Qe),s[10].length>0?P?(P.p(s,r),r[0]&1024&&d(P,1)):(P=us(s),P.c(),d(P,1),P.m(Se.parentNode,Se)):P&&(we(),p(P,1,1,()=>{P=null}),Ee())},i(s){be||(d(H),d(U),d(j),d(V),d(I),d(q),d(B),d(Q),d(J),d(Y),d(W),d(Z.$$.fragment,s),d(ne.$$.fragment,s),d(x.$$.fragment,s),d(se.$$.fragment,s),d(re.$$.fragment,s),d(oe.$$.fragment,s),d(le.$$.fragment,s),d(me.$$.fragment,s),d(P),be=!0)},o(s){p(H),p(U),p(j),p(V),p(I),p(q),p(B),p(Q),p(J),p(Y),p(W),p(Z.$$.fragment,s),p(ne.$$.fragment,s),p(x.$$.fragment,s),p(se.$$.fragment,s),p(re.$$.fragment,s),p(oe.$$.fragment,s),p(le.$$.fragment,s),p(me.$$.fragment,s),p(P),be=!1},d(s){s&&(u(a),u(o),u(_),u(c),u(y),u(E),u(k),u(v),u(M),u(O),u(G),u(l),u(C),u(f),u(D),u(m),u(ue),u(ce),u(de),u(Fe),u(ye),u(he),u(ge),u(ve),u(Ae),u(pe),u($e),u(Te),u(Se)),_e&&_e.d(s),Oe.d(s),u(t),u(e),ie&&ie.d(s),u(n),H&&H.d(s),U&&U.d(s),j&&j.d(s),V&&V.d(s),I&&I.d(s),q&&q.d(s),B&&B.d(s),Q&&Q.d(s),J&&J.d(s),Y&&Y.d(s),W&&W.d(s),h(Z),h(ne,s),h(x,s),h(se,s),h(re,s),h(oe,s),h(le,s),h(me,s),P&&P.d(s)}}}const A={queries:[{season_summary:"nba/season_summary.sql"},{records_table:"nba/records_table.sql"},{elo_latest:"nba/elo_latest.sql"},{seed_details:"nba/seed_details.sql"},{wins_details:"nba/wins_details.sql"},{playoff_wins:"nba/playoff_odds_by_team_by_wins.sql"},{playoff_odds:"nba/playoff_odds.sql"},{most_recent_games:"nba/most_recent_games.sql"},{game_trend:"nba/game_trend.sql"},{future_games:"nba/future_games.sql"}]};function Js(i,a,t){let e,n;Xe(i,Fs,w=>t(36,e=w)),Xe(i,xe,w=>t(63,n=w));let{data:o}=a,{data:_={},customFormattingSettings:c,__db:y,inputs:E}=o;Ss(xe,n="d6426291c0609e4028f6de0498a4f274",n);let k=ks(E);ze(Cs,k),bs(k.subscribe(w=>E=w)),ze(Ns,{getCustomFormats:()=>c.customFormats||[]});const v=(w,ys)=>Is(y.query,w,{query_name:ys});Ts(v);let M;const O=()=>{M||(M=setTimeout(()=>{es.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},G=()=>{M?(clearTimeout(M),M=null):es.dismiss("LoadingToast")};Ze(()=>(ee.addEventListener("inFlightQueryStart",O),ee.addEventListener("inFlightQueryEnd",G),ee.QueriesLoading&&O(),()=>{ee.removeEventListener("inFlightQueryStart",O),ee.removeEventListener("inFlightQueryEnd",G)}));let l=e.params;Ze(()=>!0);let C={initialData:void 0,initialError:void 0},f=K`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`,F=`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`;_.season_summary&&(_.season_summary instanceof Error?C.initialError=_.season_summary:C.initialData=_.season_summary);let te;const Z=ee.createReactive({callback:w=>{t(1,te=w)},execFn:v},{id:"season_summary",initialData:C.initialData,initialError:C.initialError});Z(F,{noResolve:f}),globalThis[Symbol.for("season_summary")]={get value(){return te}};let D={initialData:void 0,initialError:void 0},m=K`SELECT
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
FROM src_reg_season_actuals_enriched`,N=`SELECT
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
FROM src_reg_season_actuals_enriched`;_.records_table&&(_.records_table instanceof Error?D.initialError=_.records_table:D.initialData=_.records_table);let ue;const ne=ee.createReactive({callback:w=>{t(2,ue=w)},execFn:v},{id:"records_table",initialData:D.initialData,initialError:D.initialError});ne(N,{noResolve:m}),globalThis[Symbol.for("records_table")]={get value(){return ue}};let ce={initialData:void 0,initialError:void 0},x=K`SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`,de=`SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`;_.elo_latest&&(_.elo_latest instanceof Error?ce.initialError=_.elo_latest:ce.initialData=_.elo_latest);let se;const Fe=ee.createReactive({callback:w=>{t(3,se=w)},execFn:v},{id:"elo_latest",initialData:ce.initialData,initialError:ce.initialError});Fe(de,{noResolve:x}),globalThis[Symbol.for("elo_latest")]={get value(){return se}};let re={initialData:void 0,initialError:void 0},ye=K`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`,oe=`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`;_.seed_details&&(_.seed_details instanceof Error?re.initialError=_.seed_details:re.initialData=_.seed_details);let he;const ge=ee.createReactive({callback:w=>{t(4,he=w)},execFn:v},{id:"seed_details",initialData:re.initialData,initialError:re.initialError});ge(oe,{noResolve:ye}),globalThis[Symbol.for("seed_details")]={get value(){return he}};let Me={initialData:void 0,initialError:void 0},ve=K`SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`,le=`SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`;_.wins_details&&(_.wins_details instanceof Error?Me.initialError=_.wins_details:Me.initialData=_.wins_details);let Ae;const pe=ee.createReactive({callback:w=>{t(5,Ae=w)},execFn:v},{id:"wins_details",initialData:Me.initialData,initialError:Me.initialError});pe(le,{noResolve:ve}),globalThis[Symbol.for("wins_details")]={get value(){return Ae}};let De={initialData:void 0,initialError:void 0},$e=K`SELECT
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
ORDER BY sort_key`,me=`SELECT
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
ORDER BY sort_key`;_.playoff_wins&&(_.playoff_wins instanceof Error?De.initialError=_.playoff_wins:De.initialData=_.playoff_wins);let Te;const Se=ee.createReactive({callback:w=>{t(6,Te=w)},execFn:v},{id:"playoff_wins",initialData:De.initialData,initialError:De.initialError});Se(me,{noResolve:$e}),globalThis[Symbol.for("playoff_wins")]={get value(){return Te}};let be={initialData:void 0,initialError:void 0},_e=K`SELECT 
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
GROUP BY ALL`,Ue=`SELECT 
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
GROUP BY ALL`;_.playoff_odds&&(_.playoff_odds instanceof Error?be.initialError=_.playoff_odds:be.initialData=_.playoff_odds);let Pe;const Oe=ee.createReactive({callback:w=>{t(7,Pe=w)},execFn:v},{id:"playoff_odds",initialData:be.initialData,initialError:be.initialError});Oe(Ue,{noResolve:_e}),globalThis[Symbol.for("playoff_odds")]={get value(){return Pe}};let ie={initialData:void 0,initialError:void 0},H=K`SELECT
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
ORDER BY game_date desc`,U=`SELECT
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
ORDER BY game_date desc`;_.most_recent_games&&(_.most_recent_games instanceof Error?ie.initialError=_.most_recent_games:ie.initialData=_.most_recent_games);let j;const V=ee.createReactive({callback:w=>{t(8,j=w)},execFn:v},{id:"most_recent_games",initialData:ie.initialData,initialError:ie.initialError});V(U,{noResolve:H}),globalThis[Symbol.for("most_recent_games")]={get value(){return j}};let I={initialData:void 0,initialError:void 0},q=K`with cte_games AS (
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
ORDER BY date`,B=`with cte_games AS (
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
ORDER BY date`;_.game_trend&&(_.game_trend instanceof Error?I.initialError=_.game_trend:I.initialData=_.game_trend);let Q;const J=ee.createReactive({callback:w=>{t(9,Q=w)},execFn:v},{id:"game_trend",initialData:I.initialData,initialError:I.initialError});J(B,{noResolve:q}),globalThis[Symbol.for("game_trend")]={get value(){return Q}};let Y={initialData:void 0,initialError:void 0},W=K`SELECT
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
ORDER BY game_id`,P=`SELECT
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
ORDER BY game_id`;_.future_games&&(_.future_games instanceof Error?Y.initialError=_.future_games:Y.initialData=_.future_games);let Ie;const s=ee.createReactive({callback:w=>{t(10,Ie=w)},execFn:v},{id:"future_games",initialData:Y.initialData,initialError:Y.initialError});s(P,{noResolve:W}),globalThis[Symbol.for("future_games")]={get value(){return Ie}};let r={initialData:void 0,initialError:void 0},fe=K`select *
    from (select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team)
    where team like '${l.nba_teams.toUpperCase()}'`,Re=`select *
    from (select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team)
    where team like '${l.nba_teams.toUpperCase()}'`;_.filtered_season_summary&&(_.filtered_season_summary instanceof Error?r.initialError=_.filtered_season_summary:r.initialData=_.filtered_season_summary);let qe;const Ye=ee.createReactive({callback:w=>{t(11,qe=w)},execFn:v},{id:"filtered_season_summary",initialData:r.initialData,initialError:r.initialError});Ye(Re,{noResolve:fe}),globalThis[Symbol.for("filtered_season_summary")]={get value(){return qe}};const Ge=w=>w.team===l.nba_teams.toUpperCase(),je=w=>w.team===l.nba_teams.toUpperCase(),We=w=>w.home_team===l.nba_teams.toUpperCase()|w.visiting_team===l.nba_teams.toUpperCase(),Qe=w=>w.team===l.nba_teams.toUpperCase(),Ve=w=>w.home===l.nba_teams.toUpperCase()|w.visitor===l.nba_teams.toUpperCase(),ps=w=>w.team===l.nba_teams.toUpperCase(),Es=w=>w.team===l.nba_teams.toUpperCase(),ws=w=>w.team===l.nba_teams.toUpperCase(),Rs=w=>w.team===l.nba_teams.toUpperCase(),Ls=w=>w.team===l.nba_teams.toUpperCase();return i.$$set=w=>{"data"in w&&t(12,o=w.data)},i.$$.update=()=>{i.$$.dirty[0]&4096&&t(13,{data:_={},customFormattingSettings:c,__db:y}=o,_),i.$$.dirty[0]&8192&&Os.set(Object.keys(_).length>0),i.$$.dirty[1]&32&&t(0,l=e.params),i.$$.dirty[0]&49152&&Z(F,{noResolve:f}),i.$$.dirty[0]&196608&&ne(N,{noResolve:m}),i.$$.dirty[0]&786432&&Fe(de,{noResolve:x}),i.$$.dirty[0]&3145728&&ge(oe,{noResolve:ye}),i.$$.dirty[0]&12582912&&pe(le,{noResolve:ve}),i.$$.dirty[0]&50331648&&Se(me,{noResolve:$e}),i.$$.dirty[0]&201326592&&Oe(Ue,{noResolve:_e}),i.$$.dirty[0]&805306368&&V(U,{noResolve:H}),i.$$.dirty[0]&1073741824|i.$$.dirty[1]&1&&J(B,{noResolve:q}),i.$$.dirty[1]&6&&s(P,{noResolve:W}),i.$$.dirty[0]&1&&t(34,fe=K`select *
    from (select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team)
    where team like '${l.nba_teams.toUpperCase()}'`),i.$$.dirty[0]&1&&t(35,Re=`select *
    from (select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team)
    where team like '${l.nba_teams.toUpperCase()}'`),i.$$.dirty[1]&24&&Ye(Re,{noResolve:fe})},t(14,f=K`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`),t(15,F=`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`),t(16,m=K`SELECT
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
FROM src_reg_season_actuals_enriched`),t(17,N=`SELECT
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
FROM src_reg_season_actuals_enriched`),t(18,x=K`SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`),t(19,de=`SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`),t(20,ye=K`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`),t(21,oe=`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`),t(22,ve=K`SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`),t(23,le=`SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`),t(24,$e=K`SELECT
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
ORDER BY sort_key`),t(25,me=`SELECT
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
ORDER BY sort_key`),t(26,_e=K`SELECT 
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
GROUP BY ALL`),t(27,Ue=`SELECT 
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
GROUP BY ALL`),t(28,H=K`SELECT
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
ORDER BY game_date desc`),t(29,U=`SELECT
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
ORDER BY game_date desc`),t(30,q=K`with cte_games AS (
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
ORDER BY date`),t(31,B=`with cte_games AS (
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
ORDER BY date`),t(32,W=K`SELECT
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
ORDER BY game_id`),t(33,P=`SELECT
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
ORDER BY game_id`),[l,te,ue,se,he,Ae,Te,Pe,j,Q,Ie,qe,o,_,f,F,m,N,x,de,ye,oe,ve,le,$e,me,_e,Ue,H,U,q,B,W,P,fe,Re,e,Ge,je,We,Qe,Ve,ps,Es,ws,Rs,Ls]}class fa extends hs{constructor(a){super(),As(this,a,Js,Vs,vs,{data:12},null,[-1,-1,-1])}}export{fa as component};
