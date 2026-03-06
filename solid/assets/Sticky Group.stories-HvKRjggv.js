import{c as u,a as y,i as k,b as I,p as h,u as C,t as p,q as _,n as b,s as f}from"./iframe-CI6BspMb.js";import{V as S}from"./VList-DwkOfK6w.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-aIa3VFu7.js";import"./utils-Ckc-35l-.js";var A=p("<div>"),V=p('<div style="border-bottom:solid 1px #ccc;padding-right:4px;padding-left:4px">');const E={component:S},L=40,l=new Set([0,100,200,300,400,500,600,700,800,900]),g=_(),P=e=>{const[d]=h(g);return(()=>{var t=A(),a=e.ref;return typeof a=="function"?C(a,t):e.ref=t,k(t,()=>e.children),I(n=>b(t,{...e.style,...l.has(e.index)&&{"z-index":1},...d()===e.index&&{position:"sticky",top:0}},n)),t})()},o={name:"Sticky Group",render:()=>{let e;const[d,t]=u(0),[a]=u(Array.from({length:1e3}).map((n,i)=>({id:i})));return y(g.Provider,{value:[d,t],get children(){return y(S,{ref:n=>e=n,get data(){return a()},item:P,get keepMounted(){return[d()]},onScroll:()=>{if(!e)return;const n=e.findItemIndex(e.scrollOffset),i=[...l].reverse().find(s=>n>=s);t(i)},children:(n,i)=>{const s=()=>l.has(i());return(()=>{var c=V();return k(c,()=>n.id),I(r=>{var x=(s()?L:80)+"px",m=s()?"#B8C1C8":"#fff",v=s()?"#fff":void 0;return x!==r.e&&f(c,"height",r.e=x),m!==r.t&&f(c,"background",r.t=m),v!==r.a&&f(c,"color",r.a=v),r},{e:void 0,t:void 0,a:void 0}),c})()}})}})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const M=["Default"];export{o as Default,M as __namedExportsOrder,E as default};
