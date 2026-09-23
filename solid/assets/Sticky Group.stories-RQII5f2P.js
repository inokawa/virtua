import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{O as t,a as n,b as r,c as i,d as a,f as o,g as s,i as c,m as l,u,x as d,y as f}from"./iframe-FGRAnhrN.js";import{n as p,t as m}from"./VList-BCwtw7SZ.js";var h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{c(),p(),d(),h=a(`<div>`),g=a(`<div style="border-bottom:solid 1px #ccc;padding-right:4px;padding-left:4px">`),_={component:m},v=40,y=new Set([0,100,200,300,400,500,600,700,800,900]),b=s(),x=e=>{let[r]=t(b);return(()=>{var t=h(),i=e.ref;return typeof i==`function`?o(i,t):e.ref=t,n(t,()=>e.children),f(n=>u(t,{...e.style,...y.has(e.index)&&{"z-index":1},...r()===e.index&&{position:`sticky`,top:0}},n)),t})()},S={name:`Sticky Group`,render:()=>{let e,[t,a]=r(0),[o]=r(Array.from({length:1e3}).map((e,t)=>({id:t})));return l(b.Provider,{value:[t,a],get children(){return l(m,{ref(t){var n=e;typeof n==`function`?n(t):e=t},get data(){return o()},item:x,get keepMounted(){return[t()]},onScroll:()=>{if(!e)return;let t=e.findItemIndex(e.scrollOffset),n=[...y].reverse().find(e=>t>=e);a(n)},children:(e,t)=>{let r=()=>y.has(t());return(()=>{var t=g();return n(t,()=>e.id),f(e=>{var n=(r()?v:80)+`px`,a=r()?`#B8C1C8`:`#fff`,o=r()?`#fff`:void 0;return n!==e.e&&i(t,`height`,e.e=n),a!==e.t&&i(t,`background`,e.t=a),o!==e.a&&i(t,`color`,e.a=o),e},{e:void 0,t:void 0,a:void 0}),t})()}})}})}},C=[`Default`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{code:`const Default = () => {
  let ref: VListHandle | undefined;
  const [activeIndex, setActiveIndex] = createSignal(0);
  const [items] = createSignal(
    Array.from({ length: 1000 }).map((_, id) => ({ id })),
  );
  return (
    <StickyIndexContext.Provider value={[activeIndex, setActiveIndex]}>
      <VList
        ref={ref}
        data={items()}
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
        {(data, index) => {
          const isSticky = () => stickyIndexes.has(index());
          return (
            <div
              style={{
                height: (isSticky() ? stickyItemHeight : 80) + "px",
                "border-bottom": "solid 1px #ccc",
                background: isSticky() ? "#B8C1C8" : "#fff",
                color: isSticky() ? "#fff" : undefined,
                "padding-right": "4px",
                "padding-left": "4px",
              }}
            >
              {data.id}
            </div>
          );
        }}
      </VList>
    </StickyIndexContext.Provider>
  );
};
`,...S.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Sticky Group",
  render: () => {
    let ref: VListHandle | undefined;
    const [activeIndex, setActiveIndex] = createSignal(0);
    const [items] = createSignal(Array.from({
      length: 1000
    }).map((_, id) => ({
      id
    })));
    return <StickyIndexContext.Provider value={[activeIndex, setActiveIndex]}>
        <VList ref={ref} data={items()} item={StickyItem} keepMounted={[activeIndex()]} onScroll={() => {
        if (!ref) return;
        const start = ref.findItemIndex(ref.scrollOffset);
        const activeStickyIndex = [...stickyIndexes].reverse().find(index => start >= index)!;
        setActiveIndex(activeStickyIndex);
      }}>
          {(data, index) => {
          const isSticky = () => stickyIndexes.has(index());
          return <div style={{
            height: (isSticky() ? stickyItemHeight : 80) + "px",
            "border-bottom": "solid 1px #ccc",
            background: isSticky() ? "#B8C1C8" : "#fff",
            color: isSticky() ? "#fff" : undefined,
            "padding-right": "4px",
            "padding-left": "4px"
          }}>
                {data.id}
              </div>;
        }}
        </VList>
      </StickyIndexContext.Provider>;
  }
}`,...S.parameters?.docs?.source}}}})))()}w();export{S as Default,C as __namedExportsOrder,_ as default};