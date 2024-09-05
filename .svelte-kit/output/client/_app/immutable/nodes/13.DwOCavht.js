import{s as Xe,a as w,e as F,b as Ae,c as R,h as Ze,d as y,f as E,g as J,i as v,j as $,k as Re,l as De,m as et,o as be,p as tt,q as He,t as nt,r as at,u as it,n as h}from"../chunks/scheduler.BVCo5HCX.js";import{S as mt,i as rt,c as T,a as L,m as O,t as c,b as p,d as fe,e as C,g as Ee}from"../chunks/index.C9mGAhn_.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.ZGqga9CZ.js";import{s as st,Q as ne,p as _t,r as ve,t as We}from"../chunks/index.C8RIryS8.js";import{h as X}from"../chunks/setTrackProxy.Cl20Y9Hv.js";import{I as ot,C as ut}from"../chunks/globalContexts.1hDlTDmj.js";import{w as lt}from"../chunks/entry.BCF5SsRs.js";import{D as ae,C as D}from"../chunks/DataTable.BKISIfxk.js";import{p as ft}from"../chunks/stores.C2AzUxyb.js";import{p as Et}from"../chunks/profile.BW8tN6E9.js";import{T as Fe,a as Te}from"../chunks/Tab.ctbPyAZp.js";import{Q as $e}from"../chunks/QueryViewer.CwykzcKw.js";function $t(g){var _;let n,o=(W.title??((_=W.og)==null?void 0:_.title))+"",t;return{c(){n=F("h1"),t=nt(o),this.h()},l(m){n=y(m,"H1",{class:!0});var s=at(n);t=it(s,o),s.forEach(E),this.h()},h(){v(n,"class","title")},m(m,s){$(m,n,s),Re(n,t)},p:h,d(m){m&&E(n)}}}function gt(g){return{c(){this.h()},l(n){this.h()},h(){document.title="Evidence"},m:h,p:h,d:h}}function ct(g){var s;let n,o,t,_,m;return document.title=n=W.title??((s=W.og)==null?void 0:s.title),{c(){o=w(),t=F("meta"),_=w(),m=F("meta"),this.h()},l(u){o=R(u),t=y(u,"META",{property:!0,content:!0}),_=R(u),m=y(u,"META",{name:!0,content:!0}),this.h()},h(){var u,d;v(t,"property","og:title"),v(t,"content",((u=W.og)==null?void 0:u.title)??W.title),v(m,"name","twitter:title"),v(m,"content",((d=W.og)==null?void 0:d.title)??W.title)},m(u,d){$(u,o,d),$(u,t,d),$(u,_,d),$(u,m,d)},p(u,d){var f;d&0&&n!==(n=W.title??((f=W.og)==null?void 0:f.title))&&(document.title=n)},d(u){u&&(E(o),E(t),E(_),E(m))}}}function pt(g){var m,s;let n,o,t=(W.description||((m=W.og)==null?void 0:m.description))&&dt(),_=((s=W.og)==null?void 0:s.image)&&St();return{c(){t&&t.c(),n=w(),_&&_.c(),o=Ae()},l(u){t&&t.l(u),n=R(u),_&&_.l(u),o=Ae()},m(u,d){t&&t.m(u,d),$(u,n,d),_&&_.m(u,d),$(u,o,d)},p(u,d){var f,N;(W.description||(f=W.og)!=null&&f.description)&&t.p(u,d),(N=W.og)!=null&&N.image&&_.p(u,d)},d(u){u&&(E(n),E(o)),t&&t.d(u),_&&_.d(u)}}}function dt(g){let n,o,t,_,m;return{c(){n=F("meta"),o=w(),t=F("meta"),_=w(),m=F("meta"),this.h()},l(s){n=y(s,"META",{name:!0,content:!0}),o=R(s),t=y(s,"META",{property:!0,content:!0}),_=R(s),m=y(s,"META",{name:!0,content:!0}),this.h()},h(){var s,u,d;v(n,"name","description"),v(n,"content",W.description??((s=W.og)==null?void 0:s.description)),v(t,"property","og:description"),v(t,"content",((u=W.og)==null?void 0:u.description)??W.description),v(m,"name","twitter:description"),v(m,"content",((d=W.og)==null?void 0:d.description)??W.description)},m(s,u){$(s,n,u),$(s,o,u),$(s,t,u),$(s,_,u),$(s,m,u)},p:h,d(s){s&&(E(n),E(o),E(t),E(_),E(m))}}}function St(g){let n,o,t;return{c(){n=F("meta"),o=w(),t=F("meta"),this.h()},l(_){n=y(_,"META",{property:!0,content:!0}),o=R(_),t=y(_,"META",{name:!0,content:!0}),this.h()},h(){var _,m;v(n,"property","og:image"),v(n,"content",(_=W.og)==null?void 0:_.image),v(t,"name","twitter:image"),v(t,"content",(m=W.og)==null?void 0:m.image)},m(_,m){$(_,n,m),$(_,o,m),$(_,t,m)},p:h,d(_){_&&(E(n),E(o),E(t))}}}function ye(g){let n,o;return n=new $e({props:{queryID:"future_games",queryResult:g[0]}}),{c(){T(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,_){O(n,t,_),o=!0},p(t,_){const m={};_[0]&1&&(m.queryResult=t[0]),n.$set(m)},i(t){o||(c(n.$$.fragment,t),o=!0)},o(t){p(n.$$.fragment,t),o=!1},d(t){C(n,t)}}}function Me(g){let n,o;return n=new $e({props:{queryID:"past_games",queryResult:g[1]}}),{c(){T(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,_){O(n,t,_),o=!0},p(t,_){const m={};_[0]&2&&(m.queryResult=t[1]),n.$set(m)},i(t){o||(c(n.$$.fragment,t),o=!0)},o(t){p(n.$$.fragment,t),o=!1},d(t){C(n,t)}}}function Be(g){let n,o;return n=new $e({props:{queryID:"tournament_standings",queryResult:g[2]}}),{c(){T(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,_){O(n,t,_),o=!0},p(t,_){const m={};_[0]&4&&(m.queryResult=t[2]),n.$set(m)},i(t){o||(c(n.$$.fragment,t),o=!0)},o(t){p(n.$$.fragment,t),o=!1},d(t){C(n,t)}}}function ke(g){let n,o;return n=new $e({props:{queryID:"tournament_results",queryResult:g[3]}}),{c(){T(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,_){O(n,t,_),o=!0},p(t,_){const m={};_[0]&8&&(m.queryResult=t[3]),n.$set(m)},i(t){o||(c(n.$$.fragment,t),o=!0)},o(t){p(n.$$.fragment,t),o=!1},d(t){C(n,t)}}}function Ye(g){let n,o;return n=new $e({props:{queryID:"most_recent_games",queryResult:g[4]}}),{c(){T(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,_){O(n,t,_),o=!0},p(t,_){const m={};_[0]&16&&(m.queryResult=t[4]),n.$set(m)},i(t){o||(c(n.$$.fragment,t),o=!0)},o(t){p(n.$$.fragment,t),o=!1},d(t){C(n,t)}}}function Ue(g){let n,o;return n=new $e({props:{queryID:"tournament_seeding",queryResult:g[5]}}),{c(){T(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,_){O(n,t,_),o=!0},p(t,_){const m={};_[0]&32&&(m.queryResult=t[5]),n.$set(m)},i(t){o||(c(n.$$.fragment,t),o=!0)},o(t){p(n.$$.fragment,t),o=!1},d(t){C(n,t)}}}function Ie(g){let n,o;return n=new $e({props:{queryID:"wildcard_standings",queryResult:g[6]}}),{c(){T(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,_){O(n,t,_),o=!0},p(t,_){const m={};_[0]&64&&(m.queryResult=t[6]),n.$set(m)},i(t){o||(c(n.$$.fragment,t),o=!0)},o(t){p(n.$$.fragment,t),o=!1},d(t){C(n,t)}}}function wt(g){let n,o,t,_,m,s,u,d,f,N,r,A,a,S;return n=new D({props:{id:"team"}}),t=new D({props:{id:"record"}}),m=new D({props:{id:"pt_diff",align:"right"}}),u=new D({props:{id:"proj_record",align:"right"}}),f=new D({props:{id:"won_group_pct1"}}),r=new D({props:{id:"won_wildcard_pct1"}}),a=new D({props:{id:"made_tournament_pct1"}}),{c(){T(n.$$.fragment),o=w(),T(t.$$.fragment),_=w(),T(m.$$.fragment),s=w(),T(u.$$.fragment),d=w(),T(f.$$.fragment),N=w(),T(r.$$.fragment),A=w(),T(a.$$.fragment)},l(e){L(n.$$.fragment,e),o=R(e),L(t.$$.fragment,e),_=R(e),L(m.$$.fragment,e),s=R(e),L(u.$$.fragment,e),d=R(e),L(f.$$.fragment,e),N=R(e),L(r.$$.fragment,e),A=R(e),L(a.$$.fragment,e)},m(e,i){O(n,e,i),$(e,o,i),O(t,e,i),$(e,_,i),O(m,e,i),$(e,s,i),O(u,e,i),$(e,d,i),O(f,e,i),$(e,N,i),O(r,e,i),$(e,A,i),O(a,e,i),S=!0},p:h,i(e){S||(c(n.$$.fragment,e),c(t.$$.fragment,e),c(m.$$.fragment,e),c(u.$$.fragment,e),c(f.$$.fragment,e),c(r.$$.fragment,e),c(a.$$.fragment,e),S=!0)},o(e){p(n.$$.fragment,e),p(t.$$.fragment,e),p(m.$$.fragment,e),p(u.$$.fragment,e),p(f.$$.fragment,e),p(r.$$.fragment,e),p(a.$$.fragment,e),S=!1},d(e){e&&(E(o),E(_),E(s),E(d),E(N),E(A)),C(n,e),C(t,e),C(m,e),C(u,e),C(f,e),C(r,e),C(a,e)}}}function Rt(g){let n,o,t,_,m,s,u,d,f,N,r,A,a,S;return n=new D({props:{id:"team"}}),t=new D({props:{id:"record"}}),m=new D({props:{id:"pt_diff",align:"right"}}),u=new D({props:{id:"proj_record",align:"right"}}),f=new D({props:{id:"won_group_pct1"}}),r=new D({props:{id:"won_wildcard_pct1"}}),a=new D({props:{id:"made_tournament_pct1"}}),{c(){T(n.$$.fragment),o=w(),T(t.$$.fragment),_=w(),T(m.$$.fragment),s=w(),T(u.$$.fragment),d=w(),T(f.$$.fragment),N=w(),T(r.$$.fragment),A=w(),T(a.$$.fragment)},l(e){L(n.$$.fragment,e),o=R(e),L(t.$$.fragment,e),_=R(e),L(m.$$.fragment,e),s=R(e),L(u.$$.fragment,e),d=R(e),L(f.$$.fragment,e),N=R(e),L(r.$$.fragment,e),A=R(e),L(a.$$.fragment,e)},m(e,i){O(n,e,i),$(e,o,i),O(t,e,i),$(e,_,i),O(m,e,i),$(e,s,i),O(u,e,i),$(e,d,i),O(f,e,i),$(e,N,i),O(r,e,i),$(e,A,i),O(a,e,i),S=!0},p:h,i(e){S||(c(n.$$.fragment,e),c(t.$$.fragment,e),c(m.$$.fragment,e),c(u.$$.fragment,e),c(f.$$.fragment,e),c(r.$$.fragment,e),c(a.$$.fragment,e),S=!0)},o(e){p(n.$$.fragment,e),p(t.$$.fragment,e),p(m.$$.fragment,e),p(u.$$.fragment,e),p(f.$$.fragment,e),p(r.$$.fragment,e),p(a.$$.fragment,e),S=!1},d(e){e&&(E(o),E(_),E(s),E(d),E(N),E(A)),C(n,e),C(t,e),C(m,e),C(u,e),C(f,e),C(r,e),C(a,e)}}}function At(g){let n,o,t,_,m,s,u,d,f,N,r,A,a,S;return n=new D({props:{id:"team"}}),t=new D({props:{id:"record"}}),m=new D({props:{id:"pt_diff",align:"right"}}),u=new D({props:{id:"proj_record",align:"right"}}),f=new D({props:{id:"won_group_pct1"}}),r=new D({props:{id:"won_wildcard_pct1"}}),a=new D({props:{id:"made_tournament_pct1"}}),{c(){T(n.$$.fragment),o=w(),T(t.$$.fragment),_=w(),T(m.$$.fragment),s=w(),T(u.$$.fragment),d=w(),T(f.$$.fragment),N=w(),T(r.$$.fragment),A=w(),T(a.$$.fragment)},l(e){L(n.$$.fragment,e),o=R(e),L(t.$$.fragment,e),_=R(e),L(m.$$.fragment,e),s=R(e),L(u.$$.fragment,e),d=R(e),L(f.$$.fragment,e),N=R(e),L(r.$$.fragment,e),A=R(e),L(a.$$.fragment,e)},m(e,i){O(n,e,i),$(e,o,i),O(t,e,i),$(e,_,i),O(m,e,i),$(e,s,i),O(u,e,i),$(e,d,i),O(f,e,i),$(e,N,i),O(r,e,i),$(e,A,i),O(a,e,i),S=!0},p:h,i(e){S||(c(n.$$.fragment,e),c(t.$$.fragment,e),c(m.$$.fragment,e),c(u.$$.fragment,e),c(f.$$.fragment,e),c(r.$$.fragment,e),c(a.$$.fragment,e),S=!0)},o(e){p(n.$$.fragment,e),p(t.$$.fragment,e),p(m.$$.fragment,e),p(u.$$.fragment,e),p(f.$$.fragment,e),p(r.$$.fragment,e),p(a.$$.fragment,e),S=!1},d(e){e&&(E(o),E(_),E(s),E(d),E(N),E(A)),C(n,e),C(t,e),C(m,e),C(u,e),C(f,e),C(r,e),C(a,e)}}}function Tt(g){let n,o='<a href="#group-a-standings">Group A Standings</a>',t,_,m,s,u='<a href="#group-b-standings">Group B Standings</a>',d,f,N,r,A='<a href="#group-c-standings">Group C Standings</a>',a,S,e;return _=new ae({props:{data:g[2].filter(Pe),link:"team_link",rows:"5",$$slots:{default:[wt]},$$scope:{ctx:g}}}),f=new ae({props:{data:g[2].filter(Ge),link:"team_link",rows:"5",$$slots:{default:[Rt]},$$scope:{ctx:g}}}),S=new ae({props:{data:g[2].filter(he),link:"team_link",rows:"5",$$slots:{default:[At]},$$scope:{ctx:g}}}),{c(){n=F("h3"),n.innerHTML=o,t=w(),T(_.$$.fragment),m=w(),s=F("h3"),s.innerHTML=u,d=w(),T(f.$$.fragment),N=w(),r=F("h3"),r.innerHTML=A,a=w(),T(S.$$.fragment),this.h()},l(i){n=y(i,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(n)!=="svelte-guvvb1"&&(n.innerHTML=o),t=R(i),L(_.$$.fragment,i),m=R(i),s=y(i,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(s)!=="svelte-1scsybi"&&(s.innerHTML=u),d=R(i),L(f.$$.fragment,i),N=R(i),r=y(i,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(r)!=="svelte-30in7b"&&(r.innerHTML=A),a=R(i),L(S.$$.fragment,i),this.h()},h(){v(n,"class","markdown"),v(n,"id","group-a-standings"),v(s,"class","markdown"),v(s,"id","group-b-standings"),v(r,"class","markdown"),v(r,"id","group-c-standings")},m(i,H){$(i,n,H),$(i,t,H),O(_,i,H),$(i,m,H),$(i,s,H),$(i,d,H),O(f,i,H),$(i,N,H),$(i,r,H),$(i,a,H),O(S,i,H),e=!0},p(i,H){const q={};H[0]&4&&(q.data=i[2].filter(Pe)),H[1]&524288&&(q.$$scope={dirty:H,ctx:i}),_.$set(q);const G={};H[0]&4&&(G.data=i[2].filter(Ge)),H[1]&524288&&(G.$$scope={dirty:H,ctx:i}),f.$set(G);const j={};H[0]&4&&(j.data=i[2].filter(he)),H[1]&524288&&(j.$$scope={dirty:H,ctx:i}),S.$set(j)},i(i){e||(c(_.$$.fragment,i),c(f.$$.fragment,i),c(S.$$.fragment,i),e=!0)},o(i){p(_.$$.fragment,i),p(f.$$.fragment,i),p(S.$$.fragment,i),e=!1},d(i){i&&(E(n),E(t),E(m),E(s),E(d),E(N),E(r),E(a)),C(_,i),C(f,i),C(S,i)}}}function Lt(g){let n,o,t,_,m,s,u,d,f,N,r,A,a,S;return n=new D({props:{id:"team"}}),t=new D({props:{id:"record"}}),m=new D({props:{id:"pt_diff",align:"right"}}),u=new D({props:{id:"proj_record",align:"right"}}),f=new D({props:{id:"won_group_pct1"}}),r=new D({props:{id:"won_wildcard_pct1"}}),a=new D({props:{id:"made_tournament_pct1"}}),{c(){T(n.$$.fragment),o=w(),T(t.$$.fragment),_=w(),T(m.$$.fragment),s=w(),T(u.$$.fragment),d=w(),T(f.$$.fragment),N=w(),T(r.$$.fragment),A=w(),T(a.$$.fragment)},l(e){L(n.$$.fragment,e),o=R(e),L(t.$$.fragment,e),_=R(e),L(m.$$.fragment,e),s=R(e),L(u.$$.fragment,e),d=R(e),L(f.$$.fragment,e),N=R(e),L(r.$$.fragment,e),A=R(e),L(a.$$.fragment,e)},m(e,i){O(n,e,i),$(e,o,i),O(t,e,i),$(e,_,i),O(m,e,i),$(e,s,i),O(u,e,i),$(e,d,i),O(f,e,i),$(e,N,i),O(r,e,i),$(e,A,i),O(a,e,i),S=!0},p:h,i(e){S||(c(n.$$.fragment,e),c(t.$$.fragment,e),c(m.$$.fragment,e),c(u.$$.fragment,e),c(f.$$.fragment,e),c(r.$$.fragment,e),c(a.$$.fragment,e),S=!0)},o(e){p(n.$$.fragment,e),p(t.$$.fragment,e),p(m.$$.fragment,e),p(u.$$.fragment,e),p(f.$$.fragment,e),p(r.$$.fragment,e),p(a.$$.fragment,e),S=!1},d(e){e&&(E(o),E(_),E(s),E(d),E(N),E(A)),C(n,e),C(t,e),C(m,e),C(u,e),C(f,e),C(r,e),C(a,e)}}}function Ot(g){let n,o,t,_,m,s,u,d,f,N,r,A,a,S;return n=new D({props:{id:"team"}}),t=new D({props:{id:"record"}}),m=new D({props:{id:"pt_diff",align:"right"}}),u=new D({props:{id:"proj_record",align:"right"}}),f=new D({props:{id:"won_group_pct1"}}),r=new D({props:{id:"won_wildcard_pct1"}}),a=new D({props:{id:"made_tournament_pct1"}}),{c(){T(n.$$.fragment),o=w(),T(t.$$.fragment),_=w(),T(m.$$.fragment),s=w(),T(u.$$.fragment),d=w(),T(f.$$.fragment),N=w(),T(r.$$.fragment),A=w(),T(a.$$.fragment)},l(e){L(n.$$.fragment,e),o=R(e),L(t.$$.fragment,e),_=R(e),L(m.$$.fragment,e),s=R(e),L(u.$$.fragment,e),d=R(e),L(f.$$.fragment,e),N=R(e),L(r.$$.fragment,e),A=R(e),L(a.$$.fragment,e)},m(e,i){O(n,e,i),$(e,o,i),O(t,e,i),$(e,_,i),O(m,e,i),$(e,s,i),O(u,e,i),$(e,d,i),O(f,e,i),$(e,N,i),O(r,e,i),$(e,A,i),O(a,e,i),S=!0},p:h,i(e){S||(c(n.$$.fragment,e),c(t.$$.fragment,e),c(m.$$.fragment,e),c(u.$$.fragment,e),c(f.$$.fragment,e),c(r.$$.fragment,e),c(a.$$.fragment,e),S=!0)},o(e){p(n.$$.fragment,e),p(t.$$.fragment,e),p(m.$$.fragment,e),p(u.$$.fragment,e),p(f.$$.fragment,e),p(r.$$.fragment,e),p(a.$$.fragment,e),S=!1},d(e){e&&(E(o),E(_),E(s),E(d),E(N),E(A)),C(n,e),C(t,e),C(m,e),C(u,e),C(f,e),C(r,e),C(a,e)}}}function Ct(g){let n,o,t,_,m,s,u,d,f,N,r,A,a,S;return n=new D({props:{id:"team"}}),t=new D({props:{id:"record"}}),m=new D({props:{id:"pt_diff",align:"right"}}),u=new D({props:{id:"proj_record",align:"right"}}),f=new D({props:{id:"won_group_pct1"}}),r=new D({props:{id:"won_wildcard_pct1"}}),a=new D({props:{id:"made_tournament_pct1"}}),{c(){T(n.$$.fragment),o=w(),T(t.$$.fragment),_=w(),T(m.$$.fragment),s=w(),T(u.$$.fragment),d=w(),T(f.$$.fragment),N=w(),T(r.$$.fragment),A=w(),T(a.$$.fragment)},l(e){L(n.$$.fragment,e),o=R(e),L(t.$$.fragment,e),_=R(e),L(m.$$.fragment,e),s=R(e),L(u.$$.fragment,e),d=R(e),L(f.$$.fragment,e),N=R(e),L(r.$$.fragment,e),A=R(e),L(a.$$.fragment,e)},m(e,i){O(n,e,i),$(e,o,i),O(t,e,i),$(e,_,i),O(m,e,i),$(e,s,i),O(u,e,i),$(e,d,i),O(f,e,i),$(e,N,i),O(r,e,i),$(e,A,i),O(a,e,i),S=!0},p:h,i(e){S||(c(n.$$.fragment,e),c(t.$$.fragment,e),c(m.$$.fragment,e),c(u.$$.fragment,e),c(f.$$.fragment,e),c(r.$$.fragment,e),c(a.$$.fragment,e),S=!0)},o(e){p(n.$$.fragment,e),p(t.$$.fragment,e),p(m.$$.fragment,e),p(u.$$.fragment,e),p(f.$$.fragment,e),p(r.$$.fragment,e),p(a.$$.fragment,e),S=!1},d(e){e&&(E(o),E(_),E(s),E(d),E(N),E(A)),C(n,e),C(t,e),C(m,e),C(u,e),C(f,e),C(r,e),C(a,e)}}}function Nt(g){let n,o='<a href="#group-a-standings-1">Group A Standings</a>',t,_,m,s,u='<a href="#group-b-standings-1">Group B Standings</a>',d,f,N,r,A='<a href="#group-c-standings-1">Group C Standings</a>',a,S,e;return _=new ae({props:{data:g[2].filter(qe),link:"team_link",rows:"5",$$slots:{default:[Lt]},$$scope:{ctx:g}}}),f=new ae({props:{data:g[2].filter(Je),link:"team_link",rows:"5",$$slots:{default:[Ot]},$$scope:{ctx:g}}}),S=new ae({props:{data:g[2].filter(je),link:"team_link",rows:"5",$$slots:{default:[Ct]},$$scope:{ctx:g}}}),{c(){n=F("h3"),n.innerHTML=o,t=w(),T(_.$$.fragment),m=w(),s=F("h3"),s.innerHTML=u,d=w(),T(f.$$.fragment),N=w(),r=F("h3"),r.innerHTML=A,a=w(),T(S.$$.fragment),this.h()},l(i){n=y(i,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(n)!=="svelte-1vjypnl"&&(n.innerHTML=o),t=R(i),L(_.$$.fragment,i),m=R(i),s=y(i,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(s)!=="svelte-1n0es8a"&&(s.innerHTML=u),d=R(i),L(f.$$.fragment,i),N=R(i),r=y(i,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(r)!=="svelte-egfzs7"&&(r.innerHTML=A),a=R(i),L(S.$$.fragment,i),this.h()},h(){v(n,"class","markdown"),v(n,"id","group-a-standings-1"),v(s,"class","markdown"),v(s,"id","group-b-standings-1"),v(r,"class","markdown"),v(r,"id","group-c-standings-1")},m(i,H){$(i,n,H),$(i,t,H),O(_,i,H),$(i,m,H),$(i,s,H),$(i,d,H),O(f,i,H),$(i,N,H),$(i,r,H),$(i,a,H),O(S,i,H),e=!0},p(i,H){const q={};H[0]&4&&(q.data=i[2].filter(qe)),H[1]&524288&&(q.$$scope={dirty:H,ctx:i}),_.$set(q);const G={};H[0]&4&&(G.data=i[2].filter(Je)),H[1]&524288&&(G.$$scope={dirty:H,ctx:i}),f.$set(G);const j={};H[0]&4&&(j.data=i[2].filter(je)),H[1]&524288&&(j.$$scope={dirty:H,ctx:i}),S.$set(j)},i(i){e||(c(_.$$.fragment,i),c(f.$$.fragment,i),c(S.$$.fragment,i),e=!0)},o(i){p(_.$$.fragment,i),p(f.$$.fragment,i),p(S.$$.fragment,i),e=!1},d(i){i&&(E(n),E(t),E(m),E(s),E(d),E(N),E(r),E(a)),C(_,i),C(f,i),C(S,i)}}}function Dt(g){let n,o,t,_;return n=new Te({props:{label:"East",$$slots:{default:[Tt]},$$scope:{ctx:g}}}),t=new Te({props:{label:"West",$$slots:{default:[Nt]},$$scope:{ctx:g}}}),{c(){T(n.$$.fragment),o=w(),T(t.$$.fragment)},l(m){L(n.$$.fragment,m),o=R(m),L(t.$$.fragment,m)},m(m,s){O(n,m,s),$(m,o,s),O(t,m,s),_=!0},p(m,s){const u={};s[0]&4|s[1]&524288&&(u.$$scope={dirty:s,ctx:m}),n.$set(u);const d={};s[0]&4|s[1]&524288&&(d.$$scope={dirty:s,ctx:m}),t.$set(d)},i(m){_||(c(n.$$.fragment,m),c(t.$$.fragment,m),_=!0)},o(m){p(n.$$.fragment,m),p(t.$$.fragment,m),_=!1},d(m){m&&E(o),C(n,m),C(t,m)}}}function bt(g){let n,o,t,_,m,s,u,d,f,N,r,A,a,S;return n=new D({props:{id:"team"}}),t=new D({props:{id:"record"}}),m=new D({props:{id:"pt_diff",align:"right"}}),u=new D({props:{id:"proj_record",align:"right"}}),f=new D({props:{id:"won_group_pct1"}}),r=new D({props:{id:"won_wildcard_pct1"}}),a=new D({props:{id:"made_tournament_pct1"}}),{c(){T(n.$$.fragment),o=w(),T(t.$$.fragment),_=w(),T(m.$$.fragment),s=w(),T(u.$$.fragment),d=w(),T(f.$$.fragment),N=w(),T(r.$$.fragment),A=w(),T(a.$$.fragment)},l(e){L(n.$$.fragment,e),o=R(e),L(t.$$.fragment,e),_=R(e),L(m.$$.fragment,e),s=R(e),L(u.$$.fragment,e),d=R(e),L(f.$$.fragment,e),N=R(e),L(r.$$.fragment,e),A=R(e),L(a.$$.fragment,e)},m(e,i){O(n,e,i),$(e,o,i),O(t,e,i),$(e,_,i),O(m,e,i),$(e,s,i),O(u,e,i),$(e,d,i),O(f,e,i),$(e,N,i),O(r,e,i),$(e,A,i),O(a,e,i),S=!0},p:h,i(e){S||(c(n.$$.fragment,e),c(t.$$.fragment,e),c(m.$$.fragment,e),c(u.$$.fragment,e),c(f.$$.fragment,e),c(r.$$.fragment,e),c(a.$$.fragment,e),S=!0)},o(e){p(n.$$.fragment,e),p(t.$$.fragment,e),p(m.$$.fragment,e),p(u.$$.fragment,e),p(f.$$.fragment,e),p(r.$$.fragment,e),p(a.$$.fragment,e),S=!1},d(e){e&&(E(o),E(_),E(s),E(d),E(N),E(A)),C(n,e),C(t,e),C(m,e),C(u,e),C(f,e),C(r,e),C(a,e)}}}function Ht(g){let n,o,t,_,m,s,u,d,f,N,r,A;return n=new D({props:{id:"team"}}),t=new D({props:{id:"1_pct1",contentType:"colorscale",colorMax:"1"}}),m=new D({props:{id:"2_pct1",contentType:"colorscale",colorMax:"1"}}),u=new D({props:{id:"3_pct1",contentType:"colorscale",colorMax:"1"}}),f=new D({props:{id:"4_pct1",contentType:"colorscale",colorMax:"1"}}),r=new D({props:{id:"total_pct1",contentType:"colorscale",colorMax:"1"}}),{c(){T(n.$$.fragment),o=w(),T(t.$$.fragment),_=w(),T(m.$$.fragment),s=w(),T(u.$$.fragment),d=w(),T(f.$$.fragment),N=w(),T(r.$$.fragment)},l(a){L(n.$$.fragment,a),o=R(a),L(t.$$.fragment,a),_=R(a),L(m.$$.fragment,a),s=R(a),L(u.$$.fragment,a),d=R(a),L(f.$$.fragment,a),N=R(a),L(r.$$.fragment,a)},m(a,S){O(n,a,S),$(a,o,S),O(t,a,S),$(a,_,S),O(m,a,S),$(a,s,S),O(u,a,S),$(a,d,S),O(f,a,S),$(a,N,S),O(r,a,S),A=!0},p:h,i(a){A||(c(n.$$.fragment,a),c(t.$$.fragment,a),c(m.$$.fragment,a),c(u.$$.fragment,a),c(f.$$.fragment,a),c(r.$$.fragment,a),A=!0)},o(a){p(n.$$.fragment,a),p(t.$$.fragment,a),p(m.$$.fragment,a),p(u.$$.fragment,a),p(f.$$.fragment,a),p(r.$$.fragment,a),A=!1},d(a){a&&(E(o),E(_),E(s),E(d),E(N)),C(n,a),C(t,a),C(m,a),C(u,a),C(f,a),C(r,a)}}}function vt(g){let n,o='<a href="#wildcard-standings">Wildcard Standings</a>',t,_,m,s,u='<a href="#predicted-seeding---knockout-round">Predicted Seeding - Knockout Round</a>',d,f,N;return _=new ae({props:{data:g[6].filter(Qe),link:"team_link",rows:"15",$$slots:{default:[bt]},$$scope:{ctx:g}}}),f=new ae({props:{data:g[5].filter(Ve),rows:"15",$$slots:{default:[Ht]},$$scope:{ctx:g}}}),{c(){n=F("h3"),n.innerHTML=o,t=w(),T(_.$$.fragment),m=w(),s=F("h3"),s.innerHTML=u,d=w(),T(f.$$.fragment),this.h()},l(r){n=y(r,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(n)!=="svelte-1yfopil"&&(n.innerHTML=o),t=R(r),L(_.$$.fragment,r),m=R(r),s=y(r,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(s)!=="svelte-ja3he8"&&(s.innerHTML=u),d=R(r),L(f.$$.fragment,r),this.h()},h(){v(n,"class","markdown"),v(n,"id","wildcard-standings"),v(s,"class","markdown"),v(s,"id","predicted-seeding---knockout-round")},m(r,A){$(r,n,A),$(r,t,A),O(_,r,A),$(r,m,A),$(r,s,A),$(r,d,A),O(f,r,A),N=!0},p(r,A){const a={};A[0]&64&&(a.data=r[6].filter(Qe)),A[1]&524288&&(a.$$scope={dirty:A,ctx:r}),_.$set(a);const S={};A[0]&32&&(S.data=r[5].filter(Ve)),A[1]&524288&&(S.$$scope={dirty:A,ctx:r}),f.$set(S)},i(r){N||(c(_.$$.fragment,r),c(f.$$.fragment,r),N=!0)},o(r){p(_.$$.fragment,r),p(f.$$.fragment,r),N=!1},d(r){r&&(E(n),E(t),E(m),E(s),E(d)),C(_,r),C(f,r)}}}function Wt(g){let n,o,t,_,m,s,u,d,f,N,r,A,a,S;return n=new D({props:{id:"team"}}),t=new D({props:{id:"record"}}),m=new D({props:{id:"pt_diff",align:"right"}}),u=new D({props:{id:"proj_record",align:"right"}}),f=new D({props:{id:"won_group_pct1"}}),r=new D({props:{id:"won_wildcard_pct1"}}),a=new D({props:{id:"made_tournament_pct1"}}),{c(){T(n.$$.fragment),o=w(),T(t.$$.fragment),_=w(),T(m.$$.fragment),s=w(),T(u.$$.fragment),d=w(),T(f.$$.fragment),N=w(),T(r.$$.fragment),A=w(),T(a.$$.fragment)},l(e){L(n.$$.fragment,e),o=R(e),L(t.$$.fragment,e),_=R(e),L(m.$$.fragment,e),s=R(e),L(u.$$.fragment,e),d=R(e),L(f.$$.fragment,e),N=R(e),L(r.$$.fragment,e),A=R(e),L(a.$$.fragment,e)},m(e,i){O(n,e,i),$(e,o,i),O(t,e,i),$(e,_,i),O(m,e,i),$(e,s,i),O(u,e,i),$(e,d,i),O(f,e,i),$(e,N,i),O(r,e,i),$(e,A,i),O(a,e,i),S=!0},p:h,i(e){S||(c(n.$$.fragment,e),c(t.$$.fragment,e),c(m.$$.fragment,e),c(u.$$.fragment,e),c(f.$$.fragment,e),c(r.$$.fragment,e),c(a.$$.fragment,e),S=!0)},o(e){p(n.$$.fragment,e),p(t.$$.fragment,e),p(m.$$.fragment,e),p(u.$$.fragment,e),p(f.$$.fragment,e),p(r.$$.fragment,e),p(a.$$.fragment,e),S=!1},d(e){e&&(E(o),E(_),E(s),E(d),E(N),E(A)),C(n,e),C(t,e),C(m,e),C(u,e),C(f,e),C(r,e),C(a,e)}}}function Ft(g){let n,o,t,_,m,s,u,d,f,N,r,A;return n=new D({props:{id:"team"}}),t=new D({props:{id:"1_pct1",contentType:"colorscale",colorMax:"1"}}),m=new D({props:{id:"2_pct1",contentType:"colorscale",colorMax:"1"}}),u=new D({props:{id:"3_pct1",contentType:"colorscale",colorMax:"1"}}),f=new D({props:{id:"4_pct1",contentType:"colorscale",colorMax:"1"}}),r=new D({props:{id:"total_pct1",contentType:"colorscale",colorMax:"1"}}),{c(){T(n.$$.fragment),o=w(),T(t.$$.fragment),_=w(),T(m.$$.fragment),s=w(),T(u.$$.fragment),d=w(),T(f.$$.fragment),N=w(),T(r.$$.fragment)},l(a){L(n.$$.fragment,a),o=R(a),L(t.$$.fragment,a),_=R(a),L(m.$$.fragment,a),s=R(a),L(u.$$.fragment,a),d=R(a),L(f.$$.fragment,a),N=R(a),L(r.$$.fragment,a)},m(a,S){O(n,a,S),$(a,o,S),O(t,a,S),$(a,_,S),O(m,a,S),$(a,s,S),O(u,a,S),$(a,d,S),O(f,a,S),$(a,N,S),O(r,a,S),A=!0},p:h,i(a){A||(c(n.$$.fragment,a),c(t.$$.fragment,a),c(m.$$.fragment,a),c(u.$$.fragment,a),c(f.$$.fragment,a),c(r.$$.fragment,a),A=!0)},o(a){p(n.$$.fragment,a),p(t.$$.fragment,a),p(m.$$.fragment,a),p(u.$$.fragment,a),p(f.$$.fragment,a),p(r.$$.fragment,a),A=!1},d(a){a&&(E(o),E(_),E(s),E(d),E(N)),C(n,a),C(t,a),C(m,a),C(u,a),C(f,a),C(r,a)}}}function yt(g){let n,o='<a href="#wildcard-standings-1">Wildcard Standings</a>',t,_,m,s,u='<a href="#predicted-seeding---knockout-round-1">Predicted Seeding - Knockout Round</a>',d,f,N;return _=new ae({props:{data:g[6].filter(Ke),link:"team_link",rows:"15",$$slots:{default:[Wt]},$$scope:{ctx:g}}}),f=new ae({props:{data:g[5].filter(ze),rows:"15",$$slots:{default:[Ft]},$$scope:{ctx:g}}}),{c(){n=F("h3"),n.innerHTML=o,t=w(),T(_.$$.fragment),m=w(),s=F("h3"),s.innerHTML=u,d=w(),T(f.$$.fragment),this.h()},l(r){n=y(r,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(n)!=="svelte-hwio89"&&(n.innerHTML=o),t=R(r),L(_.$$.fragment,r),m=R(r),s=y(r,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(s)!=="svelte-a47xyu"&&(s.innerHTML=u),d=R(r),L(f.$$.fragment,r),this.h()},h(){v(n,"class","markdown"),v(n,"id","wildcard-standings-1"),v(s,"class","markdown"),v(s,"id","predicted-seeding---knockout-round-1")},m(r,A){$(r,n,A),$(r,t,A),O(_,r,A),$(r,m,A),$(r,s,A),$(r,d,A),O(f,r,A),N=!0},p(r,A){const a={};A[0]&64&&(a.data=r[6].filter(Ke)),A[1]&524288&&(a.$$scope={dirty:A,ctx:r}),_.$set(a);const S={};A[0]&32&&(S.data=r[5].filter(ze)),A[1]&524288&&(S.$$scope={dirty:A,ctx:r}),f.$set(S)},i(r){N||(c(_.$$.fragment,r),c(f.$$.fragment,r),N=!0)},o(r){p(_.$$.fragment,r),p(f.$$.fragment,r),N=!1},d(r){r&&(E(n),E(t),E(m),E(s),E(d)),C(_,r),C(f,r)}}}function Mt(g){let n,o,t,_;return n=new Te({props:{label:"East",$$slots:{default:[vt]},$$scope:{ctx:g}}}),t=new Te({props:{label:"West",$$slots:{default:[yt]},$$scope:{ctx:g}}}),{c(){T(n.$$.fragment),o=w(),T(t.$$.fragment)},l(m){L(n.$$.fragment,m),o=R(m),L(t.$$.fragment,m)},m(m,s){O(n,m,s),$(m,o,s),O(t,m,s),_=!0},p(m,s){const u={};s[0]&96|s[1]&524288&&(u.$$scope={dirty:s,ctx:m}),n.$set(u);const d={};s[0]&96|s[1]&524288&&(d.$$scope={dirty:s,ctx:m}),t.$set(d)},i(m){_||(c(n.$$.fragment,m),c(t.$$.fragment,m),_=!0)},o(m){p(n.$$.fragment,m),p(t.$$.fragment,m),_=!1},d(m){m&&E(o),C(n,m),C(t,m)}}}function Bt(g){let n,o,t,_,m,s,u,d,f,N,r,A;return n=new D({props:{id:"date"}}),t=new D({props:{id:"visiting_team"}}),m=new D({props:{id:" "}}),u=new D({props:{id:"home_team"}}),f=new D({props:{id:"winning_team"}}),r=new D({props:{id:"score"}}),{c(){T(n.$$.fragment),o=w(),T(t.$$.fragment),_=w(),T(m.$$.fragment),s=w(),T(u.$$.fragment),d=w(),T(f.$$.fragment),N=w(),T(r.$$.fragment)},l(a){L(n.$$.fragment,a),o=R(a),L(t.$$.fragment,a),_=R(a),L(m.$$.fragment,a),s=R(a),L(u.$$.fragment,a),d=R(a),L(f.$$.fragment,a),N=R(a),L(r.$$.fragment,a)},m(a,S){O(n,a,S),$(a,o,S),O(t,a,S),$(a,_,S),O(m,a,S),$(a,s,S),O(u,a,S),$(a,d,S),O(f,a,S),$(a,N,S),O(r,a,S),A=!0},p:h,i(a){A||(c(n.$$.fragment,a),c(t.$$.fragment,a),c(m.$$.fragment,a),c(u.$$.fragment,a),c(f.$$.fragment,a),c(r.$$.fragment,a),A=!0)},o(a){p(n.$$.fragment,a),p(t.$$.fragment,a),p(m.$$.fragment,a),p(u.$$.fragment,a),p(f.$$.fragment,a),p(r.$$.fragment,a),A=!1},d(a){a&&(E(o),E(_),E(s),E(d),E(N)),C(n,a),C(t,a),C(m,a),C(u,a),C(f,a),C(r,a)}}}function kt(g){var Se;let n,o,t,_,m,s,u,d,f,N,r,A,a,S='<a href="#nba-in-season-tournament">NBA In-season Tournament</a>',e,i,H="Congrats to the Los Angeles Lakers for winning the 2023-24 NBA In-Season Tournament!",q,G,j='<em class="markdown">New for the 2023-2024 season, the NBA has introduced an In-Season Tournament. The tournament consists of Group Play followed by single elimination knock out rounds. You can learn about it <a href="https://www.nba.com/news/in-season-tournament-101" rel="nofollow" class="markdown">here</a>.</em>',me,Q,ge='<a href="#standings">Standings</a>',oe,Z,re,V,ce='<a href="#wildcard">Wildcard</a>',ue,ee,se,K,pe='<a href="#recent-games">Recent Games</a>',le,te,_e,z=typeof W<"u"&&(W.title||((Se=W.og)==null?void 0:Se.title))&&W.hide_title!==!0&&$t();function de(l,b){var we;return typeof W<"u"&&(W.title||(we=W.og)!=null&&we.title)?ct:gt}let ie=de()(g),x=typeof W=="object"&&pt(),M=g[0]&&ye(g),U=g[1]&&Me(g),P=g[2]&&Be(g),B=g[3]&&ke(g),k=g[4]&&Ye(g),Y=g[5]&&Ue(g),I=g[6]&&Ie(g);return Z=new Fe({props:{$$slots:{default:[Dt]},$$scope:{ctx:g}}}),ee=new Fe({props:{$$slots:{default:[Mt]},$$scope:{ctx:g}}}),te=new ae({props:{data:g[4].filter(xe),rows:"5",$$slots:{default:[Bt]},$$scope:{ctx:g}}}),{c(){z&&z.c(),n=w(),ie.c(),o=F("meta"),t=F("meta"),x&&x.c(),_=Ae(),m=w(),M&&M.c(),s=w(),U&&U.c(),u=w(),P&&P.c(),d=w(),B&&B.c(),f=w(),k&&k.c(),N=w(),Y&&Y.c(),r=w(),I&&I.c(),A=w(),a=F("h1"),a.innerHTML=S,e=w(),i=F("p"),i.textContent=H,q=w(),G=F("p"),G.innerHTML=j,me=w(),Q=F("h2"),Q.innerHTML=ge,oe=w(),T(Z.$$.fragment),re=w(),V=F("h2"),V.innerHTML=ce,ue=w(),T(ee.$$.fragment),se=w(),K=F("h2"),K.innerHTML=pe,le=w(),T(te.$$.fragment),this.h()},l(l){z&&z.l(l),n=R(l);const b=Ze("svelte-1j2izld",document.head);ie.l(b),o=y(b,"META",{name:!0,content:!0}),t=y(b,"META",{name:!0,content:!0}),x&&x.l(b),_=Ae(),b.forEach(E),m=R(l),M&&M.l(l),s=R(l),U&&U.l(l),u=R(l),P&&P.l(l),d=R(l),B&&B.l(l),f=R(l),k&&k.l(l),N=R(l),Y&&Y.l(l),r=R(l),I&&I.l(l),A=R(l),a=y(l,"H1",{class:!0,id:!0,"data-svelte-h":!0}),J(a)!=="svelte-eie8wp"&&(a.innerHTML=S),e=R(l),i=y(l,"P",{class:!0,"data-svelte-h":!0}),J(i)!=="svelte-hyczke"&&(i.textContent=H),q=R(l),G=y(l,"P",{class:!0,"data-svelte-h":!0}),J(G)!=="svelte-hd8dsc"&&(G.innerHTML=j),me=R(l),Q=y(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),J(Q)!=="svelte-1gcdvcr"&&(Q.innerHTML=ge),oe=R(l),L(Z.$$.fragment,l),re=R(l),V=y(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),J(V)!=="svelte-10fb0ry"&&(V.innerHTML=ce),ue=R(l),L(ee.$$.fragment,l),se=R(l),K=y(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),J(K)!=="svelte-1u8yw34"&&(K.innerHTML=pe),le=R(l),L(te.$$.fragment,l),this.h()},h(){v(o,"name","twitter:card"),v(o,"content","summary"),v(t,"name","twitter:site"),v(t,"content","@evidence_dev"),v(a,"class","markdown"),v(a,"id","nba-in-season-tournament"),v(i,"class","markdown"),v(G,"class","markdown"),v(Q,"class","markdown"),v(Q,"id","standings"),v(V,"class","markdown"),v(V,"id","wildcard"),v(K,"class","markdown"),v(K,"id","recent-games")},m(l,b){z&&z.m(l,b),$(l,n,b),ie.m(document.head,null),Re(document.head,o),Re(document.head,t),x&&x.m(document.head,null),Re(document.head,_),$(l,m,b),M&&M.m(l,b),$(l,s,b),U&&U.m(l,b),$(l,u,b),P&&P.m(l,b),$(l,d,b),B&&B.m(l,b),$(l,f,b),k&&k.m(l,b),$(l,N,b),Y&&Y.m(l,b),$(l,r,b),I&&I.m(l,b),$(l,A,b),$(l,a,b),$(l,e,b),$(l,i,b),$(l,q,b),$(l,G,b),$(l,me,b),$(l,Q,b),$(l,oe,b),O(Z,l,b),$(l,re,b),$(l,V,b),$(l,ue,b),O(ee,l,b),$(l,se,b),$(l,K,b),$(l,le,b),O(te,l,b),_e=!0},p(l,b){var Ne;typeof W<"u"&&(W.title||(Ne=W.og)!=null&&Ne.title)&&W.hide_title!==!0&&z.p(l,b),ie.p(l,b),typeof W=="object"&&x.p(l,b),l[0]?M?(M.p(l,b),b[0]&1&&c(M,1)):(M=ye(l),M.c(),c(M,1),M.m(s.parentNode,s)):M&&(Ee(),p(M,1,1,()=>{M=null}),fe()),l[1]?U?(U.p(l,b),b[0]&2&&c(U,1)):(U=Me(l),U.c(),c(U,1),U.m(u.parentNode,u)):U&&(Ee(),p(U,1,1,()=>{U=null}),fe()),l[2]?P?(P.p(l,b),b[0]&4&&c(P,1)):(P=Be(l),P.c(),c(P,1),P.m(d.parentNode,d)):P&&(Ee(),p(P,1,1,()=>{P=null}),fe()),l[3]?B?(B.p(l,b),b[0]&8&&c(B,1)):(B=ke(l),B.c(),c(B,1),B.m(f.parentNode,f)):B&&(Ee(),p(B,1,1,()=>{B=null}),fe()),l[4]?k?(k.p(l,b),b[0]&16&&c(k,1)):(k=Ye(l),k.c(),c(k,1),k.m(N.parentNode,N)):k&&(Ee(),p(k,1,1,()=>{k=null}),fe()),l[5]?Y?(Y.p(l,b),b[0]&32&&c(Y,1)):(Y=Ue(l),Y.c(),c(Y,1),Y.m(r.parentNode,r)):Y&&(Ee(),p(Y,1,1,()=>{Y=null}),fe()),l[6]?I?(I.p(l,b),b[0]&64&&c(I,1)):(I=Ie(l),I.c(),c(I,1),I.m(A.parentNode,A)):I&&(Ee(),p(I,1,1,()=>{I=null}),fe());const we={};b[0]&4|b[1]&524288&&(we.$$scope={dirty:b,ctx:l}),Z.$set(we);const Ce={};b[0]&96|b[1]&524288&&(Ce.$$scope={dirty:b,ctx:l}),ee.$set(Ce);const Oe={};b[0]&16&&(Oe.data=l[4].filter(xe)),b[1]&524288&&(Oe.$$scope={dirty:b,ctx:l}),te.$set(Oe)},i(l){_e||(c(M),c(U),c(P),c(B),c(k),c(Y),c(I),c(Z.$$.fragment,l),c(ee.$$.fragment,l),c(te.$$.fragment,l),_e=!0)},o(l){p(M),p(U),p(P),p(B),p(k),p(Y),p(I),p(Z.$$.fragment,l),p(ee.$$.fragment,l),p(te.$$.fragment,l),_e=!1},d(l){l&&(E(n),E(m),E(s),E(u),E(d),E(f),E(N),E(r),E(A),E(a),E(e),E(i),E(q),E(G),E(me),E(Q),E(oe),E(re),E(V),E(ue),E(se),E(K),E(le)),z&&z.d(l),ie.d(l),E(o),E(t),x&&x.d(l),E(_),M&&M.d(l),U&&U.d(l),P&&P.d(l),B&&B.d(l),k&&k.d(l),Y&&Y.d(l),I&&I.d(l),C(Z,l),C(ee,l),C(te,l)}}}const W={queries:[{future_games:"nba/future_games.sql"},{past_games:"nba/past_games.sql"},{tournament_standings:"nba/tournament_standings.sql"},{tournament_results:"nba/tournament_results.sql"},{most_recent_games:"nba/most_recent_games.sql"},{tournament_seeding:"nba/tournament_seeding.sql"}]},Pe=g=>g.group==="east_a",Ge=g=>g.group==="east_b",he=g=>g.group==="east_c",qe=g=>g.group==="west_a",Je=g=>g.group==="west_b",je=g=>g.group==="west_c",Qe=g=>g.conf==="East",Ve=g=>g.conf==="East",Ke=g=>g.conf==="West",ze=g=>g.conf==="West",xe=g=>g.type==="tournament"||g.type==="knockout";function Yt(g,n,o){let t,_;De(g,ft,l=>o(23,t=l)),De(g,ve,l=>o(37,_=l));let{data:m}=n,{data:s={},customFormattingSettings:u,__db:d,inputs:f}=m;et(ve,_="e85f385b2658d1ae7ad8fe2987a1023b",_);let N=lt(f);be(ot,N),tt(N.subscribe(l=>f=l)),be(ut,{getCustomFormats:()=>u.customFormats||[]});const r=(l,b)=>Et(d.query,l,{query_name:b});st(r);let A;const a=()=>{A||(A=setTimeout(()=>{We.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},S=()=>{A?(clearTimeout(A),A=null):We.dismiss("LoadingToast")};He(()=>(ne.addEventListener("inFlightQueryStart",a),ne.addEventListener("inFlightQueryEnd",S),ne.QueriesLoading&&a(),()=>{ne.removeEventListener("inFlightQueryStart",a),ne.removeEventListener("inFlightQueryEnd",S)})),t.params,He(()=>!0);let e={initialData:void 0,initialError:void 0},i=X`SELECT
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
ORDER BY game_id`,H=`SELECT
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
ORDER BY game_id`;s.future_games&&(s.future_games instanceof Error?e.initialError=s.future_games:e.initialData=s.future_games);let q;const G=ne.createReactive({callback:l=>{o(0,q=l)},execFn:r},{id:"future_games",initialData:e.initialData,initialError:e.initialError});G(H,{noResolve:i}),globalThis[Symbol.for("future_games")]={get value(){return q}};let j={initialData:void 0,initialError:void 0},me=X`SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`,Q=`SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`;s.past_games&&(s.past_games instanceof Error?j.initialError=s.past_games:j.initialData=s.past_games);let ge;const oe=ne.createReactive({callback:l=>{o(1,ge=l)},execFn:r},{id:"past_games",initialData:j.initialData,initialError:j.initialError});oe(Q,{noResolve:me}),globalThis[Symbol.for("past_games")]={get value(){return ge}};let Z={initialData:void 0,initialError:void 0},re=X`WITH cte_wins AS (
    SELECT
        S.winning_team,
        COUNT(*) AS wins
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_losses AS (
    SELECT
        CASE WHEN S.home_team = S.winning_team 
            THEN S.visiting_team ELSE S.home_team
        END AS losing_team,
        COUNT(*) AS losses
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_scores AS (
    FROM src_nba_results_by_team
    SELECT
        team,
        avg(score) as pts,
        sum(margin) as margin
    WHERE type = 'tournament'
    group by all
)
SELECT 
    T.team,
    '/nba/teams/' || T.team as team_link,
    T.conf,
    COALESCE(W.wins,0) AS wins,
    COALESCE(L.losses,0) as losses,
    COALESCE(W.wins,0) || '-' || COALESCE(L.losses,0) AS record,
    coalesce(S.margin,0) as margin,
    CASE WHEN S.margin > 0 THEN '+' || margin ELSE margin::varchar END AS pt_diff,   
    T.tournament_group as group,
    R.won_group AS won_group_pct1,
    R.made_wildcard AS won_wildcard_pct1,
    R.made_tournament AS made_tournament_pct1,
    ROUND(R.wins,1) || '-' || ROUND(R.losses,1) AS proj_record 
FROM src_nba_teams T
    LEFT JOIN cte_wins W ON W.winning_team = T.team
    LEFT JOIN cte_losses L ON L .losing_team = T.team
    LEFT JOIN (SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC) R ON R.winning_team = T.team
    LEFT JOIN cte_scores S ON S.team = T.team
GROUP BY ALL
ORDER BY T.tournament_group,  wins DESC, won_group DESC, made_tournament_pct1 DESC, margin DESC`,V=`WITH cte_wins AS (
    SELECT
        S.winning_team,
        COUNT(*) AS wins
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_losses AS (
    SELECT
        CASE WHEN S.home_team = S.winning_team 
            THEN S.visiting_team ELSE S.home_team
        END AS losing_team,
        COUNT(*) AS losses
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_scores AS (
    FROM src_nba_results_by_team
    SELECT
        team,
        avg(score) as pts,
        sum(margin) as margin
    WHERE type = 'tournament'
    group by all
)
SELECT 
    T.team,
    '/nba/teams/' || T.team as team_link,
    T.conf,
    COALESCE(W.wins,0) AS wins,
    COALESCE(L.losses,0) as losses,
    COALESCE(W.wins,0) || '-' || COALESCE(L.losses,0) AS record,
    coalesce(S.margin,0) as margin,
    CASE WHEN S.margin > 0 THEN '+' || margin ELSE margin::varchar END AS pt_diff,   
    T.tournament_group as group,
    R.won_group AS won_group_pct1,
    R.made_wildcard AS won_wildcard_pct1,
    R.made_tournament AS made_tournament_pct1,
    ROUND(R.wins,1) || '-' || ROUND(R.losses,1) AS proj_record 
FROM src_nba_teams T
    LEFT JOIN cte_wins W ON W.winning_team = T.team
    LEFT JOIN cte_losses L ON L .losing_team = T.team
    LEFT JOIN (SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC) R ON R.winning_team = T.team
    LEFT JOIN cte_scores S ON S.team = T.team
GROUP BY ALL
ORDER BY T.tournament_group,  wins DESC, won_group DESC, made_tournament_pct1 DESC, margin DESC`;s.tournament_standings&&(s.tournament_standings instanceof Error?Z.initialError=s.tournament_standings:Z.initialData=s.tournament_standings);let ce;const ue=ne.createReactive({callback:l=>{o(2,ce=l)},execFn:r},{id:"tournament_standings",initialData:Z.initialData,initialError:Z.initialError});ue(V,{noResolve:re}),globalThis[Symbol.for("tournament_standings")]={get value(){return ce}};let ee={initialData:void 0,initialError:void 0},se=X`SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC`,K=`SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC`;s.tournament_results&&(s.tournament_results instanceof Error?ee.initialError=s.tournament_results:ee.initialData=s.tournament_results);let pe;const le=ne.createReactive({callback:l=>{o(3,pe=l)},execFn:r},{id:"tournament_results",initialData:ee.initialData,initialError:ee.initialError});le(K,{noResolve:se}),globalThis[Symbol.for("tournament_results")]={get value(){return pe}};let te={initialData:void 0,initialError:void 0},_e=X`SELECT
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
ORDER BY game_date desc`,z=`SELECT
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
ORDER BY game_date desc`;s.most_recent_games&&(s.most_recent_games instanceof Error?te.initialError=s.most_recent_games:te.initialData=s.most_recent_games);let de;const Le=ne.createReactive({callback:l=>{o(4,de=l)},execFn:r},{id:"most_recent_games",initialData:te.initialData,initialError:te.initialError});Le(z,{noResolve:_e}),globalThis[Symbol.for("most_recent_games")]={get value(){return de}};let ie={initialData:void 0,initialError:void 0},x=X`WITH cte_final_seeds AS (
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
ORDER BY "1_pct1" DESC, ("1_pct1"+"2_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1"+"4_pct1") DESC`,M=`WITH cte_final_seeds AS (
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
ORDER BY "1_pct1" DESC, ("1_pct1"+"2_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1"+"4_pct1") DESC`;s.tournament_seeding&&(s.tournament_seeding instanceof Error?ie.initialError=s.tournament_seeding:ie.initialData=s.tournament_seeding);let U;const P=ne.createReactive({callback:l=>{o(5,U=l)},execFn:r},{id:"tournament_seeding",initialData:ie.initialData,initialError:ie.initialError});P(M,{noResolve:x}),globalThis[Symbol.for("tournament_seeding")]={get value(){return U}};let B={initialData:void 0,initialError:void 0},k=X`SELECT *
FROM (WITH cte_wins AS (
    SELECT
        S.winning_team,
        COUNT(*) AS wins
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_losses AS (
    SELECT
        CASE WHEN S.home_team = S.winning_team 
            THEN S.visiting_team ELSE S.home_team
        END AS losing_team,
        COUNT(*) AS losses
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_scores AS (
    FROM src_nba_results_by_team
    SELECT
        team,
        avg(score) as pts,
        sum(margin) as margin
    WHERE type = 'tournament'
    group by all
)
SELECT 
    T.team,
    '/nba/teams/' || T.team as team_link,
    T.conf,
    COALESCE(W.wins,0) AS wins,
    COALESCE(L.losses,0) as losses,
    COALESCE(W.wins,0) || '-' || COALESCE(L.losses,0) AS record,
    coalesce(S.margin,0) as margin,
    CASE WHEN S.margin > 0 THEN '+' || margin ELSE margin::varchar END AS pt_diff,   
    T.tournament_group as group,
    R.won_group AS won_group_pct1,
    R.made_wildcard AS won_wildcard_pct1,
    R.made_tournament AS made_tournament_pct1,
    ROUND(R.wins,1) || '-' || ROUND(R.losses,1) AS proj_record 
FROM src_nba_teams T
    LEFT JOIN cte_wins W ON W.winning_team = T.team
    LEFT JOIN cte_losses L ON L .losing_team = T.team
    LEFT JOIN (SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC) R ON R.winning_team = T.team
    LEFT JOIN cte_scores S ON S.team = T.team
GROUP BY ALL
ORDER BY T.tournament_group,  wins DESC, won_group DESC, made_tournament_pct1 DESC, margin DESC)
ORDER BY conf, wins DESC, made_tournament_pct1 DESC, margin DESC`,Y=`SELECT *
FROM (WITH cte_wins AS (
    SELECT
        S.winning_team,
        COUNT(*) AS wins
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_losses AS (
    SELECT
        CASE WHEN S.home_team = S.winning_team 
            THEN S.visiting_team ELSE S.home_team
        END AS losing_team,
        COUNT(*) AS losses
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_scores AS (
    FROM src_nba_results_by_team
    SELECT
        team,
        avg(score) as pts,
        sum(margin) as margin
    WHERE type = 'tournament'
    group by all
)
SELECT 
    T.team,
    '/nba/teams/' || T.team as team_link,
    T.conf,
    COALESCE(W.wins,0) AS wins,
    COALESCE(L.losses,0) as losses,
    COALESCE(W.wins,0) || '-' || COALESCE(L.losses,0) AS record,
    coalesce(S.margin,0) as margin,
    CASE WHEN S.margin > 0 THEN '+' || margin ELSE margin::varchar END AS pt_diff,   
    T.tournament_group as group,
    R.won_group AS won_group_pct1,
    R.made_wildcard AS won_wildcard_pct1,
    R.made_tournament AS made_tournament_pct1,
    ROUND(R.wins,1) || '-' || ROUND(R.losses,1) AS proj_record 
FROM src_nba_teams T
    LEFT JOIN cte_wins W ON W.winning_team = T.team
    LEFT JOIN cte_losses L ON L .losing_team = T.team
    LEFT JOIN (SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC) R ON R.winning_team = T.team
    LEFT JOIN cte_scores S ON S.team = T.team
GROUP BY ALL
ORDER BY T.tournament_group,  wins DESC, won_group DESC, made_tournament_pct1 DESC, margin DESC)
ORDER BY conf, wins DESC, made_tournament_pct1 DESC, margin DESC`;s.wildcard_standings&&(s.wildcard_standings instanceof Error?B.initialError=s.wildcard_standings:B.initialData=s.wildcard_standings);let I;const Se=ne.createReactive({callback:l=>{o(6,I=l)},execFn:r},{id:"wildcard_standings",initialData:B.initialData,initialError:B.initialError});return Se(Y,{noResolve:k}),globalThis[Symbol.for("wildcard_standings")]={get value(){return I}},g.$$set=l=>{"data"in l&&o(7,m=l.data)},g.$$.update=()=>{g.$$.dirty[0]&128&&o(8,{data:s={},customFormattingSettings:u,__db:d}=m,s),g.$$.dirty[0]&256&&_t.set(Object.keys(s).length>0),g.$$.dirty[0]&8388608&&t.params,g.$$.dirty[0]&1536&&G(H,{noResolve:i}),g.$$.dirty[0]&6144&&oe(Q,{noResolve:me}),g.$$.dirty[0]&24576&&ue(V,{noResolve:re}),g.$$.dirty[0]&98304&&le(K,{noResolve:se}),g.$$.dirty[0]&393216&&Le(z,{noResolve:_e}),g.$$.dirty[0]&1572864&&P(M,{noResolve:x}),g.$$.dirty[0]&6291456&&Se(Y,{noResolve:k})},o(9,i=X`SELECT
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
ORDER BY game_id`),o(10,H=`SELECT
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
ORDER BY game_id`),o(11,me=X`SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`),o(12,Q=`SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`),o(13,re=X`WITH cte_wins AS (
    SELECT
        S.winning_team,
        COUNT(*) AS wins
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_losses AS (
    SELECT
        CASE WHEN S.home_team = S.winning_team 
            THEN S.visiting_team ELSE S.home_team
        END AS losing_team,
        COUNT(*) AS losses
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_scores AS (
    FROM src_nba_results_by_team
    SELECT
        team,
        avg(score) as pts,
        sum(margin) as margin
    WHERE type = 'tournament'
    group by all
)
SELECT 
    T.team,
    '/nba/teams/' || T.team as team_link,
    T.conf,
    COALESCE(W.wins,0) AS wins,
    COALESCE(L.losses,0) as losses,
    COALESCE(W.wins,0) || '-' || COALESCE(L.losses,0) AS record,
    coalesce(S.margin,0) as margin,
    CASE WHEN S.margin > 0 THEN '+' || margin ELSE margin::varchar END AS pt_diff,   
    T.tournament_group as group,
    R.won_group AS won_group_pct1,
    R.made_wildcard AS won_wildcard_pct1,
    R.made_tournament AS made_tournament_pct1,
    ROUND(R.wins,1) || '-' || ROUND(R.losses,1) AS proj_record 
FROM src_nba_teams T
    LEFT JOIN cte_wins W ON W.winning_team = T.team
    LEFT JOIN cte_losses L ON L .losing_team = T.team
    LEFT JOIN (SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC) R ON R.winning_team = T.team
    LEFT JOIN cte_scores S ON S.team = T.team
GROUP BY ALL
ORDER BY T.tournament_group,  wins DESC, won_group DESC, made_tournament_pct1 DESC, margin DESC`),o(14,V=`WITH cte_wins AS (
    SELECT
        S.winning_team,
        COUNT(*) AS wins
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_losses AS (
    SELECT
        CASE WHEN S.home_team = S.winning_team 
            THEN S.visiting_team ELSE S.home_team
        END AS losing_team,
        COUNT(*) AS losses
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_scores AS (
    FROM src_nba_results_by_team
    SELECT
        team,
        avg(score) as pts,
        sum(margin) as margin
    WHERE type = 'tournament'
    group by all
)
SELECT 
    T.team,
    '/nba/teams/' || T.team as team_link,
    T.conf,
    COALESCE(W.wins,0) AS wins,
    COALESCE(L.losses,0) as losses,
    COALESCE(W.wins,0) || '-' || COALESCE(L.losses,0) AS record,
    coalesce(S.margin,0) as margin,
    CASE WHEN S.margin > 0 THEN '+' || margin ELSE margin::varchar END AS pt_diff,   
    T.tournament_group as group,
    R.won_group AS won_group_pct1,
    R.made_wildcard AS won_wildcard_pct1,
    R.made_tournament AS made_tournament_pct1,
    ROUND(R.wins,1) || '-' || ROUND(R.losses,1) AS proj_record 
FROM src_nba_teams T
    LEFT JOIN cte_wins W ON W.winning_team = T.team
    LEFT JOIN cte_losses L ON L .losing_team = T.team
    LEFT JOIN (SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC) R ON R.winning_team = T.team
    LEFT JOIN cte_scores S ON S.team = T.team
GROUP BY ALL
ORDER BY T.tournament_group,  wins DESC, won_group DESC, made_tournament_pct1 DESC, margin DESC`),o(15,se=X`SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC`),o(16,K=`SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC`),o(17,_e=X`SELECT
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
ORDER BY game_date desc`),o(18,z=`SELECT
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
ORDER BY game_date desc`),o(19,x=X`WITH cte_final_seeds AS (
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
ORDER BY "1_pct1" DESC, ("1_pct1"+"2_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1"+"4_pct1") DESC`),o(20,M=`WITH cte_final_seeds AS (
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
ORDER BY "1_pct1" DESC, ("1_pct1"+"2_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1") DESC, ("1_pct1"+"2_pct1"+"3_pct1"+"4_pct1") DESC`),o(21,k=X`SELECT *
FROM (WITH cte_wins AS (
    SELECT
        S.winning_team,
        COUNT(*) AS wins
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_losses AS (
    SELECT
        CASE WHEN S.home_team = S.winning_team 
            THEN S.visiting_team ELSE S.home_team
        END AS losing_team,
        COUNT(*) AS losses
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_scores AS (
    FROM src_nba_results_by_team
    SELECT
        team,
        avg(score) as pts,
        sum(margin) as margin
    WHERE type = 'tournament'
    group by all
)
SELECT 
    T.team,
    '/nba/teams/' || T.team as team_link,
    T.conf,
    COALESCE(W.wins,0) AS wins,
    COALESCE(L.losses,0) as losses,
    COALESCE(W.wins,0) || '-' || COALESCE(L.losses,0) AS record,
    coalesce(S.margin,0) as margin,
    CASE WHEN S.margin > 0 THEN '+' || margin ELSE margin::varchar END AS pt_diff,   
    T.tournament_group as group,
    R.won_group AS won_group_pct1,
    R.made_wildcard AS won_wildcard_pct1,
    R.made_tournament AS made_tournament_pct1,
    ROUND(R.wins,1) || '-' || ROUND(R.losses,1) AS proj_record 
FROM src_nba_teams T
    LEFT JOIN cte_wins W ON W.winning_team = T.team
    LEFT JOIN cte_losses L ON L .losing_team = T.team
    LEFT JOIN (SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC) R ON R.winning_team = T.team
    LEFT JOIN cte_scores S ON S.team = T.team
GROUP BY ALL
ORDER BY T.tournament_group,  wins DESC, won_group DESC, made_tournament_pct1 DESC, margin DESC)
ORDER BY conf, wins DESC, made_tournament_pct1 DESC, margin DESC`),o(22,Y=`SELECT *
FROM (WITH cte_wins AS (
    SELECT
        S.winning_team,
        COUNT(*) AS wins
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_losses AS (
    SELECT
        CASE WHEN S.home_team = S.winning_team 
            THEN S.visiting_team ELSE S.home_team
        END AS losing_team,
        COUNT(*) AS losses
    FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) S
    WHERE s.type = 'tournament'
    GROUP BY ALL
),
cte_scores AS (
    FROM src_nba_results_by_team
    SELECT
        team,
        avg(score) as pts,
        sum(margin) as margin
    WHERE type = 'tournament'
    group by all
)
SELECT 
    T.team,
    '/nba/teams/' || T.team as team_link,
    T.conf,
    COALESCE(W.wins,0) AS wins,
    COALESCE(L.losses,0) as losses,
    COALESCE(W.wins,0) || '-' || COALESCE(L.losses,0) AS record,
    coalesce(S.margin,0) as margin,
    CASE WHEN S.margin > 0 THEN '+' || margin ELSE margin::varchar END AS pt_diff,   
    T.tournament_group as group,
    R.won_group AS won_group_pct1,
    R.made_wildcard AS won_wildcard_pct1,
    R.made_tournament AS made_tournament_pct1,
    ROUND(R.wins,1) || '-' || ROUND(R.losses,1) AS proj_record 
FROM src_nba_teams T
    LEFT JOIN cte_wins W ON W.winning_team = T.team
    LEFT JOIN cte_losses L ON L .losing_team = T.team
    LEFT JOIN (SELECT
    winning_team,
    tournament_group,
    sum(made_tournament) / 10000.0 as won_group,
    sum(made_wildcard) / 10000.0 as made_wildcard,
    sum(made_tournament) / 10000.0 + sum(made_wildcard) / 10000.0 as made_tournament,
    avg(wins) as wins,
    avg(losses) as losses
FROM src_tournament_end
GROUP BY ALL
ORDER BY tournament_group, made_tournament DESC) R ON R.winning_team = T.team
    LEFT JOIN cte_scores S ON S.team = T.team
GROUP BY ALL
ORDER BY T.tournament_group,  wins DESC, won_group DESC, made_tournament_pct1 DESC, margin DESC)
ORDER BY conf, wins DESC, made_tournament_pct1 DESC, margin DESC`),[q,ge,ce,pe,de,U,I,m,s,i,H,me,Q,re,V,se,K,_e,z,x,M,k,Y,t]}class xt extends mt{constructor(n){super(),rt(this,n,Yt,kt,Xe,{data:7},null,[-1,-1])}}export{xt as component};
