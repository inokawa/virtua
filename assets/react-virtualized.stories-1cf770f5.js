import{j as e}from"./jsx-runtime-c3d7f245.js";import{I as l,H as R,S as _}from"./common-bae0917e.js";import{R as s}from"./react-virtualized-ef7bccdb.js";import"./index-c6dae603.js";import"./assertThisInitialized-60dddfb4.js";import"./possibleConstructorReturn-400c5699.js";import"./getPrototypeOf-e4242ba0.js";import"./clsx.m-1229b3e0.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./AutoSizer-8f234528.js";import"./index-eb008d06.js";const z={component:s,decorators:[r=>e("div",{style:{height:"100vh",display:"flex"},children:e(r,{})})]},t={render:()=>e(s,{count:1e4,Component:l})},o={render:()=>e(s,{count:1e4,Component:R})},n={render:()=>e(s,{count:1e6,Component:_})};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualizedList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,p,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualizedList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,O,C;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactVirtualizedList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(C=(O=n.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};const V=["DynamicHeight","HeavyComponent","OneMillion"];export{t as DynamicHeight,o as HeavyComponent,n as OneMillion,V as __namedExportsOrder,z as default};
//# sourceMappingURL=react-virtualized.stories-1cf770f5.js.map
