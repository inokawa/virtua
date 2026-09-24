import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,G as n,I as r,L as i,St as a,Y as o,lt as s,mt as c,ot as l,p as u,pt as d,s as f,st as p,tt as m,xt as h,z as g}from"./iframe-BTbaMlnH.js";import{n as _,t as v}from"./VList-CpHQvQ1I.js";function y(e,a){c(a,!0);let f=[20,40,180,77],g=[0,100,200,300,400,500,600,700,800,900],_=Array.from({length:1e3}).map((e,t)=>f[t%4]),y,x=p(0),S=({index:e})=>{if(e%100==0)return{style:{"z-index":`1`,...n(x)===e?{position:`sticky`,top:`0`}:{}}}},C=e=>{if(!y)return;let t=y.findItemIndex(e);l(x,[...g].reverse().find(e=>t>=e),!0)};{let a=(e,n=h,a=h)=>{var s=b(),c=m(s,!0);o(()=>{t(s,`
        height: ${n()??``}px;
        background: ${a()%100==0?`yellow`:`white`};
        border-bottom: solid 1px #ccc;
      `),r(c,a())}),i(e,s)},c=s(()=>[n(x)]);u(v(e,{get data(){return _},style:`height: 100vh;`,itemProps:S,get keepMounted(){return n(c)},onscroll:C,children:a,$$slots:{default:!0}}),e=>y=e,()=>y)}d()}var b;function x(){return(x=e((()=>{a(),f(),_(),b=g(`<div> </div>`)})))()}var S,C,w;function T(){return(T=e((()=>{_(),x(),S={component:v},C={render:()=>({Component:y})},w=[`StickyGroup`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: StickyGroupComponent
  })
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as StickyGroup,w as __namedExportsOrder,S as default};