import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,G as n,I as r,L as i,Q as a,St as o,Y as s,d as c,mt as l,nt as u,ot as d,p as f,pt as p,s as m,st as h,tt as g,vt as _,xt as v,yt as y,z as b}from"./iframe-Dqnub9mu.js";import{n as x,t as S}from"./Virtualizer-DaPCtiTn.js";import{t as C}from"./legacy-8fltIMpf.js";function w(e,n){l(n,!1);let o=[20,40,80,77],d=Array.from({length:1e3}).map((e,t)=>o[t%4]);c();var f=E();t(f,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var m=a(f);t(m,`background-color: burlywood; height: 400px;`);var h=u(m,2);S(h,{get data(){return d},getKey:(e,t)=>t,startMargin:400,children:(e,n=v,a=v)=>{var o=T(),c=g(o,!0);s(()=>{t(o,`
        height: ${n()??``}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),r(c,a())}),i(e,o)},$$slots:{default:!0}}),_(2),y(f),i(e,f),p()}var T,E;function D(){return(D=e((()=>{o(),C(),m(),x(),T=b(`<div> </div>`),E=b(`<div><div>header</div> <!> <div style="background-color: steelblue; height: 600px;">footer</div></div>`)})))()}function O(e,o){l(o,!0);let c=[20,40,80,77],u=Array.from({length:1e3}).map((e,t)=>c[t%4]),m=h(void 0);var _=A();t(_,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var b=a(_);t(b,`background-color: burlywood; padding: 40px;`);var x=a(b);t(x,`background-color: steelblue; padding: 60px;`);var C=a(x);S(C,{get data(){return u},getKey:(e,t)=>t,get scrollRef(){return n(m)},startMargin:100,children:(e,n=v,a=v)=>{var o=k(),c=g(o,!0);s(()=>{t(o,`
              height: ${n()??``}px;
              background: white;
              border-bottom: solid 1px #ccc;
            `),r(c,a())}),i(e,o)},$$slots:{default:!0}}),y(x),y(b),y(_),f(_,e=>d(m,e),()=>n(m)),i(e,_),p()}var k,A;function j(){return(j=e((()=>{o(),m(),x(),k=b(`<div> </div>`),A=b(`<div><div><div><!></div></div></div>`)})))()}var M,N,P,F;function I(){return(I=e((()=>{x(),D(),j(),M={component:S},N={render:()=>({Component:w})},P={render:()=>({Component:O})},F=[`HeaderAndFooter`,`Nested`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: HeaderAndFooterComponent
  })
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: NestedComponent
  })
}`,...P.parameters?.docs?.source}}}})))()}I();export{N as HeaderAndFooter,P as Nested,F as __namedExportsOrder,M as default};