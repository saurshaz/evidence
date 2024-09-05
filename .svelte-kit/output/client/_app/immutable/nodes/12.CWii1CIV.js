import{o as ea,M as Wa,s as Dt,b as Ze,j as v,f as S,a4 as vt,l as At,P as Ve,Q as Yt,L as Wt,w as Pt,e as pe,d as he,r as nt,ai as Tt,I as ta,x as Jt,y as Gt,z as jt,n as Te,E as Ga,H as ja,X as Ba,a as p,c as h,i as ue,O as za,m as qa,t as gt,u as St,k as Be,A as Ht,h as Qa,g as Et,p as Xa,q as sa}from"../chunks/scheduler.BVCo5HCX.js";import{S as Ct,i as It,g as ve,b as f,d as be,t as c,j as Va,c as N,a as O,m as y,e as T}from"../chunks/index.C9mGAhn_.js";import{j as Ka,w as qt,m as ra,k as Qt,l as Xt,q as la,r as na,v as Za,x as xa,y as es,z as Vt,A as ts,C as Kt,D as We,E as Zt,g as zt,F as ia,d as as,e as _a}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.COvZ985M.js";import{s as ss,Q as Se,p as rs,r as oa,t as ma}from"../chunks/index.DAWWTyat.js";import{h as q}from"../chunks/setTrackProxy.Cl20Y9Hv.js";import{I as Ua,C as ls}from"../chunks/globalContexts.1hDlTDmj.js";import{w as kt,d as ns}from"../chunks/entry.ZsnkuR_y.js";import{D as is,C as Mt}from"../chunks/DataTable.C27QukxD.js";import{p as _s}from"../chunks/stores.C49gDDi_.js";import{B as ua}from"../chunks/BarChart.CThAdPla.js";import{L as os}from"../chunks/LineChart.4dpktC06.js";import{p as ms}from"../chunks/profile.BW8tN6E9.js";import{D as Ot,a as qe}from"../chunks/Dropdown._FKcvDnm.js";import{t as us,o as ds,g as cs,c as fs,r as Es,a as gs,b as Ss}from"../chunks/updater.DMRzQ2eU.js";import{H as vs}from"../chunks/HiddenInPrint.UTtwq9lu.js";import{g as bs,f as yt}from"../chunks/CopyIcon.5MOzTE6L.js";import{Q as Ae}from"../chunks/QueryViewer.CXzVRZ_y.js";function xt(r,t,s,a){const n=(r-(isNaN(t)?0:t))%a;let o=Math.abs(n)*2>=a?r+Math.sign(n)*(a-Math.abs(n)):r-n;isNaN(t)?!isNaN(s)&&o>s&&(o=Math.floor(s/a)*a):o<t?o=t:!isNaN(s)&&o>s&&(o=t+Math.floor((s-t)/a)*a);const u=a.toString(),i=u.indexOf("."),d=i>=0?u.length-i:0;if(d>0){const _=Math.pow(10,d);o=Math.round(o*_)/_}return o}const $s={defaultValue:[],min:0,max:100,step:1,orientation:"horizontal",dir:"ltr",disabled:!1},{name:Ut}=Za("slider"),ps=r=>{const t={...$s,...r},s=us(Ka(t,"value","onValueChange","defaultValue")),{min:a,max:n,step:o,orientation:u,dir:i,disabled:d}=s,_=t.value??kt(t.defaultValue),e=ds(_,t==null?void 0:t.onValueChange),E=qt(kt(!1)),g=qt(kt(0)),H=qt(kt(null)),J=cs(["root"]),$=(w,A)=>{e.update(L=>{if(!L)return[w];if(L[A]===w)return L;const k=[...L],B=k[A]>w?-1:1;function R(){k[A]=k[A+B],k[A+B]=w;const j=W();j&&(j[A+B].focus(),H.set({thumb:j[A+B],index:A+B}))}if(B===-1&&w<k[A-1])return R(),k;if(B===1&&w>k[A+1])return R(),k;const b=a.get(),P=n.get(),G=o.get();return k[A]=xt(w,b,P,G),k})},W=()=>{const w=Zt(J.root);return w?Array.from(w.querySelectorAll('[data-melt-part="thumb"]')).filter(A=>Kt(A)):null},D=ns([a,n],([w,A])=>L=>(L-w)/(A-w)*100),F=qt.derived([u,i],([w,A])=>w==="horizontal"?A==="rtl"?"rl":"lr":A==="rtl"?"tb":"bt"),X=ra(Ut(),{stores:[d,u,i],returned:([w,A,L])=>({dir:L,disabled:Qt(w),"data-disabled":Qt(w),"data-orientation":A,style:w?void 0:`touch-action: ${A==="horizontal"?"pan-y":"pan-x"}`,"data-melt-id":J.root})}),M=ra(Ut("range"),{stores:[e,F,D],returned:([w,A,L])=>{const k=w.length>1?L(Math.min(...w)??0):0,B=100-L(Math.max(...w)??0),R={position:"absolute"};switch(A){case"lr":{R.left=`${k}%`,R.right=`${B}%`;break}case"rl":{R.right=`${k}%`,R.left=`${B}%`;break}case"bt":{R.bottom=`${k}%`,R.top=`${B}%`;break}case"tb":{R.top=`${k}%`,R.bottom=`${B}%`;break}}return{style:Xt(R)}}}),ye=la(Ut("thumb"),{stores:[e,D,a,n,d,u,F],returned:([w,A,L,k,B,R,b])=>Array.from({length:w.length||1},(G,j)=>{g.get()<w.length&&g.update(Y=>Y+1);const V=w[j],U=`${A(V)}%`,C={position:"absolute"};switch(b){case"lr":{C.left=U,C.translate="-50% 0";break}case"rl":{C.right=U,C.translate="50% 0";break}case"bt":{C.bottom=U,C.translate="0 50%";break}case"tb":{C.top=U,C.translate="0 -50%";break}}return{role:"slider","aria-valuemin":L,"aria-valuemax":k,"aria-valuenow":V,"aria-disabled":Qt(B),"aria-orientation":R,"data-melt-part":"thumb","data-value":V,style:Xt(C),tabindex:B?-1:0}}),action:w=>({destroy:ts(w,"keydown",L=>{if(d.get())return;const k=L.currentTarget;if(!Kt(k))return;const B=W();if(!(B!=null&&B.length))return;const R=B.indexOf(k);if(g.set(R),![We.ARROW_LEFT,We.ARROW_RIGHT,We.ARROW_UP,We.ARROW_DOWN,We.HOME,We.END].includes(L.key))return;L.preventDefault();const b=a.get(),P=n.get(),G=o.get(),j=e.get(),Re=u.get(),V=F.get(),U=j[R];switch(L.key){case We.HOME:{$(b,R);break}case We.END:{$(P,R);break}case We.ARROW_LEFT:{if(Re!=="horizontal")break;L.metaKey?$(V==="rl"?P:b,R):V==="rl"&&U<P?$(U+G,R):V==="lr"&&U>b&&$(U-G,R);break}case We.ARROW_RIGHT:{if(Re!=="horizontal")break;L.metaKey?$(V==="rl"?b:P,R):V==="rl"&&U>b?$(U-G,R):V==="lr"&&U<P&&$(U+G,R);break}case We.ARROW_UP:{L.metaKey?$(V==="tb"?b:P,R):V==="tb"&&U>b?$(U-G,R):V!=="tb"&&U<P&&$(U+G,R);break}case We.ARROW_DOWN:{L.metaKey?$(V==="tb"?P:b,R):V==="tb"&&U<P?$(U+G,R):V!=="tb"&&U>b&&$(U-G,R);break}}})})}),we=la(Ut("tick"),{stores:[e,a,n,o,F],returned:([w,A,L,k,B])=>{const R=L-A;let b=Math.ceil(R/k);return R%k==0&&b++,Array.from({length:b},(P,G)=>{const j=`${G*(k/(L-A))*100}%`,Re=G===0,V=G===b-1,U=Re?0:V?-100:-50,C={position:"absolute"};switch(B){case"lr":{C.left=j,C.translate=`${U}% 0`;break}case"rl":{C.right=j,C.translate=`${-U}% 0`;break}case"bt":{C.bottom=j,C.translate=`0 ${-U}%`;break}case"tb":{C.top=j,C.translate=`0 ${U}%`;break}}const Y=A+G*k;return{"data-bounded":(w.length===1?Y<=w[0]:w[0]<=Y&&Y<=w[w.length-1])?!0:void 0,"data-value":Y,style:Xt(C)}})}});return na([X,a,n,d,u,F,o],([w,A,L,k,B,R,b])=>{if(!xa||k)return;const P=(C,Y,z,$e)=>{const de=(C-z)/($e-z)*(L-A)+A;if(de<A)$(A,Y);else if(de>L)$(L,Y);else{const Q=b,Oe=A,De=Math.floor((de-Oe)/Q),Ce=Oe+De*Q+Q/2,xe=Oe+(De+1)*Q+Q/2,Me=de>=Ce&&de<xe?(De+1)*Q+Oe:De*Q+Oe;Me<=L&&$(Me,Y)}},G=C=>{const Y=W();if(!Y)return;Y.forEach(de=>de.blur());const z=Y.map(de=>{if(B==="horizontal"){const{left:Q,right:Oe}=de.getBoundingClientRect();return Math.abs(C.clientX-(Q+Oe)/2)}else{const{top:Q,bottom:Oe}=de.getBoundingClientRect();return Math.abs(C.clientY-(Q+Oe)/2)}}),$e=Y[z.indexOf(Math.min(...z))],Ne=Y.indexOf($e);return{thumb:$e,index:Ne}},j=C=>{if(!E.get())return;C.preventDefault(),C.stopPropagation();const Y=Zt(w["data-melt-id"]),z=H.get();if(!Y||!z)return;z.thumb.focus();const{left:$e,right:Ne,top:de,bottom:Q}=Y.getBoundingClientRect();switch(R){case"lr":{P(C.clientX,z.index,$e,Ne);break}case"rl":{P(C.clientX,z.index,Ne,$e);break}case"bt":{P(C.clientY,z.index,Q,de);break}case"tb":{P(C.clientY,z.index,de,Q);break}}},Re=C=>{if(C.button!==0)return;const Y=Zt(w["data-melt-id"]),z=G(C);if(!z||!Y)return;const $e=C.target;!Kt($e)||!Y.contains($e)||(C.preventDefault(),H.set(z),z.thumb.focus(),E.set(!0),j(C))},V=()=>{E.set(!1)},U=es(Vt(document,"pointerdown",Re),Vt(document,"pointerup",V),Vt(document,"pointerleave",V),Vt(document,"pointermove",j));return()=>{U()}}),na([o,a,n,e],function([A,L,k,B]){const R=P=>xt(P,L,k,A)===P,b=P=>xt(P,L,k,A);B.some(P=>!R(P))&&e.update(P=>P.map(b))}),{elements:{root:X,thumbs:ye,range:M,ticks:we},states:{value:e},options:s}};function Ya(){return{NAME:"slider",PARTS:["root","input","range","thumb","tick"]}}function hs(r){const{NAME:t,PARTS:s}=Ya(),a=fs(t,s),n={...ps(Es(r)),getAttrs:a};return ea(t,n),{...n,updateOption:gs(n.options)}}function Pa(){const{NAME:r}=Ya();return Wa(r)}const ws=r=>({builder:r&4,ticks:r&8,thumbs:r&16}),da=r=>({builder:r[2],ticks:r[3],thumbs:r[4]}),As=r=>({builder:r&4,ticks:r&8,thumbs:r&16}),ca=r=>({builder:r[2],ticks:r[3],thumbs:r[4]});function Rs(r){let t,s,a,n;const o=r[19].default,u=Pt(o,r,r[18],da);let i=[r[2],r[8]],d={};for(let _=0;_<i.length;_+=1)d=Ve(d,i[_]);return{c(){t=pe("span"),u&&u.c(),this.h()},l(_){t=he(_,"SPAN",{});var e=nt(t);u&&u.l(e),e.forEach(S),this.h()},h(){Tt(t,d)},m(_,e){v(_,t,e),u&&u.m(t,null),r[20](t),s=!0,a||(n=ta(r[2].action(t)),a=!0)},p(_,e){u&&u.p&&(!s||e&262172)&&Jt(u,o,_,_[18],s?jt(o,_[18],e,ws):Gt(_[18]),da),Tt(t,d=zt(i,[e&4&&_[2],e&256&&_[8]]))},i(_){s||(c(u,_),s=!0)},o(_){f(u,_),s=!1},d(_){_&&S(t),u&&u.d(_),r[20](null),a=!1,n()}}}function Ns(r){let t;const s=r[19].default,a=Pt(s,r,r[18],ca);return{c(){a&&a.c()},l(n){a&&a.l(n)},m(n,o){a&&a.m(n,o),t=!0},p(n,o){a&&a.p&&(!t||o&262172)&&Jt(a,s,n,n[18],t?jt(s,n[18],o,As):Gt(n[18]),ca)},i(n){t||(c(a,n),t=!0)},o(n){f(a,n),t=!1},d(n){a&&a.d(n)}}}function Os(r){let t,s,a,n;const o=[Ns,Rs],u=[];function i(d,_){return d[1]?0:1}return t=i(r),s=u[t]=o[t](r),{c(){s.c(),a=Ze()},l(d){s.l(d),a=Ze()},m(d,_){u[t].m(d,_),v(d,a,_),n=!0},p(d,[_]){let e=t;t=i(d),t===e?u[t].p(d,_):(ve(),f(u[e],1,1,()=>{u[e]=null}),be(),s=u[t],s?s.p(d,_):(s=u[t]=o[t](d),s.c()),c(s,1),s.m(a.parentNode,a))},i(d){n||(c(s),n=!0)},o(d){f(s),n=!1},d(d){d&&S(a),u[t].d(d)}}}function ys(r,t,s){let a;const n=["disabled","min","max","step","orientation","dir","value","onValueChange","asChild","el"];let o=vt(t,n),u,i,d,{$$slots:_={},$$scope:e}=t,{disabled:E=void 0}=t,{min:g=void 0}=t,{max:H=void 0}=t,{step:J=void 0}=t,{orientation:$=void 0}=t,{dir:W=void 0}=t,{value:D=void 0}=t,{onValueChange:F=void 0}=t,{asChild:X=!1}=t,{el:M=void 0}=t;const{elements:{root:ye,ticks:we,thumbs:w},states:{value:A},updateOption:L,getAttrs:k}=hs({disabled:E,dir:W,min:g,max:H,step:J,orientation:$,defaultValue:D,onValueChange:({next:b})=>(D!==b&&(F==null||F(b),s(9,D=b)),b)});At(r,ye,b=>s(17,u=b)),At(r,we,b=>s(3,i=b)),At(r,w,b=>s(4,d=b));const B=k("root");function R(b){Wt[b?"unshift":"push"](()=>{M=b,s(0,M)})}return r.$$set=b=>{t=Ve(Ve({},t),Yt(b)),s(8,o=vt(t,n)),"disabled"in b&&s(10,E=b.disabled),"min"in b&&s(11,g=b.min),"max"in b&&s(12,H=b.max),"step"in b&&s(13,J=b.step),"orientation"in b&&s(14,$=b.orientation),"dir"in b&&s(15,W=b.dir),"value"in b&&s(9,D=b.value),"onValueChange"in b&&s(16,F=b.onValueChange),"asChild"in b&&s(1,X=b.asChild),"el"in b&&s(0,M=b.el),"$$scope"in b&&s(18,e=b.$$scope)},r.$$.update=()=>{r.$$.dirty&512&&D!==void 0&&A.set(D),r.$$.dirty&1024&&L("disabled",E),r.$$.dirty&2048&&L("min",g),r.$$.dirty&4096&&L("max",H),r.$$.dirty&8192&&L("step",J),r.$$.dirty&16384&&L("orientation",$),r.$$.dirty&32768&&L("dir",W),r.$$.dirty&131072&&s(2,a=u),r.$$.dirty&4&&Object.assign(a,B)},[M,X,a,i,d,ye,we,w,o,D,E,g,H,J,$,W,F,u,e,_,R]}let Ts=class extends Ct{constructor(t){super(),It(this,t,ys,Os,Dt,{disabled:10,min:11,max:12,step:13,orientation:14,dir:15,value:9,onValueChange:16,asChild:1,el:0})}};const Ds=r=>({builder:r&4}),fa=r=>({builder:r[2]});function Cs(r){let t,s,a,n=[r[2],r[4]],o={};for(let u=0;u<n.length;u+=1)o=Ve(o,n[u]);return{c(){t=pe("span"),this.h()},l(u){t=he(u,"SPAN",{}),nt(t).forEach(S),this.h()},h(){Tt(t,o)},m(u,i){v(u,t,i),r[8](t),s||(a=ta(r[2].action(t)),s=!0)},p(u,i){Tt(t,o=zt(n,[i&4&&u[2],i&16&&u[4]]))},i:Te,o:Te,d(u){u&&S(t),r[8](null),s=!1,a()}}}function Is(r){let t;const s=r[7].default,a=Pt(s,r,r[6],fa);return{c(){a&&a.c()},l(n){a&&a.l(n)},m(n,o){a&&a.m(n,o),t=!0},p(n,o){a&&a.p&&(!t||o&68)&&Jt(a,s,n,n[6],t?jt(s,n[6],o,Ds):Gt(n[6]),fa)},i(n){t||(c(a,n),t=!0)},o(n){f(a,n),t=!1},d(n){a&&a.d(n)}}}function Ls(r){let t,s,a,n;const o=[Is,Cs],u=[];function i(d,_){return d[1]?0:1}return t=i(r),s=u[t]=o[t](r),{c(){s.c(),a=Ze()},l(d){s.l(d),a=Ze()},m(d,_){u[t].m(d,_),v(d,a,_),n=!0},p(d,[_]){let e=t;t=i(d),t===e?u[t].p(d,_):(ve(),f(u[e],1,1,()=>{u[e]=null}),be(),s=u[t],s?s.p(d,_):(s=u[t]=o[t](d),s.c()),c(s,1),s.m(a.parentNode,a))},i(d){n||(c(s),n=!0)},o(d){f(s),n=!1},d(d){d&&S(a),u[t].d(d)}}}function Fs(r,t,s){let a;const n=["asChild","el"];let o=vt(t,n),u,{$$slots:i={},$$scope:d}=t,{asChild:_=!1}=t,{el:e=void 0}=t;const{elements:{range:E},getAttrs:g}=Pa();At(r,E,$=>s(5,u=$));const H=g("range");function J($){Wt[$?"unshift":"push"](()=>{e=$,s(0,e)})}return r.$$set=$=>{t=Ve(Ve({},t),Yt($)),s(4,o=vt(t,n)),"asChild"in $&&s(1,_=$.asChild),"el"in $&&s(0,e=$.el),"$$scope"in $&&s(6,d=$.$$scope)},r.$$.update=()=>{r.$$.dirty&32&&s(2,a=u),r.$$.dirty&4&&Object.assign(a,H)},[e,_,a,E,o,u,d,i,J]}class Ms extends Ct{constructor(t){super(),It(this,t,Fs,Ls,Dt,{asChild:1,el:0})}}const ks=r=>({builder:r&4}),Ea=r=>({builder:r[2]});function Hs(r){let t,s,a,n=[r[2],r[4]],o={};for(let u=0;u<n.length;u+=1)o=Ve(o,n[u]);return{c(){t=pe("span"),this.h()},l(u){t=he(u,"SPAN",{}),nt(t).forEach(S),this.h()},h(){Tt(t,o)},m(u,i){v(u,t,i),r[8](t),s||(a=[ta(r[2].action(t)),Ga(t,"m-keydown",r[3])],s=!0)},p(u,i){Tt(t,o=zt(n,[i&4&&u[2],i&16&&u[4]]))},i:Te,o:Te,d(u){u&&S(t),r[8](null),s=!1,ja(a)}}}function Ws(r){let t;const s=r[7].default,a=Pt(s,r,r[6],Ea);return{c(){a&&a.c()},l(n){a&&a.l(n)},m(n,o){a&&a.m(n,o),t=!0},p(n,o){a&&a.p&&(!t||o&68)&&Jt(a,s,n,n[6],t?jt(s,n[6],o,ks):Gt(n[6]),Ea)},i(n){t||(c(a,n),t=!0)},o(n){f(a,n),t=!1},d(n){a&&a.d(n)}}}function Bs(r){let t,s,a,n;const o=[Ws,Hs],u=[];function i(d,_){return d[1]?0:1}return t=i(r),s=u[t]=o[t](r),{c(){s.c(),a=Ze()},l(d){s.l(d),a=Ze()},m(d,_){u[t].m(d,_),v(d,a,_),n=!0},p(d,[_]){let e=t;t=i(d),t===e?u[t].p(d,_):(ve(),f(u[e],1,1,()=>{u[e]=null}),be(),s=u[t],s?s.p(d,_):(s=u[t]=o[t](d),s.c()),c(s,1),s.m(a.parentNode,a))},i(d){n||(c(s),n=!0)},o(d){f(s),n=!1},d(d){d&&S(a),u[t].d(d)}}}function qs(r,t,s){let a;const n=["asChild","el","thumb"];let o=vt(t,n),{$$slots:u={},$$scope:i}=t,{asChild:d=!1}=t,{el:_=void 0}=t,{thumb:e}=t;const{getAttrs:E}=Pa(),g=Ss(),H=E("thumb");function J($){Wt[$?"unshift":"push"](()=>{_=$,s(0,_)})}return r.$$set=$=>{t=Ve(Ve({},t),Yt($)),s(4,o=vt(t,n)),"asChild"in $&&s(1,d=$.asChild),"el"in $&&s(0,_=$.el),"thumb"in $&&s(5,e=$.thumb),"$$scope"in $&&s(6,i=$.$$scope)},r.$$.update=()=>{r.$$.dirty&32&&s(2,a=e),r.$$.dirty&4&&Object.assign(a,H)},[_,d,a,g,o,e,i,u,J]}class Ja extends Ct{constructor(t){super(),It(this,t,qs,Bs,Dt,{asChild:1,el:0,thumb:5})}}function ga(r,t,s){const a=r.slice();return a[5]=t[s],a}function Sa(r){let t,s;return t=new Ja({props:{class:"block h-3 w-3 rounded-full border-2 border-gray-900/50 bg-gray-900 shadow transition-colors active:outline-none active:ring-2 active:ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring disabled:opacity-50 cursor-pointer"}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p:Te,i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function va(r){let t,s;return t=new Ja({props:{thumb:r[5],class:"block h-3 w-3 rounded-full border-2 border-gray-900/50 bg-gray-900 shadow transition-colors active:outline-none active:ring-2 active:ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring disabled:opacity-50 cursor-pointer"}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n&16&&(o.thumb=a[5]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function Vs(r){let t,s,a,n,o;s=new Ms({props:{class:"absolute h-full bg-gray-900 before:block before:absolute before:top-0 before:-left-1.5 before:w-2 before:h-1 before:bg-gray-900 after:block after:absolute after:top-0 after:-right-1 after:w-1 after:h-1 after:bg-gray-900/20 after:-z-10 after:rounded-r-full"}});let u=_a(r[4]??[]),i=[];for(let e=0;e<u.length;e+=1)i[e]=va(ga(r,u,e));const d=e=>f(i[e],1,1,()=>{i[e]=null});let _=null;return u.length||(_=Sa()),{c(){t=pe("span"),N(s.$$.fragment),a=p();for(let e=0;e<i.length;e+=1)i[e].c();n=Ze(),_&&_.c(),this.h()},l(e){t=he(e,"SPAN",{class:!0});var E=nt(t);O(s.$$.fragment,E),E.forEach(S),a=h(e);for(let g=0;g<i.length;g+=1)i[g].l(e);n=Ze(),_&&_.l(e),this.h()},h(){ue(t,"class","relative h-1 w-full grow rounded-l-full bg-gray-900/20 cursor-pointer before:block before:absolute before:-top-4 before:-left-1.5 before:h-9 before:transparent before:z-0 before:w-[calc(100%+0.6rem)]")},m(e,E){v(e,t,E),y(s,t,null),v(e,a,E);for(let g=0;g<i.length;g+=1)i[g]&&i[g].m(e,E);v(e,n,E),_&&_.m(e,E),o=!0},p(e,E){if(E&16){u=_a(e[4]??[]);let g;for(g=0;g<u.length;g+=1){const H=ga(e,u,g);i[g]?(i[g].p(H,E),c(i[g],1)):(i[g]=va(H),i[g].c(),c(i[g],1),i[g].m(n.parentNode,n))}for(ve(),g=u.length;g<i.length;g+=1)d(g);be(),!u.length&&_?_.p(e,E):u.length?_&&(ve(),f(_,1,1,()=>{_=null}),be()):(_=Sa(),_.c(),c(_,1),_.m(n.parentNode,n))}},i(e){if(!o){c(s.$$.fragment,e);for(let E=0;E<u.length;E+=1)c(i[E]);o=!0}},o(e){f(s.$$.fragment,e),i=i.filter(Boolean);for(let E=0;E<i.length;E+=1)f(i[E]);o=!1},d(e){e&&(S(t),S(a),S(n)),T(s),za(i,e),_&&_.d(e)}}}function Us(r){let t,s,a;const n=[{class:ia("relative left-1.5 flex w-full touch-none select-none items-center",r[1])},r[2]];function o(i){r[3](i)}let u={$$slots:{default:[Vs,({thumbs:i})=>({4:i}),({thumbs:i})=>i?16:0]},$$scope:{ctx:r}};for(let i=0;i<n.length;i+=1)u=Ve(u,n[i]);return r[0]!==void 0&&(u.value=r[0]),t=new Ts({props:u}),Wt.push(()=>Va(t,"value",o)),{c(){N(t.$$.fragment)},l(i){O(t.$$.fragment,i)},m(i,d){y(t,i,d),a=!0},p(i,[d]){const _=d&6?zt(n,[d&2&&{class:ia("relative left-1.5 flex w-full touch-none select-none items-center",i[1])},d&4&&as(i[2])]):{};d&272&&(_.$$scope={dirty:d,ctx:i}),!s&&d&1&&(s=!0,_.value=i[0],Ba(()=>s=!1)),t.$set(_)},i(i){a||(c(t.$$.fragment,i),a=!0)},o(i){f(t.$$.fragment,i),a=!1},d(i){T(t,i)}}}function Ys(r,t,s){const a=["class","value"];let n=vt(t,a),{class:o=void 0}=t,{value:u=[0]}=t;function i(d){u=d,s(0,u)}return r.$$set=d=>{t=Ve(Ve({},t),Yt(d)),s(2,n=vt(t,a)),"class"in d&&s(1,o=d.class),"value"in d&&s(0,u=d.value)},[u,o,n,i]}class Ps extends Ct{constructor(t){super(),It(this,t,Ys,Us,Dt,{class:1,value:0})}}function ba(r){let t,s=(r[7]?yt(r[2],r[9]):r[2])+"",a,n,o,u=(r[7]?yt(r[3],r[9]):r[3])+"",i;return{c(){t=pe("span"),a=gt(s),n=p(),o=pe("span"),i=gt(u),this.h()},l(d){t=he(d,"SPAN",{class:!0});var _=nt(t);a=St(_,s),_.forEach(S),n=h(d),o=he(d,"SPAN",{class:!0});var e=nt(o);i=St(e,u),e.forEach(S),this.h()},h(){ue(t,"class","absolute left-0 text-xs pt-1 -z-10"),ue(o,"class","absolute -right-2.5 text-xs pt-1 -z-10")},m(d,_){v(d,t,_),Be(t,a),v(d,n,_),v(d,o,_),Be(o,i)},p(d,_){_&644&&s!==(s=(d[7]?yt(d[2],d[9]):d[2])+"")&&Ht(a,s),_&648&&u!==(u=(d[7]?yt(d[3],d[9]):d[3])+"")&&Ht(i,u)},d(d){d&&(S(t),S(n),S(o))}}}function Js(r){let t,s,a,n,o,u=(r[7]?yt(r[11][r[5]],r[9]):r[11][r[5]])+"",i,d,_,e,E,g,H;function J(D){r[15](D)}let $={min:r[2],max:r[3],step:r[6],sizeClass:r[10]};r[8]!==void 0&&($.value=r[8]),_=new Ps({props:$}),Wt.push(()=>Va(_,"value",J));let W=r[0]&&ba(r);return{c(){t=pe("div"),s=pe("p"),a=gt(r[4]),n=gt(` :
			`),o=pe("span"),i=gt(u),d=p(),N(_.$$.fragment),E=p(),W&&W.c(),this.h()},l(D){t=he(D,"DIV",{class:!0});var F=nt(t);s=he(F,"P",{class:!0});var X=nt(s);a=St(X,r[4]),n=St(X,` :
			`),o=he(X,"SPAN",{class:!0});var M=nt(o);i=St(M,u),M.forEach(S),X.forEach(S),d=h(F),O(_.$$.fragment,F),E=h(F),W&&W.l(F),F.forEach(S),this.h()},h(){ue(o,"class","text-xs"),ue(s,"class","pb-2 truncate text-xs"),ue(t,"class",g=`relative ${r[10]} mb-10 select-none`)},m(D,F){v(D,t,F),Be(t,s),Be(s,a),Be(s,n),Be(s,o),Be(o,i),Be(t,d),y(_,t,null),Be(t,E),W&&W.m(t,null),H=!0},p(D,F){(!H||F&16)&&Ht(a,D[4]),(!H||F&2720)&&u!==(u=(D[7]?yt(D[11][D[5]],D[9]):D[11][D[5]])+"")&&Ht(i,u);const X={};F&4&&(X.min=D[2]),F&8&&(X.max=D[3]),F&64&&(X.step=D[6]),F&1024&&(X.sizeClass=D[10]),!e&&F&256&&(e=!0,X.value=D[8],Ba(()=>e=!1)),_.$set(X),D[0]?W?W.p(D,F):(W=ba(D),W.c(),W.m(t,null)):W&&(W.d(1),W=null),(!H||F&1024&&g!==(g=`relative ${D[10]} mb-10 select-none`))&&ue(t,"class",g)},i(D){H||(c(_.$$.fragment,D),H=!0)},o(D){f(_.$$.fragment,D),H=!1},d(D){D&&S(t),T(_),W&&W.d()}}}function Gs(r){let t,s;return t=new vs({props:{enabled:r[1],$$slots:{default:[Js]},$$scope:{ctx:r}}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,[n]){const o={};n&2&&(o.enabled=a[1]),n&135165&&(o.$$scope={dirty:n,ctx:a}),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function js(r,t,s){let a,n;const o=Wa(Ua);At(r,o,M=>s(11,n=M));let{title:u}=t,{name:i}=t,{min:d=0}=t;if(d){if(d=Number(d),isNaN(d))throw Error("min must be a number")}else d=0;let{max:_=100}=t;if(_){if(_=Number(_),isNaN(_))throw Error("max must be a number");if(_<d)throw Error("max cannot be less than min")}else _=100;let{step:e}=t,{showMaxMin:E=!0}=t,{hideDuringPrint:g=!0}=t,{defaultValue:H=0}=t,J=[H],{fmt:$=void 0}=t,{size:W=""}=t;const D=M=>({medium:"w-64",large:"w-96",full:"w-[calc(100%-0.6rem)]"})[M.toLowerCase()]||"w-40";let F;function X(M){J=M,s(8,J)}return r.$$set=M=>{"title"in M&&s(4,u=M.title),"name"in M&&s(5,i=M.name),"min"in M&&s(2,d=M.min),"max"in M&&s(3,_=M.max),"step"in M&&s(6,e=M.step),"showMaxMin"in M&&s(0,E=M.showMaxMin),"hideDuringPrint"in M&&s(1,g=M.hideDuringPrint),"defaultValue"in M&&s(13,H=M.defaultValue),"fmt"in M&&s(7,$=M.fmt),"size"in M&&s(14,W=M.size)},r.$$.update=()=>{r.$$.dirty&1&&s(0,E=E==="true"||E===!0),r.$$.dirty&2&&s(1,g=g==="true"||g===!0),r.$$.dirty&288&&qa(o,n[i]=J,n),r.$$.dirty&16384&&s(10,a=D(W)),r.$$.dirty&128&&($?s(9,F=bs($,"number")):s(9,F=void 0))},[E,g,d,_,u,i,e,$,J,F,a,n,o,H,W,X]}class zs extends Ct{constructor(t){super(),It(this,t,js,Gs,Dt,{title:4,name:5,min:2,max:3,step:6,showMaxMin:0,hideDuringPrint:1,defaultValue:13,fmt:7,size:14})}}function Qs(r){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:Te,p:Te,d:Te}}function $a(r){let t,s;return t=new Ae({props:{queryID:"elo_history",queryResult:r[2]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&4&&(o.queryResult=a[2]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function pa(r){let t,s;return t=new Ae({props:{queryID:"seasons",queryResult:r[3]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&8&&(o.queryResult=a[3]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function ha(r){let t,s;return t=new Ae({props:{queryID:"team1",queryResult:r[4]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&16&&(o.queryResult=a[4]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function wa(r){let t,s;return t=new Ae({props:{queryID:"team2",queryResult:r[5]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&32&&(o.queryResult=a[5]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function Xs(r){let t,s;return t=new qe({props:{valueLabel:"1986",value:"1986"}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p:Te,i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function Ks(r){let t,s;return t=new qe({props:{valueLabel:"BOS",value:"BOS"}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p:Te,i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function Zs(r){let t,s;return t=new qe({props:{valueLabel:"1996",value:"1996"}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p:Te,i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function xs(r){let t,s;return t=new qe({props:{valueLabel:"CHI",value:"CHI"}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p:Te,i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function Aa(r){let t,s;return t=new Ae({props:{queryID:"team1_history",queryResult:r[6]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&64&&(o.queryResult=a[6]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function Ra(r){let t,s;return t=new Ae({props:{queryID:"team2_history",queryResult:r[7]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&128&&(o.queryResult=a[7]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function Na(r){let t,s;return t=new Ae({props:{queryID:"team1_stats",queryResult:r[8]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&256&&(o.queryResult=a[8]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function Oa(r){let t,s;return t=new Ae({props:{queryID:"team2_stats",queryResult:r[9]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&512&&(o.queryResult=a[9]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function ya(r){let t,s;return t=new Ae({props:{queryID:"stat_table",queryResult:r[10]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&1024&&(o.queryResult=a[10]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function er(r){let t,s,a,n,o,u,i,d,_,e;return t=new Mt({props:{id:"t1",align:"center",title:" "}}),a=new Mt({props:{id:"team1",align:"right",title:r[0].team1_season_dd.value+" "+r[0].team1_dd.value}}),o=new Mt({props:{id:"stat",align:"center",title:"category"}}),i=new Mt({props:{id:"team2",align:"left",title:r[0].team2_season_dd.value+" "+r[0].team2_dd.value}}),_=new Mt({props:{id:"t2",align:"center",title:" "}}),{c(){N(t.$$.fragment),s=p(),N(a.$$.fragment),n=p(),N(o.$$.fragment),u=p(),N(i.$$.fragment),d=p(),N(_.$$.fragment)},l(E){O(t.$$.fragment,E),s=h(E),O(a.$$.fragment,E),n=h(E),O(o.$$.fragment,E),u=h(E),O(i.$$.fragment,E),d=h(E),O(_.$$.fragment,E)},m(E,g){y(t,E,g),v(E,s,g),y(a,E,g),v(E,n,g),y(o,E,g),v(E,u,g),y(i,E,g),v(E,d,g),y(_,E,g),e=!0},p(E,g){const H={};g[0]&1&&(H.title=E[0].team1_season_dd.value+" "+E[0].team1_dd.value),a.$set(H);const J={};g[0]&1&&(J.title=E[0].team2_season_dd.value+" "+E[0].team2_dd.value),i.$set(J)},i(E){e||(c(t.$$.fragment,E),c(a.$$.fragment,E),c(o.$$.fragment,E),c(i.$$.fragment,E),c(_.$$.fragment,E),e=!0)},o(E){f(t.$$.fragment,E),f(a.$$.fragment,E),f(o.$$.fragment,E),f(i.$$.fragment,E),f(_.$$.fragment,E),e=!1},d(E){E&&(S(s),S(n),S(u),S(d)),T(t,E),T(a,E),T(o,E),T(i,E),T(_,E)}}}function Ta(r){let t,s;return t=new Ae({props:{queryID:"team1_trend",queryResult:r[11]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&2048&&(o.queryResult=a[11]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function Da(r){let t,s;return t=new Ae({props:{queryID:"team2_trend",queryResult:r[12]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&4096&&(o.queryResult=a[12]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function Ca(r){let t,s;return t=new Ae({props:{queryID:"combined_trend",queryResult:r[1]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&2&&(o.queryResult=a[1]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function tr(r){let t,s,a,n,o,u,i,d;return t=new qe({props:{valueLabel:"0",value:"0"}}),a=new qe({props:{valueLabel:"1",value:"1"}}),o=new qe({props:{valueLabel:"2",value:"2"}}),i=new qe({props:{valueLabel:"3",value:"3"}}),{c(){N(t.$$.fragment),s=p(),N(a.$$.fragment),n=p(),N(o.$$.fragment),u=p(),N(i.$$.fragment)},l(_){O(t.$$.fragment,_),s=h(_),O(a.$$.fragment,_),n=h(_),O(o.$$.fragment,_),u=h(_),O(i.$$.fragment,_)},m(_,e){y(t,_,e),v(_,s,e),y(a,_,e),v(_,n,e),y(o,_,e),v(_,u,e),y(i,_,e),d=!0},p:Te,i(_){d||(c(t.$$.fragment,_),c(a.$$.fragment,_),c(o.$$.fragment,_),c(i.$$.fragment,_),d=!0)},o(_){f(t.$$.fragment,_),f(a.$$.fragment,_),f(o.$$.fragment,_),f(i.$$.fragment,_),d=!1},d(_){_&&(S(s),S(n),S(u)),T(t,_),T(a,_),T(o,_),T(i,_)}}}function ar(r){let t,s,a,n,o,u,i,d;return t=new qe({props:{valueLabel:"0",value:"0"}}),a=new qe({props:{valueLabel:"1",value:"1"}}),o=new qe({props:{valueLabel:"2",value:"2"}}),i=new qe({props:{valueLabel:"3",value:"3"}}),{c(){N(t.$$.fragment),s=p(),N(a.$$.fragment),n=p(),N(o.$$.fragment),u=p(),N(i.$$.fragment)},l(_){O(t.$$.fragment,_),s=h(_),O(a.$$.fragment,_),n=h(_),O(o.$$.fragment,_),u=h(_),O(i.$$.fragment,_)},m(_,e){y(t,_,e),v(_,s,e),y(a,_,e),v(_,n,e),y(o,_,e),v(_,u,e),y(i,_,e),d=!0},p:Te,i(_){d||(c(t.$$.fragment,_),c(a.$$.fragment,_),c(o.$$.fragment,_),c(i.$$.fragment,_),d=!0)},o(_){f(t.$$.fragment,_),f(a.$$.fragment,_),f(o.$$.fragment,_),f(i.$$.fragment,_),d=!1},d(_){_&&(S(s),S(n),S(u)),T(t,_),T(a,_),T(o,_),T(i,_)}}}function Ia(r){let t,s;return t=new Ae({props:{queryID:"elo_by_team",queryResult:r[13]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&8192&&(o.queryResult=a[13]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function La(r){let t,s;return t=new Ae({props:{queryID:"games",queryResult:r[14]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&16384&&(o.queryResult=a[14]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function Fa(r){let t,s;return t=new Ae({props:{queryID:"monte_carlo_sim",queryResult:r[15]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&32768&&(o.queryResult=a[15]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function Ma(r){let t,s;return t=new Ae({props:{queryID:"monte_carlo_winners",queryResult:r[16]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&65536&&(o.queryResult=a[16]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function ka(r){let t,s;return t=new Ae({props:{queryID:"mc_final_results",queryResult:r[17]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&131072&&(o.queryResult=a[17]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function Ha(r){let t,s;return t=new Ae({props:{queryID:"mc_summary",queryResult:r[18]}}),{c(){N(t.$$.fragment)},l(a){O(t.$$.fragment,a)},m(a,n){y(t,a,n),s=!0},p(a,n){const o={};n[0]&262144&&(o.queryResult=a[18]),t.$set(o)},i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){f(t.$$.fragment,a),s=!1},d(a){T(t,a)}}}function sr(r){let t,s,a,n,o,u,i='<a href="#historical-matchups">Historical Matchups</a>',d,_,e="Ever wondered if the '86 Celtics could beat the '96 Bulls? Wonder no more!",E,g,H,J,$,W,D,F,X,M,ye,we,w,A,L,k,B,R,b,P='<a href="#head-to-head-stats">Head to Head Stats</a>',G,j,Re,V,U='<a href="#elo-trends">Elo Trends</a>',C,Y,z,$e,Ne,de,Q,Oe='<a href="#7-games-series-results">7 Games Series Results</a>',De,Ce,xe="This is a 10k iteration monte carlo sim, calculated in browser using DuckDB WASM.",Me,Ie,it,Ue,et,Ye,Pe,ze,tt,Je,Ge,Le,_t,je,at,Fe,bt='<em class="markdown">If you don&#39;t like the current results, you can modify the elo inputs with this slider.</em>',ot,ke,$t='<a href="#elo-slider">Elo Slider</a>',st,He,mt,pt,rt,Qe=r[0].elo_slider+"",Xe,lt,ut;function Rt(l,m){return Qs}let Ke=Rt()(r),ie=r[2]&&$a(r),ce=r[3]&&pa(r),K=r[4]&&ha(r),Z=r[5]&&wa(r);W=new Ot({props:{data:r[3],name:"team1_season_dd",value:"season",title:"Team 1 Year",$$slots:{default:[Xs]},$$scope:{ctx:r}}}),F=new Ot({props:{data:r[4],name:"team1_dd",value:"team",title:"Team 1",$$slots:{default:[Ks]},$$scope:{ctx:r}}}),M=new Ot({props:{data:r[3],name:"team2_season_dd",value:"season",title:"Team 2 Year",$$slots:{default:[Zs]},$$scope:{ctx:r}}}),we=new Ot({props:{data:r[5],name:"team2_dd",value:"team",title:"Team 2",$$slots:{default:[xs]},$$scope:{ctx:r}}});let x=r[6]&&Aa(r),_e=r[7]&&Ra(r),fe=r[8]&&Na(r),ee=r[9]&&Oa(r),te=r[10]&&ya(r);j=new is({props:{data:r[10],rows:"all",$$slots:{default:[er]},$$scope:{ctx:r}}});let ae=r[11]&&Ta(r),oe=r[12]&&Da(r),Ee=r[1]&&Ca(r);Ne=new os({props:{data:r[1],x:"game_id",y:"elo",title:"elo change over time",series:"team",yMin:parseFloat(r[19])-25,xAxisTitle:"games played",handleMissing:"connect",colorPalette:["#29BDAD","#DE4500"]}}),Ie=new Ot({props:{title:"Team 1 wins",name:"team_1_wins",$$slots:{default:[tr]},$$scope:{ctx:r}}}),Ue=new Ot({props:{title:"Team 2 wins",name:"team_2_wins",$$slots:{default:[ar]},$$scope:{ctx:r}}});let se=r[13]&&Ia(r),re=r[14]&&La(r),le=r[15]&&Fa(r),me=r[16]&&Ma(r),ge=r[17]&&ka(r),ne=r[18]&&Ha(r);return Le=new ua({props:{data:r[18],x:"winning_team",y:"occurances_pct1",series:"result",xAxisTitle:"games_played",title:"Outcome by Team",labels:"true",swapXY:"true"}}),je=new ua({props:{data:r[18],x:"result",y:"occurances_pct1",series:"winning_team",xAxisTitle:"games_played",title:"Outcomes by Series Result",type:"grouped",labels:"true",sort:"false",swapXY:"true"}}),He=new zs({props:{name:"elo_slider",value:"score",current:"0",title:"elo slider"}}),{c(){t=p(),Ke.c(),s=pe("meta"),a=pe("meta"),n=Ze(),o=p(),u=pe("h1"),u.innerHTML=i,d=p(),_=pe("p"),_.textContent=e,E=p(),ie&&ie.c(),g=p(),ce&&ce.c(),H=p(),K&&K.c(),J=p(),Z&&Z.c(),$=p(),N(W.$$.fragment),D=p(),N(F.$$.fragment),X=p(),N(M.$$.fragment),ye=p(),N(we.$$.fragment),w=p(),x&&x.c(),A=p(),_e&&_e.c(),L=p(),fe&&fe.c(),k=p(),ee&&ee.c(),B=p(),te&&te.c(),R=p(),b=pe("h2"),b.innerHTML=P,G=p(),N(j.$$.fragment),Re=p(),V=pe("h2"),V.innerHTML=U,C=p(),ae&&ae.c(),Y=p(),oe&&oe.c(),z=p(),Ee&&Ee.c(),$e=p(),N(Ne.$$.fragment),de=p(),Q=pe("h2"),Q.innerHTML=Oe,De=p(),Ce=pe("p"),Ce.textContent=xe,Me=p(),N(Ie.$$.fragment),it=p(),N(Ue.$$.fragment),et=p(),se&&se.c(),Ye=p(),re&&re.c(),Pe=p(),le&&le.c(),ze=p(),me&&me.c(),tt=p(),ge&&ge.c(),Je=p(),ne&&ne.c(),Ge=p(),N(Le.$$.fragment),_t=p(),N(je.$$.fragment),at=p(),Fe=pe("p"),Fe.innerHTML=bt,ot=p(),ke=pe("h3"),ke.innerHTML=$t,st=p(),N(He.$$.fragment),mt=p(),pt=pe("br"),rt=gt(`
