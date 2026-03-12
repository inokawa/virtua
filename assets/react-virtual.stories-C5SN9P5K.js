import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as i,a as u,H as O,b as p,S as d,I as C}from"./common-DTq48UMM.js";import{R as n}from"./react-virtual-Cse_S2om.js";import"./iframe-CxFrzBaG.js";import"./preload-helper-PPVm8Dsz.js";import"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import"./index-SqQk38Sl.js";import"./index-BFNkZ8A_.js";const I={component:n,decorators:[r=>e.jsx("div",{style:{height:"100vh"},children:e.jsx(r,{})})],tags:["comparison"]},t={render:()=>e.jsx(n,{count:1e4,Component:C})},o={render:()=>e.jsx(n,{count:1e4,Component:i})},s={render:()=>e.jsx(n,{count:1e4,Component:O})},a={render:()=>e.jsx(n,{count:1e4,Component:p})},c={render:()=>e.jsx(n,{count:1e4,Component:u})},m={render:()=>e.jsx(n,{count:1e6,Component:d})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={DynamicItem} />;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={HeavyDOMItem} />;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={HeavyJsItem} />;
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={DynamicImageItem} />;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactVirtualList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...m.parameters?.docs?.source}}};const g=["RenderCount","DynamicHeight","HeavyDOM","HeavyJS","DynamicImage","OneMillion"];export{o as DynamicHeight,c as DynamicImage,s as HeavyDOM,a as HeavyJS,m as OneMillion,t as RenderCount,g as __namedExportsOrder,I as default};
