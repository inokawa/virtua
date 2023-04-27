import{j as x}from"./jsx-runtime-6c4ce591.js";import{r as _}from"./index-fcd6345f.js";const T=Math.min,q=Math.max,fe=Math.abs,G=Date.now,L=e=>e!=null,Q=(e,t)=>Array.from({length:e},(n,r)=>t(r)),de=(e,t)=>{let n;const r=()=>{L(n)&&clearTimeout(n)},s=()=>{r(),n=setTimeout(()=>{n=null,e()},t)};return s._cancel=r,s},me=(e,t)=>{let n=G()-t;return(...r)=>{const s=G();n+t<s&&(n=s,e(...r))}},W=-1,H=(e,t)=>{const n=e._sizes[t];return n===W?e._defaultItemSize:n},_e=(e,t,n)=>{e._sizes[t]=n,e._measuredOffsetIndex=T(t,e._measuredOffsetIndex)},oe=(e,t,n)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return n?e._offsets[t]+H(e,t):e._offsets[t];let r=e._measuredOffsetIndex,s=e._offsets[r];for(;r<=t&&(e._offsets[r]=s,!(r===t&&!n));)s+=H(e,r),r++;return e._measuredOffsetIndex=t,s},pe=e=>oe(e,e._length-1,!0),X=(e,t)=>oe(e,t),le=(e,t,n)=>{let r=0;if(n>=0)for(;t<e._length-1;){const s=H(e,t++);if((r+=s)>=n){r-s/2>=n&&t--;break}}else for(;t>0;){const s=H(e,--t);if((r-=s)<=n){r+s/2<n&&t++;break}}return T(q(t,0),e._length-1)},Z=(e,t,n,r)=>le(e,n,t-r),$=le,he=(e,t,n)=>{for(let r=t;r<=n;r++)if(e._sizes[r]===W)return!0;return!1},ee=(e,t,n)=>({_defaultItemSize:t,_length:e,_measuredOffsetIndex:n?T(n._measuredOffsetIndex,e-1):0,_sizes:Q(e,r=>{const s=n&&n._sizes[r];return L(s)?s:W}),_offsets:Q(e,r=>{if(r===0)return 0;const s=n&&n._offsets[r];return L(s)?s:W})}),ie=0,J=1,ue=2,N=3,ge=(e,t,n,r)=>{let s=0,m=0,p=0,a=[],i=ee(e,t),y=[0,0],g;const w=new Set,E=()=>n?s:m;return{_getRange(){const[u,c]=y,I=X(i,u),h=Z(i,p,u,I),o=$(i,h,E());return u===h&&c===o?y:y=[h,o]},_isUnmeasuredItem(u){return i._sizes[u]===W},_hasUnmeasuredItemsInRange(u){return he(i,u,$(i,u,E()))},_getItemOffset(u){return X(i,u)},_getScrollOffset(){return p},_getViewportSize(){return E()},_getScrollSize(){return pe(i)},_getItemCount(){return i._length},_getJump(){return a},_isHorizontal(){return n},_isRtl(){return r},_getItemIndexForScrollTo(u){return Z(i,u,0,0)},_waitForScrollDestinationItemsMeasured(){return g&&g[1](),new Promise((u,c)=>{g=[()=>{Promise.resolve().then(()=>{u(),g=void 0})},c]})},_subscribe(u){return w.add(u),()=>{w.delete(u)}},_update(u,c){(()=>{switch(u){case ie:return i._length===c?!1:(i=ee(c,t,i),!0);case J:{const h=c.filter(([f,l])=>i._sizes[f]!==l);if(!h.length)return!1;const o=[];return h.forEach(([f,l])=>{o.push([f,l-H(i,f)]),_e(i,f,l)}),a=o,!0}case ue:return s===c._width&&m===c._height?!1:(s=c._width,m=c._height,!0);case N:{const h=p;return(p=c)!==h}}})()&&(w.forEach(h=>{h()}),g&&u===J&&g[0]())}}},A=typeof window<"u"?_.useLayoutEffect:_.useEffect;var K={},Se={get exports(){return K},set exports(e){K=e}},ce={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V=_;function ve(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var we=typeof Object.is=="function"?Object.is:ve,Ie=V.useState,ye=V.useEffect,be=V.useLayoutEffect,ze=V.useDebugValue;function Ee(e,t){var n=t(),r=Ie({inst:{value:n,getSnapshot:t}}),s=r[0].inst,m=r[1];return be(function(){s.value=n,s.getSnapshot=t,F(s)&&m({inst:s})},[e,n,t]),ye(function(){return F(s)&&m({inst:s}),e(function(){F(s)&&m({inst:s})})},[e]),ze(n),n}function F(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!we(e,n)}catch{return!0}}function Oe(e,t){return t()}var Re=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Oe:Ee;ce.useSyncExternalStore=V.useSyncExternalStore!==void 0?V.useSyncExternalStore:Re;(function(e){e.exports=ce})(Se);const M=(e,t)=>K.useSyncExternalStore(e,t,t),k=0,Ce=1,te=2,j=3,xe=(e,t,n)=>{let r=-1,s=k,m=!1,p,a,i;const y=e._isHorizontal(),g=e._isRtl(),w=y?"scrollLeft":"scrollTop",E=new WeakMap,u=()=>i||(i=new ResizeObserver(o=>{const f=[];for(const l of o)if(l.target===a)e._update(ue,{_width:l.contentRect.width,_height:l.contentRect.height});else{const d=E.get(l.target);L(d)&&f.push([d,l.contentRect[y?"width":"height"]])}f.length&&(e._update(J,f),m=!0)})),c=()=>a?e._isHorizontal()?a.scrollWidth:a.scrollHeight:0,I=(o,f)=>{if(a){if(g){if(!L(p)){const l=a[w];a[w]=1,p=a[w]===0,a[w]=l}p&&(o*=-1)}f?a[w]+=o:(a[w]=o,s=j)}},h=async(o,f)=>{const l=()=>{let d=f();const S=c(),b=e._getViewportSize();return S-(d+b)<=0&&(d=S-b),d};if(e._hasUnmeasuredItemsInRange(o)){do{e._update(N,l());try{await e._waitForScrollDestinationItemsMeasured()}catch{return}}while(e._hasUnmeasuredItemsInRange(o));I(l())}else{const d=l();I(d),e._update(N,d)}};return{_initRoot(o){a=o;const f=u(),l=()=>{let v=o[w];g&&(v=fe(v)),r!==v&&(s===k||!m?s!==j&&(s=r>v?te:Ce):m=!1,e._update(N,r=v),t(v))},d=de(()=>{l(),s=k,n(!1)},150),S=()=>{const v=s===k;l(),v&&n(!0),d()},b=me(v=>{s!==k&&(v.ctrlKey||(y?v.deltaX:v.deltaY)&&r>0&&r<e._getScrollSize()-e._getViewportSize()&&d())},50);return f.observe(o),o.addEventListener("scroll",S),o.addEventListener("wheel",b,{passive:!0}),()=>{f.disconnect(),o.removeEventListener("scroll",S),o.removeEventListener("wheel",b),d._cancel()}},_initItem(o,f){const l=u();return E.set(o,f),l.observe(o),()=>{E.delete(o),l.unobserve(o)}},_getActualScrollSize:c,_scrollTo(o){o=q(o,0),h(e._getItemIndexForScrollTo(o),()=>o)},_scrollToIndex(o,f){o=q(T(o,f-1),0),h(o,()=>e._getItemOffset(o))},_fixScrollJump:(o,f)=>{if(s===te){const l=o.reduce((d,[,S])=>d+S,0);l&&I(l,!0)}else if(s===j){const l=e._getScrollOffset();if(l!==0){const d=o.reduce((S,[,b])=>S+b,0);if(e._getScrollSize()-(l+e._getViewportSize()+d)<=0)d&&I(l+d);else{const S=o.reduce((b,[v,U])=>(v<f&&(b+=U),b),0);S&&I(S,!0)}}}}}},C="current",ne=e=>{const t=_.useRef();return t[C]||(t[C]=e())},re=e=>{const t=_.useRef(e);return A(()=>{t[C]=e},[e]),_.useCallback((...n)=>{t[C]&&t[C](...n)},[])},Te=_.memo(({_children:e,_scroller:t,_store:n,_index:r,_element:s})=>{const m=_.useRef(null),p=M(n._subscribe,()=>n._getItemOffset(r)),a=M(n._subscribe,()=>n._isUnmeasuredItem(r));return A(()=>t._initItem(m[C],r),[r]),x(s,{ref:m,style:_.useMemo(()=>{const i=n._isHorizontal(),y=n._isRtl()?"right":"left",g={margin:0,padding:0,position:"absolute",[i?"height":"width"]:"100%",[i?"top":y]:0,[i?y:"top"]:p};return i&&(g.display="flex"),a&&(g.visibility="hidden"),g},[p,a]),children:e})}),Le=e=>!L(e)||typeof e=="boolean",Ve=_.forwardRef(({children:e,style:t,scrollSize:n,scrolling:r,horizontal:s,rtl:m},p)=>x("div",{ref:p,style:t,children:x("div",{style:_.useMemo(()=>{const a=s?n:"100%",i=s?"100%":n;return{position:"absolute",top:0,[m?"right":"left"]:0,width:a,height:i,minWidth:a,minHeight:i,pointerEvents:r?"none":"auto"}},[n,r]),children:e})})),ke=({_children:e,_ref:t,_store:n,_element:r,_scrolling:s,_style:m})=>{const p=M(n._subscribe,n._getScrollSize),a=n._isHorizontal();return x(r,{ref:t,scrollSize:p,scrolling:s,horizontal:a,rtl:n._isRtl(),style:_.useMemo(()=>({overflow:a?"auto hidden":"hidden auto",position:"relative",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...m}),[m]),children:e})},se=_.forwardRef(({children:e,itemSize:t=40,overscan:n=4,horizontal:r,rtl:s,style:m,element:p=Ve,itemElement:a="div",onScroll:i,onScrollStop:y,onRangeChange:g},w)=>{const E=_.useMemo(()=>{const z=[];return _.Children.forEach(e,O=>{Le(O)||z.push(O)}),z},[e]),u=E.length,c=ne(()=>ge(u,t,!!r,!!s)),[I,h]=M(c._subscribe,c._getRange),o=M(c._subscribe,c._getJump),f=_.useRef(null),l=re(i),d=re(y),[S,b]=_.useState(new Set),[v,U]=_.useState(!1),R=ne(()=>xe(c,l,z=>{U(z),z||(b(new Set),d())})),P=T(u,c._getItemCount());A(()=>{c._update(ie,u)},[u]),A(()=>R._initRoot(f[C]),[]),A(()=>{o.length&&R._fixScrollJump(o,I)},[o]),_.useEffect(()=>{g&&g({start:I,end:h,count:P})},[I,h]),_.useImperativeHandle(w,()=>({get scrollOffset(){return c._getScrollOffset()},get scrollSize(){return R._getActualScrollSize()},scrollToIndex(z){R._scrollToIndex(z,P)},scrollTo:R._scrollTo,scrollBy(z){R._scrollTo(c._getScrollOffset()+z)}}),[P]);const Y=q(I-n,0),B=T(h+n,P-1),ae=_.useMemo(()=>{const z=[];for(let O=Y;O<=B;O++)S.add(O);return S.forEach(O=>{const D=E[O];z.push(x(Te,{_scroller:R,_store:c,_index:O,_element:a,_children:D},(D==null?void 0:D.key)||O))}),z},[E,S,Y,B]);return x(ke,{_ref:f,_store:c,_element:p,_scrolling:v,_style:m,_children:ae})});try{se.displayName="List",se.__docgenInfo={description:"Virtualized list component. See {@link ListProps} and {@link ListHandle}.",displayName:"List",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},itemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"itemSize",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},rtl:{defaultValue:null,description:"You have to set true if you use this component under `direction: rtl` style.",name:"rtl",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Inline style prop to override style of scrollable element.",name:"style",required:!1,type:{name:"CSSProperties"}},element:{defaultValue:{value:`forwardRef<any, CustomWindowComponentProps>(
  (
    { children, style, scrollSize, scrolling, horizontal, rtl },
    ref
  ): ReactElement => {
    return (
      <div ref={ref} style={style}>
        <div
          style={useMemo((): CSSProperties => {
            const width = horizontal ? scrollSize : "100%";
            const height = horizontal ? "100%" : scrollSize;
            return {
              position: "absolute",
              top: 0,
              [rtl ? "right" : "left"]: 0,
              width,
              height,
              minWidth: width,
              minHeight: height,
              pointerEvents: scrolling ? "none" : "auto",
            };
          }, [scrollSize, scrolling])}
        >
          {children}
        </div>
      </div>
    );
  }
)`},description:`Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
@defaultValue {@link DefaultWindow }`,name:"element",required:!1,type:{name:"ForwardRefExoticComponent<CustomWindowComponentProps & RefAttributes<any>>"}},itemElement:{defaultValue:{value:"div"},description:`Customized element type for item element. This element will get {@link CustomItemComponentProps} as props.
@defaultValue "div"`,name:"itemElement",required:!1,type:{name:"CustomItemComponentOrElement"}},onScroll:{defaultValue:null,description:`Callback invoked whenever scroll offset changes.
@param offset Current scrollTop or scrollLeft.`,name:"onScroll",required:!1,type:{name:"(offset: number) => void"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.\n@param payload `start` is the start index of viewable items. `end` is the end index of viewable items. `count` is the total count of items.",name:"onRangeChange",required:!1,type:{name:"(payload: { start: number; end: number; count: number; }) => void"}}}}}catch{}export{se as L};
//# sourceMappingURL=List-caf073c5.js.map
