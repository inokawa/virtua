import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-BupIZz3p.js";import{S as T,d as M}from"./common-BqtzafjA.js";import{V as s}from"./Virtualizer-CQPF-CAJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useLatestRef-DXBPM1GZ.js";import"./useChildren-DPLmZjPY.js";import"./index-CFSQfNvx.js";import"./index-DyEVMGyT.js";const K={component:s},H=t=>{const r=[20,40,80,77];return Array.from({length:t}).map((o,i)=>e.jsx("div",{style:{height:r[i%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:i},i))},g={render:()=>e.jsxs("div",{style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx("div",{style:{backgroundColor:"burlywood",height:400},children:"header"}),e.jsx(s,{startMargin:400,children:H(1e3)}),e.jsx("div",{style:{backgroundColor:"steelblue",height:600},children:"footer"})]})},p={render:()=>e.jsxs("div",{style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx("div",{style:{position:"sticky",backgroundColor:"burlywood",height:40,top:0,zIndex:1},children:"header"}),e.jsx(s,{startMargin:40,children:H(1e3)}),e.jsx("div",{style:{position:"sticky",backgroundColor:"steelblue",height:60,bottom:0},children:"footer"})]})},v={render:()=>e.jsxs("div",{style:{boxSizing:"border-box",height:"100vh",overflowY:"auto",overflowAnchor:"none",border:"solid 1px #eee",borderRadius:8},children:[e.jsx("div",{style:{height:24}}),e.jsx(s,{startMargin:24,children:Array.from({length:1e3}).map((r,o)=>e.jsxs("div",{style:{padding:"16px 20px",borderBottom:"1px solid #eee",position:"relative",background:"white",display:"flex",alignItems:"center",fontSize:16},children:[o,e.jsx("div",{style:{position:"absolute",top:-16,right:8,background:"white",border:"1px solid #ddd",borderRadius:8,boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",zIndex:10,display:"flex",gap:2},children:["😊","💬","✏️","⋯"].map(i=>e.jsx("button",{style:{padding:"4px 8px",border:"none",background:"white",borderRadius:6,cursor:"pointer",whiteSpace:"nowrap"},children:i}))})]},o))})]})},m={render:()=>{const t=n.useRef(null),r=40,o=60;return e.jsx("div",{ref:t,style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:e.jsx("div",{style:{backgroundColor:"burlywood",padding:r},children:e.jsx("div",{style:{backgroundColor:"steelblue",padding:o},children:e.jsx(s,{scrollRef:t,startMargin:r+o,children:H(1e3)})})})})}},y={render:()=>{const t=n.useRef(0),r=d=>{const l=[20,40,80,77];return Array.from({length:d}).map(()=>{const c=t.current++;return e.jsx("div",{style:{height:l[c%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:c},c)})},[o,i]=n.useState(!1),[f,E]=n.useState(!1),[_,O]=n.useState(!1),j=async(d=!1)=>{i(d);const l=d?E:O;l(!0),await M(1e3),l(!1)},a=n.useRef(null),w=100,[S,k]=n.useState(()=>r(w*2)),z=50,h=S.length,I=n.useRef(-1),C=n.useRef(-1),A=n.useRef(!1);n.useEffect(()=>{a.current?.scrollToIndex(S.length/2+1),A.current=!0},[]);const R=100;return e.jsxs("div",{style:{height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx(T,{height:R,style:f?void 0:{visibility:"hidden"}}),e.jsx(s,{ref:a,shift:!!o,startMargin:R,onScroll:async()=>{if(!A.current||!a.current)return;const d=a.current.scrollOffset,l=d+a.current.viewportSize;C.current<h&&a.current.findItemIndex(l)+z>h?(C.current=h,await j(),k(c=>[...c,...r(w)])):I.current<h&&a.current.findItemIndex(d)-z<0&&(I.current=h,await j(!0),k(c=>[...r(w).reverse(),...c]))},children:S}),e.jsx(T,{height:R,style:_?void 0:{visibility:"hidden"}})]})}},V=n.forwardRef(({children:t,style:r},o)=>e.jsx("ul",{ref:o,style:{...r,margin:0,overflow:"hidden"},children:t})),B=n.forwardRef(({children:t,style:r},o)=>e.jsx("li",{ref:o,style:{...r,marginLeft:30},children:t})),b={render:()=>e.jsxs("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsx("div",{style:{padding:4},children:"header"}),e.jsx("div",{style:{overflowY:"auto",flex:1,background:"#fff"},children:e.jsx(s,{as:V,item:B,children:Array.from({length:1e3}).map((t,r)=>r)})})]})},F=[100,200,300,100,200,300,100,300,400,200],u=30,D=n.forwardRef(({children:t,style:r},o)=>e.jsxs("table",{ref:o,style:{height:r?.height,position:"relative",tableLayout:"fixed",borderCollapse:"collapse",whiteSpace:"nowrap"},border:1,children:[e.jsx("thead",{style:{position:"sticky",top:0,zIndex:1,height:u,minHeight:u,maxHeight:u},children:e.jsx("tr",{children:F.map((i,f)=>e.jsx("th",{style:{color:"white",background:"darkgray",minWidth:i},children:f},f))})}),e.jsx("tbody",{style:{...r,contain:void 0,position:"absolute",top:u,left:0},children:t})]})),x={render:()=>{const t=n.useMemo(()=>Array.from({length:1e3}).map((r,o)=>o),[]);return e.jsx("div",{style:{width:"100%",height:"75%",overflow:"auto"},children:e.jsx(s,{data:t,as:D,item:"tr",startMargin:u,children:r=>e.jsx(n.Fragment,{children:F.map((o,i)=>e.jsxs("td",{style:{minWidth:o,background:"#fff"},children:[r,", ",i]},i))},r)})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    const outerPadding = 40;
    const innerPadding = 60;
    return <div ref={ref} style={{
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
            <Virtualizer scrollRef={ref} startMargin={outerPadding + innerPadding}>
              {createRows(1000)}
            </Virtualizer>
          </div>
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    const fetchItems = async (isStart: boolean = false) => {
      setShifting(isStart);
      const setFetching = isStart ? setStartFetching : setEndFetching;
      setFetching(true);
      await delay(1000);
      setFetching(false);
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
          await fetchItems();
          setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT)]);
        } else if (startFetchedCountRef.current < count && ref.current.findItemIndex(startOffset) - THRESHOLD < 0) {
          startFetchedCountRef.current = count;
          await fetchItems(true);
          setItems(prev => [...createRows(ITEM_BATCH_COUNT).reverse(), ...prev]);
        }
      }}>
          {items}
        </Virtualizer>
        <Spinner height={spinnerHeight} style={endFetching ? undefined : {
        visibility: "hidden"
      }} />
      </div>;
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const Q=["HeaderAndFooter","StickyHeaderAndFooter","Overflow","Nested","BiDirectionalInfiniteScrolling","UlElement","TableElement"];export{y as BiDirectionalInfiniteScrolling,g as HeaderAndFooter,m as Nested,v as Overflow,p as StickyHeaderAndFooter,x as TableElement,b as UlElement,Q as __namedExportsOrder,K as default};
