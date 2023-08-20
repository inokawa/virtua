import{j as e,a as l}from"./jsx-runtime-c3d7f245.js";import{r as o}from"./index-c6dae603.js";import{S as fe}from"./components-0dcd7504.js";import{V as h}from"./VList-ff82154a.js";import"./Viewport-b2c5d790.js";import"./index-eb008d06.js";import"./ListItem-8e4d9b21.js";const ke={component:h},m=i=>{const n=[20,40,80,77];return Array.from({length:i}).map((t,r)=>e("div",{style:{height:n[r%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:r},r))},v={render:()=>e(h,{style:{height:"100vh"},children:m(1e3)})},H=i=>Array.from({length:i}).map((n,t)=>l("div",{style:{width:t%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",t]},t)),b={render:()=>l("div",{children:[l("div",{style:{padding:10,direction:"ltr"},children:[e("div",{children:"ltr"}),e(h,{style:{width:"100%",height:200},horizontal:!0,children:H(1e3)})]}),l("div",{style:{padding:10,direction:"rtl"},children:[e("div",{children:"rtl"}),e(h,{style:{width:"100%",height:200},horizontal:!0,mode:"rtl",children:H(1e3)})]})]})},S={render:()=>e(h,{style:{width:400,height:400,padding:"80px 20px",background:"lightgray"},children:Array.from({length:1e3}).map((i,n)=>e("div",{style:{height:100,borderRadius:8,margin:10,padding:10,background:"white"},children:n},n))})},x={render:()=>{const i=o.useRef(null);return o.useEffect(()=>{var n;(n=i.current)==null||n.scrollToIndex(999)},[]),e(h,{ref:i,style:{height:"100vh"},mode:"reverse",children:m(1e3)})}},T={render:()=>e(h,{style:{height:"100vh"},children:Array.from({length:100}).map((i,n)=>e("div",{style:{borderBottom:"solid 1px #ccc"},children:Array.from({length:10}).map((t,r)=>{const s=r===0;return e("div",{style:{height:60,background:"#fff",...s&&{top:0,height:30,position:"sticky",borderBottom:"solid 1px #ccc"}},children:s?n:`${n} - ${r}`},r)})},n))})},L={render:()=>{const[n,t]=o.useState(567),[r,s]=o.useState("start"),[c,f]=o.useState(1e3),u=o.useRef(null);return l("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[l("div",{children:[e("input",{type:"number",value:n,onChange:a=>{t(Number(a.target.value))}}),e("button",{onClick:()=>{var a;(a=u.current)==null||a.scrollToIndex(n,r)},children:"scroll to index"}),e("button",{onClick:()=>{t(Math.round(1e3*Math.random()))},children:"randomize"}),l("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:r==="start",onChange:()=>{s("start")}}),"start"]}),l("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:r==="end",onChange:()=>{s("end")}}),"end"]})]}),e("div",{children:l("div",{children:[e("input",{type:"number",value:c,onChange:a=>{f(Number(a.target.value))}}),e("button",{onClick:()=>{var a;(a=u.current)==null||a.scrollTo(c)},children:"scroll to offset"}),e("button",{onClick:()=>{var a;(a=u.current)==null||a.scrollBy(c)},children:"scroll by offset"})]})}),e(h,{ref:u,style:{flex:1},children:m(1e3)})]})}},pe=({id:i})=>{const n="list-cache-"+i,t=o.useRef(null),[r,s]=o.useMemo(()=>{const c=sessionStorage.getItem(n);return c?JSON.parse(c):[]},[]);return o.useEffect(()=>{if(!t.current)return;const c=t.current;return r&&c.scrollTo(r),()=>{sessionStorage.setItem(n,JSON.stringify([c.scrollOffset,c.cache]))}},[]),e(h,{ref:t,cache:s,style:{height:"100vh"},children:m(1e3)})},C={render:()=>{const[i,n]=o.useState(!0),[t,r]=o.useState("1");return l("div",{children:[e("button",{onClick:()=>{n(s=>!s)},children:i?"hide":"show"}),["1","2","3"].map(s=>l("label",{children:[e("input",{type:"radio",checked:t===s,onChange:()=>{r(s)}}),s]},s)),i&&e(pe,{id:t},t)]})}},k={render:()=>{const i=(g,d=0)=>{const p=[20,40,80,77];return Array.from({length:g}).map((_,y)=>(y+=d,e("div",{style:{height:p[y%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:y},y)))},[n,t]=o.useState(!1),r=async()=>{t(!0),await new Promise(g=>setTimeout(g,1e3)),t(!1)},s=100,[c,f]=o.useState(()=>i(s)),u=o.useRef(-1),a=c.length;return l(h,{style:{flex:1},onRangeChange:async(g,d)=>{d+50>a&&u.current<a&&(u.current=a,await r(),f(p=>[...p,...i(s,p.length)]))},children:[c,n&&e(fe,{})]})}},I={render:()=>{const i=o.useState(()=>m(1e3))[0],[n,t]=o.useState(0),[r,s]=o.useState(!1),[c,f]=o.useState([-1,-1]);return l("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[l("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:[l("div",{children:["scrollTop: ",n]}),l("div",{children:["scrolling: ",r?"true":"false"]}),l("div",{children:["index: (",c[0],", ",c[1],")"]})]}),e(h,{style:{flex:1},onScroll:u=>{o.startTransition(()=>{t(u),s(!0)})},onScrollStop:()=>{o.startTransition(()=>{s(!1)})},onRangeChange:async(u,a)=>{o.startTransition(()=>{f([u,a])})},children:i})]})}},R={render:()=>{const[i,n]=o.useState({0:!0,3:!0,6:!0,9:!0,12:!0});return e(h,{style:{height:"100vh"},children:Array.from({length:1e3}).map((t,r)=>{const s=!!i[r];return l("div",{style:{borderBottom:"solid 1px #ccc",background:s?"lightpink":"#fff",display:"flex",flexDirection:"row",transition:"0.5s ease"},children:[e("div",{children:e("button",{style:{height:"100%"},onClick:()=>{n(c=>({...c,[r]:!c[r]}))},children:s?"close":"open"})}),e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:s?200:40,transition:"0.5s ease"},children:r})]},r)})})}},w={render:()=>{const n=(g,d)=>Array.from({length:g}).map((p,_)=>(_+=d,_)),[t,r]=o.useState(!1),[s,c]=o.useState(!0),[f,u]=o.useState(()=>n(4,0));o.useEffect(()=>{const g=setInterval(()=>{u(s?d=>t?[...n(4,(d[0]??0)-4),...d]:[...d,...n(4,(d[d.length-1]??0)+1)]:t?d=>d.slice(4):d=>d.slice(0,-4))},500);return()=>{clearInterval(g)}});const a=[20,40,80,77];return l("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[l("div",{children:[l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!t,onChange:()=>{r(!1)}}),"append"]}),l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:t,onChange:()=>{r(!0)}}),"prepend"]}),l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:s,onChange:()=>{c(!0)}}),"increase"]}),l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!s,onChange:()=>{c(!1)}}),"decrease"]})]}),e(h,{style:{flex:1},children:f.map((g,d)=>e("div",{style:{height:a[d%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:g},g))})]})}},me=o.forwardRef(({children:i,attrs:n,height:t},r)=>e("div",{ref:r,...n,children:e("ul",{style:{position:"relative",height:t,margin:0},children:i})})),ye=o.forwardRef(({children:i,style:n},t)=>e("li",{ref:t,style:{...n,marginLeft:30},children:i})),A={render:()=>l("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e("div",{style:{padding:4},children:"header"}),e(h,{style:{flex:1,background:"#fff"},components:{Root:me,Item:ye},overscan:20,children:Array.from({length:1e3}).map((i,n)=>n)})]})};var B,E,N;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...(N=(E=v.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var V,G,O;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(O=(G=b.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var D,M,P;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(P=(M=S.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var z,U,j;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(j=(U=x.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var F,$,J;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(J=($=T.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var W,K,q;L.parameters={...L.parameters,docs:{...(W=L.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(K=L.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var Q,X,Y;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,se;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(re=I.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ie,le;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,ae,de;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
    const [increase, setIncrease] = useState(true);
    const [rows, setRows] = useState(() => createRows(BATCH_LENGTH, 0));
    useEffect(() => {
      const timer = setInterval(() => {
        if (increase) {
          setRows(prev => prepend ? [...createRows(BATCH_LENGTH, (prev[0] ?? 0) - BATCH_LENGTH), ...prev] : [...prev, ...createRows(BATCH_LENGTH, (prev[prev.length - 1] ?? 0) + 1)]);
        } else {
          if (prepend) {
            setRows(prev => prev.slice(BATCH_LENGTH));
          } else {
            setRows(prev => prev.slice(0, -BATCH_LENGTH));
          }
        }
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
}`,...(de=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};var ue,he,ge;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ge=(he=A.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};const Ie=["Default","Horizontal","PaddingAndMargin","Reverse","Sticky","ScrollTo","ScrollRestoration","InfiniteScrolling","Callbacks","WithState","IncreasingItems","Ul"];export{I as Callbacks,v as Default,b as Horizontal,w as IncreasingItems,k as InfiniteScrolling,S as PaddingAndMargin,x as Reverse,C as ScrollRestoration,L as ScrollTo,T as Sticky,A as Ul,R as WithState,Ie as __namedExportsOrder,ke as default};
//# sourceMappingURL=VList.stories-01f323c6.js.map
