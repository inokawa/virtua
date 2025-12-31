import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-BF_aPKkf.js";import{S as O,d as V}from"./common-C_ovhmAN.js";import{V as l}from"./Virtualizer-CdyCQmbd.js";import"./preload-helper-PPVm8Dsz.js";import"./useLatestRef-Cj605irw.js";import"./useChildren-CHUEFLpo.js";import"./index-CFeHGsZ9.js";import"./index-CP3hDdgp.js";const Z={component:l},E=o=>{const t=[20,40,80,77];return Array.from({length:o}).map((i,s)=>e.jsx("div",{style:{height:t[s%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:s},s))},R={render:()=>e.jsxs("div",{style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx("div",{style:{backgroundColor:"burlywood",height:400},children:"header"}),e.jsx(l,{startMargin:400,children:E(1e3)}),e.jsx("div",{style:{backgroundColor:"steelblue",height:600},children:"footer"})]})},S={render:()=>e.jsxs("div",{style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx("div",{style:{position:"sticky",backgroundColor:"burlywood",height:40,top:0,zIndex:1},children:"header"}),e.jsx(l,{startMargin:40,children:E(1e3)}),e.jsx("div",{style:{position:"sticky",backgroundColor:"steelblue",height:60,bottom:0},children:"footer"})]})},j={render:()=>e.jsxs("div",{style:{boxSizing:"border-box",height:"100vh",overflowY:"auto",overflowAnchor:"none",border:"solid 1px #eee",borderRadius:8},children:[e.jsx("div",{style:{height:24}}),e.jsx(l,{startMargin:24,children:Array.from({length:1e3}).map((t,i)=>e.jsxs("div",{style:{padding:"16px 20px",borderBottom:"1px solid #eee",position:"relative",background:"white",display:"flex",alignItems:"center",fontSize:16},children:[i,e.jsx("div",{style:{position:"absolute",top:-16,right:8,background:"white",border:"1px solid #ddd",borderRadius:8,boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",zIndex:10,display:"flex",gap:2},children:["😊","💬","✏️","⋯"].map(s=>e.jsx("button",{style:{padding:"4px 8px",border:"none",background:"white",borderRadius:6,cursor:"pointer",whiteSpace:"nowrap"},children:s}))})]},i))})]})},k={render:()=>{const o=n.useRef(null),t=40,i=60;return e.jsx("div",{ref:o,style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:e.jsx("div",{style:{backgroundColor:"burlywood",padding:t},children:e.jsx("div",{style:{backgroundColor:"steelblue",padding:i},children:e.jsx(l,{scrollRef:o,startMargin:t+i,children:E(1e3)})})})})}},z={render:()=>{const o=n.useRef(null);return n.useEffect(()=>{o.current?.scrollToIndex(999)},[]),e.jsxs("div",{style:{height:"100vh",overflowY:"auto",overflowAnchor:"none",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{flexGrow:1}}),e.jsx(l,{ref:o,children:E(1e3)})]})}},H={render:()=>{const o=n.useRef(0),t=(r,f)=>Array.from({length:r}).map((T,m)=>(m+=f,{id:o.current++,index:m})),[i,s]=n.useState(!1),[a,y]=n.useState(4),[g,x]=n.useState(!1),[p,b]=n.useState(!0),[d,u]=n.useState(()=>t(a,0)),h=()=>{u(p?r=>g?[...t(a,(r[0]?.index??0)-a),...r]:[...r,...t(a,(r[r.length-1]?.index??0)+1)]:g?r=>r.slice(a):r=>r.slice(0,-a))};n.useEffect(()=>{if(!i)return;const r=setInterval(h,500);return()=>{clearInterval(r)}},[h,i]);const w=[20,40,80,77];return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:g,onChange:()=>{x(r=>!r)}}),"prepend"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:p,onChange:()=>{b(!0)}}),"increase"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:!p,onChange:()=>{b(!1)}}),"decrease"]}),e.jsx("input",{style:{marginLeft:4},value:a,type:"number",min:1,max:1e4,step:1,onChange:r=>{y(Number(r.target.value))}})]}),e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:16},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:i,onChange:()=>{s(r=>!r)}}),"auto"]}),e.jsx("button",{onClick:()=>{h()},children:"update"})]}),e.jsxs("div",{style:{flex:1,overflowY:"auto",overflowAnchor:"none",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{flexGrow:1}}),e.jsx(l,{shift:g,children:d.map(r=>e.jsx("div",{style:{height:w[Math.abs(r.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:r.index},r.id))})]})]})}},A={render:()=>{const o=n.useRef(0),t=c=>{const _=[20,40,80,77];return Array.from({length:c}).map(()=>{const M=o.current++;return e.jsx("div",{style:{height:_[M%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:M},M)})},[i,s]=n.useState(!1),[a,y]=n.useState(!1),[g,x]=n.useState(!1),p=async()=>{s(!0),y(!0),await V(1e3),w(c=>[...t(u).reverse(),...c]),y(!1)},b=async()=>{s(!1),x(!0),await V(1e3),w(c=>[...c,...t(u)]),x(!1)},d=n.useRef(null),u=100,[h,w]=n.useState(()=>t(u*2)),r=50,f=h.length,T=n.useRef(-1),m=n.useRef(-1),L=n.useRef(!1);n.useEffect(()=>{d.current?.scrollToIndex(h.length/2+1),L.current=!0},[]);const F=100;return e.jsxs("div",{style:{height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx(O,{height:F,style:a?void 0:{visibility:"hidden"}}),e.jsx(l,{ref:d,shift:!!i,startMargin:F,onScroll:async()=>{if(!L.current||!d.current)return;const c=d.current.scrollOffset,_=c+d.current.viewportSize;m.current<f&&d.current.findItemIndex(_)+r>f?(m.current=f,await b()):T.current<f&&d.current.findItemIndex(c)-r<0&&(T.current=f,await p())},children:h}),e.jsx(O,{height:F,style:g?void 0:{visibility:"hidden"}})]})}},B=n.forwardRef(({children:o,style:t},i)=>e.jsx("ul",{ref:i,style:{...t,margin:0,overflow:"hidden"},children:o})),Y=n.forwardRef(({children:o,style:t},i)=>e.jsx("li",{ref:i,style:{...t,marginLeft:30},children:o})),C={render:()=>e.jsxs("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsx("div",{style:{padding:4},children:"header"}),e.jsx("div",{style:{overflowY:"auto",flex:1,background:"#fff"},children:e.jsx(l,{as:B,item:Y,children:Array.from({length:1e3}).map((o,t)=>t)})})]})},D=[100,200,300,100,200,300,100,300,400,200],v=30,N=n.forwardRef(({children:o,style:t},i)=>e.jsxs("table",{ref:i,style:{height:t?.height,position:"relative",tableLayout:"fixed",borderCollapse:"collapse",whiteSpace:"nowrap"},border:1,children:[e.jsx("thead",{style:{position:"sticky",top:0,zIndex:1,height:v,minHeight:v,maxHeight:v},children:e.jsx("tr",{children:D.map((s,a)=>e.jsx("th",{style:{color:"white",background:"darkgray",minWidth:s},children:a},a))})}),e.jsx("tbody",{style:{...t,contain:void 0,position:"absolute",top:v,left:0},children:o})]})),I={render:()=>{const o=n.useMemo(()=>Array.from({length:1e3}).map((t,i)=>i),[]);return e.jsx("div",{style:{width:"100%",height:"75%",overflow:"auto"},children:e.jsx(l,{data:o,as:N,item:"tr",startMargin:v,children:t=>e.jsx(n.Fragment,{children:D.map((i,s)=>e.jsxs("td",{style:{minWidth:i,background:"#fff"},children:[t,", ",s]},s))},t)})})}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const headerHeight = 400;
    return <div style={{
      width: "100%",
      height: "100vh",
      overflowY: "auto",
      // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
      overflowAnchor: "none"
    }}>
        <div style={{
        backgroundColor: "burlywood",
        height: headerHeight
      }}>
          header
        </div>
        <Virtualizer startMargin={headerHeight}>{createRows(1000)}</Virtualizer>
        <div style={{
        backgroundColor: "steelblue",
        height: 600
      }}>footer</div>
      </div>;
  }
}`,...R.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const headerHeight = 40;
    return <div style={{
      width: "100%",
      height: "100vh",
      overflowY: "auto",
      // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
      overflowAnchor: "none"
    }}>
        <div style={{
        position: "sticky",
        backgroundColor: "burlywood",
        height: headerHeight,
        top: 0,
        zIndex: 1
      }}>
          header
        </div>
        <Virtualizer startMargin={headerHeight}>{createRows(1000)}</Virtualizer>
        <div style={{
        position: "sticky",
        backgroundColor: "steelblue",
        height: 60,
        bottom: 0
      }}>
          footer
        </div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const spacerSize = 24;
    return <div style={{
      boxSizing: "border-box",
      height: "100vh",
      overflowY: "auto",
      // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
      overflowAnchor: "none",
      border: "solid 1px #eee",
      borderRadius: 8
    }}>
        <div style={{
        height: spacerSize
      }} />
        <Virtualizer startMargin={spacerSize}>
          {Array.from({
          length: 1000
        }).map((_, i) => {
          return <div key={i} style={{
            padding: "16px 20px",
            borderBottom: "1px solid #eee",
            position: "relative",
            background: "white",
            display: "flex",
            alignItems: "center",
            fontSize: 16
          }}>
                {i}
                <div style={{
              position: "absolute",
              top: -16,
              right: 8,
              background: "white",
              border: "1px solid #ddd",
              borderRadius: 8,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              zIndex: 10,
              display: "flex",
              gap: 2
            }}>
                  {["😊", "💬", "✏️", "⋯"].map(t => <button style={{
                padding: "4px 8px",
                border: "none",
                background: "white",
                borderRadius: 6,
                cursor: "pointer",
                whiteSpace: "nowrap"
              }}>
                      {t}
                    </button>)}
                </div>
              </div>;
        })}
        </Virtualizer>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const outerPadding = 40;
    const innerPadding = 60;
    return <div ref={scrollRef} style={{
      width: "100%",
      height: "100vh",
      overflowY: "auto",
      // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
      overflowAnchor: "none"
    }}>
        <div style={{
        backgroundColor: "burlywood",
        padding: outerPadding
      }}>
          <div style={{
          backgroundColor: "steelblue",
          padding: innerPadding
        }}>
            <Virtualizer scrollRef={
          // scrollRef is required when the scroll container is not the direct parent
          scrollRef} startMargin={outerPadding + innerPadding}>
              {createRows(1000)}
            </Virtualizer>
          </div>
        </div>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<VirtualizerHandle>(null);
    useEffect(() => {
      ref.current?.scrollToIndex(999);
    }, []);
    return <div style={{
      height: "100vh",
      overflowY: "auto",
      // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
      overflowAnchor: "none",
      // flex style for spacer
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        // spacer to align virtualizer to the bottom when all items are visible in the viewport
        flexGrow: 1
      }} />
        <Virtualizer ref={ref}>{createRows(1000)}</Virtualizer>
      </div>;
  }
}`,...z.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const id = useRef(0);
    const createRows = (num: number, offset: number) => {
      return Array.from({
        length: num
      }).map((_, i) => {
        i += offset;
        return {
          id: id.current++,
          index: i
        };
      });
    };
    const [auto, setAuto] = useState(false);
    const [amount, setAmount] = useState(4);
    const [prepend, setPrepend] = useState(false);
    const [increase, setIncrease] = useState(true);
    const [rows, setRows] = useState(() => createRows(amount, 0));
    const update = () => {
      if (increase) {
        setRows(prev => prepend ? [...createRows(amount, (prev[0]?.index ?? 0) - amount), ...prev] : [...prev, ...createRows(amount, (prev[prev.length - 1]?.index ?? 0) + 1)]);
      } else {
        if (prepend) {
          setRows(prev => prev.slice(amount));
        } else {
          setRows(prev => prev.slice(0, -amount));
        }
      }
    };
    useEffect(() => {
      if (!auto) return;
      const timer = setInterval(update, 500);
      return () => {
        clearInterval(timer);
      };
    }, [update, auto]);
    const heights = [20, 40, 80, 77];
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div>
          <label style={{
          marginRight: 4
        }}>
            <input type="checkbox" style={{
            marginLeft: 4
          }} checked={prepend} onChange={() => {
            setPrepend(prev => !prev);
          }} />
            prepend
          </label>
          <label style={{
          marginRight: 4
        }}>
            <input type="radio" style={{
            marginLeft: 4
          }} checked={increase} onChange={() => {
            setIncrease(true);
          }} />
            increase
          </label>
          <label style={{
          marginRight: 4
        }}>
            <input type="radio" style={{
            marginLeft: 4
          }} checked={!increase} onChange={() => {
            setIncrease(false);
          }} />
            decrease
          </label>
          <input style={{
          marginLeft: 4
        }} value={amount} type="number" min={1} max={10000} step={1} onChange={e => {
          setAmount(Number(e.target.value));
        }} />
        </div>
        <div>
          <label style={{
          marginRight: 16
        }}>
            <input type="checkbox" style={{
            marginLeft: 4
          }} checked={auto} onChange={() => {
            setAuto(prev => !prev);
          }} />
            auto
          </label>
          <button onClick={() => {
          update();
        }}>
            update
          </button>
        </div>
        <div style={{
        flex: 1,
        overflowY: "auto",
        // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
        overflowAnchor: "none",
        // flex style for spacer
        display: "flex",
        flexDirection: "column"
      }}>
          <div style={{
          // spacer to align virtualizer to the bottom when all items are visible in the viewport
          flexGrow: 1
        }} />
          <Virtualizer shift={prepend}>
            {rows.map(d => <div key={d.id} style={{
            height: heights[Math.abs(d.index) % 4],
            borderBottom: "solid 1px #ccc",
            background: "#fff"
          }}>
                {d.index}
              </div>)}
          </Virtualizer>
        </div>
      </div>;
  }
}`,...H.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const id = useRef(0);
    const createRows = (num: number) => {
      const heights = [20, 40, 80, 77];
      return Array.from({
        length: num
      }).map(() => {
        const i = id.current++;
        return <div key={i} style={{
          height: heights[i % 4],
          borderBottom: "solid 1px #ccc",
          background: "#fff"
        }}>
            {i}
          </div>;
      });
    };
    const [shifting, setShifting] = useState(false);
    const [startFetching, setStartFetching] = useState(false);
    const [endFetching, setEndFetching] = useState(false);
    const fetchStart = async () => {
      setShifting(true);
      setStartFetching(true);
      await delay(1000);
      setItems(prev => [...createRows(ITEM_BATCH_COUNT).reverse(), ...prev]);
      setStartFetching(false);
    };
    const fetchEnd = async () => {
      setShifting(false);
      setEndFetching(true);
      await delay(1000);
      setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT)]);
      setEndFetching(false);
    };
    const ref = useRef<VirtualizerHandle>(null);
    const ITEM_BATCH_COUNT = 100;
    const [items, setItems] = useState(() => createRows(ITEM_BATCH_COUNT * 2));
    const THRESHOLD = 50;
    const count = items.length;
    const startFetchedCountRef = useRef(-1);
    const endFetchedCountRef = useRef(-1);
    const ready = useRef(false);
    useEffect(() => {
      ref.current?.scrollToIndex(items.length / 2 + 1);
      ready.current = true;
    }, []);
    const spinnerHeight = 100;
    return <div style={{
      height: "100vh",
      overflowY: "auto",
      // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
      overflowAnchor: "none"
    }}>
        <Spinner height={spinnerHeight} style={startFetching ? undefined : {
        visibility: "hidden"
      }} />
        <Virtualizer ref={ref} shift={shifting ? true : false} startMargin={spinnerHeight} onScroll={async () => {
        if (!ready.current) return;
        if (!ref.current) return;
        const startOffset = ref.current.scrollOffset;
        const endOffset = startOffset + ref.current.viewportSize;
        if (endFetchedCountRef.current < count && ref.current.findItemIndex(endOffset) + THRESHOLD > count) {
          endFetchedCountRef.current = count;
          await fetchEnd();
        } else if (startFetchedCountRef.current < count && ref.current.findItemIndex(startOffset) - THRESHOLD < 0) {
          startFetchedCountRef.current = count;
          await fetchStart();
        }
      }}>
          {items}
        </Virtualizer>
        <Spinner height={spinnerHeight} style={endFetching ? undefined : {
        visibility: "hidden"
      }} />
      </div>;
  }
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: 400,
      height: 400,
      border: "solid 1px darkgray",
      borderRadius: 8,
      background: "lightgray",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }}>
        <div style={{
        padding: 4
      }}>header</div>
        <div style={{
        overflowY: "auto",
        flex: 1,
        background: "#fff"
      }}>
          <Virtualizer as={Ul} item={Li}>
            {Array.from({
            length: 1000
          }).map((_, i) => i)}
          </Virtualizer>
        </div>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => Array.from({
      length: 1000
    }).map((_, i) => i), []);
    return <div style={{
      width: "100%",
      height: "75%",
      overflow: "auto"
    }}>
        <Virtualizer data={data} as={Table} item="tr" startMargin={TABLE_HEADER_HEIGHT}>
          {i => <Fragment key={i}>
              {COLUMN_WIDTHS.map((width, j) => <td key={j} style={{
            minWidth: width,
            background: "#fff"
          }}>
                  {i}, {j}
                </td>)}
            </Fragment>}
        </Virtualizer>
      </div>;
  }
}`,...I.parameters?.docs?.source}}};const $=["HeaderAndFooter","StickyHeaderAndFooter","Overflow","Nested","Reverse","AlignBottom","BiDirectionalInfiniteScrolling","UlElement","TableElement"];export{H as AlignBottom,A as BiDirectionalInfiniteScrolling,R as HeaderAndFooter,k as Nested,j as Overflow,z as Reverse,S as StickyHeaderAndFooter,I as TableElement,C as UlElement,$ as __namedExportsOrder,Z as default};
