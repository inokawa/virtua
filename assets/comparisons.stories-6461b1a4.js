import{j as e,a as o}from"./jsx-runtime-c3d7f245.js";import{r as d}from"./index-c6dae603.js";import{D as S,I as b,H,S as L}from"./common-0e1f344c.js";import{R as V}from"./react-cool-virtual-df3d4173.js";import{R as z}from"./react-virtual-7ab94db4.js";import{R as F}from"./react-virtuoso-00f3a8ab.js";import{R as j}from"./react-virtualized-78f282e1.js";import{R as E}from"./react-window-89f3257a.js";import{V as A}from"./virtua-b7bd5199.js";import"./index-eb008d06.js";import"./assertThisInitialized-60dddfb4.js";import"./possibleConstructorReturn-400c5699.js";import"./getPrototypeOf-e4242ba0.js";import"./clsx.m-1229b3e0.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./AutoSizer-8f234528.js";import"./inheritsLoose-495bf4f7.js";import"./index-778f7dbf.js";const le={component:S},M=({count:r})=>e("input",{type:"range",defaultValue:"0",min:0,max:r,style:{width:"85%"},onChange:n=>{Array.from(document.querySelectorAll('*[style*="overflow"]')).filter(t=>/(auto|scroll)/.test(t.style.overflow)||/(auto|scroll)/.test(t.style.overflowY)).forEach(t=>{t.scrollTop=t.scrollHeight/r*Number(n.target.value)})}}),k=r=>{switch(r){case"react-virtualized":return j;case"react-window":return E;case"react-virtuoso":return F;case"react-virtual":return z;case"react-cool-virtual":return V}},c=({count:r,ItemComponent:n})=>{const[m,t]=d.useState("react-virtualized"),p=d.useRef(null),v=d.useRef(null),D=k(m);return o("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[o("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:o("select",{value:m,onChange:u=>t(u.target.value),children:[e("option",{value:"react-virtualized",children:"react-virtualized"}),e("option",{value:"react-window",children:"react-window"}),e("option",{value:"react-virtuoso",children:"react-virtuoso"}),e("option",{value:"react-virtual",children:"react-virtual"}),e("option",{value:"react-cool-virtual",children:"react-cool-virtual"})]})})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:o("label",{children:["scroll to index:",e("input",{defaultValue:100,type:"number",min:0,max:r-1,step:1}),e("button",{onClick:u=>{var C,O;const f=Number(u.target.previousSibling.value);(C=p.current)==null||C.scrollToIndex(f),(O=v.current)==null||O.scrollToIndex(f)},children:"scroll"})]})}),e("div",{style:{display:"flex",flexDirection:"row"},children:o("label",{style:{width:"100%"},children:["scroll position:",e(M,{count:r})]})}),o("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[e(A,{handle:p,count:r,Component:n}),e(D,{handle:v,count:r,Component:n})]})]})},a={render:()=>e(c,{count:1e4,ItemComponent:b})},i={render:()=>e(c,{count:1e4,ItemComponent:S})},s={render:()=>e(c,{count:1e4,ItemComponent:H})},l={render:()=>e(c,{count:1e6,ItemComponent:L})};var h,R,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={ItemWithRenderCount} />;
  }
}`,...(y=(R=a.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var x,I,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicItem} />;
  }
}`,...(N=(I=i.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var T,W,_;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyItem} />;
  }
}`,...(_=(W=s.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var g,w,U;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <Frame count={ROW_COUNT} ItemComponent={SimpleItem} />;
  }
}`,...(U=(w=l.parameters)==null?void 0:w.docs)==null?void 0:U.source}}};const ce=["RenderCount","DynamicHeight","HeavyComponent","OneMillion"];export{i as DynamicHeight,s as HeavyComponent,l as OneMillion,a as RenderCount,ce as __namedExportsOrder,le as default};
//# sourceMappingURL=comparisons.stories-6461b1a4.js.map
