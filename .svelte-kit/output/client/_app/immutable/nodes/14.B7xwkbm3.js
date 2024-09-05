import{s as He,a as b,e as U,b as oe,c as A,h as Ce,d as P,f as c,g as Ee,i as R,j as p,k as ge,l as ye,m as ke,o as be,p as Me,q as Ae,t as Fe,r as We,u as qe,n as _e}from"../chunks/scheduler.BVCo5HCX.js";import{S as Be,i as Ye,c as H,a as C,m as k,t as f,b as d,d as ne,e as M,g as se}from"../chunks/index.C9mGAhn_.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.COvZ985M.js";import{s as Ue,Q as K,p as Pe,r as $e,t as Re}from"../chunks/index.DAWWTyat.js";import{h as X}from"../chunks/setTrackProxy.Cl20Y9Hv.js";import{I as Ie,C as Ge}from"../chunks/globalContexts.1hDlTDmj.js";import{w as Qe}from"../chunks/entry.ZsnkuR_y.js";import{D as Le,C as ae}from"../chunks/DataTable.C27QukxD.js";import{p as je}from"../chunks/stores.C49gDDi_.js";import{B as de}from"../chunks/BigValue.fsHmo18v.js";import{p as Xe}from"../chunks/profile.BW8tN6E9.js";import{A as Je,a as Ve}from"../chunks/AccordionItem.DAYPUhQ2.js";import{Q as le}from"../chunks/QueryViewer.CXzVRZ_y.js";import{D as Ke,a as ze}from"../chunks/Dropdown._FKcvDnm.js";function Ze(o){var _;let t,a=(S.title??((_=S.og)==null?void 0:_.title))+"",e;return{c(){t=U("h1"),e=Fe(a),this.h()},l(r){t=P(r,"H1",{class:!0});var m=We(t);e=qe(m,a),m.forEach(c),this.h()},h(){R(t,"class","title")},m(r,m){p(r,t,m),ge(t,e)},p:_e,d(r){r&&c(t)}}}function xe(o){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:_e,p:_e,d:_e}}function et(o){var m;let t,a,e,_,r;return document.title=t=S.title??((m=S.og)==null?void 0:m.title),{c(){a=b(),e=U("meta"),_=b(),r=U("meta"),this.h()},l(s){a=A(s),e=P(s,"META",{property:!0,content:!0}),_=A(s),r=P(s,"META",{name:!0,content:!0}),this.h()},h(){var s,E;R(e,"property","og:title"),R(e,"content",((s=S.og)==null?void 0:s.title)??S.title),R(r,"name","twitter:title"),R(r,"content",((E=S.og)==null?void 0:E.title)??S.title)},m(s,E){p(s,a,E),p(s,e,E),p(s,_,E),p(s,r,E)},p(s,E){var g;E&0&&t!==(t=S.title??((g=S.og)==null?void 0:g.title))&&(document.title=t)},d(s){s&&(c(a),c(e),c(_),c(r))}}}function tt(o){var r,m;let t,a,e=(S.description||((r=S.og)==null?void 0:r.description))&&it(),_=((m=S.og)==null?void 0:m.image)&&at();return{c(){e&&e.c(),t=b(),_&&_.c(),a=oe()},l(s){e&&e.l(s),t=A(s),_&&_.l(s),a=oe()},m(s,E){e&&e.m(s,E),p(s,t,E),_&&_.m(s,E),p(s,a,E)},p(s,E){var g,F;(S.description||(g=S.og)!=null&&g.description)&&e.p(s,E),(F=S.og)!=null&&F.image&&_.p(s,E)},d(s){s&&(c(t),c(a)),e&&e.d(s),_&&_.d(s)}}}function it(o){let t,a,e,_,r;return{c(){t=U("meta"),a=b(),e=U("meta"),_=b(),r=U("meta"),this.h()},l(m){t=P(m,"META",{name:!0,content:!0}),a=A(m),e=P(m,"META",{property:!0,content:!0}),_=A(m),r=P(m,"META",{name:!0,content:!0}),this.h()},h(){var m,s,E;R(t,"name","description"),R(t,"content",S.description??((m=S.og)==null?void 0:m.description)),R(e,"property","og:description"),R(e,"content",((s=S.og)==null?void 0:s.description)??S.description),R(r,"name","twitter:description"),R(r,"content",((E=S.og)==null?void 0:E.description)??S.description)},m(m,s){p(m,t,s),p(m,a,s),p(m,e,s),p(m,_,s),p(m,r,s)},p:_e,d(m){m&&(c(t),c(a),c(e),c(_),c(r))}}}function at(o){let t,a,e;return{c(){t=U("meta"),a=b(),e=U("meta"),this.h()},l(_){t=P(_,"META",{property:!0,content:!0}),a=A(_),e=P(_,"META",{name:!0,content:!0}),this.h()},h(){var _,r;R(t,"property","og:image"),R(t,"content",(_=S.og)==null?void 0:_.image),R(e,"name","twitter:image"),R(e,"content",(r=S.og)==null?void 0:r.image)},m(_,r){p(_,t,r),p(_,a,r),p(_,e,r)},p:_e,d(_){_&&(c(t),c(a),c(e))}}}function we(o){let t,a;return t=new le({props:{queryID:"future_games",queryResult:o[0]}}),{c(){H(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,_){k(t,e,_),a=!0},p(e,_){const r={};_[0]&1&&(r.queryResult=e[0]),t.$set(r)},i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){d(t.$$.fragment,e),a=!1},d(e){M(t,e)}}}function Te(o){let t,a;return t=new le({props:{queryID:"past_games",queryResult:o[1]}}),{c(){H(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,_){k(t,e,_),a=!0},p(e,_){const r={};_[0]&2&&(r.queryResult=e[1]),t.$set(r)},i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){d(t.$$.fragment,e),a=!1},d(e){M(t,e)}}}function he(o){let t,a;return t=new le({props:{queryID:"past_games_summary",queryResult:o[2]}}),{c(){H(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,_){k(t,e,_),a=!0},p(e,_){const r={};_[0]&4&&(r.queryResult=e[2]),t.$set(r)},i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){d(t.$$.fragment,e),a=!1},d(e){M(t,e)}}}function Ne(o){let t,a;return t=new le({props:{queryID:"past_games_summary_by_team",queryResult:o[3]}}),{c(){H(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,_){k(t,e,_),a=!0},p(e,_){const r={};_[0]&8&&(r.queryResult=e[3]),t.$set(r)},i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){d(t.$$.fragment,e),a=!1},d(e){M(t,e)}}}function ve(o){let t,a;return t=new le({props:{queryID:"teams",queryResult:o[4]}}),{c(){H(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,_){k(t,e,_),a=!0},p(e,_){const r={};_[0]&16&&(r.queryResult=e[4]),t.$set(r)},i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){d(t.$$.fragment,e),a=!1},d(e){M(t,e)}}}function De(o){let t,a;return t=new le({props:{queryID:"filtered_future_games",queryResult:o[5]}}),{c(){H(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,_){k(t,e,_),a=!0},p(e,_){const r={};_[0]&32&&(r.queryResult=e[5]),t.$set(r)},i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){d(t.$$.fragment,e),a=!1},d(e){M(t,e)}}}function _t(o){let t,a;return t=new Le({props:{data:o[3],title:"Prediction Accuracy by Team",rows:"30"}}),{c(){H(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,_){k(t,e,_),a=!0},p(e,_){const r={};_[0]&8&&(r.data=e[3]),t.$set(r)},i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){d(t.$$.fragment,e),a=!1},d(e){M(t,e)}}}function rt(o){let t,a;return t=new Ve({props:{title:"Detailed Results by Team",$$slots:{default:[_t]},$$scope:{ctx:o}}}),{c(){H(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,_){k(t,e,_),a=!0},p(e,_){const r={};_[0]&8|_[1]&16384&&(r.$$scope={dirty:_,ctx:e}),t.$set(r)},i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){d(t.$$.fragment,e),a=!1},d(e){M(t,e)}}}function Oe(o){let t,a='<a href="#future-predictions">Future Predictions</a>',e,_,r='<em class="markdown">Historically, NBA teams win 62% of their games at home, which explains why teams with lower elo ratings can be predicted to win.</em>',m,s,E,g,F;return s=new Ke({props:{data:o[4],name:"team_dropdown",value:"team",title:"Select a Team",$$slots:{default:[mt]},$$scope:{ctx:o}}}),g=new Le({props:{data:o[5],rows:"15",link:"game_link",$$slots:{default:[nt]},$$scope:{ctx:o}}}),{c(){t=U("h2"),t.innerHTML=a,e=b(),_=U("p"),_.innerHTML=r,m=b(),H(s.$$.fragment),E=b(),H(g.$$.fragment),this.h()},l(u){t=P(u,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ee(t)!=="svelte-8rxrbb"&&(t.innerHTML=a),e=A(u),_=P(u,"P",{class:!0,"data-svelte-h":!0}),Ee(_)!=="svelte-1mjds8c"&&(_.innerHTML=r),m=A(u),C(s.$$.fragment,u),E=A(u),C(g.$$.fragment,u),this.h()},h(){R(t,"class","markdown"),R(t,"id","future-predictions"),R(_,"class","markdown")},m(u,y){p(u,t,y),p(u,e,y),p(u,_,y),p(u,m,y),k(s,u,y),p(u,E,y),k(g,u,y),F=!0},p(u,y){const q={};y[0]&16&&(q.data=u[4]),y[1]&16384&&(q.$$scope={dirty:y,ctx:u}),s.$set(q);const B={};y[0]&32&&(B.data=u[5]),y[1]&16384&&(B.$$scope={dirty:y,ctx:u}),g.$set(B)},i(u){F||(f(s.$$.fragment,u),f(g.$$.fragment,u),F=!0)},o(u){d(s.$$.fragment,u),d(g.$$.fragment,u),F=!1},d(u){u&&(c(t),c(e),c(_),c(m),c(E)),M(s,u),M(g,u)}}}function mt(o){let t,a;return t=new ze({props:{valueLabel:"All Teams",value:"%"}}),{c(){H(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,_){k(t,e,_),a=!0},p:_e,i(e){a||(f(t.$$.fragment,e),a=!0)},o(e){d(t.$$.fragment,e),a=!1},d(e){M(t,e)}}}function nt(o){let t,a,e,_,r,m,s,E,g,F,u,y,q,B,W,j;return t=new ae({props:{id:"date"}}),e=new ae({props:{id:"T",title:" "}}),r=new ae({props:{id:"visitor"}}),s=new ae({props:{id:"home"}}),g=new ae({props:{id:"home_win_pct1",title:"Win % (Home)"}}),u=new ae({props:{id:"american_odds",align:"right",title:"Odds (Home)"}}),q=new ae({props:{id:"implied_line_num1",title:"Line (Home)"}}),W=new ae({props:{id:"predicted_score",title:"Score"}}),{c(){H(t.$$.fragment),a=b(),H(e.$$.fragment),_=b(),H(r.$$.fragment),m=b(),H(s.$$.fragment),E=b(),H(g.$$.fragment),F=b(),H(u.$$.fragment),y=b(),H(q.$$.fragment),B=b(),H(W.$$.fragment)},l(n){C(t.$$.fragment,n),a=A(n),C(e.$$.fragment,n),_=A(n),C(r.$$.fragment,n),m=A(n),C(s.$$.fragment,n),E=A(n),C(g.$$.fragment,n),F=A(n),C(u.$$.fragment,n),y=A(n),C(q.$$.fragment,n),B=A(n),C(W.$$.fragment,n)},m(n,$){k(t,n,$),p(n,a,$),k(e,n,$),p(n,_,$),k(r,n,$),p(n,m,$),k(s,n,$),p(n,E,$),k(g,n,$),p(n,F,$),k(u,n,$),p(n,y,$),k(q,n,$),p(n,B,$),k(W,n,$),j=!0},p:_e,i(n){j||(f(t.$$.fragment,n),f(e.$$.fragment,n),f(r.$$.fragment,n),f(s.$$.fragment,n),f(g.$$.fragment,n),f(u.$$.fragment,n),f(q.$$.fragment,n),f(W.$$.fragment,n),j=!0)},o(n){d(t.$$.fragment,n),d(e.$$.fragment,n),d(r.$$.fragment,n),d(s.$$.fragment,n),d(g.$$.fragment,n),d(u.$$.fragment,n),d(q.$$.fragment,n),d(W.$$.fragment,n),j=!1},d(n){n&&(c(a),c(_),c(m),c(E),c(F),c(y),c(B)),M(t,n),M(e,n),M(r,n),M(s,n),M(g,n),M(u,n),M(q,n),M(W,n)}}}function st(o){var me;let t,a,e,_,r,m,s,E,g,F,u,y,q='<a href="#predictions">Predictions</a>',B,W,j='<a href="#past-performance">Past Performance</a>',n,$,re,I,Z,G,ie,J,x,V,ee,Q=typeof S<"u"&&(S.title||((me=S.og)==null?void 0:me.title))&&S.hide_title!==!0&&Ze();function fe(i,l){var te;return typeof S<"u"&&(S.title||(te=S.og)!=null&&te.title)?et:xe}let z=fe()(o),Y=typeof S=="object"&&tt(),v=o[0]&&we(o),O=o[1]&&Te(o),w=o[2]&&he(o),T=o[3]&&Ne(o),h=o[4]&&ve(o),D=o[5]&&De(o);$=new de({props:{data:o[2],value:"total_games_played"}}),I=new de({props:{data:o[2],value:"correct_predictions"}}),G=new de({props:{data:o[2],value:"accuracy_pct1"}}),J=new Je({props:{$$slots:{default:[rt]},$$scope:{ctx:o}}});let L=o[5].length>0&&Oe(o);return{c(){Q&&Q.c(),t=b(),z.c(),a=U("meta"),e=U("meta"),Y&&Y.c(),_=oe(),r=b(),v&&v.c(),m=b(),O&&O.c(),s=b(),w&&w.c(),E=b(),T&&T.c(),g=b(),h&&h.c(),F=b(),D&&D.c(),u=b(),y=U("h1"),y.innerHTML=q,B=b(),W=U("h2"),W.innerHTML=j,n=b(),H($.$$.fragment),re=b(),H(I.$$.fragment),Z=b(),H(G.$$.fragment),ie=b(),H(J.$$.fragment),x=b(),L&&L.c(),V=oe(),this.h()},l(i){Q&&Q.l(i),t=A(i);const l=Ce("svelte-1j2izld",document.head);z.l(l),a=P(l,"META",{name:!0,content:!0}),e=P(l,"META",{name:!0,content:!0}),Y&&Y.l(l),_=oe(),l.forEach(c),r=A(i),v&&v.l(i),m=A(i),O&&O.l(i),s=A(i),w&&w.l(i),E=A(i),T&&T.l(i),g=A(i),h&&h.l(i),F=A(i),D&&D.l(i),u=A(i),y=P(i,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Ee(y)!=="svelte-1pi22ig"&&(y.innerHTML=q),B=A(i),W=P(i,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ee(W)!=="svelte-r55kci"&&(W.innerHTML=j),n=A(i),C($.$$.fragment,i),re=A(i),C(I.$$.fragment,i),Z=A(i),C(G.$$.fragment,i),ie=A(i),C(J.$$.fragment,i),x=A(i),L&&L.l(i),V=oe(),this.h()},h(){R(a,"name","twitter:card"),R(a,"content","summary"),R(e,"name","twitter:site"),R(e,"content","@evidence_dev"),R(y,"class","markdown"),R(y,"id","predictions"),R(W,"class","markdown"),R(W,"id","past-performance")},m(i,l){Q&&Q.m(i,l),p(i,t,l),z.m(document.head,null),ge(document.head,a),ge(document.head,e),Y&&Y.m(document.head,null),ge(document.head,_),p(i,r,l),v&&v.m(i,l),p(i,m,l),O&&O.m(i,l),p(i,s,l),w&&w.m(i,l),p(i,E,l),T&&T.m(i,l),p(i,g,l),h&&h.m(i,l),p(i,F,l),D&&D.m(i,l),p(i,u,l),p(i,y,l),p(i,B,l),p(i,W,l),p(i,n,l),k($,i,l),p(i,re,l),k(I,i,l),p(i,Z,l),k(G,i,l),p(i,ie,l),k(J,i,l),p(i,x,l),L&&L.m(i,l),p(i,V,l),ee=!0},p(i,l){var Se;typeof S<"u"&&(S.title||(Se=S.og)!=null&&Se.title)&&S.hide_title!==!0&&Q.p(i,l),z.p(i,l),typeof S=="object"&&Y.p(i,l),i[0]?v?(v.p(i,l),l[0]&1&&f(v,1)):(v=we(i),v.c(),f(v,1),v.m(m.parentNode,m)):v&&(se(),d(v,1,1,()=>{v=null}),ne()),i[1]?O?(O.p(i,l),l[0]&2&&f(O,1)):(O=Te(i),O.c(),f(O,1),O.m(s.parentNode,s)):O&&(se(),d(O,1,1,()=>{O=null}),ne()),i[2]?w?(w.p(i,l),l[0]&4&&f(w,1)):(w=he(i),w.c(),f(w,1),w.m(E.parentNode,E)):w&&(se(),d(w,1,1,()=>{w=null}),ne()),i[3]?T?(T.p(i,l),l[0]&8&&f(T,1)):(T=Ne(i),T.c(),f(T,1),T.m(g.parentNode,g)):T&&(se(),d(T,1,1,()=>{T=null}),ne()),i[4]?h?(h.p(i,l),l[0]&16&&f(h,1)):(h=ve(i),h.c(),f(h,1),h.m(F.parentNode,F)):h&&(se(),d(h,1,1,()=>{h=null}),ne()),i[5]?D?(D.p(i,l),l[0]&32&&f(D,1)):(D=De(i),D.c(),f(D,1),D.m(u.parentNode,u)):D&&(se(),d(D,1,1,()=>{D=null}),ne());const te={};l[0]&4&&(te.data=i[2]),$.$set(te);const ce={};l[0]&4&&(ce.data=i[2]),I.$set(ce);const N={};l[0]&4&&(N.data=i[2]),G.$set(N);const pe={};l[0]&8|l[1]&16384&&(pe.$$scope={dirty:l,ctx:i}),J.$set(pe),i[5].length>0?L?(L.p(i,l),l[0]&32&&f(L,1)):(L=Oe(i),L.c(),f(L,1),L.m(V.parentNode,V)):L&&(se(),d(L,1,1,()=>{L=null}),ne())},i(i){ee||(f(v),f(O),f(w),f(T),f(h),f(D),f($.$$.fragment,i),f(I.$$.fragment,i),f(G.$$.fragment,i),f(J.$$.fragment,i),f(L),ee=!0)},o(i){d(v),d(O),d(w),d(T),d(h),d(D),d($.$$.fragment,i),d(I.$$.fragment,i),d(G.$$.fragment,i),d(J.$$.fragment,i),d(L),ee=!1},d(i){i&&(c(t),c(r),c(m),c(s),c(E),c(g),c(F),c(u),c(y),c(B),c(W),c(n),c(re),c(Z),c(ie),c(x),c(V)),Q&&Q.d(i),z.d(i),c(a),c(e),Y&&Y.d(i),c(_),v&&v.d(i),O&&O.d(i),w&&w.d(i),T&&T.d(i),h&&h.d(i),D&&D.d(i),M($,i),M(I,i),M(G,i),M(J,i),L&&L.d(i)}}}const S={queries:[{future_games:"nba/future_games.sql"},{past_games:"nba/past_games.sql"},{past_games_summary:"nba/past_games_summary.sql"},{past_games_summary_by_team:"nba/past_games_summary_by_team.sql"}]};function ot(o,t,a){let e,_;ye(o,je,N=>a(21,e=N)),ye(o,$e,N=>a(33,_=N));let{data:r}=t,{data:m={},customFormattingSettings:s,__db:E,inputs:g}=r;ke($e,_="12ad46b1d25fbd902dd1ffc827a8b66e",_);let F=Qe(g);be(Ie,F),Me(F.subscribe(N=>a(8,g=N))),be(Ge,{getCustomFormats:()=>s.customFormats||[]});const u=(N,pe)=>Xe(E.query,N,{query_name:pe});Ue(u);let y;const q=()=>{y||(y=setTimeout(()=>{Re.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},B=()=>{y?(clearTimeout(y),y=null):Re.dismiss("LoadingToast")};Ae(()=>(K.addEventListener("inFlightQueryStart",q),K.addEventListener("inFlightQueryEnd",B),K.QueriesLoading&&q(),()=>{K.removeEventListener("inFlightQueryStart",q),K.removeEventListener("inFlightQueryEnd",B)})),e.params,Ae(()=>!0);let W={initialData:void 0,initialError:void 0},j=X`SELECT
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
ORDER BY game_id`,n=`SELECT
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
ORDER BY game_id`;m.future_games&&(m.future_games instanceof Error?W.initialError=m.future_games:W.initialData=m.future_games);let $;const re=K.createReactive({callback:N=>{a(0,$=N)},execFn:u},{id:"future_games",initialData:W.initialData,initialError:W.initialError});re(n,{noResolve:j}),globalThis[Symbol.for("future_games")]={get value(){return $}};let I={initialData:void 0,initialError:void 0},Z=X`SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`,G=`SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`;m.past_games&&(m.past_games instanceof Error?I.initialError=m.past_games:I.initialData=m.past_games);let ie;const J=K.createReactive({callback:N=>{a(1,ie=N)},execFn:u},{id:"past_games",initialData:I.initialData,initialError:I.initialError});J(G,{noResolve:Z}),globalThis[Symbol.for("past_games")]={get value(){return ie}};let x={initialData:void 0,initialError:void 0},V=X`SELECT
    COUNT(*) as total_games_played, 
    SUM(accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id)`,ee=`SELECT
    COUNT(*) as total_games_played, 
    SUM(accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id)`;m.past_games_summary&&(m.past_games_summary instanceof Error?x.initialError=m.past_games_summary:x.initialData=m.past_games_summary);let Q;const fe=K.createReactive({callback:N=>{a(2,Q=N)},execFn:u},{id:"past_games_summary",initialData:x.initialData,initialError:x.initialError});fe(ee,{noResolve:V}),globalThis[Symbol.for("past_games_summary")]={get value(){return Q}};let ue={initialData:void 0,initialError:void 0},z=X`WITH cte_team AS 
    (SELECT winning_team AS team FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) GROUP BY ALL)
SELECT
    T.Team,
    COUNT(*) as total_games_played, 
    SUM(PG.accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) PG
    LEFT JOIN cte_team T ON T.team = PG.visiting_team OR T.Team = PG.home_team
GROUP BY ALL
ORDER BY accuracy_pct1 DESC`,Y=`WITH cte_team AS 
    (SELECT winning_team AS team FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) GROUP BY ALL)
SELECT
    T.Team,
    COUNT(*) as total_games_played, 
    SUM(PG.accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) PG
    LEFT JOIN cte_team T ON T.team = PG.visiting_team OR T.Team = PG.home_team
GROUP BY ALL
ORDER BY accuracy_pct1 DESC`;m.past_games_summary_by_team&&(m.past_games_summary_by_team instanceof Error?ue.initialError=m.past_games_summary_by_team:ue.initialData=m.past_games_summary_by_team);let v;const O=K.createReactive({callback:N=>{a(3,v=N)},execFn:u},{id:"past_games_summary_by_team",initialData:ue.initialData,initialError:ue.initialError});O(Y,{noResolve:z}),globalThis[Symbol.for("past_games_summary_by_team")]={get value(){return v}};let w={initialData:void 0,initialError:void 0},T=X`select * from src_nba_teams
order by team`,h=`select * from src_nba_teams
order by team`;m.teams&&(m.teams instanceof Error?w.initialError=m.teams:w.initialData=m.teams);let D;const L=K.createReactive({callback:N=>{a(4,D=N)},execFn:u},{id:"teams",initialData:w.initialData,initialError:w.initialError});L(h,{noResolve:T}),globalThis[Symbol.for("teams")]={get value(){return D}};let me={initialData:void 0,initialError:void 0},i=X`select * EXCLUDE (game_id), game_id::int as game_id
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
    where home like '${g.team_dropdown.value}' OR visitor like '${g.team_dropdown.value}'`,l=`select * EXCLUDE (game_id), game_id::int as game_id
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
    where home like '${g.team_dropdown.value}' OR visitor like '${g.team_dropdown.value}'`;m.filtered_future_games&&(m.filtered_future_games instanceof Error?me.initialError=m.filtered_future_games:me.initialData=m.filtered_future_games);let te;const ce=K.createReactive({callback:N=>{a(5,te=N)},execFn:u},{id:"filtered_future_games",initialData:me.initialData,initialError:me.initialError});return ce(l,{noResolve:i}),globalThis[Symbol.for("filtered_future_games")]={get value(){return te}},o.$$set=N=>{"data"in N&&a(6,r=N.data)},o.$$.update=()=>{o.$$.dirty[0]&64&&a(7,{data:m={},customFormattingSettings:s,__db:E}=r,m),o.$$.dirty[0]&128&&Pe.set(Object.keys(m).length>0),o.$$.dirty[0]&2097152&&e.params,o.$$.dirty[0]&1536&&re(n,{noResolve:j}),o.$$.dirty[0]&6144&&J(G,{noResolve:Z}),o.$$.dirty[0]&24576&&fe(ee,{noResolve:V}),o.$$.dirty[0]&98304&&O(Y,{noResolve:z}),o.$$.dirty[0]&393216&&L(h,{noResolve:T}),o.$$.dirty[0]&256&&a(19,i=X`select * EXCLUDE (game_id), game_id::int as game_id
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
    where home like '${g.team_dropdown.value}' OR visitor like '${g.team_dropdown.value}'`),o.$$.dirty[0]&256&&a(20,l=`select * EXCLUDE (game_id), game_id::int as game_id
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
    where home like '${g.team_dropdown.value}' OR visitor like '${g.team_dropdown.value}'`),o.$$.dirty[0]&1572864&&ce(l,{noResolve:i})},a(9,j=X`SELECT
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
ORDER BY game_id`),a(10,n=`SELECT
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
ORDER BY game_id`),a(11,Z=X`SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`),a(12,G=`SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id`),a(13,V=X`SELECT
    COUNT(*) as total_games_played, 
    SUM(accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id)`),a(14,ee=`SELECT
    COUNT(*) as total_games_played, 
    SUM(accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id)`),a(15,z=X`WITH cte_team AS 
    (SELECT winning_team AS team FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) GROUP BY ALL)
SELECT
    T.Team,
    COUNT(*) as total_games_played, 
    SUM(PG.accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) PG
    LEFT JOIN cte_team T ON T.team = PG.visiting_team OR T.Team = PG.home_team
GROUP BY ALL
ORDER BY accuracy_pct1 DESC`),a(16,Y=`WITH cte_team AS 
    (SELECT winning_team AS team FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) GROUP BY ALL)
SELECT
    T.Team,
    COUNT(*) as total_games_played, 
    SUM(PG.accurate_guess) AS correct_predictions,
    correct_predictions/total_games_played::real AS accuracy_pct1
FROM (SELECT *,
    CASE
        WHEN (home_team_win_probability > 5000.0 AND winning_team = home_team)
            OR (home_team_win_probability < 5000.0 AND winning_team = visiting_team)
            THEN 1 ELSE 0 END AS 'accurate_guess'
FROM src_reg_season_predictions
WHERE include_actuals = true
ORDER BY game_id) PG
    LEFT JOIN cte_team T ON T.team = PG.visiting_team OR T.Team = PG.home_team
GROUP BY ALL
ORDER BY accuracy_pct1 DESC`),a(17,T=X`select * from src_nba_teams
order by team`),a(18,h=`select * from src_nba_teams
order by team`),[$,ie,Q,v,D,te,r,m,g,j,n,Z,G,V,ee,z,Y,T,h,i,l,e]}class wt extends Be{constructor(t){super(),Ye(this,t,ot,st,He,{data:6},null,[-1,-1])}}export{wt as component};
