import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-DMmIPdVs.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Virtualizer-DjiOz8zb.js";import{n as o,t as s}from"./en-DltMjSLJ.js";function c(e){let t=e.getBoundingClientRect(),n=P?.clientWidth||0,r=P?.clientHeight||0;return t.bottom<0||t.top>r||t.right<0||t.left>n}function l(e){O.get(e)?.disconnect();let t=T.get(e),n=0;t||(t=g(e),T.set(e,t));let{offsetWidth:r,offsetHeight:i}=P,a=[t.top-5,r-(t.left+5+t.width),i-(t.top+5+t.height),t.left-5].map(e=>`${-1*Math.floor(e)}px`).join(` `),o=new IntersectionObserver(()=>{++n>1&&u(e)},{root:P,threshold:1,rootMargin:a});o.observe(e),O.set(e,o)}function u(e,t=!0){clearTimeout(M.get(e));let n=v(e),r=t?S(n)?500:n.duration:0;M.set(e,setTimeout(async()=>{let t=D.get(e);try{await t?.finished,T.set(e,g(e)),l(e)}catch{}},r))}function d(){clearTimeout(M.get(P)),M.set(P,setTimeout(()=>{w.forEach(e=>b(e,e=>p(()=>u(e))))},100))}function f(e){setTimeout(()=>{A.set(e,setInterval(()=>p(u.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function p(e){typeof requestIdleCallback==`function`?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}function ee(e){return!e.reduce((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)],[]).every(e=>e.nodeName===`#comment`)&&e.reduce((e,t)=>{if(e===!1)return!1;if(t.target instanceof Element){if(m(t.target),!e.has(t.target)){e.add(t.target);for(let n=0;n<t.target.children.length;n++){let r=t.target.children.item(n);if(r){if(R in r)return!1;m(t.target,r),e.add(r)}}}if(t.removedNodes.length)for(let n=0;n<t.removedNodes.length;n++){let r=t.removedNodes[n];if(R in r)return!1;r instanceof Element&&(e.add(r),m(t.target,r),E.set(r,[t.previousSibling,t.nextSibling]))}}return e},new Set)}function m(e,t){!t&&!(L in e)?Object.defineProperty(e,L,{value:e}):t&&!(L in t)&&Object.defineProperty(t,L,{value:e})}function te(e){var t;let n=e.isConnected,r=T.has(e);n&&E.has(e)&&E.delete(e),D.get(e)?.playState!==`finished`&&((t=D.get(e))==null||t.cancel()),z in e?ae(e):r&&n?ie(e):r&&!n?oe(e):ae(e)}function h(e){return Number(e.replace(/[^0-9.\-]/g,``))}function ne(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}function g(e){let t=e.getBoundingClientRect(),{x:n,y:r}=ne(e);return{top:t.top+r,left:t.left+n,width:t.width,height:t.height}}function _(e,t,n){let r=t.width,i=t.height,a=n.width,o=n.height,s=getComputedStyle(e);if(s.getPropertyValue(`box-sizing`)===`content-box`){let e=h(s.paddingTop)+h(s.paddingBottom)+h(s.borderTopWidth)+h(s.borderBottomWidth),t=h(s.paddingLeft)+h(s.paddingRight)+h(s.borderRightWidth)+h(s.borderLeftWidth);r-=t,a-=t,i-=e,o-=e}return[r,a,i,o].map(Math.round)}function v(e){return L in e&&j.has(e[L])?j.get(e[L]):{duration:250,easing:`ease-in-out`}}function re(e){if(L in e)return e[L]}function y(e){let t=re(e);return t?N.has(t):!1}function b(e,...t){t.forEach(t=>t(e,j.has(e)));for(let n=0;n<e.children.length;n++){let r=e.children.item(n);r&&t.forEach(e=>e(r,j.has(r)))}}function x(e){return Array.isArray(e)?e:[e]}function S(e){return typeof e==`function`}function ie(e){let t=T.get(e),n=g(e);if(!y(e))return T.set(e,n);if(c(e)){T.set(e,n),l(e);return}let r;if(!t)return;let i=v(e);if(typeof i!=`function`){let a=t.left-n.left,o=t.top-n.top,s=t.left+t.width-(n.left+n.width);t.top+t.height-(n.top+n.height)==0&&(o=0),s==0&&(a=0);let[c,l,u,d]=_(e,t,n),f={transform:`translate(${a}px, ${o}px)`},p={transform:`translate(0, 0)`};c!==l&&(f.width=`${c}px`,p.width=`${l}px`),u!==d&&(f.height=`${u}px`,p.height=`${d}px`),r=e.animate([f,p],{duration:i.duration,easing:i.easing})}else{let[a]=x(i(e,`remain`,t,n));r=new Animation(a),r.play()}D.set(e,r),T.set(e,n),r.addEventListener(`finish`,u.bind(null,e,!1),{once:!0})}function ae(e){z in e&&delete e[z];let t=g(e);T.set(e,t);let n=v(e);if(!y(e))return;if(c(e)){l(e);return}let r;if(typeof n!=`function`)r=e.animate([{transform:`scale(.98)`,opacity:0},{transform:`scale(0.98)`,opacity:0,offset:.5},{transform:`scale(1)`,opacity:1}],{duration:n.duration*1.5,easing:`ease-in`});else{let[i]=x(n(e,`add`,t));r=new Animation(i),r.play()}D.set(e,r),r.addEventListener(`finish`,u.bind(null,e,!1),{once:!0})}function C(e,t){var n;e.remove(),T.delete(e),E.delete(e),D.delete(e),(n=O.get(e))==null||n.disconnect(),setTimeout(()=>{if(R in e&&delete e[R],Object.defineProperty(e,z,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(let n in t)e.style[n]=``},0)}function oe(e){var t;if(!E.has(e)||!T.has(e))return;let[n,r]=E.get(e);Object.defineProperty(e,R,{value:!0,configurable:!0});let i=window.scrollX,a=window.scrollY;if(r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(e,r):n&&n.parentNode?n.parentNode.appendChild(e):(t=re(e))==null||t.appendChild(e),!y(e))return C(e);let[o,s,c,l]=ce(e),u=v(e),d=T.get(e);(i!==F||a!==I)&&se(e,i,a,u);let f,p={position:`absolute`,top:`${o}px`,left:`${s}px`,width:`${c}px`,height:`${l}px`,margin:`0`,pointerEvents:`none`,transformOrigin:`center`,zIndex:`100`};if(!S(u))Object.assign(e.style,p),f=e.animate([{transform:`scale(1)`,opacity:1},{transform:`scale(.98)`,opacity:0}],{duration:u.duration,easing:`ease-out`});else{let[t,n]=x(u(e,`remove`,d));n?.styleReset!==!1&&(p=n?.styleReset||p,Object.assign(e.style,p)),f=new Animation(t),f.play()}D.set(e,f),f.addEventListener(`finish`,()=>C(e,p),{once:!0})}function se(e,t,n,r){let i=F-t,a=I-n,o=document.documentElement.style.scrollBehavior;if(getComputedStyle(P).scrollBehavior===`smooth`&&(document.documentElement.style.scrollBehavior=`auto`),window.scrollTo(window.scrollX+i,window.scrollY+a),!e.parentElement)return;let s=e.parentElement,c=s.clientHeight,l=s.clientWidth,u=performance.now();function d(){requestAnimationFrame(()=>{if(!S(r)){let e=c-s.clientHeight,t=l-s.clientWidth;u+r.duration>performance.now()?(window.scrollTo({left:window.scrollX-t,top:window.scrollY-e}),c=s.clientHeight,l=s.clientWidth,d()):document.documentElement.style.scrollBehavior=o}})}d()}function ce(e){let t=T.get(e),[n,,r]=_(e,t,g(e)),i=e.parentElement;for(;i&&(getComputedStyle(i).position===`static`||i instanceof HTMLBodyElement);)i=i.parentElement;i||=document.body;let a=getComputedStyle(i),o=!D.has(e)||D.get(e)?.playState===`finished`?g(i):T.get(i);return[Math.round(t.top-o.top)-h(a.borderTopWidth),Math.round(t.left-o.left)-h(a.borderLeftWidth),n,r]}function le(e,t={}){if(U&&H&&!(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches&&!S(t)&&!t.disrespectUserMotionPreference)){N.add(e),getComputedStyle(e).position===`static`&&Object.assign(e.style,{position:`relative`}),b(e,u,f,e=>H?.observe(e)),S(t)?j.set(e,t):j.set(e,{duration:250,easing:`ease-in-out`,...t});let n=new MutationObserver(B);n.observe(e,{childList:!0}),k.set(e,n),w.add(e)}return Object.freeze({parent:e,enable:()=>{N.add(e)},disable:()=>{N.delete(e),b(e,e=>{let t=D.get(e);try{t?.cancel()}catch{}D.delete(e);let n=M.get(e);n&&clearTimeout(n),M.delete(e);let r=A.get(e);r&&clearInterval(r),A.delete(e)})},isEnabled:()=>N.has(e),destroy:()=>{N.delete(e),w.delete(e),j.delete(e),k.get(e)?.disconnect(),k.delete(e),b(e,e=>{H?.unobserve(e);let t=D.get(e);try{t?.cancel()}catch{}D.delete(e),O.get(e)?.disconnect(),O.delete(e);let n=A.get(e);n&&clearInterval(n),A.delete(e);let r=M.get(e);r&&clearTimeout(r),M.delete(e),T.delete(e),E.delete(e)})}})}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=t((()=>{w=new Set,T=new WeakMap,E=new WeakMap,D=new WeakMap,O=new WeakMap,k=new WeakMap,A=new WeakMap,j=new WeakMap,M=new WeakMap,N=new WeakSet,F=0,I=0,L=`__aa_tgt`,R=`__aa_del`,z=`__aa_new`,B=e=>{let t=ee(e);t&&t.forEach(e=>te(e))},V=e=>{e.forEach(e=>{e.target===P&&d(),T.has(e.target)&&u(e.target)})},U=typeof window<`u`&&`ResizeObserver`in window,U&&(P=document.documentElement,new MutationObserver(B),H=new ResizeObserver(V),window.addEventListener(`scroll`,()=>{I=window.scrollY,F=window.scrollX}),H.observe(P))})))()}function ue(e){let[t,n]=(0,G.useState)(),r=(0,G.useMemo)(()=>e,[]),i=(0,G.useCallback)(e=>{e instanceof HTMLElement?n(le(e,r)):n(void 0)},[r]),a=(0,G.useCallback)(e=>{t&&(e?t.enable():t.disable())},[t]);return(0,G.useEffect)(()=>()=>{var e;(e=t?.destroy)==null||e.call(t)},[t]),[i,a]}var G;function K(){return(K=t((()=>{G=n(),W()})))()}function de(e){return t=>{for(let n of e)q(n,t)}}function fe(e){return t=>{let n=[];for(let r of e){let e=q(r,t),i=typeof e==`function`;n.push(i?e:()=>q(r,null))}return()=>{for(let e of n)e()}}}function q(e,t){if(typeof e==`function`)return e(t);e&&(e.current=t)}var J,pe;function Y(){return(Y=t((()=>{J=n(),pe=parseInt(J.version.split(`.`)[0],10)>=19?fe:de})))()}var X,Z,me,he,Q,ge,$,_e;function ve(){return(ve=t((()=>{i(),X=e(n(),1),K(),s(),Y(),Z=r(),me={component:a},he=({children:e,isStart:t,isEnd:n,onUp:r,onDown:i,onDelete:a})=>(0,Z.jsxs)(`div`,{style:{padding:10,height:40,display:`flex`,borderBottom:`solid 1px #ccc`,background:`#fff`},children:[(0,Z.jsx)(`div`,{style:{flex:1},children:e}),(0,Z.jsxs)(`div`,{style:{display:`flex`},children:[(0,Z.jsx)(`button`,{disabled:t,onClick:r,children:`up`}),(0,Z.jsx)(`button`,{disabled:n,onClick:i,children:`down`}),(0,Z.jsx)(`button`,{onClick:a,children:`delete`})]})]}),Q=(0,X.createContext)(null),ge=(0,X.forwardRef)((e,t)=>{let n=(0,X.useContext)(Q);return(0,Z.jsx)(`div`,{ref:(0,X.useMemo)(()=>pe([t,n]),[t,n]),...e})}),$={name:`With auto-animate`,render:()=>{let e=(0,X.useRef)(0),t=()=>({id:++e.current,data:o.music.songName()}),[n,r]=(0,X.useState)(()=>Array.from({length:100},t)),[i,s]=ue(),c=(0,X.useRef)(!1);return(0,Z.jsxs)(`div`,{style:{height:`100vh`,width:`400px`,display:`flex`,flexDirection:`column`},children:[(0,Z.jsx)(Q.Provider,{value:i,children:(0,Z.jsx)(`div`,{style:{overflowY:`auto`,flex:1},children:(0,Z.jsx)(a,{as:ge,onScroll:()=>{let e=c.current;c.current=!0,e!==c.current&&s(!1)},onScrollEnd:()=>{c.current=!1,s(!0)},children:n.map((e,t)=>(0,Z.jsx)(he,{isStart:t===0,isEnd:t===n.length-1,onUp:()=>{r(e=>{let n=[...e];return n.splice(t-1,0,n.splice(t,1)[0]),n})},onDown:()=>{r(e=>{let n=[...e];return n.splice(t+1,0,n.splice(t,1)[0]),n})},onDelete:()=>{r(e=>{let n=[...e];return n.splice(t,1),n})},children:e.data},e.id))})})}),(0,Z.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,padding:8,height:40,maxHeight:40,background:`white`},children:(0,Z.jsx)(`button`,{onClick:()=>{r(e=>[...e,t()])},children:`append`})})]})}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},_e=[`Default`]})))()}ve();export{$ as Default,_e as __namedExportsOrder,me as default};