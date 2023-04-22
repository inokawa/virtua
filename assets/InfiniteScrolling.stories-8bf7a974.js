import{a as o,j as t,F as f}from"./jsx-runtime-6c4ce591.js";import{r as c}from"./index-fcd6345f.js";import{y as s}from"./index-a7768622.js";import{L as p}from"./List-8262a6be.js";const E={component:p},u=n=>o(f,{children:[t("div",{style:{height:100,display:n.hidden?"none":"flex",alignItems:"center",justifyContent:"center",background:"white"},children:t("span",{className:"loader"})}),t("style",{children:`
      .loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite
      }
      .loader::before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #ccc;
        animation: prixClipFix 2s linear infinite ;
      }
  
      @keyframes rotate {
        100%   {transform: rotate(360deg)}
      }
  
      @keyframes prixClipFix {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
          75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
          100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
      }`})]}),x={borderBottom:"solid 1px #ccc",background:"white",display:"flex",flexDirection:"row",padding:10},y={width:200,minWidth:200},w=({name:n,text:r})=>o("div",{style:x,children:[t("div",{style:y,children:n}),t("div",{children:r})]}),S=()=>({id:String(Math.random()),name:`${s.name.firstName()} ${s.name.lastName()}`,text:s.lorem.paragraphs(4)}),b=50,d=()=>Array.from({length:b},()=>S()),i={render:()=>{const[n,r]=c.useState(d),[g,a]=c.useState(!1);return o(p,{style:{height:"100vh"},endThreshold:30,itemSize:200,onEndReached:async()=>{a(!0),await new Promise(e=>setTimeout(e,1500)),r(e=>[...e,...d()]),a(!1)},children:[n.map(e=>t(w,{id:e.id,name:e.name,text:e.text})),t(u,{hidden:!g})]})}};var l,m,h;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState(createItems);
    const [fetching, setFetching] = useState(false);
    return <List style={{
      height: "100vh"
    }} endThreshold={30} itemSize={200} onEndReached={async () => {
      setFetching(true);
      await new Promise(r => setTimeout(r, 1500));
      setItems(prev => [...prev, ...createItems()]);
      setFetching(false);
    }}>
        {items.map(d => <Row id={d.id} name={d.name} text={d.text} />)}
        {/* Now hide spinner without unmounting because onEndReached is called twice due to item length change */}
        <Spinner hidden={!fetching} />
      </List>;
  }
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const C=["InfiniteScrolling"];export{i as InfiniteScrolling,C as __namedExportsOrder,E as default};
//# sourceMappingURL=InfiniteScrolling.stories-8bf7a974.js.map
