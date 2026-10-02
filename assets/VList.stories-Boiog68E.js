import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-BITTHNmU.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VList-CBxmzLmo.js";import{n as o,r as s,t as c}from"./common-CJjSYGx8.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=t((()=>{l=e(n(),1),i(),s(),u=r(),d={component:a},f=e=>{let t=[20,40,80,77];return Array.from({length:e}).map((e,n)=>(0,u.jsx)(`div`,{style:{height:t[n%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:n},n))},p={render:()=>(0,u.jsx)(a,{style:{height:`100vh`},children:f(1e3)})},m=e=>Array.from({length:e}).map((e,t)=>(0,u.jsxs)(`div`,{style:{width:t%3==0?100:60,borderRight:`solid 1px #ccc`,background:`#fff`},children:[`Column `,t]},t)),h={render:()=>(0,u.jsx)(`div`,{style:{padding:10},children:(0,u.jsx)(a,{style:{width:`100%`,height:200},horizontal:!0,children:m(1e3)})})},g={render:()=>(0,u.jsx)(`div`,{children:(0,u.jsx)(a,{style:{width:`100%`,height:200,direction:`rtl`},horizontal:!0,children:Array.from({length:1e3}).map((e,t)=>(0,u.jsxs)(`div`,{style:{width:t%3==0?100:60,borderRight:`solid 1px #ccc`,background:`#fff`},children:[`العمود `,t]},t))})})},_={render:()=>(0,u.jsx)(a,{style:{width:400,height:400,background:`lightgray`},children:Array.from({length:1e3}).map((e,t)=>(0,u.jsx)(`div`,{style:{height:100,borderRadius:8,margin:20,padding:20,background:`white`},children:t},t))})},v={render:()=>{let e=`item`;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{style:{height:`100vh`},children:Array.from({length:1e3}).map((t,n)=>(0,u.jsx)(`div`,{className:e,style:{borderBottom:`solid 1px #ccc`,background:`#fff`},children:n},n))}),(0,u.jsx)(`style`,{children:`
          .${e} {
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
        `})]})}},y={render:()=>{let e=1e3,[t,n]=(0,l.useState)(567),[r,i]=(0,l.useState)(`start`),[o,s]=(0,l.useState)(!1),[c,d]=(0,l.useState)(1e3),p=(0,l.useRef)(null);return(0,u.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`input`,{type:`number`,value:t,onChange:e=>{n(Number(e.target.value))}}),(0,u.jsx)(`button`,{onClick:()=>{p.current?.scrollToIndex(t,{align:r,smooth:o})},children:`scroll to index`}),(0,u.jsx)(`button`,{onClick:()=>{n(Math.round(e*Math.random()))},children:`randomize`}),(0,u.jsxs)(`label`,{style:{marginLeft:4},children:[(0,u.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:r===`start`,onChange:()=>{i(`start`)}}),`start`]}),(0,u.jsxs)(`label`,{style:{marginLeft:4},children:[(0,u.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:r===`center`,onChange:()=>{i(`center`)}}),`center`]}),(0,u.jsxs)(`label`,{style:{marginLeft:4},children:[(0,u.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:r===`end`,onChange:()=>{i(`end`)}}),`end`]}),(0,u.jsxs)(`label`,{style:{marginLeft:4},children:[(0,u.jsx)(`input`,{type:`checkbox`,style:{marginLeft:4},checked:o,onChange:()=>{s(e=>!e)}}),`smooth`]})]}),(0,u.jsx)(`div`,{children:(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`input`,{type:`number`,value:c,onChange:e=>{d(Number(e.target.value))}}),(0,u.jsx)(`button`,{onClick:()=>{p.current?.scrollTo(c)},children:`scroll to offset`}),(0,u.jsx)(`button`,{onClick:()=>{p.current?.scrollBy(c)},children:`scroll by offset`})]})}),(0,u.jsx)(a,{ref:p,style:{flex:1},children:f(e)})]})}},b={render:()=>{let e=(0,l.useRef)(0),t=[20,40,80,77],n=()=>{let n=e.current++;return{id:n,height:t[n%4]}},[r,i]=(0,l.useState)(()=>Array.from({length:1e3}).map(()=>n()));return(0,u.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,u.jsx)(`div`,{children:(0,u.jsx)(`button`,{onClick:()=>{i(e=>[...e,...Array.from({length:500}).map(()=>n())])},children:`append more`})}),(0,u.jsx)(a,{style:{flex:1},data:r,children:(e,t)=>(0,u.jsx)(`div`,{style:{height:e.height,borderBottom:`solid 1px #ccc`,background:`#fff`},children:t},e.id)})]})}},x={render:()=>{let e=[`skyblue`,`orange`,`pink`];return(0,u.jsx)(`div`,{style:{padding:10},children:(0,u.jsx)(a,{style:{width:`100%`,height:300,scrollSnapType:`x mandatory`},horizontal:!0,children:Array.from({length:1e3}).map((t,n)=>(0,u.jsx)(`div`,{style:{scrollSnapAlign:`center`,width:300,borderRight:`solid 1px #ccc`,background:`#fff`,padding:16,display:`flex`},children:(0,u.jsx)(`div`,{style:{flex:1,color:`#fff`,background:e[n%3],display:`flex`,justifyContent:`center`,alignItems:`center`,fontSize:32},children:n})},n))})})}},S={render:()=>{let e=(0,l.useRef)(null),[t,n]=(0,l.useState)(-1),r=Array.from({length:1e3}).map((e,r)=>(0,u.jsx)(`div`,{style:{height:60,borderBottom:`solid 1px #ccc`,background:t===r?`skyblue`:`white`,cursor:`pointer`},onClick:()=>{n(r)},children:r},r));return(0,u.jsx)(a,{ref:e,style:{height:400,width:400,margin:10},tabIndex:0,onKeyDown:i=>{if(e.current)switch(i.code){case`ArrowUp`:i.preventDefault();let a=Math.max(t-1,0);n(a),e.current.scrollToIndex(a,{align:`nearest`});break;case`ArrowDown`:i.preventDefault();let o=Math.min(t+1,r.length-1);n(o),e.current.scrollToIndex(o,{align:`nearest`})}},children:r})}},C=({id:e})=>{let t=`list-cache-`+e,n=(0,l.useRef)(null),[r,i]=(0,l.useMemo)(()=>{let e=sessionStorage.getItem(t);if(!e)return[];try{return JSON.parse(e)}catch{return[]}},[]);return(0,l.useLayoutEffect)(()=>{if(!n.current)return;let e=n.current;return r&&e.scrollTo(r),()=>{sessionStorage.setItem(t,JSON.stringify([e.scrollOffset,e.cache]))}},[]),(0,u.jsx)(a,{ref:n,cache:i,style:{height:`100vh`},children:f(1e3)})},w={render:()=>{let[e,t]=(0,l.useState)(!0),[n,r]=(0,l.useState)(`1`);return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`button`,{onClick:()=>{t(e=>!e)},children:e?`hide`:`show`}),[`1`,`2`,`3`].map(e=>(0,u.jsxs)(`label`,{children:[(0,u.jsx)(`input`,{type:`radio`,checked:n===e,onChange:()=>{r(e)}}),e]},e)),e&&(0,u.jsx)(C,{id:n},n)]})}},T=()=>(0,u.jsx)(`div`,{style:{padding:8,background:`#fff`,borderBottom:`solid 1px #ccc`},children:(0,u.jsx)(`div`,{style:{height:60,background:`#eee`}})}),E={render:()=>{let e=(0,l.useRef)(0),t=t=>{let n=[20,40,80,77];return Array.from({length:t}).map((t,r)=>{let i=e.current++;return(0,u.jsx)(`div`,{style:{height:n[r%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:i},i)})},[n,r]=(0,l.useState)(!1),i=async()=>{r(!0),await o(3e3),d(e=>[...e,...t(s)]),r(!1)},s=100,[c,d]=(0,l.useState)(()=>t(100));return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100vh`},children:[(0,u.jsx)(`div`,{children:(0,u.jsx)(`button`,{onClick:()=>{i()},children:`load more`})}),(0,u.jsxs)(a,{style:{flex:1},children:[c,n&&Array.from({length:100}).map((e,t)=>(0,u.jsx)(T,{},`skeleton_${t}`))]})]})}},D={render:()=>{let e=(e,t=0)=>{let n=[20,40,80,77];return Array.from({length:e}).map((e,r)=>(r+=t,(0,u.jsx)(`div`,{style:{height:n[r%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:r},r)))},[t,n]=(0,l.useState)(!1),r=async()=>{n(!0),await o(1e3),n(!1)},i=(0,l.useRef)(null),[s,d]=(0,l.useState)(()=>e(100)),f=(0,l.useRef)(-1),p=s.length;return(0,u.jsxs)(a,{ref:i,style:{flex:1},onScroll:async()=>{i.current&&f.current<p&&i.current.findItemIndex(i.current.scrollOffset+i.current.viewportSize)+50>p&&(f.current=p,await r(),d(t=>[...t,...e(100,t.length)]))},children:[s,t&&(0,u.jsx)(c,{})]})}},O={render:()=>{let e=(0,l.useRef)(null),t=(0,l.useState)(()=>f(1e3))[0],[n,r]=(0,l.useState)(0),[i,o]=(0,l.useState)(!1),[s,c]=(0,l.useState)(-1),[d,p]=(0,l.useState)(-1),[m,h]=(0,l.useState)(!1),[g,_]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{e.current&&(e.current.scrollOffset===0?h(!0):h(!1),e.current.scrollOffset-e.current.scrollSize+e.current.viewportSize>=-1.5?_(!0):_(!1))},[n]),(0,u.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,u.jsxs)(`div`,{style:{background:`white`,borderBottom:`solid 1px #ccc`},children:[(0,u.jsxs)(`div`,{children:[`scrollTop: `,n]}),(0,u.jsxs)(`div`,{children:[`scrolling: `,i?`true`:`false`]}),(0,u.jsxs)(`div`,{children:[`index: (`,s,`, `,d,`)`]}),(0,u.jsxs)(`div`,{children:[`at top: `,m?`true`:`false`]}),(0,u.jsxs)(`div`,{children:[`at bottom: `,g?`true`:`false`]})]}),(0,u.jsx)(a,{ref:e,style:{flex:1},onScroll:t=>{(0,l.startTransition)(()=>{if(r(t),o(!0),!e.current)return;let n=e.current.scrollOffset,i=n+e.current.viewportSize;c(e.current.findItemIndex(n)),p(e.current.findItemIndex(i))})},onScrollEnd:()=>{(0,l.startTransition)(()=>{o(!1)})},children:t})]})}},k={render:()=>{let e=(0,l.useRef)(0),t=(t,n)=>Array.from({length:t}).map((t,r)=>(r+=n,{id:e.current++,index:r})),[n,r]=(0,l.useState)(!1),[i,o]=(0,l.useState)(4),[s,c]=(0,l.useState)(!1),[d,f]=(0,l.useState)(!0),[p,m]=(0,l.useState)(()=>t(i,0)),h=()=>{m(d?e=>s?[...t(i,(e[0]?.index??0)-i),...e]:[...e,...t(i,(e[e.length-1]?.index??0)+1)]:s?e=>e.slice(i):e=>e.slice(0,-i))};(0,l.useEffect)(()=>{if(!n)return;let e=setInterval(h,500);return()=>{clearInterval(e)}},[h,n]);let g=[20,40,80,77];return(0,u.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`label`,{style:{marginRight:4},children:[(0,u.jsx)(`input`,{type:`checkbox`,style:{marginLeft:4},checked:s,onChange:()=>{c(e=>!e)}}),`prepend`]}),(0,u.jsxs)(`label`,{style:{marginRight:4},children:[(0,u.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:d,onChange:()=>{f(!0)}}),`increase`]}),(0,u.jsxs)(`label`,{style:{marginRight:4},children:[(0,u.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:!d,onChange:()=>{f(!1)}}),`decrease`]}),(0,u.jsx)(`input`,{style:{marginLeft:4},value:i,type:`number`,min:1,max:1e4,step:1,onChange:e=>{o(Number(e.target.value))}})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`label`,{style:{marginRight:16},children:[(0,u.jsx)(`input`,{type:`checkbox`,style:{marginLeft:4},checked:n,onChange:()=>{r(e=>!e)}}),`auto`]}),(0,u.jsx)(`button`,{onClick:()=>{h()},children:`update`})]}),(0,u.jsx)(a,{style:{flex:1},shift:s,children:p.map(e=>(0,u.jsx)(`div`,{style:{height:g[Math.abs(e.index)%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:e.index},e.id))})]})}},A=[`Default`,`Horizontal`,`Rtl`,`PaddingAndMargin`,`Responsive`,`ScrollTo`,`RenderProp`,`ScrollSnap`,`Keyboard`,`ScrollRestoration`,`Skeleton`,`InfiniteScrolling`,`Statuses`,`IncreasingItems`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <VList style={{
        width: "100%",
        height: 200,
        direction: "rtl"
      }} horizontal>
          {Array.from({
          length: 1000
        }).map((_, i) => {
          return <div key={i} style={{
            width: i % 3 === 0 ? 100 : 60,
            borderRight: "solid 1px #ccc",
            background: "#fff"
          }}>
                العمود {i}
              </div>;
        })}
        </VList>
        {/* <VList
          style={{ width: "100%", height: 200, writingMode: "vertical-rl" }}
          horizontal
         >
          {Array.from({ length: 1000 }).map((_, i) => {
            return (
              <div
                key={i}
                style={{
                  width: i % 3 === 0 ? 100 : 60,
                  height: "100%",
                  borderRight: "solid 1px #ccc",
                  background: "#fff",
                }}
              >
                列{" "}
                {String(i)
                  .split("")
                  .reduce(
                    (acc, s) =>
                      acc + String.fromCharCode(s.charCodeAt(0) + 0xfee0),
                    ""
                  )}
              </div>
            );
          })}
         </VList> */}
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      width: 400,
      height: 400,
      background: "lightgray"
    }}>
        {Array.from({
        length: 1000
      }).map((_, i) => {
        return <div key={i} style={{
          height: 100,
          borderRadius: 8,
          margin: 20,
          padding: 20,
          background: "white"
        }}>
              {i}
            </div>;
      })}
      </VList>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
      }} data={items}>
          {(item, i) => {
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const color = ["skyblue", "orange", "pink"];
    return <div style={{
      padding: 10
    }}>
        <VList style={{
        width: "100%",
        height: 300,
        scrollSnapType: "x mandatory"
      }} horizontal>
          {Array.from({
          length: 1000
        }).map((_, i) => {
          return <div key={i} style={{
            scrollSnapAlign: "center",
            width: 300,
            borderRight: "solid 1px #ccc",
            background: "#fff",
            padding: 16,
            display: "flex"
          }}>
                <div style={{
              flex: 1,
              color: "#fff",
              background: color[i % 3],
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 32
            }}>
                  {i}
                </div>
              </div>;
        })}
        </VList>
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
    const ref = useRef<VListHandle>(null);
    const ITEM_BATCH_COUNT = 100;
    const [items, setItems] = useState(() => createRows(ITEM_BATCH_COUNT));
    const fetchedCountRef = useRef(-1);
    const count = items.length;
    return <VList ref={ref} style={{
      flex: 1
    }} onScroll={async () => {
      if (!ref.current) return;
      if (fetchedCountRef.current < count && ref.current.findItemIndex(ref.current.scrollOffset + ref.current.viewportSize) + 50 > count) {
        fetchedCountRef.current = count;
        await fetchItems();
        setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT, prev.length)]);
      }
    }}>
        {items}
        {fetching && <Spinner />}
      </VList>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<VListHandle>(null);
    const items = useState(() => createRows(1000))[0];
    const [position, setPosition] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const [startIndex, setStartIndex] = useState(-1);
    const [endIndex, setEndIndex] = useState(-1);
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
            index: ({startIndex}, {endIndex})
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
          if (!ref.current) return;
          const startOffset = ref.current.scrollOffset;
          const endOffset = startOffset + ref.current.viewportSize;
          setStartIndex(ref.current.findItemIndex(startOffset));
          setEndIndex(ref.current.findItemIndex(endOffset));
        });
      }} onScrollEnd={() => {
        startTransition(() => {
          setScrolling(false);
        });
      }}>
          {items}
        </VList>
      </div>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
        <VList style={{
        flex: 1
      }} shift={prepend}>
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
}`,...k.parameters?.docs?.source}}}})))()}j();export{p as Default,h as Horizontal,k as IncreasingItems,D as InfiniteScrolling,S as Keyboard,_ as PaddingAndMargin,b as RenderProp,v as Responsive,g as Rtl,w as ScrollRestoration,x as ScrollSnap,y as ScrollTo,E as Skeleton,O as Statuses,A as __namedExportsOrder,d as default};