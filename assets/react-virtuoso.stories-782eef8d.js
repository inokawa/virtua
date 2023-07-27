import{j as e}from"./jsx-runtime-f8a6c6ea.js";import{I as T,D as U,H as l,S as y}from"./common-094fe0c6.js";import{R as o}from"./react-virtuoso-8bc820d3.js";import"./index-5284b0bf.js";import"./index-480187bb.js";const v={component:o,decorators:[r=>e("div",{style:{height:"100vh"},children:e(r,{})})]},n={render:()=>e(o,{count:1e4,Component:T})},t={render:()=>e(o,{count:1e4,Component:U})},s={render:()=>e(o,{count:1e4,Component:l})},a={render:()=>e(o,{count:1e6,Component:y})};var c,m,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtuosoList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(i=(m=n.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var u,p,O;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtuosoList count={ROW_COUNT} Component={DynamicItem} />;
  }
}`,...(O=(p=t.parameters)==null?void 0:p.docs)==null?void 0:O.source}}};var d,C,R;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <ReactVirtuosoList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(R=(C=s.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var _,W,N;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <ReactVirtuosoList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(N=(W=a.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};const V=["RenderCount","DynamicHeight","HeavyComponent","OneMillion"];export{t as DynamicHeight,s as HeavyComponent,a as OneMillion,n as RenderCount,V as __namedExportsOrder,v as default};
//# sourceMappingURL=react-virtuoso.stories-782eef8d.js.map
