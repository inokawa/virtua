import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-Dw7v-Uf5.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{a as i,t as a}from"./src-p2r-qAdR.js";import{n as o,r as s,t as c}from"./common-PhgBxrtJ.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;t((()=>{l=e(n(),1),a(),s(),u=r(),d={component:i},f=e=>{let t=[20,40,80,77];return Array.from({length:e}).map((e,n)=>(0,u.jsx)(`div`,{style:{height:t[n%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:n},n))},p={render:()=>(0,u.jsxs)(`div`,{style:{width:`100%`,height:`100vh`,overflowY:`auto`,overflowAnchor:`none`},children:[(0,u.jsx)(`div`,{style:{backgroundColor:`burlywood`,height:400},children:`header`}),(0,u.jsx)(i,{startMargin:400,children:f(1e3)}),(0,u.jsx)(`div`,{style:{backgroundColor:`steelblue`,height:600},children:`footer`})]})},m={render:()=>(0,u.jsxs)(`div`,{style:{width:`100%`,height:`100vh`,overflowY:`auto`,overflowAnchor:`none`},children:[(0,u.jsx)(`div`,{style:{position:`sticky`,backgroundColor:`burlywood`,height:40,top:0,zIndex:1},children:`header`}),(0,u.jsx)(i,{startMargin:40,children:f(1e3)}),(0,u.jsx)(`div`,{style:{position:`sticky`,backgroundColor:`steelblue`,height:60,bottom:0},children:`footer`})]})},h={render:()=>(0,u.jsxs)(`div`,{style:{boxSizing:`border-box`,height:`100vh`,overflowY:`auto`,overflowAnchor:`none`,border:`solid 1px #eee`,borderRadius:8},children:[(0,u.jsx)(`div`,{style:{height:24}}),(0,u.jsx)(i,{startMargin:24,children:Array.from({length:1e3}).map((e,t)=>(0,u.jsxs)(`div`,{style:{padding:`16px 20px`,borderBottom:`1px solid #eee`,position:`relative`,background:`white`,display:`flex`,alignItems:`center`,fontSize:16},children:[t,(0,u.jsx)(`div`,{style:{position:`absolute`,top:-16,right:8,background:`white`,border:`1px solid #ddd`,borderRadius:8,boxShadow:`0 4px 12px rgba(0, 0, 0, 0.15)`,zIndex:10,display:`flex`,gap:2},children:[`😊`,`💬`,`✏️`,`⋯`].map(e=>(0,u.jsx)(`button`,{style:{padding:`4px 8px`,border:`none`,background:`white`,borderRadius:6,cursor:`pointer`,whiteSpace:`nowrap`},children:e}))})]},t))})]})},g={render:()=>{let e=(0,l.useRef)(null);return(0,u.jsx)(`div`,{ref:e,style:{width:`100%`,height:`100vh`,overflowY:`auto`,overflowAnchor:`none`},children:(0,u.jsx)(`div`,{style:{backgroundColor:`burlywood`,padding:40},children:(0,u.jsx)(`div`,{style:{backgroundColor:`steelblue`,padding:60},children:(0,u.jsx)(i,{scrollRef:e,startMargin:100,children:f(1e3)})})})})}},_={render:()=>{let e=(0,l.useRef)(null);return(0,l.useEffect)(()=>{e.current?.scrollToIndex(999)},[]),(0,u.jsxs)(`div`,{style:{height:`100vh`,overflowY:`auto`,overflowAnchor:`none`,display:`flex`,flexDirection:`column`},children:[(0,u.jsx)(`div`,{style:{flexGrow:1}}),(0,u.jsx)(i,{ref:e,children:f(1e3)})]})}},v={render:()=>{let e=(0,l.useRef)(0),t=(t,n)=>Array.from({length:t}).map((t,r)=>(r+=n,{id:e.current++,index:r})),[n,r]=(0,l.useState)(!1),[a,o]=(0,l.useState)(4),[s,c]=(0,l.useState)(!1),[d,f]=(0,l.useState)(!0),[p,m]=(0,l.useState)(()=>t(a,0)),h=()=>{m(d?e=>s?[...t(a,(e[0]?.index??0)-a),...e]:[...e,...t(a,(e[e.length-1]?.index??0)+1)]:s?e=>e.slice(a):e=>e.slice(0,-a))};(0,l.useEffect)(()=>{if(!n)return;let e=setInterval(h,500);return()=>{clearInterval(e)}},[h,n]);let g=[20,40,80,77];return(0,u.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`label`,{style:{marginRight:4},children:[(0,u.jsx)(`input`,{type:`checkbox`,style:{marginLeft:4},checked:s,onChange:()=>{c(e=>!e)}}),`prepend`]}),(0,u.jsxs)(`label`,{style:{marginRight:4},children:[(0,u.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:d,onChange:()=>{f(!0)}}),`increase`]}),(0,u.jsxs)(`label`,{style:{marginRight:4},children:[(0,u.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:!d,onChange:()=>{f(!1)}}),`decrease`]}),(0,u.jsx)(`input`,{style:{marginLeft:4},value:a,type:`number`,min:1,max:1e4,step:1,onChange:e=>{o(Number(e.target.value))}})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`label`,{style:{marginRight:16},children:[(0,u.jsx)(`input`,{type:`checkbox`,style:{marginLeft:4},checked:n,onChange:()=>{r(e=>!e)}}),`auto`]}),(0,u.jsx)(`button`,{onClick:()=>{h()},children:`update`})]}),(0,u.jsxs)(`div`,{style:{flex:1,overflowY:`auto`,overflowAnchor:`none`,display:`flex`,flexDirection:`column`},children:[(0,u.jsx)(`div`,{style:{flexGrow:1}}),(0,u.jsx)(i,{shift:s,children:p.map(e=>(0,u.jsx)(`div`,{style:{height:g[Math.abs(e.index)%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:e.index},e.id))})]})]})}},y={render:()=>{let e=(0,l.useRef)(0),t=t=>{let n=[20,40,80,77];return Array.from({length:t}).map(()=>{let t=e.current++;return(0,u.jsx)(`div`,{style:{height:n[t%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:t},t)})},[n,r]=(0,l.useState)(!1),[a,s]=(0,l.useState)(!1),[d,f]=(0,l.useState)(!1),p=async()=>{r(!0),s(!0),await o(1e3),v(e=>[...t(g).reverse(),...e]),s(!1)},m=async()=>{r(!1),f(!0),await o(1e3),v(e=>[...e,...t(g)]),f(!1)},h=(0,l.useRef)(null),g=100,[_,v]=(0,l.useState)(()=>t(200)),y=_.length,b=(0,l.useRef)(-1),x=(0,l.useRef)(-1),S=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{h.current?.scrollToIndex(_.length/2+1),S.current=!0},[]),(0,u.jsxs)(`div`,{style:{height:`100vh`,overflowY:`auto`,overflowAnchor:`none`},children:[(0,u.jsx)(c,{height:100,style:a?void 0:{visibility:`hidden`}}),(0,u.jsx)(i,{ref:h,shift:!!n,startMargin:100,onScroll:async()=>{if(!S.current||!h.current)return;let e=h.current.scrollOffset,t=e+h.current.viewportSize;x.current<y&&h.current.findItemIndex(t)+50>y?(x.current=y,await m()):b.current<y&&h.current.findItemIndex(e)-50<0&&(b.current=y,await p())},children:_}),(0,u.jsx)(c,{height:100,style:d?void 0:{visibility:`hidden`}})]})}},b=(0,l.forwardRef)(({children:e,style:t},n)=>(0,u.jsx)(`ul`,{ref:n,style:{...t,margin:0,overflow:`hidden`},children:e})),x=(0,l.forwardRef)(({children:e,style:t},n)=>(0,u.jsx)(`li`,{ref:n,style:{...t,marginLeft:30},children:e})),S={render:()=>(0,u.jsxs)(`div`,{style:{width:400,height:400,border:`solid 1px darkgray`,borderRadius:8,background:`lightgray`,display:`flex`,flexDirection:`column`,overflow:`hidden`},children:[(0,u.jsx)(`div`,{style:{padding:4},children:`header`}),(0,u.jsx)(`div`,{style:{overflowY:`auto`,flex:1,background:`#fff`},children:(0,u.jsx)(i,{as:b,item:x,children:Array.from({length:1e3}).map((e,t)=>t)})})]})},C=[100,200,300,100,200,300,100,300,400,200],w=30,T=(0,l.forwardRef)(({children:e,style:t},n)=>(0,u.jsxs)(`table`,{ref:n,style:{height:t?.height,position:`relative`,tableLayout:`fixed`,borderCollapse:`collapse`,whiteSpace:`nowrap`},border:1,children:[(0,u.jsx)(`thead`,{style:{position:`sticky`,top:0,zIndex:1,height:w,minHeight:w,maxHeight:w},children:(0,u.jsx)(`tr`,{children:C.map((e,t)=>(0,u.jsx)(`th`,{style:{color:`white`,background:`darkgray`,minWidth:e},children:t},t))})}),(0,u.jsx)(`tbody`,{style:{...t,contain:void 0,position:`absolute`,top:w,left:0},children:e})]})),E={render:()=>(0,u.jsx)(`div`,{style:{width:`100%`,height:`75%`,overflow:`auto`},children:(0,u.jsx)(i,{data:(0,l.useMemo)(()=>Array.from({length:1e3}).map((e,t)=>t),[]),as:T,item:`tr`,startMargin:w,children:e=>(0,u.jsx)(l.Fragment,{children:C.map((t,n)=>(0,u.jsxs)(`td`,{style:{minWidth:t,background:`#fff`},children:[e,`, `,n]},n))},e)})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`HeaderAndFooter`,`StickyHeaderAndFooter`,`Overflow`,`Nested`,`Reverse`,`AlignBottom`,`BiDirectionalInfiniteScrolling`,`UlElement`,`TableElement`]}))();export{v as AlignBottom,y as BiDirectionalInfiniteScrolling,p as HeaderAndFooter,g as Nested,h as Overflow,_ as Reverse,m as StickyHeaderAndFooter,E as TableElement,S as UlElement,D as __namedExportsOrder,d as default};