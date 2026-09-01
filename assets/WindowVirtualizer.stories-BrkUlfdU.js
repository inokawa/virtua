import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-Fe-bCtr_.js";import{t as r}from"./react-dom-CkkSgfbn.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{C as a,E as o,S as s,_ as c,b as l,c as u,i as d,l as f,m as p,n as m,o as h,r as g,s as _,t as v,u as y,w as b,x}from"./useLatestRef-BuKL-4v_.js";import{i as S,n as C,r as w,t as T}from"./useChildren-45u_erNw.js";import{n as E,r as D,t as O}from"./common-CYh9P3-1.js";var k,A,j,M;function N(){return(N=t((()=>{k=n(),o(),a(),x(),p(),f(),_(),g(),v(),S(),A=r(),T(),j=i(),M=(0,k.forwardRef)(({children:e,data:t,bufferSize:n,itemSize:r,shift:i,horizontal:a,cache:o,ssrCount:f,as:p=`div`,item:g=`div`,onScroll:_,onScrollEnd:v},x)=>{p=p;let[S,T]=C(e,t),E=(0,k.useRef)(null),D=m(_),O=m(v),M=(0,k.useRef)(!!f),[N,P,F,I]=d(()=>{let e=!!a,t=s(T,r,o),n=b(t,f);return[n,t,l(n,e),e]});T!==N.$getItemsLength()&&N.$update(5,[T,i]);let[L,R]=(0,k.useReducer)(N.$getStateVersion,void 0,N.$getStateVersion),z=N.$isScrolling(),B=N.$getTotalSize(),V=[];y(()=>(M[u]=!1,N.$subscribe(1,e=>{e?(0,A.flushSync)(R):R()}),N.$subscribe(4,()=>{D.current&&D.current()}),N.$subscribe(8,()=>{O.current&&O.current()}),F.$observe(E[u]),()=>{N.$dispose(),F.$dispose()}),[]),y(()=>{F.$effect()},[L]),(0,k.useImperativeHandle)(x,()=>({get cache(){return P.$snapshot()},get scrollOffset(){return N.$getScrollOffset()},get viewportSize(){return N.$getViewportSize()},findItemIndex:N.$findItemIndex,getItemOffset:N.$getItemOffset,getItemSize:N.$getItemSize,scrollToIndex:(e,t)=>c(F,N,e,t)}),[]);for(let[e,t]=N.$getRange(n);e<=t;e++){let t=S(e);V.push((0,j.jsx)(w,{_resizer:F.$observeItem,_index:e,_offset:N.$getItemOffset(e),_hide:N.$isUnmeasuredItem(e),_as:g,_children:t,_isHorizontal:I,_isSSR:M[u]},h(t,e)))}return(0,j.jsx)(p,{ref:E,style:{contain:`size style`,overflowAnchor:`none`,flex:`none`,position:`relative`,width:I?B:`100%`,height:I?`100%`:B,pointerEvents:z?`none`:void 0},children:V})}),M.__docgenInfo={description:`{@link Virtualizer} controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizerHandle}.`,methods:[{name:`cache`,docblock:null,modifiers:[`get`],params:[],returns:null},{name:`scrollOffset`,docblock:null,modifiers:[`get`],params:[],returns:null},{name:`viewportSize`,docblock:null,modifiers:[`get`],params:[],returns:null},{name:`scrollToIndex`,docblock:null,modifiers:[],params:[{name:`index`,optional:!1,type:null},{name:`opts`,optional:!1,type:null}],returns:null}],displayName:`WindowVirtualizer`,props:{children:{required:!0,tsType:{name:`union`,raw:`ReactNode | ((data: T, index: number) => ReactElement)`,elements:[{name:`ReactNode`},{name:`unknown`}]},description:`Elements rendered by this component.

You can also pass a function and set {@link WindowVirtualizerProps.data} to create elements lazily.`},data:{required:!1,tsType:{name:`ArrayLike`,elements:[{name:`T`}],raw:`ArrayLike<T>`},description:`The data items rendered by this component. If you set a function to {@link WindowVirtualizerProps.children}, you have to set this prop.`},bufferSize:{required:!1,tsType:{name:`number`},description:`Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 200`},itemSize:{required:!1,tsType:{name:`number`},description:`Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`},shift:{required:!1,tsType:{name:`boolean`},description:`While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.`},horizontal:{required:!1,tsType:{name:`boolean`},description:`If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.`},cache:{required:!1,tsType:{name:`tuple`,raw:`[sizes: number[], defaultSize?: number]`,elements:[{name:`unknown`},{name:`unknown`}]},description:`You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WindowVirtualizerHandle.cache}.

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**`},ssrCount:{required:!1,tsType:{name:`number`},description:`A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.`},as:{required:!1,tsType:{name:`union`,raw:`keyof JSX.IntrinsicElements | CustomContainerComponent`,elements:[{name:`JSX.IntrinsicElements`},{name:`ComponentType`,elements:[{name:`CustomContainerComponentProps`}],raw:`ComponentType<CustomContainerComponentProps>`}]},description:`Component or element type for container element.
@defaultValue "div"`,defaultValue:{value:`"div"`,computed:!1}},item:{required:!1,tsType:{name:`union`,raw:`keyof JSX.IntrinsicElements | CustomItemComponent`,elements:[{name:`JSX.IntrinsicElements`},{name:`ComponentType`,elements:[{name:`CustomItemComponentProps`}],raw:`ComponentType<CustomItemComponentProps>`}]},description:`Component or element type for item element. This component will get {@link CustomItemComponentProps} as props.
@defaultValue "div"`,defaultValue:{value:`"div"`,computed:!1}},onScroll:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback invoked whenever scroll offset changes.`},onScrollEnd:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback invoked when scrolling stops.`}}}})))()}var P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=t((()=>{P=e(n(),1),N(),D(),F=i(),I=e=>{let t=[20,40,80,77];return Array.from({length:e}).map((e,n)=>(0,F.jsx)(`div`,{style:{height:t[n%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:n},n))},L=e=>Array.from({length:e}).map((e,t)=>(0,F.jsxs)(`div`,{style:{width:t%3==0?100:60,borderRight:`solid 1px #ccc`,background:`#fff`},children:[`Column `,t]},t)),R={component:M},z={render:()=>(0,F.jsx)(`div`,{style:{padding:`200px 100px`},children:(0,F.jsx)(`div`,{style:{border:`solid 1px gray`},children:(0,F.jsx)(M,{children:I(1e3)})})})},B={render:()=>(0,F.jsx)(`div`,{style:{padding:`100px 200px`},children:(0,F.jsx)(`div`,{style:{display:`inline-block`,border:`solid 1px gray`,height:400},children:(0,F.jsx)(M,{horizontal:!0,children:L(1e3)})})})},V={render:()=>(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,F.jsx)(`div`,{style:{background:`white`,height:60,marginBottom:40},children:`header`}),(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`},children:[(0,F.jsx)(`div`,{style:{flex:1,display:`flex`,paddingTop:600,margin:10},children:(0,F.jsx)(M,{children:I(1e3)})}),(0,F.jsx)(`div`,{style:{flex:3,margin:10},children:(0,F.jsx)(M,{children:Array.from({length:1e3}).map((e,t)=>(0,F.jsx)(`div`,{style:{height:200,borderRadius:8,margin:16,background:`#fff`},children:t},t))})}),(0,F.jsx)(`div`,{style:{flex:2,padding:20,paddingTop:300},children:(0,F.jsx)(`div`,{style:{top:0,height:400,position:`sticky`,background:`white`}})})]}),(0,F.jsx)(`div`,{style:{background:`white`,height:60,marginTop:40},children:`footer`})]})},H={render:()=>{let e=(e,t=0)=>{let n=[20,40,80,77];return Array.from({length:e}).map((e,r)=>(r+=t,(0,F.jsx)(`div`,{style:{height:n[r%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:r},r)))},[t,n]=(0,P.useState)(!1),r=async()=>{n(!0),await E(1e3),n(!1)},[i,a]=(0,P.useState)(()=>e(100)),o=(0,P.useRef)(-1),s=i.length,c=(0,P.useRef)(null);return(0,F.jsx)(`div`,{style:{padding:`200px 100px 0px 100px`},children:(0,F.jsxs)(M,{ref:c,onScroll:async()=>{c.current&&o.current<s&&c.current.findItemIndex(c.current.scrollOffset+c.current.viewportSize)+50>s&&(o.current=s,await r(),a(t=>[...t,...e(100,t.length)]))},children:[i,t&&(0,F.jsx)(O,{})]})})}},U=({id:e})=>{let t=`window-list-cache-`+e,n=(0,P.useRef)(null),[r,i]=(0,P.useMemo)(()=>{let e=sessionStorage.getItem(t);if(!e)return[];try{return JSON.parse(e)}catch{return[]}},[]);return(0,P.useLayoutEffect)(()=>{if(!n.current)return;let e=n.current;window.scrollTo(0,r??0);let i=0,a=()=>{i=window.scrollY};return window.addEventListener(`scroll`,a),a(),()=>{window.removeEventListener(`scroll`,a),sessionStorage.setItem(t,JSON.stringify([i,e.cache]))}},[]),(0,F.jsx)(M,{ref:n,cache:i,children:I(1e3)})},W={render:()=>{let[e,t]=(0,P.useState)(!0),[n,r]=(0,P.useState)(`1`);return(0,F.jsxs)(`div`,{style:{position:`relative`},children:[(0,F.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,zIndex:10},children:[(0,F.jsx)(`button`,{onClick:()=>{t(e=>!e)},children:e?`hide`:`show`}),[`1`,`2`,`3`].map(e=>(0,F.jsxs)(`label`,{children:[(0,F.jsx)(`input`,{type:`radio`,checked:n===e,onChange:()=>{r(e)}}),e]},e))]}),e&&(0,F.jsx)(U,{id:n},n)]})}},G={render:()=>{let e=(0,P.useRef)(0),t=(t,n)=>Array.from({length:t}).map((t,r)=>(r+=n,{id:e.current++,index:r})),[n,r]=(0,P.useState)(!1),[i,a]=(0,P.useState)(4),[o,s]=(0,P.useState)(!1),[c,l]=(0,P.useState)(!0),[u,d]=(0,P.useState)(()=>t(i,0)),f=()=>{d(c?e=>o?[...t(i,(e[0]?.index??0)-i),...e]:[...e,...t(i,(e[e.length-1]?.index??0)+1)]:o?e=>e.slice(i):e=>e.slice(0,-i))};(0,P.useEffect)(()=>{if(!n)return;let e=setInterval(f,500);return()=>{clearInterval(e)}},[f,n]);let p=[20,40,80,77];return(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,F.jsxs)(`div`,{style:{position:`fixed`,width:`100%`,top:0,zIndex:1,backdropFilter:`blur(1px)`},children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`label`,{style:{marginRight:4},children:[(0,F.jsx)(`input`,{type:`checkbox`,style:{marginLeft:4},checked:o,onChange:()=>{s(e=>!e)}}),`prepend`]}),(0,F.jsxs)(`label`,{style:{marginRight:4},children:[(0,F.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:c,onChange:()=>{l(!0)}}),`increase`]}),(0,F.jsxs)(`label`,{style:{marginRight:4},children:[(0,F.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:!c,onChange:()=>{l(!1)}}),`decrease`]}),(0,F.jsx)(`input`,{style:{marginLeft:4},value:i,type:`number`,min:1,max:1e4,step:1,onChange:e=>{a(Number(e.target.value))}})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`label`,{style:{marginRight:16},children:[(0,F.jsx)(`input`,{type:`checkbox`,style:{marginLeft:4},checked:n,onChange:()=>{r(e=>!e)}}),`auto`]}),(0,F.jsx)(`button`,{onClick:()=>{f()},children:`update`})]})]}),(0,F.jsx)(`div`,{style:{flex:1},children:(0,F.jsx)(M,{shift:o,children:u.map(e=>(0,F.jsx)(`div`,{style:{height:p[Math.abs(e.index)%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:e.index},e.id))})})]})}},K={render:()=>{let e=1e3,[t,n]=(0,P.useState)(567),[r,i]=(0,P.useState)(`start`),[a,o]=(0,P.useState)(!1),s=(0,P.useRef)(null);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`div`,{style:{position:`fixed`,top:30,left:150,zIndex:1,padding:10,border:`1px solid #ccc`,backgroundColor:`white`},children:[(0,F.jsx)(`input`,{type:`number`,value:t,onChange:e=>{n(Number(e.target.value))}}),(0,F.jsx)(`button`,{onClick:()=>{s.current?.scrollToIndex(t,{align:r,smooth:a})},children:`scroll to index`}),(0,F.jsx)(`button`,{onClick:()=>{n(Math.round(e*Math.random()))},children:`randomize`}),(0,F.jsxs)(`label`,{style:{marginLeft:4},children:[(0,F.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:r===`start`,onChange:()=>{i(`start`)}}),`start`]}),(0,F.jsxs)(`label`,{style:{marginLeft:4},children:[(0,F.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:r===`center`,onChange:()=>{i(`center`)}}),`center`]}),(0,F.jsxs)(`label`,{style:{marginLeft:4},children:[(0,F.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:r===`end`,onChange:()=>{i(`end`)}}),`end`]}),(0,F.jsxs)(`label`,{style:{marginLeft:4},children:[(0,F.jsx)(`input`,{type:`checkbox`,style:{marginLeft:4},checked:a,onChange:()=>{o(e=>!e)}}),`smooth`]})]}),(0,F.jsx)(`div`,{style:{padding:`100px`},children:(0,F.jsx)(`div`,{style:{border:`1px solid darkgrey`},children:(0,F.jsx)(M,{ref:s,children:I(e)})})})]})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q=[`Default`,`Horizontal`,`Complex`,`InfiniteScrolling`,`ScrollRestoration`,`IncreasingItems`,`ScrollTo`]})))()}J();export{V as Complex,z as Default,B as Horizontal,G as IncreasingItems,H as InfiniteScrolling,W as ScrollRestoration,K as ScrollTo,q as __namedExportsOrder,R as default};