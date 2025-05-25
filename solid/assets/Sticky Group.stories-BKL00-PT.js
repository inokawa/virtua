import{c as u,d as v,i as S,e as I,t as C,f as b,u as _,h as A,s as V}from"./web-DxNzkiKp.js";import{V as g}from"./VList-Dh17-3O9.js";import"./Virtualizer-DShc0DpM.js";import"./utils-40eRekx9.js";var h=C("<div>");const M={component:g},L=40,x=new Set([0,100,200,300,400,500,600,700,800,900]),P=b(),G=t=>{const[d]=_(P);return(()=>{var n=h(),c=t.ref;return typeof c=="function"?A(c,n):t.ref=n,S(n,()=>t.children),I(r=>V(n,{...t.style,...x.has(t.index)&&{"z-index":1},...d()===t.index&&{position:"sticky",top:0}},r)),n})()},a={name:"Sticky Group",render:()=>{let t;const[d,n]=u(0),[c]=u(Array.from({length:1e3}).map((r,s)=>({id:s})));return v(P.Provider,{value:[d,n],get children(){return v(g,{ref:r=>t=r,get data(){return c()},item:G,get keepMounted(){return[d()]},onScroll:()=>{if(!t)return;const r=t.findStartIndex(),s=[...x].reverse().find(o=>r>=o);n(s)},children:(r,s)=>{const o=()=>x.has(s());return(()=>{var e=h();return e.style.setProperty("border-bottom","solid 1px #ccc"),e.style.setProperty("padding-right","4px"),e.style.setProperty("padding-left","4px"),S(e,()=>r.id),I(i=>{var l=(o()?L:80)+"px",y=o()?"#B8C1C8":"#fff",f=o()?"#fff":void 0;return l!==i.e&&((i.e=l)!=null?e.style.setProperty("height",l):e.style.removeProperty("height")),y!==i.t&&((i.t=y)!=null?e.style.setProperty("background",y):e.style.removeProperty("background")),f!==i.a&&((i.a=f)!=null?e.style.setProperty("color",f):e.style.removeProperty("color")),i},{e:void 0,t:void 0,a:void 0}),e})()}})}})}};var m,p,k;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(k=(p=a.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const w=["Default"];export{a as Default,w as __namedExportsOrder,M as default};
