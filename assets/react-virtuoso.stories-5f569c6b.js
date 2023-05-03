import{a as n,j as e}from"./jsx-runtime-c3d7f245.js";import{I as l,a as r,V as s,H as a,S as v}from"./virtua-b901ea36.js";import{R as d}from"./react-virtuoso-c34ef023.js";import"./index-c6dae603.js";import"./index-778f7dbf.js";import"./index-eb008d06.js";const U={component:l},i={render:()=>n("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[n("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:"react-virtuoso"})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:e(r,{count:1e4})}),n("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[e(s,{count:1e4,Component:l}),e(d,{count:1e4,Component:l})]})]})},t={render:()=>n("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[n("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:"react-virtuoso"})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:e(r,{count:1e4})}),n("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[e(s,{count:1e4,Component:a}),e(d,{count:1e4,Component:a})]})]})},o={render:()=>n("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[n("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:"react-virtuoso"})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:e(r,{count:1e6})}),n("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[e(s,{count:1e6,Component:v}),e(d,{count:1e6,Component:v})]})]})};var p,f,x;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
        }}>react-virtuoso</div>
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
          <ReactVirtuosoList count={ROW_COUNT} Component={ItemWithRenderCount} />
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
        }}>react-virtuoso</div>
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
          <ReactVirtuosoList count={ROW_COUNT} Component={HeavyItem} />
        </div>
      </div>;
  }
}`,...(m=(y=t.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var O,h,C;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        }}>react-virtuoso</div>
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
          <ReactVirtuosoList count={ROW_COUNT} Component={SimpleItem} />
        </div>
      </div>;
  }
}`,...(C=(h=o.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const w=["DynamicHeight","HeavyComponent","OneMillion"];export{i as DynamicHeight,t as HeavyComponent,o as OneMillion,w as __namedExportsOrder,U as default};
//# sourceMappingURL=react-virtuoso.stories-5f569c6b.js.map
