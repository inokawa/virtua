import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-DHDXODYl.js";import{S as X,d as Y}from"./common-BqtzafjA.js";import{a as q,u as K,A as Q,b as M,r as b,U as Z,c as ee,d as ne,n as te,e as re,o as se,p as oe}from"./useLatestRef-DNxOGvru.js";import{u as ie,L as ae}from"./useChildren-DPoAwCaZ.js";import{r as le}from"./index-XOLob6Kt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DMFw_X3p.js";const h=r.forwardRef(({children:a,count:o,overscan:s,itemSize:i,shift:t,horizontal:c,cache:u,ssrCount:p,as:l="div",item:f="div",onScroll:g,onScrollEnd:x},y)=>{l=l;const[S,n]=ie(a,o),I=r.useRef(null),V=q(g),w=q(x),H=r.useRef(!!p),[d,W,C,N]=K(()=>{const m=!!c,v=re(n,i,s,p,u,!i);return[v,se(v,m),oe(v,m),m]});n!==d.$getItemsLength()&&d.$update(Q,[n,t]);const[B,$]=r.useReducer(d.$getStateVersion,void 0,d.$getStateVersion),[U,G]=d.$getRange(),F=d.$isScrolling(),O=d.$getTotalSize(),P=[];M(()=>{H[b]=!1;const m=d.$subscribe(Z,J=>{J?le.flushSync($):$()}),v=d.$subscribe(ee,()=>{V[b]&&V[b]()}),k=d.$subscribe(ne,()=>{w[b]&&w[b]()}),D=I[b];return W.$observeRoot(D),C.$observe(D),()=>{m(),v(),k(),W.$dispose(),C.$dispose()}},[]),M(()=>{C.$fixScrollJump()},[B]),r.useImperativeHandle(y,()=>({get cache(){return d.$getCacheSnapshot()},findStartIndex:d.$findStartIndex,findEndIndex:d.$findEndIndex,scrollToIndex:C.$scrollToIndex}),[]);for(let m=U,v=G;m<=v;m++){const k=S(m);P.push(e.jsx(ae,{_resizer:W.$observeItem,_index:m,_offset:d.$getItemOffset(m),_hide:d.$isUnmeasuredItem(m),_as:f,_children:k,_isHorizontal:N,_isSSR:H[b]},te(k,m)))}return e.jsx(l,{ref:I,style:{contain:"strict",overflowAnchor:"none",overflow:"clip",flex:"none",position:"relative",width:N?O:"100%",height:N?"100%":O,pointerEvents:F?"none":void 0},children:P})});h.__docgenInfo={description:"{@link Virtualizer} controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizerHandle}.",methods:[{name:"cache",docblock:null,modifiers:["get"],params:[],returns:null}],displayName:"WindowVirtualizer",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ((index: number) => ReactElement)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:`Elements rendered by this component.

