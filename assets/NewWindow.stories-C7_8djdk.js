import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-DuTLZCeC.js";import{r as p}from"./index-BfaMWwvh.js";import{V as c}from"./VList-B8mS7GjH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CNuY1qWM.js";import"./Virtualizer-C1MNiicZ.js";import"./useLatestRef-fyfzMMCE.js";import"./useChildren-DGb9Ouz-.js";const E={component:c},l=e=>{const n=[20,40,80,77];return Array.from({length:e}).map((o,r)=>t.jsx("div",{style:{height:n[r%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:r},r))},u=({children:e,onUnload:n})=>{const[o,r]=i.useState(null);return i.useLayoutEffect(()=>{const s=window.open("","","width=400,height=400,left=200,top=200");if(!s)return;const a=s.document.createElement("div");return s.document.body.appendChild(a),s.addEventListener("unload",n,{once:!0}),r(a),()=>{s?.close()}},[]),o?p.createPortal(e,o):null},m=()=>t.jsx(c,{style:{height:"100vh"},children:l(1e3)}),d={name:"NewWindow",render:()=>{const[e,n]=i.useState(!1);return t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>{n(o=>!o)},children:[e?"close":"open"," window"]}),e&&t.jsx(u,{onUnload:()=>{n(!1)},children:t.jsx(m,{})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const b=["Default"];export{d as Default,b as __namedExportsOrder,E as default};
