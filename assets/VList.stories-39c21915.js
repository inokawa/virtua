import{j as e,a as c}from"./jsx-runtime-c3d7f245.js";import{r as n}from"./index-c6dae603.js";import{S as ke,d as Le}from"./common-4271bb5e.js";import{V as h}from"./VList-2645b868.js";import"./Viewport-023ab0bc.js";import"./index-eb008d06.js";import"./ListItem-3e862e96.js";const Ne={component:h},k=o=>{const t=[20,40,80,77];return Array.from({length:o}).map((s,i)=>e("div",{style:{height:t[i%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:i},i))},L={render:()=>e(h,{style:{height:"100vh"},children:k(1e3)})},M=o=>Array.from({length:o}).map((t,s)=>c("div",{style:{width:s%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",s]},s)),w={render:()=>c("div",{children:[c("div",{style:{padding:10,direction:"ltr"},children:[e("div",{children:"ltr"}),e(h,{style:{width:"100%",height:200},horizontal:!0,children:M(1e3)})]}),c("div",{style:{padding:10,direction:"rtl"},children:[e("div",{children:"rtl"}),e(h,{style:{width:"100%",height:200},horizontal:!0,mode:"rtl",children:M(1e3)})]})]})},T={render:()=>e(h,{style:{width:400,height:400,padding:"80px 20px",background:"lightgray"},children:Array.from({length:1e3}).map((o,t)=>e("div",{style:{height:100,borderRadius:8,margin:10,padding:10,background:"white"},children:t},t))})},A={render:()=>{const o=n.useRef(null);return n.useEffect(()=>{var t;(t=o.current)==null||t.scrollToIndex(999)},[]),e(h,{ref:o,style:{height:"100vh"},mode:"reverse",children:k(1e3)})}},_={render:()=>e(h,{style:{height:"100vh"},children:Array.from({length:100}).map((o,t)=>e("div",{style:{borderBottom:"solid 1px #ccc"},children:Array.from({length:10}).map((s,i)=>{const r=i===0;return e("div",{style:{height:60,background:"#fff",...r&&{top:0,height:30,position:"sticky",borderBottom:"solid 1px #ccc"}},children:r?t:`${t} - ${i}`},i)})},t))})},V={render:()=>{const[t,s]=n.useState(567),[i,r]=n.useState("start"),[d,f]=n.useState(1e3),u=n.useRef(null);return c("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[c("div",{children:[e("input",{type:"number",value:t,onChange:l=>{s(Number(l.target.value))}}),e("button",{onClick:()=>{var l;(l=u.current)==null||l.scrollToIndex(t,i)},children:"scroll to index"}),e("button",{onClick:()=>{s(Math.round(1e3*Math.random()))},children:"randomize"}),c("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:i==="start",onChange:()=>{r("start")}}),"start"]}),c("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:i==="end",onChange:()=>{r("end")}}),"end"]})]}),e("div",{children:c("div",{children:[e("input",{type:"number",value:d,onChange:l=>{f(Number(l.target.value))}}),e("button",{onClick:()=>{var l;(l=u.current)==null||l.scrollTo(d)},children:"scroll to offset"}),e("button",{onClick:()=>{var l;(l=u.current)==null||l.scrollBy(d)},children:"scroll by offset"})]})}),e(h,{ref:u,style:{flex:1},children:k(1e3)})]})}},we=({id:o})=>{const t="list-cache-"+o,s=n.useRef(null),[i,r]=n.useMemo(()=>{const d=sessionStorage.getItem(t);return d?JSON.parse(d):[]},[]);return n.useEffect(()=>{if(!s.current)return;const d=s.current;return i&&d.scrollTo(i),()=>{sessionStorage.setItem(t,JSON.stringify([d.scrollOffset,d.cache]))}},[]),e(h,{ref:s,cache:r,style:{height:"100vh"},children:k(1e3)})},E={render:()=>{const[o,t]=n.useState(!0),[s,i]=n.useState("1");return c("div",{children:[e("button",{onClick:()=>{t(r=>!r)},children:o?"hide":"show"}),["1","2","3"].map(r=>c("label",{children:[e("input",{type:"radio",checked:s===r,onChange:()=>{i(r)}}),r]},r)),o&&e(we,{id:s},s)]})}},B={render:()=>{const o=(v,p=0)=>{const g=[20,40,80,77];return Array.from({length:v}).map((b,m)=>(m+=p,e("div",{style:{height:g[m%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:m},m)))},[t,s]=n.useState(!1),i=async()=>{s(!0),await Le(1e3),s(!1)},r=100,[d,f]=n.useState(()=>o(r)),u=n.useRef(-1),l=d.length;return c(h,{style:{flex:1},onRangeChange:async(v,p)=>{p+50>l&&u.current<l&&(u.current=l,await i(),f(g=>[...g,...o(r,g.length)]))},children:[d,t&&e(ke,{})]})}},F={render:()=>{const o=n.useRef(0),t=y=>{const C=[20,40,80,77];return Array.from({length:y}).map(()=>{const x=o.current++;return e("div",{style:{height:C[x%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:x},x)})},[s,i]=n.useState(!1),[r,d]=n.useState(!1),[f,u]=n.useState(!1),l=async(y=!1)=>{i(y);const C=y?d:u;C(!0),await Le(1e3),C(!1)},v=n.useRef(null),p=100,[g,b]=n.useState(()=>t(p*2)),m=50,a=g.length,S=n.useRef(-1),R=n.useRef(-1),I=n.useRef(!1);return n.useEffect(()=>{var y;(y=v.current)==null||y.scrollToIndex(g.length/2+1),I.current=!0},[]),c(h,{ref:v,style:{flex:1},shift:!!s,onRangeChange:async(y,C)=>{I.current&&(C+m>a&&R.current<a?(R.current=a,await l(),b(x=>[...x,...t(p)])):y-m<0&&S.current<a&&(S.current=a,await l(!0),b(x=>[...t(p).reverse(),...x])))},children:[g,e(ke,{style:f?void 0:{visibility:"hidden"}},"foot")]})}},H={render:()=>{const o=n.useState(()=>k(1e3))[0],[t,s]=n.useState(0),[i,r]=n.useState(!1),[d,f]=n.useState([-1,-1]);return c("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[c("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:[c("div",{children:["scrollTop: ",t]}),c("div",{children:["scrolling: ",i?"true":"false"]}),c("div",{children:["index: (",d[0],", ",d[1],")"]})]}),e(h,{style:{flex:1},onScroll:u=>{n.startTransition(()=>{s(u),r(!0)})},onScrollStop:()=>{n.startTransition(()=>{r(!1)})},onRangeChange:async(u,l)=>{n.startTransition(()=>{f([u,l])})},children:o})]})}},O={render:()=>{const[o,t]=n.useState({0:!0,3:!0,6:!0,9:!0,12:!0});return e(h,{style:{height:"100vh"},children:Array.from({length:1e3}).map((s,i)=>{const r=!!o[i];return c("div",{style:{borderBottom:"solid 1px #ccc",background:r?"lightpink":"#fff",display:"flex",flexDirection:"row",transition:"0.5s ease"},children:[e("div",{children:e("button",{style:{height:"100%"},onClick:()=>{t(d=>({...d,[i]:!d[i]}))},children:r?"close":"open"})}),e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:r?200:40,transition:"0.5s ease"},children:i})]},i)})})}},N={render:()=>{const o=n.useRef(0),t=(a,S)=>Array.from({length:a}).map((R,I)=>(I+=S,{id:o.current++,index:I})),[s,i]=n.useState(!1),[r,d]=n.useState(4),[f,u]=n.useState(!1),[l,v]=n.useState(!0),[p,g]=n.useState(()=>t(r,0)),b=()=>{g(l?a=>{var S,R;return f?[...t(r,(((S=a[0])==null?void 0:S.index)??0)-r),...a]:[...a,...t(r,(((R=a[a.length-1])==null?void 0:R.index)??0)+1)]}:f?a=>a.slice(r):a=>a.slice(0,-r))};n.useEffect(()=>{if(!s)return;const a=setInterval(b,500);return()=>{clearInterval(a)}},[b,s]);const m=[20,40,80,77];return c("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[c("div",{children:[c("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!f,onChange:()=>{u(!1)}}),"append"]}),c("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:f,onChange:()=>{u(!0)}}),"prepend"]}),c("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:l,onChange:()=>{v(!0)}}),"increase"]}),c("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!l,onChange:()=>{v(!1)}}),"decrease"]}),e("input",{style:{marginLeft:4},value:r,type:"number",min:1,max:1e4,step:1,onChange:a=>{d(Number(a.target.value))}})]}),c("div",{children:[c("label",{style:{marginRight:16},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:s,onChange:()=>{i(a=>!a)}}),"auto"]}),e("button",{onClick:()=>{b()},children:"update"})]}),e(h,{style:{flex:1},shift:!!f,children:p.map(a=>e("div",{style:{height:m[Math.abs(a.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:a.index},a.id))})]})}},Te=n.forwardRef(({children:o,attrs:t,height:s},i)=>e("div",{ref:i,...t,children:e("ul",{style:{position:"relative",height:s,margin:0},children:o})})),Ae=n.forwardRef(({children:o,style:t},s)=>e("li",{ref:s,style:{...t,marginLeft:30},children:o})),D={render:()=>c("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e("div",{style:{padding:4},children:"header"}),e(h,{style:{flex:1,background:"#fff"},components:{Root:Te,Item:Ae},overscan:20,children:Array.from({length:1e3}).map((o,t)=>t)})]})};var U,G,z;L.parameters={...L.parameters,docs:{...(U=L.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...(z=(G=L.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var P,j,$;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...($=(j=w.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var J,W,K;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(K=(W=T.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var q,Q,X;A.parameters={...A.parameters,docs:{...(q=A.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(X=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,re;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(te=V.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ie,oe;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ce,ae,le;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
      await delay(1000);
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
}`,...(le=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var de,ue,he;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
    const ref = useRef<VListHandle>(null);
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
    return <VList ref={ref} style={{
      flex: 1
    }} shift={shifting ? true : false} onRangeChange={async (start, end) => {
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
        {/* // TODO support the case when spinner is at index 0
         <Spinner
          key="head"
          style={startFetching ? undefined : { visibility: "hidden" }}
         /> */}
        {items}
        <Spinner key="foot" style={endFetching ? undefined : {
        visibility: "hidden"
      }} />
      </VList>;
  }
}`,...(he=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var fe,ge,pe;H.parameters={...H.parameters,docs:{...(fe=H.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(pe=(ge=H.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var me,ye,ve;O.parameters={...O.parameters,docs:{...(me=O.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ve=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var be,Se,xe;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
        <VList style={{
        flex: 1
      }} shift={prepend ? true : false}>
          {rows.map(d => <div key={d.id} style={{
          height: heights[Math.abs(d.index) % 4],
          borderBottom: "solid 1px #ccc",
          background: "#fff"
        }}>
              {d.index}
            </div>)}
        </VList>
      </div>;
  }
}`,...(xe=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var Re,Ce,Ie;D.parameters={...D.parameters,docs:{...(Re=D.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ie=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};const De=["Default","Horizontal","PaddingAndMargin","Reverse","Sticky","ScrollTo","ScrollRestoration","InfiniteScrolling","BiDirectionalInfiniteScrolling","Callbacks","WithState","IncreasingItems","Ul"];export{F as BiDirectionalInfiniteScrolling,H as Callbacks,L as Default,w as Horizontal,N as IncreasingItems,B as InfiniteScrolling,T as PaddingAndMargin,A as Reverse,E as ScrollRestoration,V as ScrollTo,_ as Sticky,D as Ul,O as WithState,De as __namedExportsOrder,Ne as default};
//# sourceMappingURL=VList.stories-39c21915.js.map
