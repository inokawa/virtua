import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{I as y,D as g,H as x,a as j,S as D}from"./common-CLNgeDZn.js";import{V as n}from"./virtua-TP94E8lA.js";import"./index-DRjF_FHU.js";import"./chunk-IJTMZAVK-C2T6v0-z.js";import"./index-uWwxbAOW.js";const f={component:n,decorators:[r=>e.jsx("div",{style:{height:"100vh"},children:e.jsx(r,{})})]},t={render:()=>e.jsx(n,{count:1e4,Component:y})},o={render:()=>e.jsx(n,{count:1e4,Component:g})},s={render:()=>e.jsx(n,{count:1e4,Component:x})},a={render:()=>e.jsx(n,{count:1e4,Component:j})},c={render:()=>e.jsx(n,{count:1e6,Component:D})};var m,i,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,O,C;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={DynamicItem} />;
  }
}`,...(C=(O=o.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var d,R,_;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(_=(R=s.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var W,N,T;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={DynamicImageItem} />;
  }
}`,...(T=(N=a.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var U,I,l;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <VirtuaList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(l=(I=c.parameters)==null?void 0:I.docs)==null?void 0:l.source}}};const E=["RenderCount","DynamicHeight","HeavyComponent","DynamicImage","OneMillion"];export{o as DynamicHeight,a as DynamicImage,s as HeavyComponent,c as OneMillion,t as RenderCount,E as __namedExportsOrder,f as default};
