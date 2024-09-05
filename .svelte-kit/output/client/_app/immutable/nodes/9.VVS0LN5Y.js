import{s as ka,a as E,e as se,b as qt,c as p,h as Da,d as ne,f,g as nt,r as Bt,i as h,v as Ut,j as u,k as Ot,l as jt,m as Na,o as Jt,p as Fa,q as Xt,t as Gt,u as Vt,n as ue}from"../chunks/scheduler.BVCo5HCX.js";import{S as Ha,i as Ma,c as R,a as w,m as $,t as m,b as c,d as x,e as S,g as ee}from"../chunks/index.C9mGAhn_.js";import{g as Ia}from"../chunks/globals.D0QH3NT1.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.COvZ985M.js";import{s as Ua,Q as k,p as Ba,r as zt,t as Zt}from"../chunks/index.DAWWTyat.js";import{h as A}from"../chunks/setTrackProxy.Cl20Y9Hv.js";import{I as qa,C as Wa}from"../chunks/globalContexts.1hDlTDmj.js";import{w as Ya}from"../chunks/entry.ZsnkuR_y.js";import{D as Yt,C as _e}from"../chunks/DataTable.C27QukxD.js";import{p as Pa}from"../chunks/stores.C49gDDi_.js";import{A as Aa}from"../chunks/AreaChart.BteOLp13.js";import{B as Oa}from"../chunks/BarChart.CThAdPla.js";import{V as Ga}from"../chunks/Value.D-dvCgmI.js";import{E as Kt}from"../chunks/getCompletedData.fKIlR-gu.js";import{p as Va}from"../chunks/profile.BW8tN6E9.js";import{B as Ka,a as Qa}from"../chunks/ButtonGroup.B_f0KjbD.js";import{A as ja}from"../chunks/Alert.DAyyiZkS.js";import{T as xt,a as Wt}from"../chunks/Tab.CRp4t5I2.js";import{Q as re}from"../chunks/QueryViewer.CXzVRZ_y.js";import{D as Ja,a as Xa}from"../chunks/Dropdown._FKcvDnm.js";const{document:it}=Ia;function za(r){var i;let t,s=(O.title??((i=O.og)==null?void 0:i.title))+"",e;return{c(){t=se("h1"),e=Gt(s),this.h()},l(n){t=ne(n,"H1",{class:!0});var _=Bt(t);e=Vt(_,s),_.forEach(f),this.h()},h(){h(t,"class","title")},m(n,_){u(n,t,_),Ot(t,e)},p:ue,d(n){n&&f(t)}}}function Za(r){return{c(){this.h()},l(t){this.h()},h(){it.title="Evidence"},m:ue,p:ue,d:ue}}function xa(r){var _;let t,s,e,i,n;return it.title=t=O.title??((_=O.og)==null?void 0:_.title),{c(){s=E(),e=se("meta"),i=E(),n=se("meta"),this.h()},l(d){s=p(d),e=ne(d,"META",{property:!0,content:!0}),i=p(d),n=ne(d,"META",{name:!0,content:!0}),this.h()},h(){var d,y;h(e,"property","og:title"),h(e,"content",((d=O.og)==null?void 0:d.title)??O.title),h(n,"name","twitter:title"),h(n,"content",((y=O.og)==null?void 0:y.title)??O.title)},m(d,y){u(d,s,y),u(d,e,y),u(d,i,y),u(d,n,y)},p(d,y){var v;y&0&&t!==(t=O.title??((v=O.og)==null?void 0:v.title))&&(it.title=t)},d(d){d&&(f(s),f(e),f(i),f(n))}}}function es(r){var n,_;let t,s,e=(O.description||((n=O.og)==null?void 0:n.description))&&ts(),i=((_=O.og)==null?void 0:_.image)&&as();return{c(){e&&e.c(),t=E(),i&&i.c(),s=qt()},l(d){e&&e.l(d),t=p(d),i&&i.l(d),s=qt()},m(d,y){e&&e.m(d,y),u(d,t,y),i&&i.m(d,y),u(d,s,y)},p(d,y){var v,te;(O.description||(v=O.og)!=null&&v.description)&&e.p(d,y),(te=O.og)!=null&&te.image&&i.p(d,y)},d(d){d&&(f(t),f(s)),e&&e.d(d),i&&i.d(d)}}}function ts(r){let t,s,e,i,n;return{c(){t=se("meta"),s=E(),e=se("meta"),i=E(),n=se("meta"),this.h()},l(_){t=ne(_,"META",{name:!0,content:!0}),s=p(_),e=ne(_,"META",{property:!0,content:!0}),i=p(_),n=ne(_,"META",{name:!0,content:!0}),this.h()},h(){var _,d,y;h(t,"name","description"),h(t,"content",O.description??((_=O.og)==null?void 0:_.description)),h(e,"property","og:description"),h(e,"content",((d=O.og)==null?void 0:d.description)??O.description),h(n,"name","twitter:description"),h(n,"content",((y=O.og)==null?void 0:y.description)??O.description)},m(_,d){u(_,t,d),u(_,s,d),u(_,e,d),u(_,i,d),u(_,n,d)},p:ue,d(_){_&&(f(t),f(s),f(e),f(i),f(n))}}}function as(r){let t,s,e;return{c(){t=se("meta"),s=E(),e=se("meta"),this.h()},l(i){t=ne(i,"META",{property:!0,content:!0}),s=p(i),e=ne(i,"META",{name:!0,content:!0}),this.h()},h(){var i,n;h(t,"property","og:image"),h(t,"content",(i=O.og)==null?void 0:i.image),h(e,"name","twitter:image"),h(e,"content",(n=O.og)==null?void 0:n.image)},m(i,n){u(i,t,n),u(i,s,n),u(i,e,n)},p:ue,d(i){i&&(f(t),f(s),f(e))}}}function ea(r){let t,s;return t=new re({props:{queryID:"thru_date",queryResult:r[1]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&2&&(n.queryResult=e[1]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ta(r){let t,s;return t=new re({props:{queryID:"wins_seed_scatter",queryResult:r[2]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&4&&(n.queryResult=e[2]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function aa(r){let t,s;return t=new re({props:{queryID:"seed_details",queryResult:r[3]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&8&&(n.queryResult=e[3]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function sa(r){let t,s;return t=new re({props:{queryID:"tournament_seeding",queryResult:r[4]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&16&&(n.queryResult=e[4]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function na(r){let t,s;return t=new re({props:{queryID:"reg_season",queryResult:r[5]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&32&&(n.queryResult=e[5]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ia(r){let t,s;return t=new re({props:{queryID:"standings",queryResult:r[6]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&64&&(n.queryResult=e[6]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ra(r){let t,s;return t=new re({props:{queryID:"summary_by_team",queryResult:r[7]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&128&&(n.queryResult=e[7]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function _a(r){let t,s;return t=new re({props:{queryID:"season_summary",queryResult:r[8]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&256&&(n.queryResult=e[8]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function oa(r){let t,s;return t=new re({props:{queryID:"records_table",queryResult:r[9]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&512&&(n.queryResult=e[9]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function la(r){let t,s;return t=new re({props:{queryID:"elo_latest",queryResult:r[10]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&1024&&(n.queryResult=e[10]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ma(r){let t,s;return t=new re({props:{queryID:"wins_details",queryResult:r[11]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&2048&&(n.queryResult=e[11]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ca(r){let t,s;return t=new re({props:{queryID:"playoff_wins",queryResult:r[12]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&4096&&(n.queryResult=e[12]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function fa(r){let t,s;return t=new re({props:{queryID:"playoff_odds",queryResult:r[13]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&8192&&(n.queryResult=e[13]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ua(r){let t,s;return t=new re({props:{queryID:"most_recent_games",queryResult:r[14]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&16384&&(n.queryResult=e[14]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function da(r){let t,s;return t=new re({props:{queryID:"game_trend",queryResult:r[15]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&32768&&(n.queryResult=e[15]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ga(r){let t,s;return t=new re({props:{queryID:"future_games",queryResult:r[16]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&65536&&(n.queryResult=e[16]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function Ea(r){let t,s;return t=new re({props:{queryID:"aaa",queryResult:r[17]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&131072&&(n.queryResult=e[17]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ss(r){let t,s;return t=new Qa({props:{valueLabel:"All",value:"%",default:!0}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p:ue,i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ns(r){let t,s;return t=new Yt({props:{data:r[17],link:"team_link",rows:"30",$$slots:{default:[rs]},$$scope:{ctx:r}}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&131072&&(n.data=e[17]),i[4]&1&&(n.$$scope={dirty:i,ctx:e}),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function is(r){let t,s;return t=new Yt({props:{data:r[17],link:"team_link",rows:"30",$$slots:{default:[_s]},$$scope:{ctx:r}}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&131072&&(n.data=e[17]),i[4]&1&&(n.$$scope={dirty:i,ctx:e}),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function rs(r){let t,s,e,i;return t=new _e({props:{id:"conf"}}),e=new _e({props:{id:"_count"}}),{c(){R(t.$$.fragment),s=E(),R(e.$$.fragment)},l(n){w(t.$$.fragment,n),s=p(n),w(e.$$.fragment,n)},m(n,_){$(t,n,_),u(n,s,_),$(e,n,_),i=!0},p:ue,i(n){i||(m(t.$$.fragment,n),m(e.$$.fragment,n),i=!0)},o(n){c(t.$$.fragment,n),c(e.$$.fragment,n),i=!1},d(n){n&&f(s),S(t,n),S(e,n)}}}function _s(r){let t,s,e,i;return t=new _e({props:{id:"conf"}}),e=new _e({props:{id:"_count"}}),{c(){R(t.$$.fragment),s=E(),R(e.$$.fragment)},l(n){w(t.$$.fragment,n),s=p(n),w(e.$$.fragment,n)},m(n,_){$(t,n,_),u(n,s,_),$(e,n,_),i=!0},p:ue,i(n){i||(m(t.$$.fragment,n),m(e.$$.fragment,n),i=!0)},o(n){c(t.$$.fragment,n),c(e.$$.fragment,n),i=!1},d(n){n&&f(s),S(t,n),S(e,n)}}}function pa(r){let t,s;return t=new re({props:{queryID:"pieTestData1",queryResult:r[18]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&262144&&(n.queryResult=e[18]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function Ra(r){let t,s;return t=new re({props:{queryID:"pieTestData2",queryResult:r[19]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&524288&&(n.queryResult=e[19]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function wa(r){let t,s;return t=new re({props:{queryID:"teams",queryResult:r[20]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&1048576&&(n.queryResult=e[20]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function $a(r){let t,s;return t=new re({props:{queryID:"filtered_future_games",queryResult:r[21]}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&2097152&&(n.queryResult=e[21]),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function os(r){let t,s,e,i;return s=new Ga({props:{data:r[1],column:"end_date"}}),{c(){t=Gt("This data was last updated as of "),R(s.$$.fragment),e=Gt(".")},l(n){t=Vt(n,"This data was last updated as of "),w(s.$$.fragment,n),e=Vt(n,".")},m(n,_){u(n,t,_),$(s,n,_),u(n,e,_),i=!0},p(n,_){const d={};_[0]&2&&(d.data=n[1]),s.$set(d)},i(n){i||(m(s.$$.fragment,n),i=!0)},o(n){c(s.$$.fragment,n),i=!1},d(n){n&&(f(t),f(e)),S(s,n)}}}function ls(r){let t,s='<em class="markdown">The regular season is over. Check back next year!</em>';return{c(){t=se("p"),t.innerHTML=s,this.h()},l(e){t=ne(e,"P",{class:!0,"data-svelte-h":!0}),nt(t)!=="svelte-x6gz91"&&(t.innerHTML=s),this.h()},h(){h(t,"class","markdown")},m(e,i){u(e,t,i)},p:ue,i:ue,o:ue,d(e){e&&f(t)}}}function ms(r){let t,s,e,i;return t=new Ja({props:{data:r[20],name:"team_dd",value:"team",title:"Select a Team",$$slots:{default:[cs]},$$scope:{ctx:r}}}),e=new Yt({props:{data:r[21],rows:"5",link:"game_link",$$slots:{default:[fs]},$$scope:{ctx:r}}}),{c(){R(t.$$.fragment),s=E(),R(e.$$.fragment)},l(n){w(t.$$.fragment,n),s=p(n),w(e.$$.fragment,n)},m(n,_){$(t,n,_),u(n,s,_),$(e,n,_),i=!0},p(n,_){const d={};_[0]&1048576&&(d.data=n[20]),_[4]&1&&(d.$$scope={dirty:_,ctx:n}),t.$set(d);const y={};_[0]&2097152&&(y.data=n[21]),_[4]&1&&(y.$$scope={dirty:_,ctx:n}),e.$set(y)},i(n){i||(m(t.$$.fragment,n),m(e.$$.fragment,n),i=!0)},o(n){c(t.$$.fragment,n),c(e.$$.fragment,n),i=!1},d(n){n&&f(s),S(t,n),S(e,n)}}}function cs(r){let t,s;return t=new Xa({props:{valueLabel:"All Teams",value:"%"}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p:ue,i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function fs(r){let t,s,e,i,n,_,d,y,v,te,L,ae,C,oe,T,ie;return t=new _e({props:{id:"date"}}),e=new _e({props:{id:"T",title:" "}}),n=new _e({props:{id:"visitor"}}),d=new _e({props:{id:"home"}}),v=new _e({props:{id:"home_win_pct1",title:"Win % (Home)"}}),L=new _e({props:{id:"american_odds",align:"right",title:"Odds (Home)"}}),C=new _e({props:{id:"implied_line_num1",title:"Line (Home)"}}),T=new _e({props:{id:"predicted_score",title:"Score"}}),{c(){R(t.$$.fragment),s=E(),R(e.$$.fragment),i=E(),R(n.$$.fragment),_=E(),R(d.$$.fragment),y=E(),R(v.$$.fragment),te=E(),R(L.$$.fragment),ae=E(),R(C.$$.fragment),oe=E(),R(T.$$.fragment)},l(l){w(t.$$.fragment,l),s=p(l),w(e.$$.fragment,l),i=p(l),w(n.$$.fragment,l),_=p(l),w(d.$$.fragment,l),y=p(l),w(v.$$.fragment,l),te=p(l),w(L.$$.fragment,l),ae=p(l),w(C.$$.fragment,l),oe=p(l),w(T.$$.fragment,l)},m(l,b){$(t,l,b),u(l,s,b),$(e,l,b),u(l,i,b),$(n,l,b),u(l,_,b),$(d,l,b),u(l,y,b),$(v,l,b),u(l,te,b),$(L,l,b),u(l,ae,b),$(C,l,b),u(l,oe,b),$(T,l,b),ie=!0},p:ue,i(l){ie||(m(t.$$.fragment,l),m(e.$$.fragment,l),m(n.$$.fragment,l),m(d.$$.fragment,l),m(v.$$.fragment,l),m(L.$$.fragment,l),m(C.$$.fragment,l),m(T.$$.fragment,l),ie=!0)},o(l){c(t.$$.fragment,l),c(e.$$.fragment,l),c(n.$$.fragment,l),c(d.$$.fragment,l),c(v.$$.fragment,l),c(L.$$.fragment,l),c(C.$$.fragment,l),c(T.$$.fragment,l),ie=!1},d(l){l&&(f(s),f(i),f(_),f(y),f(te),f(ae),f(oe)),S(t,l),S(e,l),S(n,l),S(d,l),S(v,l),S(L,l),S(C,l),S(T,l)}}}function us(r){let t,s,e,i,n,_,d,y,v,te,L,ae,C,oe,T,ie;return t=new _e({props:{id:" ",contentType:"image",height:"25px"}}),e=new _e({props:{id:"team"}}),n=new _e({props:{id:"record"}}),d=new _e({props:{id:"elo_rating"}}),v=new _e({props:{id:"avg_wins"}}),L=new _e({props:{id:"elo_vs_vegas_num1",contentType:"delta"}}),C=new _e({props:{id:"make_playoffs_pct1"}}),T=new _e({props:{id:"win_finals_pct1"}}),{c(){R(t.$$.fragment),s=E(),R(e.$$.fragment),i=E(),R(n.$$.fragment),_=E(),R(d.$$.fragment),y=E(),R(v.$$.fragment),te=E(),R(L.$$.fragment),ae=E(),R(C.$$.fragment),oe=E(),R(T.$$.fragment)},l(l){w(t.$$.fragment,l),s=p(l),w(e.$$.fragment,l),i=p(l),w(n.$$.fragment,l),_=p(l),w(d.$$.fragment,l),y=p(l),w(v.$$.fragment,l),te=p(l),w(L.$$.fragment,l),ae=p(l),w(C.$$.fragment,l),oe=p(l),w(T.$$.fragment,l)},m(l,b){$(t,l,b),u(l,s,b),$(e,l,b),u(l,i,b),$(n,l,b),u(l,_,b),$(d,l,b),u(l,y,b),$(v,l,b),u(l,te,b),$(L,l,b),u(l,ae,b),$(C,l,b),u(l,oe,b),$(T,l,b),ie=!0},p:ue,i(l){ie||(m(t.$$.fragment,l),m(e.$$.fragment,l),m(n.$$.fragment,l),m(d.$$.fragment,l),m(v.$$.fragment,l),m(L.$$.fragment,l),m(C.$$.fragment,l),m(T.$$.fragment,l),ie=!0)},o(l){c(t.$$.fragment,l),c(e.$$.fragment,l),c(n.$$.fragment,l),c(d.$$.fragment,l),c(v.$$.fragment,l),c(L.$$.fragment,l),c(C.$$.fragment,l),c(T.$$.fragment,l),ie=!1},d(l){l&&(f(s),f(i),f(_),f(y),f(te),f(ae),f(oe)),S(t,l),S(e,l),S(n,l),S(d,l),S(v,l),S(L,l),S(C,l),S(T,l)}}}function ds(r){let t,s;return t=new Aa({props:{data:r[3].filter(va),x:"seed",y:"occurances_pct1",series:"team",xAxisTitle:"seed",title:"Eastern Conference",yMax:"1"}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&8&&(n.data=e[3].filter(va)),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function gs(r){let t,s;return t=new Aa({props:{data:r[3].filter(ya),x:"seed",y:"occurances_pct1",series:"team",xAxisTitle:"seed",title:"Western Conference",yMax:"1"}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&8&&(n.data=e[3].filter(ya)),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function Es(r){let t,s,e,i;return t=new Wt({props:{label:"East",$$slots:{default:[ds]},$$scope:{ctx:r}}}),e=new Wt({props:{label:"West",$$slots:{default:[gs]},$$scope:{ctx:r}}}),{c(){R(t.$$.fragment),s=E(),R(e.$$.fragment)},l(n){w(t.$$.fragment,n),s=p(n),w(e.$$.fragment,n)},m(n,_){$(t,n,_),u(n,s,_),$(e,n,_),i=!0},p(n,_){const d={};_[0]&8|_[4]&1&&(d.$$scope={dirty:_,ctx:n}),t.$set(d);const y={};_[0]&8|_[4]&1&&(y.$$scope={dirty:_,ctx:n}),e.$set(y)},i(n){i||(m(t.$$.fragment,n),m(e.$$.fragment,n),i=!0)},o(n){c(t.$$.fragment,n),c(e.$$.fragment,n),i=!1},d(n){n&&f(s),S(t,n),S(e,n)}}}function ps(r){let t,s;return t=new Oa({props:{data:r[2].filter(La),x:"team",y:"odds_pct1",series:"season_result",xAxisTitle:"seed",title:"Eastern Conference",swapXY:"true",sort:"sort_key"}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&4&&(n.data=e[2].filter(La)),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function Rs(r){let t,s;return t=new Oa({props:{data:r[2].filter(ba),x:"team",y:"odds_pct1",series:"season_result",xAxisTitle:"seed",title:"Western Conference",swapXY:"true",sort:"sort_key"}}),{c(){R(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,i){$(t,e,i),s=!0},p(e,i){const n={};i[0]&4&&(n.data=e[2].filter(ba)),t.$set(n)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ws(r){let t,s,e,i;return t=new Wt({props:{label:"East",$$slots:{default:[ps]},$$scope:{ctx:r}}}),e=new Wt({props:{label:"West",$$slots:{default:[Rs]},$$scope:{ctx:r}}}),{c(){R(t.$$.fragment),s=E(),R(e.$$.fragment)},l(n){w(t.$$.fragment,n),s=p(n),w(e.$$.fragment,n)},m(n,_){$(t,n,_),u(n,s,_),$(e,n,_),i=!0},p(n,_){const d={};_[0]&4|_[4]&1&&(d.$$scope={dirty:_,ctx:n}),t.$set(d);const y={};_[0]&4|_[4]&1&&(y.$$scope={dirty:_,ctx:n}),e.$set(y)},i(n){i||(m(t.$$.fragment,n),m(e.$$.fragment,n),i=!0)},o(n){c(t.$$.fragment,n),c(e.$$.fragment,n),i=!1},d(n){n&&f(s),S(t,n),S(e,n)}}}function $s(r){var vt;let t,s,e,i,n,_,d,y,v,te,L,ae,C,oe,T,ie,l,b,Qe,Fe,He,de,ht='<a href="#aaaaaaaaaaa">AAAAAAAAAAA</a>',ct,Se,ft="aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",je,Ye,Me,Je,le,me,Pe,Xe,Ie,ge,Oe,he,Tt,Te,ve,ze,Ge,Ze,Ee,ut='<a href="#nba-monte-carlo-simulator">NBA Monte Carlo Simulator</a>',xe,Ce,dt,pe,gt='<a href="#upcoming-games"><a href="/nba/predictions" class="markdown">Upcoming Games</a></a>',et,ce,fe,Ue,Re,Et='<a href="#team-standings"><a href="/nba/teams" class="markdown">Team Standings</a></a>',rt,Be,tt,we,pt='<a href="#conference-summaries">Conference Summaries</a>',_t,ke,Rt='<a href="#end-of-season-seeding">End of Season Seeding</a>',at,ye,ot,De,wt='<a href="#end-of-season-playoff-odds">End of Season Playoff Odds</a>',st,Le,lt,Ne=typeof O<"u"&&(O.title||((vt=O.og)==null?void 0:vt.title))&&O.hide_title!==!0&&za();function Ct(a,o){var $e;return typeof O<"u"&&(O.title||($e=O.og)!=null&&$e.title)?xa:Za}let Ve=Ct()(r),be=typeof O=="object"&&es(),j=r[1]&&ea(r),D=r[2]&&ta(r),N=r[3]&&aa(r),F=r[4]&&sa(r),V=r[5]&&na(r),J=r[6]&&ia(r),H=r[7]&&ra(r),M=r[8]&&_a(r),I=r[9]&&oa(r),K=r[10]&&la(r),X=r[11]&&ma(r),U=r[12]&&ca(r),B=r[13]&&fa(r),q=r[14]&&ua(r),Q=r[15]&&da(r),z=r[16]&&ga(r),W=r[17]&&Ea(r);Me=new Ka({props:{data:r[17],name:"conference",value:"conf",$$slots:{default:[ss]},$$scope:{ctx:r}}});const $t=[is,ns],Ae=[];function kt(a,o){return a[0].conference!="null"?0:1}le=kt(r),me=Ae[le]=$t[le](r);let Z=r[18]&&pa(r),Y=r[19]&&Ra(r);he=new Kt({props:{config:{tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["40%","70%"],data:[...r[18]],itemStyle:{emphasis:{click:r[68]}}}],contextmenu:r[69]()}}}),ve=new Kt({props:{config:{tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["40%","70%"],data:[...r[19]]}],contextmenu:r[70](),tooltip:{trigger:"item",formatter:Sa}}}});let P=r[20]&&wa(r),G=r[21]&&$a(r);Ce=new ja({props:{status:"info",$$slots:{default:[os]},$$scope:{ctx:r}}});const Dt=[ms,ls],qe=[];function St(a,o){return a[21].length>0?0:1}return ce=St(r),fe=qe[ce]=Dt[ce](r),Be=new Yt({props:{data:r[7],link:"team_link",rows:"5",search:"true",$$slots:{default:[us]},$$scope:{ctx:r}}}),ye=new xt({props:{$$slots:{default:[Es]},$$scope:{ctx:r}}}),Le=new xt({props:{$$slots:{default:[ws]},$$scope:{ctx:r}}}),{c(){Ne&&Ne.c(),t=E(),Ve.c(),s=se("meta"),e=se("meta"),be&&be.c(),i=qt(),n=E(),j&&j.c(),_=E(),D&&D.c(),d=E(),N&&N.c(),y=E(),F&&F.c(),v=E(),V&&V.c(),te=E(),J&&J.c(),L=E(),H&&H.c(),ae=E(),M&&M.c(),C=E(),I&&I.c(),oe=E(),K&&K.c(),T=E(),X&&X.c(),ie=E(),U&&U.c(),l=E(),B&&B.c(),b=E(),q&&q.c(),Qe=E(),Q&&Q.c(),Fe=E(),z&&z.c(),He=E(),de=se("h1"),de.innerHTML=ht,ct=E(),Se=se("p"),Se.textContent=ft,je=E(),W&&W.c(),Ye=E(),R(Me.$$.fragment),Je=E(),me.c(),Pe=E(),Z&&Z.c(),Xe=E(),Y&&Y.c(),Ie=E(),ge=se("span"),Oe=se("div"),R(he.$$.fragment),Tt=E(),Te=se("div"),R(ve.$$.fragment),ze=E(),P&&P.c(),Ge=E(),G&&G.c(),Ze=E(),Ee=se("h1"),Ee.innerHTML=ut,xe=E(),R(Ce.$$.fragment),dt=E(),pe=se("h2"),pe.innerHTML=gt,et=E(),fe.c(),Ue=E(),Re=se("h2"),Re.innerHTML=Et,rt=E(),R(Be.$$.fragment),tt=E(),we=se("h2"),we.innerHTML=pt,_t=E(),ke=se("h3"),ke.innerHTML=Rt,at=E(),R(ye.$$.fragment),ot=E(),De=se("h3"),De.innerHTML=wt,st=E(),R(Le.$$.fragment),this.h()},l(a){Ne&&Ne.l(a),t=p(a);const o=Da("svelte-1j2izld",it.head);Ve.l(o),s=ne(o,"META",{name:!0,content:!0}),e=ne(o,"META",{name:!0,content:!0}),be&&be.l(o),i=qt(),o.forEach(f),n=p(a),j&&j.l(a),_=p(a),D&&D.l(a),d=p(a),N&&N.l(a),y=p(a),F&&F.l(a),v=p(a),V&&V.l(a),te=p(a),J&&J.l(a),L=p(a),H&&H.l(a),ae=p(a),M&&M.l(a),C=p(a),I&&I.l(a),oe=p(a),K&&K.l(a),T=p(a),X&&X.l(a),ie=p(a),U&&U.l(a),l=p(a),B&&B.l(a),b=p(a),q&&q.l(a),Qe=p(a),Q&&Q.l(a),Fe=p(a),z&&z.l(a),He=p(a),de=ne(a,"H1",{class:!0,id:!0,"data-svelte-h":!0}),nt(de)!=="svelte-1jaee9h"&&(de.innerHTML=ht),ct=p(a),Se=ne(a,"P",{class:!0,"data-svelte-h":!0}),nt(Se)!=="svelte-18tr17t"&&(Se.textContent=ft),je=p(a),W&&W.l(a),Ye=p(a),w(Me.$$.fragment,a),Je=p(a),me.l(a),Pe=p(a),Z&&Z.l(a),Xe=p(a),Y&&Y.l(a),Ie=p(a),ge=ne(a,"SPAN",{style:!0});var $e=Bt(ge);Oe=ne($e,"DIV",{style:!0});var We=Bt(Oe);w(he.$$.fragment,We),We.forEach(f),Tt=p($e),Te=ne($e,"DIV",{style:!0});var Ke=Bt(Te);w(ve.$$.fragment,Ke),Ke.forEach(f),$e.forEach(f),ze=p(a),P&&P.l(a),Ge=p(a),G&&G.l(a),Ze=p(a),Ee=ne(a,"H1",{class:!0,id:!0,"data-svelte-h":!0}),nt(Ee)!=="svelte-h7f9m5"&&(Ee.innerHTML=ut),xe=p(a),w(Ce.$$.fragment,a),dt=p(a),pe=ne(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),nt(pe)!=="svelte-v49hcr"&&(pe.innerHTML=gt),et=p(a),fe.l(a),Ue=p(a),Re=ne(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),nt(Re)!=="svelte-1odep2k"&&(Re.innerHTML=Et),rt=p(a),w(Be.$$.fragment,a),tt=p(a),we=ne(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),nt(we)!=="svelte-w0f3pu"&&(we.innerHTML=pt),_t=p(a),ke=ne(a,"H3",{class:!0,id:!0,"data-svelte-h":!0}),nt(ke)!=="svelte-1hxadpo"&&(ke.innerHTML=Rt),at=p(a),w(ye.$$.fragment,a),ot=p(a),De=ne(a,"H3",{class:!0,id:!0,"data-svelte-h":!0}),nt(De)!=="svelte-75tz32"&&(De.innerHTML=wt),st=p(a),w(Le.$$.fragment,a),this.h()},h(){h(s,"name","twitter:card"),h(s,"content","summary"),h(e,"name","twitter:site"),h(e,"content","@evidence_dev"),h(de,"class","markdown"),h(de,"id","aaaaaaaaaaa"),h(Se,"class","markdown"),Ut(Oe,"width","40vw"),Ut(Oe,"left","10vw"),Ut(Te,"width","40vw"),Ut(Te,"left","50vw"),Ut(ge,"display","flex"),h(Ee,"class","markdown"),h(Ee,"id","nba-monte-carlo-simulator"),h(pe,"class","markdown"),h(pe,"id","upcoming-games"),h(Re,"class","markdown"),h(Re,"id","team-standings"),h(we,"class","markdown"),h(we,"id","conference-summaries"),h(ke,"class","markdown"),h(ke,"id","end-of-season-seeding"),h(De,"class","markdown"),h(De,"id","end-of-season-playoff-odds")},m(a,o){Ne&&Ne.m(a,o),u(a,t,o),Ve.m(it.head,null),Ot(it.head,s),Ot(it.head,e),be&&be.m(it.head,null),Ot(it.head,i),u(a,n,o),j&&j.m(a,o),u(a,_,o),D&&D.m(a,o),u(a,d,o),N&&N.m(a,o),u(a,y,o),F&&F.m(a,o),u(a,v,o),V&&V.m(a,o),u(a,te,o),J&&J.m(a,o),u(a,L,o),H&&H.m(a,o),u(a,ae,o),M&&M.m(a,o),u(a,C,o),I&&I.m(a,o),u(a,oe,o),K&&K.m(a,o),u(a,T,o),X&&X.m(a,o),u(a,ie,o),U&&U.m(a,o),u(a,l,o),B&&B.m(a,o),u(a,b,o),q&&q.m(a,o),u(a,Qe,o),Q&&Q.m(a,o),u(a,Fe,o),z&&z.m(a,o),u(a,He,o),u(a,de,o),u(a,ct,o),u(a,Se,o),u(a,je,o),W&&W.m(a,o),u(a,Ye,o),$(Me,a,o),u(a,Je,o),Ae[le].m(a,o),u(a,Pe,o),Z&&Z.m(a,o),u(a,Xe,o),Y&&Y.m(a,o),u(a,Ie,o),u(a,ge,o),Ot(ge,Oe),$(he,Oe,null),Ot(ge,Tt),Ot(ge,Te),$(ve,Te,null),u(a,ze,o),P&&P.m(a,o),u(a,Ge,o),G&&G.m(a,o),u(a,Ze,o),u(a,Ee,o),u(a,xe,o),$(Ce,a,o),u(a,dt,o),u(a,pe,o),u(a,et,o),qe[ce].m(a,o),u(a,Ue,o),u(a,Re,o),u(a,rt,o),$(Be,a,o),u(a,tt,o),u(a,we,o),u(a,_t,o),u(a,ke,o),u(a,at,o),$(ye,a,o),u(a,ot,o),u(a,De,o),u(a,st,o),$(Le,a,o),lt=!0},p(a,o){var Ht;typeof O<"u"&&(O.title||(Ht=O.og)!=null&&Ht.title)&&O.hide_title!==!0&&Ne.p(a,o),Ve.p(a,o),typeof O=="object"&&be.p(a,o),a[1]?j?(j.p(a,o),o[0]&2&&m(j,1)):(j=ea(a),j.c(),m(j,1),j.m(_.parentNode,_)):j&&(ee(),c(j,1,1,()=>{j=null}),x()),a[2]?D?(D.p(a,o),o[0]&4&&m(D,1)):(D=ta(a),D.c(),m(D,1),D.m(d.parentNode,d)):D&&(ee(),c(D,1,1,()=>{D=null}),x()),a[3]?N?(N.p(a,o),o[0]&8&&m(N,1)):(N=aa(a),N.c(),m(N,1),N.m(y.parentNode,y)):N&&(ee(),c(N,1,1,()=>{N=null}),x()),a[4]?F?(F.p(a,o),o[0]&16&&m(F,1)):(F=sa(a),F.c(),m(F,1),F.m(v.parentNode,v)):F&&(ee(),c(F,1,1,()=>{F=null}),x()),a[5]?V?(V.p(a,o),o[0]&32&&m(V,1)):(V=na(a),V.c(),m(V,1),V.m(te.parentNode,te)):V&&(ee(),c(V,1,1,()=>{V=null}),x()),a[6]?J?(J.p(a,o),o[0]&64&&m(J,1)):(J=ia(a),J.c(),m(J,1),J.m(L.parentNode,L)):J&&(ee(),c(J,1,1,()=>{J=null}),x()),a[7]?H?(H.p(a,o),o[0]&128&&m(H,1)):(H=ra(a),H.c(),m(H,1),H.m(ae.parentNode,ae)):H&&(ee(),c(H,1,1,()=>{H=null}),x()),a[8]?M?(M.p(a,o),o[0]&256&&m(M,1)):(M=_a(a),M.c(),m(M,1),M.m(C.parentNode,C)):M&&(ee(),c(M,1,1,()=>{M=null}),x()),a[9]?I?(I.p(a,o),o[0]&512&&m(I,1)):(I=oa(a),I.c(),m(I,1),I.m(oe.parentNode,oe)):I&&(ee(),c(I,1,1,()=>{I=null}),x()),a[10]?K?(K.p(a,o),o[0]&1024&&m(K,1)):(K=la(a),K.c(),m(K,1),K.m(T.parentNode,T)):K&&(ee(),c(K,1,1,()=>{K=null}),x()),a[11]?X?(X.p(a,o),o[0]&2048&&m(X,1)):(X=ma(a),X.c(),m(X,1),X.m(ie.parentNode,ie)):X&&(ee(),c(X,1,1,()=>{X=null}),x()),a[12]?U?(U.p(a,o),o[0]&4096&&m(U,1)):(U=ca(a),U.c(),m(U,1),U.m(l.parentNode,l)):U&&(ee(),c(U,1,1,()=>{U=null}),x()),a[13]?B?(B.p(a,o),o[0]&8192&&m(B,1)):(B=fa(a),B.c(),m(B,1),B.m(b.parentNode,b)):B&&(ee(),c(B,1,1,()=>{B=null}),x()),a[14]?q?(q.p(a,o),o[0]&16384&&m(q,1)):(q=ua(a),q.c(),m(q,1),q.m(Qe.parentNode,Qe)):q&&(ee(),c(q,1,1,()=>{q=null}),x()),a[15]?Q?(Q.p(a,o),o[0]&32768&&m(Q,1)):(Q=da(a),Q.c(),m(Q,1),Q.m(Fe.parentNode,Fe)):Q&&(ee(),c(Q,1,1,()=>{Q=null}),x()),a[16]?z?(z.p(a,o),o[0]&65536&&m(z,1)):(z=ga(a),z.c(),m(z,1),z.m(He.parentNode,He)):z&&(ee(),c(z,1,1,()=>{z=null}),x()),a[17]?W?(W.p(a,o),o[0]&131072&&m(W,1)):(W=Ea(a),W.c(),m(W,1),W.m(Ye.parentNode,Ye)):W&&(ee(),c(W,1,1,()=>{W=null}),x());const $e={};o[0]&131072&&($e.data=a[17]),o[4]&1&&($e.$$scope={dirty:o,ctx:a}),Me.$set($e);let We=le;le=kt(a),le===We?Ae[le].p(a,o):(ee(),c(Ae[We],1,1,()=>{Ae[We]=null}),x(),me=Ae[le],me?me.p(a,o):(me=Ae[le]=$t[le](a),me.c()),m(me,1),me.m(Pe.parentNode,Pe)),a[18]?Z?(Z.p(a,o),o[0]&262144&&m(Z,1)):(Z=pa(a),Z.c(),m(Z,1),Z.m(Xe.parentNode,Xe)):Z&&(ee(),c(Z,1,1,()=>{Z=null}),x()),a[19]?Y?(Y.p(a,o),o[0]&524288&&m(Y,1)):(Y=Ra(a),Y.c(),m(Y,1),Y.m(Ie.parentNode,Ie)):Y&&(ee(),c(Y,1,1,()=>{Y=null}),x());const Ke={};o[0]&262144&&(Ke.config={tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["40%","70%"],data:[...a[18]],itemStyle:{emphasis:{click:a[68]}}}],contextmenu:a[69]()}),he.$set(Ke);const yt={};o[0]&524288&&(yt.config={tooltip:{formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:["40%","70%"],data:[...a[19]]}],contextmenu:a[70](),tooltip:{trigger:"item",formatter:Sa}}),ve.$set(yt),a[20]?P?(P.p(a,o),o[0]&1048576&&m(P,1)):(P=wa(a),P.c(),m(P,1),P.m(Ge.parentNode,Ge)):P&&(ee(),c(P,1,1,()=>{P=null}),x()),a[21]?G?(G.p(a,o),o[0]&2097152&&m(G,1)):(G=$a(a),G.c(),m(G,1),G.m(Ze.parentNode,Ze)):G&&(ee(),c(G,1,1,()=>{G=null}),x());const Nt={};o[0]&2|o[4]&1&&(Nt.$$scope={dirty:o,ctx:a}),Ce.$set(Nt);let Ft=ce;ce=St(a),ce===Ft?qe[ce].p(a,o):(ee(),c(qe[Ft],1,1,()=>{qe[Ft]=null}),x(),fe=qe[ce],fe?fe.p(a,o):(fe=qe[ce]=Dt[ce](a),fe.c()),m(fe,1),fe.m(Ue.parentNode,Ue));const mt={};o[0]&128&&(mt.data=a[7]),o[4]&1&&(mt.$$scope={dirty:o,ctx:a}),Be.$set(mt);const Lt={};o[0]&8|o[4]&1&&(Lt.$$scope={dirty:o,ctx:a}),ye.$set(Lt);const bt={};o[0]&4|o[4]&1&&(bt.$$scope={dirty:o,ctx:a}),Le.$set(bt)},i(a){lt||(m(j),m(D),m(N),m(F),m(V),m(J),m(H),m(M),m(I),m(K),m(X),m(U),m(B),m(q),m(Q),m(z),m(W),m(Me.$$.fragment,a),m(me),m(Z),m(Y),m(he.$$.fragment,a),m(ve.$$.fragment,a),m(P),m(G),m(Ce.$$.fragment,a),m(fe),m(Be.$$.fragment,a),m(ye.$$.fragment,a),m(Le.$$.fragment,a),lt=!0)},o(a){c(j),c(D),c(N),c(F),c(V),c(J),c(H),c(M),c(I),c(K),c(X),c(U),c(B),c(q),c(Q),c(z),c(W),c(Me.$$.fragment,a),c(me),c(Z),c(Y),c(he.$$.fragment,a),c(ve.$$.fragment,a),c(P),c(G),c(Ce.$$.fragment,a),c(fe),c(Be.$$.fragment,a),c(ye.$$.fragment,a),c(Le.$$.fragment,a),lt=!1},d(a){a&&(f(t),f(n),f(_),f(d),f(y),f(v),f(te),f(L),f(ae),f(C),f(oe),f(T),f(ie),f(l),f(b),f(Qe),f(Fe),f(He),f(de),f(ct),f(Se),f(je),f(Ye),f(Je),f(Pe),f(Xe),f(Ie),f(ge),f(ze),f(Ge),f(Ze),f(Ee),f(xe),f(dt),f(pe),f(et),f(Ue),f(Re),f(rt),f(tt),f(we),f(_t),f(ke),f(at),f(ot),f(De),f(st)),Ne&&Ne.d(a),Ve.d(a),f(s),f(e),be&&be.d(a),f(i),j&&j.d(a),D&&D.d(a),N&&N.d(a),F&&F.d(a),V&&V.d(a),J&&J.d(a),H&&H.d(a),M&&M.d(a),I&&I.d(a),K&&K.d(a),X&&X.d(a),U&&U.d(a),B&&B.d(a),q&&q.d(a),Q&&Q.d(a),z&&z.d(a),W&&W.d(a),S(Me,a),Ae[le].d(a),Z&&Z.d(a),Y&&Y.d(a),S(he),S(ve),P&&P.d(a),G&&G.d(a),S(Ce,a),qe[ce].d(a),S(Be,a),S(ye,a),S(Le,a)}}}const O={queries:[{thru_date:"nba/thru_date.sql"},{wins_seed_scatter:"nba/wins_seed_scatter.sql"},{seed_details:"nba/seed_details.sql"},{tournament_seeding:"nba/tournament_seeding.sql"},{reg_season:"nba/reg_season.sql"},{standings:"nba/standings.sql"},{summary_by_team:"nba/summary_by_team.sql"},{season_summary:"nba/season_summary.sql"},{records_table:"nba/records_table.sql"},{elo_latest:"nba/elo_latest.sql"},{wins_details:"nba/wins_details.sql"},{playoff_wins:"nba/playoff_odds_by_team_by_wins.sql"},{playoff_odds:"nba/playoff_odds.sql"},{most_recent_games:"nba/most_recent_games.sql"},{game_trend:"nba/game_trend.sql"},{future_games:"nba/future_games.sql"}]},Sa=function(r){return r.name+": "+r.value+'<br/><a href="report_details.html?category='+r.name+'">Details</a>'},va=r=>r.conf==="East",ya=r=>r.conf==="West",La=r=>r.conf==="East",ba=r=>r.conf==="West";function Ss(r,t,s){let e,i;jt(r,Pa,g=>s(67,e=g)),jt(r,zt,g=>s(97,i=g));let{data:n}=t,{data:_={},customFormattingSettings:d,__db:y,inputs:v}=n;Na(zt,i="1a2305bfc3fb6d0d0281cdcf3e37d41b",i);let te=Ya(v);Jt(qa,te),Fa(te.subscribe(g=>s(0,v=g))),Jt(Wa,{getCustomFormats:()=>d.customFormats||[]});const L=(g,At)=>Va(y.query,g,{query_name:At});Ua(L);let ae;const C=()=>{ae||(ae=setTimeout(()=>{Zt.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},oe=()=>{ae?(clearTimeout(ae),ae=null):Zt.dismiss("LoadingToast")};Xt(()=>(k.addEventListener("inFlightQueryStart",C),k.addEventListener("inFlightQueryEnd",oe),k.QueriesLoading&&C(),()=>{k.removeEventListener("inFlightQueryStart",C),k.removeEventListener("inFlightQueryEnd",oe)})),e.params,Xt(()=>!0);let T={initialData:void 0,initialError:void 0},ie=A`SELECT COALESCE(max(game_date),CURRENT_DATE) as end_date FROM src_nba_latest_results`,l="SELECT COALESCE(max(game_date),CURRENT_DATE) as end_date FROM src_nba_latest_results";_.thru_date&&(_.thru_date instanceof Error?T.initialError=_.thru_date:T.initialData=_.thru_date);let b;const Qe=k.createReactive({callback:g=>{s(1,b=g)},execFn:L},{id:"thru_date",initialData:T.initialData,initialError:T.initialError});Qe(l,{noResolve:ie}),globalThis[Symbol.for("thru_date")]={get value(){return b}};let Fe={initialData:void 0,initialError:void 0},He=A`SELECT
    winning_team as team,
 --   wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key`,de=`SELECT
    winning_team as team,
 --   wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key`;_.wins_seed_scatter&&(_.wins_seed_scatter instanceof Error?Fe.initialError=_.wins_seed_scatter:Fe.initialData=_.wins_seed_scatter);let ht;const ct=k.createReactive({callback:g=>{s(2,ht=g)},execFn:L},{id:"wins_seed_scatter",initialData:Fe.initialData,initialError:Fe.initialError});ct(de,{noResolve:He}),globalThis[Symbol.for("wins_seed_scatter")]={get value(){return ht}};let Se={initialData:void 0,initialError:void 0},ft=A`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`,je=`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`;_.seed_details&&(_.seed_details instanceof Error?Se.initialError=_.seed_details:Se.initialData=_.seed_details);let Ye;const Me=k.createReactive({callback:g=>{s(3,Ye=g)},execFn:L},{id:"seed_details",initialData:Se.initialData,initialError:Se.initialError});Me(je,{noResolve:ft}),globalThis[Symbol.for("seed_details")]={get value(){return Ye}};let Je={initialData:void 0,initialError:void 0},le=A`WITH cte_final_seeds AS (
    SELECT
        ROW_NUMBER() OVER (PARTITION BY Scenario_id, conf 
            ORDER BY conf, made_wildcard, wins desc, pt_diff desc, random()) AS final_seed,
        *
    FROM src_tournament_end
    WHERE (made_tournament = 1 OR made_wildcard = 1)
),
cte_agg AS (
    SELECT
        winning_team as team,
        conf,
        final_seed,
        COUNT(*) / 10000.0 as occurances
    FROM cte_final_seeds
    GROUP BY ALL
    ORDER BY conf, final_seed, winning_team
)
SELECT
    team,
    conf,
    COALESCE(first(occurances) FILTER (WHERE final_seed = 1 ),0) AS "1_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 2 ),0) AS "2_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 3 ),0) AS "3_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 4 ),0) AS "4_pct1",
    SUM(occurances) AS total_pct1
FROM cte_agg
GROUP BY ALL
ORDER BY "1_pct1" DESC, ("1_pct1"+"2_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1"+"4_pct1") DESC`,me=`WITH cte_final_seeds AS (
    SELECT
        ROW_NUMBER() OVER (PARTITION BY Scenario_id, conf 
            ORDER BY conf, made_wildcard, wins desc, pt_diff desc, random()) AS final_seed,
        *
    FROM src_tournament_end
    WHERE (made_tournament = 1 OR made_wildcard = 1)
),
cte_agg AS (
    SELECT
        winning_team as team,
        conf,
        final_seed,
        COUNT(*) / 10000.0 as occurances
    FROM cte_final_seeds
    GROUP BY ALL
    ORDER BY conf, final_seed, winning_team
)
SELECT
    team,
    conf,
    COALESCE(first(occurances) FILTER (WHERE final_seed = 1 ),0) AS "1_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 2 ),0) AS "2_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 3 ),0) AS "3_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 4 ),0) AS "4_pct1",
    SUM(occurances) AS total_pct1
FROM cte_agg
GROUP BY ALL
ORDER BY "1_pct1" DESC, ("1_pct1"+"2_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1"+"4_pct1") DESC`;_.tournament_seeding&&(_.tournament_seeding instanceof Error?Je.initialError=_.tournament_seeding:Je.initialData=_.tournament_seeding);let Pe;const Xe=k.createReactive({callback:g=>{s(4,Pe=g)},execFn:L},{id:"tournament_seeding",initialData:Je.initialData,initialError:Je.initialError});Xe(me,{noResolve:le}),globalThis[Symbol.for("tournament_seeding")]={get value(){return Pe}};let Ie={initialData:void 0,initialError:void 0},ge=A`select
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
order by conf, avg_wins desc`,Oe=`select
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
order by conf, avg_wins desc`;_.reg_season&&(_.reg_season instanceof Error?Ie.initialError=_.reg_season:Ie.initialData=_.reg_season);let he;const Tt=k.createReactive({callback:g=>{s(5,he=g)},execFn:L},{id:"reg_season",initialData:Ie.initialData,initialError:Ie.initialError});Tt(Oe,{noResolve:ge}),globalThis[Symbol.for("reg_season")]={get value(){return he}};let Te={initialData:void 0,initialError:void 0},ve=A`SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched`,ze=`SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched`;_.standings&&(_.standings instanceof Error?Te.initialError=_.standings:Te.initialData=_.standings);let Ge;const Ze=k.createReactive({callback:g=>{s(6,Ge=g)},execFn:L},{id:"standings",initialData:Te.initialData,initialError:Te.initialError});Ze(ze,{noResolve:ve}),globalThis[Symbol.for("standings")]={get value(){return Ge}};let Ee={initialData:void 0,initialError:void 0},ut=A`select
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
ORDER BY avg_wins DESC`,xe=`select
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
ORDER BY avg_wins DESC`;_.summary_by_team&&(_.summary_by_team instanceof Error?Ee.initialError=_.summary_by_team:Ee.initialData=_.summary_by_team);let Ce;const dt=k.createReactive({callback:g=>{s(7,Ce=g)},execFn:L},{id:"summary_by_team",initialData:Ee.initialData,initialError:Ee.initialError});dt(xe,{noResolve:ut}),globalThis[Symbol.for("summary_by_team")]={get value(){return Ce}};let pe={initialData:void 0,initialError:void 0},gt=A`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`,et=`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`;_.season_summary&&(_.season_summary instanceof Error?pe.initialError=_.season_summary:pe.initialData=_.season_summary);let ce;const fe=k.createReactive({callback:g=>{s(8,ce=g)},execFn:L},{id:"season_summary",initialData:pe.initialData,initialError:pe.initialError});fe(et,{noResolve:gt}),globalThis[Symbol.for("season_summary")]={get value(){return ce}};let Ue={initialData:void 0,initialError:void 0},Re=A`SELECT
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
FROM src_reg_season_actuals_enriched`,Et=`SELECT
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
FROM src_reg_season_actuals_enriched`;_.records_table&&(_.records_table instanceof Error?Ue.initialError=_.records_table:Ue.initialData=_.records_table);let rt;const Be=k.createReactive({callback:g=>{s(9,rt=g)},execFn:L},{id:"records_table",initialData:Ue.initialData,initialError:Ue.initialError});Be(Et,{noResolve:Re}),globalThis[Symbol.for("records_table")]={get value(){return rt}};let tt={initialData:void 0,initialError:void 0},we=A`SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`,pt=`SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`;_.elo_latest&&(_.elo_latest instanceof Error?tt.initialError=_.elo_latest:tt.initialData=_.elo_latest);let _t;const ke=k.createReactive({callback:g=>{s(10,_t=g)},execFn:L},{id:"elo_latest",initialData:tt.initialData,initialError:tt.initialError});ke(pt,{noResolve:we}),globalThis[Symbol.for("elo_latest")]={get value(){return _t}};let Rt={initialData:void 0,initialError:void 0},at=A`SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`,ye=`SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`;_.wins_details&&(_.wins_details instanceof Error?Rt.initialError=_.wins_details:Rt.initialData=_.wins_details);let ot;const De=k.createReactive({callback:g=>{s(11,ot=g)},execFn:L},{id:"wins_details",initialData:Rt.initialData,initialError:Rt.initialError});De(ye,{noResolve:at}),globalThis[Symbol.for("wins_details")]={get value(){return ot}};let wt={initialData:void 0,initialError:void 0},st=A`SELECT
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
ORDER BY sort_key`,Le=`SELECT
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
ORDER BY sort_key`;_.playoff_wins&&(_.playoff_wins instanceof Error?wt.initialError=_.playoff_wins:wt.initialData=_.playoff_wins);let lt;const Ne=k.createReactive({callback:g=>{s(12,lt=g)},execFn:L},{id:"playoff_wins",initialData:wt.initialData,initialError:wt.initialError});Ne(Le,{noResolve:st}),globalThis[Symbol.for("playoff_wins")]={get value(){return lt}};let Ct={initialData:void 0,initialError:void 0},Mt=A`SELECT 
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
GROUP BY ALL`,Ve=`SELECT 
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
GROUP BY ALL`;_.playoff_odds&&(_.playoff_odds instanceof Error?Ct.initialError=_.playoff_odds:Ct.initialData=_.playoff_odds);let be;const j=k.createReactive({callback:g=>{s(13,be=g)},execFn:L},{id:"playoff_odds",initialData:Ct.initialData,initialError:Ct.initialError});j(Ve,{noResolve:Mt}),globalThis[Symbol.for("playoff_odds")]={get value(){return be}};let D={initialData:void 0,initialError:void 0},N=A`SELECT
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
ORDER BY game_date desc`,F=`SELECT
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
ORDER BY game_date desc`;_.most_recent_games&&(_.most_recent_games instanceof Error?D.initialError=_.most_recent_games:D.initialData=_.most_recent_games);let V;const J=k.createReactive({callback:g=>{s(14,V=g)},execFn:L},{id:"most_recent_games",initialData:D.initialData,initialError:D.initialError});J(F,{noResolve:N}),globalThis[Symbol.for("most_recent_games")]={get value(){return V}};let H={initialData:void 0,initialError:void 0},M=A`with cte_games AS (
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
ORDER BY date`,I=`with cte_games AS (
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
ORDER BY date`;_.game_trend&&(_.game_trend instanceof Error?H.initialError=_.game_trend:H.initialData=_.game_trend);let K;const X=k.createReactive({callback:g=>{s(15,K=g)},execFn:L},{id:"game_trend",initialData:H.initialData,initialError:H.initialError});X(I,{noResolve:M}),globalThis[Symbol.for("game_trend")]={get value(){return K}};let U={initialData:void 0,initialError:void 0},B=A`SELECT
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
ORDER BY game_id`,q=`SELECT
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
ORDER BY game_id`;_.future_games&&(_.future_games instanceof Error?U.initialError=_.future_games:U.initialData=_.future_games);let Q;const z=k.createReactive({callback:g=>{s(16,Q=g)},execFn:L},{id:"future_games",initialData:U.initialData,initialError:U.initialError});z(q,{noResolve:B}),globalThis[Symbol.for("future_games")]={get value(){return Q}};let W={initialData:void 0,initialError:void 0},$t=A`select  conf, count(conf) as _count from src_nba_teams where conf like '${v.conference}' group by conf order by _count desc`,Ae=`select  conf, count(conf) as _count from src_nba_teams where conf like '${v.conference}' group by conf order by _count desc`;_.aaa&&(_.aaa instanceof Error?W.initialError=_.aaa:W.initialData=_.aaa);let kt;const Z=k.createReactive({callback:g=>{s(17,kt=g)},execFn:L},{id:"aaa",initialData:W.initialData,initialError:W.initialError});Z(Ae,{noResolve:$t}),globalThis[Symbol.for("aaa")]={get value(){return kt}};let Y={initialData:void 0,initialError:void 0},P=A`select  count(conf) as value, conf as name from src_nba_teams where conf like '${v.conference}' group by name order by value desc`,G=`select  count(conf) as value, conf as name from src_nba_teams where conf like '${v.conference}' group by name order by value desc`;_.pieTestData1&&(_.pieTestData1 instanceof Error?Y.initialError=_.pieTestData1:Y.initialData=_.pieTestData1);let Dt;const qe=k.createReactive({callback:g=>{s(18,Dt=g)},execFn:L},{id:"pieTestData1",initialData:Y.initialData,initialError:Y.initialError});qe(G,{noResolve:P}),globalThis[Symbol.for("pieTestData1")]={get value(){return Dt}};let St={initialData:void 0,initialError:void 0},vt=A`select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${v.conference}' group by name, tournament_group order by value desc`,a=`select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${v.conference}' group by name, tournament_group order by value desc`;_.pieTestData2&&(_.pieTestData2 instanceof Error?St.initialError=_.pieTestData2:St.initialData=_.pieTestData2);let o;const $e=k.createReactive({callback:g=>{s(19,o=g)},execFn:L},{id:"pieTestData2",initialData:St.initialData,initialError:St.initialError});$e(a,{noResolve:vt}),globalThis[Symbol.for("pieTestData2")]={get value(){return o}};let We={initialData:void 0,initialError:void 0},Ke=A`select * from src_nba_teams
order by team`,yt=`select * from src_nba_teams
order by team`;_.teams&&(_.teams instanceof Error?We.initialError=_.teams:We.initialData=_.teams);let Nt;const Ft=k.createReactive({callback:g=>{s(20,Nt=g)},execFn:L},{id:"teams",initialData:We.initialData,initialError:We.initialError});Ft(yt,{noResolve:Ke}),globalThis[Symbol.for("teams")]={get value(){return Nt}};let mt={initialData:void 0,initialError:void 0},Lt=A`select *
    from (SELECT
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
ORDER BY game_id)
    where home like '${v.team_dd.value}' OR visitor like '${v.team_dd.value}'`,bt=`select *
    from (SELECT
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
ORDER BY game_id)
    where home like '${v.team_dd.value}' OR visitor like '${v.team_dd.value}'`;_.filtered_future_games&&(_.filtered_future_games instanceof Error?mt.initialError=_.filtered_future_games:mt.initialData=_.filtered_future_games);let Ht;const Qt=k.createReactive({callback:g=>{s(21,Ht=g)},execFn:L},{id:"filtered_future_games",initialData:mt.initialData,initialError:mt.initialError});Qt(bt,{noResolve:Lt}),globalThis[Symbol.for("filtered_future_games")]={get value(){return Ht}},setTimeout(()=>{console.log("Echarts ",Echarts)},2e3);var Pt=new window.ContextMenu({menuItems:[{label:"Select",onClick:()=>{console.log("event params >>> ",event.params),console.log("params >>> ",arguments),console.log(" chart ",Kt);var g=document.elementsFromPoint(event.screenX,event.screenY);console.log("closestChart ",g);for(let At in g){const It=g[At];if(It==="CANVAS"&&g[At].target.classList.contains("chart-container")){console.log("select clicked >> for ",It);break}}}},{label:"DrillDown",onClick:()=>{console.log("params >>> ",arguments);var g=document.elementsFromPoint(event.screenX,event.screenY);console.log("closestChart ",g);for(let At in g){const It=g[At];if(It==="CANVAS"&&g[At].target.classList.contains("chart-container")){console.log("Drilldown clicked >> for ",It),console.log("Paste");break}}}}]});const ha=function(g){alert("Clicked on category: "+g.name+", value: "+g.value)},Ta=function(g){console.log(g),console.log(event),Pt.mount()},Ca=function(g){console.log(g),console.log(event),Pt.mount()};return r.$$set=g=>{"data"in g&&s(23,n=g.data)},r.$$.update=()=>{r.$$.dirty[0]&8388608&&s(24,{data:_={},customFormattingSettings:d,__db:y}=n,_),r.$$.dirty[0]&16777216&&Ba.set(Object.keys(_).length>0),r.$$.dirty[2]&32&&e.params,r.$$.dirty[0]&100663296&&Qe(l,{noResolve:ie}),r.$$.dirty[0]&402653184&&ct(de,{noResolve:He}),r.$$.dirty[0]&1610612736&&Me(je,{noResolve:ft}),r.$$.dirty[1]&3&&Xe(me,{noResolve:le}),r.$$.dirty[1]&12&&Tt(Oe,{noResolve:ge}),r.$$.dirty[1]&48&&Ze(ze,{noResolve:ve}),r.$$.dirty[1]&192&&dt(xe,{noResolve:ut}),r.$$.dirty[1]&768&&fe(et,{noResolve:gt}),r.$$.dirty[1]&3072&&Be(Et,{noResolve:Re}),r.$$.dirty[1]&12288&&ke(pt,{noResolve:we}),r.$$.dirty[1]&49152&&De(ye,{noResolve:at}),r.$$.dirty[1]&196608&&Ne(Le,{noResolve:st}),r.$$.dirty[1]&786432&&j(Ve,{noResolve:Mt}),r.$$.dirty[1]&3145728&&J(F,{noResolve:N}),r.$$.dirty[1]&12582912&&X(I,{noResolve:M}),r.$$.dirty[1]&50331648&&z(q,{noResolve:B}),r.$$.dirty[0]&1&&s(57,$t=A`select  conf, count(conf) as _count from src_nba_teams where conf like '${v.conference}' group by conf order by _count desc`),r.$$.dirty[0]&1&&s(58,Ae=`select  conf, count(conf) as _count from src_nba_teams where conf like '${v.conference}' group by conf order by _count desc`),r.$$.dirty[1]&201326592&&Z(Ae,{noResolve:$t}),r.$$.dirty[0]&1&&s(59,P=A`select  count(conf) as value, conf as name from src_nba_teams where conf like '${v.conference}' group by name order by value desc`),r.$$.dirty[0]&1&&s(60,G=`select  count(conf) as value, conf as name from src_nba_teams where conf like '${v.conference}' group by name order by value desc`),r.$$.dirty[1]&805306368&&qe(G,{noResolve:P}),r.$$.dirty[0]&1&&s(61,vt=A`select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${v.conference}' group by name, tournament_group order by value desc`),r.$$.dirty[0]&1&&s(62,a=`select  tournament_group as name, count(tournament_group) as value, count(conf) as value from src_nba_teams where conf like '${v.conference}' group by name, tournament_group order by value desc`),r.$$.dirty[1]&1073741824|r.$$.dirty[2]&1&&$e(a,{noResolve:vt}),r.$$.dirty[2]&6&&Ft(yt,{noResolve:Ke}),r.$$.dirty[0]&1&&s(65,Lt=A`select *
    from (SELECT
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
ORDER BY game_id)
    where home like '${v.team_dd.value}' OR visitor like '${v.team_dd.value}'`),r.$$.dirty[0]&1&&s(66,bt=`select *
    from (SELECT
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
ORDER BY game_id)
    where home like '${v.team_dd.value}' OR visitor like '${v.team_dd.value}'`),r.$$.dirty[2]&24&&Qt(bt,{noResolve:Lt})},s(25,ie=A`SELECT COALESCE(max(game_date),CURRENT_DATE) as end_date FROM src_nba_latest_results`),s(26,l="SELECT COALESCE(max(game_date),CURRENT_DATE) as end_date FROM src_nba_latest_results"),s(27,He=A`SELECT
    winning_team as team,
 --   wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key`),s(28,de=`SELECT
    winning_team as team,
 --   wins as wins,
    conf,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank <= 6 then 'top six seed'
        when season_rank between 7 and 10 then 'play in'
        else 'missed playoffs'
    end as season_result,
    Count(*) FILTER (WHERE season_rank <=6)*-1 AS sort_key
FROM src_reg_season_end
GROUP BY ALL
ORDER BY sort_key`),s(29,ft=A`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`),s(30,je=`SELECT
    winning_team as team,
    season_rank as seed,
    conf,
    count(*) / 10000.0 as occurances_pct1
FROM src_reg_season_end
GROUP BY ALL
ORDER BY seed, count(*) DESC`),s(31,le=A`WITH cte_final_seeds AS (
    SELECT
        ROW_NUMBER() OVER (PARTITION BY Scenario_id, conf 
            ORDER BY conf, made_wildcard, wins desc, pt_diff desc, random()) AS final_seed,
        *
    FROM src_tournament_end
    WHERE (made_tournament = 1 OR made_wildcard = 1)
),
cte_agg AS (
    SELECT
        winning_team as team,
        conf,
        final_seed,
        COUNT(*) / 10000.0 as occurances
    FROM cte_final_seeds
    GROUP BY ALL
    ORDER BY conf, final_seed, winning_team
)
SELECT
    team,
    conf,
    COALESCE(first(occurances) FILTER (WHERE final_seed = 1 ),0) AS "1_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 2 ),0) AS "2_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 3 ),0) AS "3_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 4 ),0) AS "4_pct1",
    SUM(occurances) AS total_pct1
FROM cte_agg
GROUP BY ALL
ORDER BY "1_pct1" DESC, ("1_pct1"+"2_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1"+"4_pct1") DESC`),s(32,me=`WITH cte_final_seeds AS (
    SELECT
        ROW_NUMBER() OVER (PARTITION BY Scenario_id, conf 
            ORDER BY conf, made_wildcard, wins desc, pt_diff desc, random()) AS final_seed,
        *
    FROM src_tournament_end
    WHERE (made_tournament = 1 OR made_wildcard = 1)
),
cte_agg AS (
    SELECT
        winning_team as team,
        conf,
        final_seed,
        COUNT(*) / 10000.0 as occurances
    FROM cte_final_seeds
    GROUP BY ALL
    ORDER BY conf, final_seed, winning_team
)
SELECT
    team,
    conf,
    COALESCE(first(occurances) FILTER (WHERE final_seed = 1 ),0) AS "1_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 2 ),0) AS "2_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 3 ),0) AS "3_pct1",
    COALESCE(first(occurances) FILTER (WHERE final_seed = 4 ),0) AS "4_pct1",
    SUM(occurances) AS total_pct1
FROM cte_agg
GROUP BY ALL
ORDER BY "1_pct1" DESC, ("1_pct1"+"2_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1"+"4_pct1") DESC`),s(33,ge=A`select
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
order by conf, avg_wins desc`),s(34,Oe=`select
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
order by conf, avg_wins desc`),s(35,ve=A`SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched`),s(36,ze=`SELECT
    team,
    wins::int || '-' || losses::int AS record
FROM src_reg_season_actuals_enriched`),s(37,ut=A`select
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
ORDER BY avg_wins DESC`),s(38,xe=`select
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
ORDER BY avg_wins DESC`),s(39,gt=A`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`),s(40,et=`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.made_play_in,0) )/ 10000.0 as made_playoffs_pct1,
    T.team_long
from src_reg_season_summary R
left join src_nba_ratings T on R.team = T.team`),s(41,Re=A`SELECT
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
FROM src_reg_season_actuals_enriched`),s(42,Et=`SELECT
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
FROM src_reg_season_actuals_enriched`),s(43,we=A`SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`),s(44,pt=`SELECT *,
    elo_rating - original_rating as since_start
FROM src_nba_latest_elo`),s(45,at=A`SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`),s(46,ye=`SELECT
    winning_team as team,
    wins as wins,
    count(*) as occurances
FROM src_reg_season_end
GROUP BY ALL`),s(47,st=A`SELECT
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
ORDER BY sort_key`),s(48,Le=`SELECT
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
ORDER BY sort_key`),s(49,Mt=A`SELECT 
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
GROUP BY ALL`),s(50,Ve=`SELECT 
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
GROUP BY ALL`),s(51,N=A`SELECT
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
ORDER BY game_date desc`),s(52,F=`SELECT
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
ORDER BY game_date desc`),s(53,M=A`with cte_games AS (
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
ORDER BY date`),s(54,I=`with cte_games AS (
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
ORDER BY date`),s(55,B=A`SELECT
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
ORDER BY game_id`),s(56,q=`SELECT
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
ORDER BY game_id`),s(63,Ke=A`select * from src_nba_teams
order by team`),s(64,yt=`select * from src_nba_teams
order by team`),[v,b,ht,Ye,Pe,he,Ge,Ce,ce,rt,_t,ot,lt,be,V,K,Q,kt,Dt,o,Nt,Ht,Pt,n,_,ie,l,He,de,ft,je,le,me,ge,Oe,ve,ze,ut,xe,gt,et,Re,Et,we,pt,at,ye,st,Le,Mt,Ve,N,F,M,I,B,q,$t,Ae,P,G,vt,a,Ke,yt,Lt,bt,e,ha,Ta,Ca]}class Ys extends Ha{constructor(t){super(),Ma(this,t,Ss,$s,ka,{data:23},null,[-1,-1,-1,-1,-1])}}export{Ys as component};
