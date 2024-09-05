import{s as ne,b as ee,j as D,f as M,M as fe,l as se,N as Se,P as le,Q as _e,a as W,e as V,c as K,h as Te,d as J,g as re,i as B,k as oe,m as Ee,o as ue,p as ke,q as de,n as $}from"../chunks/scheduler.BVCo5HCX.js";import{S as ie,i as me,t as h,g as Z,b as w,d as v,c as H,a as N,m as P,e as j}from"../chunks/index.C9mGAhn_.js";import{g as Me,d as xe}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.COvZ985M.js";import{Q as F,s as Oe,p as qe,r as he,t as ye}from"../chunks/index.DAWWTyat.js";import{h as Y}from"../chunks/setTrackProxy.Cl20Y9Hv.js";import{I as De,C as Fe}from"../chunks/globalContexts.1hDlTDmj.js";import{w as Ie}from"../chunks/entry.ZsnkuR_y.js";import{p as Qe}from"../chunks/stores.C49gDDi_.js";import{S as He}from"../chunks/ScatterPlot.DquZpF-Y.js";import{p as Ne,c as Pe,a as je,b as Ce,Q as Ue,E as We}from"../chunks/colours.CiCpy17i.js";import{p as Ke}from"../chunks/profile.BW8tN6E9.js";import{Q as te}from"../chunks/QueryViewer.CXzVRZ_y.js";function be(a){let r,e;return r=new Ce({props:{error:a[1],minHeight:"50",chartType:a[0]==="Reference Area"?a[0]:`${a[0]}: Reference Area`}}),{c(){H(r.$$.fragment)},l(t){N(r.$$.fragment,t)},m(t,o){P(r,t,o),e=!0},p(t,o){const n={};o&2&&(n.error=t[1]),o&1&&(n.chartType=t[0]==="Reference Area"?t[0]:`${t[0]}: Reference Area`),r.$set(n)},i(t){e||(h(r.$$.fragment,t),e=!0)},o(t){w(r.$$.fragment,t),e=!1},d(t){j(r,t)}}}function Be(a){let r,e,t=a[1]&&be(a);return{c(){t&&t.c(),r=ee()},l(o){t&&t.l(o),r=ee()},m(o,n){t&&t.m(o,n),D(o,r,n),e=!0},p(o,[n]){o[1]?t?(t.p(o,n),n&2&&h(t,1)):(t=be(o),t.c(),h(t,1),t.m(r.parentNode,r)):t&&(Z(),w(t,1,1,()=>{t=null}),v())},i(o){e||(h(t),e=!0)},o(o){w(t),e=!1},d(o){o&&M(r),t&&t.d(o)}}}let ae="blue";function Xe(a,r,e){let t,o,n=fe(Ne);se(a,n,l=>e(21,o=l));let L=fe(Pe),{xMin:m=void 0}=r,{xMax:R=void 0}=r,{yMin:u=void 0}=r,{yMax:b=void 0}=r,{label:q=void 0}=r,{data:g=void 0}=r,{color:y=void 0}=r,{areaColor:E=void 0}=r,{opacity:I=1}=r,{labelColor:A=void 0}=r,{border:k=!1}=r,{borderColor:p=void 0}=r,{borderType:x=void 0}=r,{borderWidth:Q=void 0}=r,{labelPosition:C=void 0}=r,T={red:{areaColor:"#fceeed",labelColor:"#b04646",borderColor:"#b04646"},green:{areaColor:"#e6f5e6",labelColor:"#65a665",borderColor:"#65a665"},yellow:{areaColor:"#fff9e0",labelColor:"#edb131",borderColor:"#edb131"},grey:{areaColor:"hsl(217, 33%, 97%)",labelColor:"hsl(212, 10%, 53%)",borderColor:"hsl(212, 10%, 53%)"},blue:{areaColor:"#EDF6FD",labelColor:"#51a2e0",borderColor:"#51a2e0"}},O,c,_;const d={topLeft:"insideTopLeft",top:"insideTop",topRight:"insideTopRight",bottomLeft:"insideBottomLeft",bottom:"insideBottom",bottomRight:"insideBottomRight",left:"insideLeft",center:"inside",centre:"inside",right:"insideRight"};let f=[],s=[m,R,u,b,q],i=[];const U=String(Math.random());let X;return Se(()=>{t&&L.update(l=>(_?(l.yAxis={...l.yAxis,...t.xAxis},l.xAxis={...l.xAxis,...t.yAxis}):(l.yAxis[0]={...l.yAxis[0],...t.yAxis},l.xAxis={...l.xAxis,...t.xAxis}),l)),L.update(l=>{const z=l.series.findIndex(G=>G.id===U);return z>-1?l.series[z]=X:l.series.push(X),l})}),a.$$set=l=>{"xMin"in l&&e(3,m=l.xMin),"xMax"in l&&e(4,R=l.xMax),"yMin"in l&&e(5,u=l.yMin),"yMax"in l&&e(6,b=l.yMax),"label"in l&&e(12,q=l.label),"data"in l&&e(13,g=l.data),"color"in l&&e(14,y=l.color),"areaColor"in l&&e(7,E=l.areaColor),"opacity"in l&&e(15,I=l.opacity),"labelColor"in l&&e(8,A=l.labelColor),"border"in l&&e(9,k=l.border),"borderColor"in l&&e(10,p=l.borderColor),"borderType"in l&&e(16,x=l.borderType),"borderWidth"in l&&e(17,Q=l.borderWidth),"labelPosition"in l&&e(11,C=l.labelPosition)},a.$$.update=()=>{if(a.$$.dirty&512&&e(9,k=k==="true"||k===!0),a.$$.dirty&256&&A&&Object.keys(T).includes(A)&&e(8,A=T[A].labelColor),a.$$.dirty&1024&&p&&Object.keys(T).includes(p)&&e(10,p=T[p].borderColor),a.$$.dirty&128&&E&&Object.keys(T).includes(E)&&e(7,E=T[E].areaColor),a.$$.dirty&17792&&(Object.keys(T).includes(y)?(e(7,E=E??T[y].areaColor),e(8,A=A??T[y].labelColor),e(10,p=p??T[y].borderColor)):(e(7,E=E??y??T[ae].areaColor),e(8,A=A??y??T[ae].labelColor),e(10,p=p??y??T[ae].borderColor))),a.$$.dirty&2097152)try{e(0,O=o.chartType)}catch{e(0,O="Reference Area"),e(1,c="Reference Area cannot be used outside of a chart component")}if(a.$$.dirty&2361466&&!c)try{e(18,_=o.swapXY),_?(e(3,[m,R,u,b]=[u,b,m,R],m,(e(4,R),e(1,c),e(21,o),e(18,_),e(5,u),e(6,b),e(3,m),e(11,C),e(13,g),e(20,i),e(19,f),e(12,q),e(27,s)),(e(5,u),e(1,c),e(21,o),e(18,_),e(6,b),e(3,m),e(4,R),e(11,C),e(13,g),e(20,i),e(19,f),e(12,q),e(27,s)),(e(6,b),e(1,c),e(21,o),e(18,_),e(5,u),e(3,m),e(4,R),e(11,C),e(13,g),e(20,i),e(19,f),e(12,q),e(27,s))),e(11,C=C??"topRight")):u&&b&&m&&R?e(11,C=C??"topLeft"):u||b?e(11,C=C??"right"):e(11,C=C??"top")}catch(l){e(1,c=l)}if(a.$$.dirty&2048&&e(11,C=d[C]??"insideEndTop"),a.$$.dirty&1048576)for(let l=0;l<s.length;l++)e(20,i=[]),s[l]!==void 0&&i.push(s[l]);if(a.$$.dirty&1585274)if(g&&!c)try{je(g,i),e(19,f=[]);for(let l=0;l<g.length;l++)f.push([{name:g[l][q],xAxis:g[l][m],yAxis:g[l][u]},{xAxis:g[l][R],yAxis:g[l][b]}])}catch(l){e(1,c=l)}else f.push([{name:q,xAxis:m,yAxis:u},{xAxis:R,yAxis:b}]);a.$$.dirty&757635&&(c||(X={id:U,evidenceSeriesType:"reference_area",type:O==="Bar Chart"?"bar":"line",stack:"stack1",markArea:{data:f,silent:!0,animation:!1,emphasis:{disabled:!0},itemStyle:{color:E,opacity:I,borderWidth:k?Q??1:null,borderColor:p,borderType:x??"dashed"},label:{show:!0,position:C,color:A}},zlevel:0}))},t={xAxis:{axisTick:{alignWithLabel:!1}}},[O,c,n,m,R,u,b,E,A,k,p,C,q,g,y,I,x,Q,_,f,i,o]}class Ye extends ie{constructor(r){super(),me(this,r,Xe,Be,ne,{xMin:3,xMax:4,yMin:5,yMax:6,label:12,data:13,color:14,areaColor:7,opacity:15,labelColor:8,border:9,borderColor:10,borderType:16,borderWidth:17,labelPosition:11})}}function ze(a){let r,e;const t=[a[4],{data:F.isQuery(a[7])?Array.from(a[7]):a[7]}];let o={};for(let n=0;n<t.length;n+=1)o=le(o,t[n]);return r=new Ye({props:o}),{c(){H(r.$$.fragment)},l(n){N(r.$$.fragment,n)},m(n,L){P(r,n,L),e=!0},p(n,L){const m=L&144?Me(t,[L&16&&xe(n[4]),L&128&&{data:F.isQuery(n[7])?Array.from(n[7]):n[7]}]):{};r.$set(m)},i(n){e||(h(r.$$.fragment,n),e=!0)},o(n){w(r.$$.fragment,n),e=!1},d(n){j(r,n)}}}function Ge(a){let r,e;return r=new We({props:{slot:"empty",emptyMessage:a[2],emptySet:a[1],chartType:we,isInitial:a[3]}}),{c(){H(r.$$.fragment)},l(t){N(r.$$.fragment,t)},m(t,o){P(r,t,o),e=!0},p(t,o){const n={};o&4&&(n.emptyMessage=t[2]),o&2&&(n.emptySet=t[1]),o&8&&(n.isInitial=t[3]),r.$set(n)},i(t){e||(h(r.$$.fragment,t),e=!0)},o(t){w(r.$$.fragment,t),e=!1},d(t){j(r,t)}}}function Ve(a){let r,e;return r=new Ce({props:{slot:"error",chartType:we,error:a[7].error.message}}),{c(){H(r.$$.fragment)},l(t){N(r.$$.fragment,t)},m(t,o){P(r,t,o),e=!0},p(t,o){const n={};o&128&&(n.error=t[7].error.message),r.$set(n)},i(t){e||(h(r.$$.fragment,t),e=!0)},o(t){w(r.$$.fragment,t),e=!1},d(t){j(r,t)}}}function Je(a){let r,e;return r=new Ue({props:{data:a[0],$$slots:{error:[Ve,({loaded:t})=>({7:t}),({loaded:t})=>t?128:0],empty:[Ge],default:[ze,({loaded:t})=>({7:t}),({loaded:t})=>t?128:0]},$$scope:{ctx:a}}}),{c(){H(r.$$.fragment)},l(t){N(r.$$.fragment,t)},m(t,o){P(r,t,o),e=!0},p(t,[o]){const n={};o&1&&(n.data=t[0]),o&414&&(n.$$scope={dirty:o,ctx:t}),r.$set(n)},i(t){e||(h(r.$$.fragment,t),e=!0)},o(t){w(r.$$.fragment,t),e=!1},d(t){j(r,t)}}}let we="Reference Area";function Ze(a,r,e){let t,{data:o=void 0}=r;const n=F.isQuery(o)?o.hash:void 0;let L=(o==null?void 0:o.hash)===n,{emptySet:m=void 0}=r,{emptyMessage:R=void 0}=r;return a.$$set=u=>{e(6,r=le(le({},r),_e(u))),"data"in u&&e(0,o=u.data),"emptySet"in u&&e(1,m=u.emptySet),"emptyMessage"in u&&e(2,R=u.emptyMessage)},a.$$.update=()=>{a.$$.dirty&1&&e(3,L=(o==null?void 0:o.hash)===n),e(4,t={...Object.fromEntries(Object.entries(r).filter(([,u])=>u!==void 0))})},r=_e(r),[o,m,R,L,t]}class ve extends ie{constructor(r){super(),me(this,r,Ze,Je,ne,{data:0,emptySet:1,emptyMessage:2})}}function $e(a){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:$,p:$,d:$}}function ge(a){let r,e;return r=new te({props:{queryID:"elo_history",queryResult:a[1]}}),{c(){H(r.$$.fragment)},l(t){N(r.$$.fragment,t)},m(t,o){P(r,t,o),e=!0},p(t,o){const n={};o[0]&2&&(n.queryResult=t[1]),r.$set(n)},i(t){e||(h(r.$$.fragment,t),e=!0)},o(t){w(r.$$.fragment,t),e=!1},d(t){j(r,t)}}}function Le(a){let r,e;return r=new te({props:{queryID:"team1_trend",queryResult:a[2]}}),{c(){H(r.$$.fragment)},l(t){N(r.$$.fragment,t)},m(t,o){P(r,t,o),e=!0},p(t,o){const n={};o[0]&4&&(n.queryResult=t[2]),r.$set(n)},i(t){e||(h(r.$$.fragment,t),e=!0)},o(t){w(r.$$.fragment,t),e=!1},d(t){j(r,t)}}}function Ae(a){let r,e;return r=new te({props:{queryID:"team2_trend",queryResult:a[3]}}),{c(){H(r.$$.fragment)},l(t){N(r.$$.fragment,t)},m(t,o){P(r,t,o),e=!0},p(t,o){const n={};o[0]&8&&(n.queryResult=t[3]),r.$set(n)},i(t){e||(h(r.$$.fragment,t),e=!0)},o(t){w(r.$$.fragment,t),e=!1},d(t){j(r,t)}}}function pe(a){let r,e;return r=new te({props:{queryID:"combined_trend",queryResult:a[0]}}),{c(){H(r.$$.fragment)},l(t){N(r.$$.fragment,t)},m(t,o){P(r,t,o),e=!0},p(t,o){const n={};o[0]&1&&(n.queryResult=t[0]),r.$set(n)},i(t){e||(h(r.$$.fragment,t),e=!0)},o(t){w(r.$$.fragment,t),e=!1},d(t){j(r,t)}}}function et(a){let r,e;return r=new ve({props:{xMin:"1996-11-03",xMax:"2004-06-15",label:"Kobe & Shaq Era",color:"yellow"}}),{c(){H(r.$$.fragment)},l(t){N(r.$$.fragment,t)},m(t,o){P(r,t,o),e=!0},p:$,i(t){e||(h(r.$$.fragment,t),e=!0)},o(t){w(r.$$.fragment,t),e=!1},d(t){j(r,t)}}}function tt(a){let r,e,t,o,n,L,m,R='<a href="#lakers-vs-clippers">Lakers vs Clippers</a>',u,b,q="How are things looking for the Lakers vs Clippers on a historical basis?",g,y,E='<a href="#elo-trends">Elo Trends</a>',I,A,k,p,x,Q;function C(s,i){return $e}let O=C()(a),c=a[1]&&ge(a),_=a[2]&&Le(a),d=a[3]&&Ae(a),f=a[0]&&pe(a);return x=new He({props:{data:a[0],x:"date",y:"elo",title:"ELO value over time",series:"team",xAxisTitle:"date",handleMissing:"connect",yMin:parseFloat(a[4])-25,yMax:"1900",pointSize:"4",$$slots:{default:[et]},$$scope:{ctx:a}}}),{c(){r=W(),O.c(),e=V("meta"),t=V("meta"),o=ee(),n=W(),c&&c.c(),L=W(),m=V("h1"),m.innerHTML=R,u=W(),b=V("p"),b.textContent=q,g=W(),y=V("h2"),y.innerHTML=E,I=W(),_&&_.c(),A=W(),d&&d.c(),k=W(),f&&f.c(),p=W(),H(x.$$.fragment),this.h()},l(s){r=K(s);const i=Te("svelte-1j2izld",document.head);O.l(i),e=J(i,"META",{name:!0,content:!0}),t=J(i,"META",{name:!0,content:!0}),o=ee(),i.forEach(M),n=K(s),c&&c.l(s),L=K(s),m=J(s,"H1",{class:!0,id:!0,"data-svelte-h":!0}),re(m)!=="svelte-m43vcp"&&(m.innerHTML=R),u=K(s),b=J(s,"P",{class:!0,"data-svelte-h":!0}),re(b)!=="svelte-1805p24"&&(b.textContent=q),g=K(s),y=J(s,"H2",{class:!0,id:!0,"data-svelte-h":!0}),re(y)!=="svelte-1b0adum"&&(y.innerHTML=E),I=K(s),_&&_.l(s),A=K(s),d&&d.l(s),k=K(s),f&&f.l(s),p=K(s),N(x.$$.fragment,s),this.h()},h(){B(e,"name","twitter:card"),B(e,"content","summary"),B(t,"name","twitter:site"),B(t,"content","@evidence_dev"),B(m,"class","markdown"),B(m,"id","lakers-vs-clippers"),B(b,"class","markdown"),B(y,"class","markdown"),B(y,"id","elo-trends")},m(s,i){D(s,r,i),O.m(document.head,null),oe(document.head,e),oe(document.head,t),oe(document.head,o),D(s,n,i),c&&c.m(s,i),D(s,L,i),D(s,m,i),D(s,u,i),D(s,b,i),D(s,g,i),D(s,y,i),D(s,I,i),_&&_.m(s,i),D(s,A,i),d&&d.m(s,i),D(s,k,i),f&&f.m(s,i),D(s,p,i),P(x,s,i),Q=!0},p(s,i){O.p(s,i),s[1]?c?(c.p(s,i),i[0]&2&&h(c,1)):(c=ge(s),c.c(),h(c,1),c.m(L.parentNode,L)):c&&(Z(),w(c,1,1,()=>{c=null}),v()),s[2]?_?(_.p(s,i),i[0]&4&&h(_,1)):(_=Le(s),_.c(),h(_,1),_.m(A.parentNode,A)):_&&(Z(),w(_,1,1,()=>{_=null}),v()),s[3]?d?(d.p(s,i),i[0]&8&&h(d,1)):(d=Ae(s),d.c(),h(d,1),d.m(k.parentNode,k)):d&&(Z(),w(d,1,1,()=>{d=null}),v()),s[0]?f?(f.p(s,i),i[0]&1&&h(f,1)):(f=pe(s),f.c(),h(f,1),f.m(p.parentNode,p)):f&&(Z(),w(f,1,1,()=>{f=null}),v());const U={};i[0]&1&&(U.data=s[0]),i[0]&16&&(U.yMin=parseFloat(s[4])-25),i[1]&32&&(U.$$scope={dirty:i,ctx:s}),x.$set(U)},i(s){Q||(h(c),h(_),h(d),h(f),h(x.$$.fragment,s),Q=!0)},o(s){w(c),w(_),w(d),w(f),w(x.$$.fragment,s),Q=!1},d(s){s&&(M(r),M(n),M(L),M(m),M(u),M(b),M(g),M(y),M(I),M(A),M(k),M(p)),O.d(s),M(e),M(t),M(o),c&&c.d(s),_&&_.d(s),d&&d.d(s),f&&f.d(s),j(x,s)}}}function rt(a,r,e){let t,o,n;se(a,Qe,S=>e(15,o=S)),se(a,he,S=>e(26,n=S));let{data:L}=r,{data:m={},customFormattingSettings:R,__db:u,inputs:b}=L;Ee(he,n="42a13a1eda68b70df5aab43c354bd4cd",n);let q=Ie(b);ue(De,q),ke(q.subscribe(S=>b=S)),ue(Fe,{getCustomFormats:()=>R.customFormats||[]});const g=(S,Re)=>Ke(u.query,S,{query_name:Re});Oe(g);let y;const E=()=>{y||(y=setTimeout(()=>{ye.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},I=()=>{y?(clearTimeout(y),y=null):ye.dismiss("LoadingToast")};de(()=>(F.addEventListener("inFlightQueryStart",E),F.addEventListener("inFlightQueryEnd",I),F.QueriesLoading&&E(),()=>{F.removeEventListener("inFlightQueryStart",E),F.removeEventListener("inFlightQueryEnd",I)})),o.params,de(()=>!0);let A={initialData:void 0,initialError:void 0},k=Y`select *
    from src_nba_elo_history`,p=`select *
    from src_nba_elo_history`;m.elo_history&&(m.elo_history instanceof Error?A.initialError=m.elo_history:A.initialData=m.elo_history);let x;const Q=F.createReactive({callback:S=>{e(1,x=S)},execFn:g},{id:"elo_history",initialData:A.initialData,initialError:A.initialError});Q(p,{noResolve:k}),globalThis[Symbol.for("elo_history")]={get value(){return x}};let C={initialData:void 0,initialError:void 0},T=Y`with cte_games AS (
        select 
            date,
            case when team1 = 'LAL' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAL' OR team2 = 'LAL') 
    )
    select 
        date,
        elo,
        'LAL' as team
    from cte_games`,O=`with cte_games AS (
        select 
            date,
            case when team1 = 'LAL' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAL' OR team2 = 'LAL') 
    )
    select 
        date,
        elo,
        'LAL' as team
    from cte_games`;m.team1_trend&&(m.team1_trend instanceof Error?C.initialError=m.team1_trend:C.initialData=m.team1_trend);let c;const _=F.createReactive({callback:S=>{e(2,c=S)},execFn:g},{id:"team1_trend",initialData:C.initialData,initialError:C.initialError});_(O,{noResolve:T}),globalThis[Symbol.for("team1_trend")]={get value(){return c}};let d={initialData:void 0,initialError:void 0},f=Y`with cte_games AS (
        select 
            date,
            case when team1 = 'LAC' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAC' OR team2 = 'LAC') 
    )
    select 
        date,
        elo,
        'LAC' as team
    from cte_games`,s=`with cte_games AS (
        select 
            date,
            case when team1 = 'LAC' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAC' OR team2 = 'LAC') 
    )
    select 
        date,
        elo,
        'LAC' as team
    from cte_games`;m.team2_trend&&(m.team2_trend instanceof Error?d.initialError=m.team2_trend:d.initialData=m.team2_trend);let i;const U=F.createReactive({callback:S=>{e(3,i=S)},execFn:g},{id:"team2_trend",initialData:d.initialData,initialError:d.initialError});U(s,{noResolve:f}),globalThis[Symbol.for("team2_trend")]={get value(){return i}};let X={initialData:void 0,initialError:void 0},l=Y`select * from (with cte_games AS (
        select 
            date,
            case when team1 = 'LAL' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAL' OR team2 = 'LAL') 
    )
    select 
        date,
        elo,
        'LAL' as team
    from cte_games)
    where date > '1994-01-01' and date < '2006-01-01'
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = 'LAC' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAC' OR team2 = 'LAC') 
    )
    select 
        date,
        elo,
        'LAC' as team
    from cte_games)
    where date > '1994-01-01' and date < '2006-01-01'`,z=`select * from (with cte_games AS (
        select 
            date,
            case when team1 = 'LAL' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAL' OR team2 = 'LAL') 
    )
    select 
        date,
        elo,
        'LAL' as team
    from cte_games)
    where date > '1994-01-01' and date < '2006-01-01'
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = 'LAC' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAC' OR team2 = 'LAC') 
    )
    select 
        date,
        elo,
        'LAC' as team
    from cte_games)
    where date > '1994-01-01' and date < '2006-01-01'`;m.combined_trend&&(m.combined_trend instanceof Error?X.initialError=m.combined_trend:X.initialData=m.combined_trend);let G;const ce=F.createReactive({callback:S=>{e(0,G=S)},execFn:g},{id:"combined_trend",initialData:X.initialData,initialError:X.initialError});return ce(z,{noResolve:l}),globalThis[Symbol.for("combined_trend")]={get value(){return G}},a.$$set=S=>{"data"in S&&e(5,L=S.data)},a.$$.update=()=>{a.$$.dirty[0]&32&&e(6,{data:m={},customFormattingSettings:R,__db:u}=L,m),a.$$.dirty[0]&64&&qe.set(Object.keys(m).length>0),a.$$.dirty[0]&32768&&o.params,a.$$.dirty[0]&384&&Q(p,{noResolve:k}),a.$$.dirty[0]&1536&&_(O,{noResolve:T}),a.$$.dirty[0]&6144&&U(s,{noResolve:f}),a.$$.dirty[0]&24576&&ce(z,{noResolve:l}),a.$$.dirty[0]&1&&e(4,t=Math.min(...G.map(S=>S.elo)))},e(7,k=Y`select *
    from src_nba_elo_history`),e(8,p=`select *
    from src_nba_elo_history`),e(9,T=Y`with cte_games AS (
        select 
            date,
            case when team1 = 'LAL' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAL' OR team2 = 'LAL') 
    )
    select 
        date,
        elo,
        'LAL' as team
    from cte_games`),e(10,O=`with cte_games AS (
        select 
            date,
            case when team1 = 'LAL' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAL' OR team2 = 'LAL') 
    )
    select 
        date,
        elo,
        'LAL' as team
    from cte_games`),e(11,f=Y`with cte_games AS (
        select 
            date,
            case when team1 = 'LAC' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAC' OR team2 = 'LAC') 
    )
    select 
        date,
        elo,
        'LAC' as team
    from cte_games`),e(12,s=`with cte_games AS (
        select 
            date,
            case when team1 = 'LAC' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAC' OR team2 = 'LAC') 
    )
    select 
        date,
        elo,
        'LAC' as team
    from cte_games`),e(13,l=Y`select * from (with cte_games AS (
        select 
            date,
            case when team1 = 'LAL' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAL' OR team2 = 'LAL') 
    )
    select 
        date,
        elo,
        'LAL' as team
    from cte_games)
    where date > '1994-01-01' and date < '2006-01-01'
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = 'LAC' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAC' OR team2 = 'LAC') 
    )
    select 
        date,
        elo,
        'LAC' as team
    from cte_games)
    where date > '1994-01-01' and date < '2006-01-01'`),e(14,z=`select * from (with cte_games AS (
        select 
            date,
            case when team1 = 'LAL' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAL' OR team2 = 'LAL') 
    )
    select 
        date,
        elo,
        'LAL' as team
    from cte_games)
    where date > '1994-01-01' and date < '2006-01-01'
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = 'LAC' then elo1_pre else elo2_pre end as elo,
        from (select *
    from src_nba_elo_history) where (team1 = 'LAC' OR team2 = 'LAC') 
    )
    select 
        date,
        elo,
        'LAC' as team
    from cte_games)
    where date > '1994-01-01' and date < '2006-01-01'`),[G,x,c,i,t,L,m,k,p,T,O,f,s,l,z,o]}class ht extends ie{constructor(r){super(),me(this,r,rt,tt,ne,{data:5},null,[-1,-1])}}export{ht as component};
