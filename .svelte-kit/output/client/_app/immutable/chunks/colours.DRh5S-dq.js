const __vite__fileDeps=["./VennDiagram.svelte_svelte_type_style_lang.ZGqga9CZ.js","./index.C9mGAhn_.js","./scheduler.BVCo5HCX.js","./index.C8RIryS8.js","./index.rV6zwFgL.js","./entry.BCF5SsRs.js","./preload-helper.D6kgxu3v.js","../assets/VennDiagram.FMRvmD3Y.css","./prism-svelte.OQ4pVbO7.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as M,e as v,d as k,g as G,i as h,j as T,n as D,F as ke,f as p,b as C,am as De,p as Se,w as L,x as P,y as O,z as R,r as w,t as I,a as Q,u as A,c as x,k as b,A as V,P as re,Q as ne,V as le,E as we,J as Ce,Y as Z,Z as W,q as Ie,a2 as oe}from"./scheduler.BVCo5HCX.js";import{S as B,i as j,h as Ae,g as F,b as y,d as q,t as g,c as U,a as H,m as K,e as J,f as se}from"./index.C9mGAhn_.js";import{f as X}from"./index.DBK5gAtQ.js";import{Q as te,k as Ve,m as Me,E as Le,T as Pe}from"./index.C8RIryS8.js";import{b as Oe,t as Re,l as Be,C as je}from"./CopyIcon.fK-JPSDA.js";import{Q as ze}from"./VennDiagram.svelte_svelte_type_style_lang.ZGqga9CZ.js";import{_ as N}from"./preload-helper.D6kgxu3v.js";function Fe(l){let t,n='<span class="sr-only">Loading...</span> <div class="h-full w-full bg-gray-200 rounded-md dark:bg-gray-400"></div>',e;return{c(){t=v("div"),t.innerHTML=n,this.h()},l(r){t=k(r,"DIV",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-7iquaz"&&(t.innerHTML=n),this.h()},h(){h(t,"class","animate-pulse h-full w-full my-2")},m(r,o){T(r,t,o)},p:D,i(r){r&&(e||ke(()=>{e=Ae(t,X,{}),e.start()}))},o:D,d(r){r&&p(t)}}}class qe extends B{constructor(t){super(),j(this,t,null,Fe,M,{})}}function Ne(l){return!l||!l[0]||!l.length}const Qe=l=>({loaded:l&2}),ie=l=>({loaded:l[1]}),xe=l=>({loaded:l&2}),ae=l=>({loaded:l[1]}),Ue=l=>({loaded:l&2}),ue=l=>({loaded:l[1]}),He=l=>({loaded:l&2}),ce=l=>({loaded:l[1]}),Ke=l=>({loaded:l&1}),fe=l=>({loaded:l[0]}),Je=l=>({loaded:l&1}),de=l=>({loaded:l[0]}),Ye=l=>({loaded:l&1}),_e=l=>({loaded:l[0]});function Ze(l){let t;const n=l[5].default,e=L(n,l,l[4],ie);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,o){e&&e.m(r,o),t=!0},p(r,o){e&&e.p&&(!t||o&18)&&P(e,n,r,r[4],t?R(n,r[4],o,Qe):O(r[4]),ie)},i(r){t||(g(e,r),t=!0)},o(r){y(e,r),t=!1},d(r){e&&e.d(r)}}}function We(l){let t;const n=l[5].empty,e=L(n,l,l[4],ae);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,o){e&&e.m(r,o),t=!0},p(r,o){e&&e.p&&(!t||o&18)&&P(e,n,r,r[4],t?R(n,r[4],o,xe):O(r[4]),ae)},i(r){t||(g(e,r),t=!0)},o(r){y(e,r),t=!1},d(r){e&&e.d(r)}}}function Ge(l){let t;const n=l[5].error,e=L(n,l,l[4],ue);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,o){e&&e.m(r,o),t=!0},p(r,o){e&&e.p&&(!t||o&18)&&P(e,n,r,r[4],t?R(n,r[4],o,Ue):O(r[4]),ue)},i(r){t||(g(e,r),t=!0)},o(r){y(e,r),t=!1},d(r){e&&e.d(r)}}}function Xe(l){let t;const n=l[5].skeleton,e=L(n,l,l[4],ce),r=e||tt();return{c(){r&&r.c()},l(o){r&&r.l(o)},m(o,s){r&&r.m(o,s),t=!0},p(o,s){e&&e.p&&(!t||s&18)&&P(e,n,o,o[4],t?R(n,o[4],s,He):O(o[4]),ce)},i(o){t||(g(r,o),t=!0)},o(o){y(r,o),t=!1},d(o){r&&r.d(o)}}}function $e(l){let t,n,e,r,o;const s=[nt,rt],a=[];function u(i,d){return d&5&&(t=null),t==null&&(t=!!((Array.isArray(i[0])||!i[0])&&Ne(i[0])&&i[2].empty)),t?0:1}return n=u(l,-1),e=a[n]=s[n](l),{c(){e.c(),r=C()},l(i){e.l(i),r=C()},m(i,d){a[n].m(i,d),T(i,r,d),o=!0},p(i,d){let c=n;n=u(i,d),n===c?a[n].p(i,d):(F(),y(a[c],1,1,()=>{a[c]=null}),q(),e=a[n],e?e.p(i,d):(e=a[n]=s[n](i),e.c()),g(e,1),e.m(r.parentNode,r))},i(i){o||(g(e),o=!0)},o(i){y(e),o=!1},d(i){i&&p(r),a[n].d(i)}}}function et(l){let t;const n=l[5].default,e=L(n,l,l[4],_e);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,o){e&&e.m(r,o),t=!0},p(r,o){e&&e.p&&(!t||o&17)&&P(e,n,r,r[4],t?R(n,r[4],o,Ye):O(r[4]),_e)},i(r){t||(g(e,r),t=!0)},o(r){y(e,r),t=!1},d(r){e&&e.d(r)}}}function tt(l){let t,n,e;return n=new qe({}),{c(){t=v("div"),U(n.$$.fragment),this.h()},l(r){t=k(r,"DIV",{class:!0});var o=w(t);H(n.$$.fragment,o),o.forEach(p),this.h()},h(){h(t,"class","w-full h-64")},m(r,o){T(r,t,o),K(n,t,null),e=!0},p:D,i(r){e||(g(n.$$.fragment,r),e=!0)},o(r){y(n.$$.fragment,r),e=!1},d(r){r&&p(t),J(n)}}}function rt(l){let t;const n=l[5].default,e=L(n,l,l[4],fe);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,o){e&&e.m(r,o),t=!0},p(r,o){e&&e.p&&(!t||o&17)&&P(e,n,r,r[4],t?R(n,r[4],o,Ke):O(r[4]),fe)},i(r){t||(g(e,r),t=!0)},o(r){y(e,r),t=!1},d(r){e&&e.d(r)}}}function nt(l){let t;const n=l[5].empty,e=L(n,l,l[4],de);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,o){e&&e.m(r,o),t=!0},p(r,o){e&&e.p&&(!t||o&17)&&P(e,n,r,r[4],t?R(n,r[4],o,Je):O(r[4]),de)},i(r){t||(g(e,r),t=!0)},o(r){y(e,r),t=!1},d(r){e&&e.d(r)}}}function lt(l){let t,n,e,r,o;const s=[et,$e,Xe,Ge,We,Ze],a=[];function u(i,d){return d&1&&(t=null),i[0]?(t==null&&(t=!te.isQuery(i[0])),t?1:!i[1]||!i[1].dataLoaded&&!i[1].error?2:i[1].error&&i[2].error?3:!i[1].length&&!i[1].error&&i[2].empty?4:5):0}return n=u(l,-1),e=a[n]=s[n](l),{c(){e.c(),r=C()},l(i){e.l(i),r=C()},m(i,d){a[n].m(i,d),T(i,r,d),o=!0},p(i,[d]){let c=n;n=u(i,d),n===c?a[n].p(i,d):(F(),y(a[c],1,1,()=>{a[c]=null}),q(),e=a[n],e?e.p(i,d):(e=a[n]=s[n](i),e.c()),g(e,1),e.m(r.parentNode,r))},i(i){o||(g(e),o=!0)},o(i){y(e),o=!1},d(i){i&&p(r),a[n].d(i)}}}function ot(l,t,n){let{$$slots:e={},$$scope:r}=t;const o=De(e);let{data:s}=t,a=()=>{},u;return Se(a),l.$$set=i=>{"data"in i&&n(0,s=i.data),"$$scope"in i&&n(4,r=i.$$scope)},l.$$.update=()=>{l.$$.dirty&9&&te.isQuery(s)&&(console.log("Query data",s),s.fetch(),a(),n(3,a=s.subscribe(i=>{n(1,u=i)})))},[s,u,o,a,r,e]}class ir extends B{constructor(t){super(),j(this,t,ot,lt,M,{data:0})}}function st(l,t){return l<t?-1:l>t?1:l>=t?0:NaN}function*it(l,t){if(t===void 0)for(let n of l)n!=null&&(n=+n)>=n&&(yield n);else{let n=-1;for(let e of l)(e=t(e,++n,l))!=null&&(e=+e)>=e&&(yield e)}}class at{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const n=this._partials;let e=0;for(let r=0;r<this._n&&r<32;r++){const o=n[r],s=t+o,a=Math.abs(t)<Math.abs(o)?t-(s-o):o-(s-t);a&&(n[e++]=a),t=s}return n[e]=t,this._n=e+1,this}valueOf(){const t=this._partials;let n=this._n,e,r,o,s=0;if(n>0){for(s=t[--n];n>0&&(e=s,r=t[--n],s=e+r,o=r-(s-e),!o););n>0&&(o<0&&t[n-1]<0||o>0&&t[n-1]>0)&&(r=o*2,e=s+r,r==e-s&&(s=e))}return s}}function Ee(l,t){const n=new at;if(t===void 0)for(let e of l)(e=+e)&&n.add(e);else{let e=-1;for(let r of l)(r=+t(r,++e,l))&&n.add(r)}return+n}function $(l,t){let n;if(t===void 0)for(const e of l)e!=null&&(n<e||n===void 0&&e>=e)&&(n=e);else{let e=-1;for(let r of l)(r=t(r,++e,l))!=null&&(n<r||n===void 0&&r>=r)&&(n=r)}return n}function ee(l,t){let n;if(t===void 0)for(const e of l)e!=null&&(n>e||n===void 0&&e>=e)&&(n=e);else{let e=-1;for(let r of l)(r=t(r,++e,l))!=null&&(n>r||n===void 0&&r>=r)&&(n=r)}return n}function Te(l,t,n=0,e=l.length-1,r=st){for(;e>n;){if(e-n>600){const u=e-n+1,i=t-n+1,d=Math.log(u),c=.5*Math.exp(2*d/3),f=.5*Math.sqrt(d*c*(u-c)/u)*(i-u/2<0?-1:1),_=Math.max(n,Math.floor(t-i*c/u+f)),m=Math.min(e,Math.floor(t+(u-i)*c/u+f));Te(l,t,_,m,r)}const o=l[t];let s=n,a=e;for(Y(l,n,t),r(l[e],o)>0&&Y(l,n,e);s<a;){for(Y(l,s,a),++s,--a;r(l[s],o)<0;)++s;for(;r(l[a],o)>0;)--a}r(l[n],o)===0?Y(l,n,a):(++a,Y(l,a,e)),a<=t&&(n=a+1),t<=a&&(e=a-1)}return l}function Y(l,t,n){const e=l[t];l[t]=l[n],l[n]=e}function ut(l,t,n){if(l=Float64Array.from(it(l,n)),!!(e=l.length)){if((t=+t)<=0||e<2)return ee(l);if(t>=1)return $(l);var e,r=(e-1)*t,o=Math.floor(r),s=$(Te(l,o).subarray(0,o+1)),a=ee(l.subarray(o+1));return s+(a-s)*(r-o)}}function ct(l,t){return ut(l,.5,t)}function me(l,t){return e=>{t=t??{};const r={},o=Object.keys(l);for(const s of o)r[s]=l[s](e);if(t.rest&&e.length){const s=Object.keys(e[0]);for(const a of s)o.includes(a)||(r[a]=t.rest(a)(e))}return[r]}}function ft(l,t,n,e){if(!l.length)return[];const r={};let o;if(e==null)o=Object.keys(l[0]);else{o=[];for(const s of Ve(e))typeof s=="function"?o.push(...s(l)):o.push(s)}for(const s of o)r[s]=t(s)(l);return[r]}function ar(l,t){return e=>ft(e,t,void 0,l)}function he(l){if(l!=null&&l.predicate){const t=l.predicate;return n=>n.reduce((e,r,o)=>t(r,o,n)?e+1:e,0)}return t=>t.length}function dt(l,t){let n=typeof l=="function"?l:e=>e[l];if(t!=null&&t.predicate){const e=n,r=t.predicate;n=(o,s,a)=>r(o,s,a)?e(o,s,a):0}return e=>Ee(e,n)}function _t(l,t){let n=0;for(let e=0;e<l.length;++e){const r=t(l[e],e,l);+r===r&&(n+=1)}return n?Ee(l,t)/n:void 0}function mt(l){const t=typeof l=="function"?l:n=>n[l];return n=>ee(n,t)}function ht(l){const t=typeof l=="function"?l:n=>n[l];return n=>$(n,t)}function pt(l){const t=typeof l=="function"?l:n=>n[l];return n=>_t(n,t)}function gt(l){const t=typeof l=="function"?l:n=>n[l];return n=>ct(n,t)}function pe(l,t={}){const n=typeof l=="function"?l:e=>e[l];return e=>{const r=new Map;let o=0,s=0;for(const a of e){const u=n(a,s++,e);if(!r.has(u)){if(!t.includeUndefined&&u===void 0||t.includeNull===!1&&u===null)continue;o+=1,r.set(u,!0)}}return o}}function bt(l,t){let n=Oe(l,t),e=["id","gdp"],r=["of","the","and","in","on"];function o(s){return s.replace(/\S*/g,function(a){return!e.includes(a)&&!r.includes(a)?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():e.includes(a)?a.toUpperCase():a.toLowerCase()})}return n=o(n.replace(/_/g," ")),n}function ge(l,t,n=!0){const e=Re(l,me(n?{count:he(t),countDistinct:pe(t),min:mt(t),max:ht(t),median:gt(t),mean:pt(t),sum:dt(t)}:{count:he(t),countDistinct:pe(t)}))[0],{maxDecimals:r,unitType:o}=yt(l.map(s=>s[t]));return{min:e.min,max:e.max,median:e.median,mean:e.mean,count:e.count,countDistinct:e.countDistinct,sum:e.sum,maxDecimals:r,unitType:o}}function yt(l){var t;if(l==null||l.length===0)return{maxDecimals:0,unitType:"unknown"};{let n=0;for(const e of l){const r=(t=e==null?void 0:e.toString().split(".")[1])==null?void 0:t.length;r>n&&(n=r)}return{maxDecimals:n,unitType:"number"}}}function ur(l,t="object"){const n={},e=Me(l);for(const r of Object.keys(l[0])){const o=e.find(i=>{var d;return((d=i.name)==null?void 0:d.toLowerCase())===(r==null?void 0:r.toLowerCase())})??{name:r,evidenceType:Le.NUMBER,typeFidelity:Pe.INFERRED},s=o.evidenceType;let a=o.evidenceType==="number"?ge(l,r,!0):ge(l,r,!1);o.evidenceType!=="number"&&(a.maxDecimals=0,a.unitType=o.evidenceType);const u=Be(r,o,a);n[r]={title:bt(r,u),type:s,evidenceColumnType:o,format:u,columnUnitSummary:a}}return t!=="object"?Object.entries(n).map(([r,o])=>({id:r,...o})):n}var vt={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const cr=Symbol(),fr=Symbol(),kt=vt.VITE_BUILD_STRICT==="true";function wt(l){let t,n,e="View environment variables →";return{c(){t=v("br"),n=v("a"),n.textContent=e,this.h()},l(r){t=k(r,"BR",{}),n=k(r,"A",{class:!0,href:!0,"data-svelte-h":!0}),G(n)!=="svelte-16l7o12"&&(n.textContent=e),this.h()},h(){h(n,"class","credentials-link svelte-1no0yro"),h(n,"href","https://docs.evidence.dev/cli/#environment-variables")},m(r,o){T(r,t,o),T(r,n,o)},d(r){r&&(p(t),p(n))}}}function Et(l){let t,n,e,r,o,s,a,u,i;function d(_,m){if(_[0]===Tt)return wt}let c=d(l),f=c&&c(l);return{c(){t=v("div"),n=v("div"),e=v("div"),r=I(l[1]),o=Q(),s=v("div"),a=I(l[0]),u=Q(),f&&f.c(),this.h()},l(_){t=k(_,"DIV",{width:!0,class:!0});var m=w(t);n=k(m,"DIV",{class:!0});var E=w(n);e=k(E,"DIV",{class:!0});var S=w(e);r=A(S,l[1]),S.forEach(p),o=x(E),s=k(E,"DIV",{class:!0});var z=w(s);a=A(z,l[0]),u=x(z),f&&f.l(z),z.forEach(p),E.forEach(p),m.forEach(p),this.h()},h(){h(e,"class","font-bold text-center text-lg"),h(s,"class","text-center [word-wrap:break-work] text-xs"),h(n,"class","m-auto w-full"),h(t,"width","100%"),h(t,"class",i="grid grid-rows-auto box-content grid-cols-1 justify-center bg-red-50 text-grey-700 font-ui font-normal rounded border border-red-200 min-h-["+l[2]+"px] py-5 px-8 my-5 print:break-inside-avoid svelte-1no0yro")},m(_,m){T(_,t,m),b(t,n),b(n,e),b(e,r),b(n,o),b(n,s),b(s,a),b(s,u),f&&f.m(s,null)},p(_,[m]){m&2&&V(r,_[1]),m&1&&V(a,_[0]),c!==(c=d(_))&&(f&&f.d(1),f=c&&c(_),f&&(f.c(),f.m(s,null))),m&4&&i!==(i="grid grid-rows-auto box-content grid-cols-1 justify-center bg-red-50 text-grey-700 font-ui font-normal rounded border border-red-200 min-h-["+_[2]+"px] py-5 px-8 my-5 print:break-inside-avoid svelte-1no0yro")&&h(t,"class",i)},i:D,o:D,d(_){_&&p(t),f&&f.d()}}}const Tt="SQL Error: Missing database connection; set the EVIDENCE_DATABASE environment variable.";function Dt(l,t,n){let{error:e}=t,{chartType:r}=t,{minHeight:o="150"}=t;return l.$$set=s=>{"error"in s&&n(0,e=s.error),"chartType"in s&&n(1,r=s.chartType),"minHeight"in s&&n(2,o=s.minHeight)},[e,r,o]}class St extends B{constructor(t){super(),j(this,t,Dt,Et,M,{error:0,chartType:1,minHeight:2})}}function dr(l,t,n){var o,s,a,u,i;let e=[];if(l===void 0)throw Error("No data provided");if(typeof l!="object")throw Error("'"+l+"' is not a recognized query result. Data should be provided in the format: data = {"+l.replace("data.","")+"}");if(l[0]===void 0||l.length===0)throw Error("Dataset is empty: query ran successfully, but no data was returned from the database");if(((s=(o=l[0])==null?void 0:o.error_object)==null?void 0:s.error)!=null)throw Error("SQL Error: "+((i=(u=(a=l[0])==null?void 0:a.error_object)==null?void 0:u.error)==null?void 0:i.message));if(t!=null){if(!(t instanceof Array))throw Error("reqCols must be passed in as an array");for(var r=0;r<t.length;r++)if(t[r]==null)throw Error("Missing required columns");if(te.isQuery(l))for(const c of l.columns)e.push(c.column_name);else for(const c of Object.keys(l[0]))e.push(c);let d;for(r=0;r<t.length;r++)if(d=t[r],!e.includes(d))throw Error("'"+d+"' is not a column in the dataset");if(n!=null&&n[0]!=null){for(r=0;r<n.length;r++)if(d=n[r],!e.includes(d))throw Error("'"+d+"' is not a column in the dataset")}}}function be(l){let t,n,e,r,o,s,a,u,i,d;const c=l[7].default,f=L(c,l,l[6],null),_=f||Ct();return{c(){t=v("div"),n=v("button"),e=v("span"),r=I(l[2]),o=Q(),_&&_.c(),this.h()},l(m){t=k(m,"DIV",{});var E=w(t);n=k(E,"BUTTON",{type:!0,"aria-label":!0,class:!0});var S=w(n);e=k(S,"SPAN",{});var z=w(e);r=A(z,l[2]),z.forEach(p),o=x(S),_&&_.l(S),S.forEach(p),E.forEach(p),this.h()},h(){h(n,"type","button"),h(n,"aria-label",l[2]),h(n,"class",s=le(l[4].class)+" svelte-p80uux")},m(m,E){T(m,t,E),b(t,n),b(n,e),b(e,r),b(n,o),_&&_.m(n,null),u=!0,i||(d=we(n,"click",function(){Ce(l[3](l[1]))&&l[3](l[1]).apply(this,arguments)}),i=!0)},p(m,E){l=m,(!u||E&4)&&V(r,l[2]),f&&f.p&&(!u||E&64)&&P(f,c,l,l[6],u?R(c,l[6],E,null):O(l[6]),null),(!u||E&4)&&h(n,"aria-label",l[2]),(!u||E&16&&s!==(s=le(l[4].class)+" svelte-p80uux"))&&h(n,"class",s)},i(m){u||(g(_,m),m&&ke(()=>{u&&(a||(a=se(t,X,{duration:200},!0)),a.run(1))}),u=!0)},o(m){y(_,m),m&&(a||(a=se(t,X,{duration:200},!1)),a.run(0)),u=!1},d(m){m&&p(t),_&&_.d(m),m&&a&&a.end(),i=!1,d()}}}function Ct(l){let t,n;return{c(){t=Z("svg"),n=Z("path"),this.h()},l(e){t=W(e,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var r=w(t);n=W(r,"path",{d:!0}),w(n).forEach(p),r.forEach(p),this.h()},h(){h(n,"d","M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"),h(t,"width","12"),h(t,"height","12"),h(t,"viewBox","0 0 24 24"),h(t,"fill","none"),h(t,"stroke-width","2"),h(t,"stroke-linecap","round"),h(t,"stroke-linejoin","round")},m(e,r){T(e,t,r),b(t,n)},p:D,d(e){e&&p(t)}}}function It(l){let t,n,e=l[0]&&be(l);return{c(){e&&e.c(),t=C()},l(r){e&&e.l(r),t=C()},m(r,o){e&&e.m(r,o),T(r,t,o),n=!0},p(r,[o]){r[0]?e?(e.p(r,o),o&1&&g(e,1)):(e=be(r),e.c(),g(e,1),e.m(t.parentNode,t)):e&&(F(),y(e,1,1,()=>{e=null}),q())},i(r){n||(g(e),n=!0)},o(r){y(e),n=!1},d(r){r&&p(t),e&&e.d(r)}}}function At(l,t,n){let{$$slots:e={},$$scope:r}=t,{data:o=void 0}=t,{queryID:s=void 0}=t,{text:a="Download"}=t,{display:u=!0}=t;const i=new Date,d=new Date(i.getTime()-i.getTimezoneOffset()*6e4).toISOString().slice(0,19).replaceAll(":","-");let{downloadData:c=f=>{const _={fieldSeparator:",",quoteStrings:'"',decimalSeparator:".",showLabels:!0,showTitle:!1,filename:(s??"evidence_download")+` ${d}`,useTextFile:!1,useBom:!0,useKeysAsHeaders:!0},m=JSON.parse(JSON.stringify(Array.from(f)));new ze.ExportToCsv(_).generateCsv(m)}}=t;return l.$$set=f=>{n(4,t=re(re({},t),ne(f))),"data"in f&&n(1,o=f.data),"queryID"in f&&n(5,s=f.queryID),"text"in f&&n(2,a=f.text),"display"in f&&n(0,u=f.display),"downloadData"in f&&n(3,c=f.downloadData),"$$scope"in f&&n(6,r=f.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&n(0,u=u==="true"||u===!0)},t=ne(t),[u,o,a,c,t,s,r,e]}class _r extends B{constructor(t){super(),j(this,t,At,It,M,{data:1,queryID:5,text:2,display:0,downloadData:3})}}const ye=async()=>{const l=(await N(()=>import("./VennDiagram.svelte_svelte_type_style_lang.ZGqga9CZ.js").then(t=>t.p),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)).default;return await N(()=>import("./prism-bash.DTkDXsAh.js"),[],import.meta.url),await N(()=>import("./prism-sql.AgAyy5H_.js"),[],import.meta.url),await N(()=>import("./prism-python.DhmbaUsA.js"),[],import.meta.url),await N(()=>import("./prism-markdown.4MKFcK2x.js"),[],import.meta.url),await N(()=>import("./prism-svelte.OQ4pVbO7.js"),__vite__mapDeps([8,0,1,2,3,4,5,6,7]),import.meta.url),l};function Vt(l){let t,n;return{c(){t=Z("svg"),n=Z("path"),this.h()},l(e){t=W(e,"svg",{class:!0,viewBox:!0,fill:!0,width:!0,height:!0,preserveAspectRatio:!0});var r=w(t);n=W(r,"path",{d:!0}),w(n).forEach(p),r.forEach(p),this.h()},h(){h(n,"d","M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"),h(t,"class","copyButtonSuccessIcon"),h(t,"viewBox","0 0 24 24"),h(t,"fill",l[0]),h(t,"width","100%"),h(t,"height","100%"),h(t,"preserveAspectRatio","xMidYMid meet")},m(e,r){T(e,t,r),b(t,n)},p(e,[r]){r&1&&h(t,"fill",e[0])},i:D,o:D,d(e){e&&p(t)}}}function Mt(l,t,n){let{color:e="green"}=t;return l.$$set=r=>{"color"in r&&n(0,e=r.color)},[e]}class Lt extends B{constructor(t){super(),j(this,t,Mt,Vt,M,{color:0})}}function ve(l){let t,n,e,r,o,s,a;const u=[Ot,Pt],i=[];function d(c,f){return c[3]?0:1}return n=d(l),e=i[n]=u[n](l),{c(){t=v("button"),e.c(),this.h()},l(c){t=k(c,"BUTTON",{class:!0});var f=w(t);e.l(f),f.forEach(p),this.h()},h(){h(t,"class",r="absolute opacity-0 bg-gray-50 rounded-sm p-1 group-hover:opacity-100 top-4 right-6 h-6 w-6 z-10 transition-all duration-200 ease-in-out"+(l[3],""))},m(c,f){T(c,t,f),i[n].m(t,null),o=!0,s||(a=we(t,"click",l[7]),s=!0)},p(c,f){let _=n;n=d(c),n!==_&&(F(),y(i[_],1,1,()=>{i[_]=null}),q(),e=i[n],e||(e=i[n]=u[n](c),e.c()),g(e,1),e.m(t,null)),(!o||f&8&&r!==(r="absolute opacity-0 bg-gray-50 rounded-sm p-1 group-hover:opacity-100 top-4 right-6 h-6 w-6 z-10 transition-all duration-200 ease-in-out"+(c[3],"")))&&h(t,"class",r)},i(c){o||(g(e),o=!0)},o(c){y(e),o=!1},d(c){c&&p(t),i[n].d(),s=!1,a()}}}function Pt(l){let t,n;return t=new je({}),{c(){U(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,r){K(t,e,r),n=!0},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){y(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Ot(l){let t,n;return t=new Lt({props:{color:"var(--green-500)"}}),{c(){U(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,r){K(t,e,r),n=!0},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){y(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Rt(l){let t;const n=l[6].default,e=L(n,l,l[5],null);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,o){e&&e.m(r,o),t=!0},p(r,o){e&&e.p&&(!t||o&32)&&P(e,n,r,r[5],t?R(n,r[5],o,null):O(r[5]),null)},i(r){t||(g(e,r),t=!0)},o(r){y(e,r),t=!1},d(r){e&&e.d(r)}}}function Bt(l){let t;return{c(){t=I(l[0])},l(n){t=A(n,l[0])},m(n,e){T(n,t,e)},p(n,e){e&1&&V(t,n[0])},i:D,o:D,d(n){n&&p(t)}}}function jt(l){let t,n,e,r,o,s,a,u,i=l[1]&&ve(l);const d=[Bt,Rt],c=[];function f(_,m){return _[0]?0:1}return o=f(l),s=c[o]=d[o](l),{c(){t=v("div"),i&&i.c(),n=Q(),e=v("pre"),r=v("code"),s.c(),this.h()},l(_){t=k(_,"DIV",{class:!0});var m=w(t);i&&i.l(m),n=x(m),e=k(m,"PRE",{class:!0});var E=w(e);r=k(E,"CODE",{class:!0});var S=w(r);s.l(S),S.forEach(p),E.forEach(p),m.forEach(p),this.h()},h(){h(r,"class",a="language-"+l[2]+" text-sm"),h(e,"class","overflow-auto max-h-64 pretty-scrollbar"),h(t,"class","my-5 bg-gray-50 border border-gray-200 rounded px-3 py-1 relative group")},m(_,m){T(_,t,m),i&&i.m(t,null),b(t,n),b(t,e),b(e,r),c[o].m(r,null),u=!0},p(_,[m]){_[1]?i?(i.p(_,m),m&2&&g(i,1)):(i=ve(_),i.c(),g(i,1),i.m(t,n)):i&&(F(),y(i,1,1,()=>{i=null}),q());let E=o;o=f(_),o===E?c[o].p(_,m):(F(),y(c[E],1,1,()=>{c[E]=null}),q(),s=c[o],s?s.p(_,m):(s=c[o]=d[o](_),s.c()),g(s,1),s.m(r,null)),(!u||m&4&&a!==(a="language-"+_[2]+" text-sm"))&&h(r,"class",a)},i(_){u||(g(i),g(s),u=!0)},o(_){y(i),y(s),u=!1},d(_){_&&p(t),i&&i.d(),c[o].d()}}}function zt(l,t,n){let{$$slots:e={},$$scope:r}=t,{source:o}=t,{copyToClipboard:s=!1}=t,{language:a=void 0}=t,u=!1;const i=function(){n(3,u=!1)};async function d(){try{await navigator.clipboard.writeText(o),n(3,u=!0),setTimeout(i,1500)}catch{}}Ie(async()=>{const f=await ye();typeof f<"u"?(await oe(),document.querySelectorAll(`pre code${a?`.language-${a}`:""}`).forEach(m=>{f.highlightElement(m,!1)})):console.error("Prism is not defined on mount")});const c=()=>{o!==void 0&&d()};return l.$$set=f=>{"source"in f&&n(0,o=f.source),"copyToClipboard"in f&&n(1,s=f.copyToClipboard),"language"in f&&n(2,a=f.language),"$$scope"in f&&n(5,r=f.$$scope)},l.$$.update=()=>{l.$$.dirty&4&&oe().then(async()=>{const f=await ye();typeof f<"u"?document.querySelectorAll(`pre code${a?`.language-${a}`:""}`).forEach(m=>{f.highlightElement(m,!1)}):console.error("Prism is not defined in reactive statement")})},[o,s,a,u,d,r,e,c]}class mr extends B{constructor(t){super(),j(this,t,zt,jt,M,{source:0,copyToClipboard:1,language:2})}}function Ft(l){let t,n,e="error",r,o,s;return{c(){t=v("span"),n=v("span"),n.textContent=e,r=Q(),o=v("span"),s=I(l[0]),this.h()},l(a){t=k(a,"SPAN",{class:!0});var u=w(t);n=k(u,"SPAN",{class:!0,"data-svelte-h":!0}),G(n)!=="svelte-1927df"&&(n.textContent=e),r=x(u),o=k(u,"SPAN",{class:!0});var i=w(o);s=A(i,l[0]),i.forEach(p),u.forEach(p),this.h()},h(){h(n,"class","inline font-sans font-medium text-xs text-red-600"),h(o,"class","hidden text-white font-sans group-hover:inline absolute -top-1 left-[105%] text-sm z-10 px-2 py-1 bg-gray-800/80 leading-relaxed min-w-[150px] max-w-[400px] rounded-md"),h(t,"class","group inline-flex items-center relative cursor-help cursor-helpfont-sans px-1 border border-red-200 py-[1px] bg-red-50 rounded")},m(a,u){T(a,t,u),b(t,n),b(t,r),b(t,o),b(o,s)},p(a,[u]){u&1&&V(s,a[0])},i:D,o:D,d(a){a&&p(t)}}}function qt(l,t,n){let{error:e=void 0}=t;return l.$$set=r=>{"error"in r&&n(0,e=r.error)},[e]}class Nt extends B{constructor(t){super(),j(this,t,qt,Ft,M,{error:0})}}function Qt(l){let t,n,e="Big Value",r,o,s,a,u,i;return{c(){t=v("div"),n=v("div"),n.textContent=e,r=Q(),o=v("div"),s=v("div"),a=I(`error
			`),u=v("span"),i=I(l[0]),this.h()},l(d){t=k(d,"DIV",{width:!0,class:!0});var c=w(t);n=k(c,"DIV",{class:!0,"data-svelte-h":!0}),G(n)!=="svelte-f1i116"&&(n.textContent=e),r=x(c),o=k(c,"DIV",{class:!0});var f=w(o);s=k(f,"DIV",{class:!0});var _=w(s);a=A(_,`error
			`),u=k(_,"SPAN",{class:!0});var m=w(u);i=A(m,l[0]),m.forEach(p),_.forEach(p),f.forEach(p),c.forEach(p),this.h()},h(){h(n,"class","font-bold text-center text-sm"),h(u,"class","hidden text-white font-sans group-hover:inline-block absolute top-[50%] left-[50%] text-sm z-10 px-2 py-1 bg-gray-800/80 leading-relaxed min-w-[150px] max-w-[400px] rounded-md z-50 overflow-visible"),h(s,"class","text-center [word-wrap:break-work] w-full font-medium text-xs text-red-600"),h(o,"class","m-auto w-[100px]"),h(t,"width","100%"),h(t,"class","inline-block group w-[100px] relative cursor-help cursor-helpfont-sans box-content grid-cols-1 justify-center bg-red-50 text-grey-700 font-ui font-normal rounded border border-red-200 h-[38px] mt-0.5 py-3 px-3 print:break-inside-avoid")},m(d,c){T(d,t,c),b(t,n),b(t,r),b(t,o),b(o,s),b(s,a),b(s,u),b(u,i)},p(d,[c]){c&1&&V(i,d[0])},i:D,o:D,d(d){d&&p(t)}}}function xt(l,t,n){let{error:e}=t;return l.$$set=r=>{"error"in r&&n(0,e=r.error)},[e]}class Ut extends B{constructor(t){super(),j(this,t,xt,Qt,M,{error:0})}}function Ht(l){let t,n;return t=new St({props:{chartType:l[3],error:l[4]}}),{c(){U(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,r){K(t,e,r),n=!0},p(e,r){const o={};r&8&&(o.chartType=e[3]),r&16&&(o.error=e[4]),t.$set(o)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){y(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Kt(l){let t,n;return t=new Ut({props:{error:l[4]}}),{c(){U(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,r){K(t,e,r),n=!0},p(e,r){const o={};r&16&&(o.error=e[4]),t.$set(o)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){y(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Jt(l){let t,n;return t=new Nt({props:{error:l[4]}}),{c(){U(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,r){K(t,e,r),n=!0},p(e,r){const o={};r&16&&(o.error=e[4]),t.$set(o)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){y(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Yt(l){let t;function n(o,s){return o[3]==="Value"?Gt:o[3]==="Big Value"?Wt:Zt}let e=n(l),r=e(l);return{c(){r.c(),t=C()},l(o){r.l(o),t=C()},m(o,s){r.m(o,s),T(o,t,s)},p(o,s){e===(e=n(o))&&r?r.p(o,s):(r.d(1),r=e(o),r&&(r.c(),r.m(t.parentNode,t)))},i:D,o:D,d(o){o&&p(t),r.d(o)}}}function Zt(l){let t,n;return{c(){t=v("p"),n=I(l[2]),this.h()},l(e){t=k(e,"P",{class:!0});var r=w(t);n=A(r,l[2]),r.forEach(p),this.h()},h(){h(t,"class","text-xs text-gray-500 p-2 my-2 w-full border border-dashed rounded")},m(e,r){T(e,t,r),b(t,n)},p(e,r){r&4&&V(n,e[2])},d(e){e&&p(t)}}}function Wt(l){let t,n;return{c(){t=v("p"),n=I(l[2]),this.h()},l(e){t=k(e,"P",{class:!0});var r=w(t);n=A(r,l[2]),r.forEach(p),this.h()},h(){h(t,"class","text-xs text-gray-500 p-2 pt-[32px] my-0 text-center w-full align-middle h-[80px] border border-dashed rounded min-w-[120px]")},m(e,r){T(e,t,r),b(t,n)},p(e,r){r&4&&V(n,e[2])},d(e){e&&p(t)}}}function Gt(l){let t,n;return{c(){t=v("span"),n=I(l[2]),this.h()},l(e){t=k(e,"SPAN",{class:!0});var r=w(t);n=A(r,l[2]),r.forEach(p),this.h()},h(){h(t,"class","text-xs text-gray-500 p-2 my-2 w-full border border-dashed rounded")},m(e,r){T(e,t,r),b(t,n)},p(e,r){r&4&&V(n,e[2])},d(e){e&&p(t)}}}function Xt(l){let t,n,e,r,o;const s=[Yt,Jt,Kt,Ht],a=[];function u(i,d){return d&3&&(t=null),t==null&&(t=!!(["warn","pass"].includes(i[1])||!i[0])),t?0:i[3]==="Value"?1:i[3]==="Big Value"?2:3}return n=u(l,-1),e=a[n]=s[n](l),{c(){e.c(),r=C()},l(i){e.l(i),r=C()},m(i,d){a[n].m(i,d),T(i,r,d),o=!0},p(i,[d]){let c=n;n=u(i,d),n===c?a[n].p(i,d):(F(),y(a[c],1,1,()=>{a[c]=null}),q(),e=a[n],e?e.p(i,d):(e=a[n]=s[n](i),e.c()),g(e,1),e.m(r.parentNode,r))},i(i){o||(g(e),o=!0)},o(i){y(e),o=!1},d(i){i&&p(r),a[n].d(i)}}}function $t(l,t,n){let{isInitial:e=!0}=t,{emptySet:r="error"}=t,{emptyMessage:o="No Records"}=t,{chartType:s="Component"}=t,a="Dataset is empty - query ran successfully, but no data was returned from the database";if(s==="Big Value"&&(a="Dataset is empty"),r==="error"&&e){if(console.error("\x1B[31m%s\x1B[0m",`Error in ${s}: ${a}`),kt)throw Error(a)}else r==="warn"&&e&&console.warn(`Warning in ${s}: Dataset is empty - query ran successfully, but no data was returned from the database`);return l.$$set=u=>{"isInitial"in u&&n(0,e=u.isInitial),"emptySet"in u&&n(1,r=u.emptySet),"emptyMessage"in u&&n(2,o=u.emptyMessage),"chartType"in u&&n(3,s=u.chartType)},[e,r,o,s,a]}class hr extends B{constructor(t){super(),j(this,t,$t,Xt,M,{isInitial:0,emptySet:1,emptyMessage:2,chartType:3})}}const pr={blue100:"hsla(202, 100%, 95%, 1)",blue200:"hsla(204, 100%, 85%, 1)",blue300:"hsla(206, 95%, 72%, 1)",blue400:"hsla(208, 90%, 63%, 1)",blue500:"hsla(210, 85%, 54%, 1)",blue600:"hsla(212, 96%, 44%, 1)",blue700:"hsla(214, 98%, 38%, 1)",blue800:"hsla(217, 98%, 33%, 1)",blue900:"hsla(220, 99%, 24%, 1)",blue999:"hsla(222, 100%, 18%, 1)",bluelink:"hsla(205, 62%, 38%, 1)",green100:"hsla(167, 100%, 94%, 1)",green200:"hsla(166, 100%, 87%, 1)",green300:"hsla(163, 93%, 76%, 1)",green400:"hsla(161, 90%, 63%, 1)",green500:"hsla(159, 88%, 44%, 1)",green600:"hsla(158, 91%, 35%, 1)",green700:"hsla(156, 93%, 28%, 1)",green800:"hsla(154, 95%, 23%, 1)",green900:"hsla(152, 100%, 18%, 1)",green999:"hsla(150, 100%, 14%, 1)",grey100:"hsla(217, 33%, 97%, 1)",grey200:"hsla(215, 15%, 91%, 1)",grey300:"hsla(211, 16%, 82%, 1)",grey400:"hsla(212, 13%, 65%, 1)",grey500:"hsla(212, 10%, 53%, 1)",grey600:"hsla(212, 12%, 43%, 1)",grey700:"hsla(210, 14%, 37%, 1)",grey800:"hsla(210, 18%, 30%, 1)",grey900:"hsla(210, 20%, 25%, 1)",grey999:"hsla(211, 24%, 16%, 1)",yellow100:"hsl(49, 100%, 96%, 1)",yellow200:"hsl(48, 100%, 88%, 1)",yellow300:"hsl(48, 95%, 76%, 1)",yellow400:"hsl(48, 94%, 68%, 1)",yellow500:"hsl(44, 92%, 63%, 1)",yellow600:"hsl(42, 87%, 55%, 1)",yellow700:"hsl(36, 77%, 49%, 1)",yellow800:"hsl(29, 80%, 44%, 1)",yellow900:"hsl(22, 82%, 39%, 1)",yellow999:"hsl(15, 86%, 30%, 1)"},gr=["hsla(207, 65%, 39%, 1)","hsla(195, 49%, 51%, 1)","hsla(207, 69%, 79%, 1)","hsla(202, 28%, 65%, 1)","hsla(179, 37%, 65%, 1)","hsla(40, 30%, 75%, 1)","hsla(38, 89%, 62%, 1)","hsla(342, 40%, 40%, 1)","hsla(207, 86%, 70%, 1)","hsla(160, 40%, 46%, 1)","#71777d","#7e848a","#8c9196","#9a9fa3","#a8acb0","#b7babd","#c5c8ca","#d4d6d7","#e3e4e5","#f3f3f3"];export{Ut as B,mr as C,_r as D,hr as E,ir as Q,qe as S,Nt as V,dr as a,St as b,cr as c,ar as d,dt as e,bt as f,ur as g,gr as h,me as i,pe as n,fr as p,kt as s,pr as u};