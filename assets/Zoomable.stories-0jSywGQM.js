import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{r as o}from"./index-DRjF_FHU.js";import{V as c}from"./VList-BW1AzCRz.js";import"./Virtualizer-Cv6LDH6q.js";import"./useRerender-CvO1OADT.js";import"./useChildren-BmmQUSqu.js";import"./index-uWwxbAOW.js";const z={component:c},h=o.createContext(1),v=o.forwardRef(({children:n,style:s},e)=>{const r=o.useContext(h),[u,a]=o.useState();return o.useLayoutEffect(()=>{if(Math.round(r*1e4)===1e4){a(void 0);return}if(!e||!("current"in e)||!e.current)return;const p=e.current.children[0].getBoundingClientRect();a(p.height)},[e,r]),t.jsx("div",{ref:e,style:{...s,height:u},children:n})}),i={name:"Zoomable",render:()=>{const[n,s]=o.useState(1);return t.jsxs("div",{style:{height:600},children:[t.jsx("div",{children:t.jsxs("label",{style:{width:"100%"},children:["zoom x",n,t.jsx("input",{type:"range",value:n,min:.1,max:10,step:.01,style:{width:"85%"},onChange:e=>{s(Number(e.target.value))}})]})}),t.jsx("div",{style:{overflow:"hidden",width:500,height:500},children:t.jsx(h.Provider,{value:n,children:t.jsx(c,{item:v,children:Array.from({length:1e3}).map((e,r)=>t.jsx("div",{style:{height:40,background:"#fff",borderBottom:"solid 1px #ccc",transform:`scale(${n})`,transformOrigin:"left top"},children:r},r))})})})]})}};var m,d,l;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
            <VList item={ListItem}>
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
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const Z=["Default"];export{i as Default,Z as __namedExportsOrder,z as default};
