import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-C22uSV83.js";import{S as O,d as D}from"./common-BqtzafjA.js";import{V as l}from"./Virtualizer-BEHlAVz9.js";import"./preload-helper-PPVm8Dsz.js";import"./useLatestRef-BdgClSOl.js";import"./useChildren-BSYCGnNh.js";import"./index-nTStK9Ff.js";import"./index-DxxqmEng.js";const $={component:l},y=n=>{const r=[20,40,80,77];return Array.from({length:n}).map((i,s)=>e.jsx("div",{style:{height:r[s%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:s},s))},S={render:()=>e.jsxs("div",{style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx("div",{style:{backgroundColor:"burlywood",height:400},children:"header"}),e.jsx(l,{startMargin:400,children:y(1e3)}),e.jsx("div",{style:{backgroundColor:"steelblue",height:600},children:"footer"})]})},j={render:()=>e.jsxs("div",{style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx("div",{style:{position:"sticky",backgroundColor:"burlywood",height:40,top:0,zIndex:1},children:"header"}),e.jsx(l,{startMargin:40,children:y(1e3)}),e.jsx("div",{style:{position:"sticky",backgroundColor:"steelblue",height:60,bottom:0},children:"footer"})]})},k={render:()=>e.jsxs("div",{style:{boxSizing:"border-box",height:"100vh",overflowY:"auto",overflowAnchor:"none",border:"solid 1px #eee",borderRadius:8},children:[e.jsx("div",{style:{height:24}}),e.jsx(l,{startMargin:24,children:Array.from({length:1e3}).map((r,i)=>e.jsxs("div",{style:{padding:"16px 20px",borderBottom:"1px solid #eee",position:"relative",background:"white",display:"flex",alignItems:"center",fontSize:16},children:[i,e.jsx("div",{style:{position:"absolute",top:-16,right:8,background:"white",border:"1px solid #ddd",borderRadius:8,boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",zIndex:10,display:"flex",gap:2},children:["😊","💬","✏️","⋯"].map(s=>e.jsx("button",{style:{padding:"4px 8px",border:"none",background:"white",borderRadius:6,cursor:"pointer",whiteSpace:"nowrap"},children:s}))})]},i))})]})},z={render:()=>{const n=o.useRef(null),r=40,i=60;return e.jsx("div",{ref:n,style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:e.jsx("div",{style:{backgroundColor:"burlywood",padding:r},children:e.jsx("div",{style:{backgroundColor:"steelblue",padding:i},children:e.jsx(l,{scrollRef:n,startMargin:r+i,children:y(1e3)})})})})}},A={render:()=>{const n=o.useRef(null);return o.useEffect(()=>{n.current?.scrollToIndex(999)},[]),e.jsxs("div",{style:{height:"100vh",overflowY:"auto",overflowAnchor:"none",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{flexGrow:1}}),e.jsx(l,{ref:n,children:y(1e3)})]})}},H={render:()=>e.jsx("div",{style:{height:"100vh",overflowY:"auto",overflowAnchor:"none",display:"flex",flexDirection:"column-reverse"},children:e.jsx(l,{children:y(1e3)})})},C={render:()=>{const n=o.useRef(0),r=(t,f)=>Array.from({length:t}).map((F,v)=>(v+=f,{id:n.current++,index:v})),[i,s]=o.useState(!1),[a,x]=o.useState(4),[g,b]=o.useState(!1),[p,w]=o.useState(!0),[c,u]=o.useState(()=>r(a,0)),h=()=>{u(p?t=>g?[...r(a,(t[0]?.index??0)-a),...t]:[...t,...r(a,(t[t.length-1]?.index??0)+1)]:g?t=>t.slice(a):t=>t.slice(0,-a))};o.useEffect(()=>{if(!i)return;const t=setInterval(h,500);return()=>{clearInterval(t)}},[h,i]);const R=[20,40,80,77];return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:g,onChange:()=>{b(t=>!t)}}),"prepend"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:p,onChange:()=>{w(!0)}}),"increase"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:!p,onChange:()=>{w(!1)}}),"decrease"]}),e.jsx("input",{style:{marginLeft:4},value:a,type:"number",min:1,max:1e4,step:1,onChange:t=>{x(Number(t.target.value))}})]}),e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:16},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:i,onChange:()=>{s(t=>!t)}}),"auto"]}),e.jsx("button",{onClick:()=>{h()},children:"update"})]}),e.jsxs("div",{style:{flex:1,overflowY:"auto",overflowAnchor:"none",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{flexGrow:1}}),e.jsx(l,{shift:g,children:c.map(t=>e.jsx("div",{style:{height:R[Math.abs(t.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:t.index},t.id))})]})]})}},I={render:()=>{const n=o.useRef(0),r=d=>{const V=[20,40,80,77];return Array.from({length:d}).map(()=>{const M=n.current++;return e.jsx("div",{style:{height:V[M%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:M},M)})},[i,s]=o.useState(!1),[a,x]=o.useState(!1),[g,b]=o.useState(!1),p=async()=>{s(!0),x(!0),await D(1e3),R(d=>[...r(u).reverse(),...d]),x(!1)},w=async()=>{s(!1),b(!0),await D(1e3),R(d=>[...d,...r(u)]),b(!1)},c=o.useRef(null),u=100,[h,R]=o.useState(()=>r(u*2)),t=50,f=h.length,F=o.useRef(-1),v=o.useRef(-1),L=o.useRef(!1);o.useEffect(()=>{c.current?.scrollToIndex(h.length/2+1),L.current=!0},[]);const _=100;return e.jsxs("div",{style:{height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx(O,{height:_,style:a?void 0:{visibility:"hidden"}}),e.jsx(l,{ref:c,shift:!!i,startMargin:_,onScroll:async()=>{if(!L.current||!c.current)return;const d=c.current.scrollOffset,V=d+c.current.viewportSize;v.current<f&&c.current.findItemIndex(V)+t>f?(v.current=f,await w()):F.current<f&&c.current.findItemIndex(d)-t<0&&(F.current=f,await p())},children:h}),e.jsx(O,{height:_,style:g?void 0:{visibility:"hidden"}})]})}},Y=o.forwardRef(({children:n,style:r},i)=>e.jsx("ul",{ref:i,style:{...r,margin:0,overflow:"hidden"},children:n})),N=o.forwardRef(({children:n,style:r},i)=>e.jsx("li",{ref:i,style:{...r,marginLeft:30},children:n})),E={render:()=>e.jsxs("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsx("div",{style:{padding:4},children:"header"}),e.jsx("div",{style:{overflowY:"auto",flex:1,background:"#fff"},children:e.jsx(l,{as:Y,item:N,children:Array.from({length:1e3}).map((n,r)=>r)})})]})},B=[100,200,300,100,200,300,100,300,400,200],m=30,P=o.forwardRef(({children:n,style:r},i)=>e.jsxs("table",{ref:i,style:{height:r?.height,position:"relative",tableLayout:"fixed",borderCollapse:"collapse",whiteSpace:"nowrap"},border:1,children:[e.jsx("thead",{style:{position:"sticky",top:0,zIndex:1,height:m,minHeight:m,maxHeight:m},children:e.jsx("tr",{children:B.map((s,a)=>e.jsx("th",{style:{color:"white",background:"darkgray",minWidth:s},children:a},a))})}),e.jsx("tbody",{style:{...r,contain:void 0,position:"absolute",top:m,left:0},children:n})]})),T={render:()=>{const n=o.useMemo(()=>Array.from({length:1e3}).map((r,i)=>i),[]);return e.jsx("div",{style:{width:"100%",height:"75%",overflow:"auto"},children:e.jsx(l,{data:n,as:P,item:"tr",startMargin:m,children:r=>e.jsx(o.Fragment,{children:B.map((i,s)=>e.jsxs("td",{style:{minWidth:i,background:"#fff"},children:[r,", ",s]},s))},r)})})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: "100vh",
      overflowY: "auto",
      // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
      overflowAnchor: "none",
      // apply column-reverse to reverse scroll direction
      display: "flex",
      flexDirection: "column-reverse"
    }}>
        <Virtualizer>{createRows(1000)}</Virtualizer>
      </div>;
  }
}`,...H.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const ee=["HeaderAndFooter","StickyHeaderAndFooter","Overflow","Nested","Reverse","Inverted","AlignBottom","BiDirectionalInfiniteScrolling","UlElement","TableElement"];export{C as AlignBottom,I as BiDirectionalInfiniteScrolling,S as HeaderAndFooter,H as Inverted,z as Nested,k as Overflow,A as Reverse,j as StickyHeaderAndFooter,T as TableElement,E as UlElement,ee as __namedExportsOrder,$ as default};
