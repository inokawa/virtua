import{a as e}from"./jsx-runtime-sgeEVxPu.js";import{I as y,D as g,a as D,H as h,S}from"./common-mj201Ba0.js";import{R as n}from"./react-virtual-C6IqgWVZ.js";import"./index-yp3VsGQP.js";import"./index-KLTnsmU9.js";import"./index-8dy-jdxy.js";const M={component:n,decorators:[r=>e("div",{style:{height:"100vh"},children:e(r,{})})]},t={render:()=>e(n,{count:1e4,Component:y})},o={render:()=>e(n,{count:1e4,Component:g})},a={render:()=>e(n,{count:1e4,Component:D})},s={render:()=>e(n,{count:1e4,Component:h})},c={render:()=>e(n,{count:1e6,Component:S})};var m,i,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,O,C;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={DynamicItem} />;
  }
}`,...(C=(O=o.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var d,R,_;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={DynamicImageItem} />;
  }
}`,...(_=(R=a.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var W,l,N;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtualList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(N=(l=s.parameters)==null?void 0:l.docs)==null?void 0:N.source}}};var T,U,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactVirtualList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(I=(U=c.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};const j=["RenderCount","DynamicHeight","DynamicImage","HeavyComponent","OneMillion"];export{o as DynamicHeight,a as DynamicImage,s as HeavyComponent,c as OneMillion,t as RenderCount,j as __namedExportsOrder,M as default};
