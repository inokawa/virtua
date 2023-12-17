import{a as t,j as m}from"./jsx-runtime-sgeEVxPu.js";import{r as o}from"./index-yp3VsGQP.js";import{V as h}from"./VList-ycTqayPb.js";import"./useRerender-9SuQiKCW.js";import"./useChildren-M1xKPMjO.js";import"./index-8dy-jdxy.js";const Z={component:h},u=o.createContext(1),g=o.forwardRef(({children:n,style:s},e)=>{const r=o.useContext(u),[p,a]=o.useState();return o.useLayoutEffect(()=>{if(Math.round(r*1e4)===1e4){a(void 0);return}if(!e||!("current"in e)||!e.current)return;const v=e.current.children[0].getBoundingClientRect();a(v.height)},[e,r]),t("div",{ref:e,style:{...s,height:p},children:n})}),i={name:"Zoomable",render:()=>{const[n,s]=o.useState(1);return m("div",{style:{height:600},children:[t("div",{children:m("label",{style:{width:"100%"},children:["zoom x",n,t("input",{type:"range",value:n,min:.1,max:10,step:.01,style:{width:"85%"},onChange:e=>{s(Number(e.target.value))}})]})}),t("div",{style:{overflow:"hidden",width:500,height:500},children:t(u.Provider,{value:n,children:t(h,{components:{Item:g},children:Array.from({length:1e3}).map((e,r)=>t("div",{style:{height:40,background:"#fff",borderBottom:"solid 1px #ccc",transform:`scale(${n})`,transformOrigin:"left top"},children:r},r))})})})]})}};var d,l,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
            <VList components={{
            Item: ListItem
          }}>
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
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const C=["Default"];export{i as Default,C as __namedExportsOrder,Z as default};
