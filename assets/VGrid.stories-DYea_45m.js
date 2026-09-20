import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-D4fJRd_i.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VGrid-LmvQeYIy.js";import{n as o,t as s}from"./en-DltMjSLJ.js";import{n as c,r as l,t as u}from"./common-wbGxCgC4.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{d=e(n(),1),i(),s(),l(),f=r(),p={component:a},m={render:()=>(0,f.jsx)(a,{style:{height:`100vh`,boxSizing:`border-box`,border:`solid 1px gray`,background:`white`},rows:1e3,rowHeight:40,cols:500,colWidth:100,children:(e,t)=>(0,f.jsxs)(`div`,{style:{padding:4,borderRight:`solid 1px gray`,borderBottom:`solid 1px gray`},children:[e,` / `,t]})})},h={render:()=>{let e=1e3,t={header:1,footer:1},n={header:2,footer:1};return(0,f.jsx)(a,{style:{height:`100vh`,boxSizing:`border-box`,border:`solid 1px gray`,background:`white`},rows:e,rowHeight:40,cols:500,colWidth:100,headerRows:t.header,footerRows:t.footer,headerCols:n.header,footerCols:n.footer,children:(r,i)=>{let a=r<t.header||r>=e-t.footer,o=i<n.header||i>=500-n.footer;return(0,f.jsxs)(`div`,{style:{padding:4,borderRight:`solid 1px gray`,borderBottom:`solid 1px gray`,background:a?`darkgray`:o?`lightgray`:void 0,color:a?`white`:void 0},children:[r,` / `,i]})}})}},g={render:()=>{let e=1e3,t=(0,d.useMemo)(()=>{let t=[{rowIndex:0,colIndex:0,rowSpan:2}];for(let e=1;e<500;e+=4)t.push({rowIndex:0,colIndex:e,colSpan:4});for(let n=2;n<e;n+=8){t.push({rowIndex:n,colIndex:0,rowSpan:8});for(let e=1;e<500;e+=8)t.push({rowIndex:n,colIndex:e,rowSpan:2,colSpan:2})}return t},[]);return(0,f.jsx)(a,{style:{height:`100vh`,boxSizing:`border-box`,border:`solid 1px gray`,background:`white`},rows:e,rowHeight:40,cols:500,colWidth:100,headerRows:2,headerCols:1,spans:t,children:(t,n)=>{let r=t<2,i=n===0;return(0,f.jsx)(`div`,{style:{padding:4,borderRight:`solid 1px gray`,borderBottom:`solid 1px gray`,background:r?`darkgray`:i?`lightgray`:void 0,color:r?`white`:void 0},children:r&&t===0&&n!==0?`group ${Math.floor((n-1)/4)}`:i&&t>=2?`rows ${t} - ${Math.min(t+8,e)-1}`:`${t} / ${n}`})}})}},_={render:()=>(0,f.jsx)(a,{style:{height:`100vh`,boxSizing:`border-box`,border:`solid 1px gray`,background:`#ddd`},rows:1e3,rowHeight:40,cols:500,colWidth:100,gap:8,children:(e,t)=>(0,f.jsxs)(`div`,{style:{background:`white`,padding:4,borderRadius:4},children:[e,` / `,t]})})},v={render:()=>{let e=[{key:`id`,width:60},{key:`username`,width:200},{key:`email`,width:`auto`},{key:`company`,width:`auto`},{key:`domain`,width:200}],t=(0,d.useMemo)(()=>[null,...Array.from({length:1e3},(e,t)=>({id:t,username:o.person.fullName(),email:o.internet.email(),company:o.company.name(),domain:o.internet.domainName()}))],[]);return(0,f.jsx)(a,{style:{height:`100vh`,boxSizing:`border-box`,border:`solid 1px black`,background:`white`},rows:t,rowHeight:30,cols:e,colWidth:`width`,headerRows:1,children:(e,t)=>(0,f.jsx)(`div`,{style:{padding:4,borderRight:`solid 1px black`,borderBottom:`solid 1px black`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`,background:e===null?`burlywood`:void 0},children:e===null?t.key:e[t.key]})})}},y=Array.from({length:26},(e,t)=>{let n=String.fromCharCode(65+t);return{label:n,data:Array.from({length:5+t*7%20},(e,r)=>({name:`${n}${r}`,value:(t*31+r*17)%100}))}}),b=[{key:`name`,width:200},{key:`value`,width:200},{key:`note`,width:`auto`}],x=[{header:!0},...y.flatMap(e=>[e,...e.data])],S=x.flatMap((e,t)=>`data`in e?[t]:[]),C={render:()=>(0,f.jsx)(a,{style:{height:`100vh`,boxSizing:`border-box`,border:`solid 1px gray`,background:`white`},rows:x,rowHeight:40,cols:b,colWidth:`width`,headerRows:1,sectionRows:S,spans:S.map(e=>({rowIndex:e,colIndex:0,colSpan:3})),children:(e,t)=>(0,f.jsx)(`div`,{style:{padding:4,borderRight:`solid 1px gray`,borderBottom:`solid 1px gray`,background:`header`in e?`burlywood`:`data`in e?`#eee`:void 0,fontWeight:`header`in e||`data`in e?`bold`:void 0},children:`header`in e?t.key:`data`in e?`${e.label} (${e.data.length})`:t.key===`note`?`-`:e[t.key]})})},w=Array.from({length:64},()=>o.lorem.words({min:1,max:24})),T=e=>(e=Math.imul(e^e>>>16,73244475),e=Math.imul(e^e>>>16,73244475),(e^e>>>16)>>>0),E={render:()=>(0,f.jsx)(a,{style:{height:`100vh`,boxSizing:`border-box`,border:`solid 1px gray`,background:`white`},rows:1e3,rowHeight:`auto`,cols:500,colWidth:200,children:(e,t)=>(0,f.jsxs)(`div`,{style:{padding:4,borderRight:`solid 1px gray`,borderBottom:`solid 1px gray`},children:[(0,f.jsxs)(`div`,{children:[e,` / `,t]}),w[T(e*500+t)%w.length]]})})},D={render:()=>{let e=()=>Array.from({length:100},()=>({width:100})),[t,n]=(0,d.useState)(e),r=(0,d.useRef)(void 0);return(0,f.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,f.jsx)(`button`,{onClick:()=>n(e()),children:`reset widths`}),(0,f.jsx)(a,{style:{flex:1,boxSizing:`border-box`,border:`solid 1px gray`,background:`white`},rows:1e3,rowHeight:40,cols:t,colWidth:`width`,headerRows:1,children:(e,t,{colIndex:i})=>(0,f.jsxs)(`div`,{style:{padding:4,borderRight:`solid 1px gray`,borderBottom:`solid 1px gray`,position:`relative`,overflow:`hidden`,background:e===0?`lightgray`:void 0,userSelect:e===0?`none`:void 0},children:[e,` / `,i,e===0&&(0,f.jsx)(`div`,{style:{position:`absolute`,top:0,right:0,width:8,height:`100%`,cursor:`col-resize`,background:`rgba(0, 0, 0, 0.15)`},onPointerDown:e=>{e.preventDefault(),e.currentTarget.setPointerCapture(e.pointerId),r.current={col:i,startX:e.clientX,startWidth:t.width}},onPointerMove:e=>{let t=r.current;if(!t)return;let i=Math.max(40,t.startWidth+e.clientX-t.startX);n(e=>{let n=[...e];return n[t.col]={width:i},n})},onPointerUp:()=>{r.current=void 0}})]})})]})}},O={render:()=>{let e=1e3,[t,n]=(0,d.useState)(567),[r,i]=(0,d.useState)(567),[o,s]=(0,d.useState)(1e3),[c,l]=(0,d.useState)(1e3),u=(0,d.useRef)(null);return(0,f.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`label`,{children:[`col`,(0,f.jsx)(`input`,{type:`number`,value:r,onChange:e=>i(Number(e.target.value))})]}),(0,f.jsxs)(`label`,{children:[`row`,(0,f.jsx)(`input`,{type:`number`,value:t,onChange:e=>n(Number(e.target.value))})]}),(0,f.jsx)(`button`,{onClick:()=>{u.current?.scrollToIndex({rowIndex:t,colIndex:r})},children:`scroll to index`}),(0,f.jsx)(`button`,{onClick:()=>{i(Math.floor(e*Math.random())),n(Math.floor(e*Math.random()))},children:`randomize`})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`label`,{children:[`x`,(0,f.jsx)(`input`,{type:`number`,value:c,onChange:e=>l(Number(e.target.value))})]}),(0,f.jsxs)(`label`,{children:[`y`,(0,f.jsx)(`input`,{type:`number`,value:o,onChange:e=>s(Number(e.target.value))})]}),(0,f.jsx)(`button`,{onClick:()=>{u.current?.scrollTo({vertical:o,horizontal:c})},children:`scroll to offset`}),(0,f.jsx)(`button`,{onClick:()=>{u.current?.scrollBy({vertical:o,horizontal:c})},children:`scroll by offset`})]}),(0,f.jsx)(a,{ref:u,style:{flex:1,boxSizing:`border-box`,border:`solid 1px gray`,background:`white`},rows:e,rowHeight:80,cols:e,colWidth:160,children:(e,t)=>(0,f.jsxs)(`div`,{style:{padding:4,borderRight:`solid 1px gray`,borderBottom:`solid 1px gray`},children:[e,` / `,t]})})]})}},k={render:()=>{let e=(0,d.useRef)(null),[t,n]=(0,d.useState)(!1),[r,i]=(0,d.useState)(100),o=(0,d.useRef)(-1);return(0,f.jsx)(a,{ref:e,style:{height:`100vh`,boxSizing:`border-box`,border:`solid 1px gray`,background:`white`},rows:r+ +!!t,rowHeight:40,cols:100,colWidth:100,spans:t?[{rowIndex:r,colIndex:0,colSpan:100}]:void 0,onVerticalScroll:async t=>{let a=e.current;a&&o.current<r&&a.findRowIndex(t+a.viewportHeight)+25>r&&(o.current=r,n(!0),await c(1e3),n(!1),i(e=>e+100))},children:(e,t)=>e>=r?(0,f.jsx)(u,{height:40,style:{position:`sticky`,insetInlineStart:0,width:`100vw`}}):(0,f.jsxs)(`div`,{style:{padding:4,borderRight:`solid 1px gray`,borderBottom:`solid 1px gray`},children:[e,` / `,t]})})}},A={render:()=>{let[e,t]=(0,d.useState)(new Set),[n,r]=(0,d.useMemo)(()=>{let t=[],n=[];for(let r=0;r<200;r++)t.push({index:r,height:40}),e.has(r)&&(n.push({rowIndex:t.length,colIndex:0,colSpan:100}),t.push({index:r,isDetail:!0,height:100}));return[t,n]},[e]);return(0,f.jsx)(a,{style:{height:`100vh`,boxSizing:`border-box`,border:`solid 1px gray`,background:`white`},rows:n,rowHeight:`height`,cols:100,colWidth:100,spans:r,children:({index:n,isDetail:r},i)=>{if(r)return(0,f.jsxs)(`div`,{style:{background:`#eee`,padding:16},children:[`Detail of row `,n]});if(i===0){let r=e.has(n);return(0,f.jsx)(`div`,{style:{padding:4,borderBottom:`solid 1px gray`},children:(0,f.jsxs)(`button`,{style:{border:`none`,background:`none`,padding:0,font:`inherit`,cursor:`pointer`},"aria-expanded":r,onClick:()=>{t(e=>{let t=new Set(e);return t.delete(n)||t.add(n),t})},children:[r?`▼`:`▶`,` `,n]})})}return(0,f.jsxs)(`div`,{style:{padding:4,borderRight:`solid 1px gray`,borderBottom:`solid 1px gray`},children:[n,` / `,i]})}})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      height: "100vh",
      boxSizing: "border-box",
      border: "solid 1px gray",
      background: "white"
    }} rows={1000} rowHeight={40} cols={500} colWidth={100}>
        {(rowIndex, colIndex) => <div style={{
        padding: 4,
        borderRight: "solid 1px gray",
        borderBottom: "solid 1px gray"
      }}>
            {rowIndex} / {colIndex}
          </div>}
      </VGrid>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROWS = 1000;
    const COLS = 500;
    const PINNED_ROWS = {
      header: 1,
      footer: 1
    };
    const PINNED_COLS = {
      header: 2,
      footer: 1
    };
    return <VGrid style={{
      height: "100vh",
      boxSizing: "border-box",
      border: "solid 1px gray",
      background: "white"
    }} rows={ROWS} rowHeight={40} cols={COLS} colWidth={100} headerRows={PINNED_ROWS.header} footerRows={PINNED_ROWS.footer} headerCols={PINNED_COLS.header} footerCols={PINNED_COLS.footer}>
        {(rowIndex, colIndex) => {
        const isPinnedRow = rowIndex < PINNED_ROWS.header || rowIndex >= ROWS - PINNED_ROWS.footer;
        const isPinnedCol = colIndex < PINNED_COLS.header || colIndex >= COLS - PINNED_COLS.footer;
        return <div style={{
          padding: 4,
          borderRight: "solid 1px gray",
          borderBottom: "solid 1px gray",
          background: isPinnedRow ? "darkgray" : isPinnedCol ? "lightgray" : undefined,
          color: isPinnedRow ? "white" : undefined
        }}>
              {rowIndex} / {colIndex}
            </div>;
      }}
      </VGrid>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROWS = 1000;
    const COLS = 500;
    const GROUP_COLS = 4;
    const GROUP_ROWS = 8;
    const spans = useMemo(() => {
      // corner over the two header rows
      const spans: GridSpan[] = [{
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
    return <VGrid style={{
      height: "100vh",
      boxSizing: "border-box",
      border: "solid 1px gray",
      background: "white"
    }} rows={ROWS} rowHeight={40} cols={COLS} colWidth={100} headerRows={2} headerCols={1} spans={spans}>
        {(rowIndex, colIndex) => {
        const isHeader = rowIndex < 2;
        const isLabel = colIndex === 0;
        return <div style={{
          padding: 4,
          borderRight: "solid 1px gray",
          borderBottom: "solid 1px gray",
          background: isHeader ? "darkgray" : isLabel ? "lightgray" : undefined,
          color: isHeader ? "white" : undefined
        }}>
              {isHeader && rowIndex === 0 && colIndex !== 0 ? \`group \${Math.floor((colIndex - 1) / GROUP_COLS)}\` : isLabel && rowIndex >= 2 ? \`rows \${rowIndex} - \${Math.min(rowIndex + GROUP_ROWS, ROWS) - 1}\` : \`\${rowIndex} / \${colIndex}\`}
            </div>;
      }}
      </VGrid>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      height: "100vh",
      boxSizing: "border-box",
      border: "solid 1px gray",
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
      height: "100vh",
      boxSizing: "border-box",
      border: "solid 1px black",
      background: "white"
    }} rows={rows} rowHeight={30} cols={columns} colWidth="width" headerRows={1}>
        {(row, column) => <div style={{
        padding: 4,
        borderRight: "solid 1px black",
        borderBottom: "solid 1px black",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        background: row === null ? "burlywood" : undefined
      }}>
            {row === null ? column.key : row[column.key]}
          </div>}
      </VGrid>;
  }
}`,...v.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      height: "100vh",
      boxSizing: "border-box",
      border: "solid 1px gray",
      background: "white"
    }} rows={groupedRows} rowHeight={40} cols={SECTION_COLS} colWidth="width" headerRows={1} sectionRows={sectionStarts} spans={sectionStarts.map(rowIndex => ({
      rowIndex,
      colIndex: 0,
      colSpan: 3
    }))}>
        {(row, column) => <div style={{
        padding: 4,
        borderRight: "solid 1px gray",
        borderBottom: "solid 1px gray",
        background: "header" in row ? "burlywood" : "data" in row ? "#eee" : undefined,
        fontWeight: "header" in row || "data" in row ? "bold" : undefined
      }}>
            {"header" in row ? column.key : "data" in row ? \`\${row.label} (\${row.data.length})\` : column.key === "note" ? "-" : row[column.key]}
          </div>}
      </VGrid>;
  }
}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      height: "100vh",
      boxSizing: "border-box",
      border: "solid 1px gray",
      background: "white"
    }} rows={1000} rowHeight="auto" cols={500} colWidth={200}>
        {(rowIndex, colIndex) => <div style={{
        padding: 4,
        borderRight: "solid 1px gray",
        borderBottom: "solid 1px gray"
      }}>
            <div>
              {rowIndex} / {colIndex}
            </div>
            {PHRASES[hash(rowIndex * 500 + colIndex) % PHRASES.length]}
          </div>}
      </VGrid>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
        border: "solid 1px gray",
        background: "white"
      }} rows={1000} rowHeight={40} cols={columns} colWidth="width" headerRows={1}>
          {(rowIndex, column, {
          colIndex
        }) => <div style={{
          padding: 4,
          borderRight: "solid 1px gray",
          borderBottom: "solid 1px gray",
          position: "relative",
          overflow: "hidden",
          background: rowIndex === 0 ? "lightgray" : undefined,
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
        border: "solid 1px gray",
        background: "white"
      }} rows={LENGTH} rowHeight={80} cols={LENGTH} colWidth={160}>
          {(rowIndex, colIndex) => <div style={{
          padding: 4,
          borderRight: "solid 1px gray",
          borderBottom: "solid 1px gray"
        }}>
              {rowIndex} / {colIndex}
            </div>}
        </VGrid>
      </div>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROW_BATCH = 100;
    const COLS = 100;
    const ROW_HEIGHT = 40;
    const ref = useRef<VGridHandle>(null);
    const [fetching, setFetching] = useState(false);
    const [rowCount, setRowCount] = useState(ROW_BATCH);
    const fetchedCountRef = useRef(-1);
    return <VGrid ref={ref} style={{
      height: "100vh",
      boxSizing: "border-box",
      border: "solid 1px gray",
      background: "white"
    }}
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
      }} /> : <div style={{
        padding: 4,
        borderRight: "solid 1px gray",
        borderBottom: "solid 1px gray"
      }}>
              {rowIndex} / {colIndex}
            </div>}
      </VGrid>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
      const spans: GridSpan[] = [];
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
    return <VGrid style={{
      height: "100vh",
      boxSizing: "border-box",
      border: "solid 1px gray",
      background: "white"
    }} rows={displayRows} rowHeight="height" cols={COLS} colWidth={100} spans={spans}>
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
            padding: 4,
            borderBottom: "solid 1px gray"
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
        return <div style={{
          padding: 4,
          borderRight: "solid 1px gray",
          borderBottom: "solid 1px gray"
        }}>
              {index} / {colIndex}
            </div>;
      }}
      </VGrid>;
  }
}`,...A.parameters?.docs?.source}}},j=[`Default`,`Pinned`,`Spans`,`Gap`,`Columns`,`Sections`,`AutoSize`,`Resizable`,`ScrollTo`,`InfiniteScrolling`,`MasterDetail`]})))()}M();export{E as AutoSize,v as Columns,m as Default,_ as Gap,k as InfiniteScrolling,A as MasterDetail,h as Pinned,D as Resizable,O as ScrollTo,C as Sections,g as Spans,j as __namedExportsOrder,p as default};