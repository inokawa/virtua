import{j as d}from"./jsx-runtime-CRdFn2pK.js";import"./index-CVQug6lh.js";import{r}from"./iframe-BvAKqPok.js";import{V as f}from"./VList-BfHBVb-S.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-CrEL19Tp.js";import"./useLatestRef-DhNElndx.js";import"./useChildren-Dfk25ci5.js";import"./index-CTaNL9Sn.js";import"./index-GHjdeYM9.js";const j={component:f},x=40,a=new Set([0,100,200,300,400,500,600,700,800,900]),u=r.createContext(-1),m=r.forwardRef(({children:t,style:i,index:o},s)=>{const e=r.useContext(u);return d.jsx("div",{ref:s,style:{...i,...a.has(o)&&{zIndex:1},...e===o&&{position:"sticky",top:0}},children:t})}),c={name:"Sticky Group",render:()=>{const t=r.useRef(null),[i,o]=r.useState(0);return d.jsx(u.Provider,{value:i,children:d.jsx(f,{ref:t,item:m,keepMounted:[i],onScroll:()=>{if(!t.current)return;const s=t.current.findItemIndex(t.current.scrollOffset),e=[...a].reverse().find(n=>s>=n);o(e)},children:Array.from({length:1e3}).map((s,e)=>{const n=a.has(e);return d.jsx("div",{style:{height:n?x:80,borderBottom:"solid 1px #ccc",background:n?"#B8C1C8":"#fff",color:n?"#fff":void 0,paddingRight:4,paddingLeft:4},children:e},e)})})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Sticky Group",
  render: () => {
    const ref = useRef<VListHandle>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return <StickyIndexContext.Provider value={activeIndex}>
        <VList ref={ref} item={StickyItem} keepMounted={[activeIndex]} onScroll={() => {
        if (!ref.current) return;
        const start = ref.current.findItemIndex(ref.current.scrollOffset);
        const activeStickyIndex = [...stickyIndexes].reverse().find(index => start >= index)!;
        setActiveIndex(activeStickyIndex);
      }}>
          {Array.from({
          length: 1000
        }).map((_, i) => {
          const isSticky = stickyIndexes.has(i);
          return <div key={i} style={{
            height: isSticky ? stickyItemHeight : 80,
            borderBottom: "solid 1px #ccc",
            background: isSticky ? "#B8C1C8" : "#fff",
            color: isSticky ? "#fff" : undefined,
            paddingRight: 4,
            paddingLeft: 4
          }}>
                {i}
              </div>;
        })}
        </VList>
      </StickyIndexContext.Provider>;
  }
}`,...c.parameters?.docs?.source}}};const L=["Default"];export{c as Default,L as __namedExportsOrder,j as default};
