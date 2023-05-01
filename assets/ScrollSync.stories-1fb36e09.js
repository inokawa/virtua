import{a as u,j as l}from"./jsx-runtime-c3d7f245.js";import{r as s}from"./index-c6dae603.js";import{L as c}from"./List-beca73a7.js";const f=r=>{const t=[20,40,80,77];return Array.from({length:r}).map((n,e)=>l("div",{style:{height:t[e%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:e},e))},R={component:c},o={render:()=>{const r=s.useRef(null),t=s.useRef(null);return u("div",{style:{display:"flex",flexDirection:"row",width:"100%",height:"100%"},children:[l(c,{ref:r,style:{flex:1},onScroll:n=>{s.startTransition(()=>{var e;(e=t.current)==null||e.scrollTo(n)})},children:f(1e3)}),l(c,{ref:t,style:{flex:1},onScroll:n=>{s.startTransition(()=>{var e;(e=r.current)==null||e.scrollTo(n)})},children:f(1e3)})]})}};var i,a,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const leftRef = useRef<ListHandle>(null);
    const rightRef = useRef<ListHandle>(null);
    return <div style={{
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100%"
    }}>
        <List ref={leftRef} style={{
        flex: 1
      }} onScroll={offset => {
        startTransition(() => {
          rightRef.current?.scrollTo(offset);
        });
      }}>
          {createRows(1000)}
        </List>
        <List ref={rightRef} style={{
        flex: 1
      }} onScroll={offset => {
        startTransition(() => {
          leftRef.current?.scrollTo(offset);
        });
      }}>
          {createRows(1000)}
        </List>
      </div>;
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const x=["ScrollSync"];export{o as ScrollSync,x as __namedExportsOrder,R as default};
//# sourceMappingURL=ScrollSync.stories-1fb36e09.js.map
