import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,B as n,R as r,T as i,Tt as a,V as o,Z as s,_t as c,ct as l,ft as u,gt as d,lt as f,p,q as m,rt as h,s as g,tt as _,wt as v,z as y}from"./iframe-DUzk1V4x.js";import{n as b,t as x}from"./VList-BK0TGp4a.js";import{n as S,t as C}from"./en-DltMjSLJ.js";function w(e,a){c(a,!0);let o=[];S.helpers.multiple(()=>`${S.person.firstName()} ${S.person.lastName()}`,{count:1e3}).sort((e,t)=>e.localeCompare(t)).forEach(e=>{let t=e[0].toUpperCase(),n=o.findLast(e=>e.type===`header`);(!n||n.letter!==t)&&o.push({type:`header`,letter:t}),o.push({type:`contact`,name:e})});let g=o.flatMap((e,t)=>e.type===`header`?[t]:[]),b,C=f(0),w=({index:e})=>{if(o[e].type===`header`)return{style:{"z-index":`1`,...m(C)===e?{position:`sticky`,top:`0`}:{}}}},D=e=>{if(!b)return;let t=b.findItemIndex(e);l(C,[...g].reverse().find(e=>t>=e),!0)};{let a=(e,a=v)=>{var o=n(),c=_(o),l=e=>{var t=T();i(t,`
          height: 32px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          background: #f3f4f6;
          border-bottom: solid 1px #e5e7eb;
          color: #6b7280;
          font-size: 13px;
          font-weight: 600;
        `);var n=h(t,!0);s(()=>r(n,a().letter)),y(e,t)},u=e=>{var t=E(),n=h(t,!0);s(()=>r(n,a().name)),y(e,t)};t(c,e=>{a().type===`header`?e(l):e(u,-1)}),y(e,o)},c=u(()=>[m(C)]);p(x(e,{get data(){return o},style:`height: 100vh; font-family: system-ui, sans-serif; font-size: 14px;`,itemProps:w,get keepMounted(){return m(c)},onscroll:D,children:a,$$slots:{default:!0}}),e=>b=e,()=>b)}d()}var T,E;function D(){return(D=e((()=>{a(),g(),C(),b(),T=o(`<div> </div>`),E=o(`<div style="
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