import{a as n,j as e}from"./jsx-runtime-c3d7f245.js";import{I as r,a as o,V as d,H as a,S as p}from"./virtua-b901ea36.js";import{R as s}from"./react-virtualized-ef7bccdb.js";import"./index-c6dae603.js";import"./index-778f7dbf.js";import"./assertThisInitialized-60dddfb4.js";import"./possibleConstructorReturn-400c5699.js";import"./getPrototypeOf-e4242ba0.js";import"./clsx.m-1229b3e0.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./AutoSizer-8f234528.js";import"./index-eb008d06.js";const H={component:r},i={render:()=>n("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[n("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:"react-virtualized"})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:e(o,{count:1e4})}),n("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[e(d,{count:1e4,Component:r}),e(s,{count:1e4,Component:r})]})]})},t={render:()=>n("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[n("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:"react-virtualized"})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:e(o,{count:1e4})}),n("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[e(d,{count:1e4,Component:a}),e(s,{count:1e4,Component:a})]})]})},l={render:()=>n("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[n("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:"react-virtualized"})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:e(o,{count:1e6})}),n("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[e(d,{count:1e6,Component:p}),e(s,{count:1e6,Component:p})]})]})};var v,f,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
          <div style={{
          flex: 1
        }}>virtua</div>
          <div style={{
          flex: 1
        }}>react-virtualized</div>
        </div>
        <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
          <ScrollInput count={ROW_COUNT} />
        </div>
        <div style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        gap: 8
      }}>
          <VirtuaList count={ROW_COUNT} Component={ItemWithRenderCount} />
          <ReactVirtualizedList count={ROW_COUNT} Component={ItemWithRenderCount} />
        </div>
      </div>;
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var u,y,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
          <div style={{
          flex: 1
        }}>virtua</div>
          <div style={{
          flex: 1
        }}>react-virtualized</div>
        </div>
        <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
          <ScrollInput count={ROW_COUNT} />
        </div>
        <div style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        gap: 8
      }}>
          <VirtuaList count={ROW_COUNT} Component={HeavyItem} />
          <ReactVirtualizedList count={ROW_COUNT} Component={HeavyItem} />
        </div>
      </div>;
  }
}`,...(m=(y=t.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var O,h,C;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
          <div style={{
          flex: 1
        }}>virtua</div>
          <div style={{
          flex: 1
        }}>react-virtualized</div>
        </div>
        <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
          <ScrollInput count={ROW_COUNT} />
        </div>
        <div style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        gap: 8
      }}>
          <VirtuaList count={ROW_COUNT} Component={SimpleItem} />
          <ReactVirtualizedList count={ROW_COUNT} Component={SimpleItem} />
        </div>
      </div>;
  }
}`,...(C=(h=l.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const L=["DynamicHeight","HeavyComponent","OneMillion"];export{i as DynamicHeight,t as HeavyComponent,l as OneMillion,L as __namedExportsOrder,H as default};
//# sourceMappingURL=react-virtualized.stories-b2c43669.js.map
