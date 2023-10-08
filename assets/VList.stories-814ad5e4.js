import{j as e,a}from"./jsx-runtime-c3d7f245.js";import{r as n}from"./index-c6dae603.js";import{S as Ce,d as ke}from"./common-4271bb5e.js";import{V as g}from"./VList-992cf266.js";import"./Viewport-cc3bc829.js";import"./ListItem-2642fce6.js";import"./index-eb008d06.js";const Ne={component:g},k=r=>{const t=[20,40,80,77];return Array.from({length:r}).map((s,o)=>e("div",{style:{height:t[o%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:o},o))},T={render:()=>e(g,{style:{height:"100vh"},children:k(1e3)})},Te=r=>Array.from({length:r}).map((t,s)=>a("div",{style:{width:s%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",s]},s)),w={render:()=>e("div",{style:{padding:10},children:e(g,{style:{width:"100%",height:200},horizontal:!0,children:Te(1e3)})})},L={render:()=>e(g,{style:{width:400,height:400,padding:"80px 20px",background:"lightgray"},children:Array.from({length:1e3}).map((r,t)=>e("div",{style:{height:100,borderRadius:8,margin:10,padding:10,background:"white"},children:t},t))})},A={render:()=>{const r=n.useRef(null);return n.useEffect(()=>{var t;(t=r.current)==null||t.scrollToIndex(999)},[]),e(g,{ref:r,style:{height:"100vh"},reverse:!0,children:k(1e3)})}},_={render:()=>e(g,{style:{height:"100vh"},overscan:1,children:Array.from({length:100}).map((r,t)=>e("div",{style:{borderBottom:"solid 1px #ccc"},children:Array.from({length:10}).map((s,o)=>{const i=o===0;return e("div",{style:{height:60,background:"#fff",...i&&{top:0,height:30,position:"sticky",borderBottom:"solid 1px #ccc"}},children:i?t:`${t} - ${o}`},o)})},t))})},B={render:()=>{const[t,s]=n.useState(567),[o,i]=n.useState("start"),[d,h]=n.useState(1e3),f=n.useRef(null);return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{children:[e("input",{type:"number",value:t,onChange:l=>{s(Number(l.target.value))}}),e("button",{onClick:()=>{var l;(l=f.current)==null||l.scrollToIndex(t,o)},children:"scroll to index"}),e("button",{onClick:()=>{s(Math.round(1e3*Math.random()))},children:"randomize"}),a("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:o==="start",onChange:()=>{i("start")}}),"start"]}),a("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:o==="end",onChange:()=>{i("end")}}),"end"]})]}),e("div",{children:a("div",{children:[e("input",{type:"number",value:d,onChange:l=>{h(Number(l.target.value))}}),e("button",{onClick:()=>{var l;(l=f.current)==null||l.scrollTo(d)},children:"scroll to offset"}),e("button",{onClick:()=>{var l;(l=f.current)==null||l.scrollBy(d)},children:"scroll by offset"})]})}),e(g,{ref:f,style:{flex:1},children:k(1e3)})]})}},we=({id:r})=>{const t="list-cache-"+r,s=n.useRef(null),[o,i]=n.useMemo(()=>{const d=sessionStorage.getItem(t);return d?JSON.parse(d):[]},[]);return n.useEffect(()=>{if(!s.current)return;const d=s.current;return o&&d.scrollTo(o),()=>{sessionStorage.setItem(t,JSON.stringify([d.scrollOffset,d.cache]))}},[]),e(g,{ref:s,cache:i,style:{height:"100vh"},children:k(1e3)})},E={render:()=>{const[r,t]=n.useState(!0),[s,o]=n.useState("1");return a("div",{children:[e("button",{onClick:()=>{t(i=>!i)},children:r?"hide":"show"}),["1","2","3"].map(i=>a("label",{children:[e("input",{type:"radio",checked:s===i,onChange:()=>{o(i)}}),i]},i)),r&&e(we,{id:s},s)]})}},O={render:()=>{const r=(p,m=0)=>{const u=[20,40,80,77];return Array.from({length:p}).map((y,v)=>(v+=m,e("div",{style:{height:u[v%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:v},v)))},[t,s]=n.useState(!1),o=async()=>{s(!0),await ke(1e3),s(!1)},i=100,[d,h]=n.useState(()=>r(i)),f=n.useRef(-1),l=d.length;return a(g,{style:{flex:1},onRangeChange:async(p,m)=>{m+50>l&&f.current<l&&(f.current=l,await o(),h(u=>[...u,...r(i,u.length)]))},children:[d,t&&e(Ce,{})]})}},V={render:()=>{const r=n.useRef(0),t=b=>{const I=[20,40,80,77];return Array.from({length:b}).map(()=>{const x=r.current++;return e("div",{style:{height:I[x%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:x},x)})},[s,o]=n.useState(!1),[i,d]=n.useState(!1),[h,f]=n.useState(!1),l=async(b=!1)=>{o(b);const I=b?d:f;I(!0),await ke(1e3),I(!1)},p=n.useRef(null),m=100,[u,y]=n.useState(()=>t(m*2)),v=50,c=u.length,S=n.useRef(-1),R=n.useRef(-1),C=n.useRef(!1);return n.useEffect(()=>{var b;(b=p.current)==null||b.scrollToIndex(u.length/2+1),C.current=!0},[]),a(g,{ref:p,style:{flex:1},shift:!!s,onRangeChange:async(b,I)=>{C.current&&(I+v>c&&R.current<c?(R.current=c,await l(),y(x=>[...x,...t(m)])):b-v<0&&S.current<c&&(S.current=c,await l(!0),y(x=>[...t(m).reverse(),...x])))},children:[u,e(Ce,{style:h?void 0:{visibility:"hidden"}},"foot")]})}},F={render:()=>{const r=n.useRef(null),t=n.useState(()=>k(1e3))[0],[s,o]=n.useState(0),[i,d]=n.useState(!1),[h,f]=n.useState([-1,-1]),[l,p]=n.useState(!1),[m,u]=n.useState(!1);return n.useEffect(()=>{r.current&&(r.current.scrollOffset===0?p(!0):p(!1),r.current.scrollOffset-r.current.scrollSize+r.current.viewportSize>=-1.5?u(!0):u(!1))},[s]),a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:[a("div",{children:["scrollTop: ",s]}),a("div",{children:["scrolling: ",i?"true":"false"]}),a("div",{children:["index: (",h[0],", ",h[1],")"]}),a("div",{children:["at top: ",l?"true":"false"]}),a("div",{children:["at bottom: ",m?"true":"false"]})]}),e(g,{ref:r,style:{flex:1},onScroll:y=>{n.startTransition(()=>{o(y),d(!0)})},onScrollStop:()=>{n.startTransition(()=>{d(!1)})},onRangeChange:async(y,v)=>{n.startTransition(()=>{f([y,v])})},children:t})]})}},H={render:()=>{const[r,t]=n.useState({0:!0,3:!0,6:!0,9:!0,12:!0});return e(g,{style:{height:"100vh"},children:Array.from({length:1e3}).map((s,o)=>{const i=!!r[o];return a("div",{style:{borderBottom:"solid 1px #ccc",background:i?"lightpink":"#fff",display:"flex",flexDirection:"row",transition:"0.5s ease"},children:[e("div",{children:e("button",{style:{height:"100%"},onClick:()=>{t(d=>({...d,[o]:!d[o]}))},children:i?"close":"open"})}),e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:i?200:40,transition:"0.5s ease"},children:o})]},o)})})}},N={render:()=>{const r=n.useRef(0),t=(c,S)=>Array.from({length:c}).map((R,C)=>(C+=S,{id:r.current++,index:C})),[s,o]=n.useState(!1),[i,d]=n.useState(4),[h,f]=n.useState(!1),[l,p]=n.useState(!0),[m,u]=n.useState(()=>t(i,0)),y=()=>{u(l?c=>{var S,R;return h?[...t(i,(((S=c[0])==null?void 0:S.index)??0)-i),...c]:[...c,...t(i,(((R=c[c.length-1])==null?void 0:R.index)??0)+1)]}:h?c=>c.slice(i):c=>c.slice(0,-i))};n.useEffect(()=>{if(!s)return;const c=setInterval(y,500);return()=>{clearInterval(c)}},[y,s]);const v=[20,40,80,77];return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{children:[a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!h,onChange:()=>{f(!1)}}),"append"]}),a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:h,onChange:()=>{f(!0)}}),"prepend"]}),a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:l,onChange:()=>{p(!0)}}),"increase"]}),a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!l,onChange:()=>{p(!1)}}),"decrease"]}),e("input",{style:{marginLeft:4},value:i,type:"number",min:1,max:1e4,step:1,onChange:c=>{d(Number(c.target.value))}})]}),a("div",{children:[a("label",{style:{marginRight:16},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:s,onChange:()=>{o(c=>!c)}}),"auto"]}),e("button",{onClick:()=>{y()},children:"update"})]}),e(g,{style:{flex:1},shift:!!h,children:m.map(c=>e("div",{style:{height:v[Math.abs(c.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:c.index},c.id))})]})}},Le=n.forwardRef(({children:r,attrs:t,height:s},o)=>e("div",{ref:o,...t,children:e("ul",{style:{position:"relative",height:s,margin:0,overflow:"hidden"},children:r})})),Ae=n.forwardRef(({children:r,style:t},s)=>e("li",{ref:s,style:{...t,marginLeft:30},children:r})),D={render:()=>a("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e("div",{style:{padding:4},children:"header"}),e(g,{style:{flex:1,background:"#fff"},components:{Root:Le,Item:Ae},overscan:20,children:Array.from({length:1e3}).map((r,t)=>t)})]})};var M,U,z;T.parameters={...T.parameters,docs:{...(M=T.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...(z=(U=T.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var G,P,j;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(j=(P=w.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var $,J,W;L.parameters={...L.parameters,docs:{...($=L.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(W=(J=L.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var K,X,q;A.parameters={...A.parameters,docs:{...(K=A.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(q=(X=A.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var Q,Y,Z;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,se,oe;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(se=E.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ce,ae;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ae=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var le,de,ue;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(de=V.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var he,fe,ge;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ge=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var pe,me,ye;H.parameters={...H.parameters,docs:{...(pe=H.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(me=H.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var ve,be,Se;N.parameters={...N.parameters,docs:{...(ve=N.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Se=(be=N.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var xe,Re,Ie;D.parameters={...D.parameters,docs:{...(xe=D.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ie=(Re=D.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};const De=["Default","Horizontal","PaddingAndMargin","Reverse","Sticky","ScrollTo","ScrollRestoration","InfiniteScrolling","BiDirectionalInfiniteScrolling","Statuses","WithState","IncreasingItems","Ul"];export{V as BiDirectionalInfiniteScrolling,T as Default,w as Horizontal,N as IncreasingItems,O as InfiniteScrolling,L as PaddingAndMargin,A as Reverse,E as ScrollRestoration,B as ScrollTo,F as Statuses,_ as Sticky,D as Ul,H as WithState,De as __namedExportsOrder,Ne as default};
//# sourceMappingURL=VList.stories-814ad5e4.js.map
