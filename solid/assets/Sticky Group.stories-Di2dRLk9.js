import{c as u,b as y,t as k,i as I,d as S,h,u as C,j as _,e as b,s as f}from"./iframe-bfv1pM6t.js";import{V as p}from"./VList-D6Xsv4Mm.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-BdfihRmZ.js";import"./utils-C8E46hyR.js";var A=k("<div>"),V=k('<div style="border-bottom:solid 1px #ccc;padding-right:4px;padding-left:4px">');const E={component:p},L=40,l=new Set([0,100,200,300,400,500,600,700,800,900]),g=h(),P=e=>{const[c]=C(g);return(()=>{var t=A(),a=e.ref;return typeof a=="function"?_(a,t):e.ref=t,I(t,()=>e.children),S(n=>b(t,{...e.style,...l.has(e.index)&&{"z-index":1},...c()===e.index&&{position:"sticky",top:0}},n)),t})()},o={name:"Sticky Group",render:()=>{let e;const[c,t]=u(0),[a]=u(Array.from({length:1e3}).map((n,i)=>({id:i})));return y(g.Provider,{value:[c,t],get children(){return y(p,{ref:n=>e=n,get data(){return a()},item:P,get keepMounted(){return[c()]},onScroll:()=>{if(!e)return;const n=e.findItemIndex(e.scrollOffset),i=[...l].reverse().find(d=>n>=d);t(i)},children:(n,i)=>{const d=()=>l.has(i());return(()=>{var s=V();return I(s,()=>n.id),S(r=>{var x=(d()?L:80)+"px",m=d()?"#B8C1C8":"#fff",v=d()?"#fff":void 0;return x!==r.e&&f(s,"height",r.e=x),m!==r.t&&f(s,"background",r.t=m),v!==r.a&&f(s,"color",r.a=v),r},{e:void 0,t:void 0,a:void 0}),s})()}})}})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
