import{j as f}from"./jsx-runtime-WtcO95wV.js";import{r as h}from"./index-DaO3jVNX.js";import{f as ee}from"./index-xJp9Kd2E.js";import{V as q}from"./Virtualizer-BIvA_CDA.js";import"./useRerender-CqhsFRqB.js";import"./useChildren-Bk9Rx39-.js";import"./index-DpI4bZRz.js";const U=new Set,u=new WeakMap,S=new WeakMap,y=new WeakMap,_=new WeakMap,te=new WeakMap,j=new WeakMap,P=new WeakMap,T=new WeakSet;let v,L=0,z=0;const g="__aa_tgt",O="__aa_del",A="__aa_new",ne=e=>{const t=ae(e);t&&t.forEach(n=>ce(n))},oe=e=>{e.forEach(t=>{t.target===v&&re(),u.has(t.target)&&b(t.target)})};function ie(e){const t=_.get(e);t==null||t.disconnect();let n=u.get(e),o=0;const i=5;n||(n=M(e),u.set(e,n));const{offsetWidth:s,offsetHeight:r}=v,d=[n.top-i,s-(n.left+i+n.width),r-(n.top+i+n.height),n.left-i].map(a=>`${-1*Math.floor(a)}px`).join(" "),l=new IntersectionObserver(()=>{++o>1&&b(e)},{root:v,threshold:1,rootMargin:d});l.observe(e),_.set(e,l)}function b(e){clearTimeout(P.get(e));const t=N(e),n=k(t)?500:t.duration;P.set(e,setTimeout(async()=>{const o=y.get(e);try{await(o==null?void 0:o.finished),u.set(e,M(e)),ie(e)}catch{}},n))}function re(){clearTimeout(P.get(v)),P.set(v,setTimeout(()=>{U.forEach(e=>K(e,t=>Q(()=>b(t))))},100))}function se(e){setTimeout(()=>{te.set(e,setInterval(()=>Q(b.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function Q(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let D,C;typeof window<"u"&&(v=document.documentElement,D=new MutationObserver(ne),C=new ResizeObserver(oe),window.addEventListener("scroll",()=>{z=window.scrollY,L=window.scrollX}),C.observe(v));function ae(e){return e.reduce((o,i)=>[...o,...Array.from(i.addedNodes),...Array.from(i.removedNodes)],[]).every(o=>o.nodeName==="#comment")?!1:e.reduce((o,i)=>{if(o===!1)return!1;if(i.target instanceof Element){if(R(i.target),!o.has(i.target)){o.add(i.target);for(let s=0;s<i.target.children.length;s++){const r=i.target.children.item(s);if(r){if(O in r)return!1;R(i.target,r),o.add(r)}}}if(i.removedNodes.length)for(let s=0;s<i.removedNodes.length;s++){const r=i.removedNodes[s];if(O in r)return!1;r instanceof Element&&(o.add(r),R(i.target,r),S.set(r,[i.previousSibling,i.nextSibling]))}}return o},new Set)}function R(e,t){!t&&!(g in e)?Object.defineProperty(e,g,{value:e}):t&&!(g in t)&&Object.defineProperty(t,g,{value:e})}function ce(e){var t;const n=e.isConnected,o=u.has(e);n&&S.has(e)&&S.delete(e),y.has(e)&&((t=y.get(e))===null||t===void 0||t.cancel()),A in e?$(e):o&&n?le(e):o&&!n?fe(e):$(e)}function m(e){return Number(e.replace(/[^0-9.\-]/g,""))}function de(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}function M(e){const t=e.getBoundingClientRect(),{x:n,y:o}=de(e);return{top:t.top+o,left:t.left+n,width:t.width,height:t.height}}function G(e,t,n){let o=t.width,i=t.height,s=n.width,r=n.height;const c=getComputedStyle(e);if(c.getPropertyValue("box-sizing")==="content-box"){const l=m(c.paddingTop)+m(c.paddingBottom)+m(c.borderTopWidth)+m(c.borderBottomWidth),a=m(c.paddingLeft)+m(c.paddingRight)+m(c.borderRightWidth)+m(c.borderLeftWidth);o-=a,s-=a,i-=l,r-=l}return[o,s,i,r].map(Math.round)}function N(e){return g in e&&j.has(e[g])?j.get(e[g]):{duration:250,easing:"ease-in-out"}}function J(e){if(g in e)return e[g]}function B(e){const t=J(e);return t?T.has(t):!1}function K(e,...t){t.forEach(n=>n(e,j.has(e)));for(let n=0;n<e.children.length;n++){const o=e.children.item(n);o&&t.forEach(i=>i(o,j.has(o)))}}function Y(e){return Array.isArray(e)?e:[e]}function k(e){return typeof e=="function"}function le(e){const t=u.get(e),n=M(e);if(!B(e))return u.set(e,n);let o;if(!t)return;const i=N(e);if(typeof i!="function"){const s=t.left-n.left,r=t.top-n.top,[c,d,l,a]=G(e,t,n),x={transform:`translate(${s}px, ${r}px)`},p={transform:"translate(0, 0)"};c!==d&&(x.width=`${c}px`,p.width=`${d}px`),l!==a&&(x.height=`${l}px`,p.height=`${a}px`),o=e.animate([x,p],{duration:i.duration,easing:i.easing})}else{const[s]=Y(i(e,"remain",t,n));o=new Animation(s),o.play()}y.set(e,o),u.set(e,n),o.addEventListener("finish",b.bind(null,e))}function $(e){A in e&&delete e[A];const t=M(e);u.set(e,t);const n=N(e);if(!B(e))return;let o;if(typeof n!="function")o=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"});else{const[i]=Y(n(e,"add",t));o=new Animation(i),o.play()}y.set(e,o),o.addEventListener("finish",b.bind(null,e))}function H(e,t){var n;e.remove(),u.delete(e),S.delete(e),y.delete(e),(n=_.get(e))===null||n===void 0||n.disconnect(),setTimeout(()=>{if(O in e&&delete e[O],Object.defineProperty(e,A,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(const o in t)e.style[o]=""},0)}function fe(e){var t;if(!S.has(e)||!u.has(e))return;const[n,o]=S.get(e);Object.defineProperty(e,O,{value:!0,configurable:!0});const i=window.scrollX,s=window.scrollY;if(o&&o.parentNode&&o.parentNode instanceof Element?o.parentNode.insertBefore(e,o):n&&n.parentNode?n.parentNode.appendChild(e):(t=J(e))===null||t===void 0||t.appendChild(e),!B(e))return H(e);const[r,c,d,l]=pe(e),a=N(e),x=u.get(e);(i!==L||s!==z)&&ue(e,i,s,a);let p,w={position:"absolute",top:`${r}px`,left:`${c}px`,width:`${d}px`,height:`${l}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!k(a))Object.assign(e.style,w),p=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:a.duration,easing:"ease-out"});else{const[I,E]=Y(a(e,"remove",x));(E==null?void 0:E.styleReset)!==!1&&(w=(E==null?void 0:E.styleReset)||w,Object.assign(e.style,w)),p=new Animation(I),p.play()}y.set(e,p),p.addEventListener("finish",H.bind(null,e,w))}function ue(e,t,n,o){const i=L-t,s=z-n,r=document.documentElement.style.scrollBehavior;if(getComputedStyle(v).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+i,window.scrollY+s),!e.parentElement)return;const d=e.parentElement;let l=d.clientHeight,a=d.clientWidth;const x=performance.now();function p(){requestAnimationFrame(()=>{if(!k(o)){const w=l-d.clientHeight,I=a-d.clientWidth;x+o.duration>performance.now()?(window.scrollTo({left:window.scrollX-I,top:window.scrollY-w}),l=d.clientHeight,a=d.clientWidth,p()):document.documentElement.style.scrollBehavior=r}})}p()}function pe(e){const t=u.get(e),[n,,o]=G(e,t,M(e));let i=e.parentElement;for(;i&&(getComputedStyle(i).position==="static"||i instanceof HTMLBodyElement);)i=i.parentElement;i||(i=document.body);const s=getComputedStyle(i),r=u.get(i)||M(i),c=Math.round(t.top-r.top)-m(s.borderTopWidth),d=Math.round(t.left-r.left)-m(s.borderLeftWidth);return[c,d,n,o]}function he(e,t={}){return D&&C&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!k(t)&&!t.disrespectUserMotionPreference||(T.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),K(e,b,se,i=>C==null?void 0:C.observe(i)),k(t)?j.set(e,t):j.set(e,{duration:250,easing:"ease-in-out",...t}),D.observe(e,{childList:!0}),U.add(e))),Object.freeze({parent:e,enable:()=>{T.add(e)},disable:()=>{T.delete(e)},isEnabled:()=>T.has(e)})}function me(e){const[t,n]=h.useState(),o=h.useMemo(()=>e,[]),i=h.useCallback(r=>{r instanceof HTMLElement?n(he(r,o)):n(void 0)},[o]),s=h.useCallback(r=>{t&&(r?t.enable():t.disable())},[t]);return[i,s]}function ge(e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}const Me={component:q},ve=({children:e,isStart:t,isEnd:n,onUp:o,onDown:i,onDelete:s})=>f.jsxs("div",{style:{padding:10,height:40,display:"flex",borderBottom:"solid 1px #ccc",background:"#fff"},children:[f.jsx("div",{style:{flex:1},children:e}),f.jsxs("div",{style:{display:"flex"},children:[f.jsx("button",{disabled:t,onClick:o,children:"up"}),f.jsx("button",{disabled:n,onClick:i,children:"down"}),f.jsx("button",{onClick:s,children:"delete"})]})]}),Z=h.createContext(null),xe=h.forwardRef((e,t)=>{const n=h.useContext(Z);return f.jsx("div",{ref:h.useMemo(()=>ge([t,n]),[t,n]),...e})}),W={name:"With auto-animate",render:()=>{const e=h.useRef(0),t=()=>({id:++e.current,data:ee.music.songName()}),[n,o]=h.useState(()=>Array.from({length:100},t)),[i,s]=me(),r=h.useRef(!1);return f.jsxs("div",{style:{height:"100vh",width:"400px",display:"flex",flexDirection:"column"},children:[f.jsx(Z.Provider,{value:i,children:f.jsx("div",{style:{overflowY:"auto",flex:1},children:f.jsx(q,{as:xe,onScroll:()=>{const c=r.current;r.current=!0,c!==r.current&&s(!1)},onScrollEnd:()=>{r.current=!1,s(!0)},children:n.map((c,d)=>f.jsx(ve,{isStart:d===0,isEnd:d===n.length-1,onUp:()=>{o(l=>{const a=[...l];return a.splice(d-1,0,a.splice(d,1)[0]),a})},onDown:()=>{o(l=>{const a=[...l];return a.splice(d+1,0,a.splice(d,1)[0]),a})},onDelete:()=>{o(l=>{const a=[...l];return a.splice(d,1),a})},children:c.data},c.id))})})}),f.jsx("div",{style:{display:"flex",justifyContent:"flex-end",padding:8,height:40,maxHeight:40,background:"white"},children:f.jsx("button",{onClick:()=>{o(c=>[...c,t()])},children:"append"})})]})}};var X,F,V;W.parameters={...W.parameters,docs:{...(X=W.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(V=(F=W.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};const Te=["Default"];export{W as Default,Te as __namedExportsOrder,Me as default};
