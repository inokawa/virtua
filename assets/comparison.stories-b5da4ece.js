import{j as e,a as t}from"./jsx-runtime-c3d7f245.js";import{r as T}from"./index-c6dae603.js";import{D as y,I as U,H as w,S as g,a as D}from"./common-5b323d1c.js";import{R as S}from"./react-cool-virtual-ef6aa415.js";import{R as L}from"./react-virtual-75d82430.js";import{R as H}from"./react-virtuoso-c34ef023.js";import{R as V}from"./react-virtualized-ef7bccdb.js";import{R as z}from"./react-window-2d01ca09.js";import{V as F}from"./virtua-f297234e.js";import"./index-eb008d06.js";import"./assertThisInitialized-60dddfb4.js";import"./possibleConstructorReturn-400c5699.js";import"./getPrototypeOf-e4242ba0.js";import"./clsx.m-1229b3e0.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./AutoSizer-8f234528.js";import"./inheritsLoose-495bf4f7.js";import"./index-778f7dbf.js";const oe={component:y},j=r=>{switch(r){case"react-virtualized":return V;case"react-window":return z;case"react-virtuoso":return H;case"react-virtual":return L;case"react-cool-virtual":return S}},s=({count:r,ItemComponent:c})=>{const[m,I]=T.useState("react-virtualized"),N=j(m);return t("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[t("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:t("select",{value:m,onChange:x=>I(x.target.value),children:[e("option",{value:"react-virtualized",children:"react-virtualized"}),e("option",{value:"react-window",children:"react-window"}),e("option",{value:"react-virtuoso",children:"react-virtuoso"}),e("option",{value:"react-virtual",children:"react-virtual"}),e("option",{value:"react-cool-virtual",children:"react-cool-virtual"})]})})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:e(D,{count:r})}),t("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[e(F,{count:r,Component:c}),e(N,{count:r,Component:c})]})]})},o={render:()=>e(s,{count:1e4,ItemComponent:U})},n={render:()=>e(s,{count:1e4,ItemComponent:y})},a={render:()=>e(s,{count:1e4,ItemComponent:w})},i={render:()=>e(s,{count:1e6,ItemComponent:g})};var l,u,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={ItemWithRenderCount} />;
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,O,C;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicItem} />;
  }
}`,...(C=(O=n.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var v,R,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyItem} />;
  }
}`,...(f=(R=a.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var h,W,_;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <Frame count={ROW_COUNT} ItemComponent={SimpleItem} />;
  }
}`,...(_=(W=i.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const ne=["RenderCount","DynamicHeight","HeavyComponent","OneMillion"];export{n as DynamicHeight,a as HeavyComponent,i as OneMillion,o as RenderCount,ne as __namedExportsOrder,oe as default};
//# sourceMappingURL=comparison.stories-b5da4ece.js.map
