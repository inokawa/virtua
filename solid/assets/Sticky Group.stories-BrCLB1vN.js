import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,L as r,O as i,T as a,_ as o,b as s,k as c,m as l,p as u,x as d,y as f}from"./iframe-gXEpGRFQ.js";import{n as p,t as m}from"./VList-I4yLzbS9.js";var h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{u(),p(),t(),h=s(`<div>`),g=s(`<div style="border-bottom:solid 1px #ccc;padding-right:4px;padding-left:4px">`),_={component:m},v=40,y=new Set([0,100,200,300,400,500,600,700,800,900]),b=a(),x=e=>{let[t]=r(b);return(()=>{var n=h(),r=e.ref;return typeof r==`function`?d(r,n):e.ref=n,l(n,()=>e.children),i(r=>f(n,{...e.style,...y.has(e.index)&&{"z-index":1},...t()===e.index&&{position:`sticky`,top:0}},r)),n})()},S={name:`Sticky Group`,render:()=>{let e,[t,r]=c(0),[a]=c(Array.from({length:1e3}).map((e,t)=>({id:t})));return n(b.Provider,{value:[t,r],get children(){return n(m,{ref(t){var n=e;typeof n==`function`?n(t):e=t},get data(){return a()},item:x,get keepMounted(){return[t()]},onScroll:()=>{if(!e)return;let t=e.findItemIndex(e.scrollOffset),n=[...y].reverse().find(e=>t>=e);r(n)},children:(e,t)=>{let n=()=>y.has(t());return(()=>{var t=g();return l(t,()=>e.id),i(e=>{var r=(n()?v:80)+`px`,i=n()?`#B8C1C8`:`#fff`,a=n()?`#fff`:void 0;return r!==e.e&&o(t,`height`,e.e=r),i!==e.t&&o(t,`background`,e.t=i),a!==e.a&&o(t,`color`,e.a=a),e},{e:void 0,t:void 0,a:void 0}),t})()}})}})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`]})))()}w();export{S as Default,C as __namedExportsOrder,_ as default};