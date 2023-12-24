import{a as e,j as c}from"./jsx-runtime-sgeEVxPu.js";import{r as s}from"./index-yp3VsGQP.js";import{S as he,d as fe}from"./common-jfrYHwuZ.js";import{a as ge,A as ye,b as ve,u as U,r as N,U as be,c as xe,l as Se,d as we,e as Ie,n as Re,S as _e,v as Ce,V as ke,f as Le,g as Te,p as Ve,q as Ee}from"./useRerender-vfBA6wTz.js";import{u as ze,a as Ae,L as We}from"./useChildren-IUols83K.js";import{r as Ne}from"./index-8dy-jdxy.js";const f=s.forwardRef(({children:i,count:o,overscan:t=4,initialItemSize:d,initialItemCount:r,shift:p,horizontal:u,cache:m,components:{Root:g=ke,Item:S="div"}=Le,onScrollStop:w,onRangeChange:h,...v},b)=>{const[n,y]=ze(i,o),I=Ae(w),[l,D,H,R]=ge(()=>{const a=!!u,x=Te(y,d,r,m,!d);return[x,Ve(x,a),Ee(x,a),a]});y!==l._getItemsLength()&&l._update(ye,[y,p]);const q=ve(l),[z,A]=l._getRange(),W=l._getScrollDirection(),le=l._getJumpCount(),B=l._getTotalSize(),P=s.useRef(null);U(()=>{const a=P[N],x=l._subscribe(be+xe,me=>{me?Ne.flushSync(q):q()}),_=l._subscribe(Se,()=>{I[N]&&I[N]()}),ue=D._observeRoot(a),pe=H._observe(a);return()=>{x(),_(),ue(),pe()}},[]),U(()=>{const a=l._flushJump();a&&H._fixScrollJump(a)},[le]),s.useEffect(()=>{h&&h(z,A)},[z,A]),s.useImperativeHandle(b,()=>({get cache(){return l._getCache()}}),[]);const ce=we(z,t,W),de=Ie(A,t,W,y),M=[];for(let a=ce;a<=de;a++){const x=n(a),_=x.key;M.push(e(We,{_resizer:D,_index:a,_offset:l._getItemOffset(a),_hide:l._isUnmeasuredItem(a),_element:S,_children:x,_isHorizontal:R},Re(_)?_:"_"+a))}return e(g,{ref:P,width:R?B:void 0,height:R?void 0:B,scrolling:W!==_e,attrs:s.useMemo(()=>({...v,style:{display:R?"inline-block":"block",width:R?"auto":"100%",height:R?"100%":"auto",...v.style}}),Ce(v)),children:M})});try{f.displayName="WVList",f.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps} and {@link WVListHandle}.",displayName:"WVList",props:{children:{defaultValue:null,description:`Elements rendered by this component.

