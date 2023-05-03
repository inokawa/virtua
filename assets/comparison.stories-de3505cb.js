import{j as e,a as t}from"./jsx-runtime-c3d7f245.js";import{r as W}from"./index-c6dae603.js";import{I as f,H as _,S as I,a as N}from"./common-bae0917e.js";import{R as w}from"./react-cool-virtual-ef6aa415.js";import{R as T}from"./react-virtual-75d82430.js";import{R as U}from"./react-virtuoso-c34ef023.js";import{R as g}from"./react-virtualized-ef7bccdb.js";import{R as L}from"./react-window-2d01ca09.js";import{V as S}from"./virtua-f297234e.js";import"./index-eb008d06.js";import"./assertThisInitialized-60dddfb4.js";import"./possibleConstructorReturn-400c5699.js";import"./getPrototypeOf-e4242ba0.js";import"./clsx.m-1229b3e0.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./AutoSizer-8f234528.js";import"./inheritsLoose-495bf4f7.js";import"./index-778f7dbf.js";const Z={component:f},H=r=>{switch(r){case"react-virtualized":return g;case"react-window":return L;case"react-virtuoso":return U;case"react-virtual":return T;case"react-cool-virtual":return w}},i=({count:r,ItemComponent:s})=>{const[c,h]=W.useState("react-virtualized"),x=H(c);return t("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[t("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:t("select",{value:c,onChange:y=>h(y.target.value),children:[e("option",{value:"react-virtualized",children:"react-virtualized"}),e("option",{value:"react-window",children:"react-window"}),e("option",{value:"react-virtuoso",children:"react-virtuoso"}),e("option",{value:"react-virtual",children:"react-virtual"}),e("option",{value:"react-cool-virtual",children:"react-cool-virtual"})]})})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:e(N,{count:r})}),t("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[e(S,{count:r,Component:s}),e(x,{count:r,Component:s})]})]})},o={render:()=>e(i,{count:1e4,ItemComponent:f})},n={render:()=>e(i,{count:1e4,ItemComponent:_})},a={render:()=>e(i,{count:1e6,ItemComponent:I})};var m,l,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={ItemWithRenderCount} />;
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,d,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyItem} />;
  }
}`,...(v=(d=n.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var O,C,R;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <Frame count={ROW_COUNT} ItemComponent={SimpleItem} />;
  }
}`,...(R=(C=a.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const $=["DynamicHeight","HeavyComponent","OneMillion"];export{o as DynamicHeight,n as HeavyComponent,a as OneMillion,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=comparison.stories-de3505cb.js.map
