import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-CB-w0M79.js";import{D as v,I as y,H as h,a as f,b as I,S as j}from"./common-Bo12Qd-6.js";import{R as N}from"./react-virtual-CX8tFIA3.js";import{R as T}from"./react-virtuoso-najZo9UA.js";import{R as W}from"./react-virtualized-CjJAvsma.js";import{R as _}from"./react-window-DZH09k3R.js";import{V as g}from"./virtua-BZ33k4D0.js";import"./preload-helper-PPVm8Dsz.js";import"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import"./index-fgf1ZaZ7.js";import"./index-CwQm2YIR.js";import"./assertThisInitialized-Byxet6Ov.js";import"./defineProperty-DWm6lKFB.js";const Y={component:v,tags:["comparison"]},U=({count:r})=>e.jsx("input",{type:"range",defaultValue:"0",min:0,max:r,style:{width:"85%"},onChange:o=>{Array.from(document.querySelectorAll('*[style*="overflow"]')).filter(t=>/(auto|scroll)/.test(t.style.overflow)||/(auto|scroll)/.test(t.style.overflowY)).forEach(t=>{t.scrollTop=t.scrollHeight/r*Number(o.target.value)})}}),w=r=>{switch(r){case"react-virtualized":return W;case"react-window":return _;case"react-virtuoso":return T;case"react-virtual":return N}},n=({count:r,ItemComponent:o})=>{const[u,t]=p.useState("react-virtualized"),O=p.useRef(null),x=p.useRef(null),R=w(u);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx("div",{style:{flex:1},children:"virtua"}),e.jsx("div",{style:{flex:1},children:e.jsxs("select",{value:u,onChange:d=>t(d.target.value),children:[e.jsx("option",{value:"react-virtualized",children:"react-virtualized"}),e.jsx("option",{value:"react-window",children:"react-window"}),e.jsx("option",{value:"react-virtuoso",children:"react-virtuoso"}),e.jsx("option",{value:"react-virtual",children:"react-virtual"})]})})]}),e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsxs("label",{children:["scroll to index:",e.jsx("input",{defaultValue:100,type:"number",min:0,max:r-1,step:1}),e.jsx("button",{onClick:d=>{const C=Number(d.target.previousSibling.value);O.current?.scrollToIndex(C),x.current?.scrollToIndex(C)},children:"scroll"})]})}),e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsxs("label",{style:{width:"100%"},children:["scroll position:",e.jsx(U,{count:r})]})}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[e.jsx("div",{style:{width:"50%"},children:e.jsx(g,{handle:O,count:r,Component:o})}),e.jsx("div",{style:{width:"50%"},children:e.jsx(R,{handle:x,count:r,Component:o})})]})]})},s={render:()=>e.jsx(n,{count:1e4,ItemComponent:y})},a={render:()=>e.jsx(n,{count:1e4,ItemComponent:v})},c={render:()=>e.jsx(n,{count:1e4,ItemComponent:h})},i={render:()=>e.jsx(n,{count:1e4,ItemComponent:f})},l={render:()=>e.jsx(n,{count:1e4,ItemComponent:I})},m={render:()=>e.jsx(n,{count:1e6,ItemComponent:j})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={ItemWithRenderCount} />;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicItem} />;
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyDOMItem} />;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyJsItem} />;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicImageItem} />;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <Frame count={ROW_COUNT} ItemComponent={SimpleItem} />;
  }
}`,...m.parameters?.docs?.source}}};const B=["RenderCount","DynamicHeight","HeavyDOM","HeavyJS","DynamicImage","OneMillion"];export{a as DynamicHeight,l as DynamicImage,c as HeavyDOM,i as HeavyJS,m as OneMillion,s as RenderCount,B as __namedExportsOrder,Y as default};
