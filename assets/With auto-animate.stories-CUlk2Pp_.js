import{j as f}from"./jsx-runtime-DR9Q75dM.js";import{r as m}from"./index-DRjF_FHU.js";import{f as te}from"./chunk-TVFJBHBT-BH-Rv9Ux.js";import{V as U}from"./Virtualizer-DN90PmDX.js";import"./useLatestRef-xAIQLCCh.js";import"./useChildren-hayhccfg.js";import"./index-DU7l7UOc.js";import"./useMergeRefs-Drgf10yf.js";const Q=new Set,u=new WeakMap,S=new WeakMap,y=new WeakMap,_=new WeakMap,ne=new WeakMap,j=new WeakMap,W=new WeakMap,T=new WeakSet;let v,B=0,L=0;const g="__aa_tgt",O="__aa_del",P="__aa_new",oe=e=>{const t=de(e);t&&t.forEach(n=>le(n))},ie=e=>{e.forEach(t=>{t.target===v&&se(),u.has(t.target)&&b(t.target)})};function re(e){const t=_.get(e);t==null||t.disconnect();let n=u.get(e),o=0;const i=5;n||(n=M(e),u.set(e,n));const{offsetWidth:s,offsetHeight:r}=v,d=[n.top-i,s-(n.left+i+n.width),r-(n.top+i+n.height),n.left-i].map(a=>`${-1*Math.floor(a)}px`).join(" "),l=new IntersectionObserver(()=>{++o>1&&b(e)},{root:v,threshold:1,rootMargin:d});l.observe(e),_.set(e,l)}function b(e){clearTimeout(W.get(e));const t=A(e),n=R(t)?500:t.duration;W.set(e,setTimeout(async()=>{const o=y.get(e);try{await(o==null?void 0:o.finished),u.set(e,M(e)),re(e)}catch{}},n))}function se(){clearTimeout(W.get(v)),W.set(v,setTimeout(()=>{Q.forEach(e=>Z(e,t=>G(()=>b(t))))},100))}function ae(e){setTimeout(()=>{ne.set(e,setInterval(()=>G(b.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function G(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let D,C;const ce=typeof window<"u"&&"ResizeObserver"in window;ce&&(v=document.documentElement,D=new MutationObserver(oe),C=new ResizeObserver(ie),window.addEventListener("scroll",()=>{L=window.scrollY,B=window.scrollX}),C.observe(v));function de(e){return e.reduce((o,i)=>[...o,...Array.from(i.addedNodes),...Array.from(i.removedNodes)],[]).every(o=>o.nodeName==="#comment")?!1:e.reduce((o,i)=>{if(o===!1)return!1;if(i.target instanceof Element){if(N(i.target),!o.has(i.target)){o.add(i.target);for(let s=0;s<i.target.children.length;s++){const r=i.target.children.item(s);if(r){if(O in r)return!1;N(i.target,r),o.add(r)}}}if(i.removedNodes.length)for(let s=0;s<i.removedNodes.length;s++){const r=i.removedNodes[s];if(O in r)return!1;r instanceof Element&&(o.add(r),N(i.target,r),S.set(r,[i.previousSibling,i.nextSibling]))}}return o},new Set)}function N(e,t){!t&&!(g in e)?Object.defineProperty(e,g,{value:e}):t&&!(g in t)&&Object.defineProperty(t,g,{value:e})}function le(e){var t;const n=e.isConnected,o=u.has(e);n&&S.has(e)&&S.delete(e),y.has(e)&&((t=y.get(e))===null||t===void 0||t.cancel()),P in e?H(e):o&&n?ue(e):o&&!n?pe(e):H(e)}function h(e){return Number(e.replace(/[^0-9.\-]/g,""))}function fe(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}function M(e){const t=e.getBoundingClientRect(),{x:n,y:o}=fe(e);return{top:t.top+o,left:t.left+n,width:t.width,height:t.height}}function J(e,t,n){let o=t.width,i=t.height,s=n.width,r=n.height;const c=getComputedStyle(e);if(c.getPropertyValue("box-sizing")==="content-box"){const l=h(c.paddingTop)+h(c.paddingBottom)+h(c.borderTopWidth)+h(c.borderBottomWidth),a=h(c.paddingLeft)+h(c.paddingRight)+h(c.borderRightWidth)+h(c.borderLeftWidth);o-=a,s-=a,i-=l,r-=l}return[o,s,i,r].map(Math.round)}function A(e){return g in e&&j.has(e[g])?j.get(e[g]):{duration:250,easing:"ease-in-out"}}function K(e){if(g in e)return e[g]}function Y(e){const t=K(e);return t?T.has(t):!1}function Z(e,...t){t.forEach(n=>n(e,j.has(e)));for(let n=0;n<e.children.length;n++){const o=e.children.item(n);o&&t.forEach(i=>i(o,j.has(o)))}}function $(e){return Array.isArray(e)?e:[e]}function R(e){return typeof e=="function"}function ue(e){const t=u.get(e),n=M(e);if(!Y(e))return u.set(e,n);let o;if(!t)return;const i=A(e);if(typeof i!="function"){const s=t.left-n.left,r=t.top-n.top,[c,d,l,a]=J(e,t,n),w={transform:`translate(${s}px, ${r}px)`},p={transform:"translate(0, 0)"};c!==d&&(w.width=`${c}px`,p.width=`${d}px`),l!==a&&(w.height=`${l}px`,p.height=`${a}px`),o=e.animate([w,p],{duration:i.duration,easing:i.easing})}else{const[s]=$(i(e,"remain",t,n));o=new Animation(s),o.play()}y.set(e,o),u.set(e,n),o.addEventListener("finish",b.bind(null,e))}function H(e){P in e&&delete e[P];const t=M(e);u.set(e,t);const n=A(e);if(!Y(e))return;let o;if(typeof n!="function")o=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"});else{const[i]=$(n(e,"add",t));o=new Animation(i),o.play()}y.set(e,o),o.addEventListener("finish",b.bind(null,e))}function X(e,t){var n;e.remove(),u.delete(e),S.delete(e),y.delete(e),(n=_.get(e))===null||n===void 0||n.disconnect(),setTimeout(()=>{if(O in e&&delete e[O],Object.defineProperty(e,P,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(const o in t)e.style[o]=""},0)}function pe(e){var t;if(!S.has(e)||!u.has(e))return;const[n,o]=S.get(e);Object.defineProperty(e,O,{value:!0,configurable:!0});const i=window.scrollX,s=window.scrollY;if(o&&o.parentNode&&o.parentNode instanceof Element?o.parentNode.insertBefore(e,o):n&&n.parentNode?n.parentNode.appendChild(e):(t=K(e))===null||t===void 0||t.appendChild(e),!Y(e))return X(e);const[r,c,d,l]=he(e),a=A(e),w=u.get(e);(i!==B||s!==L)&&me(e,i,s,a);let p,x={position:"absolute",top:`${r}px`,left:`${c}px`,width:`${d}px`,height:`${l}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!R(a))Object.assign(e.style,x),p=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:a.duration,easing:"ease-out"});else{const[I,E]=$(a(e,"remove",w));(E==null?void 0:E.styleReset)!==!1&&(x=(E==null?void 0:E.styleReset)||x,Object.assign(e.style,x)),p=new Animation(I),p.play()}y.set(e,p),p.addEventListener("finish",X.bind(null,e,x))}function me(e,t,n,o){const i=B-t,s=L-n,r=document.documentElement.style.scrollBehavior;if(getComputedStyle(v).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+i,window.scrollY+s),!e.parentElement)return;const d=e.parentElement;let l=d.clientHeight,a=d.clientWidth;const w=performance.now();function p(){requestAnimationFrame(()=>{if(!R(o)){const x=l-d.clientHeight,I=a-d.clientWidth;w+o.duration>performance.now()?(window.scrollTo({left:window.scrollX-I,top:window.scrollY-x}),l=d.clientHeight,a=d.clientWidth,p()):document.documentElement.style.scrollBehavior=r}})}p()}function he(e){const t=u.get(e),[n,,o]=J(e,t,M(e));let i=e.parentElement;for(;i&&(getComputedStyle(i).position==="static"||i instanceof HTMLBodyElement);)i=i.parentElement;i||(i=document.body);const s=getComputedStyle(i),r=u.get(i)||M(i),c=Math.round(t.top-r.top)-h(s.borderTopWidth),d=Math.round(t.left-r.left)-h(s.borderLeftWidth);return[c,d,n,o]}function ge(e,t={}){return D&&C&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!R(t)&&!t.disrespectUserMotionPreference||(T.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),Z(e,b,ae,i=>C==null?void 0:C.observe(i)),R(t)?j.set(e,t):j.set(e,{duration:250,easing:"ease-in-out",...t}),D.observe(e,{childList:!0}),Q.add(e))),Object.freeze({parent:e,enable:()=>{T.add(e)},disable:()=>{T.delete(e)},isEnabled:()=>T.has(e)})}function ve(e){const[t,n]=m.useState(),o=m.useMemo(()=>e,[]),i=m.useCallback(r=>{r instanceof HTMLElement?n(ge(r,o)):n(void 0)},[o]),s=m.useCallback(r=>{t&&(r?t.enable():t.disable())},[t]);return[i,s]}function we(e){return t=>{for(const n of e)z(n,t)}}function xe(e){return t=>{const n=[];for(const o of e){const i=z(o,t),s=typeof i=="function";n.push(s?i:()=>z(o,null))}return()=>{for(const o of n)o()}}}function z(e,t){if(typeof e=="function")return e(t);e&&(e.current=t)}var ye=parseInt(m.version.split(".")[0],10)>=19?xe:we;const We={component:U},be=({children:e,isStart:t,isEnd:n,onUp:o,onDown:i,onDelete:s})=>f.jsxs("div",{style:{padding:10,height:40,display:"flex",borderBottom:"solid 1px #ccc",background:"#fff"},children:[f.jsx("div",{style:{flex:1},children:e}),f.jsxs("div",{style:{display:"flex"},children:[f.jsx("button",{disabled:t,onClick:o,children:"up"}),f.jsx("button",{disabled:n,onClick:i,children:"down"}),f.jsx("button",{onClick:s,children:"delete"})]})]}),ee=m.createContext(null),Ee=m.forwardRef((e,t)=>{const n=m.useContext(ee);return f.jsx("div",{ref:m.useMemo(()=>ye([t,n]),[t,n]),...e})}),k={name:"With auto-animate",render:()=>{const e=m.useRef(0),t=()=>({id:++e.current,data:te.music.songName()}),[n,o]=m.useState(()=>Array.from({length:100},t)),[i,s]=ve(),r=m.useRef(!1);return f.jsxs("div",{style:{height:"100vh",width:"400px",display:"flex",flexDirection:"column"},children:[f.jsx(ee.Provider,{value:i,children:f.jsx("div",{style:{overflowY:"auto",flex:1},children:f.jsx(U,{as:Ee,onScroll:()=>{const c=r.current;r.current=!0,c!==r.current&&s(!1)},onScrollEnd:()=>{r.current=!1,s(!0)},children:n.map((c,d)=>f.jsx(be,{isStart:d===0,isEnd:d===n.length-1,onUp:()=>{o(l=>{const a=[...l];return a.splice(d-1,0,a.splice(d,1)[0]),a})},onDown:()=>{o(l=>{const a=[...l];return a.splice(d+1,0,a.splice(d,1)[0]),a})},onDelete:()=>{o(l=>{const a=[...l];return a.splice(d,1),a})},children:c.data},c.id))})})}),f.jsx("div",{style:{display:"flex",justifyContent:"flex-end",padding:8,height:40,maxHeight:40,background:"white"},children:f.jsx("button",{onClick:()=>{o(c=>[...c,t()])},children:"append"})})]})}};var F,V,q;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "With auto-animate",
  render: () => {
    const id = useRef(0);
    const createItem = () => ({
      id: ++id.current,
      data: faker.music.songName()
    });
    const [items, setItems] = useState(() => Array.from({
      length: 100
    }, createItem));
    const [animationParent, enable] = useAutoAnimate();
    const scrolling = useRef(false);
    return <div style={{
      height: "100vh",
      width: "400px",
      display: "flex",
      flexDirection: "column"
    }}>
        <RefContext.Provider value={animationParent}>
          <div style={{
          overflowY: "auto",
          flex: 1
        }}>
            <Virtualizer as={Container} onScroll={() => {
            const prevScrolling = scrolling.current;
            scrolling.current = true;
            if (prevScrolling !== scrolling.current) {
              enable(false);
            }
          }} onScrollEnd={() => {
            scrolling.current = false;
            enable(true);
          }}>
              {items.map((item, i) => <Item key={item.id} isStart={i === 0} isEnd={i === items.length - 1} onUp={() => {
              setItems(prev => {
                const next = [...prev];
                next.splice(i - 1, 0, next.splice(i, 1)[0]);
                return next;
              });
            }} onDown={() => {
              setItems(prev => {
                const next = [...prev];
                next.splice(i + 1, 0, next.splice(i, 1)[0]);
                return next;
              });
            }} onDelete={() => {
              setItems(prev => {
                const next = [...prev];
                next.splice(i, 1);
                return next;
              });
            }}>
                  {item.data}
                </Item>)}
            </Virtualizer>
          </div>
        </RefContext.Provider>
        <div style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: 8,
        height: 40,
        maxHeight: 40,
        background: "white"
      }}>
          <button onClick={() => {
          setItems(prev => [...prev, createItem()]);
        }}>
            append
          </button>
        </div>
      </div>;
  }
}`,...(q=(V=k.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const Pe=["Default"];export{k as Default,Pe as __namedExportsOrder,We as default};
