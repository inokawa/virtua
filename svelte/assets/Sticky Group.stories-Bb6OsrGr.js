import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,F as n,I as r,J as i,R as a,W as o,_t as s,bt as c,dt as l,f as u,ft as d,lt as f,o as p,ot as m,st as h,x as g,yt as _}from"./iframe-CK-6QNEy.js";import{i as v,t as y}from"./svelte-DYC475G_.js";function b(e,a){d(a,!0);let c=[20,40,180,77],p=[0,100,200,300,400,500,600,700,800,900],y=Array.from({length:1e3}).map((e,t)=>c[t%4]),b,S=h(0),C=({index:e})=>{if(e%100==0)return{style:{"z-index":`1`,...o(S)===e?{position:`sticky`,top:`0`}:{}}}},w=e=>{if(!b)return;let t=b.findItemIndex(e);m(S,[...p].reverse().find(e=>t>=e),!0)};{let a=(e,a=_,o=_)=>{var c=x(),l=t(c,!0);s(c),i(()=>{g(c,`
        height: ${a()??``}px;
        background: ${o()%100==0?`yellow`:`white`};
        border-bottom: solid 1px #ccc;
      `),n(l,o())}),r(e,c)},c=f(()=>[o(S)]);u(v(e,{get data(){return y},style:`height: 100vh;`,itemProps:C,get keepMounted(){return o(c)},onscroll:w,children:a,$$slots:{default:!0}}),e=>b=e,()=>b)}l()}var x,S=e((()=>{c(),p(),y(),x=a(`<div> </div>`)})),C,w,T;e((()=>{y(),S(),C={component:v},w={render:()=>({Component:b})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: StickyGroupComponent
  })
}`,...w.parameters?.docs?.source}}},T=[`StickyGroup`]}))();export{w as StickyGroup,T as __namedExportsOrder,C as default};