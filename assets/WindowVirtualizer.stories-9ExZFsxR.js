import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DzfIz40F.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{r as i,t as a}from"./src-De5IyaZp.js";import{n as o,r as s,t as c}from"./common-CHUdhQbk.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S;t((()=>{l=e(n(),1),a(),s(),u=r(),d=e=>{let t=[20,40,80,77];return Array.from({length:e}).map((e,n)=>(0,u.jsx)(`div`,{style:{height:t[n%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:n},n))},f=e=>Array.from({length:e}).map((e,t)=>(0,u.jsxs)(`div`,{style:{width:t%3==0?100:60,borderRight:`solid 1px #ccc`,background:`#fff`},children:[`Column `,t]},t)),p={component:i},m={render:()=>(0,u.jsx)(`div`,{style:{padding:`200px 100px`},children:(0,u.jsx)(`div`,{style:{border:`solid 1px gray`},children:(0,u.jsx)(i,{children:d(1e3)})})})},h={render:()=>(0,u.jsx)(`div`,{style:{padding:`100px 200px`},children:(0,u.jsx)(`div`,{style:{display:`inline-block`,border:`solid 1px gray`,height:400},children:(0,u.jsx)(i,{horizontal:!0,children:f(1e3)})})})},g={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,u.jsx)(`div`,{style:{background:`white`,height:60,marginBottom:40},children:`header`}),(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`},children:[(0,u.jsx)(`div`,{style:{flex:1,display:`flex`,paddingTop:600,margin:10},children:(0,u.jsx)(i,{children:d(1e3)})}),(0,u.jsx)(`div`,{style:{flex:3,margin:10},children:(0,u.jsx)(i,{children:Array.from({length:1e3}).map((e,t)=>(0,u.jsx)(`div`,{style:{height:200,borderRadius:8,margin:16,background:`#fff`},children:t},t))})}),(0,u.jsx)(`div`,{style:{flex:2,padding:20,paddingTop:300},children:(0,u.jsx)(`div`,{style:{top:0,height:400,position:`sticky`,background:`white`}})})]}),(0,u.jsx)(`div`,{style:{background:`white`,height:60,marginTop:40},children:`footer`})]})},_={render:()=>{let e=(e,t=0)=>{let n=[20,40,80,77];return Array.from({length:e}).map((e,r)=>(r+=t,(0,u.jsx)(`div`,{style:{height:n[r%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:r},r)))},[t,n]=(0,l.useState)(!1),r=async()=>{n(!0),await o(1e3),n(!1)},[a,s]=(0,l.useState)(()=>e(100)),d=(0,l.useRef)(-1),f=a.length,p=(0,l.useRef)(null);return(0,u.jsx)(`div`,{style:{padding:`200px 100px 0px 100px`},children:(0,u.jsxs)(i,{ref:p,onScroll:async()=>{p.current&&d.current<f&&p.current.findItemIndex(p.current.scrollOffset+p.current.viewportSize)+50>f&&(d.current=f,await r(),s(t=>[...t,...e(100,t.length)]))},children:[a,t&&(0,u.jsx)(c,{})]})})}},v=({id:e})=>{let t=`window-list-cache-`+e,n=(0,l.useRef)(null),[r,a]=(0,l.useMemo)(()=>{let e=sessionStorage.getItem(t);if(!e)return[];try{return JSON.parse(e)}catch{return[]}},[]);return(0,l.useLayoutEffect)(()=>{if(!n.current)return;let e=n.current;window.scrollTo(0,r??0);let i=0,a=()=>{i=window.scrollY};return window.addEventListener(`scroll`,a),a(),()=>{window.removeEventListener(`scroll`,a),sessionStorage.setItem(t,JSON.stringify([i,e.cache]))}},[]),(0,u.jsx)(i,{ref:n,cache:a,children:d(1e3)})},y={render:()=>{let[e,t]=(0,l.useState)(!0),[n,r]=(0,l.useState)(`1`);return(0,u.jsxs)(`div`,{style:{position:`relative`},children:[(0,u.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,zIndex:10},children:[(0,u.jsx)(`button`,{onClick:()=>{t(e=>!e)},children:e?`hide`:`show`}),[`1`,`2`,`3`].map(e=>(0,u.jsxs)(`label`,{children:[(0,u.jsx)(`input`,{type:`radio`,checked:n===e,onChange:()=>{r(e)}}),e]},e))]}),e&&(0,u.jsx)(v,{id:n},n)]})}},b={render:()=>{let e=(0,l.useRef)(0),t=(t,n)=>Array.from({length:t}).map((t,r)=>(r+=n,{id:e.current++,index:r})),[n,r]=(0,l.useState)(!1),[a,o]=(0,l.useState)(4),[s,c]=(0,l.useState)(!1),[d,f]=(0,l.useState)(!0),[p,m]=(0,l.useState)(()=>t(a,0)),h=()=>{m(d?e=>s?[...t(a,(e[0]?.index??0)-a),...e]:[...e,...t(a,(e[e.length-1]?.index??0)+1)]:s?e=>e.slice(a):e=>e.slice(0,-a))};(0,l.useEffect)(()=>{if(!n)return;let e=setInterval(h,500);return()=>{clearInterval(e)}},[h,n]);let g=[20,40,80,77];return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,u.jsxs)(`div`,{style:{position:`fixed`,width:`100%`,top:0,zIndex:1,backdropFilter:`blur(1px)`},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`label`,{style:{marginRight:4},children:[(0,u.jsx)(`input`,{type:`checkbox`,style:{marginLeft:4},checked:s,onChange:()=>{c(e=>!e)}}),`prepend`]}),(0,u.jsxs)(`label`,{style:{marginRight:4},children:[(0,u.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:d,onChange:()=>{f(!0)}}),`increase`]}),(0,u.jsxs)(`label`,{style:{marginRight:4},children:[(0,u.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:!d,onChange:()=>{f(!1)}}),`decrease`]}),(0,u.jsx)(`input`,{style:{marginLeft:4},value:a,type:`number`,min:1,max:1e4,step:1,onChange:e=>{o(Number(e.target.value))}})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`label`,{style:{marginRight:16},children:[(0,u.jsx)(`input`,{type:`checkbox`,style:{marginLeft:4},checked:n,onChange:()=>{r(e=>!e)}}),`auto`]}),(0,u.jsx)(`button`,{onClick:()=>{h()},children:`update`})]})]}),(0,u.jsx)(`div`,{style:{flex:1},children:(0,u.jsx)(i,{shift:s,children:p.map(e=>(0,u.jsx)(`div`,{style:{height:g[Math.abs(e.index)%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:e.index},e.id))})})]})}},x={render:()=>{let e=1e3,[t,n]=(0,l.useState)(567),[r,a]=(0,l.useState)(`start`),[o,s]=(0,l.useState)(!1),c=(0,l.useRef)(null);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`div`,{style:{position:`fixed`,top:30,left:150,zIndex:1,padding:10,border:`1px solid #ccc`,backgroundColor:`white`},children:[(0,u.jsx)(`input`,{type:`number`,value:t,onChange:e=>{n(Number(e.target.value))}}),(0,u.jsx)(`button`,{onClick:()=>{c.current?.scrollToIndex(t,{align:r,smooth:o})},children:`scroll to index`}),(0,u.jsx)(`button`,{onClick:()=>{n(Math.round(e*Math.random()))},children:`randomize`}),(0,u.jsxs)(`label`,{style:{marginLeft:4},children:[(0,u.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:r===`start`,onChange:()=>{a(`start`)}}),`start`]}),(0,u.jsxs)(`label`,{style:{marginLeft:4},children:[(0,u.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:r===`center`,onChange:()=>{a(`center`)}}),`center`]}),(0,u.jsxs)(`label`,{style:{marginLeft:4},children:[(0,u.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:r===`end`,onChange:()=>{a(`end`)}}),`end`]}),(0,u.jsxs)(`label`,{style:{marginLeft:4},children:[(0,u.jsx)(`input`,{type:`checkbox`,style:{marginLeft:4},checked:o,onChange:()=>{s(e=>!e)}}),`smooth`]})]}),(0,u.jsx)(`div`,{style:{padding:`100px`},children:(0,u.jsx)(`div`,{style:{border:`1px solid darkgrey`},children:(0,u.jsx)(i,{ref:c,children:d(e)})})})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Horizontal`,`Complex`,`InfiniteScrolling`,`ScrollRestoration`,`IncreasingItems`,`ScrollTo`]}))();export{g as Complex,m as Default,h as Horizontal,b as IncreasingItems,_ as InfiniteScrolling,y as ScrollRestoration,x as ScrollTo,S as __namedExportsOrder,p as default};