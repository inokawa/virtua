import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Da9Y0ZE5.js";import{t as r}from"./react-dom-cjS5MFnk.js";import{t as i}from"./jsx-runtime-6sF1Ejqi.js";import{i as a,t as o}from"./src-CBByf-Sv.js";var s,c,l,u,d,f,p,m,h;t((()=>{s=e(n(),1),o(),c=e(r(),1),l=i(),u={component:a},d=e=>{let t=[20,40,80,77];return Array.from({length:e}).map((e,n)=>(0,l.jsx)(`div`,{style:{height:t[n%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:n},n))},f=({children:e,onUnload:t})=>{let[n,r]=(0,s.useState)(null);return(0,s.useLayoutEffect)(()=>{let e=window.open(``,``,`width=400,height=400,left=200,top=200`);if(!e)return;let n=e.document.createElement(`div`);return e.document.body.appendChild(n),e.addEventListener(`unload`,t,{once:!0}),r(n),()=>{e?.close()}},[]),n?(0,c.createPortal)(e,n):null},p=()=>(0,l.jsx)(a,{style:{height:`100vh`},children:d(1e3)}),m={name:`NewWindow`,render:()=>{let[e,t]=(0,s.useState)(!1);return(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`button`,{onClick:()=>{t(e=>!e)},children:[e?`close`:`open`,` window`]}),e&&(0,l.jsx)(f,{onUnload:()=>{t(!1)},children:(0,l.jsx)(p,{})})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`]}))();export{m as Default,h as __namedExportsOrder,u as default};