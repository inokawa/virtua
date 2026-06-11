import{i as e}from"./preload-helper-xPQekRTU.js";import{A as t,B as n,E as r,I as i,J as a,M as o,O as s,P as c,T as l,V as u,j as d,z as f}from"./iframe-CX-WY8S1.js";import{i as p,t as m}from"./solid-Doh0iSZT.js";var h,g,_,v,y,b,x,S,C;e((()=>{l(),m(),u(),h=d(`<div>`),g=d(`<div style="border-bottom:solid 1px #ccc;padding-right:4px;padding-left:4px">`),_={component:p},v=40,y=new Set([0,100,200,300,400,500,600,700,800,900]),b=i(),x=e=>{let[n]=a(b);return(()=>{var i=h(),a=e.ref;return typeof a==`function`?o(a,i):e.ref=i,r(i,()=>e.children),f(r=>t(i,{...e.style,...y.has(e.index)&&{"z-index":1},...n()===e.index&&{position:`sticky`,top:0}},r)),i})()},S={name:`Sticky Group`,render:()=>{let e,[t,i]=n(0),[a]=n(Array.from({length:1e3}).map((e,t)=>({id:t})));return c(b.Provider,{value:[t,i],get children(){return c(p,{ref:t=>e=t,get data(){return a()},item:x,get keepMounted(){return[t()]},onScroll:()=>{if(!e)return;let t=e.findItemIndex(e.scrollOffset);i([...y].reverse().find(e=>t>=e))},children:(e,t)=>{let n=()=>y.has(t());return(()=>{var t=g();return r(t,()=>e.id),f(e=>{var r=(n()?v:80)+`px`,i=n()?`#B8C1C8`:`#fff`,a=n()?`#fff`:void 0;return r!==e.e&&s(t,`height`,e.e=r),i!==e.t&&s(t,`background`,e.t=i),a!==e.a&&s(t,`color`,e.a=a),e},{e:void 0,t:void 0,a:void 0}),t})()}})}})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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