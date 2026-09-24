import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-Dciai4-q.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./common-04j6Aiib.js";import{n as d,t as f}from"./react-virtual-DlTmjUch.js";import{n as p,t as m}from"./react-virtuoso-7pFU0sNS.js";import{n as h,t as g}from"./react-virtualized-DXCV4dVr.js";import{n as _,t as v}from"./react-window-D4UgYjGe.js";import{n as y,t as b}from"./virtua-Cm0tH9Rv.js";var x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=t((()=>{x=e(n(),1),l(),d(),p(),h(),_(),y(),S=r(),C={component:o,tags:[`comparison`]},w=({count:e})=>(0,S.jsx)(`input`,{type:`range`,defaultValue:`0`,min:0,max:e,style:{width:`85%`},onChange:t=>{Array.from(document.querySelectorAll(`*[style*="overflow"]`)).filter(e=>/(auto|scroll)/.test(e.style.overflow)||/(auto|scroll)/.test(e.style.overflowY)).forEach(n=>{n.scrollTop=n.scrollHeight/e*Number(t.target.value)})}}),T=e=>{switch(e){case`react-virtualized`:return g;case`react-window`:return v;case`react-virtuoso`:return m;case`react-virtual`:return f}},E=({count:e,ItemComponent:t})=>{let[n,r]=(0,x.useState)(`react-virtualized`),i=(0,x.useRef)(null),a=(0,x.useRef)(null),o=T(n);return(0,S.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`},children:[(0,S.jsx)(`div`,{style:{flex:1},children:`virtua`}),(0,S.jsx)(`div`,{style:{flex:1},children:(0,S.jsxs)(`select`,{value:n,onChange:e=>r(e.target.value),children:[(0,S.jsx)(`option`,{value:`react-virtualized`,children:`react-virtualized`}),(0,S.jsx)(`option`,{value:`react-window`,children:`react-window`}),(0,S.jsx)(`option`,{value:`react-virtuoso`,children:`react-virtuoso`}),(0,S.jsx)(`option`,{value:`react-virtual`,children:`react-virtual`})]})})]}),(0,S.jsx)(`div`,{style:{display:`flex`,flexDirection:`row`},children:(0,S.jsxs)(`label`,{children:[`scroll to index:`,(0,S.jsx)(`input`,{defaultValue:100,type:`number`,min:0,max:e-1,step:1}),(0,S.jsx)(`button`,{onClick:e=>{let t=Number(e.target.previousSibling.value);i.current?.scrollToIndex(t),a.current?.scrollToIndex(t)},children:`scroll`})]})}),(0,S.jsx)(`div`,{style:{display:`flex`,flexDirection:`row`},children:(0,S.jsxs)(`label`,{style:{width:`100%`},children:[`scroll position:`,(0,S.jsx)(w,{count:e})]})}),(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,flex:1,gap:8,overflow:`hidden`},children:[(0,S.jsx)(`div`,{style:{width:`50%`},children:(0,S.jsx)(b,{handle:i,count:e,Component:t})}),(0,S.jsx)(`div`,{style:{width:`50%`},children:(0,S.jsx)(o,{handle:a,count:e,Component:t})})]})]})},D={render:()=>(0,S.jsx)(E,{count:1e4,ItemComponent:i})},O={render:()=>(0,S.jsx)(E,{count:1e4,ItemComponent:o})},k={render:()=>(0,S.jsx)(E,{count:1e4,ItemComponent:c})},A={render:()=>(0,S.jsx)(E,{count:1e4,ItemComponent:a})},j={render:()=>(0,S.jsx)(E,{count:1e4,ItemComponent:u})},M={render:()=>(0,S.jsx)(E,{count:1e6,ItemComponent:s})},N=[`RenderCount`,`DynamicHeight`,`HeavyDOM`,`HeavyJS`,`DynamicImage`,`OneMillion`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={ItemWithRenderCount} />;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicItem} />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyDOMItem} />;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyJsItem} />;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicImageItem} />;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <Frame count={ROW_COUNT} ItemComponent={SimpleItem} />;
  }
}`,...M.parameters?.docs?.source}}}})))()}P();export{O as DynamicHeight,j as DynamicImage,k as HeavyDOM,A as HeavyJS,M as OneMillion,D as RenderCount,N as __namedExportsOrder,C as default};