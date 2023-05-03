import{j as o}from"./jsx-runtime-c3d7f245.js";import{I as R,H as l,S as _}from"./common-bae0917e.js";import{R as n}from"./react-virtual-75d82430.js";import"./index-c6dae603.js";const H={component:n},e={render:()=>o(n,{count:1e4,Component:R})},r={render:()=>o(n,{count:1e4,Component:l})},t={render:()=>o(n,{count:1e6,Component:_})};var a,c,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,p,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var O,C,d;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactVirtualList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(d=(C=t.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};const I=["DynamicHeight","HeavyComponent","OneMillion"];export{e as DynamicHeight,r as HeavyComponent,t as OneMillion,I as __namedExportsOrder,H as default};
//# sourceMappingURL=react-virtual.stories-84048fb2.js.map
