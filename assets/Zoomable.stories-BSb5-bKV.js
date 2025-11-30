import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-C22uSV83.js";import{V as m}from"./VList-D77yvqaC.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-BEHlAVz9.js";import"./useLatestRef-BdgClSOl.js";import"./useChildren-BSYCGnNh.js";import"./index-nTStK9Ff.js";import"./index-DxxqmEng.js";const w={component:m},d=o.createContext(1),h=o.forwardRef(({children:n,style:s},e)=>{const r=o.useContext(d),[l,a]=o.useState();return o.useLayoutEffect(()=>{if(Math.round(r*1e4)===1e4){a(void 0);return}if(!e||!("current"in e)||!e.current)return;const c=e.current.children[0].getBoundingClientRect();a(c.height)},[e,r]),t.jsx("div",{ref:e,style:{...s,height:l},children:n})}),i={name:"Zoomable",render:()=>{const[n,s]=o.useState(1);return t.jsxs("div",{style:{height:600},children:[t.jsx("div",{children:t.jsxs("label",{style:{width:"100%"},children:["zoom x",n,t.jsx("input",{type:"range",value:n,min:.1,max:10,step:.01,style:{width:"85%"},onChange:e=>{s(Number(e.target.value))}})]})}),t.jsx("div",{style:{overflow:"hidden",width:500,height:500},children:t.jsx(d.Provider,{value:n,children:t.jsx(m,{item:h,children:Array.from({length:1e3}).map((e,r)=>t.jsx("div",{style:{height:40,background:"#fff",borderBottom:"solid 1px #ccc",transform:`scale(${n})`,transformOrigin:"left top"},children:r},r))})})})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const z=["Default"];export{i as Default,z as __namedExportsOrder,w as default};
