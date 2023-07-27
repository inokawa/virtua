import{j as t,a as m}from"./jsx-runtime-f8a6c6ea.js";import{r as o}from"./index-5284b0bf.js";import{V as c}from"./VList-6da2e088.js";import"./Window-53de3cd8.js";import"./index-480187bb.js";import"./ListItem-109a20d6.js";const Z={component:c},u=o.createContext(1),p=o.forwardRef(({children:n,style:s},e)=>{const r=o.useContext(u),[v,a]=o.useState();return o.useLayoutEffect(()=>{if(Math.round(r*1e4)===1e4){a(void 0);return}if(!e||!("current"in e)||!e.current)return;const g=e.current.children[0].getBoundingClientRect();a(g.height)},[e,r]),t("div",{ref:e,style:{...s,height:v},children:n})}),i={name:"Zoomable",render:()=>{const[n,s]=o.useState(1);return m("div",{style:{height:600},children:[t("div",{children:m("label",{style:{width:"100%"},children:["zoom x",n,t("input",{type:"range",value:n,min:.1,max:10,step:.01,style:{width:"85%"},onChange:e=>{s(Number(e.target.value))}})]})}),t("div",{style:{overflow:"hidden",width:500,height:500},children:t(u.Provider,{value:n,children:t(c,{style:{height:"100vh"},itemElement:p,children:Array.from({length:1e3}).map((e,r)=>t("div",{style:{height:40,background:"#fff",borderBottom:"solid 1px #ccc",transform:`scale(${n})`,transformOrigin:"left top"},children:r},r))})})})]})}};var l,d,h;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Zoomable",
  render: () => {
    const [zoom, setZoom] = useState(1);
    return <div style={{
      height: 600
    }}>
        <div>
          <label style={{
          width: "100%"
        }}>
            zoom x{zoom}
            <input type="range" value={zoom} min={0.1} max={10} step={0.01} style={{
            width: "85%"
          }} onChange={e => {
            setZoom(Number(e.target.value));
          }} />
          </label>
        </div>
        <div style={{
        overflow: "hidden",
        width: 500,
        height: 500
      }}>
          <ZoomContext.Provider value={zoom}>
            <VList style={{
            height: "100vh"
          }} itemElement={ListItem}>
              {Array.from({
              length: 1000
            }).map((_, i) => {
              return <div key={i} style={{
                height: 40,
                background: "#fff",
                borderBottom: "solid 1px #ccc",
                transform: \`scale(\${zoom})\`,
                transformOrigin: "left top"
              }}>
                    {i}
                  </div>;
            })}
            </VList>
          </ZoomContext.Provider>
        </div>
      </div>;
  }
}`,...(h=(d=i.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const C=["Default"];export{i as Default,C as __namedExportsOrder,Z as default};
//# sourceMappingURL=Zoomable.stories-18d3a0ac.js.map
