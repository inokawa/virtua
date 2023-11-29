import{a as e}from"./jsx-runtime-sgeEVxPu.js";import{I as N,D as T,H as U,S as y}from"./common-sG2CTQQ1.js";import{R as n}from"./react-virtual-E9y8LhwR.js";import"./index-yp3VsGQP.js";import"./index-lP7UrUYH.js";const v={component:n,decorators:[r=>e("div",{style:{height:"100vh"},children:e(r,{})})]},t={render:()=>e(n,{count:1e4,Component:N})},o={render:()=>e(n,{count:1e4,Component:T})},s={render:()=>e(n,{count:1e4,Component:U})},a={render:()=>e(n,{count:1e6,Component:y})};var c,m,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var u,p,O;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={DynamicItem} />;
  }
}`,...(O=(p=o.parameters)==null?void 0:p.docs)==null?void 0:O.source}}};var d,C,R;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(R=(C=s.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var l,_,W;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactVirtualList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(W=(_=a.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};const V=["RenderCount","DynamicHeight","HeavyComponent","OneMillion"];export{o as DynamicHeight,s as HeavyComponent,a as OneMillion,t as RenderCount,V as __namedExportsOrder,v as default};
