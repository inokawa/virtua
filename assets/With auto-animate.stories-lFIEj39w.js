import{j as u}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./iframe-uIJwkhtw.js";import{f as ie}from"./chunk-4X5ZEQ5K-BPNiwWK2.js";import{V as J}from"./Virtualizer-D9xDQ7Ar.js";import"./preload-helper-BQ24v_F8.js";import"./useLatestRef-CaBgZU5C.js";import"./useChildren-CD6r06HD.js";import"./index-BYpsXk2w.js";const z=new Set,f=new WeakMap,C=new WeakMap,w=new WeakMap,k=new WeakMap,_=new WeakMap,B=new WeakMap,E=new WeakMap,T=new WeakMap,j=new WeakSet;let y,$=0,H=0;const v="__aa_tgt",R="__aa_del",I="__aa_new",K=e=>{const t=de(e);t&&t.forEach(i=>le(i))},re=e=>{e.forEach(t=>{t.target===y&&ae(),f.has(t.target)&&M(t.target)})};function se(e){const t=k.get(e);t==null||t.disconnect();let i=f.get(e),n=0;const o=5;i||(i=O(e),f.set(e,i));const{offsetWidth:s,offsetHeight:r}=y,c=[i.top-o,s-(i.left+o+i.width),r-(i.top+o+i.height),i.left-o].map(d=>`${-1*Math.floor(d)}px`).join(" "),l=new IntersectionObserver(()=>{++n>1&&M(e)},{root:y,threshold:1,rootMargin:c});l.observe(e),k.set(e,l)}function M(e){clearTimeout(T.get(e));const t=A(e),i=W(t)?500:t.duration;T.set(e,setTimeout(async()=>{const n=w.get(e);try{await(n==null?void 0:n.finished),f.set(e,O(e)),se(e)}catch{}},i))}function ae(){clearTimeout(T.get(y)),T.set(y,setTimeout(()=>{z.forEach(e=>L(e,t=>Z(()=>M(t))))},100))}function ce(e){setTimeout(()=>{B.set(e,setInterval(()=>Z(M.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function Z(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let g;const ee=typeof window<"u"&&"ResizeObserver"in window;ee&&(y=document.documentElement,new MutationObserver(K),g=new ResizeObserver(re),window.addEventListener("scroll",()=>{H=window.scrollY,$=window.scrollX}),g.observe(y));function de(e){return e.reduce((n,o)=>[...n,...Array.from(o.addedNodes),...Array.from(o.removedNodes)],[]).every(n=>n.nodeName==="#comment")?!1:e.reduce((n,o)=>{if(n===!1)return!1;if(o.target instanceof Element){if(D(o.target),!n.has(o.target)){n.add(o.target);for(let s=0;s<o.target.children.length;s++){const r=o.target.children.item(s);if(r){if(R in r)return!1;D(o.target,r),n.add(r)}}}if(o.removedNodes.length)for(let s=0;s<o.removedNodes.length;s++){const r=o.removedNodes[s];if(R in r)return!1;r instanceof Element&&(n.add(r),D(o.target,r),C.set(r,[o.previousSibling,o.nextSibling]))}}return n},new Set)}function D(e,t){!t&&!(v in e)?Object.defineProperty(e,v,{value:e}):t&&!(v in t)&&Object.defineProperty(t,v,{value:e})}function le(e){var t;const i=e.isConnected,n=f.has(e);i&&C.has(e)&&C.delete(e),w.has(e)&&((t=w.get(e))===null||t===void 0||t.cancel()),I in e?V(e):n&&i?ue(e):n&&!i?pe(e):V(e)}function h(e){return Number(e.replace(/[^0-9.\-]/g,""))}function fe(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}function O(e){const t=e.getBoundingClientRect(),{x:i,y:n}=fe(e);return{top:t.top+n,left:t.left+i,width:t.width,height:t.height}}function te(e,t,i){let n=t.width,o=t.height,s=i.width,r=i.height;const a=getComputedStyle(e);if(a.getPropertyValue("box-sizing")==="content-box"){const l=h(a.paddingTop)+h(a.paddingBottom)+h(a.borderTopWidth)+h(a.borderBottomWidth),d=h(a.paddingLeft)+h(a.paddingRight)+h(a.borderRightWidth)+h(a.borderLeftWidth);n-=d,s-=d,o-=l,r-=l}return[n,s,o,r].map(Math.round)}function A(e){return v in e&&E.has(e[v])?E.get(e[v]):{duration:250,easing:"ease-in-out"}}function ne(e){if(v in e)return e[v]}function X(e){const t=ne(e);return t?j.has(t):!1}function L(e,...t){t.forEach(i=>i(e,E.has(e)));for(let i=0;i<e.children.length;i++){const n=e.children.item(i);n&&t.forEach(o=>o(n,E.has(n)))}}function F(e){return Array.isArray(e)?e:[e]}function W(e){return typeof e=="function"}function ue(e){const t=f.get(e),i=O(e);if(!X(e))return f.set(e,i);let n;if(!t)return;const o=A(e);if(typeof o!="function"){const s=t.left-i.left,r=t.top-i.top,[a,c,l,d]=te(e,t,i),x={transform:`translate(${s}px, ${r}px)`},m={transform:"translate(0, 0)"};a!==c&&(x.width=`${a}px`,m.width=`${c}px`),l!==d&&(x.height=`${l}px`,m.height=`${d}px`),n=e.animate([x,m],{duration:o.duration,easing:o.easing})}else{const[s]=F(o(e,"remain",t,i));n=new Animation(s),n.play()}w.set(e,n),f.set(e,i),n.addEventListener("finish",()=>M(e),{once:!0})}function V(e){I in e&&delete e[I];const t=O(e);f.set(e,t);const i=A(e);if(!X(e))return;let n;if(typeof i!="function")n=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:i.duration*1.5,easing:"ease-in"});else{const[o]=F(i(e,"add",t));n=new Animation(o),n.play()}w.set(e,n),n.addEventListener("finish",()=>M(e),{once:!0})}function q(e,t){var i;e.remove(),f.delete(e),C.delete(e),w.delete(e),(i=k.get(e))===null||i===void 0||i.disconnect(),setTimeout(()=>{if(R in e&&delete e[R],Object.defineProperty(e,I,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(const n in t)e.style[n]=""},0)}function pe(e){var t;if(!C.has(e)||!f.has(e))return;const[i,n]=C.get(e);Object.defineProperty(e,R,{value:!0,configurable:!0});const o=window.scrollX,s=window.scrollY;if(n&&n.parentNode&&n.parentNode instanceof Element?n.parentNode.insertBefore(e,n):i&&i.parentNode?i.parentNode.appendChild(e):(t=ne(e))===null||t===void 0||t.appendChild(e),!X(e))return q(e);const[r,a,c,l]=he(e),d=A(e),x=f.get(e);(o!==$||s!==H)&&me(e,o,s,d);let m,b={position:"absolute",top:`${r}px`,left:`${a}px`,width:`${c}px`,height:`${l}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!W(d))Object.assign(e.style,b),m=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:d.duration,easing:"ease-out"});else{const[N,S]=F(d(e,"remove",x));(S==null?void 0:S.styleReset)!==!1&&(b=(S==null?void 0:S.styleReset)||b,Object.assign(e.style,b)),m=new Animation(N),m.play()}w.set(e,m),m.addEventListener("finish",()=>q(e,b),{once:!0})}function me(e,t,i,n){const o=$-t,s=H-i,r=document.documentElement.style.scrollBehavior;if(getComputedStyle(y).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+o,window.scrollY+s),!e.parentElement)return;const c=e.parentElement;let l=c.clientHeight,d=c.clientWidth;const x=performance.now();function m(){requestAnimationFrame(()=>{if(!W(n)){const b=l-c.clientHeight,N=d-c.clientWidth;x+n.duration>performance.now()?(window.scrollTo({left:window.scrollX-N,top:window.scrollY-b}),l=c.clientHeight,d=c.clientWidth,m()):document.documentElement.style.scrollBehavior=r}})}m()}function he(e){const t=f.get(e),[i,,n]=te(e,t,O(e));let o=e.parentElement;for(;o&&(getComputedStyle(o).position==="static"||o instanceof HTMLBodyElement);)o=o.parentElement;o||(o=document.body);const s=getComputedStyle(o),r=f.get(o)||O(o),a=Math.round(t.top-r.top)-h(s.borderTopWidth),c=Math.round(t.left-r.left)-h(s.borderLeftWidth);return[a,c,i,n]}function ge(e,t={}){if(ee&&g&&!(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!W(t)&&!t.disrespectUserMotionPreference)){j.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),L(e,M,ce,r=>g==null?void 0:g.observe(r)),W(t)?E.set(e,t):E.set(e,{duration:250,easing:"ease-in-out",...t});const s=new MutationObserver(K);s.observe(e,{childList:!0}),_.set(e,s),z.add(e)}return Object.freeze({parent:e,enable:()=>{j.add(e)},disable:()=>{j.delete(e)},isEnabled:()=>j.has(e),destroy:()=>{j.delete(e),z.delete(e),E.delete(e);const n=_.get(e);n==null||n.disconnect(),_.delete(e),L(e,o=>{g==null||g.unobserve(o);const s=w.get(o);try{s==null||s.cancel()}catch{}w.delete(o);const r=k.get(o);r==null||r.disconnect(),k.delete(o);const a=B.get(o);a&&clearInterval(a),B.delete(o);const c=T.get(o);c&&clearTimeout(c),T.delete(o),f.delete(o),C.delete(o)})}})}function ve(e){const[t,i]=p.useState(),n=p.useMemo(()=>e,[]),o=p.useCallback(r=>{r instanceof HTMLElement?i(ge(r,n)):i(void 0)},[n]),s=p.useCallback(r=>{t&&(r?t.enable():t.disable())},[t]);return p.useEffect(()=>()=>{var r;(r=t==null?void 0:t.destroy)===null||r===void 0||r.call(t)},[t]),[o,s]}function we(e){return t=>{for(const i of e)Y(i,t)}}function ye(e){return t=>{const i=[];for(const n of e){const o=Y(n,t),s=typeof o=="function";i.push(s?o:()=>Y(n,null))}return()=>{for(const n of i)n()}}}function Y(e,t){if(typeof e=="function")return e(t);e&&(e.current=t)}var xe=parseInt(p.version.split(".")[0],10)>=19?ye:we;const We={component:J},be=({children:e,isStart:t,isEnd:i,onUp:n,onDown:o,onDelete:s})=>u.jsxs("div",{style:{padding:10,height:40,display:"flex",borderBottom:"solid 1px #ccc",background:"#fff"},children:[u.jsx("div",{style:{flex:1},children:e}),u.jsxs("div",{style:{display:"flex"},children:[u.jsx("button",{disabled:t,onClick:n,children:"up"}),u.jsx("button",{disabled:i,onClick:o,children:"down"}),u.jsx("button",{onClick:s,children:"delete"})]})]}),oe=p.createContext(null),Ee=p.forwardRef((e,t)=>{const i=p.useContext(oe);return u.jsx("div",{ref:p.useMemo(()=>xe([t,i]),[t,i]),...e})}),P={name:"With auto-animate",render:()=>{const e=p.useRef(0),t=()=>({id:++e.current,data:ie.music.songName()}),[i,n]=p.useState(()=>Array.from({length:100},t)),[o,s]=ve(),r=p.useRef(!1);return u.jsxs("div",{style:{height:"100vh",width:"400px",display:"flex",flexDirection:"column"},children:[u.jsx(oe.Provider,{value:o,children:u.jsx("div",{style:{overflowY:"auto",flex:1},children:u.jsx(J,{as:Ee,onScroll:()=>{const a=r.current;r.current=!0,a!==r.current&&s(!1)},onScrollEnd:()=>{r.current=!1,s(!0)},children:i.map((a,c)=>u.jsx(be,{isStart:c===0,isEnd:c===i.length-1,onUp:()=>{n(l=>{const d=[...l];return d.splice(c-1,0,d.splice(c,1)[0]),d})},onDown:()=>{n(l=>{const d=[...l];return d.splice(c+1,0,d.splice(c,1)[0]),d})},onDelete:()=>{n(l=>{const d=[...l];return d.splice(c,1),d})},children:a.data},a.id))})})}),u.jsx("div",{style:{display:"flex",justifyContent:"flex-end",padding:8,height:40,maxHeight:40,background:"white"},children:u.jsx("button",{onClick:()=>{n(a=>[...a,t()])},children:"append"})})]})}};var U,Q,G;P.parameters={...P.parameters,docs:{...(U=P.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(Q=P.parameters)==null?void 0:Q.docs)==null?void 0:G.source}}};const Pe=["Default"];export{P as Default,Pe as __namedExportsOrder,We as default};
