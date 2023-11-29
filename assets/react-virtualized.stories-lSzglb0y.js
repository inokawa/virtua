import{a as e}from"./jsx-runtime-sgeEVxPu.js";import{I as N,D as T,H as U,S as y}from"./common-sG2CTQQ1.js";import{R as t}from"./react-virtualized-e63MsN-y.js";import"./index-yp3VsGQP.js";import"./extends-dGVwEr9R.js";import"./possibleConstructorReturn-Ar3ikwlv.js";import"./defineProperty-G_ESCvJ5.js";import"./setPrototypeOf-ahVgEFUp.js";import"./assertThisInitialized-4q6YPdh3.js";import"./objectWithoutProperties-R3t5ZVok.js";import"./objectWithoutPropertiesLoose-9Q1jwsKS.js";import"./AutoSizer-8SCshaq9.js";import"./index-lP7UrUYH.js";const j={component:t,decorators:[r=>e("div",{style:{height:"100vh"},children:e(r,{})})]},n={render:()=>e(t,{count:1e4,Component:N})},o={render:()=>e(t,{count:1e4,Component:T})},s={render:()=>e(t,{count:1e4,Component:U})},a={render:()=>e(t,{count:1e6,Component:y})};var c,m,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualizedList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(i=(m=n.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,u,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualizedList count={ROW_COUNT} Component={DynamicItem} />;
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var O,C,R;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualizedList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(R=(C=s.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var l,_,W;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactVirtualizedList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(W=(_=a.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};const E=["RenderCount","DynamicHeight","HeavyComponent","OneMillion"];export{o as DynamicHeight,s as HeavyComponent,a as OneMillion,n as RenderCount,E as __namedExportsOrder,j as default};
