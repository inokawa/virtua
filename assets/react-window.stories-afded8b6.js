import{a as n,j as e}from"./jsx-runtime-c3d7f245.js";import{I as o,a as r,V as d,H as a,S as p}from"./virtua-b901ea36.js";import{R as s}from"./react-window-2d01ca09.js";import"./index-c6dae603.js";import"./index-778f7dbf.js";import"./AutoSizer-8f234528.js";import"./possibleConstructorReturn-400c5699.js";import"./assertThisInitialized-60dddfb4.js";import"./getPrototypeOf-e4242ba0.js";import"./inheritsLoose-495bf4f7.js";const S={component:o},i={render:()=>n("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[n("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:"react-window"})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:e(r,{count:1e4})}),n("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[e(d,{count:1e4,Component:o}),e(s,{count:1e4,Component:o})]})]})},t={render:()=>n("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[n("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:"react-window"})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:e(r,{count:1e4})}),n("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[e(d,{count:1e4,Component:a}),e(s,{count:1e4,Component:a})]})]})},l={render:()=>n("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[n("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:"react-window"})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:e(r,{count:1e6})}),n("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[e(d,{count:1e6,Component:p}),e(s,{count:1e6,Component:p})]})]})};var v,f,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        }}>react-window</div>
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
          <ReactWindowList count={ROW_COUNT} Component={ItemWithRenderCount} />
        </div>
      </div>;
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,m,u;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        }}>react-window</div>
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
          <ReactWindowList count={ROW_COUNT} Component={HeavyItem} />
        </div>
      </div>;
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var O,h,C;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        }}>react-window</div>
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
          <ReactWindowList count={ROW_COUNT} Component={SimpleItem} />
        </div>
      </div>;
  }
}`,...(C=(h=l.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const H=["DynamicHeight","HeavyComponent","OneMillion"];export{i as DynamicHeight,t as HeavyComponent,l as OneMillion,H as __namedExportsOrder,S as default};
//# sourceMappingURL=react-window.stories-afded8b6.js.map
