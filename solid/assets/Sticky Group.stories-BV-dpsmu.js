import{c as u,a as y,t as k,i as S,b as I,s as f,d as h,u as C,e as _,f as b}from"./iframe-Bt7HAiHT.js";import{V as p}from"./VList-ByKgk3Kx.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-CuUZ8h39.js";import"./utils-CiYhcsJx.js";var A=k("<div>"),V=k('<div style="border-bottom:solid 1px #ccc;padding-right:4px;padding-left:4px">');const M={component:p},L=40,x=new Set([0,100,200,300,400,500,600,700,800,900]),g=h(),P=e=>{const[c]=C(g);return(()=>{var t=A(),s=e.ref;return typeof s=="function"?_(s,t):e.ref=t,S(t,()=>e.children),I(n=>b(t,{...e.style,...x.has(e.index)&&{"z-index":1},...c()===e.index&&{position:"sticky",top:0}},n)),t})()},o={name:"Sticky Group",render:()=>{let e;const[c,t]=u(0),[s]=u(Array.from({length:1e3}).map((n,i)=>({id:i})));return y(g.Provider,{value:[c,t],get children(){return y(p,{ref:n=>e=n,get data(){return s()},item:P,get keepMounted(){return[c()]},onScroll:()=>{if(!e)return;const n=e.findStartIndex(),i=[...x].reverse().find(d=>n>=d);t(i)},children:(n,i)=>{const d=()=>x.has(i());return(()=>{var a=V();return S(a,()=>n.id),I(r=>{var l=(d()?L:80)+"px",v=d()?"#B8C1C8":"#fff",m=d()?"#fff":void 0;return l!==r.e&&f(a,"height",r.e=l),v!==r.t&&f(a,"background",r.t=v),m!==r.a&&f(a,"color",r.a=m),r},{e:void 0,t:void 0,a:void 0}),a})()}})}})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
        const start = ref.findStartIndex();
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
}`,...o.parameters?.docs?.source}}};const $=["Default"];export{o as Default,$ as __namedExportsOrder,M as default};
