import{n as e}from"./chunk-BneVvdWh.js";import{A as t,C as n,S as r,c as i,f as a,g as o,m as s,p as c,s as l,u,v as d,x as f}from"./iframe-B6rVEr-z.js";import{r as p,t as m}from"./solid-CwXgYCYi.js";var h,g,_,v,y,b,x,S,C;e((()=>{l(),m(),n(),h=c(`<div>`),g=c(`<div style="border-bottom:solid 1px #ccc;padding-right:4px;padding-left:4px">`),_={component:p},v=40,y=new Set([0,100,200,300,400,500,600,700,800,900]),b=d(),x=e=>{let[n]=t(b);return(()=>{var t=h(),r=e.ref;return typeof r==`function`?s(r,t):e.ref=t,i(t,()=>e.children),f(r=>a(t,{...e.style,...y.has(e.index)&&{"z-index":1},...n()===e.index&&{position:`sticky`,top:0}},r)),t})()},S={name:`Sticky Group`,render:()=>{let e,[t,n]=r(0),[a]=r(Array.from({length:1e3}).map((e,t)=>({id:t})));return o(b.Provider,{value:[t,n],get children(){return o(p,{ref:t=>e=t,get data(){return a()},item:x,get keepMounted(){return[t()]},onScroll:()=>{if(!e)return;let t=e.findItemIndex(e.scrollOffset);n([...y].reverse().find(e=>t>=e))},children:(e,t)=>{let n=()=>y.has(t());return(()=>{var t=g();return i(t,()=>e.id),f(e=>{var r=(n()?v:80)+`px`,i=n()?`#B8C1C8`:`#fff`,a=n()?`#fff`:void 0;return r!==e.e&&u(t,`height`,e.e=r),i!==e.t&&u(t,`background`,e.t=i),a!==e.a&&u(t,`color`,e.a=a),e},{e:void 0,t:void 0,a:void 0}),t})()}})}})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
        <VList ref={handle => ref = handle} data={items()} item={StickyItem} keepMounted={[activeIndex()]} onScroll={() => {
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
}`,...S.parameters?.docs?.source}}},C=[`Default`]}))();export{S as Default,C as __namedExportsOrder,_ as default};