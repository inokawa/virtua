import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-XU4DPr_4.js";import{t as r}from"./react-dom-D3RXWBqf.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./VMasonry-DJbE9pMS.js";import{n as s,t as c}from"./en-DltMjSLJ.js";import{i as l,r as u}from"./common-CzdakWXL.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=t((()=>{a(),d=e(n(),1),f=r(),c(),u(),p=i(),m={component:o},h=800,g=[3/4,4/3,1,2/3,3/2,9/16,16/9],_=e=>l(e,e=>{let t=s.helpers.arrayElement(g);return{id:e,ratio:t,src:s.image.url({width:h,height:Math.round(h/t)})}}),v=[[`(min-width: 1536px)`,6],[`(min-width: 1280px)`,5],[`(min-width: 1024px)`,4],[`(min-width: 768px)`,3]],y=()=>v.find(([e])=>window.matchMedia(e).matches)?.[1]??2,b=e=>{let t=v.map(([e])=>window.matchMedia(e));return t.forEach(t=>t.addEventListener(`change`,e)),()=>{t.forEach(t=>t.removeEventListener(`change`,e))}},x=`gallery-photo`,S={display:`block`,width:`100%`,height:`100%`,objectFit:`cover`},C=e=>`Photo ${e.id}`,w=({photo:e})=>(0,p.jsx)(`img`,{src:e.src,alt:C(e),style:S}),T=({photo:e,onClose:t})=>{let n=(0,d.useRef)(null);return(0,d.useLayoutEffect)(()=>{let e=document.activeElement;return()=>{e?.focus({preventScroll:!0})}},[]),(0,d.useEffect)(()=>{n.current.focus()},[]),(0,p.jsxs)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-label":C(e),onKeyDown:e=>{e.key===`Escape`&&t()},onClick:e=>{e.target===e.currentTarget&&t()},style:{position:`fixed`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:24,background:`rgba(0, 0, 0, 0.9)`},children:[(0,p.jsx)(`button`,{ref:n,"aria-label":`Close`,onClick:t,style:{position:`absolute`,top:16,right:16,width:40,height:40,border:`none`,borderRadius:`50%`,background:`rgba(255, 255, 255, 0.2)`,color:`#fff`,fontSize:20,cursor:`pointer`},children:`✕`}),(0,p.jsx)(d.ViewTransition,{name:`photo-${e.id}`,share:x,children:(0,p.jsx)(`img`,{src:e.src,alt:C(e),width:h,height:Math.round(h/e.ratio),style:{maxWidth:`100%`,maxHeight:`100%`,width:`auto`,height:`auto`}})})]})},E={name:`Gallery`,render:()=>{let[e]=(0,d.useState)(()=>_(1e3)),t=(0,d.useSyncExternalStore)(b,y),[n,r]=(0,d.useState)(null),[i,a]=(0,d.useState)(null),s=e=>{(0,f.flushSync)(()=>a(e.id)),(0,d.startTransition)(()=>r(e))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`style`,{children:`::view-transition-group(.${x}) { z-index: 1; }`}),(0,p.jsx)(o,{style:{height:`100vh`},lanes:t,gap:4,data:e,children:e=>(0,p.jsx)(`button`,{onClick:()=>s(e),style:{display:`block`,width:`100%`,aspectRatio:e.ratio,padding:0,border:`none`,background:`#e5e5e5`,cursor:`zoom-in`},children:n?.id===e.id?null:i===e.id?(0,p.jsx)(d.ViewTransition,{name:`photo-${e.id}`,share:x,children:(0,p.jsx)(w,{photo:e})}):(0,p.jsx)(w,{photo:e})},e.id)}),n&&(0,p.jsx)(d.ViewTransition,{children:(0,p.jsx)(T,{photo:n,onClose:()=>(0,d.startTransition)(()=>r(null))})})]})}},D=[`Default`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Gallery",
  render: () => {
    const [photos] = useState(() => createPhotos(1000));
    const lanes = useSyncExternalStore(subscribeMediaQueries, getLanesByMediaQuery);
    const [selected, setSelected] = useState<Photo | null>(null);
    // Only the photo moving between the grid and the viewer has the name, otherwise every photo in the grid is animated over the page
    const [activeId, setActiveId] = useState<number | null>(null);
    const open = (photo: Photo) => {
      // The name must be set before the transition starts
      flushSync(() => setActiveId(photo.id));
      startTransition(() => setSelected(photo));
    };
    const close = () => startTransition(() => setSelected(null));
    return <>
        {/* The moving photo is placed over the backdrop fading in, which is a later group of the transition */}
        <style>{\`::view-transition-group(.\${PHOTO_CLASS}) { z-index: 1; }\`}</style>
        <VMasonry style={{
        height: "100vh"
      }} lanes={lanes} gap={4} data={photos}>
          {photo => <button key={photo.id} onClick={() => open(photo)} style={{
          display: "block",
          width: "100%",
          aspectRatio: photo.ratio,
          padding: 0,
          border: "none",
          background: "#e5e5e5",
          cursor: "zoom-in"
        }}>
              {selected?.id === photo.id ? null : activeId === photo.id ? <ViewTransition name={\`photo-\${photo.id}\`} share={PHOTO_CLASS}>
                  <Thumbnail photo={photo} />
                </ViewTransition> : <Thumbnail photo={photo} />}
            </button>}
        </VMasonry>
        {selected && <ViewTransition>
            <Viewer photo={selected} onClose={close} />
          </ViewTransition>}
      </>;
  }
}`,...E.parameters?.docs?.source}}}})))()}O();export{E as Default,D as __namedExportsOrder,m as default};