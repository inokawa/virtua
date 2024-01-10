import{j as l,a as e}from"./jsx-runtime-sgeEVxPu.js";import{r as o}from"./index-yp3VsGQP.js";import{S as I,d as ee}from"./common-4ZgZpLnL.js";import{V as d}from"./Virtualizer-G8IlWVId.js";import"./useRerender-JqkPyL0w.js";import"./useChildren-TLbY5PQQ.js";import"./index-8dy-jdxy.js";const he={component:d},S=t=>{const n=[20,40,80,77];return Array.from({length:t}).map((r,s)=>e("div",{style:{height:n[s%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:s},s))},v={render:()=>l("div",{style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e("div",{style:{backgroundColor:"burlywood",height:400},children:"header"}),e(d,{startMargin:400,endMargin:600,children:S(1e3)}),e("div",{style:{backgroundColor:"steelblue",height:600},children:"footer"})]})},m={render:()=>l("div",{style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e("div",{style:{position:"sticky",backgroundColor:"burlywood",height:40,top:0,zIndex:1},children:"header"}),e(d,{startMargin:40,endMargin:60,children:S(1e3)}),e("div",{style:{position:"sticky",backgroundColor:"steelblue",height:60,bottom:0},children:"footer"})]})},p={render:()=>{const t=o.useRef(null),n=40,r=60;return e("div",{ref:t,style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:e("div",{style:{backgroundColor:"burlywood",padding:n},children:e("div",{style:{backgroundColor:"steelblue",padding:r},children:e(d,{scrollRef:t,startMargin:n+r,endMargin:n+r,children:S(1e3)})})})})}},y={render:()=>{const t=o.useRef(0),n=i=>{const c=[20,40,80,77];return Array.from({length:i}).map(()=>{const a=t.current++;return e("div",{style:{height:c[a%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:a},a)})},[r,s]=o.useState(!1),[g,X]=o.useState(!1),[Z,$]=o.useState(!1),k=async(i=!1)=>{s(i);const c=i?X:$;c(!0),await ee(1e3),c(!1)},C=o.useRef(null),H=100,[R,T]=o.useState(()=>n(H*2)),F=50,h=R.length,E=o.useRef(-1),A=o.useRef(-1),M=o.useRef(!1);o.useEffect(()=>{var i;(i=C.current)==null||i.scrollToIndex(R.length/2+1),M.current=!0},[]);const f=100;return l("div",{style:{height:"100vh",overflowY:"auto",overflowAnchor:"none"},children:[e(I,{height:f,style:g?void 0:{visibility:"hidden"}}),e(d,{ref:C,shift:!!r,startMargin:f,endMargin:f,onRangeChange:async(i,c)=>{M.current&&(c+F>h&&A.current<h?(A.current=h,await k(),T(a=>[...a,...n(H)])):i-F<0&&E.current<h&&(E.current=h,await k(!0),T(a=>[...n(H).reverse(),...a])))},children:R}),e(I,{height:f,style:Z?void 0:{visibility:"hidden"}})]})}},ne=o.forwardRef(({children:t,style:n},r)=>e("ul",{ref:r,style:{...n,margin:0,overflow:"hidden"},children:t})),te=o.forwardRef(({children:t,style:n},r)=>e("li",{ref:r,style:{...n,marginLeft:30},children:t})),w={render:()=>l("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e("div",{style:{padding:4},children:"header"}),e("div",{style:{overflowY:"auto",flex:1,background:"#fff"},children:e(d,{as:ne,item:te,overscan:10,children:Array.from({length:1e3}).map((t,n)=>n)})})]})},Q=[100,200,300,100,200,300,100,300,400,200],u=30,re=o.forwardRef(({children:t,style:n},r)=>l("table",{ref:r,style:{height:n==null?void 0:n.height,position:"relative",tableLayout:"fixed",borderCollapse:"collapse",whiteSpace:"nowrap"},border:1,children:[e("thead",{style:{position:"sticky",top:0,zIndex:1,height:u,minHeight:u,maxHeight:u},children:e("tr",{children:Q.map((s,g)=>e("th",{style:{color:"white",background:"darkgray",minWidth:s},children:g},g))})}),e("tbody",{style:{...n,contain:void 0,position:"absolute",top:u,left:0},children:t})]})),b={render:()=>e("div",{style:{width:"100%",height:"75%",overflow:"auto"},children:e(d,{count:1e3,as:re,item:"tr",startMargin:u,children:t=>e(o.Fragment,{children:Q.map((n,r)=>l("td",{style:{minWidth:n,background:"#fff"},children:[t,", ",r]},r))},t)})})};var x,z,_;v.parameters={...v.parameters,docs:{...(x=v.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(_=(z=v.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var V,D,L;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(L=(D=m.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var B,O,U;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(U=(O=p.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var P,Y,N;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(N=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:N.source}}};var j,W,G;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(G=(W=w.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var q,J,K;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ue=["HeaderAndFooter","StickyHeaderAndFooter","Nested","BiDirectionalInfiniteScrolling","UlElement","TableElement"];export{y as BiDirectionalInfiniteScrolling,v as HeaderAndFooter,p as Nested,m as StickyHeaderAndFooter,b as TableElement,w as UlElement,ue as __namedExportsOrder,he as default};
