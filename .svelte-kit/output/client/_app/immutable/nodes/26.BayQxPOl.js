import{s as ut,a as E,e as H,b as Pe,t as ft,c as R,h as ct,d as B,f as c,r as We,u as mt,g as Ge,i as y,j as d,k as Fe,l as Ke,m as dt,o as Xe,p as pt,q as ze,n as we}from"../chunks/scheduler.BVCo5HCX.js";import{S as gt,i as Et,c as F,a as U,m as M,t as u,b as p,d as _e,e as D,g as ie}from"../chunks/index.C9mGAhn_.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.ZGqga9CZ.js";import{s as Rt,Q,p as yt,r as Ze,t as xe}from"../chunks/index.C8RIryS8.js";import{h as I}from"../chunks/setTrackProxy.Cl20Y9Hv.js";import{I as Lt,C as wt}from"../chunks/globalContexts.1hDlTDmj.js";import{w as bt}from"../chunks/entry.BCF5SsRs.js";import{D as vt}from"../chunks/DataTable.BKISIfxk.js";import{p as Ct}from"../chunks/stores.C2AzUxyb.js";import{A as St}from"../chunks/AreaChart.DnAWB9RP.js";import{B as ht}from"../chunks/BarChart.D6nr-wfg.js";import{B as $e}from"../chunks/BigValue.B1VPH2Fw.js";import{L as Ot}from"../chunks/LineChart.DMZMcY3L.js";import{V as Tt}from"../chunks/Value.Blyz8mIZ.js";import{p as At}from"../chunks/profile.BW8tN6E9.js";import{Q as be}from"../chunks/QueryViewer.CwykzcKw.js";function $t(n){var _;let a,s=(g.title??((_=g.og)==null?void 0:_.title))+"",t;return{c(){a=H("h1"),t=ft(s),this.h()},l(l){a=B(l,"H1",{class:!0});var i=We(a);t=mt(i,s),i.forEach(c),this.h()},h(){y(a,"class","title")},m(l,i){d(l,a,i),Fe(a,t)},p:we,d(l){l&&c(a)}}}function kt(n){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:we,p:we,d:we}}function Ft(n){var i;let a,s,t,_,l;return document.title=a=g.title??((i=g.og)==null?void 0:i.title),{c(){s=E(),t=H("meta"),_=E(),l=H("meta"),this.h()},l(m){s=R(m),t=B(m,"META",{property:!0,content:!0}),_=R(m),l=B(m,"META",{name:!0,content:!0}),this.h()},h(){var m,o;y(t,"property","og:title"),y(t,"content",((m=g.og)==null?void 0:m.title)??g.title),y(l,"name","twitter:title"),y(l,"content",((o=g.og)==null?void 0:o.title)??g.title)},m(m,o){d(m,s,o),d(m,t,o),d(m,_,o),d(m,l,o)},p(m,o){var S;o&0&&a!==(a=g.title??((S=g.og)==null?void 0:S.title))&&(document.title=a)},d(m){m&&(c(s),c(t),c(_),c(l))}}}function Ut(n){var l,i;let a,s,t=(g.description||((l=g.og)==null?void 0:l.description))&&Mt(),_=((i=g.og)==null?void 0:i.image)&&Dt();return{c(){t&&t.c(),a=E(),_&&_.c(),s=Pe()},l(m){t&&t.l(m),a=R(m),_&&_.l(m),s=Pe()},m(m,o){t&&t.m(m,o),d(m,a,o),_&&_.m(m,o),d(m,s,o)},p(m,o){var S,Y;(g.description||(S=g.og)!=null&&S.description)&&t.p(m,o),(Y=g.og)!=null&&Y.image&&_.p(m,o)},d(m){m&&(c(a),c(s)),t&&t.d(m),_&&_.d(m)}}}function Mt(n){let a,s,t,_,l;return{c(){a=H("meta"),s=E(),t=H("meta"),_=E(),l=H("meta"),this.h()},l(i){a=B(i,"META",{name:!0,content:!0}),s=R(i),t=B(i,"META",{property:!0,content:!0}),_=R(i),l=B(i,"META",{name:!0,content:!0}),this.h()},h(){var i,m,o;y(a,"name","description"),y(a,"content",g.description??((i=g.og)==null?void 0:i.description)),y(t,"property","og:description"),y(t,"content",((m=g.og)==null?void 0:m.description)??g.description),y(l,"name","twitter:description"),y(l,"content",((o=g.og)==null?void 0:o.description)??g.description)},m(i,m){d(i,a,m),d(i,s,m),d(i,t,m),d(i,_,m),d(i,l,m)},p:we,d(i){i&&(c(a),c(s),c(t),c(_),c(l))}}}function Dt(n){let a,s,t;return{c(){a=H("meta"),s=E(),t=H("meta"),this.h()},l(_){a=B(_,"META",{property:!0,content:!0}),s=R(_),t=B(_,"META",{name:!0,content:!0}),this.h()},h(){var _,l;y(a,"property","og:image"),y(a,"content",(_=g.og)==null?void 0:_.image),y(t,"name","twitter:image"),y(t,"content",(l=g.og)==null?void 0:l.image)},m(_,l){d(_,a,l),d(_,s,l),d(_,t,l)},p:we,d(_){_&&(c(a),c(s),c(t))}}}function et(n){let a,s;return a=new be({props:{queryID:"all_teams",queryResult:n[1]}}),{c(){F(a.$$.fragment)},l(t){U(a.$$.fragment,t)},m(t,_){M(a,t,_),s=!0},p(t,_){const l={};_[0]&2&&(l.queryResult=t[1]),a.$set(l)},i(t){s||(u(a.$$.fragment,t),s=!0)},o(t){p(a.$$.fragment,t),s=!1},d(t){D(a,t)}}}function tt(n){let a,s;return a=new be({props:{queryID:"season_summary",queryResult:n[2]}}),{c(){F(a.$$.fragment)},l(t){U(a.$$.fragment,t)},m(t,_){M(a,t,_),s=!0},p(t,_){const l={};_[0]&4&&(l.queryResult=t[2]),a.$set(l)},i(t){s||(u(a.$$.fragment,t),s=!0)},o(t){p(a.$$.fragment,t),s=!1},d(t){D(a,t)}}}function at(n){let a,s;return a=new be({props:{queryID:"elo_latest",queryResult:n[3]}}),{c(){F(a.$$.fragment)},l(t){U(a.$$.fragment,t)},m(t,_){M(a,t,_),s=!0},p(t,_){const l={};_[0]&8&&(l.queryResult=t[3]),a.$set(l)},i(t){s||(u(a.$$.fragment,t),s=!0)},o(t){p(a.$$.fragment,t),s=!1},d(t){D(a,t)}}}function st(n){let a,s;return a=new be({props:{queryID:"most_recent_games",queryResult:n[4]}}),{c(){F(a.$$.fragment)},l(t){U(a.$$.fragment,t)},m(t,_){M(a,t,_),s=!0},p(t,_){const l={};_[0]&16&&(l.queryResult=t[4]),a.$set(l)},i(t){s||(u(a.$$.fragment,t),s=!0)},o(t){p(a.$$.fragment,t),s=!1},d(t){D(a,t)}}}function nt(n){let a,s;return a=new be({props:{queryID:"game_trend",queryResult:n[5]}}),{c(){F(a.$$.fragment)},l(t){U(a.$$.fragment,t)},m(t,_){M(a,t,_),s=!0},p(t,_){const l={};_[0]&32&&(l.queryResult=t[5]),a.$set(l)},i(t){s||(u(a.$$.fragment,t),s=!0)},o(t){p(a.$$.fragment,t),s=!1},d(t){D(a,t)}}}function rt(n){let a,s;return a=new be({props:{queryID:"nfl_season_summary",queryResult:n[6]}}),{c(){F(a.$$.fragment)},l(t){U(a.$$.fragment,t)},m(t,_){M(a,t,_),s=!0},p(t,_){const l={};_[0]&64&&(l.queryResult=t[6]),a.$set(l)},i(t){s||(u(a.$$.fragment,t),s=!0)},o(t){p(a.$$.fragment,t),s=!1},d(t){D(a,t)}}}function _t(n){let a,s;return a=new be({props:{queryID:"nfl_wins_seed_scatter",queryResult:n[7]}}),{c(){F(a.$$.fragment)},l(t){U(a.$$.fragment,t)},m(t,_){M(a,t,_),s=!0},p(t,_){const l={};_[0]&128&&(l.queryResult=t[7]),a.$set(l)},i(t){s||(u(a.$$.fragment,t),s=!0)},o(t){p(a.$$.fragment,t),s=!1},d(t){D(a,t)}}}function it(n){let a,s;return a=new be({props:{queryID:"nfl_playoff_odds",queryResult:n[8]}}),{c(){F(a.$$.fragment)},l(t){U(a.$$.fragment,t)},m(t,_){M(a,t,_),s=!0},p(t,_){const l={};_[0]&256&&(l.queryResult=t[8]),a.$set(l)},i(t){s||(u(a.$$.fragment,t),s=!0)},o(t){p(a.$$.fragment,t),s=!1},d(t){D(a,t)}}}function lt(n){let a,s;return a=new be({props:{queryID:"nfl_seed_details",queryResult:n[9]}}),{c(){F(a.$$.fragment)},l(t){U(a.$$.fragment,t)},m(t,_){M(a,t,_),s=!0},p(t,_){const l={};_[0]&512&&(l.queryResult=t[9]),a.$set(l)},i(t){s||(u(a.$$.fragment,t),s=!0)},o(t){p(a.$$.fragment,t),s=!1},d(t){D(a,t)}}}function ot(n){let a,s;return a=new $e({props:{data:n[3].filter(n[31]),value:"elo_rating",comparison:"since_start_num1"}}),{c(){F(a.$$.fragment)},l(t){U(a.$$.fragment,t)},m(t,_){M(a,t,_),s=!0},p(t,_){const l={};_[0]&9&&(l.data=t[3].filter(t[31])),a.$set(l)},i(t){s||(u(a.$$.fragment,t),s=!0)},o(t){p(a.$$.fragment,t),s=!1},d(t){D(a,t)}}}function It(n){let a,s='<em class="markdown">The regular season has yet to begin. Check back soon!</em>';return{c(){a=H("p"),a.innerHTML=s,this.h()},l(t){a=B(t,"P",{class:!0,"data-svelte-h":!0}),Ge(a)!=="svelte-170ognw"&&(a.innerHTML=s),this.h()},h(){y(a,"class","markdown")},m(t,_){d(t,a,_)},p:we,i:we,o:we,d(t){t&&c(a)}}}function Nt(n){let a,s,t,_='<a href="#most-recent-games">Most Recent Games</a>',l,i,m;return a=new Ot({props:{data:n[5].filter(n[35]),x:"week",y:"cumulative_elo_change_num0",title:"elo change over time",xMax:"12"}}),i=new vt({props:{data:n[4].filter(n[36]),rows:"12"}}),{c(){F(a.$$.fragment),s=E(),t=H("h3"),t.innerHTML=_,l=E(),F(i.$$.fragment),this.h()},l(o){U(a.$$.fragment,o),s=R(o),t=B(o,"H3",{class:!0,id:!0,"data-svelte-h":!0}),Ge(t)!=="svelte-efyf5h"&&(t.innerHTML=_),l=R(o),U(i.$$.fragment,o),this.h()},h(){y(t,"class","markdown"),y(t,"id","most-recent-games")},m(o,S){M(a,o,S),d(o,s,S),d(o,t,S),d(o,l,S),M(i,o,S),m=!0},p(o,S){const Y={};S[0]&33&&(Y.data=o[5].filter(o[35])),a.$set(Y);const $={};S[0]&17&&($.data=o[4].filter(o[36])),i.$set($)},i(o){m||(u(a.$$.fragment,o),u(i.$$.fragment,o),m=!0)},o(o){p(a.$$.fragment,o),p(i.$$.fragment,o),m=!1},d(o){o&&(c(s),c(t),c(l)),D(a,o),D(i,o)}}}function qt(n){var qe;let a,s,t,_,l,i,m,o,S,Y,$,j,he,ee,ue,te,ae,le,ce,P,Oe='<a href="#season-to-date-results">Season-to-date Results</a>',de,oe,se,pe,J,ge,Z,Te,N,q,ne,V,Ue='<a href="#playoff-odds">Playoff Odds</a>',Ee,K,Re,x,Ae,X,ye,z,ve,re,Le,G=typeof g<"u"&&(g.title||((qe=g.og)==null?void 0:qe.title))&&g.hide_title!==!0&&$t();function ke(e,r){var me;return typeof g<"u"&&(g.title||(me=g.og)!=null&&me.title)?Ft:kt}let Ce=ke()(n),W=typeof g=="object"&&Ut(),L=n[1]&&et(n),w=n[2]&&tt(n),h=n[3]&&at(n),T=n[4]&&st(n),b=n[5]&&nt(n);ee=new Tt({props:{data:n[1].filter(n[30]),column:"team"}});let v=n[6]&&rt(n),C=n[7]&&_t(n),O=n[8]&&it(n),A=n[9]&&lt(n),k=n[3].length>0&&ot(n);se=new $e({props:{data:n[6].filter(n[32]),value:"predicted_wins",comparison:"vs_vegas_num1"}}),J=new $e({props:{data:n[6].filter(n[33]),value:"seed_range"}}),Z=new $e({props:{data:n[6].filter(n[34]),value:"win_range"}});const Ie=[Nt,It],fe=[];function Ne(e,r){return e[5].length>0?0:1}return N=Ne(n),q=fe[N]=Ie[N](n),K=new $e({props:{data:n[8].filter(n[37]),value:"first_rd_bye_pct1"}}),x=new $e({props:{data:n[8].filter(n[38]),value:"made_playoffs_pct1"}}),X=new $e({props:{data:n[8].filter(n[39]),value:"missed_playoffs_pct1"}}),z=new St({props:{data:n[7].filter(n[40]),x:"wins",y:"odds_pct1",series:"season_result",xAxisTitle:"wins",title:"projected end of season wins"}}),re=new ht({props:{data:n[9].filter(n[41]),x:"seed",y:"occurances_pct1",xAxisTitle:"seed",title:"projected end of season seeding"}}),{c(){G&&G.c(),a=E(),Ce.c(),s=H("meta"),t=H("meta"),W&&W.c(),_=Pe(),l=E(),L&&L.c(),i=E(),w&&w.c(),m=E(),h&&h.c(),o=E(),T&&T.c(),S=E(),b&&b.c(),Y=E(),$=H("h1"),j=H("a"),he=ft("Detailed Analysis for "),F(ee.$$.fragment),ue=E(),v&&v.c(),te=E(),C&&C.c(),ae=E(),O&&O.c(),le=E(),A&&A.c(),ce=E(),P=H("h2"),P.innerHTML=Oe,de=E(),k&&k.c(),oe=E(),F(se.$$.fragment),pe=E(),F(J.$$.fragment),ge=E(),F(Z.$$.fragment),Te=E(),q.c(),ne=E(),V=H("h3"),V.innerHTML=Ue,Ee=E(),F(K.$$.fragment),Re=E(),F(x.$$.fragment),Ae=E(),F(X.$$.fragment),ye=E(),F(z.$$.fragment),ve=E(),F(re.$$.fragment),this.h()},l(e){G&&G.l(e),a=R(e);const r=ct("svelte-1j2izld",document.head);Ce.l(r),s=B(r,"META",{name:!0,content:!0}),t=B(r,"META",{name:!0,content:!0}),W&&W.l(r),_=Pe(),r.forEach(c),l=R(e),L&&L.l(e),i=R(e),w&&w.l(e),m=R(e),h&&h.l(e),o=R(e),T&&T.l(e),S=R(e),b&&b.l(e),Y=R(e),$=B(e,"H1",{class:!0,id:!0});var me=We($);j=B(me,"A",{href:!0});var Se=We(j);he=mt(Se,"Detailed Analysis for "),U(ee.$$.fragment,Se),Se.forEach(c),me.forEach(c),ue=R(e),v&&v.l(e),te=R(e),C&&C.l(e),ae=R(e),O&&O.l(e),le=R(e),A&&A.l(e),ce=R(e),P=B(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(P)!=="svelte-5bljsu"&&(P.innerHTML=Oe),de=R(e),k&&k.l(e),oe=R(e),U(se.$$.fragment,e),pe=R(e),U(J.$$.fragment,e),ge=R(e),U(Z.$$.fragment,e),Te=R(e),q.l(e),ne=R(e),V=B(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),Ge(V)!=="svelte-1mwkix9"&&(V.innerHTML=Ue),Ee=R(e),U(K.$$.fragment,e),Re=R(e),U(x.$$.fragment,e),Ae=R(e),U(X.$$.fragment,e),ye=R(e),U(z.$$.fragment,e),ve=R(e),U(re.$$.fragment,e),this.h()},h(){y(s,"name","twitter:card"),y(s,"content","summary"),y(t,"name","twitter:site"),y(t,"content","@evidence_dev"),y(j,"href","#detailed-analysis-for-value-dataall_teamsfilterd--dteamtouppercase--pageparamsnfl_teamstouppercase-columnteam"),y($,"class","markdown"),y($,"id","detailed-analysis-for-value-dataall_teamsfilterd--dteamtouppercase--pageparamsnfl_teamstouppercase-columnteam"),y(P,"class","markdown"),y(P,"id","season-to-date-results"),y(V,"class","markdown"),y(V,"id","playoff-odds")},m(e,r){G&&G.m(e,r),d(e,a,r),Ce.m(document.head,null),Fe(document.head,s),Fe(document.head,t),W&&W.m(document.head,null),Fe(document.head,_),d(e,l,r),L&&L.m(e,r),d(e,i,r),w&&w.m(e,r),d(e,m,r),h&&h.m(e,r),d(e,o,r),T&&T.m(e,r),d(e,S,r),b&&b.m(e,r),d(e,Y,r),d(e,$,r),Fe($,j),Fe(j,he),M(ee,j,null),d(e,ue,r),v&&v.m(e,r),d(e,te,r),C&&C.m(e,r),d(e,ae,r),O&&O.m(e,r),d(e,le,r),A&&A.m(e,r),d(e,ce,r),d(e,P,r),d(e,de,r),k&&k.m(e,r),d(e,oe,r),M(se,e,r),d(e,pe,r),M(J,e,r),d(e,ge,r),M(Z,e,r),d(e,Te,r),fe[N].m(e,r),d(e,ne,r),d(e,V,r),d(e,Ee,r),M(K,e,r),d(e,Re,r),M(x,e,r),d(e,Ae,r),M(X,e,r),d(e,ye,r),M(z,e,r),d(e,ve,r),M(re,e,r),Le=!0},p(e,r){var Ve;typeof g<"u"&&(g.title||(Ve=g.og)!=null&&Ve.title)&&g.hide_title!==!0&&G.p(e,r),Ce.p(e,r),typeof g=="object"&&W.p(e,r),e[1]?L?(L.p(e,r),r[0]&2&&u(L,1)):(L=et(e),L.c(),u(L,1),L.m(i.parentNode,i)):L&&(ie(),p(L,1,1,()=>{L=null}),_e()),e[2]?w?(w.p(e,r),r[0]&4&&u(w,1)):(w=tt(e),w.c(),u(w,1),w.m(m.parentNode,m)):w&&(ie(),p(w,1,1,()=>{w=null}),_e()),e[3]?h?(h.p(e,r),r[0]&8&&u(h,1)):(h=at(e),h.c(),u(h,1),h.m(o.parentNode,o)):h&&(ie(),p(h,1,1,()=>{h=null}),_e()),e[4]?T?(T.p(e,r),r[0]&16&&u(T,1)):(T=st(e),T.c(),u(T,1),T.m(S.parentNode,S)):T&&(ie(),p(T,1,1,()=>{T=null}),_e()),e[5]?b?(b.p(e,r),r[0]&32&&u(b,1)):(b=nt(e),b.c(),u(b,1),b.m(Y.parentNode,Y)):b&&(ie(),p(b,1,1,()=>{b=null}),_e());const me={};r[0]&3&&(me.data=e[1].filter(e[30])),ee.$set(me),e[6]?v?(v.p(e,r),r[0]&64&&u(v,1)):(v=rt(e),v.c(),u(v,1),v.m(te.parentNode,te)):v&&(ie(),p(v,1,1,()=>{v=null}),_e()),e[7]?C?(C.p(e,r),r[0]&128&&u(C,1)):(C=_t(e),C.c(),u(C,1),C.m(ae.parentNode,ae)):C&&(ie(),p(C,1,1,()=>{C=null}),_e()),e[8]?O?(O.p(e,r),r[0]&256&&u(O,1)):(O=it(e),O.c(),u(O,1),O.m(le.parentNode,le)):O&&(ie(),p(O,1,1,()=>{O=null}),_e()),e[9]?A?(A.p(e,r),r[0]&512&&u(A,1)):(A=lt(e),A.c(),u(A,1),A.m(ce.parentNode,ce)):A&&(ie(),p(A,1,1,()=>{A=null}),_e()),e[3].length>0?k?(k.p(e,r),r[0]&8&&u(k,1)):(k=ot(e),k.c(),u(k,1),k.m(oe.parentNode,oe)):k&&(ie(),p(k,1,1,()=>{k=null}),_e());const Se={};r[0]&65&&(Se.data=e[6].filter(e[32])),se.$set(Se);const He={};r[0]&65&&(He.data=e[6].filter(e[33])),J.$set(He);const Be={};r[0]&65&&(Be.data=e[6].filter(e[34])),Z.$set(Be);let Me=N;N=Ne(e),N===Me?fe[N].p(e,r):(ie(),p(fe[Me],1,1,()=>{fe[Me]=null}),_e(),q=fe[N],q?q.p(e,r):(q=fe[N]=Ie[N](e),q.c()),u(q,1),q.m(ne.parentNode,ne));const f={};r[0]&257&&(f.data=e[8].filter(e[37])),K.$set(f);const Ye={};r[0]&257&&(Ye.data=e[8].filter(e[38])),x.$set(Ye);const Qe={};r[0]&257&&(Qe.data=e[8].filter(e[39])),X.$set(Qe);const je={};r[0]&129&&(je.data=e[7].filter(e[40])),z.$set(je);const Je={};r[0]&513&&(Je.data=e[9].filter(e[41])),re.$set(Je)},i(e){Le||(u(L),u(w),u(h),u(T),u(b),u(ee.$$.fragment,e),u(v),u(C),u(O),u(A),u(k),u(se.$$.fragment,e),u(J.$$.fragment,e),u(Z.$$.fragment,e),u(q),u(K.$$.fragment,e),u(x.$$.fragment,e),u(X.$$.fragment,e),u(z.$$.fragment,e),u(re.$$.fragment,e),Le=!0)},o(e){p(L),p(w),p(h),p(T),p(b),p(ee.$$.fragment,e),p(v),p(C),p(O),p(A),p(k),p(se.$$.fragment,e),p(J.$$.fragment,e),p(Z.$$.fragment,e),p(q),p(K.$$.fragment,e),p(x.$$.fragment,e),p(X.$$.fragment,e),p(z.$$.fragment,e),p(re.$$.fragment,e),Le=!1},d(e){e&&(c(a),c(l),c(i),c(m),c(o),c(S),c(Y),c($),c(ue),c(te),c(ae),c(le),c(ce),c(P),c(de),c(oe),c(pe),c(ge),c(Te),c(ne),c(V),c(Ee),c(Re),c(Ae),c(ye),c(ve)),G&&G.d(e),Ce.d(e),c(s),c(t),W&&W.d(e),c(_),L&&L.d(e),w&&w.d(e),h&&h.d(e),T&&T.d(e),b&&b.d(e),D(ee),v&&v.d(e),C&&C.d(e),O&&O.d(e),A&&A.d(e),k&&k.d(e),D(se,e),D(J,e),D(Z,e),fe[N].d(e),D(K,e),D(x,e),D(X,e),D(z,e),D(re,e)}}}const g={queries:[{all_teams:"nfl/all_teams.sql"},{season_summary:"nfl/reg_season.sql"},{elo_latest:"nfl/elo_latest.sql"},{most_recent_games:"nfl/most_recent_games.sql"},{game_trend:"nfl/game_trend.sql"}]};function Ht(n,a,s){let t,_;Ke(n,Ct,f=>s(0,t=f)),Ke(n,Ze,f=>s(57,_=f));let{data:l}=a,{data:i={},customFormattingSettings:m,__db:o,inputs:S}=l;dt(Ze,_="27148cc3b85afe6dd15823b97f4c75d4",_);let Y=bt(S);Xe(Lt,Y),pt(Y.subscribe(f=>S=f)),Xe(wt,{getCustomFormats:()=>m.customFormats||[]});const $=(f,Ye)=>At(o.query,f,{query_name:Ye});Rt($);let j;const he=()=>{j||(j=setTimeout(()=>{xe.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},ee=()=>{j?(clearTimeout(j),j=null):xe.dismiss("LoadingToast")};ze(()=>(Q.addEventListener("inFlightQueryStart",he),Q.addEventListener("inFlightQueryEnd",ee),Q.QueriesLoading&&he(),()=>{Q.removeEventListener("inFlightQueryStart",he),Q.removeEventListener("inFlightQueryEnd",ee)})),t.params,ze(()=>!0);let ue={initialData:void 0,initialError:void 0},te=I`SELECT
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
order by elo_rating DESC`,ae=`SELECT
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
order by elo_rating DESC`;i.all_teams&&(i.all_teams instanceof Error?ue.initialError=i.all_teams:ue.initialData=i.all_teams);let le;const ce=Q.createReactive({callback:f=>{s(1,le=f)},execFn:$},{id:"all_teams",initialData:ue.initialData,initialError:ue.initialError});ce(ae,{noResolve:te}),globalThis[Symbol.for("all_teams")]={get value(){return le}};let P={initialData:void 0,initialError:void 0},Oe=I`select
  conf,
  team,
  avg_wins,
  COALESCE(first_round_bye / 10000.0,0) as first_round_bye_pct1,
  COALESCE((first_round_bye + made_postseason) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
order by conf, avg_wins desc`,de=`select
  conf,
  team,
  avg_wins,
  COALESCE(first_round_bye / 10000.0,0) as first_round_bye_pct1,
  COALESCE((first_round_bye + made_postseason) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
order by conf, avg_wins desc`;i.season_summary&&(i.season_summary instanceof Error?P.initialError=i.season_summary:P.initialData=i.season_summary);let oe;const se=Q.createReactive({callback:f=>{s(2,oe=f)},execFn:$},{id:"season_summary",initialData:P.initialData,initialError:P.initialError});se(de,{noResolve:Oe}),globalThis[Symbol.for("season_summary")]={get value(){return oe}};let pe={initialData:void 0,initialError:void 0},J=I`SELECT
    *,
    elo_rating - original_rating AS since_start_num1
FROM src_nfl_latest_elo`,ge=`SELECT
    *,
    elo_rating - original_rating AS since_start_num1
FROM src_nfl_latest_elo`;i.elo_latest&&(i.elo_latest instanceof Error?pe.initialError=i.elo_latest:pe.initialData=i.elo_latest);let Z;const Te=Q.createReactive({callback:f=>{s(3,Z=f)},execFn:$},{id:"elo_latest",initialData:pe.initialData,initialError:pe.initialError});Te(ge,{noResolve:J}),globalThis[Symbol.for("elo_latest")]={get value(){return Z}};let N={initialData:void 0,initialError:void 0},q=I`SELECT
    RL.week_number as week,
    RL.visiting_team,
    '@' as " ",
    RL.home_team,
    RL.home_team_score::int || ' - ' || RL.visiting_team_score::int as score,
    RL.winning_team,
    ABS(AR.elo_change) AS elo_change_num1
FROM src_nfl_latest_results RL
LEFT JOIN src_nfl_elo_rollforward AR ON
    AR.game_id = RL.game_id
ORDER BY RL.week_number DESC`,ne=`SELECT
    RL.week_number as week,
    RL.visiting_team,
    '@' as " ",
    RL.home_team,
    RL.home_team_score::int || ' - ' || RL.visiting_team_score::int as score,
    RL.winning_team,
    ABS(AR.elo_change) AS elo_change_num1
FROM src_nfl_latest_results RL
LEFT JOIN src_nfl_elo_rollforward AR ON
    AR.game_id = RL.game_id
ORDER BY RL.week_number DESC`;i.most_recent_games&&(i.most_recent_games instanceof Error?N.initialError=i.most_recent_games:N.initialData=i.most_recent_games);let V;const Ue=Q.createReactive({callback:f=>{s(4,V=f)},execFn:$},{id:"most_recent_games",initialData:N.initialData,initialError:N.initialError});Ue(ne,{noResolve:q}),globalThis[Symbol.for("most_recent_games")]={get value(){return V}};let Ee={initialData:void 0,initialError:void 0},K=I`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nfl_ratings
UNION ALL
SELECT game_id, visiting_team as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nfl_elo_rollforward
UNION ALL
SELECT game_id, home_team as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nfl_elo_rollforward
 )
SELECT 
    COALESCE(AR.week_number,0) AS week,
    RL.team,
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.Week_number,0) asc rows between unbounded preceding and current row) as cumulative_elo_change_num0
FROM cte_games RL
LEFT JOIN src_nfl_schedules AR ON
    AR.game_id = RL.game_id`,Re=`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nfl_ratings
UNION ALL
SELECT game_id, visiting_team as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nfl_elo_rollforward
UNION ALL
SELECT game_id, home_team as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nfl_elo_rollforward
 )
SELECT 
    COALESCE(AR.week_number,0) AS week,
    RL.team,
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.Week_number,0) asc rows between unbounded preceding and current row) as cumulative_elo_change_num0
FROM cte_games RL
LEFT JOIN src_nfl_schedules AR ON
    AR.game_id = RL.game_id`;i.game_trend&&(i.game_trend instanceof Error?Ee.initialError=i.game_trend:Ee.initialData=i.game_trend);let x;const Ae=Q.createReactive({callback:f=>{s(5,x=f)},execFn:$},{id:"game_trend",initialData:Ee.initialData,initialError:Ee.initialError});Ae(Re,{noResolve:K}),globalThis[Symbol.for("game_trend")]={get value(){return x}};let X={initialData:void 0,initialError:void 0},ye=I`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.first_round_bye,0) )/ 10000.0 as made_playoffs_pct1
from src_nfl_reg_season_summary R
left join src_nfl_ratings T on R.team = T.team`,z=`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.first_round_bye,0) )/ 10000.0 as made_playoffs_pct1
from src_nfl_reg_season_summary R
left join src_nfl_ratings T on R.team = T.team`;i.nfl_season_summary&&(i.nfl_season_summary instanceof Error?X.initialError=i.nfl_season_summary:X.initialData=i.nfl_season_summary);let ve;const re=Q.createReactive({callback:f=>{s(6,ve=f)},execFn:$},{id:"nfl_season_summary",initialData:X.initialData,initialError:X.initialError});re(z,{noResolve:ye}),globalThis[Symbol.for("nfl_season_summary")]={get value(){return ve}};let Le={initialData:void 0,initialError:void 0},G=I`SELECT
    winning_team as team,
    wins as wins,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result
FROM src_nfl_reg_season_end
GROUP BY ALL`,ke=`SELECT
    winning_team as team,
    wins as wins,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result
FROM src_nfl_reg_season_end
GROUP BY ALL`;i.nfl_wins_seed_scatter&&(i.nfl_wins_seed_scatter instanceof Error?Le.initialError=i.nfl_wins_seed_scatter:Le.initialData=i.nfl_wins_seed_scatter);let De;const Ce=Q.createReactive({callback:f=>{s(7,De=f)},execFn:$},{id:"nfl_wins_seed_scatter",initialData:Le.initialData,initialError:Le.initialError});Ce(ke,{noResolve:G}),globalThis[Symbol.for("nfl_wins_seed_scatter")]={get value(){return De}};let W={initialData:void 0,initialError:void 0},L=I`SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'first round bye'),0) as first_rd_bye_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'made playoffs'),0) as made_playoffs_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result
FROM src_nfl_reg_season_end
GROUP BY ALL)
GROUP BY ALL`,w=`SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'first round bye'),0) as first_rd_bye_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'made playoffs'),0) as made_playoffs_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result
FROM src_nfl_reg_season_end
GROUP BY ALL)
GROUP BY ALL`;i.nfl_playoff_odds&&(i.nfl_playoff_odds instanceof Error?W.initialError=i.nfl_playoff_odds:W.initialData=i.nfl_playoff_odds);let h;const T=Q.createReactive({callback:f=>{s(8,h=f)},execFn:$},{id:"nfl_playoff_odds",initialData:W.initialData,initialError:W.initialError});T(w,{noResolve:L}),globalThis[Symbol.for("nfl_playoff_odds")]={get value(){return h}};let b={initialData:void 0,initialError:void 0},v=I`SELECT
    winning_team as team,
    season_rank as seed,
    count(*) / 10000.0 as occurances_pct1
FROM src_nfl_reg_season_end
GROUP BY ALL`,C=`SELECT
    winning_team as team,
    season_rank as seed,
    count(*) / 10000.0 as occurances_pct1
FROM src_nfl_reg_season_end
GROUP BY ALL`;i.nfl_seed_details&&(i.nfl_seed_details instanceof Error?b.initialError=i.nfl_seed_details:b.initialData=i.nfl_seed_details);let O;const A=Q.createReactive({callback:f=>{s(9,O=f)},execFn:$},{id:"nfl_seed_details",initialData:b.initialData,initialError:b.initialError});A(C,{noResolve:v}),globalThis[Symbol.for("nfl_seed_details")]={get value(){return O}};const k=f=>f.team.toUpperCase()===t.params.nfl_teams.toUpperCase(),Ie=f=>f.team.toUpperCase()===t.params.nfl_teams.toUpperCase(),fe=f=>f.team.toUpperCase()===t.params.nfl_teams.toUpperCase(),Ne=f=>f.team.toUpperCase()===t.params.nfl_teams.toUpperCase(),qe=f=>f.team.toUpperCase()===t.params.nfl_teams.toUpperCase(),e=f=>f.team.toUpperCase()===t.params.nfl_teams.toUpperCase(),r=f=>f.home_team.toUpperCase()===t.params.nfl_teams.toUpperCase()|f.visiting_team.toUpperCase()===t.params.nfl_teams.toUpperCase(),me=f=>f.team.toUpperCase()===t.params.nfl_teams.toUpperCase(),Se=f=>f.team.toUpperCase()===t.params.nfl_teams.toUpperCase(),He=f=>f.team.toUpperCase()===t.params.nfl_teams.toUpperCase(),Be=f=>f.team.toUpperCase()===t.params.nfl_teams.toUpperCase(),Me=f=>f.team.toUpperCase()===t.params.nfl_teams.toUpperCase();return n.$$set=f=>{"data"in f&&s(10,l=f.data)},n.$$.update=()=>{n.$$.dirty[0]&1024&&s(11,{data:i={},customFormattingSettings:m,__db:o}=l,i),n.$$.dirty[0]&2048&&yt.set(Object.keys(i).length>0),n.$$.dirty[0]&1&&t.params,n.$$.dirty[0]&12288&&ce(ae,{noResolve:te}),n.$$.dirty[0]&49152&&se(de,{noResolve:Oe}),n.$$.dirty[0]&196608&&Te(ge,{noResolve:J}),n.$$.dirty[0]&786432&&Ue(ne,{noResolve:q}),n.$$.dirty[0]&3145728&&Ae(Re,{noResolve:K}),n.$$.dirty[0]&12582912&&re(z,{noResolve:ye}),n.$$.dirty[0]&50331648&&Ce(ke,{noResolve:G}),n.$$.dirty[0]&201326592&&T(w,{noResolve:L}),n.$$.dirty[0]&805306368&&A(C,{noResolve:v})},s(12,te=I`SELECT
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
order by elo_rating DESC`),s(13,ae=`SELECT
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
order by elo_rating DESC`),s(14,Oe=I`select
  conf,
  team,
  avg_wins,
  COALESCE(first_round_bye / 10000.0,0) as first_round_bye_pct1,
  COALESCE((first_round_bye + made_postseason) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
order by conf, avg_wins desc`),s(15,de=`select
  conf,
  team,
  avg_wins,
  COALESCE(first_round_bye / 10000.0,0) as first_round_bye_pct1,
  COALESCE((first_round_bye + made_postseason) / 10000.0,0) as make_playoffs_pct1
from src_nfl_reg_season_summary
order by conf, avg_wins desc`),s(16,J=I`SELECT
    *,
    elo_rating - original_rating AS since_start_num1
FROM src_nfl_latest_elo`),s(17,ge=`SELECT
    *,
    elo_rating - original_rating AS since_start_num1
FROM src_nfl_latest_elo`),s(18,q=I`SELECT
    RL.week_number as week,
    RL.visiting_team,
    '@' as " ",
    RL.home_team,
    RL.home_team_score::int || ' - ' || RL.visiting_team_score::int as score,
    RL.winning_team,
    ABS(AR.elo_change) AS elo_change_num1
FROM src_nfl_latest_results RL
LEFT JOIN src_nfl_elo_rollforward AR ON
    AR.game_id = RL.game_id
ORDER BY RL.week_number DESC`),s(19,ne=`SELECT
    RL.week_number as week,
    RL.visiting_team,
    '@' as " ",
    RL.home_team,
    RL.home_team_score::int || ' - ' || RL.visiting_team_score::int as score,
    RL.winning_team,
    ABS(AR.elo_change) AS elo_change_num1
FROM src_nfl_latest_results RL
LEFT JOIN src_nfl_elo_rollforward AR ON
    AR.game_id = RL.game_id
ORDER BY RL.week_number DESC`),s(20,K=I`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nfl_ratings
UNION ALL
SELECT game_id, visiting_team as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nfl_elo_rollforward
UNION ALL
SELECT game_id, home_team as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nfl_elo_rollforward
 )
SELECT 
    COALESCE(AR.week_number,0) AS week,
    RL.team,
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.Week_number,0) asc rows between unbounded preceding and current row) as cumulative_elo_change_num0
FROM cte_games RL
LEFT JOIN src_nfl_schedules AR ON
    AR.game_id = RL.game_id`),s(21,Re=`with cte_games AS (
SELECT 0 as game_id, team, original_rating as elo_rating, 0 as elo_change 
FROM src_nfl_ratings
UNION ALL
SELECT game_id, visiting_team as team, visiting_team_elo_rating as elo_rating, elo_change
FROM src_nfl_elo_rollforward
UNION ALL
SELECT game_id, home_team as team, home_team_elo_rating as elo_rating, elo_change*-1 as elo_change
FROM src_nfl_elo_rollforward
 )
SELECT 
    COALESCE(AR.week_number,0) AS week,
    RL.team,
    RL.elo_rating, 
    RL.elo_change,
    sum(RL.elo_change) over (partition by team order by COALESCE(AR.Week_number,0) asc rows between unbounded preceding and current row) as cumulative_elo_change_num0
FROM cte_games RL
LEFT JOIN src_nfl_schedules AR ON
    AR.game_id = RL.game_id`),s(22,ye=I`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.first_round_bye,0) )/ 10000.0 as made_playoffs_pct1
from src_nfl_reg_season_summary R
left join src_nfl_ratings T on R.team = T.team`),s(23,z=`select R.*,
    R.elo_vs_vegas*-1.0 as vs_vegas_num1,
    R.avg_wins as predicted_wins,
    (COALESCE(R.made_postseason,0) + COALESCE(R.first_round_bye,0) )/ 10000.0 as made_playoffs_pct1
from src_nfl_reg_season_summary R
left join src_nfl_ratings T on R.team = T.team`),s(24,G=I`SELECT
    winning_team as team,
    wins as wins,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result
FROM src_nfl_reg_season_end
GROUP BY ALL`),s(25,ke=`SELECT
    winning_team as team,
    wins as wins,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result
FROM src_nfl_reg_season_end
GROUP BY ALL`),s(26,L=I`SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'first round bye'),0) as first_rd_bye_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'made playoffs'),0) as made_playoffs_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result
FROM src_nfl_reg_season_end
GROUP BY ALL)
GROUP BY ALL`),s(27,w=`SELECT 
    team,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'first round bye'),0) as first_rd_bye_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'made playoffs'),0) as made_playoffs_pct1,
    COALESCE(SUM(odds_pct1) FILTER (WHERE season_result = 'missed playoffs'),0) as missed_playoffs_pct1
FROM (SELECT
    winning_team as team,
    wins as wins,
    count(*) / 10000.0 as odds_pct1,
    case when season_rank = 1 then 'first round bye'
        when season_rank between 2 and 7 then 'made playoffs'
        else 'missed playoffs'
    end as season_result
FROM src_nfl_reg_season_end
GROUP BY ALL)
GROUP BY ALL`),s(28,v=I`SELECT
    winning_team as team,
    season_rank as seed,
    count(*) / 10000.0 as occurances_pct1
FROM src_nfl_reg_season_end
GROUP BY ALL`),s(29,C=`SELECT
    winning_team as team,
    season_rank as seed,
    count(*) / 10000.0 as occurances_pct1
FROM src_nfl_reg_season_end
GROUP BY ALL`),[t,le,oe,Z,V,x,ve,De,h,O,l,i,te,ae,Oe,de,J,ge,q,ne,K,Re,ye,z,G,ke,L,w,v,C,k,Ie,fe,Ne,qe,e,r,me,Se,He,Be,Me]}class aa extends gt{constructor(a){super(),Et(this,a,Ht,qt,ut,{data:10},null,[-1,-1,-1])}}export{aa as component};
