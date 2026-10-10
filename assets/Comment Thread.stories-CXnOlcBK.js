import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-PJdxjuIz.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VList-CVM7cRJ_.js";import{n as o,t as s}from"./en-DltMjSLJ.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{i(),c=e(n(),1),s(),l=r(),u={component:a},d=0,f=e=>({id:d++,author:o.internet.username(),hoursAgo:o.number.int({min:1,max:48}),body:o.lorem.paragraphs(o.number.int({min:1,max:4})),replies:e<3?Array.from({length:o.number.int({min:0,max:3-e})}).map(()=>f(e+1)):[]}),p=Array.from({length:200}).map(()=>f(0)),m=e=>e.replies.reduce((e,t)=>e+1+m(t),0),h=({name:e})=>{let t=[...e].reduce((e,t)=>e+t.charCodeAt(0),0)%360;return(0,l.jsx)(`span`,{"aria-hidden":!0,style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:24,height:24,borderRadius:`50%`,background:`hsl(${t} 25% 92%)`,color:`hsl(${t} 20% 35%)`,fontSize:12,fontWeight:600},children:e[0].toUpperCase()})},g=({onClick:e})=>{let[t,n]=(0,c.useState)(!1);return(0,l.jsx)(`div`,{"aria-hidden":!0,onClick:e,onMouseEnter:e&&(()=>n(!0)),onMouseLeave:e&&(()=>n(!1)),style:{flex:`none`,width:24,display:`flex`,justifyContent:`center`,cursor:e?`pointer`:void 0},children:(0,l.jsx)(`div`,{style:{width:2,borderRadius:1,background:t?`#9ca3af`:`#e5e7eb`}})})},_=({comment:e,hiddenReplies:t})=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h,{name:e.author}),(0,l.jsxs)(`span`,{children:[(0,l.jsx)(`span`,{style:{fontWeight:600,color:`#111827`},children:e.author}),` · `,e.hoursAgo,`h`,!!t&&` · ${t} ${t===1?`reply`:`replies`}`]})]}),v={display:`flex`,alignItems:`center`,gap:8,fontSize:13,color:`#6b7280`},y=({comment:e,onLineClick:t})=>(0,l.jsxs)(`div`,{style:{display:`flex`,marginTop:8},children:[(0,l.jsx)(g,{onClick:t}),(0,l.jsxs)(`div`,{style:{flex:1,minWidth:0,display:`flex`,flexDirection:`column`,gap:20,paddingLeft:8},children:[(0,l.jsx)(`div`,{style:{whiteSpace:`pre-wrap`,lineHeight:1.6,color:`#374151`},children:e.body}),e.replies.map(e=>(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{style:v,children:(0,l.jsx)(_,{comment:e})}),(0,l.jsx)(y,{comment:e})]},e.id))]})]}),b=({comment:e,isCollapsed:t,onToggle:n})=>(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`button`,{"aria-expanded":!t,onClick:n,style:{font:`inherit`,...v,width:`100%`,padding:0,border:`none`,background:`none`,textAlign:`start`,cursor:`pointer`},children:(0,l.jsx)(_,{comment:e,hiddenReplies:t?m(e):void 0})}),(0,l.jsx)(`div`,{style:{display:`grid`,gridTemplateRows:t?`0fr`:`1fr`,transition:`grid-template-rows 250ms ease`},children:(0,l.jsx)(`div`,{style:{overflow:`hidden`,minHeight:0},children:(0,l.jsx)(y,{comment:e,onLineClick:n})})})]}),x={name:`Comment Thread`,render:()=>{let e=(0,c.useRef)(null),[t,n]=(0,c.useState)(()=>new Set);return(0,l.jsx)(a,{ref:e,style:{height:`100vh`,background:`#fff`,fontFamily:`system-ui, sans-serif`,fontSize:14},children:p.map((r,i)=>(0,l.jsx)(`div`,{style:{padding:`0 16px`},children:(0,l.jsx)(`div`,{style:{margin:`0 auto`,maxWidth:720,padding:`20px 0`,borderBottom:`solid 1px #e5e7eb`},children:(0,l.jsx)(b,{comment:r,isCollapsed:t.has(r.id),onToggle:()=>{let a=!t.has(r.id);n(e=>{let t=new Set(e);return t.delete(r.id)||t.add(r.id),t});let o=e.current;a&&o.getItemOffset(i)<o.scrollOffset&&o.scrollToIndex(i,{smooth:!0})}})})},r.id))})}},S=[`Default`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Comment Thread",
  render: () => {
    const ref = useRef<VListHandle>(null);
    // kept out of the items, which are unmounted when they go offscreen
    const [collapsed, setCollapsed] = useState<ReadonlySet<number>>(() => new Set());
    return <VList ref={ref} style={{
      height: "100vh",
      background: "#fff",
      fontFamily: "system-ui, sans-serif",
      fontSize: 14
    }}>
        {threads.map((thread, i) => <div key={thread.id} style={{
        padding: "0 16px"
      }}>
            <div style={{
          margin: "0 auto",
          maxWidth: 720,
          padding: "20px 0",
          borderBottom: "solid 1px #e5e7eb"
        }}>
              <Thread comment={thread} isCollapsed={collapsed.has(thread.id)} onToggle={() => {
            const willCollapse = !collapsed.has(thread.id);
            setCollapsed(prev => {
              const next = new Set(prev);
              if (!next.delete(thread.id)) {
                next.add(thread.id);
              }
              return next;
            });
            const handle = ref.current!;
            // brings the thread back if collapsing it from below has left its start above the viewport
            if (willCollapse && handle.getItemOffset(i) < handle.scrollOffset) {
              handle.scrollToIndex(i, {
                smooth: true
              });
            }
          }} />
            </div>
          </div>)}
      </VList>;
  }
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as Default,S as __namedExportsOrder,u as default};