import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,G as n,I as r,L as i,Y as a,_t as o,bt as s,ct as c,d as l,et as u,ft as d,p as f,pt as p,rt as m,s as h,st as g,vt as _,xt as v,z as y}from"./iframe-BXU708Qa.js";import{n as b,t as x}from"./Virtualizer-BpJ2MqDI.js";import{t as S}from"./legacy-v9EnEX1N.js";function C(e,n){p(n,!1);let c=[20,40,80,77],f=Array.from({length:1e3}).map((e,t)=>c[t%4]);l();var h=T();t(h,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var g=u(h);t(g,`background-color: burlywood; height: 400px;`);var v=m(g,2);x(v,{get data(){return f},getKey:(e,t)=>t,startMargin:400,children:(e,n=s,o=s)=>{var c=w(),l=u(c,!0);_(c),a(()=>{t(c,`
        height: ${n()??``}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),r(l,o())}),i(e,c)},$$slots:{default:!0}}),o(2),_(h),i(e,h),d()}var w,T;function E(){return(E=e((()=>{v(),S(),h(),b(),w=y(`<div> </div>`),T=y(`<div><div>header</div> <!> <div style="background-color: steelblue; height: 600px;">footer</div></div>`)})))()}function D(e,o){p(o,!0);let l=[20,40,80,77],m=Array.from({length:1e3}).map((e,t)=>l[t%4]),h=c(void 0);var v=k();t(v,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var y=u(v);t(y,`background-color: burlywood; padding: 40px;`);var b=u(y);t(b,`background-color: steelblue; padding: 60px;`);var S=u(b);x(S,{get data(){return m},getKey:(e,t)=>t,get scrollRef(){return n(h)},startMargin:100,children:(e,n=s,o=s)=>{var c=O(),l=u(c,!0);_(c),a(()=>{t(c,`
              height: ${n()??``}px;
              background: white;
              border-bottom: solid 1px #ccc;
            `),r(l,o())}),i(e,c)},$$slots:{default:!0}}),_(b),_(y),_(v),f(v,e=>g(h,e),()=>n(h)),i(e,v),d()}var O,k;function A(){return(A=e((()=>{v(),h(),b(),O=y(`<div> </div>`),k=y(`<div><div><div><!></div></div></div>`)})))()}var j,M,N,P;function F(){return(F=e((()=>{b(),E(),A(),j={component:x},M={render:()=>({Component:C})},N={render:()=>({Component:D})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: HeaderAndFooterComponent
  })
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: NestedComponent
  })
}`,...N.parameters?.docs?.source}}},P=[`HeaderAndFooter`,`Nested`]})))()}F();export{M as HeaderAndFooter,N as Nested,P as __namedExportsOrder,j as default};