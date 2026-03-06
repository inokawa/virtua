import{n as A,p as K,a as S,t as D,b as x,f as $,s as _,c as i,d as m,e as R,g as d,h as e,i as b,j as p,k as U}from"./iframe-WWLj6dFb.js";import{i as B}from"./legacy-BgXbGQQs.js";import{s as V,b as W,a as X}from"./ListItem-CXWquNH8.js";import{V as H,b as Y}from"./VList-CzG025qP.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-BxWvTM4g.js";var Z=$("<div> </div>");function tt(h,f){S(f,!1);const g=[20,40,180,77],u=Array.from({length:1e3}).map((c,t)=>g[t%4]);B(),H(h,{get data(){return u},style:"height: 100vh;",getKey:(t,l)=>l,children:(t,l=A,a=A)=>{var r=Z(),n=i(r);D(()=>{V(r,`
        height: ${l()??""}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),_(n,a())}),x(t,r)},$$slots:{default:!0}}),K()}var et=$("<div> </div>"),rt=$('<div style="padding: 10px;"><!></div>');function ot(h,f){S(f,!1);const g=[40,180,77],u=a=>({id:a,size:g[a%4]+"px"}),c=Array.from({length:1e3}).map((a,r)=>u(r));B();var t=rt(),l=i(t);H(l,{get data(){return c},style:"width: 100%; height: 200px;",getKey:r=>r.id,horizontal:!0,children:(r,n=A)=>{var v=et(),y=i(v);D(()=>{V(v,`
          width: ${n().size??""};
          background: white;
          border-right: solid 1px #ccc;
        `),_(y,n().id)}),x(r,v)},$$slots:{default:!0}}),x(h,t),K()}var at=$("<div> </div>"),nt=$('<div style="height: 100%; display: flex; flex-direction: column;"><div> </div> <div> </div> <div><input type="number"/> <button>scrollToIndex</button></div> <div><button>append</button> <label><input type="checkbox"/> prepend</label> <button>pop</button></div> <!></div>');function st(h,f){S(f,!0);const g=[20,40,180,77],u=o=>({id:o,size:g[o%4]+"px"});let c=m(void 0),t=m(R(Array.from({length:1e3}).map((o,s)=>u(s)))),l=m(0),a=m(!1),r=m(567),n=m(!1);var v=nt(),y=i(v),F=i(y),L=p(y,2),G=i(L),O=p(L,2),I=i(O),J=p(I,2),j=p(O,2),E=i(j),N=p(E,2),q=i(N),M=p(N,2),P=p(j,2);W(H(P,{get data(){return e(t)},get shift(){return e(n)},getKey:s=>s.id,onscroll:s=>{d(l,s,!0),d(a,!0)},onscrollend:()=>{d(a,!1)},children:(s,C=A)=>{var T=at(),Q=i(T);D(()=>{V(T,`
          height: ${C().size??""};
          background: white;
          border-bottom: solid 1px #ccc;
        `),_(Q,C().id)}),x(s,T)},$$slots:{default:!0}}),s=>d(c,s,!0),()=>e(c)),D(()=>{_(F,`offset: ${e(l)??""}`),_(G,`scrolling: ${e(a)??""}`),X(q,e(n))}),b("input",I,o=>{d(r,Number(o.currentTarget.value),!0)}),Y(I,()=>e(r),o=>d(r,o)),b("click",J,()=>{e(c).scrollToIndex(e(r))}),b("click",E,()=>{const o=Array.from({length:100}).map((s,C)=>u(C+e(t).length));d(t,e(n)?[...o,...e(t)]:[...e(t),...o],!0)}),b("change",q,()=>{d(n,!e(n))}),b("click",M,()=>{const o=[...e(t)];o.pop(),d(t,o,!0)}),x(h,v),K()}U(["input","click","change"]);const vt={component:H},z={render:()=>({Component:tt})},k={render:()=>({Component:ot})},w={render:()=>({Component:st})};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: DefaultComponent
  })
}`,...z.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: HorizontalComponent
  })
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: ControlsComponent
  })
}`,...w.parameters?.docs?.source}}};const mt=["Default","Horizontal","Controls"];export{w as Controls,z as Default,k as Horizontal,mt as __namedExportsOrder,vt as default};
