import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-DONS261y.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VGrid-Bpd9Kdt9.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{i(),o=e(n(),1),s=r(),c={component:a},l=702,u=48,d=100,f=e=>{let t=``,n=e+1;for(;n>0;){let e=(n-1)%26;t=String.fromCharCode(65+e)+t,n=(n-1-e)/26|0}return t},p=(e,t)=>e+`-`+t,m=(e,t)=>f(t)+(e+1),h={boxSizing:`border-box`,display:`flex`,alignItems:`center`,width:`100%`,padding:`0 4px`,margin:0,border:`none`,background:`#fff`,borderBottom:`solid 1px #e2e3e3`,borderRight:`solid 1px #e2e3e3`,overflow:`hidden`,whiteSpace:`nowrap`,font:`inherit`,fontSize:13,color:`inherit`,outline:`none`},g={...h,justifyContent:`center`,background:`#f8f9fa`,borderBottom:`solid 1px #c0c0c0`,borderRight:`solid 1px #c0c0c0`,color:`#333`,userSelect:`none`},_={...g,background:`#d3e3fd`},v={position:`absolute`,width:1,height:1,overflow:`hidden`,clip:`rect(0 0 0 0)`,whiteSpace:`nowrap`},y={ArrowDown:[1,0],ArrowUp:[-1,0],ArrowRight:[0,1],ArrowLeft:[0,-1]},b={render:()=>{let e=(0,o.useId)(),t=t=>`${e}-col-${t}`,n=t=>`${e}-row-${t}`,r=(t,n)=>`${e}-cell-${t}-${n}`,i=(0,o.useRef)(null),c=(0,o.useRef)(null),b=(0,o.useRef)(!1),x=(0,o.useRef)(!1),[S,C]=(0,o.useState)(()=>[{name:``,width:u},...Array.from({length:l},(e,t)=>({name:f(t),width:d}))]),[w,T]=(0,o.useState)(null),E=(0,o.useRef)(null),[D,O]=(0,o.useState)(()=>new Map(Array.from({length:20},(e,t)=>[p(t,t*7%10),`hello`]))),k=(e,t)=>D.get(p(e,t))||``,[A,j]=(0,o.useState)([0,0]),[M,N]=(0,o.useState)([0,0]),[P,F]=(0,o.useState)(null),I={top:Math.min(A[0],M[0]),bottom:Math.max(A[0],M[0]),left:Math.min(A[1],M[1]),right:Math.max(A[1],M[1])},L=I.top!==I.bottom||I.left!==I.right;(0,o.useLayoutEffect)(()=>{b.current&&(b.current=!1,c.current?.focus({preventScroll:!0}))});let R=(e,t)=>{j(e),N(e),F({pos:e,initial:t})},z=(e,t)=>{P&&(e!==null&&O(t=>new Map(t).set(p(P.pos[0],P.pos[1]),e)),F(null),b.current=t)},B=(e,t,n)=>{e=Math.max(0,Math.min(e,99999)),t=Math.max(0,Math.min(t,701)),j([e,t]),n||N([e,t]),b.current=!0,i.current?.scrollToIndex({rowIndex:e+1,colIndex:t+1,rowAlign:`nearest`,colAlign:`nearest`})};return(0,s.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,s.jsxs)(`div`,{style:{padding:4,display:`flex`,gap:16,alignItems:`center`},children:[(0,s.jsxs)(`span`,{"aria-hidden":!0,style:{flex:`none`,width:`18ch`,overflow:`hidden`,whiteSpace:`nowrap`,fontVariantNumeric:`tabular-nums`},children:[m(A[0],A[1]),L&&`:`+m(I.bottom,I.right)]}),(0,s.jsx)(`span`,{id:`${e}-help`,style:{fontSize:12,color:`#555`},children:`Arrow keys: move, Shift + Arrow keys: select, Enter or F2: edit, Escape: cancel, Delete: clear`}),(0,s.jsx)(`span`,{role:`status`,style:v,children:L?`${m(I.top,I.left)} to ${m(I.bottom,I.right)} selected`:``})]}),(0,s.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`},onKeyDown:e=>{if(P)return;let[t,n]=A,r=y[e.key];if(r)B(t+r[0],n+r[1],e.shiftKey);else if(e.key===`F2`)R(A,k(t,n));else if(e.key===`Delete`||e.key===`Backspace`)O(e=>{let t=new Map(e);for(let e=I.top;e<=I.bottom;e++)for(let n=I.left;n<=I.right;n++)t.delete(p(e,n));return t});else if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.metaKey)R(A,e.key);else return;e.preventDefault()},children:(0,s.jsx)(a,{ref:i,"aria-label":`Spreadsheet`,"aria-describedby":`${e}-help`,style:{flex:1,background:`#fff`},rows:100001,rowHeight:26,cols:S,colWidth:`width`,headerRows:1,headerCols:1,keepMounted:[{rowIndex:A[0]+1,colIndex:A[1]+1}],children:(e,i,{colIndex:a})=>{let o=e-1,l=a-1;if(e===0&&a===0)return(0,s.jsx)(`div`,{style:g,children:(0,s.jsx)(`span`,{style:v,children:`Row`})});if(e===0)return(0,s.jsxs)(`div`,{id:t(l),style:{...l>=I.left&&l<=I.right?_:g,position:`relative`},children:[i.name,(0,s.jsx)(`div`,{"aria-hidden":!0,style:{position:`absolute`,top:0,right:0,width:6,height:`100%`,cursor:`col-resize`,borderRight:`solid 1px ${w===a?`#1a73e8`:`transparent`}`,boxSizing:`border-box`},onPointerDown:e=>{e.preventDefault(),e.currentTarget.setPointerCapture(e.pointerId),E.current={startX:e.clientX,startWidth:i.width},T(a)},onPointerMove:e=>{let t=E.current;if(!t)return;let n=Math.max(30,t.startWidth+e.clientX-t.startX);C(e=>{let t=[...e];return t[a]={...i,width:n},t})},onPointerUp:()=>{E.current=null,T(null)}})]});if(a===0)return(0,s.jsx)(`div`,{id:n(o),style:o>=I.top&&o<=I.bottom?_:g,children:e});let u=o===A[0]&&l===A[1],d=o>=I.top&&o<=I.bottom&&l>=I.left&&l<=I.right;return P&&P.pos[0]===o&&P.pos[1]===l?(0,s.jsx)(`input`,{autoFocus:!0,"aria-labelledby":`${t(l)} ${n(o)}`,defaultValue:P.initial,style:{boxSizing:`border-box`,width:`100%`,height:`100%`,border:`solid 2px #1a73e8`,padding:`0 2px`,fontSize:13},onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),z(e.currentTarget.value,!0),B(o+1,l)):e.key===`Escape`&&z(null,!0),e.stopPropagation()},onBlur:e=>z(e.currentTarget.value,!1)}):(0,s.jsx)(`button`,{ref:u?c:void 0,id:r(o,l),"aria-labelledby":`${t(l)} ${n(o)} ${r(o,l)}`,tabIndex:u?0:-1,style:{...h,background:d?`#e8f0fe`:h.background,boxShadow:u?`inset 0 0 0 2px #1a73e8`:void 0},onFocus:()=>{x.current?x.current=!1:u||(j([o,l]),N([o,l]))},onMouseDown:e=>{x.current=!0,j([o,l]),e.shiftKey||N([o,l])},onMouseEnter:e=>{e.buttons&1&&j([o,l])},onClick:e=>{e.detail===0&&R([o,l],k(o,l))},onDoubleClick:()=>{R([o,l],k(o,l))},children:k(o,l)})}})})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const id = useId();
    const colHeaderId = (c: number) => \`\${id}-col-\${c}\`;
    const rowHeaderId = (r: number) => \`\${id}-row-\${r}\`;
    const cellId = (r: number, c: number) => \`\${id}-cell-\${r}-\${c}\`;
    const ref = useRef<VGridHandle>(null);
    const activeRef = useRef<HTMLButtonElement>(null);
    const shouldFocus = useRef(false);
    const pointerFocus = useRef(false);
    const [cols, setCols] = useState(() => [{
      name: "",
      width: HEADER_WIDTH
    }, ...Array.from({
      length: COLS
    }, (_, i) => ({
      name: colName(i),
      width: CELL_WIDTH
    }))]);
    const [resizing, setResizing] = useState<number | null>(null);
    const drag = useRef<{
      startX: number;
      startWidth: number;
    } | null>(null);
    // sparse cell values keyed by "row-col" in data coordinates
    const [values, setValues] = useState<ReadonlyMap<string, string>>(() => new Map(Array.from({
      length: 20
    }, (_, i): [string, string] => [genKey(i, i * 7 % 10), "hello"])));
    const valueAt = (r: number, c: number) => values.get(genKey(r, c)) || "";
    const [active, setActive] = useState<Position>([0, 0]);
    const [anchor, setAnchor] = useState<Position>([0, 0]);
    const [editing, setEditing] = useState<{
      pos: Position;
      initial: string;
    } | null>(null);
    const selection = {
      top: Math.min(active[0], anchor[0]),
      bottom: Math.max(active[0], anchor[0]),
      left: Math.min(active[1], anchor[1]),
      right: Math.max(active[1], anchor[1])
    };
    const isRange = selection.top !== selection.bottom || selection.left !== selection.right;
    useLayoutEffect(() => {
      if (!shouldFocus.current) return;
      shouldFocus.current = false;
      activeRef.current?.focus({
        preventScroll: true
      });
    });
    const startEdit = (pos: Position, initial: string) => {
      setActive(pos);
      setAnchor(pos);
      setEditing({
        pos,
        initial
      });
    };
    const endEdit = (value: string | null, refocus: boolean) => {
      if (!editing) return;
      if (value !== null) {
        setValues(prev => new Map(prev).set(genKey(editing.pos[0], editing.pos[1]), value));
      }
      setEditing(null);
      shouldFocus.current = refocus;
    };
    const moveActive = (r: number, c: number, extend?: boolean) => {
      r = Math.max(0, Math.min(r, ROWS - 1));
      c = Math.max(0, Math.min(c, COLS - 1));
      setActive([r, c]);
      if (!extend) {
        setAnchor([r, c]);
      }
      shouldFocus.current = true;
      ref.current?.scrollToIndex({
        rowIndex: r + 1,
        colIndex: c + 1,
        rowAlign: "nearest",
        colAlign: "nearest"
      });
    };
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        padding: 4,
        display: "flex",
        gap: 16,
        alignItems: "center"
      }}>
          {/* the width is fixed not to move the help by the length of the address */}
          <span aria-hidden style={{
          flex: "none",
          width: "18ch",
          overflow: "hidden",
          whiteSpace: "nowrap",
          fontVariantNumeric: "tabular-nums"
        }}>
            {address(active[0], active[1])}
            {isRange && ":" + address(selection.bottom, selection.right)}
          </span>
          <span id={\`\${id}-help\`} style={{
          fontSize: 12,
          color: "#555"
        }}>
            Arrow keys: move, Shift + Arrow keys: select, Enter or F2: edit,
            Escape: cancel, Delete: clear
          </span>
          {/* a table can't expose the selection of cells */}
          <span role="status" style={visuallyHidden}>
            {isRange ? \`\${address(selection.top, selection.left)} to \${address(selection.bottom, selection.right)} selected\` : ""}
          </span>
        </div>
        <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column"
      }} onKeyDown={e => {
        if (editing) return;
        const [r, c] = active;
        const move = MOVES[e.key];
        if (move) {
          moveActive(r + move[0], c + move[1], e.shiftKey);
        } else if (e.key === "F2") {
          startEdit(active, valueAt(r, c));
        } else if (e.key === "Delete" || e.key === "Backspace") {
          setValues(prev => {
            const next = new Map(prev);
            for (let i = selection.top; i <= selection.bottom; i++) {
              for (let j = selection.left; j <= selection.right; j++) {
                next.delete(genKey(i, j));
              }
            }
            return next;
          });
        } else if (e.key.length === 1 && e.key !== " " && !e.ctrlKey && !e.metaKey) {
          startEdit(active, e.key);
        } else {
          return;
        }
        e.preventDefault();
      }}>
          <VGrid ref={ref} aria-label="Spreadsheet" aria-describedby={\`\${id}-help\`} style={{
          flex: 1,
          background: "#fff"
        }} rows={ROWS + 1} rowHeight={26} cols={cols} colWidth="width" headerRows={1} headerCols={1}
        // the headers of the focused cell are rendered by the grid
        keepMounted={[{
          rowIndex: active[0] + 1,
          colIndex: active[1] + 1
        }]}>
            {(rowIndex, col, {
            colIndex
          }) => {
            const r = rowIndex - 1;
            const c = colIndex - 1;
            if (rowIndex === 0 && colIndex === 0) {
              return <div style={labelStyle}>
                    <span style={visuallyHidden}>Row</span>
                  </div>;
            }
            if (rowIndex === 0) {
              return <div id={colHeaderId(c)} style={{
                ...(c >= selection.left && c <= selection.right ? highlightedLabelStyle : labelStyle),
                position: "relative"
              }}>
                    {col.name}
                    <div aria-hidden style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 6,
                  height: "100%",
                  cursor: "col-resize",
                  borderRight: \`solid 1px \${resizing === colIndex ? "#1a73e8" : "transparent"}\`,
                  boxSizing: "border-box"
                }} onPointerDown={e => {
                  e.preventDefault();
                  e.currentTarget.setPointerCapture(e.pointerId);
                  drag.current = {
                    startX: e.clientX,
                    startWidth: col.width
                  };
                  setResizing(colIndex);
                }} onPointerMove={e => {
                  const d = drag.current;
                  if (!d) return;
                  const width = Math.max(30, d.startWidth + e.clientX - d.startX);
                  setCols(prev => {
                    const next = [...prev];
                    next[colIndex] = {
                      ...col,
                      width
                    };
                    return next;
                  });
                }} onPointerUp={() => {
                  drag.current = null;
                  setResizing(null);
                }} />
                  </div>;
            }
            if (colIndex === 0) {
              return <div id={rowHeaderId(r)} style={r >= selection.top && r <= selection.bottom ? highlightedLabelStyle : labelStyle}>
                    {rowIndex}
                  </div>;
            }
            const isActive = r === active[0] && c === active[1];
            const inSelection = r >= selection.top && r <= selection.bottom && c >= selection.left && c <= selection.right;
            if (editing && editing.pos[0] === r && editing.pos[1] === c) {
              return <input autoFocus aria-labelledby={\`\${colHeaderId(c)} \${rowHeaderId(r)}\`} defaultValue={editing.initial} style={{
                boxSizing: "border-box",
                width: "100%",
                height: "100%",
                border: "solid 2px #1a73e8",
                padding: "0 2px",
                fontSize: 13
              }} onKeyDown={e => {
                if (e.key === "Enter") {
                  // not to activate the button below, which takes the focus
                  e.preventDefault();
                  endEdit(e.currentTarget.value, true);
                  moveActive(r + 1, c);
                } else if (e.key === "Escape") {
                  endEdit(null, true);
                }
                e.stopPropagation();
              }} onBlur={e => endEdit(e.currentTarget.value, false)} />;
            }
            return <button ref={isActive ? activeRef : undefined} id={cellId(r, c)} aria-labelledby={\`\${colHeaderId(c)} \${rowHeaderId(r)} \${cellId(r, c)}\`} tabIndex={isActive ? 0 : -1} style={{
              ...cellStyle,
              background: inSelection ? "#e8f0fe" : cellStyle.background,
              boxShadow: isActive ? "inset 0 0 0 2px #1a73e8" : undefined
            }} onFocus={() => {
              // the focus may be moved by screen readers
              if (pointerFocus.current) {
                pointerFocus.current = false;
              } else if (!isActive) {
                setActive([r, c]);
                setAnchor([r, c]);
              }
            }} onMouseDown={e => {
              pointerFocus.current = true;
              setActive([r, c]);
              if (!e.shiftKey) {
                setAnchor([r, c]);
              }
            }} onMouseEnter={e => {
              if (e.buttons & 1) {
                setActive([r, c]);
              }
            }} onClick={e => {
              // edit by the keyboard or screen readers, select by the pointer
              if (e.detail === 0) {
                startEdit([r, c], valueAt(r, c));
              }
            }} onDoubleClick={() => {
              startEdit([r, c], valueAt(r, c));
            }}>
                  {valueAt(r, c)}
                </button>;
          }}
          </VGrid>
        </div>
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x=[`Spreadsheet`]})))()}S();export{b as Spreadsheet,x as __namedExportsOrder,c as default};