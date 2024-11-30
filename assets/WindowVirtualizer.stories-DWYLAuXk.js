import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as s}from"./index-DRjF_FHU.js";import{S as ge,d as xe}from"./common-B4Hkentz.js";import{a as ye,A as ve,b as be,u as U,r as S,U as Se,h as we,j as Ie,n as je,c as ke,o as _e,p as Re}from"./useRerender-Ba-kRDiv.js";import{u as Ce,a as G,L as Te}from"./useChildren-DzgcxD_v.js";import{r as Le}from"./index-uWwxbAOW.js";const f=s.forwardRef(({children:a,count:i,overscan:r,itemSize:o,shift:t,horizontal:c,cache:u,ssrCount:p,as:l="div",item:m="div",onScroll:g,onScrollEnd:x},y)=>{l=l;const[j,n]=Ce(a,i),v=s.useRef(null),w=G(g),I=G(x),H=s.useRef(!!p),[d,N,k,W]=ye(()=>{const h=!!c,b=ke(n,o,r,p,u,!o);return[b,_e(b,h),Re(b,h),h]});n!==d._getItemsLength()&&d._update(ve,[n,t]);const O=be(d),[ue,pe]=d._getRange(),he=d._isScrolling(),fe=d._getJumpCount(),D=d._getTotalSize(),M=[];U(()=>{H[S]=!1;const h=d._subscribe(Se,me=>{me?Le.flushSync(O):O()}),b=d._subscribe(we,()=>{w[S]&&w[S](d._getScrollOffset())}),_=d._subscribe(Ie,()=>{I[S]&&I[S]()}),B=v[S];return N._observeRoot(B),k._observe(B),()=>{h(),b(),_(),N._dispose(),k._dispose()}},[]),U(()=>{k._fixScrollJump()},[fe]),s.useImperativeHandle(y,()=>({get cache(){return d._getCacheSnapshot()},findStartIndex:d._findStartIndex,findEndIndex:d._findEndIndex,scrollToIndex:k._scrollToIndex}),[]);for(let h=ue,b=pe;h<=b;h++){const _=j(h);M.push(e.jsx(Te,{_resizer:N._observeItem,_index:h,_offset:d._getItemOffset(h),_hide:d._isUnmeasuredItem(h),_as:m,_children:_,_isHorizontal:W,_isSSR:H[S]},je(_,h)))}return e.jsx(l,{ref:v,style:{flex:"none",position:"relative",visibility:"hidden",width:W?D:"100%",height:W?"100%":D,pointerEvents:he?"none":void 0},children:M})});f.__docgenInfo={description:"{@link Virtualizer} controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizerHandle}.",methods:[{name:"cache",docblock:null,modifiers:["get"],params:[],returns:null}],displayName:"WindowVirtualizer",props:{as:{defaultValue:{value:'"div"',computed:!1},required:!1},item:{defaultValue:{value:'"div"',computed:!1},required:!1}}};const V=a=>{const i=[20,40,80,77];return Array.from({length:a}).map((r,o)=>e.jsx("div",{style:{height:i[o%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:o},o))},ze=a=>Array.from({length:a}).map((i,r)=>e.jsxs("div",{style:{width:r%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",r]},r)),De={component:f},R={render:()=>e.jsx("div",{style:{padding:"200px 100px"},children:e.jsx("div",{style:{border:"solid 1px gray"},children:e.jsx(f,{children:V(1e3)})})})},C={render:()=>e.jsx("div",{style:{padding:"100px 200px"},children:e.jsx("div",{style:{display:"inline-block",border:"solid 1px gray",height:400},children:e.jsx(f,{horizontal:!0,children:ze(1e3)})})})},T={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{background:"white",height:60,marginBottom:40},children:"header"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx("div",{style:{flex:1,display:"flex",paddingTop:600,margin:10},children:e.jsx(f,{children:V(1e3)})}),e.jsx("div",{style:{flex:3,margin:10},children:e.jsx(f,{children:Array.from({length:1e3}).map((a,i)=>e.jsx("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:i},i))})}),e.jsx("div",{style:{flex:2,padding:20,paddingTop:300},children:e.jsx("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]}),e.jsx("div",{style:{background:"white",height:60,marginTop:40},children:"footer"})]})},L={render:()=>{const a=(g,x=0)=>{const y=[20,40,80,77];return Array.from({length:g}).map((j,n)=>(n+=x,e.jsx("div",{style:{height:y[n%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:n},n)))},[i,r]=s.useState(!1),o=async()=>{r(!0),await xe(1e3),r(!1)},t=100,[c,u]=s.useState(()=>a(t)),p=s.useRef(-1),l=c.length,m=s.useRef(null);return e.jsx("div",{style:{padding:"200px 100px 0px 100px"},children:e.jsxs(f,{ref:m,onScroll:async()=>{m.current&&p.current<l&&m.current.findEndIndex()+50>l&&(p.current=l,await o(),u(g=>[...g,...a(t,g.length)]))},children:[c,i&&e.jsx(ge,{})]})})}},Ee=({id:a})=>{const i="window-list-cache-"+a,r=s.useRef(null),[o,t]=s.useMemo(()=>{const c=sessionStorage.getItem(i);if(!c)return[];try{return JSON.parse(c)}catch{return[]}},[]);return s.useLayoutEffect(()=>{if(!r.current)return;const c=r.current;window.scrollTo(0,o??0);let u=0;const p=()=>{u=window.scrollY};return window.addEventListener("scroll",p),p(),()=>{window.removeEventListener("scroll",p),sessionStorage.setItem(i,JSON.stringify([u,c.cache]))}},[]),e.jsx(f,{ref:r,cache:t,children:V(1e3)})},z={render:()=>{const[a,i]=s.useState(!0),[r,o]=s.useState("1");return e.jsxs("div",{style:{position:"relative"},children:[e.jsxs("div",{style:{position:"fixed",top:0,left:0,zIndex:10},children:[e.jsx("button",{onClick:()=>{i(t=>!t)},children:a?"hide":"show"}),["1","2","3"].map(t=>e.jsxs("label",{children:[e.jsx("input",{type:"radio",checked:r===t,onChange:()=>{o(t)}}),t]},t))]}),a&&e.jsx(Ee,{id:r},r)]})}},E={render:()=>{const a=s.useRef(0),i=(n,v)=>Array.from({length:n}).map((w,I)=>(I+=v,{id:a.current++,index:I})),[r,o]=s.useState(!1),[t,c]=s.useState(4),[u,p]=s.useState(!1),[l,m]=s.useState(!0),[g,x]=s.useState(()=>i(t,0)),y=()=>{x(l?n=>{var v,w;return u?[...i(t,(((v=n[0])==null?void 0:v.index)??0)-t),...n]:[...n,...i(t,(((w=n[n.length-1])==null?void 0:w.index)??0)+1)]}:u?n=>n.slice(t):n=>n.slice(0,-t))};s.useEffect(()=>{if(!r)return;const n=setInterval(y,500);return()=>{clearInterval(n)}},[y,r]);const j=[20,40,80,77];return e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{position:"fixed",width:"100%",top:0,zIndex:1,backdropFilter:"blur(1px)"},children:[e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:u,onChange:()=>{p(n=>!n)}}),"prepend"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:l,onChange:()=>{m(!0)}}),"increase"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:!l,onChange:()=>{m(!1)}}),"decrease"]}),e.jsx("input",{style:{marginLeft:4},value:t,type:"number",min:1,max:1e4,step:1,onChange:n=>{c(Number(n.target.value))}})]}),e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:16},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:r,onChange:()=>{o(n=>!n)}}),"auto"]}),e.jsx("button",{onClick:()=>{y()},children:"update"})]})]}),e.jsx("div",{style:{flex:1},children:e.jsx(f,{shift:u,children:g.map(n=>e.jsx("div",{style:{height:j[Math.abs(n.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:n.index},n.id))})})]})}},A={render:()=>{const[i,r]=s.useState(567),[o,t]=s.useState("start"),[c,u]=s.useState(!1),p=s.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{position:"fixed",top:30,left:150,zIndex:1,padding:10,border:"1px solid #ccc",backgroundColor:"white"},children:[e.jsx("input",{type:"number",value:i,onChange:l=>{r(Number(l.target.value))}}),e.jsx("button",{onClick:()=>{var l;(l=p.current)==null||l.scrollToIndex(i,{align:o,smooth:c})},children:"scroll to index"}),e.jsx("button",{onClick:()=>{r(Math.round(1e3*Math.random()))},children:"randomize"}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:o==="start",onChange:()=>{t("start")}}),"start"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:o==="center",onChange:()=>{t("center")}}),"center"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:o==="end",onChange:()=>{t("end")}}),"end"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:c,onChange:()=>{u(l=>!l)}}),"smooth"]})]}),e.jsx("div",{style:{padding:"100px"},children:e.jsx("div",{style:{border:"1px solid darkgrey"},id:"window-virtualizer-parent",children:e.jsx(f,{ref:p,children:V(1e3)})})})]})}};var F,P,J;R.parameters={...R.parameters,docs:{...(F=R.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: "200px 100px"
    }}>
        <div style={{
        border: "solid 1px gray"
      }}>
          <WindowVirtualizer>{createRows(1000)}</WindowVirtualizer>
        </div>
      </div>;
  }
}`,...(J=(P=R.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};var K,q,Y;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: "100px 200px"
    }}>
        <div style={{
        display: "inline-block",
        border: "solid 1px gray",
        height: 400
      }}>
          <WindowVirtualizer horizontal>
            {createColumns(1000)}
          </WindowVirtualizer>
        </div>
      </div>;
  }
}`,...(Y=(q=C.parameters)==null?void 0:q.docs)==null?void 0:Y.source}}};var Q,X,Z;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        background: "white",
        height: 60,
        marginBottom: 40
      }}>
          header
        </div>
        <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
          <div style={{
          flex: 1,
          display: "flex",
          paddingTop: 600,
          margin: 10
        }}>
            <WindowVirtualizer>{createRows(1000)}</WindowVirtualizer>
          </div>
          <div style={{
          flex: 3,
          margin: 10
        }}>
            <WindowVirtualizer>
              {Array.from({
              length: 1000
            }).map((_, i) => {
              return <div key={i} style={{
                height: 200,
                borderRadius: 8,
                margin: 16,
                background: "#fff"
              }}>
                    {i}
                  </div>;
            })}
            </WindowVirtualizer>
          </div>
          <div style={{
          flex: 2,
          padding: 20,
          paddingTop: 300
        }}>
            <div style={{
            top: 0,
            height: 400,
            position: "sticky",
            background: "white"
          }}></div>
          </div>
        </div>
        <div style={{
        background: "white",
        height: 60,
        marginTop: 40
      }}>
          footer
        </div>
      </div>;
  }
}`,...(Z=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ne;L.parameters={...L.parameters,docs:{...($=L.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    const ref = useRef<WindowVirtualizerHandle>(null);
    return <div style={{
      padding: "200px 100px 0px 100px"
    }}>
        <WindowVirtualizer ref={ref} onScroll={async () => {
        if (!ref.current) return;
        if (fetchedCountRef.current < count && ref.current.findEndIndex() + 50 > count) {
          fetchedCountRef.current = count;
          await fetchItems();
          setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT, prev.length)]);
        }
      }}>
          {items}
          {fetching && <Spinner />}
        </WindowVirtualizer>
      </div>;
  }
}`,...(ne=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,se;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(true);
    const [selectedId, setSelectedId] = useState("1");
    return <div style={{
      position: "relative"
    }}>
        <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10
      }}>
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
        </div>
        {show && <RestorableList key={selectedId} id={selectedId} />}
      </div>;
  }
}`,...(se=(re=z.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,oe,le;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1,
        backdropFilter: "blur(1px)"
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
        </div>
        <div style={{
        flex: 1
      }}>
          <WindowVirtualizer shift={prepend}>
            {rows.map(d => <div key={d.id} style={{
            height: heights[Math.abs(d.index) % 4],
            borderBottom: "solid 1px #ccc",
            background: "#fff"
          }}>
                {d.index}
              </div>)}
          </WindowVirtualizer>
        </div>
      </div>;
  }
}`,...(le=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ae,de,ce;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const LENGTH = 1000;
    const [scrollIndex, setScrollIndex] = useState(567);
    const [scrollIndexAlign, setScrollToIndexAlign] = useState<ScrollToIndexAlign>("start");
    const [smooth, setSmooth] = useState(false);
    const ref = useRef<WindowVirtualizerHandle>(null);
    return <>
      <div style={{
        position: "fixed",
        top: 30,
        left: 150,
        zIndex: 1,
        padding: 10,
        border: "1px solid #ccc",
        backgroundColor: "white"
      }}>
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
      <div style={{
        padding: "100px"
      }}>
        <div style={{
          border: "1px solid darkgrey"
        }} id="window-virtualizer-parent">
        <WindowVirtualizer ref={ref}>
          {createRows(LENGTH)}
        </WindowVirtualizer>
        </div>
      </div>
    </>;
  }
}`,...(ce=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const Me=["Default","Horizontal","Complex","InfiniteScrolling","ScrollRestoration","IncreasingItems","ScrollTo"];export{T as Complex,R as Default,C as Horizontal,E as IncreasingItems,L as InfiniteScrolling,z as ScrollRestoration,A as ScrollTo,Me as __namedExportsOrder,De as default};
