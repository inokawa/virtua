import{j as e,a as c}from"./jsx-runtime-c3d7f245.js";import{r as i}from"./index-c6dae603.js";import{S as fe}from"./components-0dcd7504.js";import{V as u}from"./VList-9799bee9.js";import"./Viewport-7a2b695e.js";import"./index-eb008d06.js";import"./ListItem-8829065c.js";const Ce={component:u},p=o=>{const n=[20,40,80,77];return Array.from({length:o}).map((r,t)=>e("div",{style:{height:n[t%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:t},t))},v={render:()=>e(u,{style:{height:"100vh"},children:p(1e3)})},_=o=>Array.from({length:o}).map((n,r)=>c("div",{style:{width:r%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",r]},r)),b={render:()=>c("div",{children:[c("div",{style:{padding:10,direction:"ltr"},children:[e("div",{children:"ltr"}),e(u,{style:{width:"100%",height:200},horizontal:!0,children:_(1e3)})]}),c("div",{style:{padding:10,direction:"rtl"},children:[e("div",{children:"rtl"}),e(u,{style:{width:"100%",height:200},horizontal:!0,mode:"rtl",children:_(1e3)})]})]})},x={render:()=>e(u,{style:{width:400,height:400,padding:"80px 20px",background:"lightgray"},children:Array.from({length:1e3}).map((o,n)=>e("div",{style:{height:100,borderRadius:8,margin:10,padding:10,background:"white"},children:n},n))})},S={render:()=>{const o=i.useRef(null);return i.useEffect(()=>{var n;(n=o.current)==null||n.scrollToIndex(999)},[]),e(u,{ref:o,style:{height:"100vh"},mode:"reverse",children:p(1e3)})}},T={render:()=>e(u,{style:{height:"100vh"},children:Array.from({length:100}).map((o,n)=>e("div",{style:{borderBottom:"solid 1px #ccc"},children:Array.from({length:10}).map((r,t)=>{const l=t===0;return e("div",{style:{height:60,background:"#fff",...l&&{top:0,height:30,position:"sticky",borderBottom:"solid 1px #ccc"}},children:l?n:`${n} - ${t}`},t)})},n))})},L={render:()=>{const[n,r]=i.useState(567),[t,l]=i.useState("start"),[a,h]=i.useState(1e3),d=i.useRef(null);return c("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[c("div",{children:[e("input",{type:"number",value:n,onChange:s=>{r(Number(s.target.value))}}),e("button",{onClick:()=>{var s;(s=d.current)==null||s.scrollToIndex(n,t)},children:"scroll to index"}),e("button",{onClick:()=>{r(Math.round(1e3*Math.random()))},children:"randomize"}),c("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:t==="start",onChange:()=>{l("start")}}),"start"]}),c("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:t==="end",onChange:()=>{l("end")}}),"end"]})]}),e("div",{children:c("div",{children:[e("input",{type:"number",value:a,onChange:s=>{h(Number(s.target.value))}}),e("button",{onClick:()=>{var s;(s=d.current)==null||s.scrollTo(a)},children:"scroll to offset"}),e("button",{onClick:()=>{var s;(s=d.current)==null||s.scrollBy(a)},children:"scroll by offset"})]})}),e(u,{ref:d,style:{flex:1},children:p(1e3)})]})}},ge=({id:o})=>{const n="list-cache-"+o,r=i.useRef(null),[t,l]=i.useMemo(()=>{const a=sessionStorage.getItem(n);return a?JSON.parse(a):[]},[]);return i.useEffect(()=>{if(!r.current)return;const a=r.current;return t&&a.scrollTo(t),()=>{sessionStorage.setItem(n,JSON.stringify([a.scrollOffset,a.cache]))}},[]),e(u,{ref:r,cache:l,style:{height:"100vh"},children:p(1e3)})},k={render:()=>{const[o,n]=i.useState(!0),[r,t]=i.useState("1");return c("div",{children:[e("button",{onClick:()=>{n(l=>!l)},children:o?"hide":"show"}),["1","2","3"].map(l=>c("label",{children:[e("input",{type:"radio",checked:r===l,onChange:()=>{t(l)}}),l]},l)),o&&e(ge,{id:r},r)]})}},C={render:()=>{const o=(g,f=0)=>{const m=[20,40,80,77];return Array.from({length:g}).map((ye,y)=>(y+=f,e("div",{style:{height:m[y%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:y},y)))},[n,r]=i.useState(!1),t=async()=>{r(!0),await new Promise(g=>setTimeout(g,1e3)),r(!1)},l=100,[a,h]=i.useState(()=>o(l)),d=i.useRef(-1),s=a.length;return c(u,{style:{flex:1},onRangeChange:async(g,f)=>{f+50>s&&d.current<s&&(d.current=s,await t(),h(m=>[...m,...o(l,m.length)]))},children:[a,n&&e(fe,{})]})}},I={render:()=>{const o=i.useState(()=>p(1e3))[0],[n,r]=i.useState(0),[t,l]=i.useState(!1),[a,h]=i.useState([-1,-1]);return c("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[c("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:[c("div",{children:["scrollTop: ",n]}),c("div",{children:["scrolling: ",t?"true":"false"]}),c("div",{children:["index: (",a[0],", ",a[1],")"]})]}),e(u,{style:{flex:1},onScroll:d=>{i.startTransition(()=>{r(d),l(!0)})},onScrollStop:()=>{i.startTransition(()=>{l(!1)})},onRangeChange:async(d,s)=>{i.startTransition(()=>{h([d,s])})},children:o})]})}},w={render:()=>{const[o,n]=i.useState({0:!0,3:!0,6:!0,9:!0,12:!0});return e(u,{style:{height:"100vh"},children:Array.from({length:1e3}).map((r,t)=>{const l=!!o[t];return c("div",{style:{borderBottom:"solid 1px #ccc",background:l?"lightpink":"#fff",display:"flex",flexDirection:"row",transition:"0.5s ease"},children:[e("div",{children:e("button",{style:{height:"100%"},onClick:()=>{n(a=>({...a,[t]:!a[t]}))},children:l?"close":"open"})}),e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:l?200:40,transition:"0.5s ease"},children:t})]},t)})})}},R={render:()=>{const n=(d,s)=>Array.from({length:d}).map((g,f)=>(f+=s,f)),[r,t]=i.useState(!1),[l,a]=i.useState(()=>n(4,0));i.useEffect(()=>{const d=setInterval(()=>{a(s=>r?[...n(4,s[0]-4),...s]:[...s,...n(4,s[s.length-1]+1)])},500);return()=>{clearInterval(d)}});const h=[20,40,80,77];return c("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[c("div",{children:[c("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!r,onChange:()=>{t(!1)}}),"append"]}),c("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:r,onChange:()=>{t(!0)}}),"prepend"]})]}),e(u,{style:{flex:1},children:l.map((d,s)=>e("div",{style:{height:h[s%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:d},d))})]})}},pe=i.forwardRef(({children:o,attrs:n,height:r},t)=>e("div",{ref:t,...n,children:e("ul",{style:{position:"relative",height:r,margin:0},children:o})})),me=i.forwardRef(({children:o,style:n},r)=>e("li",{ref:r,style:{...n,marginLeft:30},children:o})),A={render:()=>c("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e("div",{style:{padding:4},children:"header"}),e(u,{style:{flex:1,background:"#fff"},components:{Root:pe,Item:me},overscan:20,children:Array.from({length:1e3}).map((o,n)=>n)})]})};var H,B,V;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...(V=(B=v.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var E,N,G;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <div style={{
        padding: 10,
        direction: "ltr"
      }}>
          <div>ltr</div>
          <VList style={{
          width: "100%",
          height: 200
        }} horizontal>
            {createColumns(1000)}
          </VList>
        </div>
        <div style={{
        padding: 10,
        direction: "rtl"
      }}>
          <div>rtl</div>
          <VList style={{
          width: "100%",
          height: 200
        }} horizontal mode="rtl">
            {createColumns(1000)}
          </VList>
        </div>
      </div>;
  }
}`,...(G=(N=b.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var O,D,M;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      width: 400,
      height: 400,
      padding: "80px 20px",
      background: "lightgray"
    }}>
        {Array.from({
        length: 1000
      }).map((_, i) => {
        return <div key={i} style={{
          height: 100,
          borderRadius: 8,
          margin: 10,
          padding: 10,
          background: "white"
        }}>
              {i}
            </div>;
      })}
      </VList>;
  }
}`,...(M=(D=x.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var P,z,U;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<VListHandle>(null);
    useEffect(() => {
      ref.current?.scrollToIndex(999);
    }, []);
    return <VList ref={ref} style={{
      height: "100vh"
    }} mode="reverse">
        {createRows(1000)}
      </VList>;
  }
}`,...(U=(z=S.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var j,F,$;T.parameters={...T.parameters,docs:{...(j=T.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>
        {Array.from({
        length: 100
      }).map((_, i) => {
        return <div key={i} style={{
          borderBottom: "solid 1px #ccc"
        }}>
              {Array.from({
            length: 10
          }).map((_, j) => {
            const isGroupTop = j === 0;
            return <div key={j} style={{
              height: 60,
              background: "#fff",
              ...(isGroupTop && {
                top: 0,
                height: 30,
                position: "sticky",
                borderBottom: "solid 1px #ccc"
              })
            }}>
                    {isGroupTop ? i : \`\${i} - \${j}\`}
                  </div>;
          })}
            </div>;
      })}
      </VList>;
  }
}`,...($=(F=T.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var J,W,K;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const LENGTH = 1000;
    const [scrollIndex, setScrollIndex] = useState(567);
    const [scrollIndexAlign, setScrollToIndexAlign] = useState<ScrollToIndexAlign>("start");
    const [scrollOffset, setScrollOffset] = useState(1000);
    const ref = useRef<VListHandle>(null);
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div>
          <input type="number" value={scrollIndex} onChange={e => {
          setScrollIndex(Number(e.target.value));
        }} />
          <button onClick={() => {
          ref.current?.scrollToIndex(scrollIndex, scrollIndexAlign);
        }}>
            scroll to index
          </button>
          <button onClick={() => {
          setScrollIndex(Math.round(LENGTH * Math.random()));
        }}>
            randomize
          </button>
          <label style={{
          marginLeft: 4
        }}>
            <input type="radio" style={{
            marginLeft: 4
          }} checked={scrollIndexAlign === "start"} onChange={() => {
            setScrollToIndexAlign("start");
          }} />
            start
          </label>
          <label style={{
          marginLeft: 4
        }}>
            <input type="radio" style={{
            marginLeft: 4
          }} checked={scrollIndexAlign === "end"} onChange={() => {
            setScrollToIndexAlign("end");
          }} />
            end
          </label>
        </div>
        <div>
          <div>
            <input type="number" value={scrollOffset} onChange={e => {
            setScrollOffset(Number(e.target.value));
          }} />
            <button onClick={() => {
            ref.current?.scrollTo(scrollOffset);
          }}>
              scroll to offset
            </button>
            <button onClick={() => {
            ref.current?.scrollBy(scrollOffset);
          }}>
              scroll by offset
            </button>
          </div>
        </div>
        <VList ref={ref} style={{
        flex: 1
      }}>
          {createRows(LENGTH)}
        </VList>
      </div>;
  }
}`,...(K=(W=L.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var q,Q,X;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(true);
    const [selectedId, setSelectedId] = useState("1");
    return <div>
        <button onClick={() => {
        setShow(prev => !prev);
      }}>
          {show ? "hide" : "show"}
        </button>
        {["1", "2", "3"].map(id => <label key={id}>
            <input type="radio" checked={selectedId === id} onChange={() => {
          setSelectedId(id);
        }} />
            {id}
          </label>)}
        {show && <RestorableList key={selectedId} id={selectedId} />}
      </div>;
  }
}`,...(X=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const createRows = (num: number, offset: number = 0) => {
      const heights = [20, 40, 80, 77];
      return Array.from({
        length: num
      }).map((_, i) => {
        i += offset;
        return <div key={i} style={{
          height: heights[i % 4],
          borderBottom: "solid 1px #ccc",
          background: "#fff"
        }}>
            {i}
          </div>;
      });
    };
    const [fetching, setFetching] = useState(false);
    const fetchItems = async () => {
      setFetching(true);
      await new Promise(r => setTimeout(r, 1000));
      setFetching(false);
    };
    const ITEM_BATCH_COUNT = 100;
    const [items, setItems] = useState(() => createRows(ITEM_BATCH_COUNT));
    const fetchedCountRef = useRef(-1);
    const count = items.length;
    return <VList style={{
      flex: 1
    }} onRangeChange={async (_, end) => {
      if (end + 50 > count && fetchedCountRef.current < count) {
        fetchedCountRef.current = count;
        await fetchItems();
        setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT, prev.length)]);
      }
    }}>
        {items}
        {fetching && <Spinner />}
      </VList>;
  }
}`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,re;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const items = useState(() => createRows(1000))[0];
    const [position, setPosition] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const [range, setRange] = useState([-1, -1]);
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        background: "white",
        borderBottom: "solid 1px #ccc"
      }}>
          <div>scrollTop: {position}</div>
          <div>scrolling: {scrolling ? "true" : "false"}</div>
          <div>
            index: ({range[0]}, {range[1]})
          </div>
        </div>
        <VList style={{
        flex: 1
      }} onScroll={offset => {
        startTransition(() => {
          setPosition(offset);
          setScrolling(true);
        });
      }} onScrollStop={() => {
        startTransition(() => {
          setScrolling(false);
        });
      }} onRangeChange={async (start, end) => {
        startTransition(() => {
          setRange([start, end]);
        });
      }}>
          {items}
        </VList>
      </div>;
  }
}`,...(re=(te=I.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,oe,ie;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [actives, setActives] = useState<{
      [key: number]: boolean;
    }>({
      0: true,
      3: true,
      6: true,
      9: true,
      12: true
    });
    return <VList style={{
      height: "100vh"
    }}>
        {Array.from({
        length: 1000
      }).map((_, i) => {
        const active = !!actives[i];
        return <div key={i} style={{
          borderBottom: "solid 1px #ccc",
          background: active ? "lightpink" : "#fff",
          display: "flex",
          flexDirection: "row",
          transition: "0.5s ease"
        }}>
              <div>
                <button style={{
              height: "100%"
            }} onClick={() => {
              setActives(prev => ({
                ...prev,
                [i]: !prev[i]
              }));
            }}>
                  {active ? "close" : "open"}
                </button>
              </div>
              <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            height: active ? 200 : 40,
            transition: "0.5s ease"
          }}>
                {i}
              </div>
            </div>;
      })}
      </VList>;
  }
}`,...(ie=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,ae;R.parameters={...R.parameters,docs:{...(le=R.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const BATCH_LENGTH = 4;
    const createRows = (num: number, offset: number) => {
      return Array.from({
        length: num
      }).map((_, i) => {
        i += offset;
        return i;
      });
    };
    const [prepend, setPrepend] = useState(false);
    const [rows, setRows] = useState(() => createRows(BATCH_LENGTH, 0));
    useEffect(() => {
      const timer = setInterval(() => {
        setRows(prev => prepend ? [...createRows(BATCH_LENGTH, prev[0] - BATCH_LENGTH), ...prev] : [...prev, ...createRows(BATCH_LENGTH, prev[prev.length - 1]! + 1)]);
      }, 500);
      return () => {
        clearInterval(timer);
      };
    });
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
            <input type="radio" style={{
            marginLeft: 4
          }} checked={!prepend} onChange={() => {
            setPrepend(false);
          }} />
            append
          </label>
          <label style={{
          marginRight: 4
        }}>
            <input type="radio" style={{
            marginLeft: 4
          }} checked={prepend} onChange={() => {
            setPrepend(true);
          }} />
            prepend
          </label>
        </div>
        <VList style={{
        flex: 1
      }}>
          {rows.map((d, i) => <div key={d} style={{
          height: heights[i % 4],
          borderBottom: "solid 1px #ccc",
          background: "#fff"
        }}>
              {d}
            </div>)}
        </VList>
      </div>;
  }
}`,...(ae=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var de,ue,he;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
        <VList style={{
        flex: 1,
        background: "#fff"
      }} components={{
        Root: UlList,
        Item: Li
      }} overscan={20}>
          {Array.from({
          length: 1000
        }).map((_, i) => i)}
        </VList>
      </div>;
  }
}`,...(he=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};const Ie=["Default","Horizontal","PaddingAndMargin","Reverse","Sticky","ScrollTo","ScrollRestoration","InfiniteScrolling","Callbacks","WithState","IncreasingItems","Ul"];export{I as Callbacks,v as Default,b as Horizontal,R as IncreasingItems,C as InfiniteScrolling,x as PaddingAndMargin,S as Reverse,k as ScrollRestoration,L as ScrollTo,T as Sticky,A as Ul,w as WithState,Ie as __namedExportsOrder,Ce as default};
//# sourceMappingURL=VList.stories-51d1b822.js.map
