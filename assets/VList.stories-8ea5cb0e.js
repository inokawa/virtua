import{j as e,a as l}from"./jsx-runtime-c3d7f245.js";import{r as o}from"./index-c6dae603.js";import{S as he}from"./components-951de649.js";import{V as u}from"./VList-f2e612c3.js";import"./Window-9f94ab1e.js";import"./index-eb008d06.js";import"./ListItem-404fc32d.js";const ke={component:u},p=s=>{const n=[20,40,80,77];return Array.from({length:s}).map((r,t)=>e("div",{style:{height:n[t%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:t},t))},y={render:()=>e(u,{style:{height:"100vh"},children:p(1e3)})},_=s=>Array.from({length:s}).map((n,r)=>l("div",{style:{width:r%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",r]},r)),v={render:()=>l("div",{children:[l("div",{style:{padding:10,direction:"ltr"},children:[e("div",{children:"ltr"}),e(u,{style:{width:"100%",height:200},horizontal:!0,children:_(1e3)})]}),l("div",{style:{padding:10,direction:"rtl"},children:[e("div",{children:"rtl"}),e(u,{style:{width:"100%",height:200},horizontal:!0,mode:"rtl",children:_(1e3)})]})]})},b={render:()=>e(u,{style:{width:400,height:400,padding:"80px 20px",background:"lightgray"},children:Array.from({length:1e3}).map((s,n)=>e("div",{style:{height:100,borderRadius:8,margin:10,padding:10,background:"white"},children:n},n))})},S={render:()=>{const s=o.useRef(null);return o.useEffect(()=>{var n;(n=s.current)==null||n.scrollToIndex(999)},[]),e(u,{ref:s,style:{height:"100vh"},mode:"reverse",children:p(1e3)})}},x={render:()=>e(u,{style:{height:"100vh"},children:Array.from({length:100}).map((s,n)=>e("div",{style:{borderBottom:"solid 1px #ccc"},children:Array.from({length:10}).map((r,t)=>{const i=t===0;return e("div",{style:{height:60,background:"#fff",...i&&{top:0,height:30,position:"sticky",borderBottom:"solid 1px #ccc"}},children:i?n:`${n} - ${t}`},t)})},n))})},T={render:()=>{const[n,r]=o.useState(567),[t,i]=o.useState(1e3),c=o.useRef(null);return l("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[l("div",{children:[e("input",{type:"number",value:n,onChange:a=>{r(Number(a.target.value))}}),e("button",{onClick:()=>{var a;(a=c.current)==null||a.scrollToIndex(n)},children:"scroll to index"}),e("button",{onClick:()=>{r(Math.round(1e3*Math.random()))},children:"randomize"})]}),e("div",{children:l("div",{children:[e("input",{type:"number",value:t,onChange:a=>{i(Number(a.target.value))}}),e("button",{onClick:()=>{var a;(a=c.current)==null||a.scrollTo(t)},children:"scroll to offset"}),e("button",{onClick:()=>{var a;(a=c.current)==null||a.scrollBy(t)},children:"scroll by offset"})]})}),e(u,{ref:c,style:{flex:1},children:p(1e3)})]})}},fe=({id:s})=>{const n="list-cache-"+s,r=o.useRef(null),[t,i]=o.useMemo(()=>{const c=sessionStorage.getItem(n);return c?JSON.parse(c):[]},[]);return o.useEffect(()=>{if(!r.current)return;const c=r.current;return t&&c.scrollTo(t),()=>{sessionStorage.setItem(n,JSON.stringify([c.scrollOffset,c.cache]))}},[]),e(u,{ref:r,cache:i,style:{height:"100vh"},children:p(1e3)})},w={render:()=>{const[s,n]=o.useState(!0),[r,t]=o.useState("1");return l("div",{children:[e("button",{onClick:()=>{n(i=>!i)},children:s?"hide":"show"}),["1","2","3"].map(i=>l("label",{children:[e("input",{type:"radio",checked:r===i,onChange:()=>{t(i)}}),i]},i)),s&&e(fe,{id:r},r)]})}},k={render:()=>{const s=(d,g=0)=>{const f=[20,40,80,77];return Array.from({length:d}).map((me,m)=>(m+=g,e("div",{style:{height:f[m%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:m},m)))},[n,r]=o.useState(!1),t=async()=>{r(!0),await new Promise(d=>setTimeout(d,1e3)),r(!1)},i=100,[c,a]=o.useState(()=>s(i)),h=o.useRef(-1);return l(u,{style:{flex:1},onRangeChange:async({end:d,count:g})=>{d+50>g&&h.current<g&&(h.current=g,await t(),a(f=>[...f,...s(i,f.length)]))},children:[c,e(he,{show:n})]})}},C={render:()=>{const s=o.useState(()=>p(1e3))[0],[n,r]=o.useState(0),[t,i]=o.useState(!1),[c,a]=o.useState([-1,-1]);return l("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[l("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:[l("div",{children:["scrollTop: ",n]}),l("div",{children:["scrolling: ",t?"true":"false"]}),l("div",{children:["index: (",c[0],", ",c[1],")"]})]}),e(u,{style:{flex:1},onScroll:h=>{o.startTransition(()=>{r(h),i(!0)})},onScrollStop:()=>{o.startTransition(()=>{i(!1)})},onRangeChange:async({start:h,end:d})=>{o.startTransition(()=>{a([h,d])})},children:s})]})}},L={render:()=>{const[s,n]=o.useState({0:!0,3:!0,6:!0,9:!0,12:!0});return e(u,{style:{height:"100vh"},children:Array.from({length:1e3}).map((r,t)=>{const i=!!s[t];return l("div",{style:{borderBottom:"solid 1px #ccc",background:i?"lightpink":"#fff",display:"flex",flexDirection:"row",transition:"0.5s ease"},children:[e("div",{children:e("button",{style:{height:"100%"},onClick:()=>{n(c=>({...c,[t]:!c[t]}))},children:i?"close":"open"})}),e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:i?200:40,transition:"0.5s ease"},children:t})]},t)})})}},R={render:()=>{const n=(h,d)=>Array.from({length:h}).map((g,f)=>(f+=d,f)),[r,t]=o.useState(!1),[i,c]=o.useState(()=>n(4,0));o.useEffect(()=>{const h=setInterval(()=>{c(d=>r?[...n(4,d[0]-4),...d]:[...d,...n(4,d[d.length-1]+1)])},500);return()=>{clearInterval(h)}});const a=[20,40,80,77];return l("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[l("div",{children:[l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!r,onChange:()=>{t(!1)}}),"append"]}),l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:r,onChange:()=>{t(!0)}}),"prepend"]})]}),e(u,{style:{flex:1},children:i.map((h,d)=>e("div",{style:{height:a[d%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:h},h))})]})}},ge=o.forwardRef(({children:s,attrs:n,height:r},t)=>e("div",{ref:t,...n,children:e("ul",{style:{position:"relative",height:r,margin:0},children:s})})),pe=o.forwardRef(({children:s,style:n},r)=>e("li",{ref:r,style:{...n,marginLeft:30},children:s})),I={render:()=>l("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e("div",{style:{padding:4},children:"header"}),e(u,{style:{flex:1,background:"#fff"},element:ge,itemElement:pe,overscan:20,children:Array.from({length:1e3}).map((s,n)=>n)})]})};var A,H,B;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...(B=(H=y.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var E,V,N;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(V=v.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var G,O,D;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(D=(O=b.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var M,P,z;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(z=(P=S.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var U,j,F;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(F=(j=x.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var $,J,W;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const LENGTH = 1000;
    const [scrollIndex, setScrollIndex] = useState(567);
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
          ref.current?.scrollToIndex(scrollIndex);
        }}>
            scroll to index
          </button>
          <button onClick={() => {
          setScrollIndex(Math.round(LENGTH * Math.random()));
        }}>
            randomize
          </button>
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
}`,...(W=(J=T.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var K,q,Q;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(q=w.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var X,Y,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
    return <VList style={{
      flex: 1
    }} onRangeChange={async ({
      end,
      count
    }) => {
      if (end + 50 > count && fetchedCountRef.current < count) {
        fetchedCountRef.current = count;
        await fetchItems();
        setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT, prev.length)]);
      }
    }}>
        {items}
        {/* Now hide spinner without unmounting because onRangeChange is called twice due to item length change */}
        <Spinner show={fetching} />
      </VList>;
  }
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
      }} onRangeChange={async ({
        start,
        end
      }) => {
        startTransition(() => {
          setRange([start, end]);
        });
      }}>
          {items}
        </VList>
      </div>;
  }
}`,...(te=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,se,oe;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(se=L.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ce,le;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ae,de,ue;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
      }} element={UlList} itemElement={Li} overscan={20}>
          {Array.from({
          length: 1000
        }).map((_, i) => i)}
        </VList>
      </div>;
  }
}`,...(ue=(de=I.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const Ce=["Default","Horizontal","PaddingAndMargin","Reverse","Sticky","ScrollTo","ScrollRestoration","InfiniteScrolling","Callbacks","WithState","IncreasingItems","Ul"];export{C as Callbacks,y as Default,v as Horizontal,R as IncreasingItems,k as InfiniteScrolling,b as PaddingAndMargin,S as Reverse,w as ScrollRestoration,T as ScrollTo,x as Sticky,I as Ul,L as WithState,Ce as __namedExportsOrder,ke as default};
//# sourceMappingURL=VList.stories-8ea5cb0e.js.map
