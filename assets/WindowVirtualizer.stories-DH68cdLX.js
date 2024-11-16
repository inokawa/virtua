import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as s}from"./index-DRjF_FHU.js";import{S as pe,d as he}from"./common-B4Hkentz.js";import{N as fe,a as me,A as ge,b as xe,u as U,r as w,U as ye,h as ve,j as be,n as we,c as Se,o as _e,p as Re}from"./useRerender-D4gg_Yo3.js";import{u as Ie,a as M,L as je}from"./useChildren-D7-c9seN.js";import{r as ke}from"./index-uWwxbAOW.js";const f=s.forwardRef(({children:o,count:i,overscan:t,itemSize:d,shift:r,horizontal:u,cache:c,ssrCount:p,as:h="div",item:m="div",onScroll:g,onScrollEnd:x},y)=>{h=h;const[R,n]=Ie(o,i),v=s.useRef(fe),S=M(g),_=M(x),N=s.useRef(!!p),[a,L,A,V]=me(()=>{const l=!!u,b=Se(n,d,t,p,c,!d);return[b,_e(b,l),Re(b,l),l]});n!==a._getItemsLength()&&a._update(ge,[n,r]);const H=xe(a),[ae,de]=a._getRange(),le=a._isScrolling(),ce=a._getJumpCount(),O=a._getTotalSize(),D=[];U(()=>{N[w]=!1;const l=a._subscribe(ye,ue=>{ue?ke.flushSync(H):H()}),b=a._subscribe(ve,()=>{S[w]&&S[w](a._getScrollOffset())}),I=a._subscribe(be,()=>{_[w]&&_[w]()}),B=v[w];return L._observeRoot(B),A._observe(B),()=>{l(),b(),I(),L._dispose(),A._dispose()}},[]),U(()=>{A._fixScrollJump()},[ce]),s.useImperativeHandle(y,()=>({get cache(){return a._getCacheSnapshot()},findStartIndex:a._findStartIndex,findEndIndex:a._findEndIndex}),[]);for(let l=ae,b=de;l<=b;l++){const I=R(l);D.push(e.jsx(je,{_resizer:L._observeItem,_index:l,_offset:a._getItemOffset(l),_hide:a._isUnmeasuredItem(l),_as:m,_children:I,_isHorizontal:V,_isSSR:N[w]},we(I,l)))}return e.jsx(h,{ref:v,style:{flex:"none",position:"relative",visibility:"hidden",width:V?O:"100%",height:V?"100%":O,pointerEvents:le?"none":void 0},children:D})});f.__docgenInfo={description:"{@link Virtualizer} controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizerHandle}.",methods:[{name:"cache",docblock:null,modifiers:["get"],params:[],returns:null}],displayName:"WindowVirtualizer",props:{as:{defaultValue:{value:'"div"',computed:!1},required:!1},item:{defaultValue:{value:'"div"',computed:!1},required:!1}}};const W=o=>{const i=[20,40,80,77];return Array.from({length:o}).map((t,d)=>e.jsx("div",{style:{height:i[d%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:d},d))},Ce=o=>Array.from({length:o}).map((i,t)=>e.jsxs("div",{style:{width:t%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",t]},t)),Ne={component:f},j={render:()=>e.jsx("div",{style:{padding:"200px 100px"},children:e.jsx("div",{style:{border:"solid 1px gray"},children:e.jsx(f,{children:W(1e3)})})})},k={render:()=>e.jsx("div",{style:{padding:"100px 200px"},children:e.jsx("div",{style:{display:"inline-block",border:"solid 1px gray",height:400},children:e.jsx(f,{horizontal:!0,children:Ce(1e3)})})})},C={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{background:"white",height:60,marginBottom:40},children:"header"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx("div",{style:{flex:1,display:"flex",paddingTop:600,margin:10},children:e.jsx(f,{children:W(1e3)})}),e.jsx("div",{style:{flex:3,margin:10},children:e.jsx(f,{children:Array.from({length:1e3}).map((o,i)=>e.jsx("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:i},i))})}),e.jsx("div",{style:{flex:2,padding:20,paddingTop:300},children:e.jsx("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]}),e.jsx("div",{style:{background:"white",height:60,marginTop:40},children:"footer"})]})},z={render:()=>{const o=(g,x=0)=>{const y=[20,40,80,77];return Array.from({length:g}).map((R,n)=>(n+=x,e.jsx("div",{style:{height:y[n%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:n},n)))},[i,t]=s.useState(!1),d=async()=>{t(!0),await he(1e3),t(!1)},r=100,[u,c]=s.useState(()=>o(r)),p=s.useRef(-1),h=u.length,m=s.useRef(null);return e.jsx("div",{style:{padding:"200px 100px 0px 100px"},children:e.jsxs(f,{ref:m,onScroll:async()=>{m.current&&p.current<h&&m.current.findEndIndex()+50>h&&(p.current=h,await d(),c(g=>[...g,...o(r,g.length)]))},children:[u,i&&e.jsx(pe,{})]})})}},ze=({id:o})=>{const i="window-list-cache-"+o,t=s.useRef(null),[d,r]=s.useMemo(()=>{const u=sessionStorage.getItem(i);if(!u)return[];try{return JSON.parse(u)}catch{return[]}},[]);return s.useLayoutEffect(()=>{if(!t.current)return;const u=t.current;window.scrollTo(0,d??0);let c=0;const p=()=>{c=window.scrollY};return window.addEventListener("scroll",p),p(),()=>{window.removeEventListener("scroll",p),sessionStorage.setItem(i,JSON.stringify([c,u.cache]))}},[]),e.jsx(f,{ref:t,cache:r,children:W(1e3)})},E={render:()=>{const[o,i]=s.useState(!0),[t,d]=s.useState("1");return e.jsxs("div",{style:{position:"relative"},children:[e.jsxs("div",{style:{position:"fixed",top:0,left:0,zIndex:10},children:[e.jsx("button",{onClick:()=>{i(r=>!r)},children:o?"hide":"show"}),["1","2","3"].map(r=>e.jsxs("label",{children:[e.jsx("input",{type:"radio",checked:t===r,onChange:()=>{d(r)}}),r]},r))]}),o&&e.jsx(ze,{id:t},t)]})}},T={render:()=>{const o=s.useRef(0),i=(n,v)=>Array.from({length:n}).map((S,_)=>(_+=v,{id:o.current++,index:_})),[t,d]=s.useState(!1),[r,u]=s.useState(4),[c,p]=s.useState(!1),[h,m]=s.useState(!0),[g,x]=s.useState(()=>i(r,0)),y=()=>{x(h?n=>{var v,S;return c?[...i(r,(((v=n[0])==null?void 0:v.index)??0)-r),...n]:[...n,...i(r,(((S=n[n.length-1])==null?void 0:S.index)??0)+1)]}:c?n=>n.slice(r):n=>n.slice(0,-r))};s.useEffect(()=>{if(!t)return;const n=setInterval(y,500);return()=>{clearInterval(n)}},[y,t]);const R=[20,40,80,77];return e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{position:"fixed",width:"100%",top:0,zIndex:1,backdropFilter:"blur(1px)"},children:[e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:c,onChange:()=>{p(n=>!n)}}),"prepend"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:h,onChange:()=>{m(!0)}}),"increase"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:!h,onChange:()=>{m(!1)}}),"decrease"]}),e.jsx("input",{style:{marginLeft:4},value:r,type:"number",min:1,max:1e4,step:1,onChange:n=>{u(Number(n.target.value))}})]}),e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:16},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:t,onChange:()=>{d(n=>!n)}}),"auto"]}),e.jsx("button",{onClick:()=>{y()},children:"update"})]})]}),e.jsx("div",{style:{flex:1},children:e.jsx(f,{shift:c,children:g.map(n=>e.jsx("div",{style:{height:R[Math.abs(n.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:n.index},n.id))})})]})}};var P,F,J;j.parameters={...j.parameters,docs:{...(P=j.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(J=(F=j.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,q,G;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(G=(q=k.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var Y,Q,X;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(X=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;z.parameters={...z.parameters,docs:{...(Z=z.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=z.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,te,re;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(te=E.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ie,oe;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};const He=["Default","Horizontal","Complex","InfiniteScrolling","ScrollRestoration","IncreasingItems"];export{C as Complex,j as Default,k as Horizontal,T as IncreasingItems,z as InfiniteScrolling,E as ScrollRestoration,He as __namedExportsOrder,Ne as default};
