import{j as e}from"./jsx-runtime-c3d7f245.js";import{I as N,D as T,H as U,S as y}from"./common-0e1f344c.js";import{R as n}from"./react-cool-virtual-df3d4173.js";import"./index-c6dae603.js";const S={component:n,decorators:[r=>e("div",{style:{height:"100vh",display:"flex"},children:e(r,{})})]},o={render:()=>e(n,{count:1e4,Component:N})},t={render:()=>e(n,{count:1e4,Component:T})},s={render:()=>e(n,{count:1e4,Component:U})},a={render:()=>e(n,{count:1e6,Component:y})};var c,m,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactCoolVirtualList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var u,p,C;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactCoolVirtualList count={ROW_COUNT} Component={DynamicItem} />;
  }
}`,...(C=(p=t.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var O,d,l;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactCoolVirtualList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var R,_,W;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactCoolVirtualList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(W=(_=a.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};const v=["RenderCount","DynamicHeight","HeavyComponent","OneMillion"];export{t as DynamicHeight,s as HeavyComponent,a as OneMillion,o as RenderCount,v as __namedExportsOrder,S as default};
//# sourceMappingURL=react-cool-virtual.stories-4f74bc46.js.map
