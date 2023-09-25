import{a as u,j as l}from"./jsx-runtime-c3d7f245.js";import{r as o}from"./index-c6dae603.js";import{V as c}from"./VList-254380c6.js";import"./Viewport-cb6d4548.js";import"./ListItem-bf17c052.js";import"./index-eb008d06.js";const i=r=>{const t=[20,40,80,77];return Array.from({length:r}).map((n,e)=>l("div",{style:{height:t[e%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:e},e))},g={component:c},s={render:()=>{const r=o.useRef(null),t=o.useRef(null);return u("div",{style:{display:"flex",flexDirection:"row",width:"100%",height:"100%"},children:[l(c,{ref:r,style:{flex:1},onScroll:n=>{o.startTransition(()=>{var e;(e=t.current)==null||e.scrollTo(n)})},children:i(1e3)}),l(c,{ref:t,style:{flex:1},onScroll:n=>{o.startTransition(()=>{var e;(e=r.current)==null||e.scrollTo(n)})},children:i(1e3)})]})}};var f,a,d;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(d=(a=s.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const S=["ScrollSync"];export{s as ScrollSync,S as __namedExportsOrder,g as default};
//# sourceMappingURL=ScrollSync.stories-0847f23f.js.map