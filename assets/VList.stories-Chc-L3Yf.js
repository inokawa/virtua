import{a as e,j as l,F as Ae}from"./jsx-runtime-CWvgoIdH.js";import{r as n}from"./index-D3g0PtM7.js";import{S as Le,d as we}from"./common-D8xz_2Ta.js";import{V as f}from"./VList-BZP1jqRG.js";import"./Virtualizer-RVW-puSz.js";import"./useRerender-C1SY4zsE.js";import"./useChildren-_iKQC4T1.js";import"./index-4KpVZEbj.js";const Pe={component:f},x=t=>{const r=[20,40,80,77];return Array.from({length:t}).map((s,c)=>e("div",{style:{height:r[c%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:c},c))},S={render:()=>e(f,{style:{height:"100vh"},children:x(1e3)})},_e=t=>Array.from({length:t}).map((r,s)=>l("div",{style:{width:s%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",s]},s)),I={render:()=>e("div",{style:{padding:10},children:e(f,{style:{width:"100%",height:200},horizontal:!0,children:_e(1e3)})})},k={render:()=>e(f,{style:{width:400,height:400,background:"lightgray"},children:Array.from({length:1e3}).map((t,r)=>e("div",{style:{height:100,borderRadius:8,margin:20,padding:20,background:"white"},children:r},r))})},R={render:()=>{const t=n.useRef(null);return n.useEffect(()=>{var r;(r=t.current)==null||r.scrollToIndex(999)},[]),e(f,{ref:t,style:{height:"100vh"},reverse:!0,children:x(1e3)})}},C={render:()=>{const t="item";return l(Ae,{children:[e(f,{style:{height:"100vh"},children:Array.from({length:1e3}).map((r,s)=>e("div",{className:t,style:{borderBottom:"solid 1px #ccc",background:"#fff"},children:s},s))}),e("style",{children:`
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
        `})]})}},w={render:()=>e(f,{style:{height:"100vh"},overscan:1,children:Array.from({length:100}).map((t,r)=>e("div",{style:{borderBottom:"solid 1px #ccc"},children:Array.from({length:10}).map((s,c)=>{const o=c===0;return e("div",{style:{height:60,background:"#fff",...o&&{top:0,height:30,position:"sticky",borderBottom:"solid 1px #ccc"}},children:o?r:`${r} - ${c}`},c)})},r))})},T={render:()=>{const[r,s]=n.useState(567),[c,o]=n.useState("start"),[i,u]=n.useState(!1),[g,m]=n.useState(1e3),h=n.useRef(null);return l("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[l("div",{children:[e("input",{type:"number",value:r,onChange:d=>{s(Number(d.target.value))}}),e("button",{onClick:()=>{var d;(d=h.current)==null||d.scrollToIndex(r,{align:c,smooth:i})},children:"scroll to index"}),e("button",{onClick:()=>{s(Math.round(1e3*Math.random()))},children:"randomize"}),l("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:c==="start",onChange:()=>{o("start")}}),"start"]}),l("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:c==="center",onChange:()=>{o("center")}}),"center"]}),l("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:c==="end",onChange:()=>{o("end")}}),"end"]}),l("label",{style:{marginLeft:4},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:i,onChange:()=>{u(d=>!d)}}),"smooth"]})]}),e("div",{children:l("div",{children:[e("input",{type:"number",value:g,onChange:d=>{m(Number(d.target.value))}}),e("button",{onClick:()=>{var d;(d=h.current)==null||d.scrollTo(g)},children:"scroll to offset"}),e("button",{onClick:()=>{var d;(d=h.current)==null||d.scrollBy(g)},children:"scroll by offset"})]})}),e(f,{ref:h,style:{flex:1},children:x(1e3)})]})}},A={render:()=>{const t=n.useRef(0),r=[20,40,80,77],s=()=>{const i=t.current++;return{id:i,height:r[i%4]}},[c,o]=n.useState(()=>Array.from({length:1e3}).map(()=>s()));return l("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e("div",{children:e("button",{onClick:()=>{o(i=>[...i,...Array.from({length:500}).map(()=>s())])},children:"append more"})}),e(f,{style:{flex:1},count:c.length,children:i=>{const u=c[i];return e("div",{style:{height:u.height,borderBottom:"solid 1px #ccc",background:"#fff"},children:i},u.id)}})]})}},L={render:()=>{const t=n.useRef(null),[r,s]=n.useState(-1),c=Array.from({length:1e3}).map((o,i)=>e("div",{style:{height:60,borderBottom:"solid 1px #ccc",background:r===i?"skyblue":"white",cursor:"pointer"},onClick:()=>{s(i)},children:i},i));return e(f,{ref:t,style:{height:400,width:400,margin:10},tabIndex:0,onKeyDown:o=>{if(t.current)switch(o.code){case"ArrowUp":o.preventDefault();const i=Math.max(r-1,0);s(i),t.current.scrollToIndex(i,{align:"nearest"});break;case"ArrowDown":o.preventDefault();const u=Math.min(r+1,c.length-1);s(u),t.current.scrollToIndex(u,{align:"nearest"});break}},children:c})}},Be=({id:t})=>{const r="list-cache-"+t,s=n.useRef(null),[c,o]=n.useMemo(()=>{const i=sessionStorage.getItem(r);if(!i)return[];try{return JSON.parse(i)}catch{return[]}},[]);return n.useLayoutEffect(()=>{if(!s.current)return;const i=s.current;return c&&i.scrollTo(c),()=>{sessionStorage.setItem(r,JSON.stringify([i.scrollOffset,i.cache]))}},[]),e(f,{ref:s,cache:o,style:{height:"100vh"},children:x(1e3)})},_={render:()=>{const[t,r]=n.useState(!0),[s,c]=n.useState("1");return l("div",{children:[e("button",{onClick:()=>{r(o=>!o)},children:t?"hide":"show"}),["1","2","3"].map(o=>l("label",{children:[e("input",{type:"radio",checked:s===o,onChange:()=>{c(o)}}),o]},o)),t&&e(Be,{id:s},s)]})}},Ve=()=>e("div",{style:{padding:8,background:"#fff",borderBottom:"solid 1px #ccc"},children:e("div",{style:{height:60,background:"#eee"}})}),B={render:()=>{const t=n.useRef(0),r=m=>{const h=[20,40,80,77];return Array.from({length:m}).map((d,p)=>{const v=t.current++;return e("div",{style:{height:h[p%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:v},v)})},[s,c]=n.useState(!1),o=async()=>{c(!0),await we(3e3),g(m=>[...m,...r(i)]),c(!1)},i=100,[u,g]=n.useState(()=>r(i));return l("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[e("div",{children:e("button",{onClick:()=>{o()},children:"load more"})}),l(f,{style:{flex:1},children:[u,s&&Array.from({length:i}).map((m,h)=>e(Ve,{},`skeleton_${h}`))]})]})}},V={render:()=>{const t=(h,d=0)=>{const p=[20,40,80,77];return Array.from({length:h}).map((v,y)=>(y+=d,e("div",{style:{height:p[y%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:y},y)))},[r,s]=n.useState(!1),c=async()=>{s(!0),await we(1e3),s(!1)},o=100,[i,u]=n.useState(()=>t(o)),g=n.useRef(-1),m=i.length;return l(f,{style:{flex:1},onRangeChange:async(h,d)=>{d+50>m&&g.current<m&&(g.current=m,await c(),u(p=>[...p,...t(o,p.length)]))},children:[i,r&&e(Le,{})]})}},E={render:()=>{const t=n.useRef(null),r=n.useState(()=>x(1e3))[0],[s,c]=n.useState(0),[o,i]=n.useState(!1),[u,g]=n.useState([-1,-1]),[m,h]=n.useState(!1),[d,p]=n.useState(!1);return n.useEffect(()=>{t.current&&(t.current.scrollOffset===0?h(!0):h(!1),t.current.scrollOffset-t.current.scrollSize+t.current.viewportSize>=-1.5?p(!0):p(!1))},[s]),l("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[l("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:[l("div",{children:["scrollTop: ",s]}),l("div",{children:["scrolling: ",o?"true":"false"]}),l("div",{children:["index: (",u[0],", ",u[1],")"]}),l("div",{children:["at top: ",m?"true":"false"]}),l("div",{children:["at bottom: ",d?"true":"false"]})]}),e(f,{ref:t,style:{flex:1},onScroll:v=>{n.startTransition(()=>{c(v),i(!0)})},onScrollEnd:()=>{n.startTransition(()=>{i(!1)})},onRangeChange:async(v,y)=>{n.startTransition(()=>{g([v,y])})},children:r})]})}},N={render:()=>{const t=n.useRef(0),r=(a,b)=>Array.from({length:a}).map((M,H)=>(H+=b,{id:t.current++,index:H})),[s,c]=n.useState(!1),[o,i]=n.useState(4),[u,g]=n.useState(!1),[m,h]=n.useState(!0),[d,p]=n.useState(!1),[v,y]=n.useState(()=>r(o,0)),O=()=>{y(m?a=>{var b,M;return u?[...r(o,(((b=a[0])==null?void 0:b.index)??0)-o),...a]:[...a,...r(o,(((M=a[a.length-1])==null?void 0:M.index)??0)+1)]}:u?a=>a.slice(o):a=>a.slice(0,-o))};n.useEffect(()=>{if(!s)return;const a=setInterval(O,500);return()=>{clearInterval(a)}},[O,s]);const Te=[20,40,80,77];return l("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[l("div",{children:[l("label",{style:{marginRight:4},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:u,onChange:()=>{g(a=>!a)}}),"prepend"]}),l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:m,onChange:()=>{h(!0)}}),"increase"]}),l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!m,onChange:()=>{h(!1)}}),"decrease"]}),e("input",{style:{marginLeft:4},value:o,type:"number",min:1,max:1e4,step:1,onChange:a=>{i(Number(a.target.value))}})]}),e("div",{children:l("label",{style:{marginRight:4},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:d,onChange:()=>{p(a=>!a)}}),"reverse"]})}),l("div",{children:[l("label",{style:{marginRight:16},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:s,onChange:()=>{c(a=>!a)}}),"auto"]}),e("button",{onClick:()=>{O()},children:"update"})]}),e(f,{style:{flex:1},shift:u,reverse:d,children:v.map(a=>e("div",{style:{height:Te[Math.abs(a.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:a.index},a.id))})]})}};var D,z,F;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...(F=(z=S.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var P,U,G;I.parameters={...I.parameters,docs:{...(P=I.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(U=I.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var $,j,K;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(j=k.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var J,X,q;R.parameters={...R.parameters,docs:{...(J=R.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(q=(X=R.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var Q,W,Y;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(W=C.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,ee,ne;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,se;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(re=T.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ie,ce;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,ae,de;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};var ue,he,me;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(he=_.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var fe,ge,pe;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(pe=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var ye,ve,xe;V.parameters={...V.parameters,docs:{...(ye=V.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(xe=(ve=V.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var be,Se,Ie;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ie=(Se=E.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var ke,Re,Ce;N.parameters={...N.parameters,docs:{...(ke=N.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ce=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:Ce.source}}};const Ue=["Default","Horizontal","PaddingAndMargin","Reverse","Responsive","Sticky","ScrollTo","RenderProp","Keyboard","ScrollRestoration","Skeleton","InfiniteScrolling","Statuses","IncreasingItems"];export{S as Default,I as Horizontal,N as IncreasingItems,V as InfiniteScrolling,L as Keyboard,k as PaddingAndMargin,A as RenderProp,C as Responsive,R as Reverse,_ as ScrollRestoration,T as ScrollTo,B as Skeleton,E as Statuses,w as Sticky,Ue as __namedExportsOrder,Pe as default};
