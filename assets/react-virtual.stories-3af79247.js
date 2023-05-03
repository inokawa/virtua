import{j as e}from"./jsx-runtime-c3d7f245.js";import{I as l,H as R,S as _}from"./common-bae0917e.js";import{R as s}from"./react-virtual-75d82430.js";import"./index-c6dae603.js";const h={component:s,decorators:[r=>e("div",{style:{height:"100vh",display:"flex"},children:e(r,{})})]},t={render:()=>e(s,{count:1e4,Component:l})},n={render:()=>e(s,{count:1e4,Component:R})},o={render:()=>e(s,{count:1e6,Component:_})};var a,c,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,p,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var O,d,C;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactVirtualList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(C=(d=o.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};const y=["DynamicHeight","HeavyComponent","OneMillion"];export{t as DynamicHeight,n as HeavyComponent,o as OneMillion,y as __namedExportsOrder,h as default};
//# sourceMappingURL=react-virtual.stories-3af79247.js.map
