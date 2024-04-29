import{j as e}from"./index-CKMfL3Jx.js";import"./entry-preview-D8_MYwTg.js";import{I as y,D as g,H as x,a as j,S as D}from"./common-DzdIghKV.js";import{R as n}from"./react-virtual-CF5SVx0r.js";import"./index-xJp9Kd2E.js";const L={component:n,decorators:[r=>e.jsx("div",{style:{height:"100vh"},children:e.jsx(r,{})})]},t={render:()=>e.jsx(n,{count:1e4,Component:y})},o={render:()=>e.jsx(n,{count:1e4,Component:g})},s={render:()=>e.jsx(n,{count:1e4,Component:x})},a={render:()=>e.jsx(n,{count:1e4,Component:j})},c={render:()=>e.jsx(n,{count:1e6,Component:D})};var m,i,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,O,C;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={DynamicItem} />;
  }
}`,...(C=(O=o.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var d,R,_;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(_=(R=s.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var W,l,N;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={DynamicImageItem} />;
  }
}`,...(N=(l=a.parameters)==null?void 0:l.docs)==null?void 0:N.source}}};var T,U,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactVirtualList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(I=(U=c.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};const f=["RenderCount","DynamicHeight","HeavyComponent","DynamicImage","OneMillion"];export{o as DynamicHeight,a as DynamicImage,s as HeavyComponent,c as OneMillion,t as RenderCount,f as __namedExportsOrder,L as default};
