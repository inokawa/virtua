import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{O as t,a as n,b as r,d as i,f as a,g as o,i as s,m as c,u as l,x as u,y as d}from"./iframe-Bd-GqH--.js";import{n as f,t as p}from"./VList-DKonkfsJ.js";import{n as m,t as h}from"./en-DltMjSLJ.js";var g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{s(),f(),u(),h(),g=i(`<div>`),_=i(`<div style="height:32px;display:flex;align-items:center;padding:0 16px;background:#f3f4f6;border-bottom:solid 1px #e5e7eb;color:#6b7280;font-size:13px;font-weight:600">`),v=i(`<div style="height:48px;display:flex;align-items:center;padding:0 16px;border-bottom:solid 1px #f0f0f0;background:#fff">`),y={component:p},b=[],m.helpers.multiple(()=>`${m.person.firstName()} ${m.person.lastName()}`,{count:1e3}).sort((e,t)=>e.localeCompare(t)).forEach(e=>{let t=e[0].toUpperCase(),n=b.findLast(e=>e.type===`header`);(!n||n.letter!==t)&&b.push({type:`header`,letter:t}),b.push({type:`contact`,name:e})}),x=new Set(b.flatMap((e,t)=>e.type===`header`?[t]:[])),S=o(),C=e=>{let[r]=t(S);return(()=>{var t=g(),i=e.ref;return typeof i==`function`?a(i,t):e.ref=t,n(t,()=>e.children),d(n=>l(t,{...e.style,...x.has(e.index)&&{"z-index":1},...r()===e.index&&{position:`sticky`,top:0}},n)),t})()},w={name:`Sticky Group`,render:()=>{let e,[t,i]=r(0);return c(S.Provider,{value:[t,i],get children(){return c(p,{ref(t){var n=e;typeof n==`function`?n(t):e=t},style:{height:`100vh`,"font-family":`system-ui, sans-serif`,"font-size":`14px`},data:b,item:C,get keepMounted(){return[t()]},onScroll:()=>{if(!e)return;let t=e.findItemIndex(e.scrollOffset),n=[...x].reverse().find(e=>t>=e);i(n)},children:e=>e.type===`header`?(()=>{var t=_();return n(t,()=>e.letter),t})():(()=>{var t=v();return n(t,()=>e.name),t})()})}})}},T=[`Default`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{code:`const Default = () => {
  let ref: VListHandle | undefined;
  const [activeIndex, setActiveIndex] = createSignal(0);
  return (
    <StickyIndexContext.Provider value={[activeIndex, setActiveIndex]}>
      <VList
        ref={ref}
        style={{
          height: "100vh",
          "font-family": "system-ui, sans-serif",
          "font-size": "14px",
        }}
        data={rows}
        item={StickyItem}
        keepMounted={[activeIndex()]}
        onScroll={() => {
          if (!ref) return;
          const start = ref.findItemIndex(ref.scrollOffset);
          const activeStickyIndex = [...stickyIndexes]
            .reverse()
            .find((index) => start >= index)!;
          setActiveIndex(activeStickyIndex);
        }}
      >
        {(row) =>
          row.type === "header" ? (
            <div
              style={{
                height: stickyItemHeight + "px",
                display: "flex",
                "align-items": "center",
                padding: "0 16px",
                background: "#f3f4f6",
                "border-bottom": "solid 1px #e5e7eb",
                color: "#6b7280",
                "font-size": "13px",
                "font-weight": 600,
              }}
            >
              {row.letter}
            </div>
          ) : (
            <div
              style={{
                height: "48px",
                display: "flex",
                "align-items": "center",
                padding: "0 16px",
                "border-bottom": "solid 1px #f0f0f0",
                background: "#fff",
              }}
            >
              {row.name}
            </div>
          )
        }
      </VList>
    </StickyIndexContext.Provider>
  );
};
`,...w.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Sticky Group",
  render: () => {
    let ref: VListHandle | undefined;
    const [activeIndex, setActiveIndex] = createSignal(0);
    return <StickyIndexContext.Provider value={[activeIndex, setActiveIndex]}>
        <VList ref={ref} style={{
        height: "100vh",
        "font-family": "system-ui, sans-serif",
        "font-size": "14px"
      }} data={rows} item={StickyItem} keepMounted={[activeIndex()]} onScroll={() => {
        if (!ref) return;
        const start = ref.findItemIndex(ref.scrollOffset);
        const activeStickyIndex = [...stickyIndexes].reverse().find(index => start >= index)!;
        setActiveIndex(activeStickyIndex);
      }}>
          {row => row.type === "header" ? <div style={{
          height: stickyItemHeight + "px",
          display: "flex",
          "align-items": "center",
          padding: "0 16px",
          background: "#f3f4f6",
          "border-bottom": "solid 1px #e5e7eb",
          color: "#6b7280",
          "font-size": "13px",
          "font-weight": 600
        }}>
                {row.letter}
              </div> : <div style={{
          height: "48px",
          display: "flex",
          "align-items": "center",
          padding: "0 16px",
          "border-bottom": "solid 1px #f0f0f0",
          background: "#fff"
        }}>
                {row.name}
              </div>}
        </VList>
      </StickyIndexContext.Provider>;
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{w as Default,T as __namedExportsOrder,y as default};