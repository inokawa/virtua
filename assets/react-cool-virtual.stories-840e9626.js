import{j as n}from"./jsx-runtime-c3d7f245.js";import{I as l,H as R,S as _}from"./common-bae0917e.js";import{R as t}from"./react-cool-virtual-ef6aa415.js";import"./index-c6dae603.js";const H={component:t},e={render:()=>n(t,{count:1e4,Component:l})},o={render:()=>n(t,{count:1e4,Component:R})},r={render:()=>n(t,{count:1e6,Component:_})};var a,c,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactCoolVirtualList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,p,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactCoolVirtualList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var C,O,d;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactCoolVirtualList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(d=(O=r.parameters)==null?void 0:O.docs)==null?void 0:d.source}}};const I=["DynamicHeight","HeavyComponent","OneMillion"];export{e as DynamicHeight,o as HeavyComponent,r as OneMillion,I as __namedExportsOrder,H as default};
//# sourceMappingURL=react-cool-virtual.stories-840e9626.js.map
