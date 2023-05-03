import{j as o}from"./jsx-runtime-c3d7f245.js";import{I as _,H as R,S as W}from"./common-bae0917e.js";import{V as t}from"./virtua-f297234e.js";import"./index-c6dae603.js";import"./index-778f7dbf.js";const I={component:t},e={render:()=>o(t,{count:1e4,Component:_})},r={render:()=>o(t,{count:1e4,Component:R})},n={render:()=>o(t,{count:1e6,Component:W})};var a,m,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,p,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var O,C,d;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <VirtuaList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(d=(C=n.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};const y=["DynamicHeight","HeavyComponent","OneMillion"];export{e as DynamicHeight,r as HeavyComponent,n as OneMillion,y as __namedExportsOrder,I as default};
//# sourceMappingURL=virtua.stories-161e39e5.js.map
