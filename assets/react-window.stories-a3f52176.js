import{j as e}from"./jsx-runtime-c3d7f245.js";import{I as T,D as U,H as l,S as y}from"./common-0e1f344c.js";import{R as r}from"./react-window-a10209fc.js";import"./index-c6dae603.js";import"./AutoSizer-dac56843.js";import"./inherits-21222543.js";import"./defineProperty-d18d8786.js";import"./assertThisInitialized-081f9914.js";import"./setPrototypeOf-67537e4a.js";import"./inheritsLoose-db34722d.js";import"./memoize-one.esm-52518564.js";const j={component:r,decorators:[n=>e("div",{style:{height:"100vh"},children:e(n,{})})]},o={render:()=>e(r,{count:1e4,Component:T})},t={render:()=>e(r,{count:1e4,Component:U})},s={render:()=>e(r,{count:1e4,Component:l})},a={render:()=>e(r,{count:1e6,Component:y})};var c,m,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactWindowList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,d,O;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactWindowList count={ROW_COUNT} Component={DynamicItem} />;
  }
}`,...(O=(d=t.parameters)==null?void 0:d.docs)==null?void 0:O.source}}};var u,C,R;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactWindowList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(R=(C=s.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var W,_,N;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactWindowList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(N=(_=a.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const M=["RenderCount","DynamicHeight","HeavyComponent","OneMillion"];export{t as DynamicHeight,s as HeavyComponent,a as OneMillion,o as RenderCount,M as __namedExportsOrder,j as default};
//# sourceMappingURL=react-window.stories-a3f52176.js.map
