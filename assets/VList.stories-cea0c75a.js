import{j as e,a,F as _e}from"./jsx-runtime-c3d7f245.js";import{r as n}from"./index-c6dae603.js";import{S as Le,d as Ae}from"./common-4271bb5e.js";import{V as h}from"./VList-daa55aba.js";import"./useRerender-0f8f5330.js";import"./ListItem-cf523f73.js";import"./index-eb008d06.js";const Ge={component:h},k=r=>{const t=[20,40,80,77];return Array.from({length:r}).map((s,o)=>e("div",{style:{height:t[o%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:o},o))},w={render:()=>e(h,{style:{height:"100vh"},children:k(1e3)})},Be=r=>Array.from({length:r}).map((t,s)=>a("div",{style:{width:s%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",s]},s)),T={render:()=>e("div",{style:{padding:10},children:e(h,{style:{width:"100%",height:200},horizontal:!0,children:Be(1e3)})})},L={render:()=>e(h,{style:{width:400,height:400,padding:"80px 20px",background:"lightgray"},children:Array.from({length:1e3}).map((r,t)=>e("div",{style:{height:100,borderRadius:8,margin:10,padding:10,background:"white"},children:t},t))})},A={render:()=>{const r=n.useRef(null);return n.useEffect(()=>{var t;(t=r.current)==null||t.scrollToIndex(999)},[]),e(h,{ref:r,style:{height:"100vh"},reverse:!0,children:k(1e3)})}},_={render:()=>{const r="item";return a(_e,{children:[e(h,{style:{height:"100vh"},children:Array.from({length:1e3}).map((t,s)=>e("div",{className:r,style:{borderBottom:"solid 1px #ccc",background:"#fff"},children:s},s))}),e("style",{children:`
          .${r} {
            height: 40px;

            @media (max-width: 1024px) {
              height: 80px;
            }
            @media (max-width: 700px) {
              height: 160px;
            }
            @media (max-width: 400px) {
              height: 320px;
            }
          }
        `})]})}},B={render:()=>e(h,{style:{height:"100vh"},overscan:1,children:Array.from({length:100}).map((r,t)=>e("div",{style:{borderBottom:"solid 1px #ccc"},children:Array.from({length:10}).map((s,o)=>{const i=o===0;return e("div",{style:{height:60,background:"#fff",...i&&{top:0,height:30,position:"sticky",borderBottom:"solid 1px #ccc"}},children:i?t:`${t} - ${o}`},o)})},t))})},E={render:()=>{const[t,s]=n.useState(567),[o,i]=n.useState("start"),[d,f]=n.useState(1e3),g=n.useRef(null);return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{children:[e("input",{type:"number",value:t,onChange:l=>{s(Number(l.target.value))}}),e("button",{onClick:()=>{var l;(l=g.current)==null||l.scrollToIndex(t,o)},children:"scroll to index"}),e("button",{onClick:()=>{s(Math.round(1e3*Math.random()))},children:"randomize"}),a("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:o==="start",onChange:()=>{i("start")}}),"start"]}),a("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:o==="center",onChange:()=>{i("center")}}),"center"]}),a("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:o==="end",onChange:()=>{i("end")}}),"end"]})]}),e("div",{children:a("div",{children:[e("input",{type:"number",value:d,onChange:l=>{f(Number(l.target.value))}}),e("button",{onClick:()=>{var l;(l=g.current)==null||l.scrollTo(d)},children:"scroll to offset"}),e("button",{onClick:()=>{var l;(l=g.current)==null||l.scrollBy(d)},children:"scroll by offset"})]})}),e(h,{ref:g,style:{flex:1},children:k(1e3)})]})}},Ee=({id:r})=>{const t="list-cache-"+r,s=n.useRef(null),[o,i]=n.useMemo(()=>{const d=sessionStorage.getItem(t);return d?JSON.parse(d):[]},[]);return n.useEffect(()=>{if(!s.current)return;const d=s.current;return o&&d.scrollTo(o),()=>{sessionStorage.setItem(t,JSON.stringify([d.scrollOffset,d.cache]))}},[]),e(h,{ref:s,cache:i,style:{height:"100vh"},children:k(1e3)})},V={render:()=>{const[r,t]=n.useState(!0),[s,o]=n.useState("1");return a("div",{children:[e("button",{onClick:()=>{t(i=>!i)},children:r?"hide":"show"}),["1","2","3"].map(i=>a("label",{children:[e("input",{type:"radio",checked:s===i,onChange:()=>{o(i)}}),i]},i)),r&&e(Ee,{id:s},s)]})}},F={render:()=>{const r=(p,m=0)=>{const u=[20,40,80,77];return Array.from({length:p}).map((y,v)=>(v+=m,e("div",{style:{height:u[v%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:v},v)))},[t,s]=n.useState(!1),o=async()=>{s(!0),await Ae(1e3),s(!1)},i=100,[d,f]=n.useState(()=>r(i)),g=n.useRef(-1),l=d.length;return a(h,{style:{flex:1},onRangeChange:async(p,m)=>{m+50>l&&g.current<l&&(g.current=l,await o(),f(u=>[...u,...r(i,u.length)]))},children:[d,t&&e(Le,{})]})}},O={render:()=>{const r=n.useRef(0),t=b=>{const I=[20,40,80,77];return Array.from({length:b}).map(()=>{const S=r.current++;return e("div",{style:{height:I[S%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:S},S)})},[s,o]=n.useState(!1),[i,d]=n.useState(!1),[f,g]=n.useState(!1),l=async(b=!1)=>{o(b);const I=b?d:g;I(!0),await Ae(1e3),I(!1)},p=n.useRef(null),m=100,[u,y]=n.useState(()=>t(m*2)),v=50,c=u.length,x=n.useRef(-1),R=n.useRef(-1),C=n.useRef(!1);return n.useEffect(()=>{var b;(b=p.current)==null||b.scrollToIndex(u.length/2+1),C.current=!0},[]),a(h,{ref:p,style:{flex:1},shift:!!s,onRangeChange:async(b,I)=>{C.current&&(I+v>c&&R.current<c?(R.current=c,await l(),y(S=>[...S,...t(m)])):b-v<0&&x.current<c&&(x.current=c,await l(!0),y(S=>[...t(m).reverse(),...S])))},children:[u,e(Le,{style:f?void 0:{visibility:"hidden"}},"foot")]})}},H={render:()=>{const r=n.useRef(null),t=n.useState(()=>k(1e3))[0],[s,o]=n.useState(0),[i,d]=n.useState(!1),[f,g]=n.useState([-1,-1]),[l,p]=n.useState(!1),[m,u]=n.useState(!1);return n.useEffect(()=>{r.current&&(r.current.scrollOffset===0?p(!0):p(!1),r.current.scrollOffset-r.current.scrollSize+r.current.viewportSize>=-1.5?u(!0):u(!1))},[s]),a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:[a("div",{children:["scrollTop: ",s]}),a("div",{children:["scrolling: ",i?"true":"false"]}),a("div",{children:["index: (",f[0],", ",f[1],")"]}),a("div",{children:["at top: ",l?"true":"false"]}),a("div",{children:["at bottom: ",m?"true":"false"]})]}),e(h,{ref:r,style:{flex:1},onScroll:y=>{n.startTransition(()=>{o(y),d(!0)})},onScrollStop:()=>{n.startTransition(()=>{d(!1)})},onRangeChange:async(y,v)=>{n.startTransition(()=>{g([y,v])})},children:t})]})}},N={render:()=>{const[r,t]=n.useState({0:!0,3:!0,6:!0,9:!0,12:!0});return e(h,{style:{height:"100vh"},children:Array.from({length:1e3}).map((s,o)=>{const i=!!r[o];return a("div",{style:{borderBottom:"solid 1px #ccc",background:i?"lightpink":"#fff",display:"flex",flexDirection:"row",transition:"0.5s ease"},children:[e("div",{children:e("button",{style:{height:"100%"},onClick:()=>{t(d=>({...d,[o]:!d[o]}))},children:i?"close":"open"})}),e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:i?200:40,transition:"0.5s ease"},children:o})]},o)})})}},D={render:()=>{const r=n.useRef(0),t=(c,x)=>Array.from({length:c}).map((R,C)=>(C+=x,{id:r.current++,index:C})),[s,o]=n.useState(!1),[i,d]=n.useState(4),[f,g]=n.useState(!1),[l,p]=n.useState(!0),[m,u]=n.useState(()=>t(i,0)),y=()=>{u(l?c=>{var x,R;return f?[...t(i,(((x=c[0])==null?void 0:x.index)??0)-i),...c]:[...c,...t(i,(((R=c[c.length-1])==null?void 0:R.index)??0)+1)]}:f?c=>c.slice(i):c=>c.slice(0,-i))};n.useEffect(()=>{if(!s)return;const c=setInterval(y,500);return()=>{clearInterval(c)}},[y,s]);const v=[20,40,80,77];return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{children:[a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!f,onChange:()=>{g(!1)}}),"append"]}),a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:f,onChange:()=>{g(!0)}}),"prepend"]}),a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:l,onChange:()=>{p(!0)}}),"increase"]}),a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!l,onChange:()=>{p(!1)}}),"decrease"]}),e("input",{style:{marginLeft:4},value:i,type:"number",min:1,max:1e4,step:1,onChange:c=>{d(Number(c.target.value))}})]}),a("div",{children:[a("label",{style:{marginRight:16},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:s,onChange:()=>{o(c=>!c)}}),"auto"]}),e("button",{onClick:()=>{y()},children:"update"})]}),e(h,{style:{flex:1},shift:!!f,children:m.map(c=>e("div",{style:{height:v[Math.abs(c.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:c.index},c.id))})]})}},Ve=n.forwardRef(({children:r,attrs:t,height:s},o)=>e("div",{ref:o,...t,children:e("ul",{style:{position:"relative",height:s,margin:0,overflow:"hidden"},children:r})})),Fe=n.forwardRef(({children:r,style:t},s)=>e("li",{ref:s,style:{...t,marginLeft:30},children:r})),M={render:()=>a("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e("div",{style:{padding:4},children:"header"}),e(h,{style:{flex:1,background:"#fff"},components:{Root:Ve,Item:Fe},overscan:20,children:Array.from({length:1e3}).map((r,t)=>t)})]})};var U,z,G;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...(G=(z=w.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var P,j,$;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: 10
    }}>
        <VList style={{
        width: "100%",
        height: 200
      }} horizontal>
          {createColumns(1000)}
        </VList>
      </div>;
  }
}`,...($=(j=T.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var J,W,K;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(K=(W=L.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var X,q,Q;A.parameters={...A.parameters,docs:{...(X=A.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<VListHandle>(null);
    useEffect(() => {
      ref.current?.scrollToIndex(999);
    }, []);
    return <VList ref={ref} style={{
      height: "100vh"
    }} reverse>
        {createRows(1000)}
      </VList>;
  }
}`,...(Q=(q=A.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var Y,Z,ee;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const itemClass = "item";
    return <>
        <VList style={{
        height: "100vh"
      }}>
          {Array.from({
          length: 1000
        }).map((_, i) => {
          return <div key={i} className={itemClass} style={{
            borderBottom: "solid 1px #ccc",
            background: "#fff"
          }}>
                {i}
              </div>;
        })}
        </VList>
        <style>{\`
          .\${itemClass} {
            height: 40px;

            @media (max-width: 1024px) {
              height: 80px;
            }
            @media (max-width: 700px) {
              height: 160px;
            }
            @media (max-width: 400px) {
              height: 320px;
            }
          }
        \`}</style>
      </>;
  }
}`,...(ee=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,re;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }} overscan={1}>
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
}`,...(re=(te=B.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,oe,ie;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
          }} checked={scrollIndexAlign === "center"} onChange={() => {
            setScrollToIndexAlign("center");
          }} />
            center
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
}`,...(ie=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ae,ce,le;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(le=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,he;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(he=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var fe,ge,pe;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(pe=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var me,ye,ve;H.parameters={...H.parameters,docs:{...(me=H.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<VListHandle>(null);
    const items = useState(() => createRows(1000))[0];
    const [position, setPosition] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const [range, setRange] = useState([-1, -1]);
    const [isAtTop, setIsAtTop] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);
    useEffect(() => {
      if (!ref.current) return;
      if (ref.current.scrollOffset === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
      if (ref.current.scrollOffset - ref.current.scrollSize + ref.current.viewportSize >=
      // FIXME: The sum may not be 0 because of sub-pixel value when browser's window.devicePixelRatio has decimal value
      -1.5) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    }, [position]);
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
          <div>at top: {isAtTop ? "true" : "false"}</div>
          <div>at bottom: {isAtBottom ? "true" : "false"}</div>
        </div>
        <VList ref={ref} style={{
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
}`,...(ve=(ye=H.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var be,xe,Se;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Se=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Re,Ie,Ce;D.parameters={...D.parameters,docs:{...(Re=D.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ce=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var ke,we,Te;M.parameters={...M.parameters,docs:{...(ke=M.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Te=(we=M.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};const Pe=["Default","Horizontal","PaddingAndMargin","Reverse","Responsive","Sticky","ScrollTo","ScrollRestoration","InfiniteScrolling","BiDirectionalInfiniteScrolling","Statuses","WithState","IncreasingItems","Ul"];export{O as BiDirectionalInfiniteScrolling,w as Default,T as Horizontal,D as IncreasingItems,F as InfiniteScrolling,L as PaddingAndMargin,_ as Responsive,A as Reverse,V as ScrollRestoration,E as ScrollTo,H as Statuses,B as Sticky,M as Ul,N as WithState,Pe as __namedExportsOrder,Ge as default};
//# sourceMappingURL=VList.stories-cea0c75a.js.map
