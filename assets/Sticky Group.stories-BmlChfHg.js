import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-DH9oEcjw.js";import{V as f}from"./VList-eIVFj_h1.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-BqrYZHMf.js";import"./useLatestRef-TXeW1OCq.js";import"./useChildren-DxXUdDAd.js";import"./index-CA5p-x9S.js";import"./index-5i_6hKVt.js";const C={component:f},u=40,a=new Set([0,100,200,300,400,500,600,700,800,900]),x=r.createContext(-1),m=r.forwardRef(({children:e,style:i,index:o},s)=>{const t=r.useContext(x);return d.jsx("div",{ref:s,style:{...i,...a.has(o)&&{zIndex:1},...t===o&&{position:"sticky",top:0}},children:e})}),c={name:"Sticky Group",render:()=>{const e=r.useRef(null),[i,o]=r.useState(0);return d.jsx(x.Provider,{value:i,children:d.jsx(f,{ref:e,item:m,keepMounted:[i],onScroll:()=>{if(!e.current)return;const s=e.current.findStartIndex(),t=[...a].reverse().find(n=>s>=n);o(t)},children:Array.from({length:1e3}).map((s,t)=>{const n=a.has(t);return d.jsx("div",{style:{height:n?u:80,borderBottom:"solid 1px #ccc",background:n?"#B8C1C8":"#fff",color:n?"#fff":void 0,paddingRight:4,paddingLeft:4},children:t},t)})})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Sticky Group",
  render: () => {
    const ref = useRef<VListHandle>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return <StickyIndexContext.Provider value={activeIndex}>
        <VList ref={ref} item={StickyItem} keepMounted={[activeIndex]} onScroll={() => {
        if (!ref.current) return;
        const start = ref.current.findStartIndex();
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
