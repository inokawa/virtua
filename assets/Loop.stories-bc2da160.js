import{j as o,a as m}from"./jsx-runtime-c3d7f245.js";import{r as s}from"./index-c6dae603.js";import{V as d}from"./VList-d970872e.js";import"./Viewport-5b4a32aa.js";import"./index-eb008d06.js";import"./ListItem-72298320.js";const I={component:d},l=({i:e})=>o("div",{style:{background:e%2===0?"darkgray":"white",color:e%2===0?"white":"darkgray",borderBottom:"solid 1px #ccc",display:"flex",alignItems:"center",justifyContent:"center",padding:10,height:200,fontSize:64,fontWeight:"bold"},children:e}),t={render:()=>{const e=s.useRef(null),i=10,c=s.useMemo(()=>Array.from({length:i}),[]);return s.useLayoutEffect(()=>{var r;(r=e.current)==null||r.scrollToIndex(i)},[]),o("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:m(d,{ref:e,style:{flex:1},initialItemSize:200,onScroll:r=>{if(!e.current)return;const n=100;r<0+n?e.current.scrollTo(e.current.scrollSize/2+r):r>e.current.scrollSize-e.current.viewportSize-n&&e.current.scrollTo(r-e.current.scrollSize/2)},children:[c.map((r,n)=>o(l,{i:n},n)),c.map((r,n)=>o(l,{i:n},n+"-2"))]})})}};var f,a,u;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      }} initialItemSize={200} onScroll={offset => {
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
}`,...(u=(a=t.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const L=["Loop"];export{t as Loop,L as __namedExportsOrder,I as default};
//# sourceMappingURL=Loop.stories-bc2da160.js.map
