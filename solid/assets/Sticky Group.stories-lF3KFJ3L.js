import{n as e}from"./chunk-BneVvdWh.js";import{$ as t,B as n,G as r,H as i,J as a,K as o,W as s,X as c,ct as l,et as u,tt as d,z as f}from"./iframe-DQOOEMK8.js";import{r as p,t as m}from"./solid-DH6AtWuN.js";var h,g,_,v,y,b,x,S,C;e((()=>{f(),m(),d(),h=r(`<div>`),g=r(`<div style="border-bottom:solid 1px #ccc;padding-right:4px;padding-left:4px">`),_={component:p},v=40,y=new Set([0,100,200,300,400,500,600,700,800,900]),b=c(),x=e=>{let[r]=l(b);return(()=>{var i=h(),a=e.ref;return typeof a==`function`?o(a,i):e.ref=i,n(i,()=>e.children),t(t=>s(i,{...e.style,...y.has(e.index)&&{"z-index":1},...r()===e.index&&{position:`sticky`,top:0}},t)),i})()},S={name:`Sticky Group`,render:()=>{let e,[r,o]=u(0),[s]=u(Array.from({length:1e3}).map((e,t)=>({id:t})));return a(b.Provider,{value:[r,o],get children(){return a(p,{ref:t=>e=t,get data(){return s()},item:x,get keepMounted(){return[r()]},onScroll:()=>{if(!e)return;let t=e.findItemIndex(e.scrollOffset);o([...y].reverse().find(e=>t>=e))},children:(e,r)=>{let a=()=>y.has(r());return(()=>{var r=g();return n(r,()=>e.id),t(e=>{var t=(a()?v:80)+`px`,n=a()?`#B8C1C8`:`#fff`,o=a()?`#fff`:void 0;return t!==e.e&&i(r,`height`,e.e=t),n!==e.t&&i(r,`background`,e.t=n),o!==e.a&&i(r,`color`,e.a=o),e},{e:void 0,t:void 0,a:void 0}),r})()}})}})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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