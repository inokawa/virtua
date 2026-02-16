import{n as z,b as I,d as T,f as x,t as w,a as b,q as g,c as l,s as f,p as Q,j as _,h as v,g as r,o as R}from"./iframe-C4iqsNYd.js";import{i as N}from"./legacy-BmSWkKDg.js";import{s as K,b as U,a as W}from"./ListItem-DQPeVzqz.js";import{V as A,b as X}from"./VList-CDCYxFoU.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-CREdkvPt.js";var Y=x("<div> </div>");function Z(a,t){T(t,!1);const e=[20,40,180,77],u=Array.from({length:1e3}).map((s,n)=>e[n%4]);N(),A(a,{get data(){return u},style:"height: 100vh;",getKey:(n,i)=>i,children:(n,i=z,c=z)=>{var o=Y(),d=l(o);w(()=>{K(o,`
        height: ${i()??""}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),g(d,c())}),b(n,o)},$$slots:{default:!0}}),I()}var tt=x("<div> </div>"),et=x('<div style="padding: 10px;"><!></div>');function rt(a,t){T(t,!1);const e=[40,180,77],u=c=>({id:c,size:e[c%4]+"px"}),s=Array.from({length:1e3}).map((c,o)=>u(o));N();var n=et(),i=l(n);A(i,{get data(){return s},style:"width: 100%; height: 200px;",getKey:o=>o.id,horizontal:!0,children:(o,d=z)=>{var m=tt(),$=l(m);w(()=>{K(m,`
          width: ${d().size??""};
          background: white;
          border-right: solid 1px #ccc;
        `),g($,d().id)}),b(o,m)},$$slots:{default:!0}}),b(a,n),I()}var ot=(a,t)=>{v(t,Number(a.currentTarget.value),!0)},nt=(a,t,e)=>{r(t).scrollToIndex(r(e))},at=(a,t,e,u)=>{const s=Array.from({length:100}).map((n,i)=>t(i+r(e).length));v(e,r(u)?[...s,...r(e)]:[...r(e),...s],!0)},st=(a,t)=>{v(t,!r(t))},it=(a,t)=>{const e=[...r(t)];e.pop(),v(t,e,!0)},ct=x("<div> </div>"),lt=x('<div style="height: 100%; display: flex; flex-direction: column;"><div> </div> <div> </div> <div><input type="number"/> <button>scrollToIndex</button></div> <div><button>append</button> <label><input type="checkbox"/> prepend</label> <button>pop</button></div> <!></div>');function dt(a,t){T(t,!0);const e=[20,40,180,77],u=h=>({id:h,size:e[h%4]+"px"});let s=f(void 0),n=f(Q(Array.from({length:1e3}).map((h,p)=>u(p)))),i=f(0),c=f(!1),o=f(567),d=f(!1);var m=lt(),$=l(m),B=l($),S=_($,2),F=l(S),V=_(S,2),D=l(V);D.__input=[ot,o];var G=_(D,2);G.__click=[nt,s,o];var L=_(V,2),O=l(L);O.__click=[at,u,n,d];var j=_(O,2),q=l(j);q.__change=[st,d];var J=_(j,2);J.__click=[it,n];var M=_(L,2);U(A(M,{get data(){return r(n)},get shift(){return r(d)},getKey:p=>p.id,onscroll:p=>{v(i,p,!0),v(c,!0)},onscrollend:()=>{v(c,!1)},children:(p,E=z)=>{var H=ct(),P=l(H);w(()=>{K(H,`
          height: ${E().size??""};
          background: white;
          border-bottom: solid 1px #ccc;
        `),g(P,E().id)}),b(p,H)},$$slots:{default:!0}}),p=>v(s,p,!0),()=>r(s)),w(()=>{g(B,`offset: ${r(i)??""}`),g(F,`scrolling: ${r(c)??""}`),W(q,r(d))}),X(D,()=>r(o),h=>v(o,h)),b(a,m),I()}R(["input","click","change"]);const ft={component:A},y={render:()=>({Component:Z})},C={render:()=>({Component:rt})},k={render:()=>({Component:dt})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: DefaultComponent
  })
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: HorizontalComponent
  })
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: ControlsComponent
  })
}`,...k.parameters?.docs?.source}}};const gt=["Default","Horizontal","Controls"];export{k as Controls,y as Default,C as Horizontal,gt as __namedExportsOrder,ft as default};
