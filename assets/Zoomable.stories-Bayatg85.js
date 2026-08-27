import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-DMmIPdVs.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VList-BqXeKJg6.js";var o,s,c,l,u,d,f;function p(){return(p=t((()=>{i(),o=e(n(),1),s=r(),c={component:a},l=(0,o.createContext)(1),u=(0,o.forwardRef)(({children:e,style:t},n)=>{let r=(0,o.useContext)(l),[i,a]=(0,o.useState)();return(0,o.useLayoutEffect)(()=>{if(Math.round(r*1e4)===1e4){a(void 0);return}if(!n||!(`current`in n)||!n.current)return;let e=n.current.children[0].getBoundingClientRect();a(e.height)},[n,r]),(0,s.jsx)(`div`,{ref:n,style:{...t,height:i},children:e})}),d={name:`Zoomable`,render:()=>{let[e,t]=(0,o.useState)(1);return(0,s.jsxs)(`div`,{style:{height:600},children:[(0,s.jsx)(`div`,{children:(0,s.jsxs)(`label`,{style:{width:`100%`},children:[`zoom x`,e,(0,s.jsx)(`input`,{type:`range`,value:e,min:.1,max:10,step:.01,style:{width:`85%`},onChange:e=>{t(Number(e.target.value))}})]})}),(0,s.jsx)(`div`,{style:{overflow:`hidden`,width:500,height:500},children:(0,s.jsx)(l.Provider,{value:e,children:(0,s.jsx)(a,{item:u,children:Array.from({length:1e3}).map((t,n)=>(0,s.jsx)(`div`,{style:{height:40,background:`#fff`,borderBottom:`solid 1px #ccc`,transform:`scale(${e})`,transformOrigin:`left top`},children:n},n))})})})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Default`]})))()}p();export{d as Default,f as __namedExportsOrder,c as default};