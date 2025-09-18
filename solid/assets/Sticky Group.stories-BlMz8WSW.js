import{c as u,a as y,t as p,i as g,b as h,s as f,d as b,u as A,e as V,f as L}from"./iframe-Cgf65jvk.js";import{V as C}from"./VList-PIKtdog9.js";import"./preload-helper-BQ24v_F8.js";import"./Virtualizer-eYyLidyr.js";import"./utils-B2--14-f.js";var P=p("<div>"),G=p('<div style="border-bottom:solid 1px #ccc;padding-right:4px;padding-left:4px">');const z={component:C},H=40,x=new Set([0,100,200,300,400,500,600,700,800,900]),_=b(),B=e=>{const[c]=A(_);return(()=>{var t=P(),s=e.ref;return typeof s=="function"?V(s,t):e.ref=t,g(t,()=>e.children),h(n=>L(t,{...e.style,...x.has(e.index)&&{"z-index":1},...c()===e.index&&{position:"sticky",top:0}},n)),t})()},o={name:"Sticky Group",render:()=>{let e;const[c,t]=u(0),[s]=u(Array.from({length:1e3}).map((n,i)=>({id:i})));return y(_.Provider,{value:[c,t],get children(){return y(C,{ref:n=>e=n,get data(){return s()},item:B,get keepMounted(){return[c()]},onScroll:()=>{if(!e)return;const n=e.findStartIndex(),i=[...x].reverse().find(d=>n>=d);t(i)},children:(n,i)=>{const d=()=>x.has(i());return(()=>{var a=G();return g(a,()=>n.id),h(r=>{var l=(d()?H:80)+"px",v=d()?"#B8C1C8":"#fff",m=d()?"#fff":void 0;return l!==r.e&&f(a,"height",r.e=l),v!==r.t&&f(a,"background",r.t=v),m!==r.a&&f(a,"color",r.a=m),r},{e:void 0,t:void 0,a:void 0}),a})()}})}})}};var k,S,I;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(S=o.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const O=["Default"];export{o as Default,O as __namedExportsOrder,z as default};
