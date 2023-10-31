import{j as e,a,F as Fe}from"./jsx-runtime-c3d7f245.js";import{r as n}from"./index-c6dae603.js";import{S as Ve,d as Ee}from"./common-4271bb5e.js";import{V as f}from"./VList-bf948144.js";import"./useRerender-cc948b6e.js";import"./ListItem-c68ff6bb.js";import"./index-eb008d06.js";const Ke={component:f},w=r=>{const t=[20,40,80,77];return Array.from({length:r}).map((s,i)=>e("div",{style:{height:t[i%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:i},i))},C={render:()=>e(f,{style:{height:"100vh"},children:w(1e3)})},Oe=r=>Array.from({length:r}).map((t,s)=>a("div",{style:{width:s%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",s]},s)),L={render:()=>e("div",{style:{padding:10},children:e(f,{style:{width:"100%",height:200},horizontal:!0,children:Oe(1e3)})})},T={render:()=>e(f,{style:{width:400,height:400,padding:"80px 20px",background:"lightgray"},children:Array.from({length:1e3}).map((r,t)=>e("div",{style:{height:100,borderRadius:8,margin:10,padding:10,background:"white"},children:t},t))})},A={render:()=>{const r=n.useRef(null);return n.useEffect(()=>{var t;(t=r.current)==null||t.scrollToIndex(999)},[]),e(f,{ref:r,style:{height:"100vh"},reverse:!0,children:w(1e3)})}},_={render:()=>{const r="item";return a(Fe,{children:[e(f,{style:{height:"100vh"},children:Array.from({length:1e3}).map((t,s)=>e("div",{className:r,style:{borderBottom:"solid 1px #ccc",background:"#fff"},children:s},s))}),e("style",{children:`
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
        `})]})}},B={render:()=>e(f,{style:{height:"100vh"},overscan:1,children:Array.from({length:100}).map((r,t)=>e("div",{style:{borderBottom:"solid 1px #ccc"},children:Array.from({length:10}).map((s,i)=>{const o=i===0;return e("div",{style:{height:60,background:"#fff",...o&&{top:0,height:30,position:"sticky",borderBottom:"solid 1px #ccc"}},children:o?t:`${t} - ${i}`},i)})},t))})},V={render:()=>{const[t,s]=n.useState(567),[i,o]=n.useState("start"),[c,u]=n.useState(!1),[p,m]=n.useState(1e3),h=n.useRef(null);return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{children:[e("input",{type:"number",value:t,onChange:d=>{s(Number(d.target.value))}}),e("button",{onClick:()=>{var d;(d=h.current)==null||d.scrollToIndex(t,{align:i,smooth:c})},children:"scroll to index"}),e("button",{onClick:()=>{s(Math.round(1e3*Math.random()))},children:"randomize"}),a("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:i==="start",onChange:()=>{o("start")}}),"start"]}),a("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:i==="center",onChange:()=>{o("center")}}),"center"]}),a("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:i==="end",onChange:()=>{o("end")}}),"end"]}),a("label",{style:{marginLeft:4},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:c,onChange:()=>{u(d=>!d)}}),"smooth"]})]}),e("div",{children:a("div",{children:[e("input",{type:"number",value:p,onChange:d=>{m(Number(d.target.value))}}),e("button",{onClick:()=>{var d;(d=h.current)==null||d.scrollTo(p)},children:"scroll to offset"}),e("button",{onClick:()=>{var d;(d=h.current)==null||d.scrollBy(p)},children:"scroll by offset"})]})}),e(f,{ref:h,style:{flex:1},children:w(1e3)})]})}},E={render:()=>{const r=n.useRef(null),[t,s]=n.useState(-1),i=Array.from({length:1e3}).map((o,c)=>e("div",{style:{height:60,borderBottom:"solid 1px #ccc",background:t===c?"skyblue":"white",cursor:"pointer"},onClick:()=>{s(c)},children:c},c));return e(f,{ref:r,style:{height:400,width:400,margin:10},tabIndex:0,onKeyDown:o=>{if(r.current)switch(o.code){case"ArrowUp":o.preventDefault();const c=Math.max(t-1,0);s(c),r.current.scrollToIndex(c,{align:"nearest"});break;case"ArrowDown":o.preventDefault();const u=Math.min(t+1,i.length-1);s(u),r.current.scrollToIndex(u,{align:"nearest"});break}},children:i})}},He=({id:r})=>{const t="list-cache-"+r,s=n.useRef(null),[i,o]=n.useMemo(()=>{const c=sessionStorage.getItem(t);return c?JSON.parse(c):[]},[]);return n.useEffect(()=>{if(!s.current)return;const c=s.current;return i&&c.scrollTo(i),()=>{sessionStorage.setItem(t,JSON.stringify([c.scrollOffset,c.cache]))}},[]),e(f,{ref:s,cache:o,style:{height:"100vh"},children:w(1e3)})},F={render:()=>{const[r,t]=n.useState(!0),[s,i]=n.useState("1");return a("div",{children:[e("button",{onClick:()=>{t(o=>!o)},children:r?"hide":"show"}),["1","2","3"].map(o=>a("label",{children:[e("input",{type:"radio",checked:s===o,onChange:()=>{i(o)}}),o]},o)),r&&e(He,{id:s},s)]})}},O={render:()=>{const r=(h,d=0)=>{const g=[20,40,80,77];return Array.from({length:h}).map((y,v)=>(v+=d,e("div",{style:{height:g[v%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:v},v)))},[t,s]=n.useState(!1),i=async()=>{s(!0),await Ee(1e3),s(!1)},o=100,[c,u]=n.useState(()=>r(o)),p=n.useRef(-1),m=c.length;return a(f,{style:{flex:1},onRangeChange:async(h,d)=>{d+50>m&&p.current<m&&(p.current=m,await i(),u(g=>[...g,...r(o,g.length)]))},children:[c,t&&e(Ve,{})]})}},H={render:()=>{const r=n.useRef(0),t=x=>{const R=[20,40,80,77];return Array.from({length:x}).map(()=>{const S=r.current++;return e("div",{style:{height:R[S%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:S},S)})},[s,i]=n.useState(!1),[o,c]=n.useState(!1),[u,p]=n.useState(!1),m=async(x=!1)=>{i(x);const R=x?c:p;R(!0),await Ee(1e3),R(!1)},h=n.useRef(null),d=100,[g,y]=n.useState(()=>t(d*2)),v=50,l=g.length,b=n.useRef(-1),I=n.useRef(-1),k=n.useRef(!1);return n.useEffect(()=>{var x;(x=h.current)==null||x.scrollToIndex(g.length/2+1),k.current=!0},[]),a(f,{ref:h,style:{flex:1},shift:!!s,onRangeChange:async(x,R)=>{k.current&&(R+v>l&&I.current<l?(I.current=l,await m(),y(S=>[...S,...t(d)])):x-v<0&&b.current<l&&(b.current=l,await m(!0),y(S=>[...t(d).reverse(),...S])))},children:[g,e(Ve,{style:u?void 0:{visibility:"hidden"}},"foot")]})}},D={render:()=>{const r=n.useRef(null),t=n.useState(()=>w(1e3))[0],[s,i]=n.useState(0),[o,c]=n.useState(!1),[u,p]=n.useState([-1,-1]),[m,h]=n.useState(!1),[d,g]=n.useState(!1);return n.useEffect(()=>{r.current&&(r.current.scrollOffset===0?h(!0):h(!1),r.current.scrollOffset-r.current.scrollSize+r.current.viewportSize>=-1.5?g(!0):g(!1))},[s]),a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:[a("div",{children:["scrollTop: ",s]}),a("div",{children:["scrolling: ",o?"true":"false"]}),a("div",{children:["index: (",u[0],", ",u[1],")"]}),a("div",{children:["at top: ",m?"true":"false"]}),a("div",{children:["at bottom: ",d?"true":"false"]})]}),e(f,{ref:r,style:{flex:1},onScroll:y=>{n.startTransition(()=>{i(y),c(!0)})},onScrollStop:()=>{n.startTransition(()=>{c(!1)})},onRangeChange:async(y,v)=>{n.startTransition(()=>{p([y,v])})},children:t})]})}},N={render:()=>{const[r,t]=n.useState({0:!0,3:!0,6:!0,9:!0,12:!0});return e(f,{style:{height:"100vh"},children:Array.from({length:1e3}).map((s,i)=>{const o=!!r[i];return a("div",{style:{borderBottom:"solid 1px #ccc",background:o?"lightpink":"#fff",display:"flex",flexDirection:"row",transition:"0.5s ease"},children:[e("div",{children:e("button",{style:{height:"100%"},onClick:()=>{t(c=>({...c,[i]:!c[i]}))},children:o?"close":"open"})}),e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:o?200:40,transition:"0.5s ease"},children:i})]},i)})})}},M={render:()=>{const r=n.useRef(0),t=(l,b)=>Array.from({length:l}).map((I,k)=>(k+=b,{id:r.current++,index:k})),[s,i]=n.useState(!1),[o,c]=n.useState(4),[u,p]=n.useState(!1),[m,h]=n.useState(!0),[d,g]=n.useState(()=>t(o,0)),y=()=>{g(m?l=>{var b,I;return u?[...t(o,(((b=l[0])==null?void 0:b.index)??0)-o),...l]:[...l,...t(o,(((I=l[l.length-1])==null?void 0:I.index)??0)+1)]}:u?l=>l.slice(o):l=>l.slice(0,-o))};n.useEffect(()=>{if(!s)return;const l=setInterval(y,500);return()=>{clearInterval(l)}},[y,s]);const v=[20,40,80,77];return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{children:[a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!u,onChange:()=>{p(!1)}}),"append"]}),a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:u,onChange:()=>{p(!0)}}),"prepend"]}),a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:m,onChange:()=>{h(!0)}}),"increase"]}),a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!m,onChange:()=>{h(!1)}}),"decrease"]}),e("input",{style:{marginLeft:4},value:o,type:"number",min:1,max:1e4,step:1,onChange:l=>{c(Number(l.target.value))}})]}),a("div",{children:[a("label",{style:{marginRight:16},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:s,onChange:()=>{i(l=>!l)}}),"auto"]}),e("button",{onClick:()=>{y()},children:"update"})]}),e(f,{style:{flex:1},shift:!!u,children:d.map(l=>e("div",{style:{height:v[Math.abs(l.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:l.index},l.id))})]})}},De=n.forwardRef(({children:r,attrs:t,height:s},i)=>e("div",{ref:i,...t,children:e("ul",{style:{position:"relative",height:s,margin:0,overflow:"hidden"},children:r})})),Ne=n.forwardRef(({children:r,style:t},s)=>e("li",{ref:s,style:{...t,marginLeft:30},children:r})),U={render:()=>a("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e("div",{style:{padding:4},children:"header"}),e(f,{style:{flex:1,background:"#fff"},components:{Root:De,Item:Ne},overscan:20,children:Array.from({length:1e3}).map((r,t)=>t)})]})};var z,G,P;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...(P=(G=C.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var j,$,K;L.parameters={...L.parameters,docs:{...(j=L.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(K=($=L.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var J,W,X;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(W=T.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var q,Q,Y;A.parameters={...A.parameters,docs:{...(q=A.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(Y=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ne;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,se;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(re=B.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ie,ce;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const LENGTH = 1000;
    const [scrollIndex, setScrollIndex] = useState(567);
    const [scrollIndexAlign, setScrollToIndexAlign] = useState<ScrollToIndexAlign>("start");
    const [smooth, setSmooth] = useState(false);
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
          ref.current?.scrollToIndex(scrollIndex, {
            align: scrollIndexAlign,
            smooth: smooth
          });
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

          <label style={{
          marginLeft: 4
        }}>
            <input type="checkbox" style={{
            marginLeft: 4
          }} checked={smooth} onChange={() => {
            setSmooth(prev => !prev);
          }} />
            smooth
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
}`,...(ce=(ie=V.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ae,le,de;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<VListHandle>(null);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const items = Array.from({
      length: 1000
    }).map((_, i) => {
      return <div key={i} style={{
        height: 60,
        borderBottom: "solid 1px #ccc",
        background: selectedIndex === i ? "skyblue" : "white",
        cursor: "pointer"
      }} onClick={() => {
        setSelectedIndex(i);
      }}>
          {i}
        </div>;
    });
    return <VList ref={ref} style={{
      height: 400,
      width: 400,
      margin: 10
    }} tabIndex={0} onKeyDown={e => {
      if (!ref.current) return;
      switch (e.code) {
        case "ArrowUp":
          e.preventDefault();
          const prevIndex = Math.max(selectedIndex - 1, 0);
          setSelectedIndex(prevIndex);
          ref.current.scrollToIndex(prevIndex, {
            align: "nearest"
          });
          break;
        case "ArrowDown":
          e.preventDefault();
          const nextIndex = Math.min(selectedIndex + 1, items.length - 1);
          setSelectedIndex(nextIndex);
          ref.current.scrollToIndex(nextIndex, {
            align: "nearest"
          });
          break;
      }
    }}>
        {items}
      </VList>;
  }
}`,...(de=(le=E.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,he,fe;F.parameters={...F.parameters,docs:{...(ue=F.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(fe=(he=F.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ge,me,pe;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(pe=(me=O.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ye,ve,xe;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(xe=(ve=H.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var be,Se,Ie;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ie=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var Re,ke,we;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(we=(ke=N.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};var Ce,Le,Te;M.parameters={...M.parameters,docs:{...(Ce=M.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Te=(Le=M.parameters)==null?void 0:Le.docs)==null?void 0:Te.source}}};var Ae,_e,Be;U.parameters={...U.parameters,docs:{...(Ae=U.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Be=(_e=U.parameters)==null?void 0:_e.docs)==null?void 0:Be.source}}};const Je=["Default","Horizontal","PaddingAndMargin","Reverse","Responsive","Sticky","ScrollTo","Keyboard","ScrollRestoration","InfiniteScrolling","BiDirectionalInfiniteScrolling","Statuses","WithState","IncreasingItems","Ul"];export{H as BiDirectionalInfiniteScrolling,C as Default,L as Horizontal,M as IncreasingItems,O as InfiniteScrolling,E as Keyboard,T as PaddingAndMargin,_ as Responsive,A as Reverse,F as ScrollRestoration,V as ScrollTo,D as Statuses,B as Sticky,U as Ul,N as WithState,Je as __namedExportsOrder,Ke as default};
//# sourceMappingURL=VList.stories-04556d10.js.map