import{j as e}from"./jsx-runtime-f8a6c6ea.js";import{I as N,D as T,H as U,S as y}from"./common-094fe0c6.js";import{R as n}from"./react-cool-virtual-3494da7a.js";import"./index-5284b0bf.js";const S={component:n,decorators:[r=>e("div",{style:{height:"100vh"},children:e(r,{})})]},o={render:()=>e(n,{count:1e4,Component:N})},t={render:()=>e(n,{count:1e4,Component:T})},s={render:()=>e(n,{count:1e4,Component:U})},a={render:()=>e(n,{count:1e6,Component:y})};var c,m,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactCoolVirtualList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var u,C,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactCoolVirtualList count={ROW_COUNT} Component={DynamicItem} />;
  }
}`,...(p=(C=t.parameters)==null?void 0:C.docs)==null?void 0:p.source}}};var O,d,R;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactCoolVirtualList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(R=(d=s.parameters)==null?void 0:d.docs)==null?void 0:R.source}}};var l,_,W;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactCoolVirtualList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(W=(_=a.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};const v=["RenderCount","DynamicHeight","HeavyComponent","OneMillion"];export{t as DynamicHeight,s as HeavyComponent,a as OneMillion,o as RenderCount,v as __namedExportsOrder,S as default};
//# sourceMappingURL=react-cool-virtual.stories-af313436.js.map
