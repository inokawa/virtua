import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Ct as t,Et as n,M as r,P as i,R as a,St as o,T as s,Tt as c,V as l,Z as u,_t as d,ct as f,d as p,et as m,it as h,lt as g,p as _,q as v,rt as y,s as b,ut as x,vt as S,z as C}from"./iframe-BeAkC-67.js";import{n as w,t as T}from"./Virtualizer-C6Sg36Ik.js";import{t as E}from"./legacy-BxujrqGF.js";function D(e,n){S(n,!1);let r=[20,40,80,77],i=Array.from({length:1e3}).map((e,t)=>r[t%4]);p();var l=k();s(l,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var f=m(l);s(f,`background-color: burlywood; height: 400px;`);var g=h(f,2);T(g,{get data(){return i},getKey:(e,t)=>t,startMargin:400,children:(e,t=c,n=c)=>{var r=O(),i=y(r,!0);u(()=>{s(r,`
        height: ${t()??``}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),a(i,n())}),C(e,r)},$$slots:{default:!0}}),o(2),t(l),C(e,l),d()}var O,k;function A(){return(A=e((()=>{n(),E(),b(),w(),O=l(`<div> </div>`),k=l(`<div><div>header</div> <!> <div style="background-color: steelblue; height: 600px;">footer</div></div>`)})))()}function j(e,n){S(n,!0);let r=[20,40,80,77],i=Array.from({length:1e3}).map((e,t)=>r[t%4]),o=x(void 0);var l=N();s(l,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var f=m(l);s(f,`background-color: burlywood; padding: 40px;`);var p=m(f);s(p,`background-color: steelblue; padding: 60px;`);var h=m(p);T(h,{get data(){return i},getKey:(e,t)=>t,get scrollRef(){return v(o)},startMargin:100,children:(e,t=c,n=c)=>{var r=M(),i=y(r,!0);u(()=>{s(r,`
              height: ${t()??``}px;
              background: white;
              border-bottom: solid 1px #ccc;
            `),a(i,n())}),C(e,r)},$$slots:{default:!0}}),t(p),t(f),t(l),_(l,e=>g(o,e),()=>v(o)),C(e,l),d()}var M,N;function P(){return(P=e((()=>{n(),b(),w(),M=l(`<div> </div>`),N=l(`<div><div><div><!></div></div></div>`)})))()}function F(e,n){S(n,!1);let r=[20,40,80,77],o=Array.from({length:1e3}).map((e,t)=>r[t%4]),l=f();i(()=>{v(l).scrollToIndex(999)}),p();var b=L();s(b,`
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer */
  overflow-anchor: none;
  /* flex style for spacer */
  display: flex;
  flex-direction: column;
`);var x=h(m(b),2);_(T(x,{get data(){return o},getKey:(e,t)=>t,children:(e,t=c,n=c)=>{var r=I(),i=y(r,!0);u(()=>{s(r,`
        height: ${t()??``}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),a(i,n())}),C(e,r)},$$slots:{default:!0},$$legacy:!0}),e=>g(l,e),()=>v(l)),t(b),C(e,b),d()}var I,L;function R(){return(R=e((()=>{n(),E(),b(),w(),r(),I=l(`<div> </div>`),L=l(`<div><div style="flex-grow: 1;"></div> <!></div>`)})))()}var z,B,V,H,U;function W(){return(W=e((()=>{w(),A(),P(),R(),z={component:T},B={render:()=>({Component:D})},V={render:()=>({Component:j})},H={render:()=>({Component:F})},U=[`HeaderAndFooter`,`Nested`,`Reverse`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: HeaderAndFooterComponent
  })
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: NestedComponent
  })
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: ReverseComponent
  })
}`,...H.parameters?.docs?.source}}}})))()}W();export{B as HeaderAndFooter,V as Nested,H as Reverse,U as __namedExportsOrder,z as default};