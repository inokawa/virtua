import{a as e}from"./jsx-runtime-sgeEVxPu.js";import{I as y,D as g,a as D,H as h,S}from"./common-JRrhZoUB.js";import{R as n}from"./react-virtuoso-Z058Hisa.js";import"./index-yp3VsGQP.js";import"./index-KLTnsmU9.js";import"./index-8dy-jdxy.js";const M={component:n,decorators:[r=>e("div",{style:{height:"100vh"},children:e(r,{})})]},o={render:()=>e(n,{count:1e4,Component:y})},t={render:()=>e(n,{count:1e4,Component:g})},s={render:()=>e(n,{count:1e4,Component:D})},a={render:()=>e(n,{count:1e4,Component:h})},c={render:()=>e(n,{count:1e6,Component:S})};var m,i,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtuosoList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(u=(i=o.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,O,C;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtuosoList count={ROW_COUNT} Component={DynamicItem} />;
  }
}`,...(C=(O=t.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var d,R,_;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtuosoList count={ROW_COUNT} Component={DynamicImageItem} />;
  }
}`,...(_=(R=s.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var W,N,T;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtuosoList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(T=(N=a.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var U,I,l;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactVirtuosoList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(l=(I=c.parameters)==null?void 0:I.docs)==null?void 0:l.source}}};const j=["RenderCount","DynamicHeight","DynamicImage","HeavyComponent","OneMillion"];export{t as DynamicHeight,s as DynamicImage,a as HeavyComponent,c as OneMillion,o as RenderCount,j as __namedExportsOrder,M as default};
