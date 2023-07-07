import{j as u,a as l}from"./jsx-runtime-e162df28.js";import{r as s}from"./index-5284b0bf.js";import{V as c}from"./VList-b77e7e86.js";import"./DefaultWindow-a9fb66b1.js";import"./index-480187bb.js";const i=r=>{const t=[20,40,80,77];return Array.from({length:r}).map((n,e)=>l("div",{style:{height:t[e%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:e},e))},y={component:c},o={render:()=>{const r=s.useRef(null),t=s.useRef(null);return u("div",{style:{display:"flex",flexDirection:"row",width:"100%",height:"100%"},children:[l(c,{ref:r,style:{flex:1},onScroll:n=>{s.startTransition(()=>{var e;(e=t.current)==null||e.scrollTo(n)})},children:i(1e3)}),l(c,{ref:t,style:{flex:1},onScroll:n=>{s.startTransition(()=>{var e;(e=r.current)==null||e.scrollTo(n)})},children:i(1e3)})]})}};var f,a,d;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const leftRef = useRef<VListHandle>(null);
    const rightRef = useRef<VListHandle>(null);
    return <div style={{
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100%"
    }}>
        <VList ref={leftRef} style={{
        flex: 1
      }} onScroll={offset => {
        startTransition(() => {
          rightRef.current?.scrollTo(offset);
        });
      }}>
          {createRows(1000)}
        </VList>
        <VList ref={rightRef} style={{
        flex: 1
      }} onScroll={offset => {
        startTransition(() => {
          leftRef.current?.scrollTo(offset);
        });
      }}>
          {createRows(1000)}
        </VList>
      </div>;
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const g=["ScrollSync"];export{o as ScrollSync,g as __namedExportsOrder,y as default};
//# sourceMappingURL=ScrollSync.stories-5fdb3848.js.map
