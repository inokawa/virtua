import{j as d}from"./jsx-runtime-DR9Q75dM.js";import{r}from"./index-DRjF_FHU.js";import{V as m}from"./VList-BAPMNa19.js";import"./Virtualizer-CaPS7AGl.js";import"./useRerender-BvLS7D9d.js";import"./useChildren-Dw0sRjzb.js";import"./index-uWwxbAOW.js";const j={component:m},y=40,a=new Set([0,100,200,300,400,500,600,700,800,900]),p=r.createContext(-1),k=r.forwardRef(({children:t,style:i,index:s},o)=>{const e=r.useContext(p);return d.jsx("div",{ref:o,style:{...i,...a.has(s)&&{zIndex:1},...e===s&&{position:"sticky",top:0}},children:t})}),c={name:"Sticky Group",render:()=>{const t=r.useRef(null),[i,s]=r.useState(0);return d.jsx(p.Provider,{value:i,children:d.jsx(m,{ref:t,item:k,keepMounted:[i],onScroll:()=>{if(!t.current)return;const o=t.current.findStartIndex(),e=[...a].reverse().find(n=>o>=n);s(e)},children:Array.from({length:1e3}).map((o,e)=>{const n=a.has(e);return d.jsx("div",{style:{height:n?y:80,borderBottom:"solid 1px #ccc",background:n?"#B8C1C8":"#fff",color:n?"#fff":void 0,paddingRight:4,paddingLeft:4},children:e},e)})})})}};var f,x,u;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(u=(x=c.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const L=["Default"];export{c as Default,L as __namedExportsOrder,j as default};
