import{j as e}from"./jsx-runtime-CRdFn2pK.js";import"./iframe-BvAKqPok.js";import"./index-CVQug6lh.js";import{I as i,D as u,H as O,a as p,b as d,S as C}from"./common-CWPCzBHJ.js";import{R as t}from"./react-virtualized-CXeKrFuo.js";import"./preload-helper-PPVm8Dsz.js";import"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import"./assertThisInitialized-Byxet6Ov.js";import"./defineProperty-DWm6lKFB.js";const g={component:t,decorators:[r=>e.jsx("div",{style:{height:"100vh"},children:e.jsx(r,{})})],tags:["comparison"]},n={render:()=>e.jsx(t,{count:1e4,Component:i})},o={render:()=>e.jsx(t,{count:1e4,Component:u})},s={render:()=>e.jsx(t,{count:1e4,Component:O})},a={render:()=>e.jsx(t,{count:1e4,Component:p})},c={render:()=>e.jsx(t,{count:1e4,Component:d})},m={render:()=>e.jsx(t,{count:1e6,Component:C})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualizedList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualizedList count={ROW_COUNT} Component={DynamicItem} />;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualizedList count={ROW_COUNT} Component={HeavyDOMItem} />;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualizedList count={ROW_COUNT} Component={HeavyJsItem} />;
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualizedList count={ROW_COUNT} Component={DynamicImageItem} />;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactVirtualizedList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...m.parameters?.docs?.source}}};const D=["RenderCount","DynamicHeight","HeavyDOM","HeavyJS","DynamicImage","OneMillion"];export{o as DynamicHeight,c as DynamicImage,s as HeavyDOM,a as HeavyJS,m as OneMillion,n as RenderCount,D as __namedExportsOrder,g as default};
