import{a as e,j as l}from"./jsx-runtime-sgeEVxPu.js";import{r as i}from"./index-yp3VsGQP.js";import{S as de,d as ce}from"./common-4ZgZpLnL.js";import{a as ue,A as pe,b as me,u as M,r as R,U as he,c as fe,l as ge,o as ye,d as ve,m as be,S as we,e as xe,q as Se,s as Ie}from"./useRerender-UX2I9-vj.js";import{u as _e,a as Re,L as Ce}from"./useChildren-Y4SPNIvf.js";import{r as ke}from"./index-8dy-jdxy.js";const g=i.forwardRef(({children:o,count:s,overscan:t=4,itemSize:d,shift:r,horizontal:m,cache:c,ssrCount:p,as:h="div",item:v="div",onScrollEnd:b,onRangeChange:f},S)=>{h=h;const[y,n]=_e(o,s),w=i.useRef(null),I=Re(b),_=i.useRef(!!p),[u,A,W,N]=ue(()=>{const a=!!m,x=xe(n,d,p,c,!d);return[x,Se(x,a),Ie(x,a),a]});n!==u._getItemsLength()&&u._update(pe,[n,r]);const B=me(u),[D,O]=u._getRange(),q=u._getScrollDirection(),le=u._getJumpCount(),P=u._getTotalSize(),U=[];M(()=>{_[R]=!1;const a=u._subscribe(he+fe,C=>{C?ke.flushSync(B):B()}),x=u._subscribe(ge,()=>{I[R]&&I[R]()});return A._observeRoot(),W._observe(w[R]),()=>{a(),x(),A._dispose(),W._dispose()}},[]),M(()=>{const a=u._flushJump();a&&W._fixScrollJump(a)},[le]),i.useEffect(()=>{f&&f(D,O)},[D,O]),i.useImperativeHandle(S,()=>({get cache(){return u._getCache()}}),[]);for(let a=ye(D,t,q),x=ve(O,t,q,n);a<=x;a++){const C=y(a);U.push(e(Ce,{_resizer:A._observeItem,_index:a,_offset:u._getItemOffset(a),_hide:u._isUnmeasuredItem(a),_element:v,_children:C,_isHorizontal:N,_isSSR:_[R]},be(C,a)))}return e(h,{ref:w,style:{flex:"none",position:"relative",visibility:"hidden",width:N?P:"100%",height:N?"100%":P,pointerEvents:q!==we?"none":"auto"},children:U})});try{g.displayName="WindowVirtualizer",g.__docgenInfo={description:"{@link Virtualizer } controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizer}.",displayName:"WindowVirtualizer",props:{children:{defaultValue:null,description:`Elements rendered by this component.

You can also pass a function and set {@link WindowVirtualizerProps.count} to create elements lazily.`,name:"children",required:!0,type:{name:"ReactNode | ((index: number) => ReactElement<any, string | JSXElementConstructor<any>>)"}},count:{defaultValue:null,description:"If you set a function to {@link WindowVirtualizerProps.children}, you have to set total number of items to this prop.",name:"count",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},itemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"itemSize",required:!1,type:{name:"number"}},shift:{defaultValue:null,description:"While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.",name:"shift",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WindowVirtualizerHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},ssrCount:{defaultValue:null,description:"A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.",name:"ssrCount",required:!1,type:{name:"number"}},as:{defaultValue:null,description:`Component or element type for container element.
@defaultValue "div"`,name:"as",required:!1,type:{name:"keyof IntrinsicElements | CustomContainerComponent"}},item:{defaultValue:null,description:`Component or element type for item element. This component will get {@link CustomItemComponentProps } as props.
@defaultValue "div"`,name:"item",required:!1,type:{name:"keyof IntrinsicElements | CustomItemComponent"}},onScrollEnd:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollEnd",required:!1,type:{name:"(() => void)"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"((startIndex: number, endIndex: number) => void)"}}}}}catch{}const H=o=>{const s=[20,40,80,77];return Array.from({length:o}).map((t,d)=>e("div",{style:{height:s[d%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:d},d))},ze=o=>Array.from({length:o}).map((s,t)=>l("div",{style:{width:t%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",t]},t)),De={component:g},k={render:()=>e("div",{style:{padding:"200px 100px"},children:e("div",{style:{border:"solid 1px gray"},children:e(g,{children:H(1e3)})})})},z={render:()=>e("div",{style:{padding:"100px 200px"},children:e("div",{style:{display:"inline-block",border:"solid 1px gray",height:400},children:e(g,{horizontal:!0,children:ze(1e3)})})})},V={render:()=>l("div",{style:{display:"flex",flexDirection:"column"},children:[e("div",{style:{background:"white",height:60,marginBottom:40},children:"header"}),l("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600,margin:10},children:e(g,{children:H(1e3)})}),e("div",{style:{flex:3,margin:10},children:e(g,{children:Array.from({length:1e3}).map((o,s)=>e("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:s},s))})}),e("div",{style:{flex:2,padding:20,paddingTop:300},children:e("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]}),e("div",{style:{background:"white",height:60,marginTop:40},children:"footer"})]})},E={render:()=>{const o=(v,b=0)=>{const f=[20,40,80,77];return Array.from({length:v}).map((S,y)=>(y+=b,e("div",{style:{height:f[y%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:y},y)))},[s,t]=i.useState(!1),d=async()=>{t(!0),await ce(1e3),t(!1)},r=100,[m,c]=i.useState(()=>o(r)),p=i.useRef(-1),h=m.length;return e("div",{style:{padding:"200px 100px 0px 100px"},children:l(g,{onRangeChange:async(v,b)=>{b+50>h&&p.current<h&&(p.current=h,await d(),c(f=>[...f,...o(r,f.length)]))},children:[m,s&&e(de,{})]})})}},Ve=({id:o})=>{const s="window-list-cache-"+o,t=i.useRef(null),[d,r]=i.useMemo(()=>{const m=sessionStorage.getItem(s);if(!m)return[];try{return JSON.parse(m)}catch{return[]}},[]);return i.useLayoutEffect(()=>{if(!t.current)return;const m=t.current;window.scrollTo(0,d??0);let c=0;const p=()=>{c=window.scrollY};return window.addEventListener("scroll",p),p(),()=>{window.removeEventListener("scroll",p),sessionStorage.setItem(s,JSON.stringify([c,m.cache]))}},[]),e(g,{ref:t,cache:r,children:H(1e3)})},T={render:()=>{const[o,s]=i.useState(!0),[t,d]=i.useState("1");return l("div",{style:{position:"relative"},children:[l("div",{style:{position:"fixed",top:0,left:0,zIndex:10},children:[e("button",{onClick:()=>{s(r=>!r)},children:o?"hide":"show"}),["1","2","3"].map(r=>l("label",{children:[e("input",{type:"radio",checked:t===r,onChange:()=>{d(r)}}),r]},r))]}),o&&e(Ve,{id:t},t)]})}},L={render:()=>{const o=i.useRef(0),s=(n,w)=>Array.from({length:n}).map((I,_)=>(_+=w,{id:o.current++,index:_})),[t,d]=i.useState(!1),[r,m]=i.useState(4),[c,p]=i.useState(!1),[h,v]=i.useState(!0),[b,f]=i.useState(()=>s(r,0)),S=()=>{f(h?n=>{var w,I;return c?[...s(r,(((w=n[0])==null?void 0:w.index)??0)-r),...n]:[...n,...s(r,(((I=n[n.length-1])==null?void 0:I.index)??0)+1)]}:c?n=>n.slice(r):n=>n.slice(0,-r))};i.useEffect(()=>{if(!t)return;const n=setInterval(S,500);return()=>{clearInterval(n)}},[S,t]);const y=[20,40,80,77];return l("div",{style:{display:"flex",flexDirection:"column"},children:[l("div",{style:{position:"fixed",width:"100%",top:0,zIndex:1,backdropFilter:"blur(1px)"},children:[l("div",{children:[l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!c,onChange:()=>{p(!1)}}),"append"]}),l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:c,onChange:()=>{p(!0)}}),"prepend"]}),l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:h,onChange:()=>{v(!0)}}),"increase"]}),l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!h,onChange:()=>{v(!1)}}),"decrease"]}),e("input",{style:{marginLeft:4},value:r,type:"number",min:1,max:1e4,step:1,onChange:n=>{m(Number(n.target.value))}})]}),l("div",{children:[l("label",{style:{marginRight:16},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:t,onChange:()=>{d(n=>!n)}}),"auto"]}),e("button",{onClick:()=>{S()},children:"update"})]})]}),e("div",{style:{flex:1},children:e(g,{shift:c,children:b.map(n=>e("div",{style:{height:y[Math.abs(n.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:n.index},n.id))})})]})}};var j,F,J;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(J=(F=k.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var Y,K,G;z.parameters={...z.parameters,docs:{...(Y=z.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(G=(K=z.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var X,Z,Q;V.parameters={...V.parameters,docs:{...(X=V.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Q=(Z=V.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var $,ee,ne;E.parameters={...E.parameters,docs:{...($=E.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ne=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,ie;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ie=(re=T.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var se,oe,ae;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ae=(oe=L.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};const Oe=["Default","Horizontal","Complex","InfiniteScrolling","ScrollRestoration","IncreasingItems"];export{V as Complex,k as Default,z as Horizontal,L as IncreasingItems,E as InfiniteScrolling,T as ScrollRestoration,Oe as __namedExportsOrder,De as default};
