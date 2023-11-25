import{j as e,a as o}from"./jsx-runtime-KhpQ_ow-.js";import{r as u}from"./index-G6kSzgdV.js";import{D as S,I as b,H,S as L}from"./common-opS2vWa9.js";import{R as V}from"./react-virtual-InpcyWg-.js";import{R as z}from"./react-virtuoso-nyrSkyZc.js";import{R as F}from"./react-virtualized-NAcxoY-A.js";import{R as j}from"./react-window-WB1KO_lz.js";import{V as E}from"./virtua-9w_xnovx.js";import"./index-xBZDQ2qw.js";import"./extends-dGVwEr9R.js";import"./inherits-dAtQwFGf.js";import"./defineProperty-G_ESCvJ5.js";import"./assertThisInitialized-4q6YPdh3.js";import"./setPrototypeOf-ahVgEFUp.js";import"./objectWithoutProperties-R3t5ZVok.js";import"./objectWithoutPropertiesLoose-9Q1jwsKS.js";import"./AutoSizer-6KFUA3PF.js";import"./inheritsLoose-fS6oVJzb.js";import"./memoize-one.esm-hqe5SRxC.js";const se={component:S},A=({count:r})=>e("input",{type:"range",defaultValue:"0",min:0,max:r,style:{width:"85%"},onChange:n=>{Array.from(document.querySelectorAll('*[style*="overflow"]')).filter(t=>/(auto|scroll)/.test(t.style.overflow)||/(auto|scroll)/.test(t.style.overflowY)).forEach(t=>{t.scrollTop=t.scrollHeight/r*Number(n.target.value)})}}),M=r=>{switch(r){case"react-virtualized":return F;case"react-window":return j;case"react-virtuoso":return z;case"react-virtual":return V}},c=({count:r,ItemComponent:n})=>{const[m,t]=u.useState("react-virtualized"),p=u.useRef(null),v=u.useRef(null),D=M(m);return o("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[o("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:o("select",{value:m,onChange:d=>t(d.target.value),children:[e("option",{value:"react-virtualized",children:"react-virtualized"}),e("option",{value:"react-window",children:"react-window"}),e("option",{value:"react-virtuoso",children:"react-virtuoso"}),e("option",{value:"react-virtual",children:"react-virtual"})]})})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:o("label",{children:["scroll to index:",e("input",{defaultValue:100,type:"number",min:0,max:r-1,step:1}),e("button",{onClick:d=>{var f,C;const h=Number(d.target.previousSibling.value);(f=p.current)==null||f.scrollToIndex(h),(C=v.current)==null||C.scrollToIndex(h)},children:"scroll"})]})}),e("div",{style:{display:"flex",flexDirection:"row"},children:o("label",{style:{width:"100%"},children:["scroll position:",e(A,{count:r})]})}),o("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[e("div",{style:{width:"50%"},children:e(E,{handle:p,count:r,Component:n})}),e("div",{style:{width:"50%"},children:e(D,{handle:v,count:r,Component:n})})]})]})},i={render:()=>e(c,{count:1e4,ItemComponent:b})},a={render:()=>e(c,{count:1e4,ItemComponent:S})},s={render:()=>e(c,{count:1e4,ItemComponent:H})},l={render:()=>e(c,{count:1e6,ItemComponent:L})};var O,R,y;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
//# sourceMappingURL=comparisons.stories-8_MIUMgx.js.map
