import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-2p7qdCK0.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VGrid-CLQXC5ht.js";import{n as o,t as s}from"./en-DltMjSLJ.js";import{n as c,r as l,t as u}from"./common-D8l9P8yd.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=t((()=>{d=e(n(),1),i(),s(),l(),f=r(),p={component:a},m={height:`100vh`,boxSizing:`border-box`,border:`solid 1px gray`},h={background:`white`,padding:4,borderRight:`solid 1px gray`,borderBottom:`solid 1px gray`},g={render:()=>(0,f.jsx)(a,{style:m,rows:1e3,rowHeight:40,cols:500,colWidth:100,children:(e,t)=>(0,f.jsxs)(`div`,{style:h,children:[e,` / `,t]})})},_={render:()=>{let e=1e3,t={start:1,end:1},n={start:2,end:1};return(0,f.jsx)(a,{style:m,rows:e,rowHeight:40,cols:500,colWidth:100,pinnedRows:t,pinnedCols:n,children:(r,i)=>{let a=r<t.start||r>=e-t.end,o=i<n.start||i>=500-n.end;return(0,f.jsxs)(`div`,{style:{...h,background:a?`darkgray`:o?`lightgray`:`white`,color:a?`white`:void 0},children:[r,` / `,i]})}})}},v={render:()=>{let e=1e3,t=(0,d.useMemo)(()=>{let t=[{rowIndex:0,colIndex:0,rowSpan:2}];for(let e=1;e<500;e+=4)t.push({rowIndex:0,colIndex:e,colSpan:4});for(let n=2;n<e;n+=8){t.push({rowIndex:n,colIndex:0,rowSpan:8});for(let e=1;e<500;e+=8)t.push({rowIndex:n,colIndex:e,rowSpan:2,colSpan:2})}return t},[]);return(0,f.jsx)(a,{style:m,rows:e,rowHeight:40,cols:500,colWidth:100,pinnedRows:2,pinnedCols:1,spans:t,children:(t,n)=>{let r=t<2,i=n===0;return(0,f.jsx)(`div`,{style:{...h,background:r?`darkgray`:i?`lightgray`:`white`,color:r?`white`:void 0},children:r&&t===0&&n!==0?`group ${Math.floor((n-1)/4)}`:i&&t>=2?`rows ${t} - ${Math.min(t+8,e)-1}`:`${t} / ${n}`})}})}},y={render:()=>(0,f.jsx)(a,{style:{...m,background:`#ddd`},rows:1e3,rowHeight:40,cols:500,colWidth:100,gap:8,children:(e,t)=>(0,f.jsxs)(`div`,{style:{background:`white`,padding:4,borderRadius:4},children:[e,` / `,t]})})},b={render:()=>{let e=[{key:`id`,width:60},{key:`username`,width:200},{key:`email`,width:`auto`},{key:`company`,width:`auto`},{key:`domain`,width:200}],t=(0,d.useMemo)(()=>[null,...Array.from({length:1e3},(e,t)=>({id:t,username:o.person.fullName(),email:o.internet.email(),company:o.company.name(),domain:o.internet.domainName()}))],[]);return(0,f.jsx)(a,{style:{...m,border:`solid 1px black`},rows:t,rowHeight:30,cols:e,colWidth:`width`,pinnedRows:1,children:(e,t)=>(0,f.jsx)(`div`,{style:{background:e===null?`burlywood`:`white`,padding:4,borderRight:`solid 1px black`,borderBottom:`solid 1px black`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e===null?t.key:e[t.key]})})}},x={render:()=>(0,f.jsx)(a,{style:m,rows:1e3,rowHeight:`auto`,cols:500,colWidth:`auto`,children:(e,t)=>(0,f.jsxs)(`div`,{style:h,children:[(0,f.jsxs)(`div`,{children:[e,` / `,t]}),Array.from({length:e%8+1},(e,n)=>(0,f.jsx)(`div`,{children:Array.from({length:t%4+1},()=>`Hello world!`).join(` `)},n))]})})},S={render:()=>{let e=()=>Array.from({length:100},()=>({width:100})),[t,n]=(0,d.useState)(e),r=(0,d.useRef)(void 0);return(0,f.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,f.jsx)(`button`,{onClick:()=>n(e()),children:`reset widths`}),(0,f.jsx)(a,{style:{flex:1,boxSizing:`border-box`,border:`solid 1px gray`},rows:1e3,rowHeight:40,cols:t,colWidth:`width`,pinnedRows:1,children:(e,t,{colIndex:i})=>(0,f.jsxs)(`div`,{style:{...h,position:`relative`,background:e===0?`lightgray`:`white`,overflow:`hidden`,userSelect:e===0?`none`:void 0},children:[e,` / `,i,e===0&&(0,f.jsx)(`div`,{style:{position:`absolute`,top:0,right:0,width:8,height:`100%`,cursor:`col-resize`,background:`rgba(0, 0, 0, 0.15)`},onPointerDown:e=>{e.preventDefault(),e.currentTarget.setPointerCapture(e.pointerId),r.current={col:i,startX:e.clientX,startWidth:t.width}},onPointerMove:e=>{let t=r.current;if(!t)return;let i=Math.max(40,t.startWidth+e.clientX-t.startX);n(e=>{let n=[...e];return n[t.col]={width:i},n})},onPointerUp:()=>{r.current=void 0}})]})})]})}},C={render:()=>{let e=1e3,[t,n]=(0,d.useState)(567),[r,i]=(0,d.useState)(567),[o,s]=(0,d.useState)(1e3),[c,l]=(0,d.useState)(1e3),u=(0,d.useRef)(null);return(0,f.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`label`,{children:[`col`,(0,f.jsx)(`input`,{type:`number`,value:r,onChange:e=>i(Number(e.target.value))})]}),(0,f.jsxs)(`label`,{children:[`row`,(0,f.jsx)(`input`,{type:`number`,value:t,onChange:e=>n(Number(e.target.value))})]}),(0,f.jsx)(`button`,{onClick:()=>{u.current?.scrollToIndex({rowIndex:t,colIndex:r})},children:`scroll to index`}),(0,f.jsx)(`button`,{onClick:()=>{i(Math.floor(e*Math.random())),n(Math.floor(e*Math.random()))},children:`randomize`})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`label`,{children:[`x`,(0,f.jsx)(`input`,{type:`number`,value:c,onChange:e=>l(Number(e.target.value))})]}),(0,f.jsxs)(`label`,{children:[`y`,(0,f.jsx)(`input`,{type:`number`,value:o,onChange:e=>s(Number(e.target.value))})]}),(0,f.jsx)(`button`,{onClick:()=>{u.current?.scrollTo({vertical:o,horizontal:c})},children:`scroll to offset`}),(0,f.jsx)(`button`,{onClick:()=>{u.current?.scrollBy({vertical:o,horizontal:c})},children:`scroll by offset`})]}),(0,f.jsx)(a,{ref:u,style:{flex:1,boxSizing:`border-box`,border:`solid 1px gray`},rows:e,rowHeight:80,cols:e,colWidth:160,children:(e,t)=>(0,f.jsxs)(`div`,{style:h,children:[e,` / `,t]})})]})}},w={render:()=>{let e=(0,d.useRef)(null),[t,n]=(0,d.useState)(!1),[r,i]=(0,d.useState)(100),o=(0,d.useRef)(-1);return(0,f.jsx)(a,{ref:e,style:m,rows:r+ +!!t,rowHeight:40,cols:100,colWidth:100,spans:t?[{rowIndex:r,colIndex:0,colSpan:100}]:void 0,onVerticalScroll:async t=>{let a=e.current;a&&o.current<r&&a.findRowIndex(t+a.viewportHeight)+25>r&&(o.current=r,n(!0),await c(1e3),n(!1),i(e=>e+100))},children:(e,t)=>e>=r?(0,f.jsx)(u,{height:40,style:{position:`sticky`,insetInlineStart:0,width:`100vw`}}):(0,f.jsxs)(`div`,{style:h,children:[e,` / `,t]})})}},T={render:()=>{let[e,t]=(0,d.useState)(new Set),[n,r]=(0,d.useMemo)(()=>{let t=[],n=[];for(let r=0;r<200;r++)t.push({index:r,height:40}),e.has(r)&&(n.push({rowIndex:t.length,colIndex:0,colSpan:100}),t.push({index:r,isDetail:!0,height:100}));return[t,n]},[e]);return(0,f.jsx)(a,{style:m,rows:n,rowHeight:`height`,cols:100,colWidth:100,spans:r,children:({index:n,isDetail:r},i)=>{if(r)return(0,f.jsxs)(`div`,{style:{background:`#eee`,padding:16},children:[`Detail of row `,n]});if(i===0){let r=e.has(n);return(0,f.jsx)(`div`,{style:{...h,borderRight:void 0},children:(0,f.jsxs)(`button`,{style:{border:`none`,background:`none`,padding:0,font:`inherit`,cursor:`pointer`},"aria-expanded":r,onClick:()=>{t(e=>{let t=new Set(e);return t.delete(n)||t.add(n),t})},children:[r?`▼`:`▶`,` `,n]})})}return(0,f.jsxs)(`div`,{style:h,children:[n,` / `,i]})}})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={gridStyle} rows={1000} rowHeight={40} cols={500} colWidth={100}>
        {(rowIndex, colIndex) => <div style={cellStyle}>
            {rowIndex} / {colIndex}
          </div>}
      </VGrid>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROWS = 1000;
    const COLS = 500;
    const PINNED_ROWS = {
      start: 1,
      end: 1
    };
    const PINNED_COLS = {
      start: 2,
      end: 1
    };
    return <VGrid style={gridStyle} rows={ROWS} rowHeight={40} cols={COLS} colWidth={100} pinnedRows={PINNED_ROWS} pinnedCols={PINNED_COLS}>
        {(rowIndex, colIndex) => {
        const isPinnedRow = rowIndex < PINNED_ROWS.start || rowIndex >= ROWS - PINNED_ROWS.end;
        const isPinnedCol = colIndex < PINNED_COLS.start || colIndex >= COLS - PINNED_COLS.end;
        return <div style={{
          ...cellStyle,
          background: isPinnedRow ? "darkgray" : isPinnedCol ? "lightgray" : "white",
          color: isPinnedRow ? "white" : undefined
        }}>
              {rowIndex} / {colIndex}
            </div>;
      }}
      </VGrid>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROWS = 1000;
    const COLS = 500;
    const GROUP_COLS = 4;
    const GROUP_ROWS = 8;
    const spans = useMemo(() => {
      // corner over the two header rows
      const spans: VGridSpan[] = [{
        rowIndex: 0,
        colIndex: 0,
        rowSpan: 2
      }];
      // grouped header row
      for (let c = 1; c < COLS; c += GROUP_COLS) {
        spans.push({
          rowIndex: 0,
          colIndex: c,
          colSpan: GROUP_COLS
        });
      }
      for (let r = 2; r < ROWS; r += GROUP_ROWS) {
        // row group label in the pinned column
        spans.push({
          rowIndex: r,
          colIndex: 0,
          rowSpan: GROUP_ROWS
        });
        // some merged areas in the body
        for (let c = 1; c < COLS; c += GROUP_COLS * 2) {
          spans.push({
            rowIndex: r,
            colIndex: c,
            rowSpan: 2,
            colSpan: 2
          });
        }
      }
      return spans;
    }, []);
    return <VGrid style={gridStyle} rows={ROWS} rowHeight={40} cols={COLS} colWidth={100} pinnedRows={2} pinnedCols={1} spans={spans}>
        {(rowIndex, colIndex) => {
        const isHeader = rowIndex < 2;
        const isLabel = colIndex === 0;
        return <div style={{
          ...cellStyle,
          background: isHeader ? "darkgray" : isLabel ? "lightgray" : "white",
          color: isHeader ? "white" : undefined
        }}>
              {isHeader && rowIndex === 0 && colIndex !== 0 ? \`group \${Math.floor((colIndex - 1) / GROUP_COLS)}\` : isLabel && rowIndex >= 2 ? \`rows \${rowIndex} - \${Math.min(rowIndex + GROUP_ROWS, ROWS) - 1}\` : \`\${rowIndex} / \${colIndex}\`}
            </div>;
      }}
      </VGrid>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      ...gridStyle,
      background: "#ddd"
    }} rows={1000} rowHeight={40} cols={500} colWidth={100} gap={8}>
        {(rowIndex, colIndex) => <div style={{
        background: "white",
        padding: 4,
        borderRadius: 4
      }}>
            {rowIndex} / {colIndex}
          </div>}
      </VGrid>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    // fixed widths and content-fit (auto) widths can be mixed
    const columns = [{
      key: "id",
      width: 60
    }, {
      key: "username",
      width: 200
    }, {
      key: "email",
      width: "auto"
    }, {
      key: "company",
      width: "auto"
    }, {
      key: "domain",
      width: 200
    }] as const;
    const rows = useMemo(() => [
    // the header row has no data
    null, ...Array.from({
      length: 1000
    }, (_, i) => ({
      id: i,
      username: faker.person.fullName(),
      email: faker.internet.email(),
      company: faker.company.name(),
      domain: faker.internet.domainName()
    }))], []);
    return <VGrid style={{
      ...gridStyle,
      border: "solid 1px black"
    }} rows={rows} rowHeight={30} cols={columns} colWidth="width" pinnedRows={1}>
        {(row, column) => <div style={{
        background: row === null ? "burlywood" : "white",
        padding: 4,
        borderRight: "solid 1px black",
        borderBottom: "solid 1px black",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }}>
            {row === null ? column.key : row[column.key]}
          </div>}
      </VGrid>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={gridStyle} rows={1000} rowHeight="auto" cols={500} colWidth="auto">
        {(rowIndex, colIndex) => <div style={cellStyle}>
            <div>
              {rowIndex} / {colIndex}
            </div>
            {Array.from({
          length: rowIndex % 8 + 1
        }, (_, i) => <div key={i}>
                {Array.from({
            length: colIndex % 4 + 1
          }, () => "Hello world!").join(" ")}
              </div>)}
          </div>}
      </VGrid>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const COLS = 100;
    const MIN_WIDTH = 40;
    const initialColumns = () => Array.from({
      length: COLS
    }, () => ({
      width: 100
    }));
    const [columns, setColumns] = useState(initialColumns);
    const drag = useRef<{
      col: number;
      startX: number;
      startWidth: number;
    }>(undefined);
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <button onClick={() => setColumns(initialColumns())}>
          reset widths
        </button>
        <VGrid style={{
        flex: 1,
        boxSizing: "border-box",
        border: "solid 1px gray"
      }} rows={1000} rowHeight={40} cols={columns} colWidth="width" pinnedRows={1}>
          {(rowIndex, column, {
          colIndex
        }) => <div style={{
          ...cellStyle,
          position: "relative",
          background: rowIndex === 0 ? "lightgray" : "white",
          overflow: "hidden",
          userSelect: rowIndex === 0 ? "none" : undefined
        }}>
              {rowIndex} / {colIndex}
              {rowIndex === 0 && <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 8,
            height: "100%",
            cursor: "col-resize",
            background: "rgba(0, 0, 0, 0.15)"
          }} onPointerDown={e => {
            e.preventDefault();
            e.currentTarget.setPointerCapture(e.pointerId);
            drag.current = {
              col: colIndex,
              startX: e.clientX,
              startWidth: column.width
            };
          }} onPointerMove={e => {
            const d = drag.current;
            if (!d) return;
            const width = Math.max(MIN_WIDTH, d.startWidth + e.clientX - d.startX);
            setColumns(prev => {
              const next = [...prev];
              next[d.col] = {
                width
              };
              return next;
            });
          }} onPointerUp={() => {
            drag.current = undefined;
          }} />}
            </div>}
        </VGrid>
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const LENGTH = 1000;
    const [rowIndex, setRowIndex] = useState(567);
    const [colIndex, setColIndex] = useState(567);
    const [vertical, setVertical] = useState(1000);
    const [horizontal, setHorizontal] = useState(1000);
    const ref = useRef<VGridHandle>(null);
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div>
          <label>
            col
            <input type="number" value={colIndex} onChange={e => setColIndex(Number(e.target.value))} />
          </label>
          <label>
            row
            <input type="number" value={rowIndex} onChange={e => setRowIndex(Number(e.target.value))} />
          </label>
          <button onClick={() => {
          ref.current?.scrollToIndex({
            rowIndex,
            colIndex
          });
        }}>
            scroll to index
          </button>
          <button onClick={() => {
          setColIndex(Math.floor(LENGTH * Math.random()));
          setRowIndex(Math.floor(LENGTH * Math.random()));
        }}>
            randomize
          </button>
        </div>
        <div>
          <label>
            x
            <input type="number" value={horizontal} onChange={e => setHorizontal(Number(e.target.value))} />
          </label>
          <label>
            y
            <input type="number" value={vertical} onChange={e => setVertical(Number(e.target.value))} />
          </label>
          <button onClick={() => {
          ref.current?.scrollTo({
            vertical,
            horizontal
          });
        }}>
            scroll to offset
          </button>
          <button onClick={() => {
          ref.current?.scrollBy({
            vertical,
            horizontal
          });
        }}>
            scroll by offset
          </button>
        </div>
        <VGrid ref={ref} style={{
        flex: 1,
        boxSizing: "border-box",
        border: "solid 1px gray"
      }} rows={LENGTH} rowHeight={80} cols={LENGTH} colWidth={160}>
          {(rowIndex, colIndex) => <div style={cellStyle}>
              {rowIndex} / {colIndex}
            </div>}
        </VGrid>
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_BATCH = 100;
    const COLS = 100;
    const ROW_HEIGHT = 40;
    const ref = useRef<VGridHandle>(null);
    const [fetching, setFetching] = useState(false);
    const [rowCount, setRowCount] = useState(ROW_BATCH);
    const fetchedCountRef = useRef(-1);
    return <VGrid ref={ref} style={gridStyle}
    // the last row is the loading indicator
    rows={rowCount + (fetching ? 1 : 0)} rowHeight={ROW_HEIGHT} cols={COLS} colWidth={100} spans={fetching ? [{
      rowIndex: rowCount,
      colIndex: 0,
      colSpan: COLS
    }] : undefined} onVerticalScroll={async offset => {
      const grid = ref.current;
      if (grid && fetchedCountRef.current < rowCount && grid.findRowIndex(offset + grid.viewportHeight) + 25 > rowCount) {
        fetchedCountRef.current = rowCount;
        setFetching(true);
        await delay(1000);
        setFetching(false);
        setRowCount(prev => prev + ROW_BATCH);
      }
    }}>
        {(rowIndex, colIndex) => rowIndex >= rowCount ? <Spinner height={ROW_HEIGHT}
      // the row is wider than the viewport, so keep the indicator in it
      style={{
        position: "sticky",
        insetInlineStart: 0,
        width: "100vw"
      }} /> : <div style={cellStyle}>
              {rowIndex} / {colIndex}
            </div>}
      </VGrid>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROWS = 200;
    const COLS = 100;
    const [expanded, setExpanded] = useState<ReadonlySet<number>>(new Set());
    const [displayRows, spans] = useMemo(() => {
      const displayRows: {
        index: number;
        isDetail?: boolean;
        height: number;
      }[] = [];
      const spans: VGridSpan[] = [];
      for (let i = 0; i < ROWS; i++) {
        displayRows.push({
          index: i,
          height: 40
        });
        if (expanded.has(i)) {
          spans.push({
            rowIndex: displayRows.length,
            colIndex: 0,
            colSpan: COLS
          });
          displayRows.push({
            index: i,
            isDetail: true,
            height: 100
          });
        }
      }
      return [displayRows, spans] as const;
    }, [expanded]);
    return <VGrid style={gridStyle} rows={displayRows} rowHeight="height" cols={COLS} colWidth={100} spans={spans}>
        {({
        index,
        isDetail
      }, colIndex) => {
        if (isDetail) {
          return <div style={{
            background: "#eee",
            padding: 16
          }}>
                Detail of row {index}
              </div>;
        }
        if (colIndex === 0) {
          const isExpanded = expanded.has(index);
          return <div style={{
            ...cellStyle,
            borderRight: undefined
          }}>
                <button style={{
              border: "none",
              background: "none",
              padding: 0,
              font: "inherit",
              cursor: "pointer"
            }} aria-expanded={isExpanded} onClick={() => {
              setExpanded(prev => {
                const next = new Set(prev);
                if (!next.delete(index)) {
                  next.add(index);
                }
                return next;
              });
            }}>
                  {isExpanded ? "▼" : "▶"} {index}
                </button>
              </div>;
        }
        return <div style={cellStyle}>
              {index} / {colIndex}
            </div>;
      }}
      </VGrid>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Pinned`,`Spans`,`Gap`,`Columns`,`AutoSize`,`Resizable`,`ScrollTo`,`InfiniteScrolling`,`MasterDetail`]})))()}D();export{x as AutoSize,b as Columns,g as Default,y as Gap,w as InfiniteScrolling,T as MasterDetail,_ as Pinned,S as Resizable,C as ScrollTo,v as Spans,E as __namedExportsOrder,p as default};