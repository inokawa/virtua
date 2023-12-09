import{a as e,j as o}from"./jsx-runtime-sgeEVxPu.js";import{r as p}from"./index-yp3VsGQP.js";import{D as L,I as F,a as z,H as j,S as E}from"./common-mj201Ba0.js";import{R as A}from"./react-virtual-C6IqgWVZ.js";import{R as M}from"./react-virtuoso-Z058Hisa.js";import{R as k}from"./react-virtualized-YzKD4Mnh.js";import{R as q}from"./react-window-CjnBTAY1.js";import{V as Y}from"./virtua-pDWJpeVm.js";import"./index-KLTnsmU9.js";import"./index-8dy-jdxy.js";import"./extends-dGVwEr9R.js";import"./possibleConstructorReturn-Ar3ikwlv.js";import"./defineProperty-G_ESCvJ5.js";import"./setPrototypeOf-ahVgEFUp.js";import"./assertThisInitialized-4q6YPdh3.js";import"./objectWithoutProperties-R3t5ZVok.js";import"./objectWithoutPropertiesLoose-9Q1jwsKS.js";import"./AutoSizer-8SCshaq9.js";import"./inheritsLoose-fS6oVJzb.js";import"./memoize-one.esm-hqe5SRxC.js";const pe={component:L},B=({count:r})=>e("input",{type:"range",defaultValue:"0",min:0,max:r,style:{width:"85%"},onChange:a=>{Array.from(document.querySelectorAll('*[style*="overflow"]')).filter(t=>/(auto|scroll)/.test(t.style.overflow)||/(auto|scroll)/.test(t.style.overflowY)).forEach(t=>{t.scrollTop=t.scrollHeight/r*Number(a.target.value)})}}),G=r=>{switch(r){case"react-virtualized":return k;case"react-window":return q;case"react-virtuoso":return M;case"react-virtual":return A}},n=({count:r,ItemComponent:a})=>{const[u,t]=p.useState("react-virtualized"),O=p.useRef(null),C=p.useRef(null),V=G(u);return o("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[o("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:o("select",{value:u,onChange:d=>t(d.target.value),children:[e("option",{value:"react-virtualized",children:"react-virtualized"}),e("option",{value:"react-window",children:"react-window"}),e("option",{value:"react-virtuoso",children:"react-virtuoso"}),e("option",{value:"react-virtual",children:"react-virtual"})]})})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:o("label",{children:["scroll to index:",e("input",{defaultValue:100,type:"number",min:0,max:r-1,step:1}),e("button",{onClick:d=>{var h,f;const v=Number(d.target.previousSibling.value);(h=O.current)==null||h.scrollToIndex(v),(f=C.current)==null||f.scrollToIndex(v)},children:"scroll"})]})}),e("div",{style:{display:"flex",flexDirection:"row"},children:o("label",{style:{width:"100%"},children:["scroll position:",e(B,{count:r})]})}),o("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[e("div",{style:{width:"50%"},children:e(Y,{handle:O,count:r,Component:a})}),e("div",{style:{width:"50%"},children:e(V,{handle:C,count:r,Component:a})})]})]})},s={render:()=>e(n,{count:1e4,ItemComponent:F})},i={render:()=>e(n,{count:1e4,ItemComponent:L})},c={render:()=>e(n,{count:1e4,ItemComponent:z})},l={render:()=>e(n,{count:1e4,ItemComponent:j})},m={render:()=>e(n,{count:1e6,ItemComponent:E})};var R,y,I;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={ItemWithRenderCount} />;
  }
}`,...(I=(y=s.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var x,g,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicItem} />;
  }
}`,...(N=(g=i.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var T,W,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicImageItem} />;
  }
}`,...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var w,U,D;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyItem} />;
  }
}`,...(D=(U=l.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var S,b,H;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <Frame count={ROW_COUNT} ItemComponent={SimpleItem} />;
  }
}`,...(H=(b=m.parameters)==null?void 0:b.docs)==null?void 0:H.source}}};const Oe=["RenderCount","DynamicHeight","DynamicImage","HeavyComponent","OneMillion"];export{i as DynamicHeight,c as DynamicImage,l as HeavyComponent,m as OneMillion,s as RenderCount,Oe as __namedExportsOrder,pe as default};
