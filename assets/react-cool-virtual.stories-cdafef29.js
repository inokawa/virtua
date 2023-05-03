import{a as n,j as e}from"./jsx-runtime-c3d7f245.js";import{I as o,a as r,V as d,H as a,S as v}from"./virtua-b901ea36.js";import{R as s}from"./react-cool-virtual-ef6aa415.js";import"./index-c6dae603.js";import"./index-778f7dbf.js";const N={component:o},i={render:()=>n("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[n("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:"react-cool-virtual"})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:e(r,{count:1e4})}),n("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[e(d,{count:1e4,Component:o}),e(s,{count:1e4,Component:o})]})]})},t={render:()=>n("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[n("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:"react-cool-virtual"})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:e(r,{count:1e4})}),n("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[e(d,{count:1e4,Component:a}),e(s,{count:1e4,Component:a})]})]})},l={render:()=>n("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[n("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:"react-cool-virtual"})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:e(r,{count:1e6})}),n("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[e(d,{count:1e6,Component:v}),e(s,{count:1e6,Component:v})]})]})};var f,p,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
        }}>react-cool-virtual</div>
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
        gap: 8,
        overflow: "hidden"
      }}>
          <VirtuaList count={ROW_COUNT} Component={ItemWithRenderCount} />
          <ReactCoolVirtualList count={ROW_COUNT} Component={ItemWithRenderCount} />
        </div>
      </div>;
  }
}`,...(x=(p=i.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,y,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
        }}>react-cool-virtual</div>
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
        gap: 8,
        overflow: "hidden"
      }}>
          <VirtuaList count={ROW_COUNT} Component={HeavyItem} />
          <ReactCoolVirtualList count={ROW_COUNT} Component={HeavyItem} />
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
        }}>react-cool-virtual</div>
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
        gap: 8,
        overflow: "hidden"
      }}>
          <VirtuaList count={ROW_COUNT} Component={SimpleItem} />
          <ReactCoolVirtualList count={ROW_COUNT} Component={SimpleItem} />
        </div>
      </div>;
  }
}`,...(C=(h=l.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const T=["DynamicHeight","HeavyComponent","OneMillion"];export{i as DynamicHeight,t as HeavyComponent,l as OneMillion,T as __namedExportsOrder,N as default};
//# sourceMappingURL=react-cool-virtual.stories-cdafef29.js.map
