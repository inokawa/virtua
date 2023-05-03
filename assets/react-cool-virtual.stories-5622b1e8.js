import{j as e}from"./jsx-runtime-c3d7f245.js";import{I as l,H as R,S as _}from"./common-bae0917e.js";import{R as s}from"./react-cool-virtual-ef6aa415.js";import"./index-c6dae603.js";const h={component:s,decorators:[r=>e("div",{style:{height:"100vh",display:"flex"},children:e(r,{})})]},o={render:()=>e(s,{count:1e4,Component:l})},t={render:()=>e(s,{count:1e4,Component:R})},n={render:()=>e(s,{count:1e6,Component:_})};var a,c,m;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactCoolVirtualList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,p,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactCoolVirtualList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var C,O,d;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactCoolVirtualList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(d=(O=n.parameters)==null?void 0:O.docs)==null?void 0:d.source}}};const y=["DynamicHeight","HeavyComponent","OneMillion"];export{o as DynamicHeight,t as HeavyComponent,n as OneMillion,y as __namedExportsOrder,h as default};
//# sourceMappingURL=react-cool-virtual.stories-5622b1e8.js.map