You can also pass a function and set {@link WVListProps.count} to create elements lazily.`,name:"children",required:!0,type:{name:"ReactNode | ((index: number) => ReactElement<any, string | JSXElementConstructor<any>>)"}},count:{defaultValue:null,description:"If you set a function to {@link WVListProps.children}, you have to set total number of items to this prop.",name:"count",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},shift:{defaultValue:null,description:"While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.",name:"shift",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WVListHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Item?: CustomItemComponentOrElement; }"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(startIndex: number, endIndex: number) => void"}}}}}catch{}const O=i=>{const o=[20,40,80,77];return Array.from({length:i}).map((t,d)=>e("div",{style:{height:o[d%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:d},d))},Oe=i=>Array.from({length:i}).map((o,t)=>c("div",{style:{width:t%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",t]},t)),je={component:f},C={render:()=>e("div",{style:{padding:200},children:e(f,{style:{border:"solid 1px gray"},children:O(1e3)})})},k={render:()=>e("div",{style:{padding:200},children:e(f,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:Oe(1e3)})})},L={render:()=>c("div",{style:{display:"flex",flexDirection:"column"},children:[e("div",{style:{background:"white",height:60,marginBottom:40},children:"header"}),c("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600},children:e(f,{style:{margin:10},children:O(1e3)})}),e("div",{style:{flex:3},children:e(f,{style:{margin:10},children:Array.from({length:1e3}).map((i,o)=>e("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:o},o))})}),e("div",{style:{flex:2,padding:20,paddingTop:300},children:e("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]}),e("div",{style:{background:"white",height:60,marginTop:40},children:"footer"})]})},T={render:()=>{const i=(S,w=0)=>{const h=[20,40,80,77];return Array.from({length:S}).map((v,b)=>(b+=w,e("div",{style:{height:h[b%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:b},b)))},[o,t]=s.useState(!1),d=async()=>{t(!0),await fe(1e3),t(!1)},r=100,[p,u]=s.useState(()=>i(r)),m=s.useRef(-1),g=p.length;return e("div",{style:{padding:"200px 200px 0px 200px"},children:c(f,{onRangeChange:async(S,w)=>{w+50>g&&m.current<g&&(m.current=g,await d(),u(h=>[...h,...i(r,h.length)]))},children:[p,o&&e(he,{})]})})}},De=({id:i})=>{const o="window-list-cache-"+i,t=s.useRef(null),[d,r]=s.useMemo(()=>{const p=sessionStorage.getItem(o);if(!p)return[];try{return JSON.parse(p)}catch{return[]}},[]);return s.useLayoutEffect(()=>{if(!t.current)return;const p=t.current;window.scrollTo(0,d??0);let u=0;const m=()=>{u=window.scrollY};return window.addEventListener("scroll",m),m(),()=>{window.removeEventListener("scroll",m),sessionStorage.setItem(o,JSON.stringify([u,p.cache]))}},[]),e(f,{ref:t,cache:r,children:O(1e3)})},V={render:()=>{const[i,o]=s.useState(!0),[t,d]=s.useState("1");return c("div",{style:{position:"relative"},children:[c("div",{style:{position:"fixed",top:0,left:0,zIndex:10},children:[e("button",{onClick:()=>{o(r=>!r)},children:i?"hide":"show"}),["1","2","3"].map(r=>c("label",{children:[e("input",{type:"radio",checked:t===r,onChange:()=>{d(r)}}),r]},r))]}),i&&e(De,{id:t},t)]})}},E={render:()=>{const i=s.useRef(0),o=(n,y)=>Array.from({length:n}).map((I,l)=>(l+=y,{id:i.current++,index:l})),[t,d]=s.useState(!1),[r,p]=s.useState(4),[u,m]=s.useState(!1),[g,S]=s.useState(!0),[w,h]=s.useState(()=>o(r,0)),v=()=>{h(g?n=>{var y,I;return u?[...o(r,(((y=n[0])==null?void 0:y.index)??0)-r),...n]:[...n,...o(r,(((I=n[n.length-1])==null?void 0:I.index)??0)+1)]}:u?n=>n.slice(r):n=>n.slice(0,-r))};s.useEffect(()=>{if(!t)return;const n=setInterval(v,500);return()=>{clearInterval(n)}},[v,t]);const b=[20,40,80,77];return c("div",{style:{display:"flex",flexDirection:"column"},children:[c("div",{style:{position:"sticky",top:0,zIndex:1,background:"whitesmoke"},children:[c("div",{children:[c("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!u,onChange:()=>{m(!1)}}),"append"]}),c("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:u,onChange:()=>{m(!0)}}),"prepend"]}),c("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:g,onChange:()=>{S(!0)}}),"increase"]}),c("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!g,onChange:()=>{S(!1)}}),"decrease"]}),e("input",{style:{marginLeft:4},value:r,type:"number",min:1,max:1e4,step:1,onChange:n=>{p(Number(n.target.value))}})]}),c("div",{children:[c("label",{style:{marginRight:16},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:t,onChange:()=>{d(n=>!n)}}),"auto"]}),e("button",{onClick:()=>{v()},children:"update"})]})]}),e(f,{style:{flex:1,paddingTop:30},shift:u,children:w.map(n=>e("div",{style:{height:b[Math.abs(n.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:n.index},n.id))})]})}};var j,J,F;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: 200
    }}>
        <WVList style={{
        border: "solid 1px gray"
      }}>
          {createRows(1000)}
        </WVList>
      </div>;
  }
}`,...(F=(J=C.parameters)==null?void 0:J.docs)==null?void 0:F.source}}};var Y,G,K;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: 200
    }}>
        <WVList horizontal style={{
        height: 400,
        border: "solid 1px gray"
      }}>
          {createColumns(1000)}
        </WVList>
      </div>;
  }
}`,...(K=(G=k.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var X,Z,Q;L.parameters={...L.parameters,docs:{...(X=L.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
          paddingTop: 600
        }}>
            <WVList style={{
            margin: 10
          }}>
              {createRows(1000)}
            </WVList>
          </div>
          <div style={{
          flex: 3
        }}>
            <WVList style={{
            margin: 10
          }}>
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
            </WVList>
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
}`,...(Q=(Z=L.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var $,ee,ne;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
      padding: "200px 200px 0px 200px"
    }}>
        <WVList onRangeChange={async (_, end) => {
        if (end + 50 > count && fetchedCountRef.current < count) {
          fetchedCountRef.current = count;
          await fetchItems();
          setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT, prev.length)]);
        }
      }}>
          {items}
          {fetching && <Spinner />}
        </WVList>
      </div>;
  }
}`,...(ne=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,se;V.parameters={...V.parameters,docs:{...(te=V.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(re=V.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ie,ae;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
        position: "sticky",
        top: 0,
        zIndex: 1,
        background: "whitesmoke"
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
        </div>
        <WVList style={{
        flex: 1,
        paddingTop: 30
      }} shift={prepend}>
          {rows.map(d => <div key={d.id} style={{
          height: heights[Math.abs(d.index) % 4],
          borderBottom: "solid 1px #ccc",
          background: "#fff"
        }}>
              {d.index}
            </div>)}
        </WVList>
      </div>;
  }
}`,...(ae=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};const Je=["Default","Horizontal","Complex","InfiniteScrolling","ScrollRestoration","IncreasingItems"];export{L as Complex,C as Default,k as Horizontal,E as IncreasingItems,T as InfiniteScrolling,V as ScrollRestoration,Je as __namedExportsOrder,je as default};
