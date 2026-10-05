import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-B-fAh46w.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VList-DDZ1-18o.js";import{n as o,t as s}from"./en-DltMjSLJ.js";var c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=t((()=>{i(),c=e(n(),1),s(),l=r(),u={component:a},d=340,f=o.helpers.uniqueArray(o.word.noun,50).map(e=>`#`+e),p=new Map,m=0,h=e=>{let t=p.get(e);return t||(t=Array.from({length:1e3}).map(()=>({id:m++,name:o.person.fullName(),text:o.lorem.sentences(o.number.int({min:1,max:5}))})),p.set(e,t)),t},g=({post:e})=>(0,l.jsxs)(`article`,{style:{padding:`12px 16px`,borderBottom:`solid 1px #eee`},children:[(0,l.jsx)(`div`,{style:{fontWeight:600},children:e.name}),(0,l.jsx)(`div`,{style:{marginTop:4,lineHeight:1.5},children:e.text})]}),_=({index:e,states:t})=>{let n=(0,c.useRef)(null),[r,i]=(0,c.useMemo)(()=>t.get(e)??[],[]);return(0,c.useLayoutEffect)(()=>{let i=n.current;return r&&i.scrollTo(r),()=>{t.set(e,[i.scrollOffset,i.cache])}},[]),(0,l.jsxs)(`section`,{"aria-label":f[e],style:{width:d,height:`100%`,display:`flex`,flexDirection:`column`,borderRight:`solid 1px #e5e7eb`},children:[(0,l.jsx)(`h2`,{style:{margin:0,padding:`12px 16px`,fontSize:15,borderBottom:`solid 1px #e5e7eb`},children:f[e]}),(0,l.jsx)(a,{ref:n,cache:i,style:{flex:1,minHeight:0},children:h(e).map(e=>(0,l.jsx)(g,{post:e},e.id))})]})},v={name:`Deck`,render:()=>{let e=(0,c.useMemo)(()=>new Map,[]);return(0,l.jsx)(a,{horizontal:!0,style:{height:`100vh`,background:`#fff`,fontFamily:`system-ui, sans-serif`,fontSize:14},children:f.map((t,n)=>(0,l.jsx)(_,{index:n,states:e},t))})}},y=[`Default`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Deck",
  render: () => {
    const states = useMemo(() => new Map<number, ColumnState>(), []);
    return <VList horizontal style={{
      height: "100vh",
      background: "#fff",
      fontFamily: "system-ui, sans-serif",
      fontSize: 14
    }}>
        {COLUMNS.map((title, i) => <Column key={title} index={i} states={states} />)}
      </VList>;
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as Default,y as __namedExportsOrder,u as default};