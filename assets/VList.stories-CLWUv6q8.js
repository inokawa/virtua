import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as n}from"./index-DRjF_FHU.js";import{S as ke,d as Ie}from"./common-B4Hkentz.js";import{V as f}from"./VList-3gt3oDe6.js";import"./Virtualizer-BVQh2QbU.js";import"./useRerender-Bzq3MHC2.js";import"./useChildren-KcxDX2vx.js";import"./index-uWwxbAOW.js";const Ne={component:f},v=t=>{const i=[20,40,80,77];return Array.from({length:t}).map((r,c)=>e.jsx("div",{style:{height:i[c%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:c},c))},I={render:()=>e.jsx(f,{style:{height:"100vh"},children:v(1e3)})},je=t=>Array.from({length:t}).map((i,r)=>e.jsxs("div",{style:{width:r%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",r]},r)),S={render:()=>e.jsx("div",{style:{padding:10},children:e.jsx(f,{style:{width:"100%",height:200},horizontal:!0,children:je(1e3)})})},k={render:()=>e.jsx(f,{style:{width:400,height:400,background:"lightgray"},children:Array.from({length:1e3}).map((t,i)=>e.jsx("div",{style:{height:100,borderRadius:8,margin:20,padding:20,background:"white"},children:i},i))})},j={render:()=>{const t=n.useRef(null);return n.useEffect(()=>{var i;(i=t.current)==null||i.scrollToIndex(999)},[]),e.jsx(f,{ref:t,style:{height:"100vh"},reverse:!0,children:v(1e3)})}},R={render:()=>{const t="item";return e.jsxs(e.Fragment,{children:[e.jsx(f,{style:{height:"100vh"},children:Array.from({length:1e3}).map((i,r)=>e.jsx("div",{className:t,style:{borderBottom:"solid 1px #ccc",background:"#fff"},children:r},r))}),e.jsx("style",{children:`
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
        `})]})}},w={render:()=>{const[i,r]=n.useState(567),[c,o]=n.useState("start"),[s,d]=n.useState(!1),[m,h]=n.useState(1e3),u=n.useRef(null);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsx("input",{type:"number",value:i,onChange:l=>{r(Number(l.target.value))}}),e.jsx("button",{onClick:()=>{var l;(l=u.current)==null||l.scrollToIndex(i,{align:c,smooth:s})},children:"scroll to index"}),e.jsx("button",{onClick:()=>{r(Math.round(1e3*Math.random()))},children:"randomize"}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:c==="start",onChange:()=>{o("start")}}),"start"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:c==="center",onChange:()=>{o("center")}}),"center"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:c==="end",onChange:()=>{o("end")}}),"end"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:s,onChange:()=>{d(l=>!l)}}),"smooth"]})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("input",{type:"number",value:m,onChange:l=>{h(Number(l.target.value))}}),e.jsx("button",{onClick:()=>{var l;(l=u.current)==null||l.scrollTo(m)},children:"scroll to offset"}),e.jsx("button",{onClick:()=>{var l;(l=u.current)==null||l.scrollBy(m)},children:"scroll by offset"})]})}),e.jsx(f,{ref:u,style:{flex:1},children:v(1e3)})]})}},C={render:()=>{const t=n.useRef(0),i=[20,40,80,77],r=()=>{const s=t.current++;return{id:s,height:i[s%4]}},[c,o]=n.useState(()=>Array.from({length:1e3}).map(()=>r()));return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsx("div",{children:e.jsx("button",{onClick:()=>{o(s=>[...s,...Array.from({length:500}).map(()=>r())])},children:"append more"})}),e.jsx(f,{style:{flex:1},count:c.length,children:s=>{const d=c[s];return e.jsx("div",{style:{height:d.height,borderBottom:"solid 1px #ccc",background:"#fff"},children:s},d.id)}})]})}},L={render:()=>{const t=n.useRef(null),[i,r]=n.useState(-1),c=Array.from({length:1e3}).map((o,s)=>e.jsx("div",{style:{height:60,borderBottom:"solid 1px #ccc",background:i===s?"skyblue":"white",cursor:"pointer"},onClick:()=>{r(s)},children:s},s));return e.jsx(f,{ref:t,style:{height:400,width:400,margin:10},tabIndex:0,onKeyDown:o=>{if(t.current)switch(o.code){case"ArrowUp":o.preventDefault();const s=Math.max(i-1,0);r(s),t.current.scrollToIndex(s,{align:"nearest"});break;case"ArrowDown":o.preventDefault();const d=Math.min(i+1,c.length-1);r(d),t.current.scrollToIndex(d,{align:"nearest"});break}},children:c})}},Re=({id:t})=>{const i="list-cache-"+t,r=n.useRef(null),[c,o]=n.useMemo(()=>{const s=sessionStorage.getItem(i);if(!s)return[];try{return JSON.parse(s)}catch{return[]}},[]);return n.useLayoutEffect(()=>{if(!r.current)return;const s=r.current;return c&&s.scrollTo(c),()=>{sessionStorage.setItem(i,JSON.stringify([s.scrollOffset,s.cache]))}},[]),e.jsx(f,{ref:r,cache:o,style:{height:"100vh"},children:v(1e3)})},A={render:()=>{const[t,i]=n.useState(!0),[r,c]=n.useState("1");return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>{i(o=>!o)},children:t?"hide":"show"}),["1","2","3"].map(o=>e.jsxs("label",{children:[e.jsx("input",{type:"radio",checked:r===o,onChange:()=>{c(o)}}),o]},o)),t&&e.jsx(Re,{id:r},r)]})}},we=()=>e.jsx("div",{style:{padding:8,background:"#fff",borderBottom:"solid 1px #ccc"},children:e.jsx("div",{style:{height:60,background:"#eee"}})}),T={render:()=>{const t=n.useRef(0),i=h=>{const u=[20,40,80,77];return Array.from({length:h}).map((l,g)=>{const x=t.current++;return e.jsx("div",{style:{height:u[g%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:x},x)})},[r,c]=n.useState(!1),o=async()=>{c(!0),await Ie(3e3),m(h=>[...h,...i(s)]),c(!1)},s=100,[d,m]=n.useState(()=>i(s));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[e.jsx("div",{children:e.jsx("button",{onClick:()=>{o()},children:"load more"})}),e.jsxs(f,{style:{flex:1},children:[d,r&&Array.from({length:s}).map((h,u)=>e.jsx(we,{},`skeleton_${u}`))]})]})}},_={render:()=>{const t=(l,g=0)=>{const x=[20,40,80,77];return Array.from({length:l}).map((y,p)=>(p+=g,e.jsx("div",{style:{height:x[p%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:p},p)))},[i,r]=n.useState(!1),c=async()=>{r(!0),await Ie(1e3),r(!1)},o=n.useRef(null),s=100,[d,m]=n.useState(()=>t(s)),h=n.useRef(-1),u=d.length;return e.jsxs(f,{ref:o,style:{flex:1},onScroll:async()=>{o.current&&h.current<u&&o.current.findEndIndex()+50>u&&(h.current=u,await c(),m(l=>[...l,...t(s,l.length)]))},children:[d,i&&e.jsx(ke,{})]})}},E={render:()=>{const t=n.useRef(null),i=n.useState(()=>v(1e3))[0],[r,c]=n.useState(0),[o,s]=n.useState(!1),[d,m]=n.useState(-1),[h,u]=n.useState(-1),[l,g]=n.useState(!1),[x,y]=n.useState(!1);return n.useEffect(()=>{t.current&&(t.current.scrollOffset===0?g(!0):g(!1),t.current.scrollOffset-t.current.scrollSize+t.current.viewportSize>=-1.5?y(!0):y(!1))},[r]),e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:[e.jsxs("div",{children:["scrollTop: ",r]}),e.jsxs("div",{children:["scrolling: ",o?"true":"false"]}),e.jsxs("div",{children:["index: (",d,", ",h,")"]}),e.jsxs("div",{children:["at top: ",l?"true":"false"]}),e.jsxs("div",{children:["at bottom: ",x?"true":"false"]})]}),e.jsx(f,{ref:t,style:{flex:1},onScroll:p=>{n.startTransition(()=>{c(p),s(!0),t.current&&(m(t.current.findStartIndex()),u(t.current.findEndIndex()))})},onScrollEnd:()=>{n.startTransition(()=>{s(!1)})},children:i})]})}},B={render:()=>{const t=n.useRef(0),i=(a,b)=>Array.from({length:a}).map((V,N)=>(N+=b,{id:t.current++,index:N})),[r,c]=n.useState(!1),[o,s]=n.useState(4),[d,m]=n.useState(!1),[h,u]=n.useState(!0),[l,g]=n.useState(!1),[x,y]=n.useState(()=>i(o,0)),p=()=>{y(h?a=>{var b,V;return d?[...i(o,(((b=a[0])==null?void 0:b.index)??0)-o),...a]:[...a,...i(o,(((V=a[a.length-1])==null?void 0:V.index)??0)+1)]}:d?a=>a.slice(o):a=>a.slice(0,-o))};n.useEffect(()=>{if(!r)return;const a=setInterval(p,500);return()=>{clearInterval(a)}},[p,r]);const Se=[20,40,80,77];return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:d,onChange:()=>{m(a=>!a)}}),"prepend"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:h,onChange:()=>{u(!0)}}),"increase"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:!h,onChange:()=>{u(!1)}}),"decrease"]}),e.jsx("input",{style:{marginLeft:4},value:o,type:"number",min:1,max:1e4,step:1,onChange:a=>{s(Number(a.target.value))}})]}),e.jsx("div",{children:e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:l,onChange:()=>{g(a=>!a)}}),"reverse"]})}),e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:16},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:r,onChange:()=>{c(a=>!a)}}),"auto"]}),e.jsx("button",{onClick:()=>{p()},children:"update"})]}),e.jsx(f,{style:{flex:1},shift:d,reverse:l,children:x.map(a=>e.jsx("div",{style:{height:Se[Math.abs(a.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:a.index},a.id))})]})}};var O,M,H;I.parameters={...I.parameters,docs:{...(O=I.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...(H=(M=I.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var D,z,P;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(P=(z=S.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var U,F,G;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(F=k.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var K,$,J;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(J=($=j.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var X,q,Q;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Q=(q=R.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var W,Y,Z;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Z=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,se,oe;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(se=L.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ce,le;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ae,de,ue;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ue=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var he,fe,me;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
    const ref = useRef<VListHandle>(null);
    const ITEM_BATCH_COUNT = 100;
    const [items, setItems] = useState(() => createRows(ITEM_BATCH_COUNT));
    const fetchedCountRef = useRef(-1);
    const count = items.length;
    return <VList ref={ref} style={{
      flex: 1
    }} onScroll={async () => {
      if (!ref.current) return;
      if (fetchedCountRef.current < count && ref.current.findEndIndex() + 50 > count) {
        fetchedCountRef.current = count;
        await fetchItems();
        setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT, prev.length)]);
      }
    }}>
        {items}
        {fetching && <Spinner />}
      </VList>;
  }
}`,...(me=(fe=_.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var pe,ge,xe;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<VListHandle>(null);
    const items = useState(() => createRows(1000))[0];
    const [position, setPosition] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const [startIndex, setStartIndex] = useState(-1);
    const [endIndex, setEndIndex] = useState(-1);
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
            index: ({startIndex}, {endIndex})
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
          if (!ref.current) return;
          setStartIndex(ref.current.findStartIndex());
          setEndIndex(ref.current.findEndIndex());
        });
      }} onScrollEnd={() => {
        startTransition(() => {
          setScrolling(false);
        });
      }}>
          {items}
        </VList>
      </div>;
  }
}`,...(xe=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var ye,ve,be;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};const Oe=["Default","Horizontal","PaddingAndMargin","Reverse","Responsive","ScrollTo","RenderProp","Keyboard","ScrollRestoration","Skeleton","InfiniteScrolling","Statuses","IncreasingItems"];export{I as Default,S as Horizontal,B as IncreasingItems,_ as InfiniteScrolling,L as Keyboard,k as PaddingAndMargin,C as RenderProp,R as Responsive,j as Reverse,A as ScrollRestoration,w as ScrollTo,T as Skeleton,E as Statuses,Oe as __namedExportsOrder,Ne as default};
