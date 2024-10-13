import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as n}from"./index-DRjF_FHU.js";import{S as ke,d as Se}from"./common-B4Hkentz.js";import{V as m}from"./VList-Hh_zp-q1.js";import"./Virtualizer-bm93XCyL.js";import"./useRerender-Y8maLHhe.js";import"./useChildren-DKtZ_ELJ.js";import"./index-uWwxbAOW.js";const Ne={component:m},y=t=>{const o=[20,40,80,77];return Array.from({length:t}).map((s,c)=>e.jsx("div",{style:{height:o[c%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:c},c))},b={render:()=>e.jsx(m,{style:{height:"100vh"},children:y(1e3)})},je=t=>Array.from({length:t}).map((o,s)=>e.jsxs("div",{style:{width:s%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",s]},s)),S={render:()=>e.jsx("div",{style:{padding:10},children:e.jsx(m,{style:{width:"100%",height:200},horizontal:!0,children:je(1e3)})})},I={render:()=>e.jsx(m,{style:{width:400,height:400,background:"lightgray"},children:Array.from({length:1e3}).map((t,o)=>e.jsx("div",{style:{height:100,borderRadius:8,margin:20,padding:20,background:"white"},children:o},o))})},k={render:()=>{const t=n.useRef(null);return n.useEffect(()=>{var o;(o=t.current)==null||o.scrollToIndex(999)},[]),e.jsx(m,{ref:t,style:{height:"100vh"},reverse:!0,children:y(1e3)})}},j={render:()=>{const t="item";return e.jsxs(e.Fragment,{children:[e.jsx(m,{style:{height:"100vh"},children:Array.from({length:1e3}).map((o,s)=>e.jsx("div",{className:t,style:{borderBottom:"solid 1px #ccc",background:"#fff"},children:s},s))}),e.jsx("style",{children:`
          .${t} {
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
        `})]})}},R={render:()=>{const[o,s]=n.useState(567),[c,i]=n.useState("start"),[r,d]=n.useState(!1),[f,h]=n.useState(1e3),u=n.useRef(null);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsx("input",{type:"number",value:o,onChange:a=>{s(Number(a.target.value))}}),e.jsx("button",{onClick:()=>{var a;(a=u.current)==null||a.scrollToIndex(o,{align:c,smooth:r})},children:"scroll to index"}),e.jsx("button",{onClick:()=>{s(Math.round(1e3*Math.random()))},children:"randomize"}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:c==="start",onChange:()=>{i("start")}}),"start"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:c==="center",onChange:()=>{i("center")}}),"center"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:c==="end",onChange:()=>{i("end")}}),"end"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:r,onChange:()=>{d(a=>!a)}}),"smooth"]})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("input",{type:"number",value:f,onChange:a=>{h(Number(a.target.value))}}),e.jsx("button",{onClick:()=>{var a;(a=u.current)==null||a.scrollTo(f)},children:"scroll to offset"}),e.jsx("button",{onClick:()=>{var a;(a=u.current)==null||a.scrollBy(f)},children:"scroll by offset"})]})}),e.jsx(m,{ref:u,style:{flex:1},children:y(1e3)})]})}},C={render:()=>{const t=n.useRef(0),o=[20,40,80,77],s=()=>{const r=t.current++;return{id:r,height:o[r%4]}},[c,i]=n.useState(()=>Array.from({length:1e3}).map(()=>s()));return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsx("div",{children:e.jsx("button",{onClick:()=>{i(r=>[...r,...Array.from({length:500}).map(()=>s())])},children:"append more"})}),e.jsx(m,{style:{flex:1},count:c.length,children:r=>{const d=c[r];return e.jsx("div",{style:{height:d.height,borderBottom:"solid 1px #ccc",background:"#fff"},children:r},d.id)}})]})}},w={render:()=>{const t=n.useRef(null),[o,s]=n.useState(-1),c=Array.from({length:1e3}).map((i,r)=>e.jsx("div",{style:{height:60,borderBottom:"solid 1px #ccc",background:o===r?"skyblue":"white",cursor:"pointer"},onClick:()=>{s(r)},children:r},r));return e.jsx(m,{ref:t,style:{height:400,width:400,margin:10},tabIndex:0,onKeyDown:i=>{if(t.current)switch(i.code){case"ArrowUp":i.preventDefault();const r=Math.max(o-1,0);s(r),t.current.scrollToIndex(r,{align:"nearest"});break;case"ArrowDown":i.preventDefault();const d=Math.min(o+1,c.length-1);s(d),t.current.scrollToIndex(d,{align:"nearest"});break}},children:c})}},Re=({id:t})=>{const o="list-cache-"+t,s=n.useRef(null),[c,i]=n.useMemo(()=>{const r=sessionStorage.getItem(o);if(!r)return[];try{return JSON.parse(r)}catch{return[]}},[]);return n.useLayoutEffect(()=>{if(!s.current)return;const r=s.current;return c&&r.scrollTo(c),()=>{sessionStorage.setItem(o,JSON.stringify([r.scrollOffset,r.cache]))}},[]),e.jsx(m,{ref:s,cache:i,style:{height:"100vh"},children:y(1e3)})},T={render:()=>{const[t,o]=n.useState(!0),[s,c]=n.useState("1");return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>{o(i=>!i)},children:t?"hide":"show"}),["1","2","3"].map(i=>e.jsxs("label",{children:[e.jsx("input",{type:"radio",checked:s===i,onChange:()=>{c(i)}}),i]},i)),t&&e.jsx(Re,{id:s},s)]})}},Ce=()=>e.jsx("div",{style:{padding:8,background:"#fff",borderBottom:"solid 1px #ccc"},children:e.jsx("div",{style:{height:60,background:"#eee"}})}),A={render:()=>{const t=n.useRef(0),o=h=>{const u=[20,40,80,77];return Array.from({length:h}).map((a,g)=>{const x=t.current++;return e.jsx("div",{style:{height:u[g%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:x},x)})},[s,c]=n.useState(!1),i=async()=>{c(!0),await Se(3e3),f(h=>[...h,...o(r)]),c(!1)},r=100,[d,f]=n.useState(()=>o(r));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[e.jsx("div",{children:e.jsx("button",{onClick:()=>{i()},children:"load more"})}),e.jsxs(m,{style:{flex:1},children:[d,s&&Array.from({length:r}).map((h,u)=>e.jsx(Ce,{},`skeleton_${u}`))]})]})}},L={render:()=>{const t=(u,a=0)=>{const g=[20,40,80,77];return Array.from({length:u}).map((x,p)=>(p+=a,e.jsx("div",{style:{height:g[p%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:p},p)))},[o,s]=n.useState(!1),c=async()=>{s(!0),await Se(1e3),s(!1)},i=100,[r,d]=n.useState(()=>t(i)),f=n.useRef(-1),h=r.length;return e.jsxs(m,{style:{flex:1},onRangeChange:async(u,a)=>{a+50>h&&f.current<h&&(f.current=h,await c(),d(g=>[...g,...t(i,g.length)]))},children:[r,o&&e.jsx(ke,{})]})}},_={render:()=>{const t=n.useRef(null),o=n.useState(()=>y(1e3))[0],[s,c]=n.useState(0),[i,r]=n.useState(!1),[d,f]=n.useState([-1,-1]),[h,u]=n.useState(!1),[a,g]=n.useState(!1);return n.useEffect(()=>{t.current&&(t.current.scrollOffset===0?u(!0):u(!1),t.current.scrollOffset-t.current.scrollSize+t.current.viewportSize>=-1.5?g(!0):g(!1))},[s]),e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:[e.jsxs("div",{children:["scrollTop: ",s]}),e.jsxs("div",{children:["scrolling: ",i?"true":"false"]}),e.jsxs("div",{children:["index: (",d[0],", ",d[1],")"]}),e.jsxs("div",{children:["at top: ",h?"true":"false"]}),e.jsxs("div",{children:["at bottom: ",a?"true":"false"]})]}),e.jsx(m,{ref:t,style:{flex:1},onScroll:x=>{n.startTransition(()=>{c(x),r(!0)})},onScrollEnd:()=>{n.startTransition(()=>{r(!1)})},onRangeChange:async(x,p)=>{n.startTransition(()=>{f([x,p])})},children:o})]})}},B={render:()=>{const t=n.useRef(0),o=(l,v)=>Array.from({length:l}).map((E,N)=>(N+=v,{id:t.current++,index:N})),[s,c]=n.useState(!1),[i,r]=n.useState(4),[d,f]=n.useState(!1),[h,u]=n.useState(!0),[a,g]=n.useState(!1),[x,p]=n.useState(()=>o(i,0)),V=()=>{p(h?l=>{var v,E;return d?[...o(i,(((v=l[0])==null?void 0:v.index)??0)-i),...l]:[...l,...o(i,(((E=l[l.length-1])==null?void 0:E.index)??0)+1)]}:d?l=>l.slice(i):l=>l.slice(0,-i))};n.useEffect(()=>{if(!s)return;const l=setInterval(V,500);return()=>{clearInterval(l)}},[V,s]);const Ie=[20,40,80,77];return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:d,onChange:()=>{f(l=>!l)}}),"prepend"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:h,onChange:()=>{u(!0)}}),"increase"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:!h,onChange:()=>{u(!1)}}),"decrease"]}),e.jsx("input",{style:{marginLeft:4},value:i,type:"number",min:1,max:1e4,step:1,onChange:l=>{r(Number(l.target.value))}})]}),e.jsx("div",{children:e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:a,onChange:()=>{g(l=>!l)}}),"reverse"]})}),e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:16},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:s,onChange:()=>{c(l=>!l)}}),"auto"]}),e.jsx("button",{onClick:()=>{V()},children:"update"})]}),e.jsx(m,{style:{flex:1},shift:d,reverse:a,children:x.map(l=>e.jsx("div",{style:{height:Ie[Math.abs(l.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:l.index},l.id))})]})}};var O,M,H;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...(H=(M=b.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var D,z,P;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(P=(z=S.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var U,F,G;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      width: 400,
      height: 400,
      background: "lightgray"
    }}>
        {Array.from({
        length: 1000
      }).map((_, i) => {
        return <div key={i} style={{
          height: 100,
          borderRadius: 8,
          margin: 20,
          padding: 20,
          background: "white"
        }}>
              {i}
            </div>;
      })}
      </VList>;
  }
}`,...(G=(F=I.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var K,$,J;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(J=($=k.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var X,q,Q;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Q=(q=j.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var W,Y,Z;R.parameters={...R.parameters,docs:{...(W=R.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Z=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const id = useRef(0);
    const heights = [20, 40, 80, 77];
    const createItem = () => {
      const i = id.current++;
      return {
        id: i,
        height: heights[i % 4]
      };
    };
    const [items, setItems] = useState(() => {
      return Array.from({
        length: 1000
      }).map(() => createItem());
    });
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div>
          <button onClick={() => {
          setItems(prev => [...prev, ...Array.from({
            length: 500
          }).map(() => createItem())]);
        }}>
            append more
          </button>
        </div>
        <VList style={{
        flex: 1
      }} count={items.length}>
          {i => {
          const item = items[i];
          return <div key={item.id} style={{
            height: item.height,
            borderBottom: "solid 1px #ccc",
            background: "#fff"
          }}>
                {i}
              </div>;
        }}
        </VList>
      </div>;
  }
}`,...(te=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,re,oe;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(re=w.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,ce,le;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ae,de,ue;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const idRef = useRef(0);
    const createRows = (num: number) => {
      const heights = [20, 40, 80, 77];
      return Array.from({
        length: num
      }).map((_, i) => {
        const id = idRef.current++;
        return <div key={id} style={{
          height: heights[i % 4],
          borderBottom: "solid 1px #ccc",
          background: "#fff"
        }}>
            {id}
          </div>;
      });
    };
    const [fetching, setFetching] = useState(false);
    const fetchItems = async () => {
      setFetching(true);
      await delay(3000);
      setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT)]);
      setFetching(false);
    };
    const ITEM_BATCH_COUNT = 100;
    const [items, setItems] = useState(() => createRows(ITEM_BATCH_COUNT));
    return <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh"
    }}>
        <div>
          <button onClick={() => {
          fetchItems();
        }}>
            load more
          </button>
        </div>
        <VList style={{
        flex: 1
      }}>
          {items}
          {fetching && Array.from({
          length: ITEM_BATCH_COUNT
        }).map((_, i) => <SkeletonItem key={\`skeleton_\${i}\`} />)}
        </VList>
      </div>;
  }
}`,...(ue=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var he,me,fe;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(fe=(me=L.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ge,pe,xe;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
      }} onScrollEnd={() => {
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
}`,...(xe=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};var ye,ve,be;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
    const [reverse, setReverse] = useState(false);
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
            <input type="checkbox" style={{
            marginLeft: 4
          }} checked={prepend} onChange={() => {
            setPrepend(prev => !prev);
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
          marginRight: 4
        }}>
            <input type="checkbox" style={{
            marginLeft: 4
          }} checked={reverse} onChange={() => {
            setReverse(prev => !prev);
          }} />
            reverse
          </label>
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
      }} shift={prepend} reverse={reverse}>
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
}`,...(be=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};const Oe=["Default","Horizontal","PaddingAndMargin","Reverse","Responsive","ScrollTo","RenderProp","Keyboard","ScrollRestoration","Skeleton","InfiniteScrolling","Statuses","IncreasingItems"];export{b as Default,S as Horizontal,B as IncreasingItems,L as InfiniteScrolling,w as Keyboard,I as PaddingAndMargin,C as RenderProp,j as Responsive,k as Reverse,T as ScrollRestoration,R as ScrollTo,A as Skeleton,_ as Statuses,Oe as __namedExportsOrder,Ne as default};
