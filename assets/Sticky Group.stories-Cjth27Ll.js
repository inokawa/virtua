import{j as o}from"./index-CKMfL3Jx.js";import{r as s}from"./entry-preview-D8_MYwTg.js";import{V as p}from"./VList-scZ3wInM.js";import"./Virtualizer-CsJWFvCl.js";import"./useRerender-DYbmKg6o.js";import"./useChildren-CgulYzJ9.js";const l={component:p},f=40,d=new Set([0,100,200,300,400,500,600,700,800,900]),y=s.createContext(-1),k=s.forwardRef(({children:i,style:c,index:n},e)=>{const t=s.useContext(y);return o.jsx("div",{ref:e,style:{...c,...d.has(n)&&{zIndex:1},...t===n&&{position:"sticky",top:0}},children:i})}),r={name:"Sticky Group",render:()=>{const[i,c]=s.useState(0);return o.jsx(y.Provider,{value:i,children:o.jsx(p,{item:k,keepMounted:[i],onRangeChange:n=>{const e=[...d].reverse().find(t=>n>=t);c(e)},children:Array.from({length:1e3}).map((n,e)=>{const t=d.has(e);return o.jsx("div",{style:{height:t?f:80,borderBottom:"solid 1px #ccc",background:t?"#B8C1C8":"#fff",color:t?"#fff":void 0,paddingRight:4,paddingLeft:4},children:e},e)})})})}};var a,x,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Sticky Group",
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return <StickyIndexContext.Provider value={activeIndex}>
        <VList item={StickyItem} keepMounted={[activeIndex]} onRangeChange={start => {
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
}`,...(m=(x=r.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const C=["Default"];export{r as Default,C as __namedExportsOrder,l as default};
