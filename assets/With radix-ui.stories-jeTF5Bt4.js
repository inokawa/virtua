import{a as w,j as q}from"./jsx-runtime-sgeEVxPu.js";import{r as t}from"./index-yp3VsGQP.js";import{f as me}from"./index-KLTnsmU9.js";import{_ as h}from"./extends-dGVwEr9R.js";import{r as be}from"./index-8dy-jdxy.js";import{V as te}from"./VList-CbmB9Duj.js";import"./useRerender-5UbPLih8.js";import"./useChildren-7Kvug2i9.js";function he(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function re(...e){return r=>e.forEach(o=>he(o,r))}function P(...e){return t.useCallback(re(...e),e)}const oe=t.forwardRef((e,r)=>{const{children:o,...c}=e,n=t.Children.toArray(o),l=n.find(Se);if(l){const a=l.props.children,s=n.map(i=>i===l?t.Children.count(a)>1?t.Children.only(null):t.isValidElement(a)?a.props.children:null:i);return t.createElement(k,h({},c,{ref:r}),t.isValidElement(a)?t.cloneElement(a,void 0,s):null)}return t.createElement(k,h({},c,{ref:r}),o)});oe.displayName="Slot";const k=t.forwardRef((e,r)=>{const{children:o,...c}=e;return t.isValidElement(o)?t.cloneElement(o,{...ve(c,o.props),ref:r?re(r,o.ref):o.ref}):t.Children.count(o)>1?t.Children.only(null):null});k.displayName="SlotClone";const pe=({children:e})=>t.createElement(t.Fragment,null,e);function Se(e){return t.isValidElement(e)&&e.type===pe}function ve(e,r){const o={...r};for(const c in r){const n=e[c],l=r[c];/^on[A-Z]/.test(c)?n&&l?o[c]=(...s)=>{l(...s),n(...s)}:n&&(o[c]=n):c==="style"?o[c]={...n,...l}:c==="className"&&(o[c]=[n,l].filter(Boolean).join(" "))}return{...e,...o}}const $e=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],_=$e.reduce((e,r)=>{const o=t.forwardRef((c,n)=>{const{asChild:l,...a}=c,s=l?oe:r;return t.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),t.createElement(s,h({},a,{ref:n}))});return o.displayName=`Primitive.${r}`,{...e,[r]:o}},{}),B=globalThis!=null&&globalThis.document?t.useLayoutEffect:()=>{};function we(e,r){return t.useReducer((o,c)=>{const n=r[o][c];return n??o},e)}const L=e=>{const{present:r,children:o}=e,c=ge(r),n=typeof o=="function"?o({present:c.isPresent}):t.Children.only(o),l=P(c.ref,n.ref);return typeof o=="function"||c.isPresent?t.cloneElement(n,{ref:l}):null};L.displayName="Presence";function ge(e){const[r,o]=t.useState(),c=t.useRef({}),n=t.useRef(e),l=t.useRef("none"),a=e?"mounted":"unmounted",[s,i]=we(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return t.useEffect(()=>{const d=I(c.current);l.current=s==="mounted"?d:"none"},[s]),B(()=>{const d=c.current,u=n.current;if(u!==e){const f=l.current,b=I(d);e?i("MOUNT"):b==="none"||(d==null?void 0:d.display)==="none"?i("UNMOUNT"):i(u&&f!==b?"ANIMATION_OUT":"UNMOUNT"),n.current=e}},[e,i]),B(()=>{if(r){const d=m=>{const b=I(c.current).includes(m.animationName);m.target===r&&b&&be.flushSync(()=>i("ANIMATION_END"))},u=m=>{m.target===r&&(l.current=I(c.current))};return r.addEventListener("animationstart",u),r.addEventListener("animationcancel",d),r.addEventListener("animationend",d),()=>{r.removeEventListener("animationstart",u),r.removeEventListener("animationcancel",d),r.removeEventListener("animationend",d)}}else i("ANIMATION_END")},[r,i]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:t.useCallback(d=>{d&&(c.current=getComputedStyle(d)),o(d)},[])}}function I(e){return(e==null?void 0:e.animationName)||"none"}function Ee(e,r=[]){let o=[];function c(l,a){const s=t.createContext(a),i=o.length;o=[...o,a];function d(m){const{scope:f,children:b,...p}=m,E=(f==null?void 0:f[e][i])||s,y=t.useMemo(()=>p,Object.values(p));return t.createElement(E.Provider,{value:y},b)}function u(m,f){const b=(f==null?void 0:f[e][i])||s,p=t.useContext(b);if(p)return p;if(a!==void 0)return a;throw new Error(`\`${m}\` must be used within \`${l}\``)}return d.displayName=l+"Provider",[d,u]}const n=()=>{const l=o.map(a=>t.createContext(a));return function(s){const i=(s==null?void 0:s[e])||l;return t.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])}};return n.scopeName=e,[c,Ce(n,...r)]}function Ce(...e){const r=e[0];if(e.length===1)return r;const o=()=>{const c=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(l){const a=c.reduce((s,{useScope:i,scopeName:d})=>{const m=i(l)[`__scope${d}`];return{...s,...m}},{});return t.useMemo(()=>({[`__scope${r.scopeName}`]:a}),[a])}};return o.scopeName=r.scopeName,o}function x(e){const r=t.useRef(e);return t.useEffect(()=>{r.current=e}),t.useMemo(()=>(...o)=>{var c;return(c=r.current)===null||c===void 0?void 0:c.call(r,...o)},[])}const xe=t.createContext(void 0);function Ae(e){const r=t.useContext(xe);return e||r||"ltr"}function Pe(e,[r,o]){return Math.min(o,Math.max(r,e))}function A(e,r,{checkForDefaultPrevented:o=!0}={}){return function(n){if(e==null||e(n),o===!1||!n.defaultPrevented)return r==null?void 0:r(n)}}function Te(e,r){return t.useReducer((o,c)=>{const n=r[o][c];return n??o},e)}const ne="ScrollArea",[ce,ct]=Ee(ne),[Re,v]=ce(ne),ye=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,type:c="hover",dir:n,scrollHideDelay:l=600,...a}=e,[s,i]=t.useState(null),[d,u]=t.useState(null),[m,f]=t.useState(null),[b,p]=t.useState(null),[E,y]=t.useState(null),[C,D]=t.useState(0),[Y,M]=t.useState(0),[O,N]=t.useState(!1),[z,W]=t.useState(!1),S=P(r,T=>i(T)),$=Ae(n);return t.createElement(Re,{scope:o,type:c,dir:$,scrollHideDelay:l,scrollArea:s,viewport:d,onViewportChange:u,content:m,onContentChange:f,scrollbarX:b,onScrollbarXChange:p,scrollbarXEnabled:O,onScrollbarXEnabledChange:N,scrollbarY:E,onScrollbarYChange:y,scrollbarYEnabled:z,onScrollbarYEnabledChange:W,onCornerWidthChange:D,onCornerHeightChange:M},t.createElement(_.div,h({dir:$},a,{ref:S,style:{position:"relative","--radix-scroll-area-corner-width":C+"px","--radix-scroll-area-corner-height":Y+"px",...e.style}})))}),Ne="ScrollAreaViewport",_e=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,children:c,...n}=e,l=v(Ne,o),a=t.useRef(null),s=P(r,a,l.onViewportChange);return t.createElement(t.Fragment,null,t.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),t.createElement(_.div,h({"data-radix-scroll-area-viewport":""},n,{ref:s,style:{overflowX:l.scrollbarXEnabled?"scroll":"hidden",overflowY:l.scrollbarYEnabled?"scroll":"hidden",...e.style}}),t.createElement("div",{ref:l.onContentChange,style:{minWidth:"100%",display:"table"}},c)))}),g="ScrollAreaScrollbar",Le=t.forwardRef((e,r)=>{const{forceMount:o,...c}=e,n=v(g,e.__scopeScrollArea),{onScrollbarXEnabledChange:l,onScrollbarYEnabledChange:a}=n,s=e.orientation==="horizontal";return t.useEffect(()=>(s?l(!0):a(!0),()=>{s?l(!1):a(!1)}),[s,l,a]),n.type==="hover"?t.createElement(De,h({},c,{ref:r,forceMount:o})):n.type==="scroll"?t.createElement(Me,h({},c,{ref:r,forceMount:o})):n.type==="auto"?t.createElement(le,h({},c,{ref:r,forceMount:o})):n.type==="always"?t.createElement(j,h({},c,{ref:r})):null}),De=t.forwardRef((e,r)=>{const{forceMount:o,...c}=e,n=v(g,e.__scopeScrollArea),[l,a]=t.useState(!1);return t.useEffect(()=>{const s=n.scrollArea;let i=0;if(s){const d=()=>{window.clearTimeout(i),a(!0)},u=()=>{i=window.setTimeout(()=>a(!1),n.scrollHideDelay)};return s.addEventListener("pointerenter",d),s.addEventListener("pointerleave",u),()=>{window.clearTimeout(i),s.removeEventListener("pointerenter",d),s.removeEventListener("pointerleave",u)}}},[n.scrollArea,n.scrollHideDelay]),t.createElement(L,{present:o||l},t.createElement(le,h({"data-state":l?"visible":"hidden"},c,{ref:r})))}),Me=t.forwardRef((e,r)=>{const{forceMount:o,...c}=e,n=v(g,e.__scopeScrollArea),l=e.orientation==="horizontal",a=X(()=>i("SCROLL_END"),100),[s,i]=Te("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return t.useEffect(()=>{if(s==="idle"){const d=window.setTimeout(()=>i("HIDE"),n.scrollHideDelay);return()=>window.clearTimeout(d)}},[s,n.scrollHideDelay,i]),t.useEffect(()=>{const d=n.viewport,u=l?"scrollLeft":"scrollTop";if(d){let m=d[u];const f=()=>{const b=d[u];m!==b&&(i("SCROLL"),a()),m=b};return d.addEventListener("scroll",f),()=>d.removeEventListener("scroll",f)}},[n.viewport,l,i,a]),t.createElement(L,{present:o||s!=="hidden"},t.createElement(j,h({"data-state":s==="hidden"?"hidden":"visible"},c,{ref:r,onPointerEnter:A(e.onPointerEnter,()=>i("POINTER_ENTER")),onPointerLeave:A(e.onPointerLeave,()=>i("POINTER_LEAVE"))})))}),le=t.forwardRef((e,r)=>{const o=v(g,e.__scopeScrollArea),{forceMount:c,...n}=e,[l,a]=t.useState(!1),s=e.orientation==="horizontal",i=X(()=>{if(o.viewport){const d=o.viewport.offsetWidth<o.viewport.scrollWidth,u=o.viewport.offsetHeight<o.viewport.scrollHeight;a(s?d:u)}},10);return R(o.viewport,i),R(o.content,i),t.createElement(L,{present:c||l},t.createElement(j,h({"data-state":l?"visible":"hidden"},n,{ref:r})))}),j=t.forwardRef((e,r)=>{const{orientation:o="vertical",...c}=e,n=v(g,e.__scopeScrollArea),l=t.useRef(null),a=t.useRef(0),[s,i]=t.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=de(s.viewport,s.content),u={...c,sizes:s,onSizesChange:i,hasThumb:d>0&&d<1,onThumbChange:f=>l.current=f,onThumbPointerUp:()=>a.current=0,onThumbPointerDown:f=>a.current=f};function m(f,b){return Xe(f,a.current,s,b)}return o==="horizontal"?t.createElement(Oe,h({},u,{ref:r,onThumbPositionChange:()=>{if(n.viewport&&l.current){const f=n.viewport.scrollLeft,b=G(f,s,n.dir);l.current.style.transform=`translate3d(${b}px, 0, 0)`}},onWheelScroll:f=>{n.viewport&&(n.viewport.scrollLeft=f)},onDragScroll:f=>{n.viewport&&(n.viewport.scrollLeft=m(f,n.dir))}})):o==="vertical"?t.createElement(ze,h({},u,{ref:r,onThumbPositionChange:()=>{if(n.viewport&&l.current){const f=n.viewport.scrollTop,b=G(f,s);l.current.style.transform=`translate3d(0, ${b}px, 0)`}},onWheelScroll:f=>{n.viewport&&(n.viewport.scrollTop=f)},onDragScroll:f=>{n.viewport&&(n.viewport.scrollTop=m(f))}})):null}),Oe=t.forwardRef((e,r)=>{const{sizes:o,onSizesChange:c,...n}=e,l=v(g,e.__scopeScrollArea),[a,s]=t.useState(),i=t.useRef(null),d=P(r,i,l.onScrollbarXChange);return t.useEffect(()=>{i.current&&s(getComputedStyle(i.current))},[i]),t.createElement(se,h({"data-orientation":"horizontal"},n,{ref:d,sizes:o,style:{bottom:0,left:l.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:l.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":H(o)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.x),onDragScroll:u=>e.onDragScroll(u.x),onWheelScroll:(u,m)=>{if(l.viewport){const f=l.viewport.scrollLeft+u.deltaX;e.onWheelScroll(f),fe(f,m)&&u.preventDefault()}},onResize:()=>{i.current&&l.viewport&&a&&c({content:l.viewport.scrollWidth,viewport:l.viewport.offsetWidth,scrollbar:{size:i.current.clientWidth,paddingStart:V(a.paddingLeft),paddingEnd:V(a.paddingRight)}})}}))}),ze=t.forwardRef((e,r)=>{const{sizes:o,onSizesChange:c,...n}=e,l=v(g,e.__scopeScrollArea),[a,s]=t.useState(),i=t.useRef(null),d=P(r,i,l.onScrollbarYChange);return t.useEffect(()=>{i.current&&s(getComputedStyle(i.current))},[i]),t.createElement(se,h({"data-orientation":"vertical"},n,{ref:d,sizes:o,style:{top:0,right:l.dir==="ltr"?0:void 0,left:l.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":H(o)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.y),onDragScroll:u=>e.onDragScroll(u.y),onWheelScroll:(u,m)=>{if(l.viewport){const f=l.viewport.scrollTop+u.deltaY;e.onWheelScroll(f),fe(f,m)&&u.preventDefault()}},onResize:()=>{i.current&&l.viewport&&a&&c({content:l.viewport.scrollHeight,viewport:l.viewport.offsetHeight,scrollbar:{size:i.current.clientHeight,paddingStart:V(a.paddingTop),paddingEnd:V(a.paddingBottom)}})}}))}),[We,ae]=ce(g),se=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,sizes:c,hasThumb:n,onThumbChange:l,onThumbPointerUp:a,onThumbPointerDown:s,onThumbPositionChange:i,onDragScroll:d,onWheelScroll:u,onResize:m,...f}=e,b=v(g,o),[p,E]=t.useState(null),y=P(r,S=>E(S)),C=t.useRef(null),D=t.useRef(""),Y=b.viewport,M=c.content-c.viewport,O=x(u),N=x(i),z=X(m,10);function W(S){if(C.current){const $=S.clientX-C.current.left,T=S.clientY-C.current.top;d({x:$,y:T})}}return t.useEffect(()=>{const S=$=>{const T=$.target;(p==null?void 0:p.contains(T))&&O($,M)};return document.addEventListener("wheel",S,{passive:!1}),()=>document.removeEventListener("wheel",S,{passive:!1})},[Y,p,M,O]),t.useEffect(N,[c,N]),R(p,z),R(b.content,z),t.createElement(We,{scope:o,scrollbar:p,hasThumb:n,onThumbChange:x(l),onThumbPointerUp:x(a),onThumbPositionChange:N,onThumbPointerDown:x(s)},t.createElement(_.div,h({},f,{ref:y,style:{position:"absolute",...f.style},onPointerDown:A(e.onPointerDown,S=>{S.button===0&&(S.target.setPointerCapture(S.pointerId),C.current=p.getBoundingClientRect(),D.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",b.viewport&&(b.viewport.style.scrollBehavior="auto"),W(S))}),onPointerMove:A(e.onPointerMove,W),onPointerUp:A(e.onPointerUp,S=>{const $=S.target;$.hasPointerCapture(S.pointerId)&&$.releasePointerCapture(S.pointerId),document.body.style.webkitUserSelect=D.current,b.viewport&&(b.viewport.style.scrollBehavior=""),C.current=null})})))}),F="ScrollAreaThumb",Ie=t.forwardRef((e,r)=>{const{forceMount:o,...c}=e,n=ae(F,e.__scopeScrollArea);return t.createElement(L,{present:o||n.hasThumb},t.createElement(Ue,h({ref:r},c)))}),Ue=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,style:c,...n}=e,l=v(F,o),a=ae(F,o),{onThumbPositionChange:s}=a,i=P(r,m=>a.onThumbChange(m)),d=t.useRef(),u=X(()=>{d.current&&(d.current(),d.current=void 0)},100);return t.useEffect(()=>{const m=l.viewport;if(m){const f=()=>{if(u(),!d.current){const b=Ye(m,s);d.current=b,s()}};return s(),m.addEventListener("scroll",f),()=>m.removeEventListener("scroll",f)}},[l.viewport,u,s]),t.createElement(_.div,h({"data-state":a.hasThumb?"visible":"hidden"},n,{ref:i,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...c},onPointerDownCapture:A(e.onPointerDownCapture,m=>{const b=m.target.getBoundingClientRect(),p=m.clientX-b.left,E=m.clientY-b.top;a.onThumbPointerDown({x:p,y:E})}),onPointerUp:A(e.onPointerUp,a.onThumbPointerUp)}))}),ie="ScrollAreaCorner",Ve=t.forwardRef((e,r)=>{const o=v(ie,e.__scopeScrollArea),c=!!(o.scrollbarX&&o.scrollbarY);return o.type!=="scroll"&&c?t.createElement(He,h({},e,{ref:r})):null}),He=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,...c}=e,n=v(ie,o),[l,a]=t.useState(0),[s,i]=t.useState(0),d=!!(l&&s);return R(n.scrollbarX,()=>{var u;const m=((u=n.scrollbarX)===null||u===void 0?void 0:u.offsetHeight)||0;n.onCornerHeightChange(m),i(m)}),R(n.scrollbarY,()=>{var u;const m=((u=n.scrollbarY)===null||u===void 0?void 0:u.offsetWidth)||0;n.onCornerWidthChange(m),a(m)}),d?t.createElement(_.div,h({},c,{ref:r,style:{width:l,height:s,position:"absolute",right:n.dir==="ltr"?0:void 0,left:n.dir==="rtl"?0:void 0,bottom:0,...e.style}})):null});function V(e){return e?parseInt(e,10):0}function de(e,r){const o=e/r;return isNaN(o)?0:o}function H(e){const r=de(e.viewport,e.content),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,c=(e.scrollbar.size-o)*r;return Math.max(c,18)}function Xe(e,r,o,c="ltr"){const n=H(o),l=n/2,a=r||l,s=n-a,i=o.scrollbar.paddingStart+a,d=o.scrollbar.size-o.scrollbar.paddingEnd-s,u=o.content-o.viewport,m=c==="ltr"?[0,u]:[u*-1,0];return ue([i,d],m)(e)}function G(e,r,o="ltr"){const c=H(r),n=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=r.scrollbar.size-n,a=r.content-r.viewport,s=l-c,i=o==="ltr"?[0,a]:[a*-1,0],d=Pe(e,i);return ue([0,a],[0,s])(d)}function ue(e,r){return o=>{if(e[0]===e[1]||r[0]===r[1])return r[0];const c=(r[1]-r[0])/(e[1]-e[0]);return r[0]+c*(o-e[0])}}function fe(e,r){return e>0&&e<r}const Ye=(e,r=()=>{})=>{let o={left:e.scrollLeft,top:e.scrollTop},c=0;return function n(){const l={left:e.scrollLeft,top:e.scrollTop},a=o.left!==l.left,s=o.top!==l.top;(a||s)&&r(),o=l,c=window.requestAnimationFrame(n)}(),()=>window.cancelAnimationFrame(c)};function X(e,r){const o=x(e),c=t.useRef(0);return t.useEffect(()=>()=>window.clearTimeout(c.current),[]),t.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(o,r)},[o,r])}function R(e,r){const o=x(r);B(()=>{let c=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(c),c=window.requestAnimationFrame(o)});return n.observe(e),()=>{window.cancelAnimationFrame(c),n.unobserve(e)}}},[e,o])}const ke=ye,Be=_e,Z=Le,J=Ie,Fe=Ve,je=Array.from({length:1e3}).map((e,r)=>({id:r,label:me.person.fullName()})),lt={component:te},qe=t.forwardRef(({children:e,attrs:r,width:o,height:c,scrolling:n},l)=>w(Be,{ref:l,...r,className:"ScrollAreaViewport",children:w("div",{style:{position:"relative",visibility:"hidden",width:o??"100%",height:c??"100%",pointerEvents:n?"none":"auto"},children:e})})),Ge=({children:e,style:r})=>w(te,{style:r,components:{Root:qe},children:e}),U={name:"With radix-ui",render:()=>q(ke,{className:"ScrollAreaRoot",children:[q(Ge,{style:{padding:"15px 20px",width:"auto"},children:[w("div",{className:"Text",children:"Tags"}),je.map(e=>w("div",{className:"Tag",children:e.label},e.id))]}),w(Z,{className:"ScrollAreaScrollbar",orientation:"vertical",children:w(J,{className:"ScrollAreaThumb"})}),w(Z,{className:"ScrollAreaScrollbar",orientation:"horizontal",children:w(J,{className:"ScrollAreaThumb"})}),w(Fe,{className:"ScrollAreaCorner"})]})};var K,Q,ee;U.parameters={...U.parameters,docs:{...(K=U.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "With radix-ui",
  render: () => {
    return <ScrollArea.Root className="ScrollAreaRoot">
        <VirtualizedViewport style={{
        padding: "15px 20px",
        width: "auto"
      }}>
          <div className="Text">Tags</div>
          {TAGS.map(tag => <div className="Tag" key={tag.id}>
              {tag.label}
            </div>)}
        </VirtualizedViewport>
        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
          <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
          <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="ScrollAreaCorner" />
      </ScrollArea.Root>;
  }
}`,...(ee=(Q=U.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};const at=["Default"];export{U as Default,at as __namedExportsOrder,lt as default};