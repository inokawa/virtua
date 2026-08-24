import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{G as t,I as n,L as r,S as i,Y as a,bt as o,ct as s,et as c,ft as l,p as u,pt as d,s as f,st as p,ut as m,vt as h,xt as g,z as _}from"./iframe-CjTxvi4u.js";import{n as v,t as y}from"./VList-caWjHXpx.js";function b(e,f){d(f,!0);let g=[20,40,180,77],_=[0,100,200,300,400,500,600,700,800,900],v=Array.from({length:1e3}).map((e,t)=>g[t%4]),b,S=s(0),C=({index:e})=>{if(e%100==0)return{style:{"z-index":`1`,...t(S)===e?{position:`sticky`,top:`0`}:{}}}},w=e=>{if(!b)return;let t=b.findItemIndex(e);p(S,[..._].reverse().find(e=>t>=e),!0)};{let s=(e,t=o,s=o)=>{var l=x(),u=c(l,!0);h(l),a(()=>{i(l,`
        height: ${t()??``}px;
        background: ${s()%100==0?`yellow`:`white`};
        border-bottom: solid 1px #ccc;
      `),n(u,s())}),r(e,l)},l=m(()=>[t(S)]);u(y(e,{get data(){return v},style:`height: 100vh;`,itemProps:C,get keepMounted(){return t(l)},onscroll:w,children:s,$$slots:{default:!0}}),e=>b=e,()=>b)}l()}var x;function S(){return(S=e((()=>{g(),f(),v(),x=_(`<div> </div>`)})))()}var C,w,T;function E(){return(E=e((()=>{v(),S(),C={component:y},w={render:()=>({Component:b})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: StickyGroupComponent
  })
}`,...w.parameters?.docs?.source}}},T=[`StickyGroup`]})))()}E();export{w as StickyGroup,T as __namedExportsOrder,C as default};