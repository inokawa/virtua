import{j as e}from"./jsx-runtime-c3d7f245.js";import{I as _,H as l,S as R}from"./common-bae0917e.js";import{V as s}from"./virtua-f297234e.js";import"./index-c6dae603.js";import"./index-778f7dbf.js";const y={component:s,decorators:[r=>e("div",{style:{height:"100vh",display:"flex"},children:e(r,{})})]},n={render:()=>e(s,{count:1e4,Component:_})},t={render:()=>e(s,{count:1e4,Component:l})},o={render:()=>e(s,{count:1e6,Component:R})};var a,c,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,p,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var O,d,C;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <VirtuaList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(C=(d=o.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};const v=["DynamicHeight","HeavyComponent","OneMillion"];export{n as DynamicHeight,t as HeavyComponent,o as OneMillion,v as __namedExportsOrder,y as default};
//# sourceMappingURL=virtua.stories-ab86ff69.js.map