You can also pass a function and set {@link WindowVirtualizerProps.count} to create elements lazily.`},count:{required:!1,tsType:{name:"number"},description:"If you set a function to {@link WindowVirtualizerProps.children}, you have to set total number of items to this prop."},overscan:{required:!1,tsType:{name:"number"},description:`Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`},itemSize:{required:!1,tsType:{name:"number"},description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`},shift:{required:!1,tsType:{name:"boolean"},description:"While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling."},horizontal:{required:!1,tsType:{name:"boolean"},description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list."},cache:{required:!1,tsType:{name:"CacheSnapshot"},description:`You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WindowVirtualizerHandle.cache}.

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**`},ssrCount:{required:!1,tsType:{name:"number"},description:"A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated."},as:{required:!1,tsType:{name:"union",raw:"keyof JSX.IntrinsicElements | CustomContainerComponent",elements:[{name:"JSX.IntrinsicElements"},{name:"ComponentType",elements:[{name:"CustomContainerComponentProps"}],raw:"ComponentType<CustomContainerComponentProps>"}]},description:`Component or element type for container element.
@defaultValue "div"`,defaultValue:{value:'"div"',computed:!1}},item:{required:!1,tsType:{name:"union",raw:"keyof JSX.IntrinsicElements | CustomItemComponent",elements:[{name:"JSX.IntrinsicElements"},{name:"ComponentType",elements:[{name:"CustomItemComponentProps"}],raw:"ComponentType<CustomItemComponentProps>"}]},description:`Component or element type for item element. This component will get {@link CustomItemComponentProps} as props.
@defaultValue "div"`,defaultValue:{value:'"div"',computed:!1}},onScroll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback invoked whenever scroll offset changes."},onScrollEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback invoked when scrolling stops."}}};const A=a=>{const o=[20,40,80,77];return Array.from({length:a}).map((s,i)=>e.jsx("div",{style:{height:o[i%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:i},i))},de=a=>Array.from({length:a}).map((o,s)=>e.jsxs("div",{style:{width:s%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",s]},s)),ve={component:h},T={render:()=>e.jsx("div",{style:{padding:"200px 100px"},children:e.jsx("div",{style:{border:"solid 1px gray"},children:e.jsx(h,{children:A(1e3)})})})},j={render:()=>e.jsx("div",{style:{padding:"100px 200px"},children:e.jsx("div",{style:{display:"inline-block",border:"solid 1px gray",height:400},children:e.jsx(h,{horizontal:!0,children:de(1e3)})})})},R={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{background:"white",height:60,marginBottom:40},children:"header"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsx("div",{style:{flex:1,display:"flex",paddingTop:600,margin:10},children:e.jsx(h,{children:A(1e3)})}),e.jsx("div",{style:{flex:3,margin:10},children:e.jsx(h,{children:Array.from({length:1e3}).map((a,o)=>e.jsx("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:o},o))})}),e.jsx("div",{style:{flex:2,padding:20,paddingTop:300},children:e.jsx("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]}),e.jsx("div",{style:{background:"white",height:60,marginTop:40},children:"footer"})]})},z={render:()=>{const a=(g,x=0)=>{const y=[20,40,80,77];return Array.from({length:g}).map((S,n)=>(n+=x,e.jsx("div",{style:{height:y[n%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:n},n)))},[o,s]=r.useState(!1),i=async()=>{s(!0),await Y(1e3),s(!1)},t=100,[c,u]=r.useState(()=>a(t)),p=r.useRef(-1),l=c.length,f=r.useRef(null);return e.jsx("div",{style:{padding:"200px 100px 0px 100px"},children:e.jsxs(h,{ref:f,onScroll:async()=>{f.current&&p.current<l&&f.current.findEndIndex()+50>l&&(p.current=l,await i(),u(g=>[...g,...a(t,g.length)]))},children:[c,o&&e.jsx(X,{})]})})}},ce=({id:a})=>{const o="window-list-cache-"+a,s=r.useRef(null),[i,t]=r.useMemo(()=>{const c=sessionStorage.getItem(o);if(!c)return[];try{return JSON.parse(c)}catch{return[]}},[]);return r.useLayoutEffect(()=>{if(!s.current)return;const c=s.current;window.scrollTo(0,i??0);let u=0;const p=()=>{u=window.scrollY};return window.addEventListener("scroll",p),p(),()=>{window.removeEventListener("scroll",p),sessionStorage.setItem(o,JSON.stringify([u,c.cache]))}},[]),e.jsx(h,{ref:s,cache:t,children:A(1e3)})},L={render:()=>{const[a,o]=r.useState(!0),[s,i]=r.useState("1");return e.jsxs("div",{style:{position:"relative"},children:[e.jsxs("div",{style:{position:"fixed",top:0,left:0,zIndex:10},children:[e.jsx("button",{onClick:()=>{o(t=>!t)},children:a?"hide":"show"}),["1","2","3"].map(t=>e.jsxs("label",{children:[e.jsx("input",{type:"radio",checked:s===t,onChange:()=>{i(t)}}),t]},t))]}),a&&e.jsx(ce,{id:s},s)]})}},E={render:()=>{const a=r.useRef(0),o=(n,I)=>Array.from({length:n}).map((V,w)=>(w+=I,{id:a.current++,index:w})),[s,i]=r.useState(!1),[t,c]=r.useState(4),[u,p]=r.useState(!1),[l,f]=r.useState(!0),[g,x]=r.useState(()=>o(t,0)),y=()=>{x(l?n=>u?[...o(t,(n[0]?.index??0)-t),...n]:[...n,...o(t,(n[n.length-1]?.index??0)+1)]:u?n=>n.slice(t):n=>n.slice(0,-t))};r.useEffect(()=>{if(!s)return;const n=setInterval(y,500);return()=>{clearInterval(n)}},[y,s]);const S=[20,40,80,77];return e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{position:"fixed",width:"100%",top:0,zIndex:1,backdropFilter:"blur(1px)"},children:[e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:u,onChange:()=>{p(n=>!n)}}),"prepend"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:l,onChange:()=>{f(!0)}}),"increase"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:!l,onChange:()=>{f(!1)}}),"decrease"]}),e.jsx("input",{style:{marginLeft:4},value:t,type:"number",min:1,max:1e4,step:1,onChange:n=>{c(Number(n.target.value))}})]}),e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:16},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:s,onChange:()=>{i(n=>!n)}}),"auto"]}),e.jsx("button",{onClick:()=>{y()},children:"update"})]})]}),e.jsx("div",{style:{flex:1},children:e.jsx(h,{shift:u,children:g.map(n=>e.jsx("div",{style:{height:S[Math.abs(n.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:n.index},n.id))})})]})}},_={render:()=>{const[o,s]=r.useState(567),[i,t]=r.useState("start"),[c,u]=r.useState(!1),p=r.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{position:"fixed",top:30,left:150,zIndex:1,padding:10,border:"1px solid #ccc",backgroundColor:"white"},children:[e.jsx("input",{type:"number",value:o,onChange:l=>{s(Number(l.target.value))}}),e.jsx("button",{onClick:()=>{p.current?.scrollToIndex(o,{align:i,smooth:c})},children:"scroll to index"}),e.jsx("button",{onClick:()=>{s(Math.round(1e3*Math.random()))},children:"randomize"}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:i==="start",onChange:()=>{t("start")}}),"start"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:i==="center",onChange:()=>{t("center")}}),"center"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:i==="end",onChange:()=>{t("end")}}),"end"]}),e.jsxs("label",{style:{marginLeft:4},children:[e.jsx("input",{type:"checkbox",style:{marginLeft:4},checked:c,onChange:()=>{u(l=>!l)}}),"smooth"]})]}),e.jsx("div",{style:{padding:"100px"},children:e.jsx("div",{style:{border:"1px solid darkgrey"},id:"window-virtualizer-parent",children:e.jsx(h,{ref:p,children:A(1e3)})})})]})}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const be=["Default","Horizontal","Complex","InfiniteScrolling","ScrollRestoration","IncreasingItems","ScrollTo"];export{R as Complex,T as Default,j as Horizontal,E as IncreasingItems,z as InfiniteScrolling,L as ScrollRestoration,_ as ScrollTo,be as __namedExportsOrder,ve as default};
