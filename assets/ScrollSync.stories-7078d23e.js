import{a as u,j as o}from"./jsx-runtime-6c4ce591.js";import{r as f}from"./index-fcd6345f.js";import{L as l}from"./List-3c09e40c.js";const c=r=>{const t=[20,40,80,77];return Array.from({length:r}).map((n,e)=>o("div",{style:{height:t[e%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:e},e))},R={component:l},s={render:()=>{const r=f.useRef(null),t=f.useRef(null);return u("div",{style:{display:"flex",flexDirection:"row",width:800,height:400},children:[o(l,{ref:r,style:{flex:1},onScroll:n=>{var e;(e=t.current)==null||e.scrollToOffset(n)},children:c(1e3)}),o(l,{ref:t,style:{flex:1},onScroll:n=>{var e;(e=r.current)==null||e.scrollToOffset(n)},children:c(1e3)})]})}};var i,a,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const leftRef = useRef<ListHandle>(null);
    const rightRef = useRef<ListHandle>(null);
    return <div style={{
      display: "flex",
      flexDirection: "row",
      width: 800,
      height: 400
    }}>
        <List ref={leftRef} style={{
        flex: 1
      }} onScroll={offset => {
        rightRef.current?.scrollToOffset(offset);
      }}>
          {createRows(1000)}
        </List>
        <List ref={rightRef} style={{
        flex: 1
      }} onScroll={offset => {
        leftRef.current?.scrollToOffset(offset);
      }}>
          {createRows(1000)}
        </List>
      </div>;
  }
}`,...(d=(a=s.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const x=["ScrollSync"];export{s as ScrollSync,x as __namedExportsOrder,R as default};
//# sourceMappingURL=ScrollSync.stories-7078d23e.js.map
