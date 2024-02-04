import{a as p,j}from"./jsx-runtime-sgeEVxPu.js";import{r as h}from"./index-yp3VsGQP.js";import{f as te}from"./index-1aVAeLWL.js";import{V as U}from"./Virtualizer-rCPwsTeN.js";import"./useRerender-6MP8R9Xy.js";import"./useChildren-oVeIQPLM.js";import"./index-8dy-jdxy.js";const Q=new Set,f=new WeakMap,S=new WeakMap,b=new WeakMap,D=new WeakMap,ne=new WeakMap,M=new WeakMap,A=new WeakMap,O=new WeakSet;let v,z=0,B=0;const g="__aa_tgt",k="__aa_del",N="__aa_new",oe=e=>{const t=ce(e);t&&t.forEach(n=>de(n))},ie=e=>{e.forEach(t=>{t.target===v&&se(),f.has(t.target)&&x(t.target)})};function re(e){const t=D.get(e);t==null||t.disconnect();let n=f.get(e),o=0;const i=5;n||(n=T(e),f.set(e,n));const{offsetWidth:s,offsetHeight:r}=v,d=[n.top-i,s-(n.left+i+n.width),r-(n.top+i+n.height),n.left-i].map(a=>`${-1*Math.floor(a)}px`).join(" "),l=new IntersectionObserver(()=>{++o>1&&x(e)},{root:v,threshold:1,rootMargin:d});l.observe(e),D.set(e,l)}function x(e){clearTimeout(A.get(e));const t=I(e),n=W(t)?500:t.duration;A.set(e,setTimeout(async()=>{const o=b.get(e);try{await(o==null?void 0:o.finished),f.set(e,T(e)),re(e)}catch{}},n))}function se(){clearTimeout(A.get(v)),A.set(v,setTimeout(()=>{Q.forEach(e=>Z(e,t=>G(()=>x(t))))},100))}function ae(e){setTimeout(()=>{ne.set(e,setInterval(()=>G(x.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function G(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let L,C;typeof window<"u"&&(v=document.documentElement,L=new MutationObserver(oe),C=new ResizeObserver(ie),window.addEventListener("scroll",()=>{B=window.scrollY,z=window.scrollX}),C.observe(v));function ce(e){return e.reduce((o,i)=>[...o,...Array.from(i.addedNodes),...Array.from(i.removedNodes)],[]).every(o=>o.nodeName==="#comment")?!1:e.reduce((o,i)=>{if(o===!1)return!1;if(i.target instanceof Element){if(_(i.target),!o.has(i.target)){o.add(i.target);for(let s=0;s<i.target.children.length;s++){const r=i.target.children.item(s);if(r){if(k in r)return!1;_(i.target,r),o.add(r)}}}if(i.removedNodes.length)for(let s=0;s<i.removedNodes.length;s++){const r=i.removedNodes[s];if(k in r)return!1;r instanceof Element&&(o.add(r),_(i.target,r),S.set(r,[i.previousSibling,i.nextSibling]))}}return o},new Set)}function _(e,t){!t&&!(g in e)?Object.defineProperty(e,g,{value:e}):t&&!(g in t)&&Object.defineProperty(t,g,{value:e})}function de(e){var t;const n=e.isConnected,o=f.has(e);n&&S.has(e)&&S.delete(e),b.has(e)&&((t=b.get(e))===null||t===void 0||t.cancel()),N in e?H(e):o&&n?fe(e):o&&!n?ue(e):H(e)}function m(e){return Number(e.replace(/[^0-9.\-]/g,""))}function le(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}function T(e){const t=e.getBoundingClientRect(),{x:n,y:o}=le(e);return{top:t.top+o,left:t.left+n,width:t.width,height:t.height}}function J(e,t,n){let o=t.width,i=t.height,s=n.width,r=n.height;const c=getComputedStyle(e);if(c.getPropertyValue("box-sizing")==="content-box"){const l=m(c.paddingTop)+m(c.paddingBottom)+m(c.borderTopWidth)+m(c.borderBottomWidth),a=m(c.paddingLeft)+m(c.paddingRight)+m(c.borderRightWidth)+m(c.borderLeftWidth);o-=a,s-=a,i-=l,r-=l}return[o,s,i,r].map(Math.round)}function I(e){return g in e&&M.has(e[g])?M.get(e[g]):{duration:250,easing:"ease-in-out"}}function K(e){if(g in e)return e[g]}function Y(e){const t=K(e);return t?O.has(t):!1}function Z(e,...t){t.forEach(n=>n(e,M.has(e)));for(let n=0;n<e.children.length;n++){const o=e.children.item(n);o&&t.forEach(i=>i(o,M.has(o)))}}function $(e){return Array.isArray(e)?e:[e]}function W(e){return typeof e=="function"}function fe(e){const t=f.get(e),n=T(e);if(!Y(e))return f.set(e,n);let o;if(!t)return;const i=I(e);if(typeof i!="function"){const s=t.left-n.left,r=t.top-n.top,[c,d,l,a]=J(e,t,n),w={transform:`translate(${s}px, ${r}px)`},u={transform:"translate(0, 0)"};c!==d&&(w.width=`${c}px`,u.width=`${d}px`),l!==a&&(w.height=`${l}px`,u.height=`${a}px`),o=e.animate([w,u],{duration:i.duration,easing:i.easing})}else{const[s]=$(i(e,"remain",t,n));o=new Animation(s),o.play()}b.set(e,o),f.set(e,n),o.addEventListener("finish",x.bind(null,e))}function H(e){N in e&&delete e[N];const t=T(e);f.set(e,t);const n=I(e);if(!Y(e))return;let o;if(typeof n!="function")o=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"});else{const[i]=$(n(e,"add",t));o=new Animation(i),o.play()}b.set(e,o),o.addEventListener("finish",x.bind(null,e))}function X(e,t){var n;e.remove(),f.delete(e),S.delete(e),b.delete(e),(n=D.get(e))===null||n===void 0||n.disconnect(),setTimeout(()=>{if(k in e&&delete e[k],Object.defineProperty(e,N,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(const o in t)e.style[o]=""},0)}function ue(e){var t;if(!S.has(e)||!f.has(e))return;const[n,o]=S.get(e);Object.defineProperty(e,k,{value:!0,configurable:!0});const i=window.scrollX,s=window.scrollY;if(o&&o.parentNode&&o.parentNode instanceof Element?o.parentNode.insertBefore(e,o):n&&n.parentNode?n.parentNode.appendChild(e):(t=K(e))===null||t===void 0||t.appendChild(e),!Y(e))return X(e);const[r,c,d,l]=he(e),a=I(e),w=f.get(e);(i!==z||s!==B)&&pe(e,i,s,a);let u,y={position:"absolute",top:`${r}px`,left:`${c}px`,width:`${d}px`,height:`${l}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!W(a))Object.assign(e.style,y),u=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:a.duration,easing:"ease-out"});else{const[R,E]=$(a(e,"remove",w));(E==null?void 0:E.styleReset)!==!1&&(y=(E==null?void 0:E.styleReset)||y,Object.assign(e.style,y)),u=new Animation(R),u.play()}b.set(e,u),u.addEventListener("finish",X.bind(null,e,y))}function pe(e,t,n,o){const i=z-t,s=B-n,r=document.documentElement.style.scrollBehavior;if(getComputedStyle(v).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+i,window.scrollY+s),!e.parentElement)return;const d=e.parentElement;let l=d.clientHeight,a=d.clientWidth;const w=performance.now();function u(){requestAnimationFrame(()=>{if(!W(o)){const y=l-d.clientHeight,R=a-d.clientWidth;w+o.duration>performance.now()?(window.scrollTo({left:window.scrollX-R,top:window.scrollY-y}),l=d.clientHeight,a=d.clientWidth,u()):document.documentElement.style.scrollBehavior=r}})}u()}function he(e){const t=f.get(e),[n,,o]=J(e,t,T(e));let i=e.parentElement;for(;i&&(getComputedStyle(i).position==="static"||i instanceof HTMLBodyElement);)i=i.parentElement;i||(i=document.body);const s=getComputedStyle(i),r=f.get(i)||T(i),c=Math.round(t.top-r.top)-m(s.borderTopWidth),d=Math.round(t.left-r.left)-m(s.borderLeftWidth);return[c,d,n,o]}function me(e,t={}){return L&&C&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!W(t)&&!t.disrespectUserMotionPreference||(O.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),Z(e,x,ae,i=>C==null?void 0:C.observe(i)),W(t)?M.set(e,t):M.set(e,{duration:250,easing:"ease-in-out",...t}),L.observe(e,{childList:!0}),Q.add(e))),Object.freeze({parent:e,enable:()=>{O.add(e)},disable:()=>{O.delete(e)},isEnabled:()=>O.has(e)})}function ge(e){const[t,n]=h.useState(),o=h.useMemo(()=>e,[]),i=h.useCallback(r=>{r instanceof HTMLElement?n(me(r,o)):n(void 0)},[o]),s=h.useCallback(r=>{t&&(r?t.enable():t.disable())},[t]);return[i,s]}function ve(e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}const Oe={component:U},we=({children:e,isStart:t,isEnd:n,onUp:o,onDown:i,onDelete:s})=>j("div",{style:{padding:10,height:40,display:"flex",borderBottom:"solid 1px #ccc",background:"#fff"},children:[p("div",{style:{flex:1},children:e}),j("div",{style:{display:"flex"},children:[p("button",{disabled:t,onClick:o,children:"up"}),p("button",{disabled:n,onClick:i,children:"down"}),p("button",{onClick:s,children:"delete"})]})]}),ee=h.createContext(null),ye=h.forwardRef((e,t)=>{const n=h.useContext(ee);return p("div",{ref:h.useMemo(()=>ve([t,n]),[t,n]),...e})}),P={name:"With auto-animate",render:()=>{const e=h.useRef(0),t=()=>({id:++e.current,data:te.music.songName()}),[n,o]=h.useState(()=>Array.from({length:100},t)),[i,s]=ge(),r=h.useRef(!1);return j("div",{style:{height:"100vh",width:"400px",display:"flex",flexDirection:"column"},children:[p(ee.Provider,{value:i,children:p("div",{style:{overflowY:"auto",flex:1},children:p(U,{as:ye,onScroll:()=>{const c=r.current;r.current=!0,c!==r.current&&s(!1)},onScrollEnd:()=>{r.current=!1,s(!0)},children:n.map((c,d)=>p(we,{isStart:d===0,isEnd:d===n.length-1,onUp:()=>{o(l=>{const a=[...l];return a.splice(d-1,0,a.splice(d,1)[0]),a})},onDown:()=>{o(l=>{const a=[...l];return a.splice(d+1,0,a.splice(d,1)[0]),a})},onDelete:()=>{o(l=>{const a=[...l];return a.splice(d,1),a})},children:c.data},c.id))})})}),p("div",{style:{display:"flex",justifyContent:"flex-end",padding:8,height:40,maxHeight:40,background:"white"},children:p("button",{onClick:()=>{o(c=>[...c,t()])},children:"append"})})]})}};var F,V,q;P.parameters={...P.parameters,docs:{...(F=P.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(V=P.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const ke=["Default"];export{P as Default,ke as __namedExportsOrder,Oe as default};
