import{o as ce,M as te,s as le,e as y,t as S,d as w,r as E,u as V,f as d,i as v,j as g,k as L,E as _e,A as K,n as B,l as N,m as W,a as ne,c as re,w as me,b as k,x as de,y as he,z as be,O as ae}from"./scheduler.BVCo5HCX.js";import{S as oe,i as ue,c as Q,a as U,m as A,t as m,b as h,e as X,g as T,d as C}from"./index.C9mGAhn_.js";import{e as q}from"./VennDiagram.svelte_svelte_type_style_lang.COvZ985M.js";import{r as ge,w as pe}from"./entry.ZsnkuR_y.js";import{I as ve}from"./globalContexts.1hDlTDmj.js";import{a as ke}from"./index.DAWWTyat.js";import{p as ye}from"./stores.C49gDDi_.js";import{H as we}from"./HiddenInPrint.UTtwq9lu.js";import{Q as Ee}from"./colours.CiCpy17i.js";const se="__EVIDENCE_BUTTON_GROUP_CONTEXT",Le=()=>te(se),Ne=(s,e)=>ce(se,{update:s,value:e}),H={dates:[{valueLabel:"Week",value:"7 days"},{valueLabel:"Month",value:"1 month"},{valueLabel:"Year",value:"1 year"}]};function Be(s){let e,r,t,l,u;return{c(){e=y("button"),r=S(s[0]),this.h()},l(n){e=w(n,"BUTTON",{type:!0,class:!0});var a=E(e);r=V(a,s[0]),a.forEach(d),this.h()},h(){var n;v(e,"type","button"),v(e,"class",t="flex-none py-1 font-medium h-8 px-3 text-xs truncate border-r last:border-none hover:bg-gray-100 focus:z-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 "+(((n=s[2])==null?void 0:n.value)===s[1]?"z-10 border-gray-200 bg-gray-100 text-blue-700":"z-0 bg-white text-gray-900 border-gray-200"))},m(n,a){g(n,e,a),L(e,r),l||(u=_e(e,"click",s[6]),l=!0)},p(n,[a]){var o;a&1&&K(r,n[0]),a&6&&t!==(t="flex-none py-1 font-medium h-8 px-3 text-xs truncate border-r last:border-none hover:bg-gray-100 focus:z-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 "+(((o=n[2])==null?void 0:o.value)===n[1]?"z-10 border-gray-200 bg-gray-100 text-blue-700":"z-0 bg-white text-gray-900 border-gray-200"))&&v(e,"class",t)},i:B,o:B,d(n){n&&d(e),l=!1,u()}}}function Te(s,e,r){let t,{valueLabel:l}=e,{value:u}=e;const{update:n,value:a}=Le();N(s,a,_=>r(2,t=_));let{default:o=!1}=e;o&&n({valueLabel:l,value:u});const f=()=>n({valueLabel:l,value:u});return s.$$set=_=>{"valueLabel"in _&&r(0,l=_.valueLabel),"value"in _&&r(1,u=_.value),"default"in _&&r(5,o=_.default)},[l,u,t,n,a,o,f]}class ie extends oe{constructor(e){super(),ue(this,e,Te,Be,le,{valueLabel:0,value:1,default:5})}}function F(s,e,r){const t=s.slice();return t[4]=e[r].label,t[3]=e[r].value,t}function J(s,e,r){const t=s.slice();return t[3]=e[r].value,t[21]=e[r].valueLabel,t}function Z(s){let e,r;return{c(){e=y("span"),r=S(s[0]),this.h()},l(t){e=w(t,"SPAN",{class:!0});var l=E(e);r=V(l,s[0]),l.forEach(d),this.h()},h(){v(e,"class","text-gray-900 text-sm block mb-1")},m(t,l){g(t,e,l),L(e,r)},p(t,l){l&1&&K(r,t[0])},d(t){t&&d(e)}}}function Ce(s){let e,r,t;const l=s[15].default,u=me(l,s,s[16],null);let n=s[6]&&x(s);return{c(){u&&u.c(),e=ne(),n&&n.c(),r=k()},l(a){u&&u.l(a),e=re(a),n&&n.l(a),r=k()},m(a,o){u&&u.m(a,o),g(a,e,o),n&&n.m(a,o),g(a,r,o),t=!0},p(a,o){u&&u.p&&(!t||o&65536)&&de(u,l,a,a[16],t?be(l,a[16],o,null):he(a[16]),null),a[6]?n?(n.p(a,o),o&64&&m(n,1)):(n=x(a),n.c(),m(n,1),n.m(r.parentNode,r)):n&&(T(),h(n,1,1,()=>{n=null}),C())},i(a){t||(m(u,a),m(n),t=!0)},o(a){h(u,a),h(n),t=!1},d(a){a&&(d(e),d(r)),u&&u.d(a),n&&n.d(a)}}}function Ie(s){let e,r,t,l;const u=[Ge,ze],n=[];function a(o,f){return H[o[2]]?0:1}return e=a(s),r=n[e]=u[e](s),{c(){r.c(),t=k()},l(o){r.l(o),t=k()},m(o,f){n[e].m(o,f),g(o,t,f),l=!0},p(o,f){let _=e;e=a(o),e===_?n[e].p(o,f):(T(),h(n[_],1,1,()=>{n[_]=null}),C(),r=n[e],r?r.p(o,f):(r=n[e]=u[e](o),r.c()),m(r,1),r.m(t.parentNode,t))},i(o){l||(m(r),l=!0)},o(o){h(r),l=!1},d(o){o&&d(t),n[e].d(o)}}}function x(s){let e,r;return e=new Ee({props:{data:s[5],$$slots:{default:[De,({loaded:t})=>({24:t}),({loaded:t})=>t?16777216:0],skeleton:[Pe]},$$scope:{ctx:s}}}),{c(){Q(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){A(e,t,l),r=!0},p(t,l){const u={};l&32&&(u.data=t[5]),l&16842752&&(u.$$scope={dirty:l,ctx:t}),e.$set(u)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){X(e,t)}}}function Pe(s){let e;return{c(){e=y("div"),this.h()},l(r){e=w(r,"DIV",{class:!0}),E(e).forEach(d),this.h()},h(){v(e,"class","h-8 min-w-24 w-full max-width-24 block animate-pulse bg-gray-200")},m(r,t){g(r,e,t)},p:B,d(r){r&&d(e)}}}function $(s){let e,r;return e=new ie({props:{value:s[3],valueLabel:s[4]}}),{c(){Q(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){A(e,t,l),r=!0},p(t,l){const u={};l&16777216&&(u.value=t[3]),l&16777216&&(u.valueLabel=t[4]),e.$set(u)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){X(e,t)}}}function De(s){let e,r,t=q(s[24]),l=[];for(let n=0;n<t.length;n+=1)l[n]=$(F(s,t,n));const u=n=>h(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=k()},l(n){for(let a=0;a<l.length;a+=1)l[a].l(n);e=k()},m(n,a){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(n,a);g(n,e,a),r=!0},p(n,a){if(a&16777216){t=q(n[24]);let o;for(o=0;o<t.length;o+=1){const f=F(n,t,o);l[o]?(l[o].p(f,a),m(l[o],1)):(l[o]=$(f),l[o].c(),m(l[o],1),l[o].m(e.parentNode,e))}for(T(),o=t.length;o<l.length;o+=1)u(o);C()}},i(n){if(!r){for(let a=0;a<t.length;a+=1)m(l[a]);r=!0}},o(n){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)h(l[a]);r=!1},d(n){n&&d(e),ae(l,n)}}}function ze(s){let e,r,t;return{c(){e=y("span"),r=S(s[2]),t=S(" is not a valid preset"),this.h()},l(l){e=w(l,"SPAN",{class:!0});var u=E(e);r=V(u,s[2]),t=V(u," is not a valid preset"),u.forEach(d),this.h()},h(){v(e,"class","text-red-500 font-bold text-sm")},m(l,u){g(l,e,u),L(e,r),L(e,t)},p(l,u){u&4&&K(r,l[2])},i:B,o:B,d(l){l&&d(e)}}}function Ge(s){let e,r,t=q(H[s[2]]),l=[];for(let n=0;n<t.length;n+=1)l[n]=ee(J(s,t,n));const u=n=>h(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=k()},l(n){for(let a=0;a<l.length;a+=1)l[a].l(n);e=k()},m(n,a){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(n,a);g(n,e,a),r=!0},p(n,a){if(a&4){t=q(H[n[2]]);let o;for(o=0;o<t.length;o+=1){const f=J(n,t,o);l[o]?(l[o].p(f,a),m(l[o],1)):(l[o]=ee(f),l[o].c(),m(l[o],1),l[o].m(e.parentNode,e))}for(T(),o=t.length;o<l.length;o+=1)u(o);C()}},i(n){if(!r){for(let a=0;a<t.length;a+=1)m(l[a]);r=!0}},o(n){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)h(l[a]);r=!1},d(n){n&&d(e),ae(l,n)}}}function ee(s){let e,r;return e=new ie({props:{value:s[3],valueLabel:s[21]}}),{c(){Q(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){A(e,t,l),r=!0},p(t,l){const u={};l&4&&(u.value=t[3]),l&4&&(u.valueLabel=t[21]),e.$set(u)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){X(e,t)}}}function Oe(s){let e,r,t,l,u,n,a=s[0]&&Z(s);const o=[Ie,Ce],f=[];function _(c,b){return c[2]?0:1}return l=_(s),u=f[l]=o[l](s),{c(){e=y("div"),a&&a.c(),r=ne(),t=y("div"),u.c(),this.h()},l(c){e=w(c,"DIV",{class:!0});var b=E(e);a&&a.l(b),r=re(b),t=w(b,"DIV",{class:!0,role:!0});var p=E(t);u.l(p),p.forEach(d),b.forEach(d),this.h()},h(){v(t,"class","inline-flex rounded-md shadow-sm overflow-auto border no-scrollbar"),v(t,"role","group"),v(e,"class","inline-flex w-fit max-w-full flex-col mt-2 mb-4 ml-0 mr-2")},m(c,b){g(c,e,b),a&&a.m(e,null),L(e,r),L(e,t),f[l].m(t,null),n=!0},p(c,b){c[0]?a?a.p(c,b):(a=Z(c),a.c(),a.m(e,r)):a&&(a.d(1),a=null);let p=l;l=_(c),l===p?f[l].p(c,b):(T(),h(f[p],1,1,()=>{f[p]=null}),C(),u=f[l],u?u.p(c,b):(u=f[l]=o[l](c),u.c()),m(u,1),u.m(t,null))},i(c){n||(m(u),n=!0)},o(c){h(u),n=!1},d(c){c&&d(e),a&&a.d(),f[l].d()}}}function Se(s){let e,r;return e=new we({props:{enabled:s[1],$$slots:{default:[Oe]},$$scope:{ctx:s}}}),{c(){Q(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){A(e,t,l),r=!0},p(t,[l]){const u={};l&2&&(u.enabled=t[1]),l&65637&&(u.$$scope={dirty:l,ctx:t}),e.$set(u)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){X(e,t)}}}function Ve(s,e,r){var j;let t,l,u,n,a,o;N(s,ye,i=>r(17,n=i));let{$$slots:f={},$$scope:_}=e,{name:c}=e,{title:b}=e,{hideDuringPrint:p=!0}=e,{preset:M=void 0}=e;const Y=te(ve);N(s,Y,i=>r(18,a=i));const I=pe(null);N(s,I,i=>r(19,o=i)),Ne(i=>{W(I,o=i,o),W(Y,a[c]=(i==null?void 0:i.value)??null,a)},ge(I));let{value:P,data:D,label:z,order:G,where:O}=e;const{results:R,update:fe}=ke({value:P,data:D,label:z,order:G,where:O},`ButtonGroup-${c}`,(j=n==null?void 0:n.data)==null?void 0:j.data[`ButtonGroup-${c}`]);return N(s,R,i=>r(14,u=i)),s.$$set=i=>{"name"in i&&r(10,c=i.name),"title"in i&&r(0,b=i.title),"hideDuringPrint"in i&&r(1,p=i.hideDuringPrint),"preset"in i&&r(2,M=i.preset),"value"in i&&r(3,P=i.value),"data"in i&&r(11,D=i.data),"label"in i&&r(4,z=i.label),"order"in i&&r(12,G=i.order),"where"in i&&r(13,O=i.where),"$$scope"in i&&r(16,_=i.$$scope)},s.$$.update=()=>{s.$$.dirty&14360&&fe({value:P,data:D,label:z,order:G,where:O}),s.$$.dirty&16384&&r(6,{hasQuery:t,query:l}=u,t,(r(5,l),r(14,u)))},[b,p,M,P,z,l,t,Y,I,R,c,D,G,O,u,f,_]}class Re extends oe{constructor(e){super(),ue(this,e,Ve,Se,le,{name:10,title:0,hideDuringPrint:1,preset:2,value:3,data:11,label:4,order:12,where:13})}}export{Re as B,ie as a};