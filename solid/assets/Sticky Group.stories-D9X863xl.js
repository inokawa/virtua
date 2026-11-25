import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{C as t,T as n,a as r,b as i,h as a,m as o,n as s,o as c,s as l,u,w as d,y as f}from"./iframe-aBDkq7kk.js";import{n as p,t as m}from"./VList-CUhGT_bH.js";import{n as h,t as g}from"./en-uMSCgswj.js";var _,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{c(),p(),d(),g(),_=a(`<div>`),v=a(`<div style="height:32px;display:flex;align-items:center;padding:0 16px;background:#f3f4f6;border-bottom:solid 1px #e5e7eb;color:#6b7280;font-size:13px;font-weight:600">`),y=a(`<div style="height:48px;display:flex;align-items:center;padding:0 16px;border-bottom:solid 1px #f0f0f0;background:#fff">`),b={component:m},x=[],h.helpers.multiple(()=>`${h.person.firstName()} ${h.person.lastName()}`,{count:1e3}).sort((e,t)=>e.localeCompare(t)).forEach(e=>{let t=e[0].toUpperCase(),n=x.findLast(e=>e.type===`header`);n&&n.letter===t||x.push({type:`header`,letter:t}),x.push({type:`contact`,name:e})}),S=new Set(x.flatMap((e,t)=>e.type===`header`?[t]:[])),C=i(),w=e=>{let[t]=n(C);var i=_(),a=e.ref;return typeof a==`function`||Array.isArray(a)?u(()=>a,i):e.ref=i,l(i,()=>e.children),r(()=>({...e.style,...S.has(e.index)&&{"z-index":1},...t()===e.index&&{position:`sticky`,top:0}}),(e,t)=>{o(i,e,t)}),i},T={name:`Sticky Group`,render:()=>{let e,[n,r]=t(0);return f(C,{value:[n,r],get children(){return f(m,{ref(t){var n=e;typeof n==`function`||Array.isArray(n)?s(n,t):e=t},style:{height:`100vh`,"font-family":`system-ui, sans-serif`,"font-size":`14px`},data:x,item:w,get keepMounted(){return[n()]},onScroll:()=>{if(!e)return;let t=e.findItemIndex(e.scrollOffset),n=[...S].reverse().find(e=>t>=e);r(n)},children:e=>e.type===`header`?(()=>{var t=v();return l(t,()=>e.letter),t})():(()=>{var t=y();return l(t,()=>e.name),t})()})}})}},E=[`Default`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{code:`const Default = () => {
  let ref: VListHandle | undefined;
  const [activeIndex, setActiveIndex] = createSignal(0);
  return (
    <StickyIndexContext value={[activeIndex, setActiveIndex]}>
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
    </StickyIndexContext>
  );
};
`,...T.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Sticky Group",
  render: () => {
    let ref: VListHandle | undefined;
    const [activeIndex, setActiveIndex] = createSignal(0);
    return <StickyIndexContext value={[activeIndex, setActiveIndex]}>
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
      </StickyIndexContext>;
  }
}`,...T.parameters?.docs?.source}}}})))()}D();export{T as Default,E as __namedExportsOrder,b as default};