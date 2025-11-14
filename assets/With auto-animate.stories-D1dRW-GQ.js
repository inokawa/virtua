import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-02-cdWP6.js";import{f as oe}from"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import{V as Q}from"./Virtualizer-DRn9OmhD.js";import"./preload-helper-PPVm8Dsz.js";import"./useLatestRef-B-C45j_1.js";import"./useChildren-1yx12cLR.js";import"./index-egG3nm26.js";import"./index-DuTlWdU1.js";const z=new Set,f=new WeakMap,S=new WeakMap,m=new WeakMap,k=new WeakMap,D=new WeakMap,W=new WeakMap,C=new WeakMap,x=new WeakMap,O=new WeakSet;let p,Y=0,$=0;const b="__aa_tgt",P="__aa_del",_="__aa_new",G=e=>{const t=ae(e);t&&t.forEach(o=>ce(o))},ie=e=>{e.forEach(t=>{t.target===p&&re(),f.has(t.target)&&M(t.target)})};function J(e){const t=e.getBoundingClientRect(),o=p?.clientWidth||0,n=p?.clientHeight||0;return t.bottom<0||t.top>n||t.right<0||t.left>o}function X(e){const t=k.get(e);t?.disconnect();let o=f.get(e),n=0;const i=5;o||(o=R(e),f.set(e,o));const{offsetWidth:r,offsetHeight:s}=p,l=[o.top-i,r-(o.left+i+o.width),s-(o.top+i+o.height),o.left-i].map(c=>`${-1*Math.floor(c)}px`).join(" "),d=new IntersectionObserver(()=>{++n>1&&M(e)},{root:p,threshold:1,rootMargin:l});d.observe(e),k.set(e,d)}function M(e,t=!0){clearTimeout(x.get(e));const o=B(e),n=t?I(o)?500:o.duration:0;x.set(e,setTimeout(async()=>{const i=m.get(e);try{await i?.finished,f.set(e,R(e)),X(e)}catch{}},n))}function re(){clearTimeout(x.get(p)),x.set(p,setTimeout(()=>{z.forEach(e=>N(e,t=>K(()=>M(t))))},100))}function se(e){setTimeout(()=>{W.set(e,setInterval(()=>K(M.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function K(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let y;const Z=typeof window<"u"&&"ResizeObserver"in window;Z&&(p=document.documentElement,new MutationObserver(G),y=new ResizeObserver(ie),window.addEventListener("scroll",()=>{$=window.scrollY,Y=window.scrollX}),y.observe(p));function ae(e){return e.reduce((n,i)=>[...n,...Array.from(i.addedNodes),...Array.from(i.removedNodes)],[]).every(n=>n.nodeName==="#comment")?!1:e.reduce((n,i)=>{if(n===!1)return!1;if(i.target instanceof Element){if(L(i.target),!n.has(i.target)){n.add(i.target);for(let r=0;r<i.target.children.length;r++){const s=i.target.children.item(r);if(s){if(P in s)return!1;L(i.target,s),n.add(s)}}}if(i.removedNodes.length)for(let r=0;r<i.removedNodes.length;r++){const s=i.removedNodes[r];if(P in s)return!1;s instanceof Element&&(n.add(s),L(i.target,s),S.set(s,[i.previousSibling,i.nextSibling]))}}return n},new Set)}function L(e,t){!t&&!(b in e)?Object.defineProperty(e,b,{value:e}):t&&!(b in t)&&Object.defineProperty(t,b,{value:e})}function ce(e){var t,o;const n=e.isConnected,i=f.has(e);n&&S.has(e)&&S.delete(e),((t=m.get(e))===null||t===void 0?void 0:t.playState)!=="finished"&&((o=m.get(e))===null||o===void 0||o.cancel()),_ in e?q(e):i&&n?de(e):i&&!n?fe(e):q(e)}function w(e){return Number(e.replace(/[^0-9.\-]/g,""))}function le(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}function R(e){const t=e.getBoundingClientRect(),{x:o,y:n}=le(e);return{top:t.top+n,left:t.left+o,width:t.width,height:t.height}}function ee(e,t,o){let n=t.width,i=t.height,r=o.width,s=o.height;const a=getComputedStyle(e);if(a.getPropertyValue("box-sizing")==="content-box"){const d=w(a.paddingTop)+w(a.paddingBottom)+w(a.borderTopWidth)+w(a.borderBottomWidth),c=w(a.paddingLeft)+w(a.paddingRight)+w(a.borderRightWidth)+w(a.borderLeftWidth);n-=c,r-=c,i-=d,s-=d}return[n,r,i,s].map(Math.round)}function B(e){return b in e&&C.has(e[b])?C.get(e[b]):{duration:250,easing:"ease-in-out"}}function te(e){if(b in e)return e[b]}function F(e){const t=te(e);return t?O.has(t):!1}function N(e,...t){t.forEach(o=>o(e,C.has(e)));for(let o=0;o<e.children.length;o++){const n=e.children.item(o);n&&t.forEach(i=>i(n,C.has(n)))}}function V(e){return Array.isArray(e)?e:[e]}function I(e){return typeof e=="function"}function de(e){const t=f.get(e),o=R(e);if(!F(e))return f.set(e,o);if(J(e)){f.set(e,o),X(e);return}let n;if(!t)return;const i=B(e);if(typeof i!="function"){let r=t.left-o.left,s=t.top-o.top;const a=t.left+t.width-(o.left+o.width);t.top+t.height-(o.top+o.height)==0&&(s=0),a==0&&(r=0);const[d,c,T,g]=ee(e,t,o),v={transform:`translate(${r}px, ${s}px)`},E={transform:"translate(0, 0)"};d!==c&&(v.width=`${d}px`,E.width=`${c}px`),T!==g&&(v.height=`${T}px`,E.height=`${g}px`),n=e.animate([v,E],{duration:i.duration,easing:i.easing})}else{const[r]=V(i(e,"remain",t,o));n=new Animation(r),n.play()}m.set(e,n),f.set(e,o),n.addEventListener("finish",M.bind(null,e,!1),{once:!0})}function q(e){_ in e&&delete e[_];const t=R(e);f.set(e,t);const o=B(e);if(!F(e))return;if(J(e)){X(e);return}let n;if(typeof o!="function")n=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:o.duration*1.5,easing:"ease-in"});else{const[i]=V(o(e,"add",t));n=new Animation(i),n.play()}m.set(e,n),n.addEventListener("finish",M.bind(null,e,!1),{once:!0})}function U(e,t){var o;e.remove(),f.delete(e),S.delete(e),m.delete(e),(o=k.get(e))===null||o===void 0||o.disconnect(),setTimeout(()=>{if(P in e&&delete e[P],Object.defineProperty(e,_,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(const n in t)e.style[n]=""},0)}function fe(e){var t;if(!S.has(e)||!f.has(e))return;const[o,n]=S.get(e);Object.defineProperty(e,P,{value:!0,configurable:!0});const i=window.scrollX,r=window.scrollY;if(n&&n.parentNode&&n.parentNode instanceof Element?n.parentNode.insertBefore(e,n):o&&o.parentNode?o.parentNode.appendChild(e):(t=te(e))===null||t===void 0||t.appendChild(e),!F(e))return U(e);const[s,a,l,d]=pe(e),c=B(e),T=f.get(e);(i!==Y||r!==$)&&ue(e,i,r,c);let g,v={position:"absolute",top:`${s}px`,left:`${a}px`,width:`${l}px`,height:`${d}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!I(c))Object.assign(e.style,v),g=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:c.duration,easing:"ease-out"});else{const[E,j]=V(c(e,"remove",T));j?.styleReset!==!1&&(v=j?.styleReset||v,Object.assign(e.style,v)),g=new Animation(E),g.play()}m.set(e,g),g.addEventListener("finish",()=>U(e,v),{once:!0})}function ue(e,t,o,n){const i=Y-t,r=$-o,s=document.documentElement.style.scrollBehavior;if(getComputedStyle(p).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+i,window.scrollY+r),!e.parentElement)return;const l=e.parentElement;let d=l.clientHeight,c=l.clientWidth;const T=performance.now();function g(){requestAnimationFrame(()=>{if(!I(n)){const v=d-l.clientHeight,E=c-l.clientWidth;T+n.duration>performance.now()?(window.scrollTo({left:window.scrollX-E,top:window.scrollY-v}),d=l.clientHeight,c=l.clientWidth,g()):document.documentElement.style.scrollBehavior=s}})}g()}function pe(e){var t;const o=f.get(e),[n,,i]=ee(e,o,R(e));let r=e.parentElement;for(;r&&(getComputedStyle(r).position==="static"||r instanceof HTMLBodyElement);)r=r.parentElement;r||(r=document.body);const s=getComputedStyle(r),a=!m.has(e)||((t=m.get(e))===null||t===void 0?void 0:t.playState)==="finished"?R(r):f.get(r),l=Math.round(o.top-a.top)-w(s.borderTopWidth),d=Math.round(o.left-a.left)-w(s.borderLeftWidth);return[l,d,n,i]}function he(e,t={}){if(Z&&y&&!(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!I(t)&&!t.disrespectUserMotionPreference)){O.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),N(e,M,se,s=>y?.observe(s)),I(t)?C.set(e,t):C.set(e,{duration:250,easing:"ease-in-out",...t});const r=new MutationObserver(G);r.observe(e,{childList:!0}),D.set(e,r),z.add(e)}return Object.freeze({parent:e,enable:()=>{O.add(e)},disable:()=>{O.delete(e),N(e,n=>{const i=m.get(n);try{i?.cancel()}catch{}m.delete(n);const r=x.get(n);r&&clearTimeout(r),x.delete(n);const s=W.get(n);s&&clearInterval(s),W.delete(n)})},isEnabled:()=>O.has(e),destroy:()=>{O.delete(e),z.delete(e),C.delete(e);const n=D.get(e);n?.disconnect(),D.delete(e),N(e,i=>{y?.unobserve(i);const r=m.get(i);try{r?.cancel()}catch{}m.delete(i);const s=k.get(i);s?.disconnect(),k.delete(i);const a=W.get(i);a&&clearInterval(a),W.delete(i);const l=x.get(i);l&&clearTimeout(l),x.delete(i),f.delete(i),S.delete(i)})}})}function me(e){const[t,o]=h.useState(),n=h.useMemo(()=>e,[]),i=h.useCallback(s=>{s instanceof HTMLElement?o(he(s,n)):o(void 0)},[n]),r=h.useCallback(s=>{t&&(s?t.enable():t.disable())},[t]);return h.useEffect(()=>()=>{var s;(s=t?.destroy)===null||s===void 0||s.call(t)},[t]),[i,r]}function ge(e){return t=>{for(const o of e)H(o,t)}}function ve(e){return t=>{const o=[];for(const n of e){const i=H(n,t),r=typeof i=="function";o.push(r?i:()=>H(n,null))}return()=>{for(const n of o)n()}}}function H(e,t){if(typeof e=="function")return e(t);e&&(e.current=t)}var we=parseInt(h.version.split(".")[0],10)>=19?ve:ge;const We={component:Q},ye=({children:e,isStart:t,isEnd:o,onUp:n,onDown:i,onDelete:r})=>u.jsxs("div",{style:{padding:10,height:40,display:"flex",borderBottom:"solid 1px #ccc",background:"#fff"},children:[u.jsx("div",{style:{flex:1},children:e}),u.jsxs("div",{style:{display:"flex"},children:[u.jsx("button",{disabled:t,onClick:n,children:"up"}),u.jsx("button",{disabled:o,onClick:i,children:"down"}),u.jsx("button",{onClick:r,children:"delete"})]})]}),ne=h.createContext(null),be=h.forwardRef((e,t)=>{const o=h.useContext(ne);return u.jsx("div",{ref:h.useMemo(()=>we([t,o]),[t,o]),...e})}),A={name:"With auto-animate",render:()=>{const e=h.useRef(0),t=()=>({id:++e.current,data:oe.music.songName()}),[o,n]=h.useState(()=>Array.from({length:100},t)),[i,r]=me(),s=h.useRef(!1);return u.jsxs("div",{style:{height:"100vh",width:"400px",display:"flex",flexDirection:"column"},children:[u.jsx(ne.Provider,{value:i,children:u.jsx("div",{style:{overflowY:"auto",flex:1},children:u.jsx(Q,{as:be,onScroll:()=>{const a=s.current;s.current=!0,a!==s.current&&r(!1)},onScrollEnd:()=>{s.current=!1,r(!0)},children:o.map((a,l)=>u.jsx(ye,{isStart:l===0,isEnd:l===o.length-1,onUp:()=>{n(d=>{const c=[...d];return c.splice(l-1,0,c.splice(l,1)[0]),c})},onDown:()=>{n(d=>{const c=[...d];return c.splice(l+1,0,c.splice(l,1)[0]),c})},onDelete:()=>{n(d=>{const c=[...d];return c.splice(l,1),c})},children:a.data},a.id))})})}),u.jsx("div",{style:{display:"flex",justifyContent:"flex-end",padding:8,height:40,maxHeight:40,background:"white"},children:u.jsx("button",{onClick:()=>{n(a=>[...a,t()])},children:"append"})})]})}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};const ke=["Default"];export{A as Default,ke as __namedExportsOrder,We as default};
