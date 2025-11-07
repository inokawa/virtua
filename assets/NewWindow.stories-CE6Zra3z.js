import{j as t}from"./jsx-runtime-nnBHNMqC.js";import"./index-CaRMSPmq.js";import{r as d}from"./iframe-BY4JgEuj.js";import{r as p}from"./index-CIfxW1Lk.js";import{V as c}from"./VList-BWlY5fCe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVsapkyO.js";import"./Virtualizer-DfkOQiJK.js";import"./useLatestRef-BRcDC_63.js";import"./useChildren-CRxL9NEJ.js";const b={component:c},l=e=>{const n=[20,40,80,77];return Array.from({length:e}).map((o,r)=>t.jsx("div",{style:{height:n[r%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:r},r))},m=({children:e,onUnload:n})=>{const[o,r]=d.useState(null);return d.useLayoutEffect(()=>{const s=window.open("","","width=400,height=400,left=200,top=200");if(!s)return;const a=s.document.createElement("div");return s.document.body.appendChild(a),s.addEventListener("unload",n,{once:!0}),r(a),()=>{s?.close()}},[]),o?p.createPortal(e,o):null},u=()=>t.jsx(c,{style:{height:"100vh"},children:l(1e3)}),i={name:"NewWindow",render:()=>{const[e,n]=d.useState(!1);return t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>{n(o=>!o)},children:[e?"close":"open"," window"]}),e&&t.jsx(m,{onUnload:()=>{n(!1)},children:t.jsx(u,{})})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "NewWindow",
  render: () => {
    const [isWindowOpened, setIsWindowOpened] = useState(false);
    return <div>
        <button onClick={() => {
        setIsWindowOpened(prev => !prev);
      }}>
          {isWindowOpened ? "close" : "open"} window
        </button>
        {isWindowOpened && <NewWindow onUnload={() => {
        setIsWindowOpened(false);
      }}>
            <Content />
          </NewWindow>}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const C=["Default"];export{i as Default,C as __namedExportsOrder,b as default};
