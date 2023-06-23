import{j as o,a as m}from"./jsx-runtime-f8a6c6ea.js";import{r as s}from"./index-5284b0bf.js";import{V as d}from"./VList-a61fc3d9.js";import"./DefaultWindow-98929275.js";import"./index-480187bb.js";const T={component:d},l=({i:e})=>o("div",{style:{background:e%2===0?"darkgray":"white",color:e%2===0?"white":"darkgray",borderBottom:"solid 1px #ccc",display:"flex",alignItems:"center",justifyContent:"center",padding:10,height:200,fontSize:64,fontWeight:"bold"},children:e}),t={render:()=>{const e=s.useRef(null),c=10,i=s.useMemo(()=>Array.from({length:c}),[]);return s.useLayoutEffect(()=>{var r;(r=e.current)==null||r.scrollToIndex(c)},[]),o("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:m(d,{ref:e,style:{flex:1},itemSize:200,onScroll:r=>{if(!e.current)return;const n=100;r<0+n?e.current.scrollTo(e.current.scrollSize/2+r):r>e.current.scrollSize-e.current.viewportSize-n&&e.current.scrollTo(r-e.current.scrollSize/2)},children:[i.map((r,n)=>o(l,{i:n},n)),i.map((r,n)=>o(l,{i:n},n+"-2"))]})})}};var f,u,a;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<VListHandle>(null);
    const ITEM_LENGTH = 10;
    const items = useMemo(() => Array.from({
      length: ITEM_LENGTH
    }), []);
    useLayoutEffect(() => {
      ref.current?.scrollToIndex(ITEM_LENGTH);
    }, []);
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <VList ref={ref} style={{
        flex: 1
      }} itemSize={200} onScroll={offset => {
        if (!ref.current) return;
        const MARGIN = 100;
        if (offset < 0 + MARGIN) {
          ref.current.scrollTo(ref.current.scrollSize / 2 + offset);
        } else if (offset > ref.current.scrollSize - ref.current.viewportSize - MARGIN) {
          ref.current.scrollTo(offset - ref.current.scrollSize / 2);
        }
      }}>
          {items.map((d, i) => <Row key={i} i={i} />)}
          {items.map((d, i) => <Row key={i + "-2"} i={i} />)}
        </VList>
      </div>;
  }
}`,...(a=(u=t.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};const L=["Loop"];export{t as Loop,L as __namedExportsOrder,T as default};
//# sourceMappingURL=Loop.stories-1b30c7bc.js.map
