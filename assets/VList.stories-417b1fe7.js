import{j as e,a as l}from"./jsx-runtime-c3d7f245.js";import{r as i}from"./index-c6dae603.js";import{S as he}from"./components-951de649.js";import{V as u}from"./VList-201d803e.js";import"./Window-a2af8e74.js";import"./index-eb008d06.js";import"./ListItem-24126322.js";const ke={component:u},m=s=>{const n=[20,40,80,77];return Array.from({length:s}).map((r,t)=>e("div",{style:{height:n[t%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:t},t))},y={render:()=>e(u,{style:{height:"100vh"},children:m(1e3)})},_=s=>Array.from({length:s}).map((n,r)=>l("div",{style:{width:r%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",r]},r)),v={render:()=>l("div",{children:[l("div",{style:{padding:10,direction:"ltr"},children:[e("div",{children:"ltr"}),e(u,{style:{width:"100%",height:200},horizontal:!0,children:_(1e3)})]}),l("div",{style:{padding:10,direction:"rtl"},children:[e("div",{children:"rtl"}),e(u,{style:{width:"100%",height:200},horizontal:!0,mode:"rtl",children:_(1e3)})]})]})},b={render:()=>e(u,{style:{width:400,height:400,padding:"80px 20px",background:"lightgray"},children:Array.from({length:1e3}).map((s,n)=>e("div",{style:{height:100,borderRadius:8,margin:10,padding:10,background:"white"},children:n},n))})},x={render:()=>{const s=i.useRef(null);return i.useEffect(()=>{var n;(n=s.current)==null||n.scrollToIndex(999)},[]),e(u,{ref:s,style:{height:"100vh"},mode:"reverse",children:m(1e3)})}},S={render:()=>e(u,{style:{height:"100vh"},children:Array.from({length:100}).map((s,n)=>e("div",{style:{borderBottom:"solid 1px #ccc"},children:Array.from({length:10}).map((r,t)=>{const o=t===0;return e("div",{style:{height:60,background:"#fff",...o&&{top:0,height:30,position:"sticky",borderBottom:"solid 1px #ccc"}},children:o?n:`${n} - ${t}`},t)})},n))})},w={render:()=>{const[n,r]=i.useState(567),[t,o]=i.useState(1e3),c=i.useRef(null);return l("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[l("div",{children:[e("input",{type:"number",value:n,onChange:a=>{r(Number(a.target.value))}}),e("button",{onClick:()=>{var a;(a=c.current)==null||a.scrollToIndex(n)},children:"scroll to index"}),e("button",{onClick:()=>{r(Math.round(1e3*Math.random()))},children:"randomize"})]}),e("div",{children:l("div",{children:[e("input",{type:"number",value:t,onChange:a=>{o(Number(a.target.value))}}),e("button",{onClick:()=>{var a;(a=c.current)==null||a.scrollTo(t)},children:"scroll to offset"}),e("button",{onClick:()=>{var a;(a=c.current)==null||a.scrollBy(t)},children:"scroll by offset"})]})}),e(u,{ref:c,style:{flex:1},children:m(1e3)})]})}},fe=({id:s})=>{const n="list-cache-"+s,r=i.useRef(null),[t,o]=i.useMemo(()=>{const c=sessionStorage.getItem(n);return c?JSON.parse(c):[]},[]);return i.useEffect(()=>{if(!r.current)return;const c=r.current;return t&&c.scrollTo(t),()=>{sessionStorage.setItem(n,JSON.stringify([c.scrollOffset,c.cache]))}},[]),e(u,{ref:r,cache:o,style:{height:"100vh"},children:m(1e3)})},C={render:()=>{const[s,n]=i.useState(!0),[r,t]=i.useState("1");return l("div",{children:[e("button",{onClick:()=>{n(o=>!o)},children:s?"hide":"show"}),["1","2","3"].map(o=>l("label",{children:[e("input",{type:"radio",checked:r===o,onChange:()=>{t(o)}}),o]},o)),s&&e(fe,{id:r},r)]})}},k={render:()=>{const s=(d,g=0)=>{const f=[20,40,80,77];return Array.from({length:d}).map((pe,p)=>(p+=g,e("div",{style:{height:f[p%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:p},p)))},[n,r]=i.useState(!1),t=async()=>{r(!0),await new Promise(d=>setTimeout(d,1e3)),r(!1)},o=100,[c,a]=i.useState(()=>s(o)),h=i.useRef(-1);return l(u,{style:{flex:1},onRangeChange:async({end:d,count:g})=>{d+50>g&&h.current<g&&(h.current=g,await t(),a(f=>[...f,...s(o,f.length)]))},children:[c,e(he,{show:n})]})}},L={render:()=>{const s=i.useState(()=>m(1e3))[0],[n,r]=i.useState([-1,-1]);return l("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[l("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:["items: ",s.length," index: (",n[0],", ",n[1],")"]}),e(u,{style:{flex:1},onRangeChange:async({start:t,end:o})=>{i.startTransition(()=>{r([t,o])})},children:s})]})}},R={render:()=>{const[s,n]=i.useState({0:!0,3:!0,6:!0,9:!0,12:!0});return e(u,{style:{height:"100vh"},children:Array.from({length:1e3}).map((r,t)=>{const o=!!s[t];return l("div",{style:{borderBottom:"solid 1px #ccc",background:o?"lightpink":"#fff",display:"flex",flexDirection:"row",transition:"0.5s ease"},children:[e("div",{children:e("button",{style:{height:"100%"},onClick:()=>{n(c=>({...c,[t]:!c[t]}))},children:o?"close":"open"})}),e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:o?200:40,transition:"0.5s ease"},children:t})]},t)})})}},T={render:()=>{const n=(h,d)=>Array.from({length:h}).map((g,f)=>(f+=d,f)),[r,t]=i.useState(!1),[o,c]=i.useState(()=>n(4,0));i.useEffect(()=>{const h=setInterval(()=>{c(d=>r?[...n(4,d[0]-4),...d]:[...d,...n(4,d[d.length-1]+1)])},500);return()=>{clearInterval(h)}});const a=[20,40,80,77];return l("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[l("div",{children:[l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!r,onChange:()=>{t(!1)}}),"append"]}),l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:r,onChange:()=>{t(!0)}}),"prepend"]})]}),e(u,{style:{flex:1},children:o.map((h,d)=>e("div",{style:{height:a[d%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:h},h))})]})}},ge=i.forwardRef(({children:s,attrs:n,height:r},t)=>e("div",{ref:t,...n,children:e("ul",{style:{position:"relative",height:r,margin:0},children:s})})),me=i.forwardRef(({children:s,style:n},r)=>e("li",{ref:r,style:{...n,marginLeft:30},children:s})),I={render:()=>l("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e("div",{style:{padding:4},children:"header"}),e(u,{style:{flex:1,background:"#fff"},element:ge,itemElement:me,overscan:20,children:Array.from({length:1e3}).map((s,n)=>n)})]})};var A,H,B;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(O=b.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var M,z,P;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(P=(z=x.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var U,j,F;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(F=(j=S.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var $,J,W;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(W=(J=w.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var K,q,Q;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(q=C.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var X,Y,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;L.parameters={...L.parameters,docs:{...(ee=L.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const items = useState(() => createRows(1000))[0];
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
          items: {items.length} index: ({range[0]}, {range[1]})
        </div>
        <VList style={{
        flex: 1
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
}`,...(te=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,se,oe;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(se=R.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ce,le;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ae,de,ue;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ue=(de=I.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const Le=["Default","Horizontal","PaddingAndMargin","Reverse","Sticky","ScrollTo","ScrollRestoration","InfiniteScrolling","RangeChange","WithState","IncreasingItems","Ul"];export{y as Default,v as Horizontal,T as IncreasingItems,k as InfiniteScrolling,b as PaddingAndMargin,L as RangeChange,x as Reverse,C as ScrollRestoration,w as ScrollTo,S as Sticky,I as Ul,R as WithState,Le as __namedExportsOrder,ke as default};
//# sourceMappingURL=VList.stories-417b1fe7.js.map
