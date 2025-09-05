import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./iframe-Cb1Ql03H.js";import{r as m}from"./index-W5EcgI0z.js";import{V as u}from"./VList-DvqsYCdp.js";import"./preload-helper-BQ24v_F8.js";import"./Virtualizer-Dwg_kqim.js";import"./useLatestRef-Cgupfomj.js";import"./useChildren-xFx5aaUQ.js";const C={component:u},w=n=>{const t=[20,40,80,77];return Array.from({length:n}).map((r,s)=>o.jsx("div",{style:{height:t[s%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:s},s))},f=({children:n,onUnload:t})=>{const[r,s]=i.useState(null);return i.useLayoutEffect(()=>{const e=window.open("","","width=400,height=400,left=200,top=200");if(!e)return;const a=e.document.createElement("div");return e.document.body.appendChild(a),e.addEventListener("unload",t,{once:!0}),s(a),()=>{e==null||e.close()}},[]),r?m.createPortal(n,r):null},h=()=>o.jsx(u,{style:{height:"100vh"},children:w(1e3)}),d={name:"NewWindow",render:()=>{const[n,t]=i.useState(!1);return o.jsxs("div",{children:[o.jsxs("button",{onClick:()=>{t(r=>!r)},children:[n?"close":"open"," window"]}),n&&o.jsx(f,{onUnload:()=>{t(!1)},children:o.jsx(h,{})})]})}};var c,p,l;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(p=d.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const N=["Default"];export{d as Default,N as __namedExportsOrder,C as default};
