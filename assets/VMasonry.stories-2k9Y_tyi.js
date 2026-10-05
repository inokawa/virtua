import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-DdXzC9sP.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VMasonry-Ben9Uuwn.js";import{n as o,r as s}from"./common-Dh6NomjL.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{c=e(n(),1),i(),s(),l=r(),u={component:a},d=[80,180,120,220,160,100,240],f=[`#145ec1`,`#b52f48`,`#067d51`,`#733ea4`,`#a96506`,`#057176`,`#413c9b`],p=(e,t=0)=>Array.from({length:e}).map((e,n)=>n+t),m=p(1e3),h=({index:e,style:t})=>(0,l.jsx)(`div`,{style:{border:`solid 1px #ccc`,padding:4,background:f[e%f.length],color:`white`,textShadow:`0 0 2px rgba(0, 0, 0, 0.6)`,...t},children:e}),g=e=>({height:d[e*2654435761%7]}),_=[`1 / 1`,`3 / 4`,`4 / 3`,`2 / 3`,`3 / 2`],v=e=>({aspectRatio:_[e*2654435761%5]}),y={render:()=>(0,l.jsx)(a,{style:{height:`100vh`},lanes:3,data:m,children:e=>(0,l.jsx)(h,{index:e,style:g(e)})})},b={render:()=>{let[e,t]=(0,c.useState)(3),[n,r]=(0,c.useState)(16);return(0,l.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`label`,{children:[`lanes`,(0,l.jsx)(`input`,{type:`number`,value:e,min:1,style:{marginLeft:4},onChange:e=>t(Number(e.target.value))})]}),(0,l.jsxs)(`label`,{style:{marginLeft:4},children:[`gap`,(0,l.jsx)(`input`,{type:`number`,value:n,min:0,style:{marginLeft:4},onChange:e=>r(Number(e.target.value))})]})]}),(0,l.jsx)(a,{style:{flex:1},lanes:e,gap:n,data:m,children:e=>(0,l.jsx)(h,{index:e,style:v(e)})})]})}},x=[[`(min-width: 1536px)`,6],[`(min-width: 1280px)`,5],[`(min-width: 1024px)`,4],[`(min-width: 768px)`,3]],S=()=>x.find(([e])=>window.matchMedia(e).matches)?.[1]??2,C=e=>{let t=x.map(([e])=>window.matchMedia(e));return t.forEach(t=>t.addEventListener(`change`,e)),()=>{t.forEach(t=>t.removeEventListener(`change`,e))}},w={render:()=>{let e=(0,c.useSyncExternalStore)(C,S);return(0,l.jsx)(a,{style:{height:`100vh`},lanes:e,gap:8,data:m,children:e=>(0,l.jsx)(h,{index:e,style:v(e)})})}},T=4,E=4,D=60,O=180,k={grid:{lanes:4,style:()=>({aspectRatio:`1 / 1`})},rows:{lanes:T,style:e=>{let t=e-e%T,n=0;for(let e=t;e<t+T;e++)n=Math.max(n,d[e*2654435761%7]);return{height:n}}},woven:{lanes:3,style:e=>({aspectRatio:e%2==0?`3 / 4`:`4 / 3`})},staired:{lanes:E,style:e=>({height:e<E?O+e*D:O})}},A={render:()=>{let[e,t]=(0,c.useState)(`grid`),{lanes:n,style:r}=k[e];return(0,l.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,l.jsx)(`div`,{children:Object.keys(k).map(n=>(0,l.jsxs)(`label`,{style:{marginRight:4},children:[(0,l.jsx)(`input`,{type:`radio`,checked:e===n,onChange:()=>t(n)}),n]},n))}),(0,l.jsx)(a,{style:{flex:1},lanes:n,gap:8,data:m,children:e=>(0,l.jsx)(h,{index:e,style:r(e)})},e)]})}},j={render:()=>{let[e,t]=(0,c.useState)(567),[n,r]=(0,c.useState)(`start`),[i,o]=(0,c.useState)(!1),s=(0,c.useRef)(null);return(0,l.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`input`,{type:`number`,value:e,onChange:e=>{t(Number(e.target.value))}}),(0,l.jsx)(`button`,{onClick:()=>{s.current?.scrollToIndex(e,{align:n,smooth:i})},children:`scroll to index`}),(0,l.jsx)(`button`,{onClick:()=>{t(Math.round(1e3*Math.random()))},children:`randomize`}),[`start`,`center`,`end`,`nearest`].map(e=>(0,l.jsxs)(`label`,{style:{marginLeft:4},children:[(0,l.jsx)(`input`,{type:`radio`,checked:n===e,onChange:()=>{r(e)}}),e]},e)),(0,l.jsxs)(`label`,{style:{marginLeft:4},children:[(0,l.jsx)(`input`,{type:`checkbox`,checked:i,onChange:()=>{o(e=>!e)}}),`smooth`]})]}),(0,l.jsx)(a,{ref:s,style:{flex:1},lanes:4,data:m,children:e=>(0,l.jsx)(h,{index:e,style:g(e)})})]})}},M={render:()=>{let e=(0,c.useRef)(null),[t,n]=(0,c.useState)(()=>p(100)),[r,i]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{style:{height:`100vh`,position:`relative`},children:[(0,l.jsx)(a,{ref:e,style:{height:`100%`},lanes:3,data:t,"aria-busy":r,onScroll:async()=>{e.current&&!r&&e.current.scrollOffset+e.current.viewportSize*3>e.current.scrollSize&&(i(!0),await o(1e3),n(e=>[...e,...p(100,e.length)]),i(!1))},children:e=>(0,l.jsx)(h,{index:e,style:g(e)})}),r&&(0,l.jsx)(`div`,{role:`status`,"aria-label":`Loading`,style:{position:`absolute`,bottom:16,left:`50%`,transform:`translateX(-50%)`,display:`flex`,padding:8,borderRadius:`50%`,background:`white`,boxShadow:`0 1px 4px rgba(0, 0, 0, 0.3)`},children:(0,l.jsx)(`span`,{className:`masonry-loader`})}),(0,l.jsx)(`style`,{children:`
          .masonry-loader {
            width: 20px;
            height: 20px;
            border: 3px solid #ccc;
            border-top-color: #333;
            border-radius: 50%;
            animation: masonry-loader-rotate 0.8s linear infinite;
          }
          @keyframes masonry-loader-rotate {
            to { transform: rotate(360deg); }
          }
        `})]})}},N=p(1e3),P=({id:e})=>{let t=`masonry-cache-`+e,n=(0,c.useRef)(null),[r,i]=(0,c.useMemo)(()=>{let e=sessionStorage.getItem(t);if(!e)return[];try{return JSON.parse(e)}catch{return[]}},[]);return(0,c.useLayoutEffect)(()=>{if(!n.current)return;let e=n.current;return r&&e.scrollTo(r),()=>{sessionStorage.setItem(t,JSON.stringify([e.scrollOffset,e.cache]))}},[]),(0,l.jsx)(a,{ref:n,cache:i,style:{height:`100vh`},lanes:3,data:N,children:e=>(0,l.jsx)(h,{index:e,style:g(e)})})},F={render:()=>{let[e,t]=(0,c.useState)(!0),[n,r]=(0,c.useState)(`1`);return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`button`,{onClick:()=>{t(e=>!e)},children:e?`hide`:`show`}),[`1`,`2`,`3`].map(e=>(0,l.jsxs)(`label`,{children:[(0,l.jsx)(`input`,{type:`radio`,checked:n===e,onChange:()=>{r(e)}}),e]},e)),e&&(0,l.jsx)(P,{id:n},n)]})}},I=[`Default`,`LanesAndGap`,`MediaQueries`,`Layouts`,`ScrollTo`,`InfiniteScrolling`,`ScrollRestoration`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VMasonry style={{
      height: "100vh"
    }} lanes={3} data={data1000}>
        {i => <Photo index={i} style={photoStyle(i)} />}
      </VMasonry>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [lanes, setLanes] = useState(3);
    const [gap, setGap] = useState(16);
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div>
          <label>
            lanes
            <input type="number" value={lanes} min={1} style={{
            marginLeft: 4
          }} onChange={e => setLanes(Number(e.target.value))} />
          </label>
          <label style={{
          marginLeft: 4
        }}>
            gap
            <input type="number" value={gap} min={0} style={{
            marginLeft: 4
          }} onChange={e => setGap(Number(e.target.value))} />
          </label>
        </div>
        <VMasonry style={{
        flex: 1
      }} lanes={lanes} gap={gap} data={data1000}>
          {i => <Photo index={i} style={aspectRatioPhotoStyle(i)} />}
        </VMasonry>
      </div>;
  }
}`,...b.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const lanes = useSyncExternalStore(subscribeMediaQueries, getLanesByMediaQuery);
    return <VMasonry style={{
      height: "100vh"
    }} lanes={lanes} gap={8} data={data1000}>
        {i => <Photo index={i} style={aspectRatioPhotoStyle(i)} />}
      </VMasonry>;
  }
}`,...w.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [layout, setLayout] = useState<keyof typeof layoutRecipes>("grid");
    const {
      lanes,
      style
    } = layoutRecipes[layout];
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div>
          {(Object.keys(layoutRecipes) as (keyof typeof layoutRecipes)[]).map(key => <label key={key} style={{
          marginRight: 4
        }}>
                <input type="radio" checked={layout === key} onChange={() => setLayout(key)} />
                {key}
              </label>)}
        </div>
        <VMasonry
      // Remount, as the sizes measured in the other layout are not useful
      key={layout} style={{
        flex: 1
      }} lanes={lanes} gap={8} data={data1000}>
          {i => <Photo index={i} style={style(i)} />}
        </VMasonry>
      </div>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const LENGTH = 1000;
    const [scrollIndex, setScrollIndex] = useState(567);
    const [scrollIndexAlign, setScrollToIndexAlign] = useState<ScrollToIndexAlign>("start");
    const [smooth, setSmooth] = useState(false);
    const ref = useRef<VMasonryHandle>(null);
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
          {(["start", "center", "end", "nearest"] as const).map(align => <label key={align} style={{
          marginLeft: 4
        }}>
              <input type="radio" checked={scrollIndexAlign === align} onChange={() => {
            setScrollToIndexAlign(align);
          }} />
              {align}
            </label>)}
          <label style={{
          marginLeft: 4
        }}>
            <input type="checkbox" checked={smooth} onChange={() => {
            setSmooth(prev => !prev);
          }} />
            smooth
          </label>
        </div>
        <VMasonry ref={ref} style={{
        flex: 1
      }} lanes={4} data={data1000}>
          {i => <Photo index={i} style={photoStyle(i)} />}
        </VMasonry>
      </div>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ITEM_BATCH_COUNT = 100;
    const ref = useRef<VMasonryHandle>(null);
    const [items, setItems] = useState(() => createData(ITEM_BATCH_COUNT));
    const [fetching, setFetching] = useState(false);
    return <div style={{
      height: "100vh",
      position: "relative"
    }}>
        <VMasonry ref={ref} style={{
        height: "100%"
      }} lanes={3} data={items} aria-busy={fetching} onScroll={async () => {
        if (!ref.current || fetching) return;
        // fetch more when the end is closer than 2 viewports
        if (ref.current.scrollOffset + ref.current.viewportSize * 3 > ref.current.scrollSize) {
          setFetching(true);
          await delay(1000);
          setItems(prev => [...prev, ...createData(ITEM_BATCH_COUNT, prev.length)]);
          setFetching(false);
        }
      }}>
          {i => <Photo index={i} style={photoStyle(i)} />}
        </VMasonry>
        {fetching &&
      // The lanes end at different heights, so a small indicator floats over the bottom instead of a row after the items
      <div role="status" aria-label="Loading" style={{
        position: "absolute",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        padding: 8,
        borderRadius: "50%",
        background: "white",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.3)"
      }}>
            <span className="masonry-loader" />
          </div>}
        <style>{\`
          .masonry-loader {
            width: 20px;
            height: 20px;
            border: 3px solid #ccc;
            border-top-color: #333;
            border-radius: 50%;
            animation: masonry-loader-rotate 0.8s linear infinite;
          }
          @keyframes masonry-loader-rotate {
            to { transform: rotate(360deg); }
          }
        \`}</style>
      </div>;
  }
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
        {show && <RestorableMasonry key={selectedId} id={selectedId} />}
      </div>;
  }
}`,...F.parameters?.docs?.source}}}})))()}L();export{y as Default,M as InfiniteScrolling,b as LanesAndGap,A as Layouts,w as MediaQueries,F as ScrollRestoration,j as ScrollTo,I as __namedExportsOrder,u as default};