import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-BzEk9ymh.js";import{S as F,d as M}from"./common-BqtzafjA.js";import{V as a}from"./Virtualizer-DsMYYMK6.js";import"./preload-helper-PPVm8Dsz.js";import"./useLatestRef-If8p84ad.js";import"./useChildren-DEInhnTj.js";import"./index-BfGwGeRy.js";import"./index-CBPQlJgY.js";const J={component:a},R=r=>{const t=[20,40,80,77];return Array.from({length:r}).map((o,i)=>e.jsx("div",{style:{height:t[i%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:i},i))},f={render:()=>e.jsxs("div",{style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx("div",{style:{backgroundColor:"burlywood",height:400},children:"header"}),e.jsx(a,{startMargin:400,children:R(1e3)}),e.jsx("div",{style:{backgroundColor:"steelblue",height:600},children:"footer"})]})},g={render:()=>e.jsxs("div",{style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx("div",{style:{position:"sticky",backgroundColor:"burlywood",height:40,top:0,zIndex:1},children:"header"}),e.jsx(a,{startMargin:40,children:R(1e3)}),e.jsx("div",{style:{position:"sticky",backgroundColor:"steelblue",height:60,bottom:0},children:"footer"})]})},m={render:()=>{const r=n.useRef(null),t=40,o=60;return e.jsx("div",{ref:r,style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:e.jsx("div",{style:{backgroundColor:"burlywood",padding:t},children:e.jsx("div",{style:{backgroundColor:"steelblue",padding:o},children:e.jsx(a,{scrollRef:r,startMargin:t+o,children:R(1e3)})})})})}},v={render:()=>{const r=n.useRef(0),t=s=>{const u=[20,40,80,77];return Array.from({length:s}).map(()=>{const H=r.current++;return e.jsx("div",{style:{height:u[H%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:H},H)})},[o,i]=n.useState(!1),[h,I]=n.useState(!1),[_,z]=n.useState(!1),S=async(s=!1)=>{i(s);const u=s?I:z;u(!0),await M(1e3),u(!1)},d=n.useRef(null),w=100,[b,j]=n.useState(()=>t(w*2)),k=50,c=b.length,C=n.useRef(-1),E=n.useRef(-1),T=n.useRef(!1);n.useEffect(()=>{d.current?.scrollToIndex(b.length/2+1),T.current=!0},[]);const x=100;return e.jsxs("div",{style:{height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e.jsx(F,{height:x,style:h?void 0:{visibility:"hidden"}}),e.jsx(a,{ref:d,shift:!!o,startMargin:x,onScroll:async()=>{T.current&&d.current&&(E.current<c&&d.current.findEndIndex()+k>c?(E.current=c,await S(),j(s=>[...s,...t(w)])):C.current<c&&d.current.findStartIndex()-k<0&&(C.current=c,await S(!0),j(s=>[...t(w).reverse(),...s])))},children:b}),e.jsx(F,{height:x,style:_?void 0:{visibility:"hidden"}})]})}},V=n.forwardRef(({children:r,style:t},o)=>e.jsx("ul",{ref:o,style:{...t,margin:0,overflow:"hidden"},children:r})),D=n.forwardRef(({children:r,style:t},o)=>e.jsx("li",{ref:o,style:{...t,marginLeft:30},children:r})),p={render:()=>e.jsxs("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsx("div",{style:{padding:4},children:"header"}),e.jsx("div",{style:{overflowY:"auto",flex:1,background:"#fff"},children:e.jsx(a,{as:V,item:D,overscan:10,children:Array.from({length:1e3}).map((r,t)=>t)})})]})},A=[100,200,300,100,200,300,100,300,400,200],l=30,L=n.forwardRef(({children:r,style:t},o)=>e.jsxs("table",{ref:o,style:{height:t?.height,position:"relative",tableLayout:"fixed",borderCollapse:"collapse",whiteSpace:"nowrap"},border:1,children:[e.jsx("thead",{style:{position:"sticky",top:0,zIndex:1,height:l,minHeight:l,maxHeight:l},children:e.jsx("tr",{children:A.map((i,h)=>e.jsx("th",{style:{color:"white",background:"darkgray",minWidth:i},children:h},h))})}),e.jsx("tbody",{style:{...t,contain:void 0,position:"absolute",top:l,left:0},children:r})]})),y={render:()=>{const r=n.useMemo(()=>Array.from({length:1e3}).map((t,o)=>o),[]);return e.jsx("div",{style:{width:"100%",height:"75%",overflow:"auto"},children:e.jsx(a,{data:r,as:L,item:"tr",startMargin:l,children:t=>e.jsx(n.Fragment,{children:A.map((o,i)=>e.jsxs("td",{style:{minWidth:o,background:"#fff"},children:[t,", ",i]},i))},t)})})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
        if (endFetchedCountRef.current < count && ref.current.findEndIndex() + THRESHOLD > count) {
          endFetchedCountRef.current = count;
          await fetchItems();
          setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT)]);
        } else if (startFetchedCountRef.current < count && ref.current.findStartIndex() - THRESHOLD < 0) {
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
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const K=["HeaderAndFooter","StickyHeaderAndFooter","Nested","BiDirectionalInfiniteScrolling","UlElement","TableElement"];export{v as BiDirectionalInfiniteScrolling,f as HeaderAndFooter,m as Nested,g as StickyHeaderAndFooter,y as TableElement,p as UlElement,K as __namedExportsOrder,J as default};
