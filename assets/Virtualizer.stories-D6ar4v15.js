import{j as e}from"./jsx-runtime-DCrfGL6_.js";import{r}from"./index-98wxwTcn.js";import{S as E,d as $}from"./common--WXKQNr2.js";import{V as d}from"./Virtualizer-pNNcwjhZ.js";import"./useRerender-CU3mIZIA.js";import"./useChildren-Dna_xFfd.js";import"./index-SCI4cgSJ.js";const le={component:d},H=t=>{const n=[20,40,80,77];return Array.from({length:t}).map((o,s)=>e.jsx("div",{style:{height:n[s%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:s},s))},g={render:()=>e.jsxs("div",{style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx("div",{style:{backgroundColor:"burlywood",height:400},children:"header"}),e.jsx(d,{startMargin:400,children:H(1e3)}),e.jsx("div",{style:{backgroundColor:"steelblue",height:600},children:"footer"})]})},f={render:()=>e.jsxs("div",{style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx("div",{style:{position:"sticky",backgroundColor:"burlywood",height:40,top:0,zIndex:1},children:"header"}),e.jsx(d,{startMargin:40,children:H(1e3)}),e.jsx("div",{style:{position:"sticky",backgroundColor:"steelblue",height:60,bottom:0},children:"footer"})]})},v={render:()=>{const t=r.useRef(null),n=40,o=60;return e.jsx("div",{ref:t,style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:e.jsx("div",{style:{backgroundColor:"burlywood",padding:n},children:e.jsx("div",{style:{backgroundColor:"steelblue",padding:o},children:e.jsx(d,{scrollRef:t,startMargin:n+o,children:H(1e3)})})})})}},m={render:()=>{const t=r.useRef(0),n=i=>{const c=[20,40,80,77];return Array.from({length:i}).map(()=>{const a=t.current++;return e.jsx("div",{style:{height:c[a%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:a},a)})},[o,s]=r.useState(!1),[u,Q]=r.useState(!1),[X,Z]=r.useState(!1),R=async(i=!1)=>{s(i);const c=i?Q:Z;c(!0),await $(1e3),c(!1)},j=r.useRef(null),w=100,[b,S]=r.useState(()=>n(w*2)),k=50,l=b.length,C=r.useRef(-1),T=r.useRef(-1),F=r.useRef(!1);r.useEffect(()=>{var i;(i=j.current)==null||i.scrollToIndex(b.length/2+1),F.current=!0},[]);const x=100;return e.jsxs("div",{style:{height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx(E,{height:x,style:u?void 0:{visibility:"hidden"}}),e.jsx(d,{ref:j,shift:!!o,startMargin:x,onRangeChange:async(i,c)=>{F.current&&(c+k>l&&T.current<l?(T.current=l,await R(),S(a=>[...a,...n(w)])):i-k<0&&C.current<l&&(C.current=l,await R(!0),S(a=>[...n(w).reverse(),...a])))},children:b}),e.jsx(E,{height:x,style:X?void 0:{visibility:"hidden"}})]})}},ee=r.forwardRef(({children:t,style:n},o)=>e.jsx("ul",{ref:o,style:{...n,margin:0,overflow:"hidden"},children:t})),ne=r.forwardRef(({children:t,style:n},o)=>e.jsx("li",{ref:o,style:{...n,marginLeft:30},children:t})),p={render:()=>e.jsxs("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsx("div",{style:{padding:4},children:"header"}),e.jsx("div",{style:{overflowY:"auto",flex:1,background:"#fff"},children:e.jsx(d,{as:ee,item:ne,overscan:10,children:Array.from({length:1e3}).map((t,n)=>n)})})]})},K=[100,200,300,100,200,300,100,300,400,200],h=30,te=r.forwardRef(({children:t,style:n},o)=>e.jsxs("table",{ref:o,style:{height:n==null?void 0:n.height,position:"relative",tableLayout:"fixed",borderCollapse:"collapse",whiteSpace:"nowrap"},border:1,children:[e.jsx("thead",{style:{position:"sticky",top:0,zIndex:1,height:h,minHeight:h,maxHeight:h},children:e.jsx("tr",{children:K.map((s,u)=>e.jsx("th",{style:{color:"white",background:"darkgray",minWidth:s},children:u},u))})}),e.jsx("tbody",{style:{...n,contain:void 0,position:"absolute",top:h,left:0},children:t})]})),y={render:()=>e.jsx("div",{style:{width:"100%",height:"75%",overflow:"auto"},children:e.jsx(d,{count:1e3,as:te,item:"tr",startMargin:h,children:t=>e.jsx(r.Fragment,{children:K.map((n,o)=>e.jsxs("td",{style:{minWidth:n,background:"#fff"},children:[t,", ",o]},o))},t)})})};var A,I,z;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(I=g.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var _,M,V;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(V=(M=f.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var D,L,B;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(B=(L=v.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var O,U,Y;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        <Virtualizer ref={ref} shift={shifting ? true : false} startMargin={spinnerHeight} onRangeChange={async (start, end) => {
        if (!ready.current) return;
        if (end + THRESHOLD > count && endFetchedCountRef.current < count) {
          endFetchedCountRef.current = count;
          await fetchItems();
          setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT)]);
        } else if (start - THRESHOLD < 0 && startFetchedCountRef.current < count) {
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
}`,...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var N,P,W;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
          <Virtualizer as={Ul} item={Li} overscan={10}>
            {Array.from({
            length: 1000
          }).map((_, i) => i)}
          </Virtualizer>
        </div>
      </div>;
  }
}`,...(W=(P=p.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var G,q,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: "100%",
      height: "75%",
      overflow: "auto"
    }}>
        <Virtualizer count={1000} as={Table} item="tr" startMargin={TABLE_HEADER_HEIGHT}>
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
}`,...(J=(q=y.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const he=["HeaderAndFooter","StickyHeaderAndFooter","Nested","BiDirectionalInfiniteScrolling","UlElement","TableElement"];export{m as BiDirectionalInfiniteScrolling,g as HeaderAndFooter,v as Nested,f as StickyHeaderAndFooter,y as TableElement,p as UlElement,he as __namedExportsOrder,le as default};
