import{i as e}from"./preload-helper-xPQekRTU.js";import{A as t,B as n,F as r,G as i,I as a,M as o,P as s,Q as c,R as l,U as u,W as d,k as f}from"./iframe-_xV8UM5c.js";import{i as p,t as m}from"./solid-wJiVoR5s.js";var h,g,_,v,y,b,x,S,C;e((()=>{f(),m(),i(),h=r(`<div>`),g=r(`<div style="border-bottom:solid 1px #ccc;padding-right:4px;padding-left:4px">`),_={component:p},v=40,y=new Set([0,100,200,300,400,500,600,700,800,900]),b=n(),x=e=>{let[n]=c(b);return(()=>{var r=h(),i=e.ref;return typeof i==`function`?a(i,r):e.ref=r,t(r,()=>e.children),u(t=>s(r,{...e.style,...y.has(e.index)&&{"z-index":1},...n()===e.index&&{position:`sticky`,top:0}},t)),r})()},S={name:`Sticky Group`,render:()=>{let e,[n,r]=d(0),[i]=d(Array.from({length:1e3}).map((e,t)=>({id:t})));return l(b.Provider,{value:[n,r],get children(){return l(p,{ref:t=>e=t,get data(){return i()},item:x,get keepMounted(){return[n()]},onScroll:()=>{if(!e)return;let t=e.findItemIndex(e.scrollOffset);r([...y].reverse().find(e=>t>=e))},children:(e,n)=>{let r=()=>y.has(n());return(()=>{var n=g();return t(n,()=>e.id),u(e=>{var t=(r()?v:80)+`px`,i=r()?`#B8C1C8`:`#fff`,a=r()?`#fff`:void 0;return t!==e.e&&o(n,`height`,e.e=t),i!==e.t&&o(n,`background`,e.t=i),a!==e.a&&o(n,`color`,e.a=a),e},{e:void 0,t:void 0,a:void 0}),n})()}})}})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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