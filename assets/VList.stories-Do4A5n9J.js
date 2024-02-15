import{a as e,j as a,F as Ve}from"./jsx-runtime-CWvgoIdH.js";import{r as n}from"./index-D3g0PtM7.js";import{S as Ee,d as _e}from"./common-D8xz_2Ta.js";import{V as f}from"./VList-B6mYKQNL.js";import"./Virtualizer-Bf7jCmvk.js";import"./useRerender-BgmOizsn.js";import"./useChildren-KTFcnUJ7.js";import"./index-4KpVZEbj.js";const je={component:f},x=r=>{const s=[20,40,80,77];return Array.from({length:r}).map((i,c)=>e("div",{style:{height:s[c%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:c},c))},S={render:()=>e(f,{style:{height:"100vh"},children:x(1e3)})},Ne=r=>Array.from({length:r}).map((s,i)=>a("div",{style:{width:i%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",i]},i)),I={render:()=>e("div",{style:{padding:10},children:e(f,{style:{width:"100%",height:200},horizontal:!0,children:Ne(1e3)})})},k={render:()=>e(f,{style:{width:400,height:400,background:"lightgray"},children:Array.from({length:1e3}).map((r,s)=>e("div",{style:{height:100,borderRadius:8,margin:20,padding:20,background:"white"},children:s},s))})},C={render:()=>{const r=n.useRef(null);return n.useEffect(()=>{var s;(s=r.current)==null||s.scrollToIndex(999)},[]),e(f,{ref:r,style:{height:"100vh"},reverse:!0,children:x(1e3)})}},R={render:()=>{const r="item";return a(Ve,{children:[e(f,{style:{height:"100vh"},children:Array.from({length:1e3}).map((s,i)=>e("div",{className:r,style:{borderBottom:"solid 1px #ccc",background:"#fff"},children:i},i))}),e("style",{children:`
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
        `})]})}},w={render:()=>e(f,{style:{height:"100vh"},overscan:1,children:Array.from({length:100}).map((r,s)=>e("div",{style:{borderBottom:"solid 1px #ccc"},children:Array.from({length:10}).map((i,c)=>{const t=c===0;return e("div",{style:{height:60,background:"#fff",...t&&{top:0,height:30,position:"sticky",borderBottom:"solid 1px #ccc"}},children:t?s:`${s} - ${c}`},c)})},s))})},A={render:()=>{const[s,i]=n.useState(567),[c,t]=n.useState("start"),[o,u]=n.useState(!1),[p,m]=n.useState(1e3),h=n.useRef(null);return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{children:[e("input",{type:"number",value:s,onChange:d=>{i(Number(d.target.value))}}),e("button",{onClick:()=>{var d;(d=h.current)==null||d.scrollToIndex(s,{align:c,smooth:o})},children:"scroll to index"}),e("button",{onClick:()=>{i(Math.round(1e3*Math.random()))},children:"randomize"}),a("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:c==="start",onChange:()=>{t("start")}}),"start"]}),a("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:c==="center",onChange:()=>{t("center")}}),"center"]}),a("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:c==="end",onChange:()=>{t("end")}}),"end"]}),a("label",{style:{marginLeft:4},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:o,onChange:()=>{u(d=>!d)}}),"smooth"]})]}),e("div",{children:a("div",{children:[e("input",{type:"number",value:p,onChange:d=>{m(Number(d.target.value))}}),e("button",{onClick:()=>{var d;(d=h.current)==null||d.scrollTo(p)},children:"scroll to offset"}),e("button",{onClick:()=>{var d;(d=h.current)==null||d.scrollBy(p)},children:"scroll by offset"})]})}),e(f,{ref:h,style:{flex:1},children:x(1e3)})]})}},T={render:()=>{const r=n.useRef(0),s=[20,40,80,77],i=()=>{const o=r.current++;return{id:o,height:s[o%4]}},[c,t]=n.useState(()=>Array.from({length:1e3}).map(()=>i()));return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e("div",{children:e("button",{onClick:()=>{t(o=>[...o,...Array.from({length:500}).map(()=>i())])},children:"append more"})}),e(f,{style:{flex:1},count:c.length,children:o=>{const u=c[o];return e("div",{style:{height:u.height,borderBottom:"solid 1px #ccc",background:"#fff"},children:o},u.id)}})]})}},L={render:()=>{const r=n.useRef(null),[s,i]=n.useState(-1),c=Array.from({length:1e3}).map((t,o)=>e("div",{style:{height:60,borderBottom:"solid 1px #ccc",background:s===o?"skyblue":"white",cursor:"pointer"},onClick:()=>{i(o)},children:o},o));return e(f,{ref:r,style:{height:400,width:400,margin:10},tabIndex:0,onKeyDown:t=>{if(r.current)switch(t.code){case"ArrowUp":t.preventDefault();const o=Math.max(s-1,0);i(o),r.current.scrollToIndex(o,{align:"nearest"});break;case"ArrowDown":t.preventDefault();const u=Math.min(s+1,c.length-1);i(u),r.current.scrollToIndex(u,{align:"nearest"});break}},children:c})}},Oe=({id:r})=>{const s="list-cache-"+r,i=n.useRef(null),[c,t]=n.useMemo(()=>{const o=sessionStorage.getItem(s);if(!o)return[];try{return JSON.parse(o)}catch{return[]}},[]);return n.useLayoutEffect(()=>{if(!i.current)return;const o=i.current;return c&&o.scrollTo(c),()=>{sessionStorage.setItem(s,JSON.stringify([o.scrollOffset,o.cache]))}},[]),e(f,{ref:i,cache:t,style:{height:"100vh"},children:x(1e3)})},_={render:()=>{const[r,s]=n.useState(!0),[i,c]=n.useState("1");return a("div",{children:[e("button",{onClick:()=>{s(t=>!t)},children:r?"hide":"show"}),["1","2","3"].map(t=>a("label",{children:[e("input",{type:"radio",checked:i===t,onChange:()=>{c(t)}}),t]},t)),r&&e(Oe,{id:i},i)]})}},Me=()=>e("div",{style:{padding:8,background:"#fff",borderBottom:"solid 1px #ccc"},children:e("div",{style:{height:60,background:"#eee"}})}),B={render:()=>{const r=n.useRef(0),s=m=>{const h=[20,40,80,77];return Array.from({length:m}).map((d,g)=>{const v=r.current++;return e("div",{style:{height:h[g%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:v},v)})},[i,c]=n.useState(!1),t=async()=>{c(!0),await _e(3e3),p(m=>[...m,...s(o)]),c(!1)},o=100,[u,p]=n.useState(()=>s(o));return a("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[e("div",{children:e("button",{onClick:()=>{t()},children:"load more"})}),a(f,{style:{flex:1},children:[u,i&&Array.from({length:o}).map((m,h)=>e(Me,{},`skeleton_${h}`))]})]})}},V={render:()=>{const r=(h,d=0)=>{const g=[20,40,80,77];return Array.from({length:h}).map((v,y)=>(y+=d,e("div",{style:{height:g[y%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:y},y)))},[s,i]=n.useState(!1),c=async()=>{i(!0),await _e(1e3),i(!1)},t=100,[o,u]=n.useState(()=>r(t)),p=n.useRef(-1),m=o.length;return a(f,{style:{flex:1},onRangeChange:async(h,d)=>{d+50>m&&p.current<m&&(p.current=m,await c(),u(g=>[...g,...r(t,g.length)]))},children:[o,s&&e(Ee,{})]})}},E={render:()=>{const r=n.useRef(null),s=n.useState(()=>x(1e3))[0],[i,c]=n.useState(0),[t,o]=n.useState(!1),[u,p]=n.useState([-1,-1]),[m,h]=n.useState(!1),[d,g]=n.useState(!1);return n.useEffect(()=>{r.current&&(r.current.scrollOffset===0?h(!0):h(!1),r.current.scrollOffset-r.current.scrollSize+r.current.viewportSize>=-1.5?g(!0):g(!1))},[i]),a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:[a("div",{children:["scrollTop: ",i]}),a("div",{children:["scrolling: ",t?"true":"false"]}),a("div",{children:["index: (",u[0],", ",u[1],")"]}),a("div",{children:["at top: ",m?"true":"false"]}),a("div",{children:["at bottom: ",d?"true":"false"]})]}),e(f,{ref:r,style:{flex:1},onScroll:v=>{n.startTransition(()=>{c(v),o(!0)})},onScrollEnd:()=>{n.startTransition(()=>{o(!1)})},onRangeChange:async(v,y)=>{n.startTransition(()=>{p([v,y])})},children:s})]})}},N={render:()=>{const[r,s]=n.useState({0:!0,3:!0,6:!0,9:!0,12:!0});return e(f,{style:{height:"100vh"},children:Array.from({length:1e3}).map((i,c)=>{const t=!!r[c];return a("div",{style:{borderBottom:"solid 1px #ccc",background:t?"lightpink":"#fff",display:"flex",flexDirection:"row",transition:"0.5s ease"},children:[e("div",{children:e("button",{style:{height:"100%"},onClick:()=>{s(o=>({...o,[c]:!o[c]}))},children:t?"close":"open"})}),e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:t?200:40,transition:"0.5s ease"},children:c})]},c)})})}},O={render:()=>{const r=n.useRef(0),s=(l,b)=>Array.from({length:l}).map((D,H)=>(H+=b,{id:r.current++,index:H})),[i,c]=n.useState(!1),[t,o]=n.useState(4),[u,p]=n.useState(!1),[m,h]=n.useState(!0),[d,g]=n.useState(!1),[v,y]=n.useState(()=>s(t,0)),M=()=>{y(m?l=>{var b,D;return u?[...s(t,(((b=l[0])==null?void 0:b.index)??0)-t),...l]:[...l,...s(t,(((D=l[l.length-1])==null?void 0:D.index)??0)+1)]}:u?l=>l.slice(t):l=>l.slice(0,-t))};n.useEffect(()=>{if(!i)return;const l=setInterval(M,500);return()=>{clearInterval(l)}},[M,i]);const Be=[20,40,80,77];return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{children:[a("label",{style:{marginRight:4},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:u,onChange:()=>{p(l=>!l)}}),"prepend"]}),a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:m,onChange:()=>{h(!0)}}),"increase"]}),a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!m,onChange:()=>{h(!1)}}),"decrease"]}),e("input",{style:{marginLeft:4},value:t,type:"number",min:1,max:1e4,step:1,onChange:l=>{o(Number(l.target.value))}})]}),e("div",{children:a("label",{style:{marginRight:4},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:d,onChange:()=>{g(l=>!l)}}),"reverse"]})}),a("div",{children:[a("label",{style:{marginRight:16},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:i,onChange:()=>{c(l=>!l)}}),"auto"]}),e("button",{onClick:()=>{M()},children:"update"})]}),e(f,{style:{flex:1},shift:u,reverse:d,children:v.map(l=>e("div",{style:{height:Be[Math.abs(l.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:l.index},l.id))})]})}};var z,F,P;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...(P=(F=S.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var U,G,$;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...($=(G=I.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var j,K,J;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(J=(K=k.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var W,X,q;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(X=C.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var Q,Y,Z;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,se,oe;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(se=A.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ce,ae;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ae=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var le,de,ue;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(de=L.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var he,me,fe;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(fe=(me=_.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var pe,ge,ye;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var ve,xe,be;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(be=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var Se,Ie,ke;E.parameters={...E.parameters,docs:{...(Se=E.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(ke=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var Ce,Re,we;N.parameters={...N.parameters,docs:{...(Ce=N.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(we=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:we.source}}};var Ae,Te,Le;O.parameters={...O.parameters,docs:{...(Ae=O.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Le=(Te=O.parameters)==null?void 0:Te.docs)==null?void 0:Le.source}}};const Ke=["Default","Horizontal","PaddingAndMargin","Reverse","Responsive","Sticky","ScrollTo","RenderProp","Keyboard","ScrollRestoration","Skeleton","InfiniteScrolling","Statuses","WithState","IncreasingItems"];export{S as Default,I as Horizontal,O as IncreasingItems,V as InfiniteScrolling,L as Keyboard,k as PaddingAndMargin,T as RenderProp,R as Responsive,C as Reverse,_ as ScrollRestoration,A as ScrollTo,B as Skeleton,E as Statuses,w as Sticky,N as WithState,Ke as __namedExportsOrder,je as default};
