import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-B_-wC5Mi.js";import{S as T,d as F}from"./common-BqtzafjA.js";import{V as a}from"./Virtualizer-1LrIGV9L.js";import"./preload-helper-PPVm8Dsz.js";import"./useLatestRef-BCst7SqF.js";import"./useChildren-WhXWD5Ls.js";import"./index-CqA6agiU.js";import"./index-CvzE82D6.js";const Q={component:a},H=t=>{const r=[20,40,80,77];return Array.from({length:t}).map((o,i)=>e.jsx("div",{style:{height:r[i%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:i},i))},u={render:()=>e.jsxs("div",{style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx("div",{style:{backgroundColor:"burlywood",height:400},children:"header"}),e.jsx(a,{startMargin:400,children:H(1e3)}),e.jsx("div",{style:{backgroundColor:"steelblue",height:600},children:"footer"})]})},f={render:()=>e.jsxs("div",{style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx("div",{style:{position:"sticky",backgroundColor:"burlywood",height:40,top:0,zIndex:1},children:"header"}),e.jsx(a,{startMargin:40,children:H(1e3)}),e.jsx("div",{style:{position:"sticky",backgroundColor:"steelblue",height:60,bottom:0},children:"footer"})]})},g={render:()=>e.jsxs("div",{style:{boxSizing:"border-box",height:"100vh",overflowY:"auto",overflowAnchor:"none",border:"solid 1px #eee",borderRadius:8},children:[e.jsx("div",{style:{height:24}}),e.jsx(a,{startMargin:24,children:Array.from({length:1e3}).map((r,o)=>e.jsxs("div",{style:{padding:"16px 20px",borderBottom:"1px solid #eee",position:"relative",background:"white",display:"flex",alignItems:"center",fontSize:16},children:[o,e.jsx("div",{style:{position:"absolute",top:-16,right:8,background:"white",border:"1px solid #ddd",borderRadius:8,boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",zIndex:10,display:"flex",gap:2},children:["😊","💬","✏️","⋯"].map(i=>e.jsx("button",{style:{padding:"4px 8px",border:"none",background:"white",borderRadius:6,cursor:"pointer",whiteSpace:"nowrap"},children:i}))})]},o))})]})},p={render:()=>{const t=n.useRef(null),r=40,o=60;return e.jsx("div",{ref:t,style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:e.jsx("div",{style:{backgroundColor:"burlywood",padding:r},children:e.jsx("div",{style:{backgroundColor:"steelblue",padding:o},children:e.jsx(a,{scrollRef:t,startMargin:r+o,children:H(1e3)})})})})}},v={render:()=>{const t=n.useRef(0),r=s=>{const S=[20,40,80,77];return Array.from({length:s}).map(()=>{const R=t.current++;return e.jsx("div",{style:{height:S[R%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:R},R)})},[o,i]=n.useState(!1),[h,j]=n.useState(!1),[O,k]=n.useState(!1),M=async()=>{i(!0),j(!0),await F(1e3),z(s=>[...r(b).reverse(),...s]),j(!1)},V=async()=>{i(!1),k(!0),await F(1e3),z(s=>[...s,...r(b)]),k(!1)},d=n.useRef(null),b=100,[x,z]=n.useState(()=>r(b*2)),E=50,c=x.length,C=n.useRef(-1),A=n.useRef(-1),I=n.useRef(!1);n.useEffect(()=>{d.current?.scrollToIndex(x.length/2+1),I.current=!0},[]);const w=100;return e.jsxs("div",{style:{height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx(T,{height:w,style:h?void 0:{visibility:"hidden"}}),e.jsx(a,{ref:d,shift:!!o,startMargin:w,onScroll:async()=>{if(!I.current||!d.current)return;const s=d.current.scrollOffset,S=s+d.current.viewportSize;A.current<c&&d.current.findItemIndex(S)+E>c?(A.current=c,await V()):C.current<c&&d.current.findItemIndex(s)-E<0&&(C.current=c,await M())},children:x}),e.jsx(T,{height:w,style:O?void 0:{visibility:"hidden"}})]})}},B=n.forwardRef(({children:t,style:r},o)=>e.jsx("ul",{ref:o,style:{...r,margin:0,overflow:"hidden"},children:t})),D=n.forwardRef(({children:t,style:r},o)=>e.jsx("li",{ref:o,style:{...r,marginLeft:30},children:t})),m={render:()=>e.jsxs("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsx("div",{style:{padding:4},children:"header"}),e.jsx("div",{style:{overflowY:"auto",flex:1,background:"#fff"},children:e.jsx(a,{as:B,item:D,children:Array.from({length:1e3}).map((t,r)=>r)})})]})},_=[100,200,300,100,200,300,100,300,400,200],l=30,L=n.forwardRef(({children:t,style:r},o)=>e.jsxs("table",{ref:o,style:{height:r?.height,position:"relative",tableLayout:"fixed",borderCollapse:"collapse",whiteSpace:"nowrap"},border:1,children:[e.jsx("thead",{style:{position:"sticky",top:0,zIndex:1,height:l,minHeight:l,maxHeight:l},children:e.jsx("tr",{children:_.map((i,h)=>e.jsx("th",{style:{color:"white",background:"darkgray",minWidth:i},children:h},h))})}),e.jsx("tbody",{style:{...r,contain:void 0,position:"absolute",top:l,left:0},children:t})]})),y={render:()=>{const t=n.useMemo(()=>Array.from({length:1e3}).map((r,o)=>o),[]);return e.jsx("div",{style:{width:"100%",height:"75%",overflow:"auto"},children:e.jsx(a,{data:t,as:L,item:"tr",startMargin:l,children:r=>e.jsx(n.Fragment,{children:_.map((o,i)=>e.jsxs("td",{style:{minWidth:o,background:"#fff"},children:[r,", ",i]},i))},r)})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const X=["HeaderAndFooter","StickyHeaderAndFooter","Overflow","Nested","BiDirectionalInfiniteScrolling","UlElement","TableElement"];export{v as BiDirectionalInfiniteScrolling,u as HeaderAndFooter,p as Nested,g as Overflow,f as StickyHeaderAndFooter,y as TableElement,m as UlElement,X as __namedExportsOrder,Q as default};
