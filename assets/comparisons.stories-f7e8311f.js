import{j as e,a as o}from"./jsx-runtime-c3d7f245.js";import{r as u}from"./index-c6dae603.js";import{D as S,I as b,H,S as L}from"./common-0e1f344c.js";import{R as V}from"./react-virtual-9e2fdb79.js";import{R as z}from"./react-virtuoso-8b7258bc.js";import{R as F}from"./react-virtualized-20752c58.js";import{R as j}from"./react-window-8260b222.js";import{V as E}from"./virtua-fe9b2a91.js";import"./index-eb008d06.js";import"./extends-98964cd2.js";import"./inherits-b0a1c0a1.js";import"./defineProperty-d18d8786.js";import"./assertThisInitialized-081f9914.js";import"./setPrototypeOf-0bb37fbe.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./AutoSizer-e18e9011.js";import"./inheritsLoose-d541526f.js";import"./memoize-one.esm-52518564.js";const se={component:S},A=({count:r})=>e("input",{type:"range",defaultValue:"0",min:0,max:r,style:{width:"85%"},onChange:n=>{Array.from(document.querySelectorAll('*[style*="overflow"]')).filter(t=>/(auto|scroll)/.test(t.style.overflow)||/(auto|scroll)/.test(t.style.overflowY)).forEach(t=>{t.scrollTop=t.scrollHeight/r*Number(n.target.value)})}}),M=r=>{switch(r){case"react-virtualized":return F;case"react-window":return j;case"react-virtuoso":return z;case"react-virtual":return V}},c=({count:r,ItemComponent:n})=>{const[m,t]=u.useState("react-virtualized"),p=u.useRef(null),v=u.useRef(null),D=M(m);return o("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[o("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:o("select",{value:m,onChange:d=>t(d.target.value),children:[e("option",{value:"react-virtualized",children:"react-virtualized"}),e("option",{value:"react-window",children:"react-window"}),e("option",{value:"react-virtuoso",children:"react-virtuoso"}),e("option",{value:"react-virtual",children:"react-virtual"})]})})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:o("label",{children:["scroll to index:",e("input",{defaultValue:100,type:"number",min:0,max:r-1,step:1}),e("button",{onClick:d=>{var f,C;const h=Number(d.target.previousSibling.value);(f=p.current)==null||f.scrollToIndex(h),(C=v.current)==null||C.scrollToIndex(h)},children:"scroll"})]})}),e("div",{style:{display:"flex",flexDirection:"row"},children:o("label",{style:{width:"100%"},children:["scroll position:",e(A,{count:r})]})}),o("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[e("div",{style:{width:"50%"},children:e(E,{handle:p,count:r,Component:n})}),e("div",{style:{width:"50%"},children:e(D,{handle:v,count:r,Component:n})})]})]})},i={render:()=>e(c,{count:1e4,ItemComponent:b})},a={render:()=>e(c,{count:1e4,ItemComponent:S})},s={render:()=>e(c,{count:1e4,ItemComponent:H})},l={render:()=>e(c,{count:1e6,ItemComponent:L})};var O,R,y;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={ItemWithRenderCount} />;
  }
}`,...(y=(R=i.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var x,w,I;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicItem} />;
  }
}`,...(I=(w=a.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var N,T,W;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyItem} />;
  }
}`,...(W=(T=s.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var _,g,U;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <Frame count={ROW_COUNT} ItemComponent={SimpleItem} />;
  }
}`,...(U=(g=l.parameters)==null?void 0:g.docs)==null?void 0:U.source}}};const le=["RenderCount","DynamicHeight","HeavyComponent","OneMillion"];export{a as DynamicHeight,s as HeavyComponent,l as OneMillion,i as RenderCount,le as __namedExportsOrder,se as default};
//# sourceMappingURL=comparisons.stories-f7e8311f.js.map
