import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-Dw7v-Uf5.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./src-p2r-qAdR.js";var o,s,c,l,u,d,f,p,m,h;t((()=>{o=e(n(),1),a(),s=r(),c={component:i},l={render:()=>(0,s.jsx)(i,{style:{height:`100vh`},row:1e3,col:500,children:({rowIndex:e,colIndex:t})=>(0,s.jsxs)(`div`,{style:{background:`white`,padding:4,borderLeft:t===0?void 0:`solid 1px gray`,borderTop:e===0?void 0:`solid 1px gray`},children:[e,` / `,t]})})},u={render:()=>(0,s.jsx)(i,{style:{height:`100vh`},row:1e3,col:500,children:({rowIndex:e,colIndex:t})=>(0,s.jsxs)(`div`,{style:{background:`white`,padding:4,width:(t%2+1)*100,height:(e%2+1)*100,borderLeft:t===0?void 0:`solid 1px gray`,borderTop:e===0?void 0:`solid 1px gray`},children:[e,` / `,t]})})},d={render:()=>(0,s.jsx)(i,{style:{height:`100vh`},row:1e3,col:500,children:({rowIndex:e,colIndex:t})=>(0,s.jsxs)(`div`,{style:{background:`white`,padding:4,width:(t%2+1)*100,borderLeft:t===0?void 0:`solid 1px gray`,borderTop:e===0?void 0:`solid 1px gray`},children:[(0,s.jsxs)(`div`,{children:[e,` / `,t]}),Array.from({length:e%8+1},()=>(0,s.jsx)(`div`,{children:`Hello world!`}))]})})},f={render:()=>(0,s.jsx)(i,{style:{height:`100vh`},row:1e3,col:500,children:({rowIndex:e,colIndex:t})=>(0,s.jsxs)(`div`,{style:{background:`white`,padding:4,height:(e%2+1)*100,borderLeft:t===0?void 0:`solid 1px gray`,borderTop:e===0?void 0:`solid 1px gray`},children:[(0,s.jsxs)(`div`,{children:[e,` / `,t]}),(0,s.jsx)(`div`,{children:Array.from({length:t%4+1},()=>(0,s.jsx)(`span`,{children:`Hello world!`}))})]})})},p={render:()=>{let[e,t]=(0,o.useState)(()=>new Map),[n,r]=(0,o.useState)(()=>new Map),a=(0,o.useRef)(null);function c(){let e=()=>Math.random()<.8?40+Math.round(200*Math.random()):80,n=new Map,i=new Map;for(let t=1;t<100;t++)n.set(t,e()),i.set(t,e());a.current?.resizeCols([...n.entries()]),a.current?.resizeRows([...i.entries()]),t(n),r(i)}return(0,s.jsx)(i,{ref:a,style:{height:`100vh`},row:100,col:100,cellHeight:80,cellWidth:80,children:({rowIndex:i,colIndex:o})=>(0,s.jsxs)(`div`,{style:{background:`white`,padding:4,width:e.get(o)??80,height:n.get(i)??80,borderLeft:o===0?void 0:`solid 1px gray`,borderTop:i===0?void 0:`solid 1px gray`},children:[(0,s.jsxs)(`div`,{children:[i,` / `,o]}),o===0&&i===0?(0,s.jsx)(`button`,{onClick:c,children:`random`}):i===0?(0,s.jsx)(`input`,{type:`number`,step:5,value:e.get(o)??80,style:{width:50},onChange:e=>{let n=e.target.valueAsNumber;a.current?.resizeCols([[o,n]]),t(e=>new Map(e).set(o,n))}}):o===0?(0,s.jsx)(`input`,{type:`number`,step:5,value:n.get(i)??80,style:{width:50},onChange:e=>{let t=e.target.valueAsNumber;a.current?.resizeRows([[i,t]]),r(e=>new Map(e).set(i,t))}}):null]})})}},m={render:()=>{let e=1e3,[t,n]=(0,o.useState)([567,567]),[r,a]=(0,o.useState)([1e3,1e3]),c=(0,o.useRef)(null);return(0,s.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`label`,{children:[`col`,(0,s.jsx)(`input`,{type:`number`,value:t[0],onChange:e=>{n(t=>[Number(e.target.value),t[1]])}})]}),(0,s.jsxs)(`label`,{children:[`row`,(0,s.jsx)(`input`,{type:`number`,value:t[1],onChange:e=>{n(t=>[t[0],Number(e.target.value)])}})]}),(0,s.jsx)(`button`,{onClick:()=>{c.current?.scrollToIndex(t[0],t[1])},children:`scroll to index`}),(0,s.jsx)(`button`,{onClick:()=>{n([Math.round(e*Math.random()),Math.round(e*Math.random())])},children:`randomize`})]}),(0,s.jsx)(`div`,{children:(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`label`,{children:[`x`,(0,s.jsx)(`input`,{type:`number`,value:r[0],onChange:e=>{a(t=>[Number(e.target.value),t[1]])}})]}),(0,s.jsxs)(`label`,{children:[`y`,(0,s.jsx)(`input`,{type:`number`,value:r[1],onChange:e=>{a(t=>[t[0],Number(e.target.value)])}})]}),(0,s.jsx)(`button`,{onClick:()=>{c.current?.scrollTo(r[0],r[1])},children:`scroll to offset`}),(0,s.jsx)(`button`,{onClick:()=>{c.current?.scrollBy(r[0],r[1])},children:`scroll by offset`})]})}),(0,s.jsx)(i,{ref:c,style:{height:`100vh`},row:e,col:e,children:({rowIndex:e,colIndex:t})=>(0,s.jsxs)(`div`,{style:{background:`white`,padding:4,width:160,height:80,borderLeft:t===0?void 0:`solid 1px gray`,borderTop:e===0?void 0:`solid 1px gray`},children:[e,` / `,t]})})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      height: "100vh"
    }} row={1000} col={500}>
        {({
        rowIndex,
        colIndex
      }) => <div style={{
        background: "white",
        padding: 4,
        borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
        borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined
      }}>
            {rowIndex} / {colIndex}
          </div>}
      </VGrid>;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      height: "100vh"
    }} row={1000} col={500}>
        {({
        rowIndex,
        colIndex
      }) => <div style={{
        background: "white",
        padding: 4,
        width: (colIndex % 2 + 1) * 100,
        height: (rowIndex % 2 + 1) * 100,
        borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
        borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined
      }}>
            {rowIndex} / {colIndex}
          </div>}
      </VGrid>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      height: "100vh"
    }} row={1000} col={500}>
        {({
        rowIndex,
        colIndex
      }) => <div style={{
        background: "white",
        padding: 4,
        width: (colIndex % 2 + 1) * 100,
        borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
        borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined
      }}>
            <div>
              {rowIndex} / {colIndex}
            </div>
            {Array.from({
          length: rowIndex % 8 + 1
        }, () => <div>Hello world!</div>)}
          </div>}
      </VGrid>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      height: "100vh"
    }} row={1000} col={500}>
        {({
        rowIndex,
        colIndex
      }) => <div style={{
        background: "white",
        padding: 4,
        height: (rowIndex % 2 + 1) * 100,
        borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
        borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined
      }}>
            <div>
              {rowIndex} / {colIndex}
            </div>
            <div>
              {Array.from({
            length: colIndex % 4 + 1
          }, () => <span>Hello world!</span>)}
            </div>
          </div>}
      </VGrid>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const SIZE = 80;
    const LENGTH = 100;
    const [widths, setWidths] = useState(() => new Map<number, number>());
    const [heights, setHeights] = useState(() => new Map<number, number>());
    const grid = useRef<VGridHandle>(null);
    function randomize() {
      const getSize = () => Math.random() < 0.8 ? 40 + Math.round(200 * Math.random()) : SIZE;
      const newWidths = new Map<number, number>();
      const newHeights = new Map<number, number>();
      // skip index 0 to keep inputs stable
      for (let i = 1; i < LENGTH; i++) {
        newWidths.set(i, getSize());
        newHeights.set(i, getSize());
      }
      grid.current?.resizeCols([...newWidths.entries()]);
      grid.current?.resizeRows([...newHeights.entries()]);
      setWidths(newWidths);
      setHeights(newHeights);
    }
    return <VGrid ref={grid} style={{
      height: "100vh"
    }} row={LENGTH} col={LENGTH} cellHeight={SIZE} cellWidth={SIZE}>
        {({
        rowIndex,
        colIndex
      }) => <div style={{
        background: "white",
        padding: 4,
        width: widths.get(colIndex) ?? SIZE,
        height: heights.get(rowIndex) ?? SIZE,
        borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
        borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined
      }}>
            <div>
              {rowIndex} / {colIndex}
            </div>

            {colIndex === 0 && rowIndex === 0 ?
        // randomize all cols & rows
        <button onClick={randomize}>random</button> : rowIndex === 0 ?
        // resize column
        <input type="number" step={5} value={widths.get(colIndex) ?? SIZE} style={{
          width: 50
        }} onChange={e => {
          const w = e.target.valueAsNumber;
          grid.current?.resizeCols([[colIndex, w]]);
          setWidths(map => new Map(map).set(colIndex, w));
        }} /> : colIndex === 0 ?
        // resize row
        <input type="number" step={5} value={heights.get(rowIndex) ?? SIZE} style={{
          width: 50
        }} onChange={e => {
          const h = e.target.valueAsNumber;
          grid.current?.resizeRows([[rowIndex, h]]);
          setHeights(map => new Map(map).set(rowIndex, h));
        }} /> : null}
          </div>}
      </VGrid>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const LENGTH = 1000;
    const [scrollIndex, setScrollIndex] = useState<[number, number]>([567, 567]);
    const [scrollOffset, setScrollOffset] = useState<[number, number]>([1000, 1000]);
    const ref = useRef<VGridHandle>(null);
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div>
          <label>
            col
            <input type="number" value={scrollIndex[0]} onChange={e => {
            setScrollIndex(prev => [Number(e.target.value), prev[1]]);
          }} />
          </label>
          <label>
            row
            <input type="number" value={scrollIndex[1]} onChange={e => {
            setScrollIndex(prev => [prev[0], Number(e.target.value)]);
          }} />
          </label>
          <button onClick={() => {
          ref.current?.scrollToIndex(scrollIndex[0], scrollIndex[1]);
        }}>
            scroll to index
          </button>
          <button onClick={() => {
          setScrollIndex([Math.round(LENGTH * Math.random()), Math.round(LENGTH * Math.random())]);
        }}>
            randomize
          </button>
        </div>
        <div>
          <div>
            <label>
              x
              <input type="number" value={scrollOffset[0]} onChange={e => {
              setScrollOffset(prev => [Number(e.target.value), prev[1]]);
            }} />
            </label>
            <label>
              y
              <input type="number" value={scrollOffset[1]} onChange={e => {
              setScrollOffset(prev => [prev[0], Number(e.target.value)]);
            }} />
            </label>
            <button onClick={() => {
            ref.current?.scrollTo(scrollOffset[0], scrollOffset[1]);
          }}>
              scroll to offset
            </button>
            <button onClick={() => {
            ref.current?.scrollBy(scrollOffset[0], scrollOffset[1]);
          }}>
              scroll by offset
            </button>
          </div>
        </div>
        <VGrid ref={ref} style={{
        height: "100vh"
      }} row={LENGTH} col={LENGTH}>
          {({
          rowIndex,
          colIndex
        }) => <div style={{
          background: "white",
          padding: 4,
          width: 160,
          height: 80,
          borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
          borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined
        }}>
              {rowIndex} / {colIndex}
            </div>}
        </VGrid>
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Fixed`,`DynamicHeight`,`DynamicWidth`,`Resizeable`,`ScrollTo`]}))();export{l as Default,d as DynamicHeight,f as DynamicWidth,u as Fixed,p as Resizeable,m as ScrollTo,h as __namedExportsOrder,c as default};