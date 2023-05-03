import{j as e}from"./jsx-runtime-c3d7f245.js";import{I as R,H as W,S as _}from"./common-bae0917e.js";import{R as s}from"./react-window-2d01ca09.js";import"./index-c6dae603.js";import"./AutoSizer-8f234528.js";import"./possibleConstructorReturn-400c5699.js";import"./assertThisInitialized-60dddfb4.js";import"./getPrototypeOf-e4242ba0.js";import"./inheritsLoose-495bf4f7.js";const v={component:s,decorators:[r=>e("div",{style:{height:"100vh",display:"flex"},children:e(r,{})})]},n={render:()=>e(s,{count:1e4,Component:R})},o={render:()=>e(s,{count:1e4,Component:W})},t={render:()=>e(s,{count:1e6,Component:_})};var a,c,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactWindowList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,p,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactWindowList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var O,u,C;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactWindowList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(C=(u=t.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};const S=["DynamicHeight","HeavyComponent","OneMillion"];export{n as DynamicHeight,o as HeavyComponent,t as OneMillion,S as __namedExportsOrder,v as default};
//# sourceMappingURL=react-window.stories-aab4a428.js.map
