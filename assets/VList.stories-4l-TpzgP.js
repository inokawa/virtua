import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./iframe-kXGK60IA.js";import{S as Ce,d as we}from"./common-BuJuiJCc.js";import{V as f}from"./VList-BCMm9ZRU.js";import"./preload-helper-BQ24v_F8.js";import"./Virtualizer-CXc8ddXE.js";import"./useLatestRef-DwlwYKuf.js";import"./useChildren-BiUsfatA.js";import"./index-CYCeAwim.js";const ze={component:f},v=t=>{const s=[20,40,80,77];return Array.from({length:t}).map((r,c)=>e.jsx("div",{style:{height:s[c%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:c},c))},I={render:()=>e.jsx(f,{style:{height:"100vh"},children:v(1e3)})},Le=t=>Array.from({length:t}).map((s,r)=>e.jsxs("div",{style:{width:r%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",r]},r)),S={render:()=>e.jsx("div",{style:{padding:10},children:e.jsx(f,{style:{width:"100%",height:200},horizontal:!0,children:Le(1e3)})})},k={render:()=>e.jsx(f,{style:{width:400,height:400,background:"lightgray"},children:Array.from({length:1e3}).map((t,s)=>e.jsx("div",{style:{height:100,borderRadius:8,margin:20,padding:20,background:"white"},children:s},s))})},j={render:()=>e.jsx(f,{style:{height:"100vh"},children:Array.from({length:1e3}).map((t,s)=>{const r=s%2===0?"#eee":"#fff";return e.jsx("div",{style:{height:80,borderBottom:"solid 1px #ccc",background:r},children:s===0?null:e.jsx("span",{style:{position:"absolute",bottom:"100%",left:16,height:20,padding:8,border:"solid 1px #ccc",borderBottom:"none",background:r},children:s})},s)})})},w={render:()=>{const t=n.useRef(null);return n.useEffect(()=>{var s;(s=t.current)==null||s.scrollToIndex(999)},[]),e.jsx(f,{ref:t,style:{height:"100vh"},reverse:!0,children:v(1e3)})}},R={render:()=>{const t="item";return e.jsxs(e.Fragment,{children:[e.jsx(f,{style:{height:"100vh"},children:Array.from({length:1e3}).map((s,r)=>e.jsx("div",{className:t,style:{borderBottom:"solid 1px #ccc",background:"#fff"},children:r},r))}),e.jsx("style",{children:`
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
        `})]})}},C={render:()=>{const[s,r]=n.useState(567),[c,i]=n.useState("start"),[o,d]=n.useState(!1),[m,h]=n.useState(1e3),u=n.useRef(null);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsx("input",{type:"number",value:s,onChange:l=>{r(Number(l.target.value))}}),e.jsx("button",{onClick:()=>{var l;(l=u.current)==null||l.scrollToIndex(s,{align:c,smooth:o})},children:"scroll to index"}),e.jsx("button",{onClick:()=>{r(Math.round(1e3*Math.random()))},children:"randomize"}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:c==="start",onChange:()=>{i("start")}}),"start"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:c==="center",onChange:()=>{i("center")}}),"center"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:c==="end",onChange:()=>{i("end")}}),"end"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:o,onChange:()=>{d(l=>!l)}}),"smooth"]})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("input",{type:"number",value:m,onChange:l=>{h(Number(l.target.value))}}),e.jsx("button",{onClick:()=>{var l;(l=u.current)==null||l.scrollTo(m)},children:"scroll to offset"}),e.jsx("button",{onClick:()=>{var l;(l=u.current)==null||l.scrollBy(m)},children:"scroll by offset"})]})}),e.jsx(f,{ref:u,style:{flex:1},children:v(1e3)})]})}},L={render:()=>{const t=n.useRef(0),s=[20,40,80,77],r=()=>{const o=t.current++;return{id:o,height:s[o%4]}},[c,i]=n.useState(()=>Array.from({length:1e3}).map(()=>r()));return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsx("div",{children:e.jsx("button",{onClick:()=>{i(o=>[...o,...Array.from({length:500}).map(()=>r())])},children:"append more"})}),e.jsx(f,{style:{flex:1},count:c.length,children:o=>{const d=c[o];return e.jsx("div",{style:{height:d.height,borderBottom:"solid 1px #ccc",background:"#fff"},children:o},d.id)}})]})}},A={render:()=>{const t=n.useRef(null),[s,r]=n.useState(-1),c=Array.from({length:1e3}).map((i,o)=>e.jsx("div",{style:{height:60,borderBottom:"solid 1px #ccc",background:s===o?"skyblue":"white",cursor:"pointer"},onClick:()=>{r(o)},children:o},o));return e.jsx(f,{ref:t,style:{height:400,width:400,margin:10},tabIndex:0,onKeyDown:i=>{if(t.current)switch(i.code){case"ArrowUp":i.preventDefault();const o=Math.max(s-1,0);r(o),t.current.scrollToIndex(o,{align:"nearest"});break;case"ArrowDown":i.preventDefault();const d=Math.min(s+1,c.length-1);r(d),t.current.scrollToIndex(d,{align:"nearest"});break}},children:c})}},Ae=({id:t})=>{const s="list-cache-"+t,r=n.useRef(null),[c,i]=n.useMemo(()=>{const o=sessionStorage.getItem(s);if(!o)return[];try{return JSON.parse(o)}catch{return[]}},[]);return n.useLayoutEffect(()=>{if(!r.current)return;const o=r.current;return c&&o.scrollTo(c),()=>{sessionStorage.setItem(s,JSON.stringify([o.scrollOffset,o.cache]))}},[]),e.jsx(f,{ref:r,cache:i,style:{height:"100vh"},children:v(1e3)})},T={render:()=>{const[t,s]=n.useState(!0),[r,c]=n.useState("1");return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>{s(i=>!i)},children:t?"hide":"show"}),["1","2","3"].map(i=>e.jsxs("label",{children:[e.jsx("input",{type:"radio",checked:r===i,onChange:()=>{c(i)}}),i]},i)),t&&e.jsx(Ae,{id:r},r)]})}},Te=()=>e.jsx("div",{style:{padding:8,background:"#fff",borderBottom:"solid 1px #ccc"},children:e.jsx("div",{style:{height:60,background:"#eee"}})}),_={render:()=>{const t=n.useRef(0),s=h=>{const u=[20,40,80,77];return Array.from({length:h}).map((l,g)=>{const x=t.current++;return e.jsx("div",{style:{height:u[g%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:x},x)})},[r,c]=n.useState(!1),i=async()=>{c(!0),await we(3e3),m(h=>[...h,...s(o)]),c(!1)},o=100,[d,m]=n.useState(()=>s(o));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[e.jsx("div",{children:e.jsx("button",{onClick:()=>{i()},children:"load more"})}),e.jsxs(f,{style:{flex:1},children:[d,r&&Array.from({length:o}).map((h,u)=>e.jsx(Te,{},`skeleton_${u}`))]})]})}},B={render:()=>{const t=(l,g=0)=>{const x=[20,40,80,77];return Array.from({length:l}).map((y,p)=>(p+=g,e.jsx("div",{style:{height:x[p%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:p},p)))},[s,r]=n.useState(!1),c=async()=>{r(!0),await we(1e3),r(!1)},i=n.useRef(null),o=100,[d,m]=n.useState(()=>t(o)),h=n.useRef(-1),u=d.length;return e.jsxs(f,{ref:i,style:{flex:1},onScroll:async()=>{i.current&&h.current<u&&i.current.findEndIndex()+50>u&&(h.current=u,await c(),m(l=>[...l,...t(o,l.length)]))},children:[d,s&&e.jsx(Ce,{})]})}},E={render:()=>{const t=n.useRef(null),s=n.useState(()=>v(1e3))[0],[r,c]=n.useState(0),[i,o]=n.useState(!1),[d,m]=n.useState(-1),[h,u]=n.useState(-1),[l,g]=n.useState(!1),[x,y]=n.useState(!1);return n.useEffect(()=>{t.current&&(t.current.scrollOffset===0?g(!0):g(!1),t.current.scrollOffset-t.current.scrollSize+t.current.viewportSize>=-1.5?y(!0):y(!1))},[r]),e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:[e.jsxs("div",{children:["scrollTop: ",r]}),e.jsxs("div",{children:["scrolling: ",i?"true":"false"]}),e.jsxs("div",{children:["index: (",d,", ",h,")"]}),e.jsxs("div",{children:["at top: ",l?"true":"false"]}),e.jsxs("div",{children:["at bottom: ",x?"true":"false"]})]}),e.jsx(f,{ref:t,style:{flex:1},onScroll:p=>{n.startTransition(()=>{c(p),o(!0),t.current&&(m(t.current.findStartIndex()),u(t.current.findEndIndex()))})},onScrollEnd:()=>{n.startTransition(()=>{o(!1)})},children:s})]})}},V={render:()=>{const t=n.useRef(0),s=(a,b)=>Array.from({length:a}).map((O,N)=>(N+=b,{id:t.current++,index:N})),[r,c]=n.useState(!1),[i,o]=n.useState(4),[d,m]=n.useState(!1),[h,u]=n.useState(!0),[l,g]=n.useState(!1),[x,y]=n.useState(()=>s(i,0)),p=()=>{y(h?a=>{var b,O;return d?[...s(i,(((b=a[0])==null?void 0:b.index)??0)-i),...a]:[...a,...s(i,(((O=a[a.length-1])==null?void 0:O.index)??0)+1)]}:d?a=>a.slice(i):a=>a.slice(0,-i))};n.useEffect(()=>{if(!r)return;const a=setInterval(p,500);return()=>{clearInterval(a)}},[p,r]);const Re=[20,40,80,77];return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:d,onChange:()=>{m(a=>!a)}}),"prepend"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:h,onChange:()=>{u(!0)}}),"increase"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:!h,onChange:()=>{u(!1)}}),"decrease"]}),e.jsx("input",{style:{marginLeft:4},value:i,type:"number",min:1,max:1e4,step:1,onChange:a=>{o(Number(a.target.value))}})]}),e.jsx("div",{children:e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:l,onChange:()=>{g(a=>!a)}}),"reverse"]})}),e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:16},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:r,onChange:()=>{c(a=>!a)}}),"auto"]}),e.jsx("button",{onClick:()=>{p()},children:"update"})]}),e.jsx(f,{style:{flex:1},shift:d,reverse:l,children:x.map(a=>e.jsx("div",{style:{height:Re[Math.abs(a.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:a.index},a.id))})]})}};var M,H,D;I.parameters={...I.parameters,docs:{...(M=I.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...(D=(H=I.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var z,P,U;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(U=(P=S.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var F,G,K;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(K=(G=k.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var $,J,X;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>
        {Array.from({
        length: 1000
      }).map((_, i) => {
        const color = i % 2 === 0 ? "#eee" : "#fff";
        return <div key={i} style={{
          height: 80,
          borderBottom: "solid 1px #ccc",
          background: color
        }}>
              {i === 0 ? null : <span style={{
            position: "absolute",
            bottom: "100%",
            left: 16,
            height: 20,
            padding: 8,
            border: "solid 1px #ccc",
            borderBottom: "none",
            background: color
          }}>
                  {i}
                </span>}
            </div>;
      })}
      </VList>;
  }
}`,...(X=(J=j.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var q,Q,W;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(W=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var Y,Z,ee;R.parameters={...R.parameters,docs:{...(Y=R.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=R.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,re;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(te=C.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,oe,ie;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(oe=L.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,le,ae;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ae=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var de,ue,he;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(he=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var fe,me,pe;_.parameters={..._.parameters,docs:{...(fe=_.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(pe=(me=_.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,xe,ye;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ye=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var ve,be,Ie;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ie=(be=E.parameters)==null?void 0:be.docs)==null?void 0:Ie.source}}};var Se,ke,je;V.parameters={...V.parameters,docs:{...(Se=V.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(je=(ke=V.parameters)==null?void 0:ke.docs)==null?void 0:je.source}}};const Pe=["Default","Horizontal","PaddingAndMargin","Overflow","Reverse","Responsive","ScrollTo","RenderProp","Keyboard","ScrollRestoration","Skeleton","InfiniteScrolling","Statuses","IncreasingItems"];export{I as Default,S as Horizontal,V as IncreasingItems,B as InfiniteScrolling,A as Keyboard,j as Overflow,k as PaddingAndMargin,L as RenderProp,R as Responsive,w as Reverse,T as ScrollRestoration,C as ScrollTo,_ as Skeleton,E as Statuses,Pe as __namedExportsOrder,ze as default};
