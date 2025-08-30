import{j as d}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./iframe-Cx992_xA.js";import{V as m}from"./VList-C7rzj4HN.js";import"./preload-helper-BQ24v_F8.js";import"./Virtualizer-Bx0ELK9B.js";import"./useLatestRef-BDctBP2R.js";import"./useChildren-DyIxFVix.js";import"./index-DEQVTzOp.js";const L={component:m},y=40,a=new Set([0,100,200,300,400,500,600,700,800,900]),p=r.createContext(-1),k=r.forwardRef(({children:t,style:i,index:o},s)=>{const e=r.useContext(p);return d.jsx("div",{ref:s,style:{...i,...a.has(o)&&{zIndex:1},...e===o&&{position:"sticky",top:0}},children:t})}),c={name:"Sticky Group",render:()=>{const t=r.useRef(null),[i,o]=r.useState(0);return d.jsx(p.Provider,{value:i,children:d.jsx(m,{ref:t,item:k,keepMounted:[i],onScroll:()=>{if(!t.current)return;const s=t.current.findStartIndex(),e=[...a].reverse().find(n=>s>=n);o(e)},children:Array.from({length:1e3}).map((s,e)=>{const n=a.has(e);return d.jsx("div",{style:{height:n?y:80,borderBottom:"solid 1px #ccc",background:n?"#B8C1C8":"#fff",color:n?"#fff":void 0,paddingRight:4,paddingLeft:4},children:e},e)})})})}};var f,x,u;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(u=(x=c.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const R=["Default"];export{c as Default,R as __namedExportsOrder,L as default};
