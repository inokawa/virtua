import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{f as n}from"./iframe-Jpf2DL4B.js";import{t as r}from"./react-dom-BmLEWv5y.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{_ as a,a as o,i as s,l as c,n as l,o as u,r as d,t as f,u as p,y as m}from"./useLatestRef-DXYc30g2.js";import{a as h,i as g,n as _,o as v,r as y,t as b}from"./useChildren-DesnH9RD.js";import{n as x,r as S}from"./utils-nwNIBIBb.js";import{n as C,r as w,t as T}from"./common-ErMVkvdR.js";var E,D,O,k;function A(){return(A=t((()=>{E=n(),m(),v(),p(),o(),S(),d(),f(),g(),D=r(),b(),O=i(),k=(0,E.forwardRef)(({children:e,data:t,bufferSize:n,itemSize:r,shift:i,horizontal:o,cache:d,ssrCount:f,as:p=`div`,item:m=`div`,onScroll:g,onScrollEnd:v,onResize:b},S)=>{"use no memo";p=p;let[C,w]=_(e,t),T=(0,E.useRef)(null),k=l(g),A=l(v),j=l(b),M=(0,E.useRef)(!!f),[N,P,F,I]=s(()=>{let e=!!o,t=h(w,r,d),n=a(t,f);return[n,t,c(n,t,e),e]});N.$update(5,w,i);let[L,R]=(0,E.useReducer)(N.$getStateVersion,void 0,N.$getStateVersion),z=N.$isScrolling(),B=N.$getTotalSize(),V=[];u(()=>(M.current=!1,N.$subscribe(1,e=>{e?(0,D.flushSync)(R):R()}),N.$subscribe(4,()=>{k.current&&k.current()}),N.$subscribe(8,()=>{A.current&&A.current()}),N.$subscribe(2,()=>{j.current&&j.current()}),F.$observe(T.current),()=>{N.$dispose(),F.$dispose()}),[]),u(()=>{F.$effect()},[L]),(0,E.useImperativeHandle)(S,()=>({get cache(){return P.$snapshot()},get scrollOffset(){return N.$getScrollOffset()},get viewportSize(){return N.$getViewportSize()},findItemIndex:e=>P.$findIndex(e-N.$getStartSpacerSize()),getItemOffset:N.$getItemOffset,getItemSize:P.$getItemSize,scrollToIndex:F.$scroll}),[]);for(let[e,t]=N.$getRange(n);e<=t;e++){let t=C(e);V.push((0,O.jsx)(y,{_resizer:F.$observeItem,_index:e,_offset:N.$getItemOffset(e),_hide:P.$isSizeEqual(e),_as:m,_children:t,_isHorizontal:I,_isSSR:M.current},x(t,e)))}return(0,O.jsx)(p,{ref:T,style:{contain:`size style`,overflowAnchor:`none`,flex:`none`,position:`relative`,width:I?B:`100%`,height:I?`100%`:B,pointerEvents:z?`none`:void 0},children:V})}),k.__docgenInfo={description:`{@link Virtualizer} controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizerHandle}.`,methods:[{name:`cache`,docblock:null,modifiers:[`get`],params:[],returns:null},{name:`scrollOffset`,docblock:null,modifiers:[`get`],params:[],returns:null},{name:`viewportSize`,docblock:null,modifiers:[`get`],params:[],returns:null},{name:`findItemIndex`,docblock:null,modifiers:[],params:[{name:`offset`,optional:!1,type:null}],returns:null}],displayName:`WindowVirtualizer`,props:{children:{required:!0,tsType:{name:`union`,raw:`ReactNode | ((data: T, index: number) => ReactElement)`,elements:[{name:`ReactNode`},{name:`unknown`}]},description:`Elements rendered by this component.

You can also pass a function and set {@link WindowVirtualizerProps.data} to create elements lazily.`},data:{required:!1,tsType:{name:`ArrayLike`,elements:[{name:`T`}],raw:`ArrayLike<T>`},description:`The data items rendered by this component. If you set a function to {@link WindowVirtualizerProps.children}, you have to set this prop.`},bufferSize:{required:!1,tsType:{name:`number`},description:`Extra space in pixels to render before/after the viewport. The default value is recommended for most cases. A smaller value gives better performance, and a larger value avoids showing blank items in fast scrolling.
@defaultValue 200`},itemSize:{required:!1,tsType:{name:`number`},description:`Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`},shift:{required:!1,tsType:{name:`boolean`},description:`Set true only when items are added to or removed from the start of the list, such as when older items are loaded in reverse infinite scrolling. In that case, the scroll position is maintained from the end of the list instead of the start.

