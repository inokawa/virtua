import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-B_-wC5Mi.js";import{V as f}from"./VList-Ccv8859I.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-1LrIGV9L.js";import"./useLatestRef-BCst7SqF.js";import"./useChildren-WhXWD5Ls.js";import"./index-CqA6agiU.js";import"./index-CvzE82D6.js";const C={component:f},x=40,a=new Set([0,100,200,300,400,500,600,700,800,900]),u=r.createContext(-1),m=r.forwardRef(({children:t,style:i,index:s},o)=>{const e=r.useContext(u);return d.jsx("div",{ref:o,style:{...i,...a.has(s)&&{zIndex:1},...e===s&&{position:"sticky",top:0}},children:t})}),c={name:"Sticky Group",render:()=>{const t=r.useRef(null),[i,s]=r.useState(0);return d.jsx(u.Provider,{value:i,children:d.jsx(f,{ref:t,item:m,keepMounted:[i],onScroll:()=>{if(!t.current)return;const o=t.current.findItemIndex(t.current.scrollOffset),e=[...a].reverse().find(n=>o>=n);s(e)},children:Array.from({length:1e3}).map((o,e)=>{const n=a.has(e);return d.jsx("div",{style:{height:n?x:80,borderBottom:"solid 1px #ccc",background:n?"#B8C1C8":"#fff",color:n?"#fff":void 0,paddingRight:4,paddingLeft:4},children:e},e)})})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const j=["Default"];export{c as Default,j as __namedExportsOrder,C as default};
