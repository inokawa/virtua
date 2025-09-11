import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./iframe-uIJwkhtw.js";import{D as V,I as z,H as E,a as J,b as A,S as k}from"./common-B2JsEl5h.js";import{R as q}from"./react-virtual-DAd1_0bF.js";import{R as Y}from"./react-virtuoso-DOO2VK3L.js";import{R as B}from"./react-virtualized-BY8argiy.js";import{R as G}from"./react-window-irkTVXPQ.js";import{V as K}from"./virtua-CSY05CdC.js";import"./preload-helper-BQ24v_F8.js";import"./chunk-4X5ZEQ5K-BPNiwWK2.js";import"./index-BYpsXk2w.js";import"./assertThisInitialized-DUTgmdVG.js";import"./AutoSizer-D72yPJAH.js";import"./defineProperty-EJDAiRQC.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./inheritsLoose-CV23Oqyc.js";const pe={component:V},P=({count:r})=>e.jsx("input",{type:"range",defaultValue:"0",min:0,max:r,style:{width:"85%"},onChange:o=>{Array.from(document.querySelectorAll('*[style*="overflow"]')).filter(t=>/(auto|scroll)/.test(t.style.overflow)||/(auto|scroll)/.test(t.style.overflowY)).forEach(t=>{t.scrollTop=t.scrollHeight/r*Number(o.target.value)})}}),Q=r=>{switch(r){case"react-virtualized":return B;case"react-window":return G;case"react-virtuoso":return Y;case"react-virtual":return q}},n=({count:r,ItemComponent:o})=>{const[u,t]=p.useState("react-virtualized"),O=p.useRef(null),x=p.useRef(null),M=Q(u);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx("div",{style:{flex:1},children:"virtua"}),e.jsx("div",{style:{flex:1},children:e.jsxs("select",{value:u,onChange:d=>t(d.target.value),children:[e.jsx("option",{value:"react-virtualized",children:"react-virtualized"}),e.jsx("option",{value:"react-window",children:"react-window"}),e.jsx("option",{value:"react-virtuoso",children:"react-virtuoso"}),e.jsx("option",{value:"react-virtual",children:"react-virtual"})]})})]}),e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsxs("label",{children:["scroll to index:",e.jsx("input",{defaultValue:100,type:"number",min:0,max:r-1,step:1}),e.jsx("button",{onClick:d=>{var v,R;const C=Number(d.target.previousSibling.value);(v=O.current)==null||v.scrollToIndex(C),(R=x.current)==null||R.scrollToIndex(C)},children:"scroll"})]})}),e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsxs("label",{style:{width:"100%"},children:["scroll position:",e.jsx(P,{count:r})]})}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[e.jsx("div",{style:{width:"50%"},children:e.jsx(K,{handle:O,count:r,Component:o})}),e.jsx("div",{style:{width:"50%"},children:e.jsx(M,{handle:x,count:r,Component:o})})]})]})},s={render:()=>e.jsx(n,{count:1e4,ItemComponent:z})},a={render:()=>e.jsx(n,{count:1e4,ItemComponent:V})},c={render:()=>e.jsx(n,{count:1e4,ItemComponent:E})},i={render:()=>e.jsx(n,{count:1e4,ItemComponent:J})},l={render:()=>e.jsx(n,{count:1e4,ItemComponent:A})},m={render:()=>e.jsx(n,{count:1e6,ItemComponent:k})};var y,h,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={ItemWithRenderCount} />;
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var I,j,N;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicItem} />;
  }
}`,...(N=(j=a.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var T,W,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyDOMItem} />;
  }
}`,...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var g,U,w;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyJsItem} />;
  }
}`,...(w=(U=i.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var D,S,H;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicImageItem} />;
  }
}`,...(H=(S=l.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var b,F,L;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <Frame count={ROW_COUNT} ItemComponent={SimpleItem} />;
  }
}`,...(L=(F=m.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const Oe=["RenderCount","DynamicHeight","HeavyDOM","HeavyJS","DynamicImage","OneMillion"];export{a as DynamicHeight,l as DynamicImage,c as HeavyDOM,i as HeavyJS,m as OneMillion,s as RenderCount,Oe as __namedExportsOrder,pe as default};
