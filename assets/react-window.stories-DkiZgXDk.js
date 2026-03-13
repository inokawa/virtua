import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as i,a as O,H as p,b as d,S as u,I as C}from"./common-CcvC0EMJ.js";import{R as r}from"./react-window-CPS9Pe0V.js";import"./iframe-B2AKhUQV.js";import"./preload-helper-PPVm8Dsz.js";import"./chunk-4X5ZEQ5K-DKZdp5Hc.js";const y={component:r,decorators:[n=>e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{})})],tags:["comparison"]},t={render:()=>e.jsx(r,{count:1e4,Component:C})},o={render:()=>e.jsx(r,{count:1e4,Component:i})},s={render:()=>e.jsx(r,{count:1e4,Component:p})},a={render:()=>e.jsx(r,{count:1e4,Component:d})},c={render:()=>e.jsx(r,{count:1e4,Component:O})},m={render:()=>e.jsx(r,{count:1e6,Component:u})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactWindowList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactWindowList count={ROW_COUNT} Component={DynamicItem} />;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactWindowList count={ROW_COUNT} Component={HeavyDOMItem} />;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactWindowList count={ROW_COUNT} Component={HeavyJsItem} />;
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactWindowList count={ROW_COUNT} Component={DynamicImageItem} />;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactWindowList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...m.parameters?.docs?.source}}};const I=["RenderCount","DynamicHeight","HeavyDOM","HeavyJS","DynamicImage","OneMillion"];export{o as DynamicHeight,c as DynamicImage,s as HeavyDOM,a as HeavyJS,m as OneMillion,t as RenderCount,I as __namedExportsOrder,y as default};
