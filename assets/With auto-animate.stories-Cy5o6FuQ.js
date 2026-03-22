import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Da9Y0ZE5.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{a as i,t as a}from"./src-CBByf-Sv.js";import{n as o,t as s}from"./dist-BeG0fXPU.js";function c(e){let t=e.getBoundingClientRect(),n=F?.clientWidth||0,r=F?.clientHeight||0;return t.bottom<0||t.top>r||t.right<0||t.left>n}function l(e){k.get(e)?.disconnect();let t=E.get(e),n=0;t||(t=g(e),E.set(e,t));let{offsetWidth:r,offsetHeight:i}=F,a=[t.top-5,r-(t.left+5+t.width),i-(t.top+5+t.height),t.left-5].map(e=>`${-1*Math.floor(e)}px`).join(` `),o=new IntersectionObserver(()=>{++n>1&&u(e)},{root:F,threshold:1,rootMargin:a});o.observe(e),k.set(e,o)}function u(e,t=!0){clearTimeout(N.get(e));let n=v(e),r=t?C(n)?500:n.duration:0;N.set(e,setTimeout(async()=>{let t=O.get(e);try{await t?.finished,E.set(e,g(e)),l(e)}catch{}},r))}function d(){clearTimeout(N.get(F)),N.set(F,setTimeout(()=>{T.forEach(e=>x(e,e=>p(()=>u(e))))},100))}function f(e){setTimeout(()=>{j.set(e,setInterval(()=>p(u.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function p(e){typeof requestIdleCallback==`function`?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}function ee(e){return e.reduce((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)],[]).every(e=>e.nodeName===`#comment`)?!1:e.reduce((e,t)=>{if(e===!1)return!1;if(t.target instanceof Element){if(m(t.target),!e.has(t.target)){e.add(t.target);for(let n=0;n<t.target.children.length;n++){let r=t.target.children.item(n);if(r){if(z in r)return!1;m(t.target,r),e.add(r)}}}if(t.removedNodes.length)for(let n=0;n<t.removedNodes.length;n++){let r=t.removedNodes[n];if(z in r)return!1;r instanceof Element&&(e.add(r),m(t.target,r),D.set(r,[t.previousSibling,t.nextSibling]))}}return e},new Set)}function m(e,t){!t&&!(R in e)?Object.defineProperty(e,R,{value:e}):t&&!(R in t)&&Object.defineProperty(t,R,{value:e})}function te(e){var t;let n=e.isConnected,r=E.has(e);n&&D.has(e)&&D.delete(e),O.get(e)?.playState!==`finished`&&((t=O.get(e))==null||t.cancel()),B in e?ie(e):r&&n?re(e):r&&!n?ae(e):ie(e)}function h(e){return Number(e.replace(/[^0-9.\-]/g,``))}function ne(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}function g(e){let t=e.getBoundingClientRect(),{x:n,y:r}=ne(e);return{top:t.top+r,left:t.left+n,width:t.width,height:t.height}}function _(e,t,n){let r=t.width,i=t.height,a=n.width,o=n.height,s=getComputedStyle(e);if(s.getPropertyValue(`box-sizing`)===`content-box`){let e=h(s.paddingTop)+h(s.paddingBottom)+h(s.borderTopWidth)+h(s.borderBottomWidth),t=h(s.paddingLeft)+h(s.paddingRight)+h(s.borderRightWidth)+h(s.borderLeftWidth);r-=t,a-=t,i-=e,o-=e}return[r,a,i,o].map(Math.round)}function v(e){return R in e&&M.has(e[R])?M.get(e[R]):{duration:250,easing:`ease-in-out`}}function y(e){if(R in e)return e[R]}function b(e){let t=y(e);return t?P.has(t):!1}function x(e,...t){t.forEach(t=>t(e,M.has(e)));for(let n=0;n<e.children.length;n++){let r=e.children.item(n);r&&t.forEach(e=>e(r,M.has(r)))}}function S(e){return Array.isArray(e)?e:[e]}function C(e){return typeof e==`function`}function re(e){let t=E.get(e),n=g(e);if(!b(e))return E.set(e,n);if(c(e)){E.set(e,n),l(e);return}let r;if(!t)return;let i=v(e);if(typeof i!=`function`){let a=t.left-n.left,o=t.top-n.top,s=t.left+t.width-(n.left+n.width);t.top+t.height-(n.top+n.height)==0&&(o=0),s==0&&(a=0);let[c,l,u,d]=_(e,t,n),f={transform:`translate(${a}px, ${o}px)`},p={transform:`translate(0, 0)`};c!==l&&(f.width=`${c}px`,p.width=`${l}px`),u!==d&&(f.height=`${u}px`,p.height=`${d}px`),r=e.animate([f,p],{duration:i.duration,easing:i.easing})}else{let[a]=S(i(e,`remain`,t,n));r=new Animation(a),r.play()}O.set(e,r),E.set(e,n),r.addEventListener(`finish`,u.bind(null,e,!1),{once:!0})}function ie(e){B in e&&delete e[B];let t=g(e);E.set(e,t);let n=v(e);if(!b(e))return;if(c(e)){l(e);return}let r;if(typeof n!=`function`)r=e.animate([{transform:`scale(.98)`,opacity:0},{transform:`scale(0.98)`,opacity:0,offset:.5},{transform:`scale(1)`,opacity:1}],{duration:n.duration*1.5,easing:`ease-in`});else{let[i]=S(n(e,`add`,t));r=new Animation(i),r.play()}O.set(e,r),r.addEventListener(`finish`,u.bind(null,e,!1),{once:!0})}function w(e,t){var n;e.remove(),E.delete(e),D.delete(e),O.delete(e),(n=k.get(e))==null||n.disconnect(),setTimeout(()=>{if(z in e&&delete e[z],Object.defineProperty(e,B,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(let n in t)e.style[n]=``},0)}function ae(e){var t;if(!D.has(e)||!E.has(e))return;let[n,r]=D.get(e);Object.defineProperty(e,z,{value:!0,configurable:!0});let i=window.scrollX,a=window.scrollY;if(r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(e,r):n&&n.parentNode?n.parentNode.appendChild(e):(t=y(e))==null||t.appendChild(e),!b(e))return w(e);let[o,s,c,l]=se(e),u=v(e),d=E.get(e);(i!==I||a!==L)&&oe(e,i,a,u);let f,p={position:`absolute`,top:`${o}px`,left:`${s}px`,width:`${c}px`,height:`${l}px`,margin:`0`,pointerEvents:`none`,transformOrigin:`center`,zIndex:`100`};if(!C(u))Object.assign(e.style,p),f=e.animate([{transform:`scale(1)`,opacity:1},{transform:`scale(.98)`,opacity:0}],{duration:u.duration,easing:`ease-out`});else{let[t,n]=S(u(e,`remove`,d));n?.styleReset!==!1&&(p=n?.styleReset||p,Object.assign(e.style,p)),f=new Animation(t),f.play()}O.set(e,f),f.addEventListener(`finish`,()=>w(e,p),{once:!0})}function oe(e,t,n,r){let i=I-t,a=L-n,o=document.documentElement.style.scrollBehavior;if(getComputedStyle(F).scrollBehavior===`smooth`&&(document.documentElement.style.scrollBehavior=`auto`),window.scrollTo(window.scrollX+i,window.scrollY+a),!e.parentElement)return;let s=e.parentElement,c=s.clientHeight,l=s.clientWidth,u=performance.now();function d(){requestAnimationFrame(()=>{if(!C(r)){let e=c-s.clientHeight,t=l-s.clientWidth;u+r.duration>performance.now()?(window.scrollTo({left:window.scrollX-t,top:window.scrollY-e}),c=s.clientHeight,l=s.clientWidth,d()):document.documentElement.style.scrollBehavior=o}})}d()}function se(e){let t=E.get(e),[n,,r]=_(e,t,g(e)),i=e.parentElement;for(;i&&(getComputedStyle(i).position===`static`||i instanceof HTMLBodyElement);)i=i.parentElement;i||=document.body;let a=getComputedStyle(i),o=!O.has(e)||O.get(e)?.playState===`finished`?g(i):E.get(i);return[Math.round(t.top-o.top)-h(a.borderTopWidth),Math.round(t.left-o.left)-h(a.borderLeftWidth),n,r]}function ce(e,t={}){if(W&&U&&!(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches&&!C(t)&&!t.disrespectUserMotionPreference)){P.add(e),getComputedStyle(e).position===`static`&&Object.assign(e.style,{position:`relative`}),x(e,u,f,e=>U?.observe(e)),C(t)?M.set(e,t):M.set(e,{duration:250,easing:`ease-in-out`,...t});let n=new MutationObserver(V);n.observe(e,{childList:!0}),A.set(e,n),T.add(e)}return Object.freeze({parent:e,enable:()=>{P.add(e)},disable:()=>{P.delete(e),x(e,e=>{let t=O.get(e);try{t?.cancel()}catch{}O.delete(e);let n=N.get(e);n&&clearTimeout(n),N.delete(e);let r=j.get(e);r&&clearInterval(r),j.delete(e)})},isEnabled:()=>P.has(e),destroy:()=>{P.delete(e),T.delete(e),M.delete(e),A.get(e)?.disconnect(),A.delete(e),x(e,e=>{U?.unobserve(e);let t=O.get(e);try{t?.cancel()}catch{}O.delete(e),k.get(e)?.disconnect(),k.delete(e);let n=j.get(e);n&&clearInterval(n),j.delete(e);let r=N.get(e);r&&clearTimeout(r),N.delete(e),E.delete(e),D.delete(e)})}})}var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,le=t((()=>{T=new Set,E=new WeakMap,D=new WeakMap,O=new WeakMap,k=new WeakMap,A=new WeakMap,j=new WeakMap,M=new WeakMap,N=new WeakMap,P=new WeakSet,I=0,L=0,R=`__aa_tgt`,z=`__aa_del`,B=`__aa_new`,V=e=>{let t=ee(e);t&&t.forEach(e=>te(e))},H=e=>{e.forEach(e=>{e.target===F&&d(),E.has(e.target)&&u(e.target)})},W=typeof window<`u`&&`ResizeObserver`in window,W&&(F=document.documentElement,new MutationObserver(V),U=new ResizeObserver(H),window.addEventListener(`scroll`,()=>{L=window.scrollY,I=window.scrollX}),U.observe(F))}));function ue(e){let[t,n]=(0,G.useState)(),r=(0,G.useMemo)(()=>e,[]),i=(0,G.useCallback)(e=>{e instanceof HTMLElement?n(ce(e,r)):n(void 0)},[r]),a=(0,G.useCallback)(e=>{t&&(e?t.enable():t.disable())},[t]);return(0,G.useEffect)(()=>()=>{var e;(e=t?.destroy)==null||e.call(t)},[t]),[i,a]}var G,de=t((()=>{G=e(n(),1),le()}));function fe(e){return t=>{for(let n of e)K(n,t)}}function pe(e){return t=>{let n=[];for(let r of e){let e=K(r,t),i=typeof e==`function`;n.push(i?e:()=>K(r,null))}return()=>{for(let e of n)e()}}}function K(e,t){if(typeof e==`function`)return e(t);e&&(e.current=t)}var q,J,me=t((()=>{q=e(n(),1),J=parseInt(q.version.split(`.`)[0],10)>=19?pe:fe})),Y,X,Z,he,Q,ge,$,_e;t((()=>{a(),Y=e(n(),1),de(),s(),me(),X=r(),Z={component:i},he=({children:e,isStart:t,isEnd:n,onUp:r,onDown:i,onDelete:a})=>(0,X.jsxs)(`div`,{style:{padding:10,height:40,display:`flex`,borderBottom:`solid 1px #ccc`,background:`#fff`},children:[(0,X.jsx)(`div`,{style:{flex:1},children:e}),(0,X.jsxs)(`div`,{style:{display:`flex`},children:[(0,X.jsx)(`button`,{disabled:t,onClick:r,children:`up`}),(0,X.jsx)(`button`,{disabled:n,onClick:i,children:`down`}),(0,X.jsx)(`button`,{onClick:a,children:`delete`})]})]}),Q=(0,Y.createContext)(null),ge=(0,Y.forwardRef)((e,t)=>{let n=(0,Y.useContext)(Q);return(0,X.jsx)(`div`,{ref:(0,Y.useMemo)(()=>J([t,n]),[t,n]),...e})}),$={name:`With auto-animate`,render:()=>{let e=(0,Y.useRef)(0),t=()=>({id:++e.current,data:o.music.songName()}),[n,r]=(0,Y.useState)(()=>Array.from({length:100},t)),[a,s]=ue(),c=(0,Y.useRef)(!1);return(0,X.jsxs)(`div`,{style:{height:`100vh`,width:`400px`,display:`flex`,flexDirection:`column`},children:[(0,X.jsx)(Q.Provider,{value:a,children:(0,X.jsx)(`div`,{style:{overflowY:`auto`,flex:1},children:(0,X.jsx)(i,{as:ge,onScroll:()=>{let e=c.current;c.current=!0,e!==c.current&&s(!1)},onScrollEnd:()=>{c.current=!1,s(!0)},children:n.map((e,t)=>(0,X.jsx)(he,{isStart:t===0,isEnd:t===n.length-1,onUp:()=>{r(e=>{let n=[...e];return n.splice(t-1,0,n.splice(t,1)[0]),n})},onDown:()=>{r(e=>{let n=[...e];return n.splice(t+1,0,n.splice(t,1)[0]),n})},onDelete:()=>{r(e=>{let n=[...e];return n.splice(t,1),n})},children:e.data},e.id))})})}),(0,X.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,padding:8,height:40,maxHeight:40,background:`white`},children:(0,X.jsx)(`button`,{onClick:()=>{r(e=>[...e,t()])},children:`append`})})]})}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},_e=[`Default`]}))();export{$ as Default,_e as __namedExportsOrder,Z as default};