import{a as e,j as c}from"./jsx-runtime-e162df28.js";import{r as o}from"./index-5284b0bf.js";import{S as le}from"./components-10a25408.js";import{V as d}from"./VList-ab9e42c8.js";import"./DefaultWindow-6a281355.js";import"./index-480187bb.js";import"./ListItem-7a3a5692.js";const be={component:d},S=r=>{const n=[20,40,80,77];return Array.from({length:r}).map((s,t)=>e("div",{style:{height:n[t%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:t},t))},p={render:()=>e(d,{style:{height:"100vh"},children:S(1e3)})},_=r=>Array.from({length:r}).map((n,s)=>c("div",{style:{width:s%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",s]},s)),y={render:()=>c("div",{children:[c("div",{style:{padding:10,direction:"ltr"},children:[e("div",{children:"ltr"}),e(d,{style:{width:"100%",height:200},horizontal:!0,children:_(1e3)})]}),c("div",{style:{padding:10,direction:"rtl"},children:[e("div",{children:"rtl"}),e(d,{style:{width:"100%",height:200},horizontal:!0,mode:"rtl",children:_(1e3)})]})]})},v={render:()=>e(d,{style:{width:400,height:400,padding:"80px 20px",background:"lightgray"},children:Array.from({length:1e3}).map((r,n)=>e("div",{style:{height:100,borderRadius:8,margin:10,padding:10,background:"white"},children:n},n))})},b={render:()=>{const r=o.useRef(null);return o.useEffect(()=>{var n;(n=r.current)==null||n.scrollToIndex(999)},[]),e(d,{ref:r,style:{height:"100vh"},mode:"reverse",children:S(1e3)})}},x={render:()=>e(d,{style:{height:"100vh"},children:Array.from({length:100}).map((r,n)=>e("div",{style:{borderBottom:"solid 1px #ccc"},children:Array.from({length:10}).map((s,t)=>{const l=t===0;return e("div",{style:{height:60,background:"#fff",...l&&{top:0,height:30,position:"sticky",borderBottom:"solid 1px #ccc"}},children:l?n:`${n} - ${t}`},t)})},n))})},T={render:()=>{const[n,s]=o.useState(567),[t,l]=o.useState(1e3),u=o.useRef(null);return c("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[c("div",{children:[e("input",{type:"number",value:n,onChange:i=>{s(Number(i.target.value))}}),e("button",{onClick:()=>{var i;(i=u.current)==null||i.scrollToIndex(n)},children:"scroll to index"}),e("button",{onClick:()=>{s(Math.round(1e3*Math.random()))},children:"randomize"})]}),e("div",{children:c("div",{children:[e("input",{type:"number",value:t,onChange:i=>{l(Number(i.target.value))}}),e("button",{onClick:()=>{var i;(i=u.current)==null||i.scrollTo(t)},children:"scroll to offset"}),e("button",{onClick:()=>{var i;(i=u.current)==null||i.scrollBy(t)},children:"scroll by offset"})]})}),e(d,{ref:u,style:{flex:1},children:S(1e3)})]})}},C={render:()=>{const r=(a,g=0)=>{const f=[20,40,80,77];return Array.from({length:a}).map((ue,m)=>(m+=g,e("div",{style:{height:f[m%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:m},m)))},[n,s]=o.useState(!1),t=async()=>{s(!0),await new Promise(a=>setTimeout(a,1e3)),s(!1)},l=100,[u,i]=o.useState(()=>r(l)),h=o.useRef(-1);return c(d,{style:{flex:1},onRangeChange:async({end:a,count:g})=>{a+50>g&&h.current<g&&(h.current=g,await t(),i(f=>[...f,...r(l,f.length)]))},children:[u,e(le,{show:n})]})}},L={render:()=>{const r=o.useState(()=>S(1e3))[0],[n,s]=o.useState([-1,-1]);return c("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[c("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:["items: ",r.length," index: (",n[0],", ",n[1],")"]}),e(d,{style:{flex:1},onRangeChange:async({start:t,end:l})=>{o.startTransition(()=>{s([t,l])})},children:r})]})}},w={render:()=>{const[r,n]=o.useState({0:!0,3:!0,6:!0,9:!0,12:!0});return e(d,{style:{height:"100vh"},children:Array.from({length:1e3}).map((s,t)=>{const l=!!r[t];return c("div",{style:{borderBottom:"solid 1px #ccc",background:l?"lightpink":"#fff",display:"flex",flexDirection:"row",transition:"0.5s ease"},children:[e("div",{children:e("button",{style:{height:"100%"},onClick:()=>{n(u=>({...u,[t]:!u[t]}))},children:l?"close":"open"})}),e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:l?200:40,transition:"0.5s ease"},children:t})]},t)})})}},R={render:()=>{const n=(h,a)=>Array.from({length:h}).map((g,f)=>(f+=a,f)),[s,t]=o.useState(!1),[l,u]=o.useState(()=>n(4,0));o.useEffect(()=>{const h=setInterval(()=>{u(a=>s?[...n(4,a[0]-4),...a]:[...a,...n(4,a[a.length-1]+1)])},500);return()=>{clearInterval(h)}});const i=[20,40,80,77];return c("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[c("div",{children:[c("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!s,onChange:()=>{t(!1)}}),"append"]}),c("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:s,onChange:()=>{t(!0)}}),"prepend"]})]}),e(d,{style:{flex:1},children:l.map((h,a)=>e("div",{style:{height:i[a%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:h},h))})]})}},ae=o.forwardRef(({children:r,attrs:n,height:s},t)=>e("div",{ref:t,...n,children:e("ul",{style:{position:"relative",height:s,margin:0},children:r})})),de=o.forwardRef(({children:r,style:n},s)=>e("li",{ref:s,style:{...n,marginLeft:30},children:r})),k={render:()=>c("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e("div",{style:{padding:4},children:"header"}),e(d,{style:{flex:1,background:"#fff"},element:ae,itemElement:de,overscan:20,children:Array.from({length:1e3}).map((r,n)=>n)})]})};var A,H,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...(I=(H=p.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var B,V,E;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(E=(V=y.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var N,G,O;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(G=v.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var D,M,z;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(z=(M=b.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var P,U,j;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(j=(U=x.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var F,$,W;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(W=($=T.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var q,J,K;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(J=C.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;L.parameters={...L.parameters,docs:{...(Q=L.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=L.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,se;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(re=R.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ie,ce;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const xe=["Default","Horizontal","PaddingAndMargin","Reverse","Sticky","ScrollTo","InfiniteScrolling","RangeChange","WithState","IncreasingItems","Ul"];export{p as Default,y as Horizontal,R as IncreasingItems,C as InfiniteScrolling,v as PaddingAndMargin,L as RangeChange,b as Reverse,T as ScrollTo,x as Sticky,k as Ul,w as WithState,xe as __namedExportsOrder,be as default};
//# sourceMappingURL=VList.stories-970834db.js.map
