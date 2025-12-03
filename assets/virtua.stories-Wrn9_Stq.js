import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as i,D as u,H as O,a as p,b as d,S as C}from"./common-CM7FP5RM.js";import{V as n}from"./virtua-C_Ti3hJj.js";import"./iframe-BRObDRYi.js";import"./preload-helper-PPVm8Dsz.js";import"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import"./index-BYuJ39Ua.js";import"./index-CaIyq89X.js";const l={component:n,decorators:[r=>e.jsx("div",{style:{height:"100vh"},children:e.jsx(r,{})})],tags:["comparison"]},t={render:()=>e.jsx(n,{count:1e4,Component:i})},o={render:()=>e.jsx(n,{count:1e4,Component:u})},s={render:()=>e.jsx(n,{count:1e4,Component:O})},a={render:()=>e.jsx(n,{count:1e4,Component:p})},c={render:()=>e.jsx(n,{count:1e4,Component:d})},m={render:()=>e.jsx(n,{count:1e6,Component:C})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={DynamicItem} />;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={HeavyDOMItem} />;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={HeavyJsItem} />;
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={DynamicImageItem} />;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <VirtuaList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...m.parameters?.docs?.source}}};const g=["RenderCount","DynamicHeight","HeavyDOM","HeavyJS","DynamicImage","OneMillion"];export{o as DynamicHeight,c as DynamicImage,s as HeavyDOM,a as HeavyJS,m as OneMillion,t as RenderCount,g as __namedExportsOrder,l as default};
