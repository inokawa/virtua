import{j as e}from"./jsx-runtime-u17CrQMm.js";import{a as p}from"./iframe-CxFrzBaG.js";import{D as v,a as y,H as h,b as f,S as I,I as j}from"./common-DTq48UMM.js";import{R as N}from"./react-virtual-Cse_S2om.js";import{R as T}from"./react-virtuoso-CTBqycml.js";import{R as W}from"./react-virtualized-DvvRX4fp.js";import{R as _}from"./react-window-BkFtzidm.js";import{V as g}from"./virtua-DuIUcvd9.js";import"./preload-helper-PPVm8Dsz.js";import"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import"./index-SqQk38Sl.js";import"./index-BFNkZ8A_.js";import"./extends-DDykod_l.js";import"./defineProperty-CegpTSss.js";import"./setPrototypeOf-NYsvoNVB.js";import"./objectWithoutProperties-BGYzkVOp.js";const G={component:v,tags:["comparison"]},U=({count:r})=>e.jsx("input",{type:"range",defaultValue:"0",min:0,max:r,style:{width:"85%"},onChange:o=>{Array.from(document.querySelectorAll('*[style*="overflow"]')).filter(t=>/(auto|scroll)/.test(t.style.overflow)||/(auto|scroll)/.test(t.style.overflowY)).forEach(t=>{t.scrollTop=t.scrollHeight/r*Number(o.target.value)})}}),w=r=>{switch(r){case"react-virtualized":return W;case"react-window":return _;case"react-virtuoso":return T;case"react-virtual":return N}},n=({count:r,ItemComponent:o})=>{const[u,t]=p.useState("react-virtualized"),O=p.useRef(null),x=p.useRef(null),R=w(u);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx("div",{style:{flex:1},children:"virtua"}),e.jsx("div",{style:{flex:1},children:e.jsxs("select",{value:u,onChange:d=>t(d.target.value),children:[e.jsx("option",{value:"react-virtualized",children:"react-virtualized"}),e.jsx("option",{value:"react-window",children:"react-window"}),e.jsx("option",{value:"react-virtuoso",children:"react-virtuoso"}),e.jsx("option",{value:"react-virtual",children:"react-virtual"})]})})]}),e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsxs("label",{children:["scroll to index:",e.jsx("input",{defaultValue:100,type:"number",min:0,max:r-1,step:1}),e.jsx("button",{onClick:d=>{const C=Number(d.target.previousSibling.value);O.current?.scrollToIndex(C),x.current?.scrollToIndex(C)},children:"scroll"})]})}),e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsxs("label",{style:{width:"100%"},children:["scroll position:",e.jsx(U,{count:r})]})}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[e.jsx("div",{style:{width:"50%"},children:e.jsx(g,{handle:O,count:r,Component:o})}),e.jsx("div",{style:{width:"50%"},children:e.jsx(R,{handle:x,count:r,Component:o})})]})]})},s={render:()=>e.jsx(n,{count:1e4,ItemComponent:j})},a={render:()=>e.jsx(n,{count:1e4,ItemComponent:v})},c={render:()=>e.jsx(n,{count:1e4,ItemComponent:h})},i={render:()=>e.jsx(n,{count:1e4,ItemComponent:f})},l={render:()=>e.jsx(n,{count:1e4,ItemComponent:y})},m={render:()=>e.jsx(n,{count:1e6,ItemComponent:I})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const K=["RenderCount","DynamicHeight","HeavyDOM","HeavyJS","DynamicImage","OneMillion"];export{a as DynamicHeight,l as DynamicImage,c as HeavyDOM,i as HeavyJS,m as OneMillion,s as RenderCount,K as __namedExportsOrder,G as default};
