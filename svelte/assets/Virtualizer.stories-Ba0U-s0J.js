import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{R as t,St as n,T as r,Tt as i,V as a,Z as o,_t as s,ct as c,d as l,et as u,gt as d,it as f,lt as p,p as m,q as h,rt as g,s as _,wt as v,xt as y,z as b}from"./iframe-CY9qPFT6.js";import{n as x,t as S}from"./Virtualizer-Bf4cs2t9.js";import{t as C}from"./legacy-BtfnLHtj.js";function w(e,i){s(i,!1);let a=[20,40,80,77],c=Array.from({length:1e3}).map((e,t)=>a[t%4]);l();var p=E();r(p,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var m=u(p);r(m,`background-color: burlywood; height: 400px;`);var h=f(m,2);S(h,{get data(){return c},getKey:(e,t)=>t,startMargin:400,children:(e,n=v,i=v)=>{var a=T(),s=g(a,!0);o(()=>{r(a,`
        height: ${n()??``}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),t(s,i())}),b(e,a)},$$slots:{default:!0}}),y(2),n(p),b(e,p),d()}var T,E;function D(){return(D=e((()=>{i(),C(),_(),x(),T=a(`<div> </div>`),E=a(`<div><div>header</div> <!> <div style="background-color: steelblue; height: 600px;">footer</div></div>`)})))()}function O(e,i){s(i,!0);let a=[20,40,80,77],l=Array.from({length:1e3}).map((e,t)=>a[t%4]),f=p(void 0);var _=A();r(_,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var y=u(_);r(y,`background-color: burlywood; padding: 40px;`);var x=u(y);r(x,`background-color: steelblue; padding: 60px;`);var C=u(x);S(C,{get data(){return l},getKey:(e,t)=>t,get scrollRef(){return h(f)},startMargin:100,children:(e,n=v,i=v)=>{var a=k(),s=g(a,!0);o(()=>{r(a,`
              height: ${n()??``}px;
              background: white;
              border-bottom: solid 1px #ccc;
            `),t(s,i())}),b(e,a)},$$slots:{default:!0}}),n(x),n(y),n(_),m(_,e=>c(f,e),()=>h(f)),b(e,_),d()}var k,A;function j(){return(j=e((()=>{i(),_(),x(),k=a(`<div> </div>`),A=a(`<div><div><div><!></div></div></div>`)})))()}var M,N,P,F;function I(){return(I=e((()=>{x(),D(),j(),M={component:S},N={render:()=>({Component:w})},P={render:()=>({Component:O})},F=[`HeaderAndFooter`,`Nested`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: HeaderAndFooterComponent
  })
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: NestedComponent
  })
}`,...P.parameters?.docs?.source}}}})))()}I();export{N as HeaderAndFooter,P as Nested,F as __namedExportsOrder,M as default};