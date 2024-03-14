import{j as e}from"./jsx-runtime-CmfuFKGs.js";import{r as o}from"./index-obz6jkze.js";import{S as E,d as $}from"./common-DptxcaCK.js";import{V as d}from"./Virtualizer-DDrF6x2O.js";import"./useRerender-DlYYAwJz.js";import"./useChildren-36KMAVWT.js";import"./index-C4ZtItU4.js";const le={component:d},x=t=>{const n=[20,40,80,77];return Array.from({length:t}).map((r,s)=>e.jsx("div",{style:{height:n[s%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:s},s))},f={render:()=>e.jsxs("div",{style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx("div",{style:{backgroundColor:"burlywood",height:400},children:"header"}),e.jsx(d,{startMargin:400,endMargin:600,children:x(1e3)}),e.jsx("div",{style:{backgroundColor:"steelblue",height:600},children:"footer"})]})},v={render:()=>e.jsxs("div",{style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx("div",{style:{position:"sticky",backgroundColor:"burlywood",height:40,top:0,zIndex:1},children:"header"}),e.jsx(d,{startMargin:40,endMargin:60,children:x(1e3)}),e.jsx("div",{style:{position:"sticky",backgroundColor:"steelblue",height:60,bottom:0},children:"footer"})]})},m={render:()=>{const t=o.useRef(null),n=40,r=60;return e.jsx("div",{ref:t,style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:e.jsx("div",{style:{backgroundColor:"burlywood",padding:n},children:e.jsx("div",{style:{backgroundColor:"steelblue",padding:r},children:e.jsx(d,{scrollRef:t,startMargin:n+r,endMargin:n+r,children:x(1e3)})})})})}},p={render:()=>{const t=o.useRef(0),n=i=>{const c=[20,40,80,77];return Array.from({length:i}).map(()=>{const a=t.current++;return e.jsx("div",{style:{height:c[a%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:a},a)})},[r,s]=o.useState(!1),[u,Q]=o.useState(!1),[X,Z]=o.useState(!1),R=async(i=!1)=>{s(i);const c=i?Q:Z;c(!0),await $(1e3),c(!1)},j=o.useRef(null),b=100,[H,S]=o.useState(()=>n(b*2)),k=50,l=H.length,C=o.useRef(-1),T=o.useRef(-1),F=o.useRef(!1);o.useEffect(()=>{var i;(i=j.current)==null||i.scrollToIndex(H.length/2+1),F.current=!0},[]);const g=100;return e.jsxs("div",{style:{height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx(E,{height:g,style:u?void 0:{visibility:"hidden"}}),e.jsx(d,{ref:j,shift:!!r,startMargin:g,endMargin:g,onRangeChange:async(i,c)=>{F.current&&(c+k>l&&T.current<l?(T.current=l,await R(),S(a=>[...a,...n(b)])):i-k<0&&C.current<l&&(C.current=l,await R(!0),S(a=>[...n(b).reverse(),...a])))},children:H}),e.jsx(E,{height:g,style:X?void 0:{visibility:"hidden"}})]})}},ee=o.forwardRef(({children:t,style:n},r)=>e.jsx("ul",{ref:r,style:{...n,margin:0,overflow:"hidden"},children:t})),ne=o.forwardRef(({children:t,style:n},r)=>e.jsx("li",{ref:r,style:{...n,marginLeft:30},children:t})),y={render:()=>e.jsxs("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsx("div",{style:{padding:4},children:"header"}),e.jsx("div",{style:{overflowY:"auto",flex:1,background:"#fff"},children:e.jsx(d,{as:ee,item:ne,overscan:10,children:Array.from({length:1e3}).map((t,n)=>n)})})]})},K=[100,200,300,100,200,300,100,300,400,200],h=30,te=o.forwardRef(({children:t,style:n},r)=>e.jsxs("table",{ref:r,style:{height:n==null?void 0:n.height,position:"relative",tableLayout:"fixed",borderCollapse:"collapse",whiteSpace:"nowrap"},border:1,children:[e.jsx("thead",{style:{position:"sticky",top:0,zIndex:1,height:h,minHeight:h,maxHeight:h},children:e.jsx("tr",{children:K.map((s,u)=>e.jsx("th",{style:{color:"white",background:"darkgray",minWidth:s},children:u},u))})}),e.jsx("tbody",{style:{...n,contain:void 0,position:"absolute",top:h,left:0},children:t})]})),w={render:()=>e.jsx("div",{style:{width:"100%",height:"75%",overflow:"auto"},children:e.jsx(d,{count:1e3,as:te,item:"tr",startMargin:h,children:t=>e.jsx(o.Fragment,{children:K.map((n,r)=>e.jsxs("td",{style:{minWidth:n,background:"#fff"},children:[t,", ",r]},r))},t)})})};var A,M,I;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const headerHeight = 400;
    const footerHeight = 600;
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
        <Virtualizer startMargin={headerHeight} endMargin={footerHeight}>
          {createRows(1000)}
        </Virtualizer>
        <div style={{
        backgroundColor: "steelblue",
        height: footerHeight
      }}>
          footer
        </div>
      </div>;
  }
}`,...(I=(M=f.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var z,_,V;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const headerHeight = 40;
    const footerHeight = 60;
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
        <Virtualizer startMargin={headerHeight} endMargin={footerHeight}>
          {createRows(1000)}
        </Virtualizer>
        <div style={{
        position: "sticky",
        backgroundColor: "steelblue",
        height: footerHeight,
        bottom: 0
      }}>
          footer
        </div>
      </div>;
  }
}`,...(V=(_=v.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var D,L,B;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
            <Virtualizer scrollRef={ref} startMargin={outerPadding + innerPadding} endMargin={outerPadding + innerPadding}>
              {createRows(1000)}
            </Virtualizer>
          </div>
        </div>
      </div>;
  }
}`,...(B=(L=m.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var O,U,P;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        <Virtualizer ref={ref} shift={shifting ? true : false} startMargin={spinnerHeight} endMargin={spinnerHeight} onRangeChange={async (start, end) => {
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
}`,...(P=(U=p.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var Y,N,W;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(W=(N=y.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var G,q,J;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(q=w.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const he=["HeaderAndFooter","StickyHeaderAndFooter","Nested","BiDirectionalInfiniteScrolling","UlElement","TableElement"];export{p as BiDirectionalInfiniteScrolling,f as HeaderAndFooter,m as Nested,v as StickyHeaderAndFooter,w as TableElement,y as UlElement,he as __namedExportsOrder,le as default};
