import{j as n}from"./jsx-runtime-c3d7f245.js";import{I as R,H as _,S as W}from"./common-bae0917e.js";import{R as t}from"./react-virtuoso-c34ef023.js";import"./index-c6dae603.js";import"./index-eb008d06.js";const I={component:t},e={render:()=>n(t,{count:1e4,Component:R})},o={render:()=>n(t,{count:1e4,Component:_})},r={render:()=>n(t,{count:1e6,Component:W})};var a,c,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtuosoList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,p,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtuosoList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var O,C,d;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactVirtuosoList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(d=(C=r.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};const y=["DynamicHeight","HeavyComponent","OneMillion"];export{e as DynamicHeight,o as HeavyComponent,r as OneMillion,y as __namedExportsOrder,I as default};
//# sourceMappingURL=react-virtuoso.stories-d6d35f2b.js.map
