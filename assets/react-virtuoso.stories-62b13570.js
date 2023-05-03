import{j as e}from"./jsx-runtime-c3d7f245.js";import{I as R,H as _,S as l}from"./common-bae0917e.js";import{R as s}from"./react-virtuoso-c34ef023.js";import"./index-c6dae603.js";import"./index-eb008d06.js";const y={component:s,decorators:[r=>e("div",{style:{height:"100vh",display:"flex"},children:e(r,{})})]},o={render:()=>e(s,{count:1e4,Component:R})},t={render:()=>e(s,{count:1e4,Component:_})},n={render:()=>e(s,{count:1e6,Component:l})};var a,c,m;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtuosoList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,p,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtuosoList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var O,d,C;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactVirtuosoList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(C=(d=n.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};const H=["DynamicHeight","HeavyComponent","OneMillion"];export{o as DynamicHeight,t as HeavyComponent,n as OneMillion,H as __namedExportsOrder,y as default};
//# sourceMappingURL=react-virtuoso.stories-62b13570.js.map
