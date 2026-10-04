import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-DScnGlNQ.js";import{t as r}from"./react-dom-4ugYyFd4.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./VMasonry-DQ8O7jfv.js";import{n as s,t as c}from"./en-DltMjSLJ.js";import{i as l,r as u}from"./common-DPqih1su.js";var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{a(),d=e(n(),1),f=r(),c(),u(),p=i(),m={component:o},h=800,g=[3/4,4/3,1,2/3,3/2,9/16,16/9],_=e=>l(e,e=>{let t=s.helpers.arrayElement(g);return{id:e,ratio:t,src:s.image.url({width:h,height:Math.round(h/t)})}}),v=`gallery-photo`,y={display:`block`,width:`100%`,height:`100%`,objectFit:`cover`},b={name:`Gallery`,render:()=>{let[e]=(0,d.useState)(()=>_(1e3)),[t,n]=(0,d.useState)(null),[r,i]=(0,d.useState)(null),a=e=>{(0,f.flushSync)(()=>i(e.id)),(0,d.startTransition)(()=>n(e))},s=()=>(0,d.startTransition)(()=>n(null));return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`style`,{children:`::view-transition-group(.${v}) { z-index: 1; }`}),(0,p.jsx)(o,{style:{height:`100vh`},lanes:4,gap:4,data:e,children:e=>(0,p.jsx)(`button`,{"aria-label":`Open photo ${e.id}`,onClick:()=>a(e),style:{display:`block`,width:`100%`,aspectRatio:e.ratio,padding:0,border:`none`,background:`#e5e5e5`,cursor:`zoom-in`},children:t?.id===e.id?null:r===e.id?(0,p.jsx)(d.ViewTransition,{name:`photo-${e.id}`,share:v,children:(0,p.jsx)(`img`,{src:e.src,alt:``,style:y})}):(0,p.jsx)(`img`,{src:e.src,alt:``,style:y})},e.id)}),t&&(0,p.jsx)(d.ViewTransition,{children:(0,p.jsxs)(`div`,{role:`dialog`,"aria-label":`Photo ${t.id}`,onClick:e=>{e.target===e.currentTarget&&s()},style:{position:`fixed`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:24,background:`rgba(0, 0, 0, 0.9)`},children:[(0,p.jsx)(`button`,{"aria-label":`Close`,onClick:s,style:{position:`absolute`,top:16,right:16,width:40,height:40,border:`none`,borderRadius:`50%`,background:`rgba(255, 255, 255, 0.2)`,color:`#fff`,fontSize:20,cursor:`pointer`},children:`✕`}),(0,p.jsx)(d.ViewTransition,{name:`photo-${t.id}`,share:v,children:(0,p.jsx)(`img`,{src:t.src,alt:``,width:h,height:Math.round(h/t.ratio),style:{maxWidth:`100%`,maxHeight:`100%`,width:`auto`,height:`auto`}})})]})})]})}},x=[`Default`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Gallery",
  render: () => {
    const [photos] = useState(() => createPhotos(1000));
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
      }} lanes={4} gap={4} data={photos}>
          {photo => <button key={photo.id} aria-label={\`Open photo \${photo.id}\`} onClick={() => open(photo)} style={{
          display: "block",
          width: "100%",
          aspectRatio: photo.ratio,
          padding: 0,
          border: "none",
          background: "#e5e5e5",
          cursor: "zoom-in"
        }}>
              {selected?.id === photo.id ? null : activeId === photo.id ? <ViewTransition name={\`photo-\${photo.id}\`} share={PHOTO_CLASS}>
                  <img src={photo.src} alt="" style={thumbnailStyle} />
                </ViewTransition> : <img src={photo.src} alt="" style={thumbnailStyle} />}
            </button>}
        </VMasonry>
        {selected && <ViewTransition>
            <div role="dialog" aria-label={\`Photo \${selected.id}\`} onClick={e => {
          // Close by clicking the backdrop, not the photo
          if (e.target === e.currentTarget) {
            close();
          }
        }} style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          background: "rgba(0, 0, 0, 0.9)"
        }}>
              <button aria-label="Close" onClick={close} style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 40,
            height: 40,
            border: "none",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.2)",
            color: "#fff",
            fontSize: 20,
            cursor: "pointer"
          }}>
                ✕
              </button>
              <ViewTransition name={\`photo-\${selected.id}\`} share={PHOTO_CLASS}>
                <img src={selected.src} alt="" width={PHOTO_WIDTH} height={Math.round(PHOTO_WIDTH / selected.ratio)} style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto"
            }} />
              </ViewTransition>
            </div>
          </ViewTransition>}
      </>;
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as Default,x as __namedExportsOrder,m as default};