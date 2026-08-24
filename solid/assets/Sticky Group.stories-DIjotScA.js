import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{D as t,I as n,O as r,S as i,b as a,g as o,k as s,m as c,p as l,v as u,w as d,y as f}from"./iframe-DWuWfMz1.js";import{n as p,t as m}from"./VList-kiP3Odzb.js";var h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{l(),p(),s(),h=f(`<div>`),g=f(`<div style="border-bottom:solid 1px #ccc;padding-right:4px;padding-left:4px">`),_={component:m},v=40,y=new Set([0,100,200,300,400,500,600,700,800,900]),b=d(),x=e=>{let[r]=n(b);return(()=>{var n=h(),i=e.ref;return typeof i==`function`?a(i,n):e.ref=n,c(n,()=>e.children),t(t=>u(n,{...e.style,...y.has(e.index)&&{"z-index":1},...r()===e.index&&{position:`sticky`,top:0}},t)),n})()},S={name:`Sticky Group`,render:()=>{let e,[n,a]=r(0),[s]=r(Array.from({length:1e3}).map((e,t)=>({id:t})));return i(b.Provider,{value:[n,a],get children(){return i(m,{ref:t=>e=t,get data(){return s()},item:x,get keepMounted(){return[n()]},onScroll:()=>{if(!e)return;let t=e.findItemIndex(e.scrollOffset),n=[...y].reverse().find(e=>t>=e);a(n)},children:(e,n)=>{let r=()=>y.has(n());return(()=>{var n=g();return c(n,()=>e.id),t(e=>{var t=(r()?v:80)+`px`,i=r()?`#B8C1C8`:`#fff`,a=r()?`#fff`:void 0;return t!==e.e&&o(n,`height`,e.e=t),i!==e.t&&o(n,`background`,e.t=i),a!==e.a&&o(n,`color`,e.a=a),e},{e:void 0,t:void 0,a:void 0}),n})()}})}})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`]})))()}w();export{S as Default,C as __namedExportsOrder,_ as default};