**Do not set true in any other case, as it can cause unexpected behavior.**`},horizontal:{required:!1,tsType:{name:`boolean`},description:`If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.`},cache:{required:!1,tsType:{name:`tuple`,raw:`[sizes: number[], defaultSize?: number]`,elements:[{name:`unknown`},{name:`unknown`}]},description:`You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WindowVirtualizerHandle.cache}.

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**`},ssrCount:{required:!1,tsType:{name:`number`},description:`A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.`},as:{required:!1,tsType:{name:`union`,raw:`keyof JSX.IntrinsicElements | CustomContainerComponent`,elements:[{name:`JSX.IntrinsicElements`},{name:`ComponentType`,elements:[{name:`CustomContainerComponentProps`}],raw:`ComponentType<CustomContainerComponentProps>`}]},description:`Component or element type for container element.
@defaultValue "div"`,defaultValue:{value:`"div"`,computed:!1}},item:{required:!1,tsType:{name:`union`,raw:`keyof JSX.IntrinsicElements | CustomItemComponent`,elements:[{name:`JSX.IntrinsicElements`},{name:`ComponentType`,elements:[{name:`CustomItemComponentProps`}],raw:`ComponentType<CustomItemComponentProps>`}]},description:`Component or element type for item element. This component will get {@link CustomItemComponentProps} as props.
@defaultValue "div"`,defaultValue:{value:`"div"`,computed:!1}},onScroll:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback invoked whenever scroll offset changes.`},onScrollEnd:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback invoked when scrolling stops.`},onResize:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback invoked when the size of the viewport or the items changes.`}}}})))()}var j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=t((()=>{j=e(n(),1),A(),w(),M=i(),N=e=>{let t=[20,40,80,77];return Array.from({length:e}).map((e,n)=>(0,M.jsx)(`div`,{style:{height:t[n%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:n},n))},P=e=>Array.from({length:e}).map((e,t)=>(0,M.jsxs)(`div`,{style:{width:t%3==0?100:60,borderRight:`solid 1px #ccc`,background:`#fff`},children:[`Column `,t]},t)),F={component:k},I={render:()=>(0,M.jsx)(`div`,{style:{padding:`200px 100px`},children:(0,M.jsx)(`div`,{style:{border:`solid 1px gray`},children:(0,M.jsx)(k,{children:N(1e3)})})})},L={render:()=>(0,M.jsx)(`div`,{style:{padding:`100px 200px`},children:(0,M.jsx)(`div`,{style:{display:`inline-block`,border:`solid 1px gray`,height:400},children:(0,M.jsx)(k,{horizontal:!0,children:P(1e3)})})})},R={render:()=>(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,M.jsx)(`div`,{style:{background:`white`,height:60,marginBottom:40},children:`header`}),(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`},children:[(0,M.jsx)(`div`,{style:{flex:1,display:`flex`,paddingTop:600,margin:10},children:(0,M.jsx)(k,{children:N(1e3)})}),(0,M.jsx)(`div`,{style:{flex:3,margin:10},children:(0,M.jsx)(k,{children:Array.from({length:1e3}).map((e,t)=>(0,M.jsx)(`div`,{style:{height:200,borderRadius:8,margin:16,background:`#fff`},children:t},t))})}),(0,M.jsx)(`div`,{style:{flex:2,padding:20,paddingTop:300},children:(0,M.jsx)(`div`,{style:{top:0,height:400,position:`sticky`,background:`white`}})})]}),(0,M.jsx)(`div`,{style:{background:`white`,height:60,marginTop:40},children:`footer`})]})},z={render:()=>{let e=(e,t=0)=>{let n=[20,40,80,77];return Array.from({length:e}).map((e,r)=>(r+=t,(0,M.jsx)(`div`,{style:{height:n[r%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:r},r)))},[t,n]=(0,j.useState)(!1),r=async()=>{n(!0),await C(1e3),n(!1)},[i,a]=(0,j.useState)(()=>e(100)),o=(0,j.useRef)(-1),s=i.length,c=(0,j.useRef)(null);return(0,M.jsx)(`div`,{style:{padding:`200px 100px 0px 100px`},children:(0,M.jsxs)(k,{ref:c,onScroll:async()=>{c.current&&o.current<s&&c.current.findItemIndex(c.current.scrollOffset+c.current.viewportSize)+50>s&&(o.current=s,await r(),a(t=>[...t,...e(100,t.length)]))},children:[i,t&&(0,M.jsx)(T,{})]})})}},B=({id:e})=>{let t=`window-list-cache-`+e,n=(0,j.useRef)(null),[r,i]=(0,j.useMemo)(()=>{let e=sessionStorage.getItem(t);if(!e)return[];try{return JSON.parse(e)}catch{return[]}},[]);return(0,j.useLayoutEffect)(()=>{if(!n.current)return;let e=n.current;window.scrollTo(0,r??0);let i=0,a=()=>{i=window.scrollY};return window.addEventListener(`scroll`,a),a(),()=>{window.removeEventListener(`scroll`,a),sessionStorage.setItem(t,JSON.stringify([i,e.cache]))}},[]),(0,M.jsx)(k,{ref:n,cache:i,children:N(1e3)})},V={render:()=>{let[e,t]=(0,j.useState)(!0),[n,r]=(0,j.useState)(`1`);return(0,M.jsxs)(`div`,{style:{position:`relative`},children:[(0,M.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,zIndex:10},children:[(0,M.jsx)(`button`,{onClick:()=>{t(e=>!e)},children:e?`hide`:`show`}),[`1`,`2`,`3`].map(e=>(0,M.jsxs)(`label`,{children:[(0,M.jsx)(`input`,{type:`radio`,checked:n===e,onChange:()=>{r(e)}}),e]},e))]}),e&&(0,M.jsx)(B,{id:n},n)]})}},H={render:()=>{let e=(0,j.useRef)(0),t=(t,n)=>Array.from({length:t}).map((t,r)=>(r+=n,{id:e.current++,index:r})),[n,r]=(0,j.useState)(!1),[i,a]=(0,j.useState)(4),[o,s]=(0,j.useState)(!1),[c,l]=(0,j.useState)(!0),[u,d]=(0,j.useState)(()=>t(i,0)),f=()=>{d(c?e=>o?[...t(i,(e[0]?.index??0)-i),...e]:[...e,...t(i,(e[e.length-1]?.index??0)+1)]:o?e=>e.slice(i):e=>e.slice(0,-i))};(0,j.useEffect)(()=>{if(!n)return;let e=setInterval(f,500);return()=>{clearInterval(e)}},[f,n]);let p=[20,40,80,77];return(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,M.jsxs)(`div`,{style:{position:`fixed`,width:`100%`,top:0,zIndex:1,backdropFilter:`blur(1px)`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`label`,{style:{marginRight:4},children:[(0,M.jsx)(`input`,{type:`checkbox`,style:{marginLeft:4},checked:o,onChange:()=>{s(e=>!e)}}),`prepend`]}),(0,M.jsxs)(`label`,{style:{marginRight:4},children:[(0,M.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:c,onChange:()=>{l(!0)}}),`increase`]}),(0,M.jsxs)(`label`,{style:{marginRight:4},children:[(0,M.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:!c,onChange:()=>{l(!1)}}),`decrease`]}),(0,M.jsx)(`input`,{style:{marginLeft:4},value:i,type:`number`,min:1,max:1e4,step:1,onChange:e=>{a(Number(e.target.value))}})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`label`,{style:{marginRight:16},children:[(0,M.jsx)(`input`,{type:`checkbox`,style:{marginLeft:4},checked:n,onChange:()=>{r(e=>!e)}}),`auto`]}),(0,M.jsx)(`button`,{onClick:()=>{f()},children:`update`})]})]}),(0,M.jsx)(`div`,{style:{flex:1},children:(0,M.jsx)(k,{shift:o,children:u.map(e=>(0,M.jsx)(`div`,{style:{height:p[Math.abs(e.index)%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:e.index},e.id))})})]})}},U={render:()=>{let e=1e3,[t,n]=(0,j.useState)(567),[r,i]=(0,j.useState)(`start`),[a,o]=(0,j.useState)(!1),s=(0,j.useRef)(null);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`div`,{style:{position:`fixed`,top:30,left:150,zIndex:1,padding:10,border:`1px solid #ccc`,backgroundColor:`white`},children:[(0,M.jsx)(`input`,{type:`number`,value:t,onChange:e=>{n(Number(e.target.value))}}),(0,M.jsx)(`button`,{onClick:()=>{s.current?.scrollToIndex(t,{align:r,smooth:a})},children:`scroll to index`}),(0,M.jsx)(`button`,{onClick:()=>{n(Math.round(e*Math.random()))},children:`randomize`}),(0,M.jsxs)(`label`,{style:{marginLeft:4},children:[(0,M.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:r===`start`,onChange:()=>{i(`start`)}}),`start`]}),(0,M.jsxs)(`label`,{style:{marginLeft:4},children:[(0,M.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:r===`center`,onChange:()=>{i(`center`)}}),`center`]}),(0,M.jsxs)(`label`,{style:{marginLeft:4},children:[(0,M.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:r===`end`,onChange:()=>{i(`end`)}}),`end`]}),(0,M.jsxs)(`label`,{style:{marginLeft:4},children:[(0,M.jsx)(`input`,{type:`checkbox`,style:{marginLeft:4},checked:a,onChange:()=>{o(e=>!e)}}),`smooth`]})]}),(0,M.jsx)(`div`,{style:{padding:`100px`},children:(0,M.jsx)(`div`,{style:{border:`1px solid darkgrey`},children:(0,M.jsx)(k,{ref:s,children:N(e)})})})]})}},W=[`Default`,`Horizontal`,`Complex`,`InfiniteScrolling`,`ScrollRestoration`,`IncreasingItems`,`ScrollTo`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
        if (fetchedCountRef.current < count && ref.current.findItemIndex(ref.current.scrollOffset + ref.current.viewportSize) + 50 > count) {
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
}`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
        }}>
            <WindowVirtualizer ref={ref}>
              {createRows(LENGTH)}
            </WindowVirtualizer>
          </div>
        </div>
      </>;
  }
}`,...U.parameters?.docs?.source}}}})))()}G();export{R as Complex,I as Default,L as Horizontal,H as IncreasingItems,z as InfiniteScrolling,V as ScrollRestoration,U as ScrollTo,W as __namedExportsOrder,F as default};