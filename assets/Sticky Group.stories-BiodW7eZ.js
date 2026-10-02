import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-Cw3bVNuC.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VList-BftIgmzl.js";import{n as o,t as s}from"./en-DltMjSLJ.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=t((()=>{c=e(n(),1),i(),s(),l=r(),u={component:a},d=[],o.helpers.multiple(()=>`${o.person.firstName()} ${o.person.lastName()}`,{count:1e3}).sort((e,t)=>e.localeCompare(t)).forEach(e=>{let t=e[0].toUpperCase(),n=d.findLast(e=>e.type===`header`);(!n||n.letter!==t)&&d.push({type:`header`,letter:t}),d.push({type:`contact`,name:e})}),f=32,p=new Set(d.flatMap((e,t)=>e.type===`header`?[t]:[])),m=(0,c.createContext)(-1),h=(0,c.forwardRef)(({children:e,style:t,index:n},r)=>{let i=(0,c.useContext)(m);return(0,l.jsx)(`div`,{ref:r,style:{...t,...p.has(n)&&{zIndex:1},...i===n&&{position:`sticky`,top:0}},children:e})}),g={name:`Sticky Group`,render:()=>{let e=(0,c.useRef)(null),[t,n]=(0,c.useState)(0);return(0,l.jsx)(m.Provider,{value:t,children:(0,l.jsx)(a,{ref:e,style:{height:`100vh`,fontFamily:`system-ui, sans-serif`,fontSize:14},item:h,keepMounted:[t],onScroll:()=>{if(!e.current)return;let t=e.current.findItemIndex(e.current.scrollOffset),r=[...p].reverse().find(e=>t>=e);n(r)},children:d.map((e,t)=>e.type===`header`?(0,l.jsx)(`div`,{style:{height:f,display:`flex`,alignItems:`center`,padding:`0 16px`,background:`#f3f4f6`,borderBottom:`solid 1px #e5e7eb`,color:`#6b7280`,fontSize:13,fontWeight:600},children:e.letter},t):(0,l.jsx)(`div`,{style:{height:48,display:`flex`,alignItems:`center`,padding:`0 16px`,borderBottom:`solid 1px #f0f0f0`,background:`#fff`},children:e.name},t))})})}},_=[`Default`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Sticky Group",
  render: () => {
    const ref = useRef<VListHandle>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return <StickyIndexContext.Provider value={activeIndex}>
        <VList ref={ref} style={{
        height: "100vh",
        fontFamily: "system-ui, sans-serif",
        fontSize: 14
      }} item={StickyItem} keepMounted={[activeIndex]} onScroll={() => {
        if (!ref.current) return;
        const start = ref.current.findItemIndex(ref.current.scrollOffset);
        const activeStickyIndex = [...stickyIndexes].reverse().find(index => start >= index)!;
        setActiveIndex(activeStickyIndex);
      }}>
          {rows.map((row, i) => row.type === "header" ? <div key={i} style={{
          height: stickyItemHeight,
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          background: "#f3f4f6",
          borderBottom: "solid 1px #e5e7eb",
          color: "#6b7280",
          fontSize: 13,
          fontWeight: 600
        }}>
                {row.letter}
              </div> : <div key={i} style={{
          height: 48,
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          borderBottom: "solid 1px #f0f0f0",
          background: "#fff"
        }}>
                {row.name}
              </div>)}
        </VList>
      </StickyIndexContext.Provider>;
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as Default,_ as __namedExportsOrder,u as default};