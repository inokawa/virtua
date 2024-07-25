import{j as e}from"./jsx-runtime-DCrfGL6_.js";import{r as s}from"./index-98wxwTcn.js";import{S as ce,d as le}from"./common--WXKQNr2.js";import{N as ue,a as pe,A as he,b as fe,u as M,r as j,U as me,k as ge,c as xe,o as ye,S as ve,d as be,p as we,q as Se}from"./useRerender-D8u2whrP.js";import{u as Re,a as _e,L as je}from"./useChildren-Cc48_Zqu.js";import{r as Ie}from"./index-SCI4cgSJ.js";const m=s.forwardRef(({children:o,count:i,overscan:t=4,itemSize:a,shift:r,horizontal:u,cache:c,ssrCount:p,as:h="div",item:x="div",onScrollEnd:y,onRangeChange:f},w)=>{h=h;const[g,n]=Re(o,i),v=s.useRef(ue),S=_e(y),R=s.useRef(!!p),[l,E,A,V]=pe(()=>{const d=!!u,b=be(n,a,p,c,!a);return[b,we(b,d),Se(b,d),d]});n!==l._getItemsLength()&&l._update(he,[n,r]);const O=fe(l),[W,N]=l._getRange(),H=l._getScrollDirection(),ae=l._getJumpCount(),B=l._getTotalSize(),U=[];M(()=>{R[j]=!1;const d=l._subscribe(me,de=>{de?Ie.flushSync(O):O()}),b=l._subscribe(ge,()=>{S[j]&&S[j]()}),_=v[j];return E._observeRoot(_),A._observe(_),()=>{d(),b(),E._dispose(),A._dispose()}},[]),M(()=>{A._fixScrollJump()},[ae]),s.useEffect(()=>{f&&f(W,N)},[W,N]),s.useImperativeHandle(w,()=>({get cache(){return l._getCacheSnapshot()}}),[]);for(let[d,b]=xe(W,N,t,H,n);d<=b;d++){const _=g(d);U.push(e.jsx(je,{_resizer:E._observeItem,_index:d,_offset:l._getItemOffset(d),_hide:l._isUnmeasuredItem(d),_as:x,_children:_,_isHorizontal:V,_isSSR:R[j]},ye(_,d)))}return e.jsx(h,{ref:v,style:{flex:"none",position:"relative",visibility:"hidden",width:V?B:"100%",height:V?"100%":B,pointerEvents:H!==ve?"none":"auto"},children:U})});m.__docgenInfo={description:"{@link Virtualizer} controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizer}.",methods:[{name:"cache",docblock:null,modifiers:["get"],params:[],returns:null}],displayName:"WindowVirtualizer",props:{overscan:{defaultValue:{value:"4",computed:!1},required:!1},as:{defaultValue:{value:'"div"',computed:!1},required:!1},item:{defaultValue:{value:'"div"',computed:!1},required:!1}}};const D=o=>{const i=[20,40,80,77];return Array.from({length:o}).map((t,a)=>e.jsx("div",{style:{height:i[a%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:a},a))},ke=o=>Array.from({length:o}).map((i,t)=>e.jsxs("div",{style:{width:t%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",t]},t)),We={component:m},I={render:()=>e.jsx("div",{style:{padding:"200px 100px"},children:e.jsx("div",{style:{border:"solid 1px gray"},children:e.jsx(m,{children:D(1e3)})})})},k={render:()=>e.jsx("div",{style:{padding:"100px 200px"},children:e.jsx("div",{style:{display:"inline-block",border:"solid 1px gray",height:400},children:e.jsx(m,{horizontal:!0,children:ke(1e3)})})})},C={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{background:"white",height:60,marginBottom:40},children:"header"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx("div",{style:{flex:1,display:"flex",paddingTop:600,margin:10},children:e.jsx(m,{children:D(1e3)})}),e.jsx("div",{style:{flex:3,margin:10},children:e.jsx(m,{children:Array.from({length:1e3}).map((o,i)=>e.jsx("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:i},i))})}),e.jsx("div",{style:{flex:2,padding:20,paddingTop:300},children:e.jsx("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]}),e.jsx("div",{style:{background:"white",height:60,marginTop:40},children:"footer"})]})},z={render:()=>{const o=(x,y=0)=>{const f=[20,40,80,77];return Array.from({length:x}).map((w,g)=>(g+=y,e.jsx("div",{style:{height:f[g%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:g},g)))},[i,t]=s.useState(!1),a=async()=>{t(!0),await le(1e3),t(!1)},r=100,[u,c]=s.useState(()=>o(r)),p=s.useRef(-1),h=u.length;return e.jsx("div",{style:{padding:"200px 100px 0px 100px"},children:e.jsxs(m,{onRangeChange:async(x,y)=>{y+50>h&&p.current<h&&(p.current=h,await a(),c(f=>[...f,...o(r,f.length)]))},children:[u,i&&e.jsx(ce,{})]})})}},Ce=({id:o})=>{const i="window-list-cache-"+o,t=s.useRef(null),[a,r]=s.useMemo(()=>{const u=sessionStorage.getItem(i);if(!u)return[];try{return JSON.parse(u)}catch{return[]}},[]);return s.useLayoutEffect(()=>{if(!t.current)return;const u=t.current;window.scrollTo(0,a??0);let c=0;const p=()=>{c=window.scrollY};return window.addEventListener("scroll",p),p(),()=>{window.removeEventListener("scroll",p),sessionStorage.setItem(i,JSON.stringify([c,u.cache]))}},[]),e.jsx(m,{ref:t,cache:r,children:D(1e3)})},L={render:()=>{const[o,i]=s.useState(!0),[t,a]=s.useState("1");return e.jsxs("div",{style:{position:"relative"},children:[e.jsxs("div",{style:{position:"fixed",top:0,left:0,zIndex:10},children:[e.jsx("button",{onClick:()=>{i(r=>!r)},children:o?"hide":"show"}),["1","2","3"].map(r=>e.jsxs("label",{children:[e.jsx("input",{type:"radio",checked:t===r,onChange:()=>{a(r)}}),r]},r))]}),o&&e.jsx(Ce,{id:t},t)]})}},T={render:()=>{const o=s.useRef(0),i=(n,v)=>Array.from({length:n}).map((S,R)=>(R+=v,{id:o.current++,index:R})),[t,a]=s.useState(!1),[r,u]=s.useState(4),[c,p]=s.useState(!1),[h,x]=s.useState(!0),[y,f]=s.useState(()=>i(r,0)),w=()=>{f(h?n=>{var v,S;return c?[...i(r,(((v=n[0])==null?void 0:v.index)??0)-r),...n]:[...n,...i(r,(((S=n[n.length-1])==null?void 0:S.index)??0)+1)]}:c?n=>n.slice(r):n=>n.slice(0,-r))};s.useEffect(()=>{if(!t)return;const n=setInterval(w,500);return()=>{clearInterval(n)}},[w,t]);const g=[20,40,80,77];return e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{position:"fixed",width:"100%",top:0,zIndex:1,backdropFilter:"blur(1px)"},children:[e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:c,onChange:()=>{p(n=>!n)}}),"prepend"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:h,onChange:()=>{x(!0)}}),"increase"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:!h,onChange:()=>{x(!1)}}),"decrease"]}),e.jsx("input",{style:{marginLeft:4},value:r,type:"number",min:1,max:1e4,step:1,onChange:n=>{u(Number(n.target.value))}})]}),e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:16},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:t,onChange:()=>{a(n=>!n)}}),"auto"]}),e.jsx("button",{onClick:()=>{w()},children:"update"})]})]}),e.jsx("div",{style:{flex:1},children:e.jsx(m,{shift:c,children:y.map(n=>e.jsx("div",{style:{height:g[Math.abs(n.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:n.index},n.id))})})]})}};var F,P,q;I.parameters={...I.parameters,docs:{...(F=I.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(P=I.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var J,K,G;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(G=(K=k.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var Y,Q,X;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
    return <div style={{
      padding: "200px 100px 0px 100px"
    }}>
        <WindowVirtualizer onRangeChange={async (_, end) => {
        if (end + 50 > count && fetchedCountRef.current < count) {
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
}`,...(ee=($=z.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,te,re;L.parameters={...L.parameters,docs:{...(ne=L.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(te=L.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ie,oe;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};const Ne=["Default","Horizontal","Complex","InfiniteScrolling","ScrollRestoration","IncreasingItems"];export{C as Complex,I as Default,k as Horizontal,T as IncreasingItems,z as InfiniteScrolling,L as ScrollRestoration,Ne as __namedExportsOrder,We as default};
