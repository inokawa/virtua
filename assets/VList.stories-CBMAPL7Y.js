import{j as e}from"./jsx-runtime-WtcO95wV.js";import{r as n}from"./index-DaO3jVNX.js";import{S as we,d as Re}from"./common-Bcsa0J7j.js";import{V as m}from"./VList-C7FSzbEc.js";import"./Virtualizer-DC_CXDP0.js";import"./useRerender-2nbuV_q9.js";import"./useChildren-BpMocZl7.js";import"./index-DpI4bZRz.js";const De={component:m},y=t=>{const r=[20,40,80,77];return Array.from({length:t}).map((s,c)=>e.jsx("div",{style:{height:r[c%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:c},c))},b={render:()=>e.jsx(m,{style:{height:"100vh"},children:y(1e3)})},Te=t=>Array.from({length:t}).map((r,s)=>e.jsxs("div",{style:{width:s%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",s]},s)),S={render:()=>e.jsx("div",{style:{padding:10},children:e.jsx(m,{style:{width:"100%",height:200},horizontal:!0,children:Te(1e3)})})},I={render:()=>e.jsx(m,{style:{width:400,height:400,background:"lightgray"},children:Array.from({length:1e3}).map((t,r)=>e.jsx("div",{style:{height:100,borderRadius:8,margin:20,padding:20,background:"white"},children:r},r))})},k={render:()=>{const t=n.useRef(null);return n.useEffect(()=>{var r;(r=t.current)==null||r.scrollToIndex(999)},[]),e.jsx(m,{ref:t,style:{height:"100vh"},reverse:!0,children:y(1e3)})}},j={render:()=>{const t="item";return e.jsxs(e.Fragment,{children:[e.jsx(m,{style:{height:"100vh"},children:Array.from({length:1e3}).map((r,s)=>e.jsx("div",{className:t,style:{borderBottom:"solid 1px #ccc",background:"#fff"},children:s},s))}),e.jsx("style",{children:`
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
        `})]})}},R={render:()=>e.jsx(m,{style:{height:"100vh"},overscan:1,children:Array.from({length:100}).map((t,r)=>e.jsx("div",{style:{borderBottom:"solid 1px #ccc"},children:Array.from({length:10}).map((s,c)=>{const o=c===0;return e.jsx("div",{style:{height:60,background:"#fff",...o&&{top:0,height:30,position:"sticky",borderBottom:"solid 1px #ccc"}},children:o?r:`${r} - ${c}`},c)})},r))})},C={render:()=>{const[r,s]=n.useState(567),[c,o]=n.useState("start"),[i,d]=n.useState(!1),[f,h]=n.useState(1e3),u=n.useRef(null);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsx("input",{type:"number",value:r,onChange:a=>{s(Number(a.target.value))}}),e.jsx("button",{onClick:()=>{var a;(a=u.current)==null||a.scrollToIndex(r,{align:c,smooth:i})},children:"scroll to index"}),e.jsx("button",{onClick:()=>{s(Math.round(1e3*Math.random()))},children:"randomize"}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:c==="start",onChange:()=>{o("start")}}),"start"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:c==="center",onChange:()=>{o("center")}}),"center"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:c==="end",onChange:()=>{o("end")}}),"end"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:i,onChange:()=>{d(a=>!a)}}),"smooth"]})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("input",{type:"number",value:f,onChange:a=>{h(Number(a.target.value))}}),e.jsx("button",{onClick:()=>{var a;(a=u.current)==null||a.scrollTo(f)},children:"scroll to offset"}),e.jsx("button",{onClick:()=>{var a;(a=u.current)==null||a.scrollBy(f)},children:"scroll by offset"})]})}),e.jsx(m,{ref:u,style:{flex:1},children:y(1e3)})]})}},w={render:()=>{const t=n.useRef(0),r=[20,40,80,77],s=()=>{const i=t.current++;return{id:i,height:r[i%4]}},[c,o]=n.useState(()=>Array.from({length:1e3}).map(()=>s()));return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsx("div",{children:e.jsx("button",{onClick:()=>{o(i=>[...i,...Array.from({length:500}).map(()=>s())])},children:"append more"})}),e.jsx(m,{style:{flex:1},count:c.length,children:i=>{const d=c[i];return e.jsx("div",{style:{height:d.height,borderBottom:"solid 1px #ccc",background:"#fff"},children:i},d.id)}})]})}},T={render:()=>{const t=n.useRef(null),[r,s]=n.useState(-1),c=Array.from({length:1e3}).map((o,i)=>e.jsx("div",{style:{height:60,borderBottom:"solid 1px #ccc",background:r===i?"skyblue":"white",cursor:"pointer"},onClick:()=>{s(i)},children:i},i));return e.jsx(m,{ref:t,style:{height:400,width:400,margin:10},tabIndex:0,onKeyDown:o=>{if(t.current)switch(o.code){case"ArrowUp":o.preventDefault();const i=Math.max(r-1,0);s(i),t.current.scrollToIndex(i,{align:"nearest"});break;case"ArrowDown":o.preventDefault();const d=Math.min(r+1,c.length-1);s(d),t.current.scrollToIndex(d,{align:"nearest"});break}},children:c})}},Ae=({id:t})=>{const r="list-cache-"+t,s=n.useRef(null),[c,o]=n.useMemo(()=>{const i=sessionStorage.getItem(r);if(!i)return[];try{return JSON.parse(i)}catch{return[]}},[]);return n.useLayoutEffect(()=>{if(!s.current)return;const i=s.current;return c&&i.scrollTo(c),()=>{sessionStorage.setItem(r,JSON.stringify([i.scrollOffset,i.cache]))}},[]),e.jsx(m,{ref:s,cache:o,style:{height:"100vh"},children:y(1e3)})},A={render:()=>{const[t,r]=n.useState(!0),[s,c]=n.useState("1");return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>{r(o=>!o)},children:t?"hide":"show"}),["1","2","3"].map(o=>e.jsxs("label",{children:[e.jsx("input",{type:"radio",checked:s===o,onChange:()=>{c(o)}}),o]},o)),t&&e.jsx(Ae,{id:s},s)]})}},Le=()=>e.jsx("div",{style:{padding:8,background:"#fff",borderBottom:"solid 1px #ccc"},children:e.jsx("div",{style:{height:60,background:"#eee"}})}),L={render:()=>{const t=n.useRef(0),r=h=>{const u=[20,40,80,77];return Array.from({length:h}).map((a,g)=>{const x=t.current++;return e.jsx("div",{style:{height:u[g%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:x},x)})},[s,c]=n.useState(!1),o=async()=>{c(!0),await Re(3e3),f(h=>[...h,...r(i)]),c(!1)},i=100,[d,f]=n.useState(()=>r(i));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[e.jsx("div",{children:e.jsx("button",{onClick:()=>{o()},children:"load more"})}),e.jsxs(m,{style:{flex:1},children:[d,s&&Array.from({length:i}).map((h,u)=>e.jsx(Le,{},`skeleton_${u}`))]})]})}},_={render:()=>{const t=(u,a=0)=>{const g=[20,40,80,77];return Array.from({length:u}).map((x,p)=>(p+=a,e.jsx("div",{style:{height:g[p%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:p},p)))},[r,s]=n.useState(!1),c=async()=>{s(!0),await Re(1e3),s(!1)},o=100,[i,d]=n.useState(()=>t(o)),f=n.useRef(-1),h=i.length;return e.jsxs(m,{style:{flex:1},onRangeChange:async(u,a)=>{a+50>h&&f.current<h&&(f.current=h,await c(),d(g=>[...g,...t(o,g.length)]))},children:[i,r&&e.jsx(we,{})]})}},B={render:()=>{const t=n.useRef(null),r=n.useState(()=>y(1e3))[0],[s,c]=n.useState(0),[o,i]=n.useState(!1),[d,f]=n.useState([-1,-1]),[h,u]=n.useState(!1),[a,g]=n.useState(!1);return n.useEffect(()=>{t.current&&(t.current.scrollOffset===0?u(!0):u(!1),t.current.scrollOffset-t.current.scrollSize+t.current.viewportSize>=-1.5?g(!0):g(!1))},[s]),e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:[e.jsxs("div",{children:["scrollTop: ",s]}),e.jsxs("div",{children:["scrolling: ",o?"true":"false"]}),e.jsxs("div",{children:["index: (",d[0],", ",d[1],")"]}),e.jsxs("div",{children:["at top: ",h?"true":"false"]}),e.jsxs("div",{children:["at bottom: ",a?"true":"false"]})]}),e.jsx(m,{ref:t,style:{flex:1},onScroll:x=>{n.startTransition(()=>{c(x),i(!0)})},onScrollEnd:()=>{n.startTransition(()=>{i(!1)})},onRangeChange:async(x,p)=>{n.startTransition(()=>{f([x,p])})},children:r})]})}},V={render:()=>{const t=n.useRef(0),r=(l,v)=>Array.from({length:l}).map((N,O)=>(O+=v,{id:t.current++,index:O})),[s,c]=n.useState(!1),[o,i]=n.useState(4),[d,f]=n.useState(!1),[h,u]=n.useState(!0),[a,g]=n.useState(!1),[x,p]=n.useState(()=>r(o,0)),E=()=>{p(h?l=>{var v,N;return d?[...r(o,(((v=l[0])==null?void 0:v.index)??0)-o),...l]:[...l,...r(o,(((N=l[l.length-1])==null?void 0:N.index)??0)+1)]}:d?l=>l.slice(o):l=>l.slice(0,-o))};n.useEffect(()=>{if(!s)return;const l=setInterval(E,500);return()=>{clearInterval(l)}},[E,s]);const Ce=[20,40,80,77];return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:d,onChange:()=>{f(l=>!l)}}),"prepend"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:h,onChange:()=>{u(!0)}}),"increase"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:!h,onChange:()=>{u(!1)}}),"decrease"]}),e.jsx("input",{style:{marginLeft:4},value:o,type:"number",min:1,max:1e4,step:1,onChange:l=>{i(Number(l.target.value))}})]}),e.jsx("div",{children:e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:a,onChange:()=>{g(l=>!l)}}),"reverse"]})}),e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:16},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:s,onChange:()=>{c(l=>!l)}}),"auto"]}),e.jsx("button",{onClick:()=>{E()},children:"update"})]}),e.jsx(m,{style:{flex:1},shift:d,reverse:a,children:x.map(l=>e.jsx("div",{style:{height:Ce[Math.abs(l.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:l.index},l.id))})]})}};var M,H,D;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...(D=(H=b.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var z,P,U;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(U=(P=S.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var F,G,$;I.parameters={...I.parameters,docs:{...(F=I.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...($=(G=I.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var K,J,X;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(J=k.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var q,Q,W;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(W=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var Y,Z,ee;R.parameters={...R.parameters,docs:{...(Y=R.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(re=(te=C.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,oe,ie;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,le,ae;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ae=(le=T.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var de,ue,he;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(he=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var me,fe,ge;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var pe,xe,ye;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(xe=_.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var ve,be,Se;B.parameters={...B.parameters,docs:{...(ve=B.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Se=(be=B.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var Ie,ke,je;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(je=(ke=V.parameters)==null?void 0:ke.docs)==null?void 0:je.source}}};const ze=["Default","Horizontal","PaddingAndMargin","Reverse","Responsive","Sticky","ScrollTo","RenderProp","Keyboard","ScrollRestoration","Skeleton","InfiniteScrolling","Statuses","IncreasingItems"];export{b as Default,S as Horizontal,V as IncreasingItems,_ as InfiniteScrolling,T as Keyboard,I as PaddingAndMargin,w as RenderProp,j as Responsive,k as Reverse,A as ScrollRestoration,C as ScrollTo,L as Skeleton,B as Statuses,R as Sticky,ze as __namedExportsOrder,De as default};
