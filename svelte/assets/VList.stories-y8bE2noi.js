import{G as D,g as T,h as S,F as H,e as x,D as $,H as b,C as i,a as m,b as R,s as d,i as e,I as _,J as p,K as U}from"./iframe-Sd25QDp4.js";import{i as N}from"./legacy-CNGs5lSI.js";import{r as V,k as W,t as X}from"./ListItem-D3qDVHWj.js";import{V as I,b as Y}from"./VList-Qfco3pd9.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-BLIpTfSw.js";var Z=$("<div> </div>");function tt(h,g){S(g,!1);const f=[20,40,180,77],u=Array.from({length:1e3}).map((c,t)=>f[t%4]);N(),I(h,{get data(){return u},style:"height: 100vh;",getKey:(t,l)=>l,children:(t,l=D,a=D)=>{var r=Z(),n=i(r);H(()=>{V(r,`
        height: ${l()??""}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),b(n,a())}),x(t,r)},$$slots:{default:!0}}),T()}var et=$("<div> </div>"),rt=$('<div style="padding: 10px;"><!></div>');function ot(h,g){S(g,!1);const f=[40,180,77],u=a=>({id:a,size:f[a%4]+"px"}),c=Array.from({length:1e3}).map((a,r)=>u(r));N();var t=rt(),l=i(t);I(l,{get data(){return c},style:"width: 100%; height: 200px;",getKey:r=>r.id,horizontal:!0,children:(r,n=D)=>{var v=et(),y=i(v);H(()=>{V(v,`
          width: ${n().size??""};
          background: white;
          border-right: solid 1px #ccc;
        `),b(y,n().id)}),x(r,v)},$$slots:{default:!0}}),x(h,t),T()}var at=$("<div> </div>"),nt=$('<div style="height: 100%; display: flex; flex-direction: column;"><div> </div> <div> </div> <div><input type="number"/> <button>scrollToIndex</button></div> <div><button>append</button> <label><input type="checkbox"/> prepend</label> <button>pop</button></div> <!></div>');function st(h,g){S(g,!0);const f=[20,40,180,77],u=o=>({id:o,size:f[o%4]+"px"});let c=m(void 0),t=m(R(Array.from({length:1e3}).map((o,s)=>u(s)))),l=m(0),a=m(!1),r=m(567),n=m(!1);var v=nt(),y=i(v),j=i(y),L=p(y,2),q=i(L),O=p(L,2),A=i(O),B=p(A,2),E=p(O,2),F=i(E),G=p(F,2),J=i(G),M=p(G,2),P=p(E,2);W(I(P,{get data(){return e(t)},get shift(){return e(n)},getKey:s=>s.id,onscroll:s=>{d(l,s,!0),d(a,!0)},onscrollend:()=>{d(a,!1)},children:(s,C=D)=>{var K=at(),Q=i(K);H(()=>{V(K,`
          height: ${C().size??""};
          background: white;
          border-bottom: solid 1px #ccc;
        `),b(Q,C().id)}),x(s,K)},$$slots:{default:!0}}),s=>d(c,s,!0),()=>e(c)),H(()=>{b(j,`offset: ${e(l)??""}`),b(q,`scrolling: ${e(a)??""}`),X(J,e(n))}),_("input",A,o=>{d(r,Number(o.currentTarget.value),!0)}),Y(A,()=>e(r),o=>d(r,o)),_("click",B,()=>{e(c).scrollToIndex(e(r))}),_("click",F,()=>{const o=Array.from({length:100}).map((s,C)=>u(C+e(t).length));d(t,e(n)?[...o,...e(t)]:[...e(t),...o],!0)}),_("change",J,()=>{d(n,!e(n))}),_("click",M,()=>{const o=[...e(t)];o.pop(),d(t,o,!0)}),x(h,v),T()}U(["input","click","change"]);const vt={component:I},z={render:()=>({Component:tt})},k={render:()=>({Component:ot})},w={render:()=>({Component:st})};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
