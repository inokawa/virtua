import{j as e}from"./jsx-runtime-c3d7f245.js";import{I as N,D as T,H as U,S as y}from"./common-0e1f344c.js";import{R as t}from"./react-virtualized-20752c58.js";import"./index-c6dae603.js";import"./extends-98964cd2.js";import"./inherits-b0a1c0a1.js";import"./defineProperty-d18d8786.js";import"./assertThisInitialized-081f9914.js";import"./setPrototypeOf-0bb37fbe.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./AutoSizer-e18e9011.js";import"./index-eb008d06.js";const M={component:t,decorators:[r=>e("div",{style:{height:"100vh"},children:e(r,{})})]},n={render:()=>e(t,{count:1e4,Component:N})},o={render:()=>e(t,{count:1e4,Component:T})},s={render:()=>e(t,{count:1e4,Component:U})},a={render:()=>e(t,{count:1e6,Component:y})};var c,m,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(W=(_=a.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};const E=["RenderCount","DynamicHeight","HeavyComponent","OneMillion"];export{o as DynamicHeight,s as HeavyComponent,a as OneMillion,n as RenderCount,E as __namedExportsOrder,M as default};
//# sourceMappingURL=react-virtualized.stories-42a0341f.js.map