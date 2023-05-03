import{j as e,a as t}from"./jsx-runtime-c3d7f245.js";import{r as l}from"./index-c6dae603.js";import{D as w,I as L,H,S as V,a as b}from"./common-6e990dbd.js";import{R as z}from"./react-cool-virtual-e9733c79.js";import{R as F}from"./react-virtual-3cb2800c.js";import{R as j}from"./react-virtuoso-54c1e7b3.js";import{R as E}from"./react-virtualized-85bc7e01.js";import{R as M}from"./react-window-e075fe3e.js";import{V as k}from"./virtua-47358bf6.js";import"./index-eb008d06.js";import"./assertThisInitialized-60dddfb4.js";import"./possibleConstructorReturn-400c5699.js";import"./getPrototypeOf-e4242ba0.js";import"./clsx.m-1229b3e0.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./AutoSizer-8f234528.js";import"./inheritsLoose-495bf4f7.js";import"./index-778f7dbf.js";const ce={component:w},q=r=>{switch(r){case"react-virtualized":return E;case"react-window":return M;case"react-virtuoso":return j;case"react-virtual":return F;case"react-cool-virtual":return z}},s=({count:r,ItemComponent:m})=>{const[u,D]=l.useState("react-virtualized"),d=l.useRef(null),p=l.useRef(null),S=q(u);return t("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[t("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:t("select",{value:u,onChange:c=>D(c.target.value),children:[e("option",{value:"react-virtualized",children:"react-virtualized"}),e("option",{value:"react-window",children:"react-window"}),e("option",{value:"react-virtuoso",children:"react-virtuoso"}),e("option",{value:"react-virtual",children:"react-virtual"}),e("option",{value:"react-cool-virtual",children:"react-cool-virtual"})]})})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:t("label",{children:["scroll to index:",e("input",{defaultValue:100,type:"number",min:0,max:r-1,step:1}),e("button",{onClick:c=>{var C,O;const v=Number(c.target.previousSibling.value);(C=d.current)==null||C.scrollToIndex(v),(O=p.current)==null||O.scrollToIndex(v)},children:"scroll"})]})}),e("div",{style:{display:"flex",flexDirection:"row"},children:t("label",{style:{width:"100%"},children:["scroll position:",e(b,{count:r})]})}),t("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[e(k,{handle:d,count:r,Component:m}),e(S,{handle:p,count:r,Component:m})]})]})},o={render:()=>e(s,{count:1e4,ItemComponent:L})},n={render:()=>e(s,{count:1e4,ItemComponent:w})},a={render:()=>e(s,{count:1e4,ItemComponent:H})},i={render:()=>e(s,{count:1e6,ItemComponent:V})};var R,f,h;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={ItemWithRenderCount} />;
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,y,I;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicItem} />;
  }
}`,...(I=(y=n.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var W,_,N;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyItem} />;
  }
}`,...(N=(_=a.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var T,U,g;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <Frame count={ROW_COUNT} ItemComponent={SimpleItem} />;
  }
}`,...(g=(U=i.parameters)==null?void 0:U.docs)==null?void 0:g.source}}};const le=["RenderCount","DynamicHeight","HeavyComponent","OneMillion"];export{n as DynamicHeight,a as HeavyComponent,i as OneMillion,o as RenderCount,le as __namedExportsOrder,ce as default};
//# sourceMappingURL=comparison.stories-781907e4.js.map
