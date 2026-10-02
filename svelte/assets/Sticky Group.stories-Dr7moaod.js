import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,C as n,G as r,I as i,L as a,O as o,R as s,St as c,Y as l,lt as u,mt as d,ot as f,p,pt as m,s as h,st as g,tt as _,xt as v,z as y}from"./iframe-CJYljXmC.js";import{n as b,t as x}from"./VList-NisZxfX_.js";import{n as S,t as C}from"./en-DltMjSLJ.js";function w(e,c){d(c,!0);let h=[];S.helpers.multiple(()=>`${S.person.firstName()} ${S.person.lastName()}`,{count:1e3}).sort((e,t)=>e.localeCompare(t)).forEach(e=>{let t=e[0].toUpperCase(),n=h.findLast(e=>e.type===`header`);(!n||n.letter!==t)&&h.push({type:`header`,letter:t}),h.push({type:`contact`,name:e})});let y=h.flatMap((e,t)=>e.type===`header`?[t]:[]),b,C=g(0),w=({index:e})=>{if(h[e].type===`header`)return{style:{"z-index":`1`,...r(C)===e?{position:`sticky`,top:`0`}:{}}}},D=e=>{if(!b)return;let t=b.findItemIndex(e);f(C,[...y].reverse().find(e=>t>=e),!0)};{let c=(e,r=v)=>{var c=s(),u=t(c),d=e=>{var t=T();n(t,`
          height: 32px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          background: #f3f4f6;
          border-bottom: solid 1px #e5e7eb;
          color: #6b7280;
          font-size: 13px;
          font-weight: 600;
        `);var o=_(t,!0);l(()=>i(o,r().letter)),a(e,t)},f=e=>{var t=E(),n=_(t,!0);l(()=>i(n,r().name)),a(e,t)};o(u,e=>{r().type===`header`?e(d):e(f,-1)}),a(e,c)},d=u(()=>[r(C)]);p(x(e,{get data(){return h},style:`height: 100vh; font-family: system-ui, sans-serif; font-size: 14px;`,itemProps:w,get keepMounted(){return r(d)},onscroll:D,children:c,$$slots:{default:!0}}),e=>b=e,()=>b)}m()}var T,E;function D(){return(D=e((()=>{c(),h(),C(),b(),T=y(`<div> </div>`),E=y(`<div style="
          height: 48px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          border-bottom: solid 1px #f0f0f0;
          background: #fff;
        "> </div>`)})))()}var O,k,A;function j(){return(j=e((()=>{b(),D(),O={component:x},k={render:()=>({Component:w})},A=[`StickyGroup`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: StickyGroupComponent
  })
}`,...k.parameters?.docs?.source}}}})))()}j();export{k as StickyGroup,A as __namedExportsOrder,O as default};