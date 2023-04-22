import{a as u,j as l}from"./jsx-runtime-6c4ce591.js";import{r as s}from"./index-fcd6345f.js";import{L as f}from"./List-3c09e40c.js";const c=r=>{const t=[20,40,80,77];return Array.from({length:r}).map((n,e)=>l("div",{style:{height:t[e%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:e},e))},R={component:f},o={render:()=>{const r=s.useRef(null),t=s.useRef(null);return u("div",{style:{display:"flex",flexDirection:"row",width:800,height:400},children:[l(f,{ref:r,style:{flex:1},onScroll:n=>{s.startTransition(()=>{var e;(e=t.current)==null||e.scrollToOffset(n)})},children:c(1e3)}),l(f,{ref:t,style:{flex:1},onScroll:n=>{s.startTransition(()=>{var e;(e=r.current)==null||e.scrollToOffset(n)})},children:c(1e3)})]})}};var i,a,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
        startTransition(() => {
          rightRef.current?.scrollToOffset(offset);
        });
      }}>
          {createRows(1000)}
        </List>
        <List ref={rightRef} style={{
        flex: 1
      }} onScroll={offset => {
        startTransition(() => {
          leftRef.current?.scrollToOffset(offset);
        });
      }}>
          {createRows(1000)}
        </List>
      </div>;
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const x=["ScrollSync"];export{o as ScrollSync,x as __namedExportsOrder,R as default};
//# sourceMappingURL=ScrollSync.stories-662a7f42.js.map
