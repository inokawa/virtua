import{j as x}from"./jsx-runtime-6c4ce591.js";import{r as d}from"./index-fcd6345f.js";const V=Math.min,q=Math.max,Se=Math.abs,Z=Date.now,k=e=>e!=null,B=(e,t)=>Array.from({length:e},(n,r)=>t(r)),ve=(e,t)=>{let n;const r=()=>{k(n)&&clearTimeout(n)},o=()=>{r(),n=setTimeout(()=>{n=null,e()},t)};return o._cancel=r,o},Ie=(e,t)=>{let n=Z()-t;return(...r)=>{const o=Z();n+t<o&&(n=o,e(...r))}},M=-1,N=(e,t)=>{const n=e._sizes[t];return n===M?e._defaultItemSize:n},we=(e,t,n)=>{e._sizes[t]=n,e._measuredOffsetIndex=V(t,e._measuredOffsetIndex)},ie=(e,t,n)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return n?e._offsets[t]+N(e,t):e._offsets[t];let r=e._measuredOffsetIndex,o=e._offsets[r];for(;r<=t&&(e._offsets[r]=o,!(r===t&&!n));)o+=N(e,r),r++;return e._measuredOffsetIndex=t,o},ye=e=>ie(e,e._length-1,!0),$=(e,t)=>ie(e,t),ue=(e,t,n)=>{let r=0;if(n>=0)for(;t<e._length-1;){const o=N(e,t++);if((r+=o)>=n){r-o/2>=n&&t--;break}}else for(;t>0;){const o=N(e,--t);if((r-=o)<=n){r+o/2<n&&t++;break}}return V(q(t,0),e._length-1)},ee=(e,t,n,r)=>ue(e,n,t-r),te=ue,Ee=(e,t,n)=>{for(let r=t;r<=n;r++)if(e._sizes[r]===M)return!0;return!1},ne=(e,t,n)=>({_defaultItemSize:t,_length:e,_measuredOffsetIndex:n?V(n._measuredOffsetIndex,e-1):0,_sizes:B(e,r=>{const o=n&&n._sizes[r];return k(o)?o:M}),_offsets:B(e,r=>{if(r===0)return 0;const o=n&&n._offsets[r];return k(o)?o:M})}),ce=0,K=1,ae=2,U=3,be=(e,t,n,r)=>{let o=0,m=0,g=0,u=[],l=ne(e,t),y=[0,0],I;const E=new Set,z=()=>n?o:m;return{_getRange(){const[i,_]=y,p=$(l,i),w=ee(l,g,i,p),s=te(l,w,z());return i===w&&_===s?y:y=[w,s]},_isUnmeasuredItem(i){return l._sizes[i]===M},_hasUnmeasuredItemsInRange(i){return Ee(l,i,te(l,i,z()))},_getItemOffset(i){return $(l,i)},_getScrollOffset(){return g},_getViewportSize(){return z()},_getScrollSize(){return ye(l)},_getItemCount(){return l._length},_getJump(){return u},_isHorizontal(){return n},_isRtl(){return r},_getItemIndexForScrollTo(i){return ee(l,i,0,0)},_waitForScrollDestinationItemsMeasured(){return I&&I[1](),new Promise((i,_)=>{I=[()=>{Promise.resolve().then(()=>{i(),I=void 0})},_]})},_subscribe(i){return E.add(i),()=>{E.delete(i)}},_update(i,_){(()=>{switch(i){case ce:return l._length===_?!1:(l=ne(_,t,l),!0);case K:{const w=_.filter(([a,c])=>l._sizes[a]!==c);if(!w.length)return!1;const s=[];return w.forEach(([a,c])=>{s.push([a,c-N(l,a)]),we(l,a,c)}),u=s,!0}case ae:return o===_._width&&m===_._height?!1:(o=_._width,m=_._height,!0);case U:{const w=g;return(g=_)!==w}}})()&&(E.forEach(w=>{w()}),I&&i===K&&I[0]())}}},D=typeof window<"u"?d.useLayoutEffect:d.useEffect;var J={},ze={get exports(){return J},set exports(e){J=e}},fe={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=d;function Re(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Re,Ce=P.useState,Te=P.useEffect,Le=P.useLayoutEffect,Ve=P.useDebugValue;function xe(e,t){var n=t(),r=Ce({inst:{value:n,getSnapshot:t}}),o=r[0].inst,m=r[1];return Le(function(){o.value=n,o.getSnapshot=t,F(o)&&m({inst:o})},[e,n,t]),Te(function(){return F(o)&&m({inst:o}),e(function(){F(o)&&m({inst:o})})},[e]),Ve(n),n}function F(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function ke(e,t){return t()}var Pe=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ke:xe;fe.useSyncExternalStore=P.useSyncExternalStore!==void 0?P.useSyncExternalStore:Pe;(function(e){e.exports=fe})(ze);const H=(e,t)=>J.useSyncExternalStore(e,t,t),A=0,Ae=1,de=2,Y=3,De=(e,t,n)=>{let r=-1,o=A,m=!1,g,u,l;const y=e._isHorizontal(),I=e._isRtl(),E=y?"scrollLeft":"scrollTop",z=new WeakMap,i=()=>l||(l=new ResizeObserver(s=>{const a=[];for(const c of s)if(c.target===u)e._update(ae,{_width:c.contentRect.width,_height:c.contentRect.height});else{const h=z.get(c.target);k(h)&&a.push([h,c.contentRect[y?"width":"height"]])}a.length&&(e._update(K,a),m=!0)})),_=()=>u?e._isHorizontal()?u.scrollWidth:u.scrollHeight:0,p=(s,a)=>{if(u){if(I){if(!k(g)){const c=u[E];u[E]=1,g=u[E]===0,u[E]=c}g&&(s*=-1)}a?u[E]+=s:(u[E]=s,o=Y)}};return{_initRoot(s){u=s;const a=i(),c=()=>{let S=s[E];I&&(S=Se(S)),r!==S&&(o===A||!m?o!==Y&&(o=r>S?de:Ae):m=!1,e._update(U,r=S),t(S))},h=ve(()=>{c(),o=A,n(!1)},150),T=()=>{const S=o===A;c(),S&&n(!0),h()},L=Ie(S=>{o!==A&&(S.ctrlKey||(y?S.deltaX:S.deltaY)&&r>0&&r<e._getScrollSize()-e._getViewportSize()&&h())},50);return a.observe(s),s.addEventListener("scroll",T),s.addEventListener("wheel",L,{passive:!0}),()=>{a.disconnect(),s.removeEventListener("scroll",T),s.removeEventListener("wheel",L),h._cancel()}},_initItem(s,a){const c=i();return z.set(s,a),c.observe(s),()=>{z.delete(s),c.unobserve(s)}},_getScrollDirection(){return o},_getActualScrollSize:_,_updateScrollPosition:p,_scrollTo:async(s,a)=>{const c=()=>{let h=a();const T=_(),L=e._getViewportSize();return T-(h+L)<=0&&(h=T-L),h};if(e._hasUnmeasuredItemsInRange(s)){do{e._update(U,c());try{await e._waitForScrollDestinationItemsMeasured()}catch{return}}while(e._hasUnmeasuredItemsInRange(s));p(c())}else{const h=c();p(h),e._update(U,h)}}}},b="current",re=e=>{const t=d.useRef();return t[b]||(t[b]=e())},oe=e=>{const t=d.useRef(e);return D(()=>{t[b]=e}),d.useCallback((...n)=>{t[b]&&t[b](...n)},[])},se=-1,Me=d.memo(({_children:e,_scroller:t,_store:n,_index:r,_element:o})=>{const m=d.useRef(null),g=H(n._subscribe,()=>n._getItemOffset(r)),u=H(n._subscribe,()=>n._isUnmeasuredItem(r));return D(()=>t._initItem(m[b],r),[r]),x(o,{ref:m,style:d.useMemo(()=>{const l=n._isHorizontal(),y=n._isRtl()?"right":"left",I={margin:0,padding:0,position:"absolute",[l?"height":"width"]:"100%",[l?"top":y]:0,[l?y:"top"]:g};return l&&(I.display="flex"),u&&(I.visibility="hidden"),I},[g,u]),children:e})}),Ne=e=>!k(e)||typeof e=="boolean",He=d.forwardRef(({children:e,style:t,scrollSize:n,scrolling:r,horizontal:o,rtl:m},g)=>x("div",{ref:g,style:t,children:x("div",{style:d.useMemo(()=>{const u=o?n:"100%",l=o?"100%":n;return{position:"absolute",top:0,[m?"right":"left"]:0,width:u,height:l,minWidth:u,minHeight:l,pointerEvents:r?"none":"auto"}},[n,r]),children:e})})),We=({_children:e,_ref:t,_store:n,_element:r,_scrolling:o,_style:m})=>{const g=H(n._subscribe,n._getScrollSize),u=n._isHorizontal();return x(r,{ref:t,scrollSize:g,scrolling:o,horizontal:u,rtl:n._isRtl(),style:d.useMemo(()=>({overflow:u?"auto hidden":"hidden auto",position:"relative",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...m}),[m]),children:e})},le=d.forwardRef(({children:e,itemSize:t=40,overscan:n=4,horizontal:r,rtl:o,endThreshold:m=0,style:g,element:u=He,itemElement:l="div",onEndReached:y,onScroll:I,onScrollStop:E},z)=>{const i=d.useMemo(()=>{const f=[];return d.Children.forEach(e,v=>{Ne(v)||f.push(v)}),f},[e]),_=i.length,p=re(()=>be(_,t,!!r,!!o)),[w,s]=H(p._subscribe,p._getRange),a=H(p._subscribe,p._getJump),c=d.useRef(null),h=d.useRef(se),T=oe(I),L=oe(E),[S,me]=d.useState(new Set),[_e,pe]=d.useState(!1),R=re(()=>De(p,T,f=>{pe(f),f||(me(new Set),L())})),O=V(_,p._getItemCount());D(()=>{p._update(ce,_)},[_]),D(()=>R._initRoot(c[b]),[]),D(()=>{if(!a.length)return;const f=R._getScrollDirection();if(f===de){const v=a.reduce((C,[,W])=>C+W,0);v&&R._updateScrollPosition(v,!0)}else if(f===Y){const v=w===0,C=s-(O-1)===0,W=a.reduce((j,[ge,Q])=>(ge<w?v||(j+=Q):!v&&C&&(j+=Q),j),0);W&&R._updateScrollPosition(W,!0)}},[a]),d.useEffect(()=>{if(!y)return;h[b]>O&&(h[b]=se),O-1-s<=m&&h[b]<O&&(h[b]=O,y())},[s]),d.useImperativeHandle(z,()=>({get scrollOffset(){return p._getScrollOffset()},get scrollSize(){return R._getActualScrollSize()},scrollToIndex(f){f=q(V(f,O-1),0),R._scrollTo(f,()=>p._getItemOffset(f))},scrollToOffset(f){f=q(f,0),R._scrollTo(p._getItemIndexForScrollTo(f),()=>f)}}),[O]);const X=q(w-n,0),G=V(s+n,O-1),he=d.useMemo(()=>{const f=[];for(let v=X;v<=G;v++)S.add(v);return S.forEach(v=>{const C=i[v];f.push(x(Me,{_scroller:R,_store:p,_index:v,_element:l,_children:C},(C==null?void 0:C.key)||v))}),f},[i,S,X,G]);return x(We,{_ref:c,_store:p,_element:u,_scrolling:_e,_style:g,_children:he})});try{le.displayName="List",le.__docgenInfo={description:"Virtualized list component. See {@link ListProps} and {@link ListHandle}.",displayName:"List",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},itemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"itemSize",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},rtl:{defaultValue:null,description:"You have to set true if you use this component under `direction: rtl` style.",name:"rtl",required:!1,type:{name:"boolean"}},endThreshold:{defaultValue:{value:"0"},description:`Number of items to be the margin from the end of the scroll. See also {@link onEndReached}.
@defaultValue 0`,name:"endThreshold",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"Inline style prop to override style of scrollable element.",name:"style",required:!1,type:{name:"CSSProperties"}},element:{defaultValue:{value:`forwardRef<any, CustomWindowComponentProps>(
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
@defaultValue "div"`,name:"itemElement",required:!1,type:{name:"CustomItemComponentOrElement"}},onEndReached:{defaultValue:null,description:"Callback invoked when scrolling reached to the end. The margin from the end is specified by {@link endThreshold}.",name:"onEndReached",required:!1,type:{name:"() => void"}},onScroll:{defaultValue:null,description:`Callback invoked whenever scroll offset changes.
@param offset Current scrollTop or scrollLeft.`,name:"onScroll",required:!1,type:{name:"(offset: number) => void"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}}}}}catch{}export{le as L};
//# sourceMappingURL=List-62f97fbd.js.map