The current value is `),Xe=gt(Qe),lt=gt("."),this.h()},l(l){t=h(l);const m=Qa("svelte-1j2izld",document.head);Ke.l(m),s=he(m,"META",{name:!0,content:!0}),a=he(m,"META",{name:!0,content:!0}),n=Ze(),m.forEach(S),o=h(l),u=he(l,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Et(u)!=="svelte-m8tlbj"&&(u.innerHTML=i),d=h(l),_=he(l,"P",{class:!0,"data-svelte-h":!0}),Et(_)!=="svelte-1xg6khx"&&(_.textContent=e),E=h(l),ie&&ie.l(l),g=h(l),ce&&ce.l(l),H=h(l),K&&K.l(l),J=h(l),Z&&Z.l(l),$=h(l),O(W.$$.fragment,l),D=h(l),O(F.$$.fragment,l),X=h(l),O(M.$$.fragment,l),ye=h(l),O(we.$$.fragment,l),w=h(l),x&&x.l(l),A=h(l),_e&&_e.l(l),L=h(l),fe&&fe.l(l),k=h(l),ee&&ee.l(l),B=h(l),te&&te.l(l),R=h(l),b=he(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Et(b)!=="svelte-1bk2bg0"&&(b.innerHTML=P),G=h(l),O(j.$$.fragment,l),Re=h(l),V=he(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Et(V)!=="svelte-1b0adum"&&(V.innerHTML=U),C=h(l),ae&&ae.l(l),Y=h(l),oe&&oe.l(l),z=h(l),Ee&&Ee.l(l),$e=h(l),O(Ne.$$.fragment,l),de=h(l),Q=he(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Et(Q)!=="svelte-uoghfb"&&(Q.innerHTML=Oe),De=h(l),Ce=he(l,"P",{class:!0,"data-svelte-h":!0}),Et(Ce)!=="svelte-1l9g9kn"&&(Ce.textContent=xe),Me=h(l),O(Ie.$$.fragment,l),it=h(l),O(Ue.$$.fragment,l),et=h(l),se&&se.l(l),Ye=h(l),re&&re.l(l),Pe=h(l),le&&le.l(l),ze=h(l),me&&me.l(l),tt=h(l),ge&&ge.l(l),Je=h(l),ne&&ne.l(l),Ge=h(l),O(Le.$$.fragment,l),_t=h(l),O(je.$$.fragment,l),at=h(l),Fe=he(l,"P",{class:!0,"data-svelte-h":!0}),Et(Fe)!=="svelte-vxp8ge"&&(Fe.innerHTML=bt),ot=h(l),ke=he(l,"H3",{class:!0,id:!0,"data-svelte-h":!0}),Et(ke)!=="svelte-12vt0x5"&&(ke.innerHTML=$t),st=h(l),O(He.$$.fragment,l),mt=h(l),pt=he(l,"BR",{}),rt=St(l,`
The current value is `),Xe=St(l,Qe),lt=St(l,"."),this.h()},h(){ue(s,"name","twitter:card"),ue(s,"content","summary"),ue(a,"name","twitter:site"),ue(a,"content","@evidence_dev"),ue(u,"class","markdown"),ue(u,"id","historical-matchups"),ue(_,"class","markdown"),ue(b,"class","markdown"),ue(b,"id","head-to-head-stats"),ue(V,"class","markdown"),ue(V,"id","elo-trends"),ue(Q,"class","markdown"),ue(Q,"id","7-games-series-results"),ue(Ce,"class","markdown"),ue(Fe,"class","markdown"),ue(ke,"class","markdown"),ue(ke,"id","elo-slider")},m(l,m){v(l,t,m),Ke.m(document.head,null),Be(document.head,s),Be(document.head,a),Be(document.head,n),v(l,o,m),v(l,u,m),v(l,d,m),v(l,_,m),v(l,E,m),ie&&ie.m(l,m),v(l,g,m),ce&&ce.m(l,m),v(l,H,m),K&&K.m(l,m),v(l,J,m),Z&&Z.m(l,m),v(l,$,m),y(W,l,m),v(l,D,m),y(F,l,m),v(l,X,m),y(M,l,m),v(l,ye,m),y(we,l,m),v(l,w,m),x&&x.m(l,m),v(l,A,m),_e&&_e.m(l,m),v(l,L,m),fe&&fe.m(l,m),v(l,k,m),ee&&ee.m(l,m),v(l,B,m),te&&te.m(l,m),v(l,R,m),v(l,b,m),v(l,G,m),y(j,l,m),v(l,Re,m),v(l,V,m),v(l,C,m),ae&&ae.m(l,m),v(l,Y,m),oe&&oe.m(l,m),v(l,z,m),Ee&&Ee.m(l,m),v(l,$e,m),y(Ne,l,m),v(l,de,m),v(l,Q,m),v(l,De,m),v(l,Ce,m),v(l,Me,m),y(Ie,l,m),v(l,it,m),y(Ue,l,m),v(l,et,m),se&&se.m(l,m),v(l,Ye,m),re&&re.m(l,m),v(l,Pe,m),le&&le.m(l,m),v(l,ze,m),me&&me.m(l,m),v(l,tt,m),ge&&ge.m(l,m),v(l,Je,m),ne&&ne.m(l,m),v(l,Ge,m),y(Le,l,m),v(l,_t,m),y(je,l,m),v(l,at,m),v(l,Fe,m),v(l,ot,m),v(l,ke,m),v(l,st,m),y(He,l,m),v(l,mt,m),v(l,pt,m),v(l,rt,m),v(l,Xe,m),v(l,lt,m),ut=!0},p(l,m){Ke.p(l,m),l[2]?ie?(ie.p(l,m),m[0]&4&&c(ie,1)):(ie=$a(l),ie.c(),c(ie,1),ie.m(g.parentNode,g)):ie&&(ve(),f(ie,1,1,()=>{ie=null}),be()),l[3]?ce?(ce.p(l,m),m[0]&8&&c(ce,1)):(ce=pa(l),ce.c(),c(ce,1),ce.m(H.parentNode,H)):ce&&(ve(),f(ce,1,1,()=>{ce=null}),be()),l[4]?K?(K.p(l,m),m[0]&16&&c(K,1)):(K=ha(l),K.c(),c(K,1),K.m(J.parentNode,J)):K&&(ve(),f(K,1,1,()=>{K=null}),be()),l[5]?Z?(Z.p(l,m),m[0]&32&&c(Z,1)):(Z=wa(l),Z.c(),c(Z,1),Z.m($.parentNode,$)):Z&&(ve(),f(Z,1,1,()=>{Z=null}),be());const ht={};m[0]&8&&(ht.data=l[3]),m[3]&8192&&(ht.$$scope={dirty:m,ctx:l}),W.$set(ht);const Nt={};m[0]&16&&(Nt.data=l[4]),m[3]&8192&&(Nt.$$scope={dirty:m,ctx:l}),F.$set(Nt);const dt={};m[0]&8&&(dt.data=l[3]),m[3]&8192&&(dt.$$scope={dirty:m,ctx:l}),M.$set(dt);const ct={};m[0]&32&&(ct.data=l[5]),m[3]&8192&&(ct.$$scope={dirty:m,ctx:l}),we.$set(ct),l[6]?x?(x.p(l,m),m[0]&64&&c(x,1)):(x=Aa(l),x.c(),c(x,1),x.m(A.parentNode,A)):x&&(ve(),f(x,1,1,()=>{x=null}),be()),l[7]?_e?(_e.p(l,m),m[0]&128&&c(_e,1)):(_e=Ra(l),_e.c(),c(_e,1),_e.m(L.parentNode,L)):_e&&(ve(),f(_e,1,1,()=>{_e=null}),be()),l[8]?fe?(fe.p(l,m),m[0]&256&&c(fe,1)):(fe=Na(l),fe.c(),c(fe,1),fe.m(k.parentNode,k)):fe&&(ve(),f(fe,1,1,()=>{fe=null}),be()),l[9]?ee?(ee.p(l,m),m[0]&512&&c(ee,1)):(ee=Oa(l),ee.c(),c(ee,1),ee.m(B.parentNode,B)):ee&&(ve(),f(ee,1,1,()=>{ee=null}),be()),l[10]?te?(te.p(l,m),m[0]&1024&&c(te,1)):(te=ya(l),te.c(),c(te,1),te.m(R.parentNode,R)):te&&(ve(),f(te,1,1,()=>{te=null}),be());const ft={};m[0]&1024&&(ft.data=l[10]),m[0]&1|m[3]&8192&&(ft.$$scope={dirty:m,ctx:l}),j.$set(ft),l[11]?ae?(ae.p(l,m),m[0]&2048&&c(ae,1)):(ae=Ta(l),ae.c(),c(ae,1),ae.m(Y.parentNode,Y)):ae&&(ve(),f(ae,1,1,()=>{ae=null}),be()),l[12]?oe?(oe.p(l,m),m[0]&4096&&c(oe,1)):(oe=Da(l),oe.c(),c(oe,1),oe.m(z.parentNode,z)):oe&&(ve(),f(oe,1,1,()=>{oe=null}),be()),l[1]?Ee?(Ee.p(l,m),m[0]&2&&c(Ee,1)):(Ee=Ca(l),Ee.c(),c(Ee,1),Ee.m($e.parentNode,$e)):Ee&&(ve(),f(Ee,1,1,()=>{Ee=null}),be());const wt={};m[0]&2&&(wt.data=l[1]),m[0]&524288&&(wt.yMin=parseFloat(l[19])-25),Ne.$set(wt);const Ft={};m[3]&8192&&(Ft.$$scope={dirty:m,ctx:l}),Ie.$set(Ft);const I={};m[3]&8192&&(I.$$scope={dirty:m,ctx:l}),Ue.$set(I),l[13]?se?(se.p(l,m),m[0]&8192&&c(se,1)):(se=Ia(l),se.c(),c(se,1),se.m(Ye.parentNode,Ye)):se&&(ve(),f(se,1,1,()=>{se=null}),be()),l[14]?re?(re.p(l,m),m[0]&16384&&c(re,1)):(re=La(l),re.c(),c(re,1),re.m(Pe.parentNode,Pe)):re&&(ve(),f(re,1,1,()=>{re=null}),be()),l[15]?le?(le.p(l,m),m[0]&32768&&c(le,1)):(le=Fa(l),le.c(),c(le,1),le.m(ze.parentNode,ze)):le&&(ve(),f(le,1,1,()=>{le=null}),be()),l[16]?me?(me.p(l,m),m[0]&65536&&c(me,1)):(me=Ma(l),me.c(),c(me,1),me.m(tt.parentNode,tt)):me&&(ve(),f(me,1,1,()=>{me=null}),be()),l[17]?ge?(ge.p(l,m),m[0]&131072&&c(ge,1)):(ge=ka(l),ge.c(),c(ge,1),ge.m(Je.parentNode,Je)):ge&&(ve(),f(ge,1,1,()=>{ge=null}),be()),l[18]?ne?(ne.p(l,m),m[0]&262144&&c(ne,1)):(ne=Ha(l),ne.c(),c(ne,1),ne.m(Ge.parentNode,Ge)):ne&&(ve(),f(ne,1,1,()=>{ne=null}),be());const Bt={};m[0]&262144&&(Bt.data=l[18]),Le.$set(Bt);const aa={};m[0]&262144&&(aa.data=l[18]),je.$set(aa),(!ut||m[0]&1)&&Qe!==(Qe=l[0].elo_slider+"")&&Ht(Xe,Qe)},i(l){ut||(c(ie),c(ce),c(K),c(Z),c(W.$$.fragment,l),c(F.$$.fragment,l),c(M.$$.fragment,l),c(we.$$.fragment,l),c(x),c(_e),c(fe),c(ee),c(te),c(j.$$.fragment,l),c(ae),c(oe),c(Ee),c(Ne.$$.fragment,l),c(Ie.$$.fragment,l),c(Ue.$$.fragment,l),c(se),c(re),c(le),c(me),c(ge),c(ne),c(Le.$$.fragment,l),c(je.$$.fragment,l),c(He.$$.fragment,l),ut=!0)},o(l){f(ie),f(ce),f(K),f(Z),f(W.$$.fragment,l),f(F.$$.fragment,l),f(M.$$.fragment,l),f(we.$$.fragment,l),f(x),f(_e),f(fe),f(ee),f(te),f(j.$$.fragment,l),f(ae),f(oe),f(Ee),f(Ne.$$.fragment,l),f(Ie.$$.fragment,l),f(Ue.$$.fragment,l),f(se),f(re),f(le),f(me),f(ge),f(ne),f(Le.$$.fragment,l),f(je.$$.fragment,l),f(He.$$.fragment,l),ut=!1},d(l){l&&(S(t),S(o),S(u),S(d),S(_),S(E),S(g),S(H),S(J),S($),S(D),S(X),S(ye),S(w),S(A),S(L),S(k),S(B),S(R),S(b),S(G),S(Re),S(V),S(C),S(Y),S(z),S($e),S(de),S(Q),S(De),S(Ce),S(Me),S(it),S(et),S(Ye),S(Pe),S(ze),S(tt),S(Je),S(Ge),S(_t),S(at),S(Fe),S(ot),S(ke),S(st),S(mt),S(pt),S(rt),S(Xe),S(lt)),Ke.d(l),S(s),S(a),S(n),ie&&ie.d(l),ce&&ce.d(l),K&&K.d(l),Z&&Z.d(l),T(W,l),T(F,l),T(M,l),T(we,l),x&&x.d(l),_e&&_e.d(l),fe&&fe.d(l),ee&&ee.d(l),te&&te.d(l),T(j,l),ae&&ae.d(l),oe&&oe.d(l),Ee&&Ee.d(l),T(Ne,l),T(Ie,l),T(Ue,l),se&&se.d(l),re&&re.d(l),le&&le.d(l),me&&me.d(l),ge&&ge.d(l),ne&&ne.d(l),T(Le,l),T(je,l),T(He,l)}}}function rr(r,t,s){let a,n,o;At(r,_s,I=>s(58,n=I)),At(r,oa,I=>s(82,o=I));let{data:u}=t,{data:i={},customFormattingSettings:d,__db:_,inputs:e}=u;qa(oa,o="c39b2b8542cb1863eda7ce3ad9da3950",o);let E=kt(e);ea(Ua,E),Xa(E.subscribe(I=>s(0,e=I))),ea(ls,{getCustomFormats:()=>d.customFormats||[]});const g=(I,Bt)=>ms(_.query,I,{query_name:Bt});ss(g);let H;const J=()=>{H||(H=setTimeout(()=>{ma.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},$=()=>{H?(clearTimeout(H),H=null):ma.dismiss("LoadingToast")};sa(()=>(Se.addEventListener("inFlightQueryStart",J),Se.addEventListener("inFlightQueryEnd",$),Se.QueriesLoading&&J(),()=>{Se.removeEventListener("inFlightQueryStart",J),Se.removeEventListener("inFlightQueryEnd",$)})),n.params,sa(()=>!0);let W={initialData:void 0,initialError:void 0},D=q`from src_nba_elo_history`,F="from src_nba_elo_history";i.elo_history&&(i.elo_history instanceof Error?W.initialError=i.elo_history:W.initialData=i.elo_history);let X;const M=Se.createReactive({callback:I=>{s(2,X=I)},execFn:g},{id:"elo_history",initialData:W.initialData,initialError:W.initialError});M(F,{noResolve:D}),globalThis[Symbol.for("elo_history")]={get value(){return X}};let ye={initialData:void 0,initialError:void 0},we=q`select A.season
    from src_nba_seasons A
    order by A.season`,w=`select A.season
    from src_nba_seasons A
    order by A.season`;i.seasons&&(i.seasons instanceof Error?ye.initialError=i.seasons:ye.initialData=i.seasons);let A;const L=Se.createReactive({callback:I=>{s(3,A=I)},execFn:g},{id:"seasons",initialData:ye.initialData,initialError:ye.initialError});L(w,{noResolve:we}),globalThis[Symbol.for("seasons")]={get value(){return A}};let k={initialData:void 0,initialError:void 0},B=q`select C.*
    from src_nba_season_teams C
    where C.season = ${e.team1_season_dd.value}
    group by all
    order by C.team`,R=`select C.*
    from src_nba_season_teams C
    where C.season = ${e.team1_season_dd.value}
    group by all
    order by C.team`;i.team1&&(i.team1 instanceof Error?k.initialError=i.team1:k.initialData=i.team1);let b;const P=Se.createReactive({callback:I=>{s(4,b=I)},execFn:g},{id:"team1",initialData:k.initialData,initialError:k.initialError});P(R,{noResolve:B}),globalThis[Symbol.for("team1")]={get value(){return b}};let G={initialData:void 0,initialError:void 0},j=q`select C.* 
    from src_nba_season_teams C
    where C.season = ${e.team2_season_dd.value}
    group by all
    order by C.team`,Re=`select C.* 
    from src_nba_season_teams C
    where C.season = ${e.team2_season_dd.value}
    group by all
    order by C.team`;i.team2&&(i.team2 instanceof Error?G.initialError=i.team2:G.initialData=i.team2);let V;const U=Se.createReactive({callback:I=>{s(5,V=I)},execFn:g},{id:"team2",initialData:G.initialData,initialError:G.initialError});U(Re,{noResolve:j}),globalThis[Symbol.for("team2")]={get value(){return V}};let C={initialData:void 0,initialError:void 0},Y=q`select * from (from src_nba_elo_history)
    where season = ${e.team1_season_dd.value}
       and ( team1 = '${e.team1_dd.value}' OR team2 = '${e.team1_dd.value}')
    order by date`,z=`select * from (from src_nba_elo_history)
    where season = ${e.team1_season_dd.value}
       and ( team1 = '${e.team1_dd.value}' OR team2 = '${e.team1_dd.value}')
    order by date`;i.team1_history&&(i.team1_history instanceof Error?C.initialError=i.team1_history:C.initialData=i.team1_history);let $e;const Ne=Se.createReactive({callback:I=>{s(6,$e=I)},execFn:g},{id:"team1_history",initialData:C.initialData,initialError:C.initialError});Ne(z,{noResolve:Y}),globalThis[Symbol.for("team1_history")]={get value(){return $e}};let de={initialData:void 0,initialError:void 0},Q=q`select * from (from src_nba_elo_history)
    where season = ${e.team2_season_dd.value}
        and ( team1 = '${e.team2_dd.value}' OR team2 = '${e.team2_dd.value}')
    order by date`,Oe=`select * from (from src_nba_elo_history)
    where season = ${e.team2_season_dd.value}
        and ( team1 = '${e.team2_dd.value}' OR team2 = '${e.team2_dd.value}')
    order by date`;i.team2_history&&(i.team2_history instanceof Error?de.initialError=i.team2_history:de.initialData=i.team2_history);let De;const Ce=Se.createReactive({callback:I=>{s(7,De=I)},execFn:g},{id:"team2_history",initialData:de.initialData,initialError:de.initialError});Ce(Oe,{noResolve:Q}),globalThis[Symbol.for("team2_history")]={get value(){return De}};let xe={initialData:void 0,initialError:void 0},Me=q`select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}`,Ie=`select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}`;i.team1_stats&&(i.team1_stats instanceof Error?xe.initialError=i.team1_stats:xe.initialData=i.team1_stats);let it;const Ue=Se.createReactive({callback:I=>{s(8,it=I)},execFn:g},{id:"team1_stats",initialData:xe.initialData,initialError:xe.initialError});Ue(Ie,{noResolve:Me}),globalThis[Symbol.for("team1_stats")]={get value(){return it}};let et={initialData:void 0,initialError:void 0},Ye=q`select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}`,Pe=`select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}`;i.team2_stats&&(i.team2_stats instanceof Error?et.initialError=i.team2_stats:et.initialData=i.team2_stats);let ze;const tt=Se.createReactive({callback:I=>{s(9,ze=I)},execFn:g},{id:"team2_stats",initialData:et.initialData,initialError:et.initialError});tt(Pe,{noResolve:Ye}),globalThis[Symbol.for("team2_stats")]={get value(){return ze}};let Je={initialData:void 0,initialError:void 0},Ge=q`with cte_combined as (
        select * from (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value})
        union all
        select * from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value})
    ),
    cte_unpivot as (
        UNPIVOT cte_combined
        ON COLUMNS(* EXCLUDE (key, ct, team, season))
        INTO
            NAME stat
            VALUE value
    ),
    cte_stats as (
        select distinct stat
        from cte_unpivot
    )
    select 
        CASE WHEN u1.value > u2.value THEN '✅' ELSE '' END AS "t1",
        abs(u1.value::int) as "team1",
        s.stat,
        abs(u2.value::int) as "team2",
        CASE WHEN u2.value > u1.value THEN '✅' ELSE '' END AS "t2"
    from cte_stats s
    left join cte_unpivot u1 on u1.stat = s.stat and u1.key = '${e.team1_dd.value}' || ':' || '${e.team1_season_dd.value}'
    left join cte_unpivot u2 on u2.stat = s.stat and u2.key = '${e.team2_dd.value}' || ':' || '${e.team2_season_dd.value}'`,Le=`with cte_combined as (
        select * from (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value})
        union all
        select * from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value})
    ),
    cte_unpivot as (
        UNPIVOT cte_combined
        ON COLUMNS(* EXCLUDE (key, ct, team, season))
        INTO
            NAME stat
            VALUE value
    ),
    cte_stats as (
        select distinct stat
        from cte_unpivot
    )
    select 
        CASE WHEN u1.value > u2.value THEN '✅' ELSE '' END AS "t1",
        abs(u1.value::int) as "team1",
        s.stat,
        abs(u2.value::int) as "team2",
        CASE WHEN u2.value > u1.value THEN '✅' ELSE '' END AS "t2"
    from cte_stats s
    left join cte_unpivot u1 on u1.stat = s.stat and u1.key = '${e.team1_dd.value}' || ':' || '${e.team1_season_dd.value}'
    left join cte_unpivot u2 on u2.stat = s.stat and u2.key = '${e.team2_dd.value}' || ':' || '${e.team2_season_dd.value}'`;i.stat_table&&(i.stat_table instanceof Error?Je.initialError=i.stat_table:Je.initialData=i.stat_table);let _t;const je=Se.createReactive({callback:I=>{s(10,_t=I)},execFn:g},{id:"stat_table",initialData:Je.initialData,initialError:Je.initialError});je(Le,{noResolve:Ge}),globalThis[Symbol.for("stat_table")]={get value(){return _t}};let at={initialData:void 0,initialError:void 0},Fe=q`with cte_games AS (
        select 
            date,
            case when team1 = '${e.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${e.team1_dd.value}' || ':' || '${e.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${e.team1_dd.value}' OR team2 = '${e.team1_dd.value}') AND season = ${e.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${e.team1_season_dd.value}' || ' ' || '${e.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`,bt=`with cte_games AS (
        select 
            date,
            case when team1 = '${e.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${e.team1_dd.value}' || ':' || '${e.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${e.team1_dd.value}' OR team2 = '${e.team1_dd.value}') AND season = ${e.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${e.team1_season_dd.value}' || ' ' || '${e.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`;i.team1_trend&&(i.team1_trend instanceof Error?at.initialError=i.team1_trend:at.initialData=i.team1_trend);let ot;const ke=Se.createReactive({callback:I=>{s(11,ot=I)},execFn:g},{id:"team1_trend",initialData:at.initialData,initialError:at.initialError});ke(bt,{noResolve:Fe}),globalThis[Symbol.for("team1_trend")]={get value(){return ot}};let $t={initialData:void 0,initialError:void 0},st=q`with cte_games AS (
        select 
            date,
            case when team1 = '${e.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${e.team2_dd.value}' || ':' || '${e.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${e.team2_dd.value}' OR team2 = '${e.team2_dd.value}') 
        AND season = ${e.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${e.team2_season_dd.value}' || ' ' || '${e.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`,He=`with cte_games AS (
        select 
            date,
            case when team1 = '${e.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${e.team2_dd.value}' || ':' || '${e.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${e.team2_dd.value}' OR team2 = '${e.team2_dd.value}') 
        AND season = ${e.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${e.team2_season_dd.value}' || ' ' || '${e.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`;i.team2_trend&&(i.team2_trend instanceof Error?$t.initialError=i.team2_trend:$t.initialData=i.team2_trend);let mt;const pt=Se.createReactive({callback:I=>{s(12,mt=I)},execFn:g},{id:"team2_trend",initialData:$t.initialData,initialError:$t.initialError});pt(He,{noResolve:st}),globalThis[Symbol.for("team2_trend")]={get value(){return mt}};let rt={initialData:void 0,initialError:void 0},Qe=q`select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${e.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${e.team1_dd.value}' || ':' || '${e.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${e.team1_dd.value}' OR team2 = '${e.team1_dd.value}') AND season = ${e.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${e.team1_season_dd.value}' || ' ' || '${e.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${e.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${e.team2_dd.value}' || ':' || '${e.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${e.team2_dd.value}' OR team2 = '${e.team2_dd.value}') 
        AND season = ${e.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${e.team2_season_dd.value}' || ' ' || '${e.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)`,Xe=`select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${e.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${e.team1_dd.value}' || ':' || '${e.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${e.team1_dd.value}' OR team2 = '${e.team1_dd.value}') AND season = ${e.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${e.team1_season_dd.value}' || ' ' || '${e.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${e.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${e.team2_dd.value}' || ':' || '${e.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${e.team2_dd.value}' OR team2 = '${e.team2_dd.value}') 
        AND season = ${e.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${e.team2_season_dd.value}' || ' ' || '${e.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)`;i.combined_trend&&(i.combined_trend instanceof Error?rt.initialError=i.combined_trend:rt.initialData=i.combined_trend);let lt;const ut=Se.createReactive({callback:I=>{s(1,lt=I)},execFn:g},{id:"combined_trend",initialData:rt.initialData,initialError:rt.initialError});ut(Xe,{noResolve:Qe}),globalThis[Symbol.for("combined_trend")]={get value(){return lt}};let Rt={initialData:void 0,initialError:void 0},Lt=q`select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1`,Ke=`select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1`;i.elo_by_team&&(i.elo_by_team instanceof Error?Rt.initialError=i.elo_by_team:Rt.initialData=i.elo_by_team);let ie;const ce=Se.createReactive({callback:I=>{s(13,ie=I)},execFn:g},{id:"elo_by_team",initialData:Rt.initialData,initialError:Rt.initialError});ce(Ke,{noResolve:Lt}),globalThis[Symbol.for("elo_by_team")]={get value(){return ie}};let K={initialData:void 0,initialError:void 0},Z=q`SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I`,x=`SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I`;i.games&&(i.games instanceof Error?K.initialError=i.games:K.initialData=i.games);let _e;const fe=Se.createReactive({callback:I=>{s(14,_e=I)},execFn:g},{id:"games",initialData:K.initialData,initialError:K.initialError});fe(x,{noResolve:Z}),globalThis[Symbol.for("games")]={get value(){return _e}};let ee={initialData:void 0,initialError:void 0},te=q`WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2`,ae=`WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2`;i.monte_carlo_sim&&(i.monte_carlo_sim instanceof Error?ee.initialError=i.monte_carlo_sim:ee.initialData=i.monte_carlo_sim);let oe;const Ee=Se.createReactive({callback:I=>{s(15,oe=I)},execFn:g},{id:"monte_carlo_sim",initialData:ee.initialData,initialError:ee.initialError});Ee(ae,{noResolve:te}),globalThis[Symbol.for("monte_carlo_sim")]={get value(){return oe}};let se={initialData:void 0,initialError:void 0},re=q`SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4`,le=`SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4`;i.monte_carlo_winners&&(i.monte_carlo_winners instanceof Error?se.initialError=i.monte_carlo_winners:se.initialData=i.monte_carlo_winners);let me;const ge=Se.createReactive({callback:I=>{s(16,me=I)},execFn:g},{id:"monte_carlo_winners",initialData:se.initialData,initialError:se.initialError});ge(le,{noResolve:re}),globalThis[Symbol.for("monte_carlo_winners")]={get value(){return me}};let ne={initialData:void 0,initialError:void 0},l=q`with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4`,m=`with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4`;i.mc_final_results&&(i.mc_final_results instanceof Error?ne.initialError=i.mc_final_results:ne.initialData=i.mc_final_results);let ht;const Nt=Se.createReactive({callback:I=>{s(17,ht=I)},execFn:g},{id:"mc_final_results",initialData:ne.initialData,initialError:ne.initialError});Nt(m,{noResolve:l}),globalThis[Symbol.for("mc_final_results")]={get value(){return ht}};let dt={initialData:void 0,initialError:void 0},ct=q`select
        winning_team,
        game_id as games_played,
        case when game_id = 4 then '4-0'
            when game_id = 5 then '4-1'
            when game_id = 6 then '4-2'
            else '4-3'
        end as result,
        count(*) as occurances,
        count(*) / 10000.0 as occurances_pct1
    from (with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4)
    group by all
    order by result`,ft=`select
        winning_team,
        game_id as games_played,
        case when game_id = 4 then '4-0'
            when game_id = 5 then '4-1'
            when game_id = 6 then '4-2'
            else '4-3'
        end as result,
        count(*) as occurances,
        count(*) / 10000.0 as occurances_pct1
    from (with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4)
    group by all
    order by result`;i.mc_summary&&(i.mc_summary instanceof Error?dt.initialError=i.mc_summary:dt.initialData=i.mc_summary);let wt;const Ft=Se.createReactive({callback:I=>{s(18,wt=I)},execFn:g},{id:"mc_summary",initialData:dt.initialData,initialError:dt.initialError});return Ft(ft,{noResolve:ct}),globalThis[Symbol.for("mc_summary")]={get value(){return wt}},r.$$set=I=>{"data"in I&&s(20,u=I.data)},r.$$.update=()=>{r.$$.dirty[0]&1048576&&s(21,{data:i={},customFormattingSettings:d,__db:_}=u,i),r.$$.dirty[0]&2097152&&rs.set(Object.keys(i).length>0),r.$$.dirty[1]&134217728&&n.params,r.$$.dirty[0]&12582912&&M(F,{noResolve:D}),r.$$.dirty[0]&50331648&&L(w,{noResolve:we}),r.$$.dirty[0]&1&&s(26,B=q`select C.*
    from src_nba_season_teams C
    where C.season = ${e.team1_season_dd.value}
    group by all
    order by C.team`),r.$$.dirty[0]&1&&s(27,R=`select C.*
    from src_nba_season_teams C
    where C.season = ${e.team1_season_dd.value}
    group by all
    order by C.team`),r.$$.dirty[0]&201326592&&P(R,{noResolve:B}),r.$$.dirty[0]&1&&s(28,j=q`select C.* 
    from src_nba_season_teams C
    where C.season = ${e.team2_season_dd.value}
    group by all
    order by C.team`),r.$$.dirty[0]&1&&s(29,Re=`select C.* 
    from src_nba_season_teams C
    where C.season = ${e.team2_season_dd.value}
    group by all
    order by C.team`),r.$$.dirty[0]&805306368&&U(Re,{noResolve:j}),r.$$.dirty[0]&1&&s(30,Y=q`select * from (from src_nba_elo_history)
    where season = ${e.team1_season_dd.value}
       and ( team1 = '${e.team1_dd.value}' OR team2 = '${e.team1_dd.value}')
    order by date`),r.$$.dirty[0]&1&&s(31,z=`select * from (from src_nba_elo_history)
    where season = ${e.team1_season_dd.value}
       and ( team1 = '${e.team1_dd.value}' OR team2 = '${e.team1_dd.value}')
    order by date`),r.$$.dirty[0]&1073741824|r.$$.dirty[1]&1&&Ne(z,{noResolve:Y}),r.$$.dirty[0]&1&&s(32,Q=q`select * from (from src_nba_elo_history)
    where season = ${e.team2_season_dd.value}
        and ( team1 = '${e.team2_dd.value}' OR team2 = '${e.team2_dd.value}')
    order by date`),r.$$.dirty[0]&1&&s(33,Oe=`select * from (from src_nba_elo_history)
    where season = ${e.team2_season_dd.value}
        and ( team1 = '${e.team2_dd.value}' OR team2 = '${e.team2_dd.value}')
    order by date`),r.$$.dirty[1]&6&&Ce(Oe,{noResolve:Q}),r.$$.dirty[0]&1&&s(34,Me=q`select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}`),r.$$.dirty[0]&1&&s(35,Ie=`select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}`),r.$$.dirty[1]&24&&Ue(Ie,{noResolve:Me}),r.$$.dirty[0]&1&&s(36,Ye=q`select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}`),r.$$.dirty[0]&1&&s(37,Pe=`select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}`),r.$$.dirty[1]&96&&tt(Pe,{noResolve:Ye}),r.$$.dirty[0]&1&&s(38,Ge=q`with cte_combined as (
        select * from (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value})
        union all
        select * from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value})
    ),
    cte_unpivot as (
        UNPIVOT cte_combined
        ON COLUMNS(* EXCLUDE (key, ct, team, season))
        INTO
            NAME stat
            VALUE value
    ),
    cte_stats as (
        select distinct stat
        from cte_unpivot
    )
    select 
        CASE WHEN u1.value > u2.value THEN '✅' ELSE '' END AS "t1",
        abs(u1.value::int) as "team1",
        s.stat,
        abs(u2.value::int) as "team2",
        CASE WHEN u2.value > u1.value THEN '✅' ELSE '' END AS "t2"
    from cte_stats s
    left join cte_unpivot u1 on u1.stat = s.stat and u1.key = '${e.team1_dd.value}' || ':' || '${e.team1_season_dd.value}'
    left join cte_unpivot u2 on u2.stat = s.stat and u2.key = '${e.team2_dd.value}' || ':' || '${e.team2_season_dd.value}'`),r.$$.dirty[0]&1&&s(39,Le=`with cte_combined as (
        select * from (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value})
        union all
        select * from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value})
    ),
    cte_unpivot as (
        UNPIVOT cte_combined
        ON COLUMNS(* EXCLUDE (key, ct, team, season))
        INTO
            NAME stat
            VALUE value
    ),
    cte_stats as (
        select distinct stat
        from cte_unpivot
    )
    select 
        CASE WHEN u1.value > u2.value THEN '✅' ELSE '' END AS "t1",
        abs(u1.value::int) as "team1",
        s.stat,
        abs(u2.value::int) as "team2",
        CASE WHEN u2.value > u1.value THEN '✅' ELSE '' END AS "t2"
    from cte_stats s
    left join cte_unpivot u1 on u1.stat = s.stat and u1.key = '${e.team1_dd.value}' || ':' || '${e.team1_season_dd.value}'
    left join cte_unpivot u2 on u2.stat = s.stat and u2.key = '${e.team2_dd.value}' || ':' || '${e.team2_season_dd.value}'`),r.$$.dirty[1]&384&&je(Le,{noResolve:Ge}),r.$$.dirty[0]&1&&s(40,Fe=q`with cte_games AS (
        select 
            date,
            case when team1 = '${e.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${e.team1_dd.value}' || ':' || '${e.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${e.team1_dd.value}' OR team2 = '${e.team1_dd.value}') AND season = ${e.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${e.team1_season_dd.value}' || ' ' || '${e.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`),r.$$.dirty[0]&1&&s(41,bt=`with cte_games AS (
        select 
            date,
            case when team1 = '${e.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${e.team1_dd.value}' || ':' || '${e.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${e.team1_dd.value}' OR team2 = '${e.team1_dd.value}') AND season = ${e.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${e.team1_season_dd.value}' || ' ' || '${e.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`),r.$$.dirty[1]&1536&&ke(bt,{noResolve:Fe}),r.$$.dirty[0]&1&&s(42,st=q`with cte_games AS (
        select 
            date,
            case when team1 = '${e.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${e.team2_dd.value}' || ':' || '${e.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${e.team2_dd.value}' OR team2 = '${e.team2_dd.value}') 
        AND season = ${e.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${e.team2_season_dd.value}' || ' ' || '${e.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`),r.$$.dirty[0]&1&&s(43,He=`with cte_games AS (
        select 
            date,
            case when team1 = '${e.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${e.team2_dd.value}' || ':' || '${e.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${e.team2_dd.value}' OR team2 = '${e.team2_dd.value}') 
        AND season = ${e.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${e.team2_season_dd.value}' || ' ' || '${e.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games`),r.$$.dirty[1]&6144&&pt(He,{noResolve:st}),r.$$.dirty[0]&1&&s(44,Qe=q`select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${e.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${e.team1_dd.value}' || ':' || '${e.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${e.team1_dd.value}' OR team2 = '${e.team1_dd.value}') AND season = ${e.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${e.team1_season_dd.value}' || ' ' || '${e.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${e.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${e.team2_dd.value}' || ':' || '${e.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${e.team2_dd.value}' OR team2 = '${e.team2_dd.value}') 
        AND season = ${e.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${e.team2_season_dd.value}' || ' ' || '${e.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)`),r.$$.dirty[0]&1&&s(45,Xe=`select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${e.team1_dd.value}' then elo1_post else elo2_post end as elo,
            '${e.team1_dd.value}' || ':' || '${e.team1_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${e.team1_dd.value}' OR team2 = '${e.team1_dd.value}') AND season = ${e.team1_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${e.team1_season_dd.value}' || ' ' || '${e.team1_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)
    union all
    select * from (with cte_games AS (
        select 
            date,
            case when team1 = '${e.team2_dd.value}' then elo1_post else elo2_post end as elo,
            '${e.team2_dd.value}' || ':' || '${e.team2_season_dd.value}' as key,
        from (from src_nba_elo_history) where (team1 = '${e.team2_dd.value}' OR team2 = '${e.team2_dd.value}') 
        AND season = ${e.team2_season_dd.value}
    )
    select 
        key, 
        date,
        elo,
        '${e.team2_season_dd.value}' || ' ' || '${e.team2_dd.value}' as team,
        ROW_NUMBER() OVER (ORDER BY date) as game_id
    from cte_games)`),r.$$.dirty[1]&24576&&ut(Xe,{noResolve:Qe}),r.$$.dirty[0]&1&&s(46,Lt=q`select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1`),r.$$.dirty[0]&1&&s(47,Ke=`select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1`),r.$$.dirty[1]&98304&&ce(Ke,{noResolve:Lt}),r.$$.dirty[0]&1&&s(48,Z=q`SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I`),r.$$.dirty[0]&1&&s(49,x=`SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I`),r.$$.dirty[1]&393216&&fe(x,{noResolve:Z}),r.$$.dirty[0]&1&&s(50,te=q`WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2`),r.$$.dirty[0]&1&&s(51,ae=`WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2`),r.$$.dirty[1]&1572864&&Ee(ae,{noResolve:te}),r.$$.dirty[0]&1&&s(52,re=q`SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4`),r.$$.dirty[0]&1&&s(53,le=`SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4`),r.$$.dirty[1]&6291456&&ge(le,{noResolve:re}),r.$$.dirty[0]&1&&s(54,l=q`with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4`),r.$$.dirty[0]&1&&s(55,m=`with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4`),r.$$.dirty[1]&25165824&&Nt(m,{noResolve:l}),r.$$.dirty[0]&1&&s(56,ct=q`select
        winning_team,
        game_id as games_played,
        case when game_id = 4 then '4-0'
            when game_id = 5 then '4-1'
            when game_id = 6 then '4-2'
            else '4-3'
        end as result,
        count(*) as occurances,
        count(*) / 10000.0 as occurances_pct1
    from (with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4)
    group by all
    order by result`),r.$$.dirty[0]&1&&s(57,ft=`select
        winning_team,
        game_id as games_played,
        case when game_id = 4 then '4-0'
            when game_id = 5 then '4-1'
            when game_id = 6 then '4-2'
            else '4-3'
        end as result,
        count(*) as occurances,
        count(*) / 10000.0 as occurances_pct1
    from (with
    cte_summary as (
        SELECT step2.* 
        FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2) step2
            LEFT JOIN (SELECT scenario_id,
        game_id
    FROM (WITH cte_scenario_gen AS (
        SELECT I.generate_series AS scenario_id
        FROM generate_series(1, 10000 ) AS I
    ),
    cte_schedule as (
        SELECT
            i.scenario_id,
            G.game_id,
            S.*,
            (random() * 10000)::smallint AS rand_result
        FROM cte_scenario_gen AS i
        CROSS JOIN (select 
        (t2.season::varchar(4))[1:4] || ' ' || t2.team as team2,
        t2.avg_elo - ('${e.elo_slider}'::real/2) as elo2,
       (t1.season::varchar(4))[1:4] || ' ' || t1.team as team1,
        t1.avg_elo + ('${e.elo_slider}'::real/2) as elo1
    from (select * 
    from src_nba_team_stats 
    where team = '${e.team2_dd.value}' AND season = ${e.team2_season_dd.value}) t2
    left join (select * 
    from src_nba_team_stats 
    where team = '${e.team1_dd.value}' AND season = ${e.team1_season_dd.value}) t1 ON 1=1) AS S
        LEFT JOIN (SELECT I.generate_series AS game_id
    FROM generate_series(1 + ${e.team_1_wins.value} + ${e.team_2_wins.value}, 7) AS I) G ON 1=1
    ),
    cte_step_1 as (
        Select *,
            ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000 as team1_win_probability,
            CASE 
                WHEN ( 1 - (1 / (10 ^ (-( elo2 - elo1 )::real/400)+1))) * 10000  >= rand_result THEN S.team1
                ELSE S.team2
            END AS winning_team,
        From cte_schedule S
    ),
    cte_step_2 AS (
        SELECT step1.*,
            ROW_NUMBER() OVER (PARTITION BY scenario_id, winning_team  ORDER BY scenario_id, game_id ) +
            CASE 
                WHEN winning_team = team1 THEN ${e.team_1_wins.value} 
                ELSE ${e.team_2_wins.value} END 
            AS series_result
        FROM cte_step_1 step1
    )
    select * from cte_step_2)
    WHERE series_result = 4) F ON F.scenario_id = step2.scenario_id 
                AND step2.game_id = f.game_id
    )
    SELECT
        E.scenario_id,
        E.game_id,
        E.winning_team
    FROM cte_summary E
    where E.series_result = 4)
    group by all
    order by result`),r.$$.dirty[1]&100663296&&Ft(ft,{noResolve:ct}),r.$$.dirty[0]&2&&s(19,a=Math.min(...lt.map(I=>I.elo)))},s(22,D=q`from src_nba_elo_history`),s(23,F="from src_nba_elo_history"),s(24,we=q`select A.season
    from src_nba_seasons A
    order by A.season`),s(25,w=`select A.season
    from src_nba_seasons A
    order by A.season`),[e,lt,X,A,b,V,$e,De,it,ze,_t,ot,mt,ie,_e,oe,me,ht,wt,a,u,i,D,F,we,w,B,R,j,Re,Y,z,Q,Oe,Me,Ie,Ye,Pe,Ge,Le,Fe,bt,st,He,Qe,Xe,Lt,Ke,Z,x,te,ae,re,le,l,m,ct,ft,n]}class wr extends Ct{constructor(t){super(),It(this,t,rr,sr,Dt,{data:20},null,[-1,-1,-1,-1])}}export{wr as component};
