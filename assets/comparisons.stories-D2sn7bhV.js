import{j as e}from"./index-CKMfL3Jx.js";import{r as d}from"./entry-preview-D8_MYwTg.js";import{D as b,I as L,H as V,a as F,S as z}from"./common-DzdIghKV.js";import{R as E}from"./react-virtual-CF5SVx0r.js";import{R as A}from"./react-virtuoso-Pzp5aEzY.js";import{R as M}from"./react-virtualized-ByBCdKmJ.js";import{R as k}from"./react-window-Dt8ANFdH.js";import{V as q}from"./virtua-DCNGzszL.js";import"./index-xJp9Kd2E.js";import"./extends-B6xKY8K9.js";import"./AutoSizer-D3PhnMXl.js";import"./defineProperty-BVtAu2Tm.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./inheritsLoose-1HkgTRWY.js";import"./memoize-one.esm-CcMeOnPo.js";const le={component:b},Y=({count:r})=>e.jsx("input",{type:"range",defaultValue:"0",min:0,max:r,style:{width:"85%"},onChange:n=>{Array.from(document.querySelectorAll('*[style*="overflow"]')).filter(t=>/(auto|scroll)/.test(t.style.overflow)||/(auto|scroll)/.test(t.style.overflowY)).forEach(t=>{t.scrollTop=t.scrollHeight/r*Number(n.target.value)})}}),B=r=>{switch(r){case"react-virtualized":return M;case"react-window":return k;case"react-virtuoso":return A;case"react-virtual":return E}},o=({count:r,ItemComponent:n})=>{const[m,t]=d.useState("react-virtualized"),p=d.useRef(null),x=d.useRef(null),H=B(m);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx("div",{style:{flex:1},children:"virtua"}),e.jsx("div",{style:{flex:1},children:e.jsxs("select",{value:m,onChange:u=>t(u.target.value),children:[e.jsx("option",{value:"react-virtualized",children:"react-virtualized"}),e.jsx("option",{value:"react-window",children:"react-window"}),e.jsx("option",{value:"react-virtuoso",children:"react-virtuoso"}),e.jsx("option",{value:"react-virtual",children:"react-virtual"})]})})]}),e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsxs("label",{children:["scroll to index:",e.jsx("input",{defaultValue:100,type:"number",min:0,max:r-1,step:1}),e.jsx("button",{onClick:u=>{var C,v;const O=Number(u.target.previousSibling.value);(C=p.current)==null||C.scrollToIndex(O),(v=x.current)==null||v.scrollToIndex(O)},children:"scroll"})]})}),e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsxs("label",{style:{width:"100%"},children:["scroll position:",e.jsx(Y,{count:r})]})}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[e.jsx("div",{style:{width:"50%"},children:e.jsx(q,{handle:p,count:r,Component:n})}),e.jsx("div",{style:{width:"50%"},children:e.jsx(H,{handle:x,count:r,Component:n})})]})]})},s={render:()=>e.jsx(o,{count:1e4,ItemComponent:L})},a={render:()=>e.jsx(o,{count:1e4,ItemComponent:b})},i={render:()=>e.jsx(o,{count:1e4,ItemComponent:V})},c={render:()=>e.jsx(o,{count:1e4,ItemComponent:F})},l={render:()=>e.jsx(o,{count:1e6,ItemComponent:z})};var h,R,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={ItemWithRenderCount} />;
  }
}`,...(f=(R=s.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var y,j,I;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicItem} />;
  }
}`,...(I=(j=a.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var g,N,T;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyItem} />;
  }
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var W,_,w;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicImageItem} />;
  }
}`,...(w=(_=c.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var U,D,S;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <Frame count={ROW_COUNT} ItemComponent={SimpleItem} />;
  }
}`,...(S=(D=l.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const me=["RenderCount","DynamicHeight","HeavyComponent","DynamicImage","OneMillion"];export{a as DynamicHeight,c as DynamicImage,i as HeavyComponent,l as OneMillion,s as RenderCount,me as __namedExportsOrder,le as default};
