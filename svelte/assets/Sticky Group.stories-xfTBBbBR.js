import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,B as n,Et as r,R as i,T as a,Tt as o,V as s,Z as c,_t as l,lt as u,p as d,pt as f,q as p,rt as m,s as h,tt as g,ut as _,vt as v,z as y}from"./iframe-jrEua9fy.js";import{n as b,t as x}from"./VList-D5MbjqWw.js";import{n as S,t as C}from"./en-DltMjSLJ.js";function w(e,r){v(r,!0);let s=[];S.helpers.multiple(()=>`${S.person.firstName()} ${S.person.lastName()}`,{count:1e3}).sort((e,t)=>e.localeCompare(t)).forEach(e=>{let t=e[0].toUpperCase(),n=s.findLast(e=>e.type===`header`);(!n||n.letter!==t)&&s.push({type:`header`,letter:t}),s.push({type:`contact`,name:e})});let h=s.flatMap((e,t)=>e.type===`header`?[t]:[]),b,C=_(0),w=({index:e})=>{if(s[e].type===`header`)return{style:{"z-index":`1`,...p(C)===e?{position:`sticky`,top:`0`}:{}}}},D=e=>{if(!b)return;let t=b.findItemIndex(e);u(C,[...h].reverse().find(e=>t>=e),!0)};{let r=(e,r=o)=>{var s=n(),l=g(s),u=e=>{var t=T();a(t,`
          height: 32px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          background: #f3f4f6;
          border-bottom: solid 1px #e5e7eb;
          color: #6b7280;
          font-size: 13px;
          font-weight: 600;
        `);var n=m(t,!0);c(()=>i(n,r().letter)),y(e,t)},d=e=>{var t=E(),n=m(t,!0);c(()=>i(n,r().name)),y(e,t)};t(l,e=>{r().type===`header`?e(u):e(d,-1)}),y(e,s)},l=f(()=>[p(C)]);d(x(e,{get data(){return s},style:`height: 100vh; font-family: system-ui, sans-serif; font-size: 14px;`,itemProps:w,get keepMounted(){return p(l)},onscroll:D,children:r,$$slots:{default:!0}}),e=>b=e,()=>b)}l()}var T,E;function D(){return(D=e((()=>{r(),h(),C(),b(),T=s(`<div> </div>`),E=s(`<div style="
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