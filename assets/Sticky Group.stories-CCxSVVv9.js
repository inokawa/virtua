import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DzfIz40F.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{i,t as a}from"./src-De5IyaZp.js";var o,s,c,l,u,d,f,p,m;t((()=>{o=e(n(),1),a(),s=r(),c={component:i},l=40,u=new Set([0,100,200,300,400,500,600,700,800,900]),d=(0,o.createContext)(-1),f=(0,o.forwardRef)(({children:e,style:t,index:n},r)=>{let i=(0,o.useContext)(d);return(0,s.jsx)(`div`,{ref:r,style:{...t,...u.has(n)&&{zIndex:1},...i===n&&{position:`sticky`,top:0}},children:e})}),p={name:`Sticky Group`,render:()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)(0);return(0,s.jsx)(d.Provider,{value:t,children:(0,s.jsx)(i,{ref:e,item:f,keepMounted:[t],onScroll:()=>{if(!e.current)return;let t=e.current.findItemIndex(e.current.scrollOffset);n([...u].reverse().find(e=>t>=e))},children:Array.from({length:1e3}).map((e,t)=>{let n=u.has(t);return(0,s.jsx)(`div`,{style:{height:n?l:80,borderBottom:`solid 1px #ccc`,background:n?`#B8C1C8`:`#fff`,color:n?`#fff`:void 0,paddingRight:4,paddingLeft:4},children:t},t)})})})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,c as default};