import{j as e}from"./jsx-runtime-c3d7f245.js";import{I as T,D as U,H as l,S as y}from"./common-0e1f344c.js";import{V as n}from"./virtua-ba871ced.js";import"./index-c6dae603.js";import"./index-eb008d06.js";const S={component:n,decorators:[r=>e("div",{style:{height:"100vh"},children:e(r,{})})]},t={render:()=>e(n,{count:1e4,Component:T})},o={render:()=>e(n,{count:1e4,Component:U})},s={render:()=>e(n,{count:1e4,Component:l})},a={render:()=>e(n,{count:1e6,Component:y})};var c,m,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var u,p,O;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={DynamicItem} />;
  }
}`,...(O=(p=o.parameters)==null?void 0:p.docs)==null?void 0:O.source}}};var d,C,R;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={HeavyItem} />;
  }
}`,...(R=(C=s.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var _,W,N;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <VirtuaList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(N=(W=a.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};const V=["RenderCount","DynamicHeight","HeavyComponent","OneMillion"];export{o as DynamicHeight,s as HeavyComponent,a as OneMillion,t as RenderCount,V as __namedExportsOrder,S as default};
//# sourceMappingURL=virtua.stories-e9ac3be7.js.map