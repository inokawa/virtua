import{a as e,j as a,F as ze}from"./jsx-runtime-sgeEVxPu.js";import{r as n}from"./index-yp3VsGQP.js";import{S as G,d as $}from"./common-jfrYHwuZ.js";import{V as m}from"./VList-SFtZWj_c.js";import"./useRerender-hRLwpleo.js";import"./useChildren-ZpRND0hF.js";import"./index-8dy-jdxy.js";const nn={component:m},C=r=>{const t=[20,40,80,77];return Array.from({length:r}).map((s,i)=>e("div",{style:{height:t[i%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:i},i))},w={render:()=>e(m,{style:{height:"100vh"},children:C(1e3)})},Ge=r=>Array.from({length:r}).map((t,s)=>a("div",{style:{width:s%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",s]},s)),T={render:()=>e("div",{style:{padding:10},children:e(m,{style:{width:"100%",height:200},horizontal:!0,children:Ge(1e3)})})},A={render:()=>e(m,{style:{width:400,height:400,padding:"80px 20px",background:"lightgray"},children:Array.from({length:1e3}).map((r,t)=>e("div",{style:{height:100,borderRadius:8,margin:10,padding:10,background:"white"},children:t},t))})},L={render:()=>{const r=n.useRef(null);return n.useEffect(()=>{var t;(t=r.current)==null||t.scrollToIndex(999)},[]),e(m,{ref:r,style:{height:"100vh"},reverse:!0,children:C(1e3)})}},_={render:()=>{const r="item";return a(ze,{children:[e(m,{style:{height:"100vh"},children:Array.from({length:1e3}).map((t,s)=>e("div",{className:r,style:{borderBottom:"solid 1px #ccc",background:"#fff"},children:s},s))}),e("style",{children:`
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
        `})]})}},B={render:()=>e(m,{style:{height:"100vh"},overscan:1,children:Array.from({length:100}).map((r,t)=>e("div",{style:{borderBottom:"solid 1px #ccc"},children:Array.from({length:10}).map((s,i)=>{const o=i===0;return e("div",{style:{height:60,background:"#fff",...o&&{top:0,height:30,position:"sticky",borderBottom:"solid 1px #ccc"}},children:o?t:`${t} - ${i}`},i)})},t))})},V={render:()=>{const[t,s]=n.useState(567),[i,o]=n.useState("start"),[c,u]=n.useState(!1),[p,f]=n.useState(1e3),h=n.useRef(null);return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{children:[e("input",{type:"number",value:t,onChange:l=>{s(Number(l.target.value))}}),e("button",{onClick:()=>{var l;(l=h.current)==null||l.scrollToIndex(t,{align:i,smooth:c})},children:"scroll to index"}),e("button",{onClick:()=>{s(Math.round(1e3*Math.random()))},children:"randomize"}),a("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:i==="start",onChange:()=>{o("start")}}),"start"]}),a("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:i==="center",onChange:()=>{o("center")}}),"center"]}),a("label",{style:{marginLeft:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:i==="end",onChange:()=>{o("end")}}),"end"]}),a("label",{style:{marginLeft:4},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:c,onChange:()=>{u(l=>!l)}}),"smooth"]})]}),e("div",{children:a("div",{children:[e("input",{type:"number",value:p,onChange:l=>{f(Number(l.target.value))}}),e("button",{onClick:()=>{var l;(l=h.current)==null||l.scrollTo(p)},children:"scroll to offset"}),e("button",{onClick:()=>{var l;(l=h.current)==null||l.scrollBy(p)},children:"scroll by offset"})]})}),e(m,{ref:h,style:{flex:1},children:C(1e3)})]})}},E={render:()=>{const r=n.useRef(0),t=[20,40,80,77],s=()=>{const c=r.current++;return{id:c,height:t[c%4]}},[i,o]=n.useState(()=>Array.from({length:1e3}).map(()=>s()));return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e("div",{children:e("button",{onClick:()=>{o(c=>[...c,...Array.from({length:500}).map(()=>s())])},children:"append more"})}),e(m,{style:{flex:1},count:i.length,children:c=>{const u=i[c];return e("div",{style:{height:u.height,borderBottom:"solid 1px #ccc",background:"#fff"},children:c},u.id)}})]})}},F={render:()=>{const r=n.useRef(null),[t,s]=n.useState(-1),i=Array.from({length:1e3}).map((o,c)=>e("div",{style:{height:60,borderBottom:"solid 1px #ccc",background:t===c?"skyblue":"white",cursor:"pointer"},onClick:()=>{s(c)},children:c},c));return e(m,{ref:r,style:{height:400,width:400,margin:10},tabIndex:0,onKeyDown:o=>{if(r.current)switch(o.code){case"ArrowUp":o.preventDefault();const c=Math.max(t-1,0);s(c),r.current.scrollToIndex(c,{align:"nearest"});break;case"ArrowDown":o.preventDefault();const u=Math.min(t+1,i.length-1);s(u),r.current.scrollToIndex(u,{align:"nearest"});break}},children:i})}},$e=({id:r})=>{const t="list-cache-"+r,s=n.useRef(null),[i,o]=n.useMemo(()=>{const c=sessionStorage.getItem(t);if(!c)return[];try{return JSON.parse(c)}catch{return[]}},[]);return n.useLayoutEffect(()=>{if(!s.current)return;const c=s.current;return i&&c.scrollTo(i),()=>{sessionStorage.setItem(t,JSON.stringify([c.scrollOffset,c.cache]))}},[]),e(m,{ref:s,cache:o,style:{height:"100vh"},children:C(1e3)})},H={render:()=>{const[r,t]=n.useState(!0),[s,i]=n.useState("1");return a("div",{children:[e("button",{onClick:()=>{t(o=>!o)},children:r?"hide":"show"}),["1","2","3"].map(o=>a("label",{children:[e("input",{type:"radio",checked:s===o,onChange:()=>{i(o)}}),o]},o)),r&&e($e,{id:s},s)]})}},je=()=>e("div",{style:{padding:8,background:"#fff",borderBottom:"solid 1px #ccc"},children:e("div",{style:{height:60,background:"#eee"}})}),O={render:()=>{const r=n.useRef(0),t=f=>{const h=[20,40,80,77];return Array.from({length:f}).map((l,g)=>{const y=r.current++;return e("div",{style:{height:h[g%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:y},y)})},[s,i]=n.useState(!1),o=async()=>{i(!0),await $(3e3),p(f=>[...f,...t(c)]),i(!1)},c=100,[u,p]=n.useState(()=>t(c));return a("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[e("div",{children:e("button",{onClick:()=>{o()},children:"load more"})}),a(m,{style:{flex:1},children:[u,s&&Array.from({length:c}).map((f,h)=>e(je,{},`skeleton_${h}`))]})]})}},D={render:()=>{const r=(h,l=0)=>{const g=[20,40,80,77];return Array.from({length:h}).map((y,v)=>(v+=l,e("div",{style:{height:g[v%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:v},v)))},[t,s]=n.useState(!1),i=async()=>{s(!0),await $(1e3),s(!1)},o=100,[c,u]=n.useState(()=>r(o)),p=n.useRef(-1),f=c.length;return a(m,{style:{flex:1},onRangeChange:async(h,l)=>{l+50>f&&p.current<f&&(p.current=f,await i(),u(g=>[...g,...r(o,g.length)]))},children:[c,t&&e(G,{})]})}},N={render:()=>{const r=n.useRef(0),t=x=>{const k=[20,40,80,77];return Array.from({length:x}).map(()=>{const S=r.current++;return e("div",{style:{height:k[S%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:S},S)})},[s,i]=n.useState(!1),[o,c]=n.useState(!1),[u,p]=n.useState(!1),f=async(x=!1)=>{i(x);const k=x?c:p;k(!0),await $(1e3),k(!1)},h=n.useRef(null),l=100,[g,y]=n.useState(()=>t(l*2)),v=50,d=g.length,b=n.useRef(-1),I=n.useRef(-1),R=n.useRef(!1);return n.useEffect(()=>{var x;(x=h.current)==null||x.scrollToIndex(g.length/2+1),R.current=!0},[]),a(m,{ref:h,style:{flex:1},shift:!!s,onRangeChange:async(x,k)=>{R.current&&(k+v>d&&I.current<d?(I.current=d,await f(),y(S=>[...S,...t(l)])):x-v<0&&b.current<d&&(b.current=d,await f(!0),y(S=>[...t(l).reverse(),...S])))},children:[e(G,{style:o?void 0:{visibility:"hidden"}},"head"),g,e(G,{style:u?void 0:{visibility:"hidden"}},"foot")]})}},M={render:()=>{const r=n.useRef(null),t=n.useState(()=>C(1e3))[0],[s,i]=n.useState(0),[o,c]=n.useState(!1),[u,p]=n.useState([-1,-1]),[f,h]=n.useState(!1),[l,g]=n.useState(!1);return n.useEffect(()=>{r.current&&(r.current.scrollOffset===0?h(!0):h(!1),r.current.scrollOffset-r.current.scrollSize+r.current.viewportSize>=-1.5?g(!0):g(!1))},[s]),a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:[a("div",{children:["scrollTop: ",s]}),a("div",{children:["scrolling: ",o?"true":"false"]}),a("div",{children:["index: (",u[0],", ",u[1],")"]}),a("div",{children:["at top: ",f?"true":"false"]}),a("div",{children:["at bottom: ",l?"true":"false"]})]}),e(m,{ref:r,style:{flex:1},onScroll:y=>{n.startTransition(()=>{i(y),c(!0)})},onScrollStop:()=>{n.startTransition(()=>{c(!1)})},onRangeChange:async(y,v)=>{n.startTransition(()=>{p([y,v])})},children:t})]})}},U={render:()=>{const[r,t]=n.useState({0:!0,3:!0,6:!0,9:!0,12:!0});return e(m,{style:{height:"100vh"},children:Array.from({length:1e3}).map((s,i)=>{const o=!!r[i];return a("div",{style:{borderBottom:"solid 1px #ccc",background:o?"lightpink":"#fff",display:"flex",flexDirection:"row",transition:"0.5s ease"},children:[e("div",{children:e("button",{style:{height:"100%"},onClick:()=>{t(c=>({...c,[i]:!c[i]}))},children:o?"close":"open"})}),e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:o?200:40,transition:"0.5s ease"},children:i})]},i)})})}},P={render:()=>{const r=n.useRef(0),t=(d,b)=>Array.from({length:d}).map((I,R)=>(R+=b,{id:r.current++,index:R})),[s,i]=n.useState(!1),[o,c]=n.useState(4),[u,p]=n.useState(!1),[f,h]=n.useState(!0),[l,g]=n.useState(()=>t(o,0)),y=()=>{g(f?d=>{var b,I;return u?[...t(o,(((b=d[0])==null?void 0:b.index)??0)-o),...d]:[...d,...t(o,(((I=d[d.length-1])==null?void 0:I.index)??0)+1)]}:u?d=>d.slice(o):d=>d.slice(0,-o))};n.useEffect(()=>{if(!s)return;const d=setInterval(y,500);return()=>{clearInterval(d)}},[y,s]);const v=[20,40,80,77];return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{children:[a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!u,onChange:()=>{p(!1)}}),"append"]}),a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:u,onChange:()=>{p(!0)}}),"prepend"]}),a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:f,onChange:()=>{h(!0)}}),"increase"]}),a("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!f,onChange:()=>{h(!1)}}),"decrease"]}),e("input",{style:{marginLeft:4},value:o,type:"number",min:1,max:1e4,step:1,onChange:d=>{c(Number(d.target.value))}})]}),a("div",{children:[a("label",{style:{marginRight:16},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:s,onChange:()=>{i(d=>!d)}}),"auto"]}),e("button",{onClick:()=>{y()},children:"update"})]}),e(m,{style:{flex:1},shift:!!u,children:l.map(d=>e("div",{style:{height:v[Math.abs(d.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:d.index},d.id))})]})}},Ke=n.forwardRef(({children:r,attrs:t,height:s},i)=>e("div",{ref:i,...t,children:e("ul",{style:{position:"relative",height:s,margin:0,overflow:"hidden"},children:r})})),Je=n.forwardRef(({children:r,style:t},s)=>e("li",{ref:s,style:{...t,marginLeft:30},children:r})),z={render:()=>a("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e("div",{style:{padding:4},children:"header"}),e(m,{style:{flex:1,background:"#fff"},components:{Root:Ke,Item:Je},overscan:20,children:Array.from({length:1e3}).map((r,t)=>t)})]})};var j,K,J;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...(J=(K=w.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var W,X,q;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(X=T.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var Q,Y,Z;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;L.parameters={...L.parameters,docs:{...(ee=L.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,se,oe;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(se=_.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ce,ae;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ae=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var le,de,ue;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(de=V.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var he,fe,me;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(me=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var ge,pe,ye;F.parameters={...F.parameters,docs:{...(ge=F.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ye=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:ye.source}}};var ve,xe,be;H.parameters={...H.parameters,docs:{...(ve=H.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(be=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var Se,Ie,ke;O.parameters={...O.parameters,docs:{...(Se=O.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(ke=(Ie=O.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var Re,Ce,we;D.parameters={...D.parameters,docs:{...(Re=D.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(we=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};var Te,Ae,Le;N.parameters={...N.parameters,docs:{...(Te=N.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const id = useRef(0);
    const createRows = (num: number) => {
      const heights = [20, 40, 80, 77];
      return Array.from({
        length: num
      }).map(() => {
        const i = id.current++;
        return <div key={i} style={{
          height: heights[i % 4],
          borderBottom: "solid 1px #ccc",
          background: "#fff"
        }}>
            {i}
          </div>;
      });
    };
    const [shifting, setShifting] = useState(false);
    const [startFetching, setStartFetching] = useState(false);
    const [endFetching, setEndFetching] = useState(false);
    const fetchItems = async (isStart: boolean = false) => {
      setShifting(isStart);
      const setFetching = isStart ? setStartFetching : setEndFetching;
      setFetching(true);
      await delay(1000);
      setFetching(false);
    };
    const ref = useRef<VListHandle>(null);
    const ITEM_BATCH_COUNT = 100;
    const [items, setItems] = useState(() => createRows(ITEM_BATCH_COUNT * 2));
    const THRESHOLD = 50;
    const count = items.length;
    const startFetchedCountRef = useRef(-1);
    const endFetchedCountRef = useRef(-1);
    const ready = useRef(false);
    useEffect(() => {
      ref.current?.scrollToIndex(items.length / 2 + 1);
      ready.current = true;
    }, []);
    return <VList ref={ref} style={{
      flex: 1
    }} shift={shifting ? true : false} onRangeChange={async (start, end) => {
      if (!ready.current) return;
      if (end + THRESHOLD > count && endFetchedCountRef.current < count) {
        endFetchedCountRef.current = count;
        await fetchItems();
        setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT)]);
      } else if (start - THRESHOLD < 0 && startFetchedCountRef.current < count) {
        startFetchedCountRef.current = count;
        await fetchItems(true);
        setItems(prev => [...createRows(ITEM_BATCH_COUNT).reverse(), ...prev]);
      }
    }}>
        <Spinner key="head" style={startFetching ? undefined : {
        visibility: "hidden"
      }} />
        {items}
        <Spinner key="foot" style={endFetching ? undefined : {
        visibility: "hidden"
      }} />
      </VList>;
  }
}`,...(Le=(Ae=N.parameters)==null?void 0:Ae.docs)==null?void 0:Le.source}}};var _e,Be,Ve;M.parameters={...M.parameters,docs:{...(_e=M.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Ve=(Be=M.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};var Ee,Fe,He;U.parameters={...U.parameters,docs:{...(Ee=U.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(He=(Fe=U.parameters)==null?void 0:Fe.docs)==null?void 0:He.source}}};var Oe,De,Ne;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
          <input style={{
          marginLeft: 4
        }} value={amount} type="number" min={1} max={10000} step={1} onChange={e => {
          setAmount(Number(e.target.value));
        }} />
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
      }} shift={prepend ? true : false}>
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
}`,...(Ne=(De=P.parameters)==null?void 0:De.docs)==null?void 0:Ne.source}}};var Me,Ue,Pe;z.parameters={...z.parameters,docs:{...(Me=z.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Pe=(Ue=z.parameters)==null?void 0:Ue.docs)==null?void 0:Pe.source}}};const tn=["Default","Horizontal","PaddingAndMargin","Reverse","Responsive","Sticky","ScrollTo","RenderProp","Keyboard","ScrollRestoration","Skeleton","InfiniteScrolling","BiDirectionalInfiniteScrolling","Statuses","WithState","IncreasingItems","Ul"];export{N as BiDirectionalInfiniteScrolling,w as Default,T as Horizontal,P as IncreasingItems,D as InfiniteScrolling,F as Keyboard,A as PaddingAndMargin,E as RenderProp,_ as Responsive,L as Reverse,H as ScrollRestoration,V as ScrollTo,O as Skeleton,M as Statuses,B as Sticky,z as Ul,U as WithState,tn as __namedExportsOrder,nn as default};
