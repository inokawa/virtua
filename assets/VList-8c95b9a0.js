import{j as D}from"./jsx-runtime-c3d7f245.js";import{r as m}from"./index-c6dae603.js";import{s as fe}from"./index-778f7dbf.js";const U=Math.min,M=Math.max,B=Date.now,W=e=>e!=null,Q=(e,t)=>Array.from({length:e},(n,r)=>t(r)),ae=(e,t)=>{let n;const r=()=>{W(n)&&clearTimeout(n)},i=()=>{r(),n=setTimeout(()=>{n=null,e()},t)};return i._cancel=r,i},de=(e,t)=>{let n=B()-t;return(...r)=>{const i=B();n+t<i&&(n=i,e(...r))}},se=e=>{let t,n;return(...r)=>(t||(t=!0,n=e(...r)),n)},N=-1,A=(e,t)=>{const n=e._sizes[t];return n===N?e._defaultItemSize:n},me=(e,t,n)=>{e._sizes[t]=n,e._measuredOffsetIndex=U(t,e._measuredOffsetIndex)},oe=(e,t,n)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return n?e._offsets[t]+A(e,t):e._offsets[t];let r=e._measuredOffsetIndex,i=e._offsets[r];for(;r<=t&&(e._offsets[r]=i,!(r===t&&!n));)i+=A(e,r),r++;return e._measuredOffsetIndex=t,i},_e=e=>oe(e,e._length-1,!0),X=(e,t)=>oe(e,t),le=(e,t,n)=>{let r=0;if(n>=0)for(;t<e._length-1;){const i=A(e,t++);if((r+=i)>=n){r-i/2>=n&&t--;break}}else for(;t>0;){const i=A(e,--t);if((r-=i)<=n){r+i/2<n&&t++;break}}return U(M(t,0),e._length-1)},G=(e,t,n,r)=>le(e,n,t-r),$=le,pe=(e,t,n)=>{for(let r=t;r<=n;r++)if(e._sizes[r]===N)return!0;return!1},ee=(e,t,n)=>({_defaultItemSize:t,_length:e,_measuredOffsetIndex:n?U(n._measuredOffsetIndex,e-1):0,_sizes:Q(e,r=>{const i=n&&n._sizes[r];return W(i)?i:N}),_offsets:Q(e,r=>{if(r===0)return 0;const i=n&&n._offsets[r];return W(i)?i:N})}),j=e=>e.reduce((t,[n])=>t+n,0),k=0,ie=1,F=2,H=3,K=1,ue=2,Y=3,Z=4,he=(e,t,n,r,i=0,_,y)=>{let d=t*M(i-1,0),g=0,I=[],w=0,C=!1,s=0,l=ee(e,t),u=k,c=[0,i],a;const h=new Set,p=new Set,b=()=>{s&&(I.push([s,0]),s=0,C=!0),I.length&&(w++,p.forEach(o=>{o()}))},E=()=>{s=0,I=[]};return{_getRange(){const[o,f]=c,O=X(l,o),L=G(l,g,o,O),z=$(l,L,d);return o===L&&f===z?c:c=[L,z]},_isUnmeasuredItem(o){return l._sizes[o]===N},_hasUnmeasuredItemsInRange(o){return pe(l,o,$(l,o,d))},_getItemOffset(o){return X(l,o)-s},_getScrollOffset(){return g},_getViewportSize(){return d},_getScrollSize(){return _e(l)},_getJumpCount(){return w},_flushJump(){if(!I.length)return;const o=C,f=I;return C=!1,I=[],[f,!o]},_isHorizontal(){return n},_isRtl(){return r},_getItemIndexForScrollTo(o){return G(l,o,0,0)},_waitForScrollDestinationItemsMeasured(){return a&&a[1](),new Promise((o,f)=>{a=[()=>{Promise.resolve().then(()=>{o(),a=void 0})},f]})},_subscribe(o){return h.add(o),()=>{h.delete(o)}},_subscribeJump(o){return p.add(o),()=>{p.delete(o)}},_update(o,f){let O;(()=>{switch(o){case K:{const z=f.filter(([V,T])=>l._sizes[V]!==T);if(!z.length)return!1;const x=[];return z.forEach(([V,T])=>{x.push([T-A(l,V),V]),me(l,V,T)}),u===H?(I=x,O=!0):u===F&&(s+=j(x)),!0}case ue:return d===f?!1:(d=f,!0);case Y:case Z:{const z=g;return(f<z?z-f:f-z)>d*2?E():f<d&&(O=!0),(g=f)!==z}}})()&&(h.forEach(z=>{z()}),O&&b(),o===Y?y(g):a&&o===K&&a[0]())},_getScrollDirection(){return u},_setScrollDirection(o){const f=u;u=o,f!==u&&u!==H&&b(),u===k?_(!1):f===k&&(u===ie||u===F)&&_(!0)},_updateCacheLength(o){l._length!==o&&(l=ee(o,t,l))}}},P=typeof window<"u"?m.useLayoutEffect:m.useEffect,q=(e,t)=>fe.useSyncExternalStore(e,t,t),te=se(e=>{const t="scrollLeft",n=e[t];e[t]=1;const r=e[t]===0;return e[t]=n,r}),Se=e=>{let t=!1,n;const r=e._isHorizontal(),i=e._isRtl(),_=r?"scrollLeft":"scrollTop",y=r?"width":"height",d=new WeakMap,g=se(()=>new ResizeObserver(s=>{const l=[];for(const{target:u,contentRect:c}of s)if(u===n)e._update(ue,c[y]);else{const a=d.get(u);W(a)&&l.push([a,c[y]])}l.length&&e._update(K,l)})),I=()=>n?r?n.scrollWidth:n.scrollHeight:0,w=(s,l)=>{n&&(r&&i&&te(n)&&(s*=-1),l?n[_]+=s:(n[_]=s,e._setScrollDirection(H)))},C=async(s,l)=>{const u=()=>{let c=l();const a=I(),h=e._getViewportSize();return a-(c+h)<=0&&(c=a-h),c};if(e._hasUnmeasuredItemsInRange(s)){do{e._update(Z,u());try{await e._waitForScrollDestinationItemsMeasured()}catch{return}}while(e._hasUnmeasuredItemsInRange(s));w(u())}else{const c=u();w(c),e._update(Z,c)}};return{_initRoot(s){n=s;const l=g(),u=()=>{let p=s[_];r&&i&&te(s)&&(p*=-1);const b=e._getScrollOffset();if(b===p)return;const E=e._getScrollDirection();(E===k||!t)&&E!==H&&e._setScrollDirection(b>p?F:ie),t=!1,e._update(Y,p)},c=ae(()=>{u(),e._setScrollDirection(k)},150),a=()=>{u(),c()},h=de(p=>{if(e._getScrollDirection()!==k&&!p.ctrlKey&&(r?p.deltaX:p.deltaY)){const b=e._getScrollOffset();b>0&&b<e._getScrollSize()-e._getViewportSize()&&c()}},50);return l.observe(s),s.addEventListener("scroll",a),s.addEventListener("wheel",h,{passive:!0}),()=>{l.disconnect(),s.removeEventListener("scroll",a),s.removeEventListener("wheel",h),c._cancel()}},_initItem(s,l){const u=g();return d.set(s,l),u.observe(s),()=>{d.delete(s),u.unobserve(s)}},_getActualScrollSize:I,_scrollTo(s){s=M(s,0),C(e._getItemIndexForScrollTo(s),()=>s)},_scrollToIndex(s,l){s=M(U(s,l-1),0),C(s,()=>e._getItemOffset(s))},_fixScrollJump:(s,l,u)=>{if(l){const c=e._getScrollOffset();if(c!==0){const a=j(s);if(e._getScrollSize()-(c+e._getViewportSize()+a)<=0)a&&w(c+a);else{const h=s.reduce((p,[b,E])=>(E<u&&(p+=b),p),0);h&&w(h,!0)}}}else{const c=j(s);c&&(t=!0,w(c,!0))}}}},R="current",ge=e=>{const t=m.useRef();return t[R]||(t[R]=e())},ne=e=>{const t=m.useRef(e);return P(()=>{t[R]=e},[e]),t},Ie=m.memo(({_children:e,_scroller:t,_store:n,_index:r,_element:i})=>{const _=m.useRef(null),y=q(n._subscribe,()=>n._getItemOffset(r)),d=q(n._subscribe,()=>n._isUnmeasuredItem(r));return P(()=>t._initItem(_[R],r),[r]),D(i,{ref:_,style:m.useMemo(()=>{const g=n._isHorizontal(),I=n._isRtl()?"right":"left",w={margin:0,padding:0,position:"absolute",[g?"height":"width"]:"100%",[g?"top":I]:0,[g?I:"top"]:y,visibility:d?"hidden":"visible"};return g&&(w.display="flex"),w},[y,d]),children:e})}),ve=e=>!W(e)||typeof e=="boolean",we=m.forwardRef(({children:e,scrollSize:t,scrolling:n,horizontal:r,attrs:i},_)=>D("div",{ref:_,...i,children:D("div",{style:m.useMemo(()=>({position:"relative",visibility:"hidden",width:r?t:"100%",height:r?"100%":t,pointerEvents:n?"none":"auto"}),[t,n]),children:e})})),ze=({_children:e,_ref:t,_store:n,_element:r,_scrolling:i,_attrs:_})=>{const y=q(n._subscribe,n._getScrollSize),d=n._isHorizontal();return D(r,{ref:t,scrollSize:y,scrolling:i,horizontal:d,attrs:m.useMemo(()=>({..._,style:{overflow:d?"auto hidden":"hidden auto",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,..._.style}}),[_]),children:e})},re=m.forwardRef(({children:e,itemSize:t=40,overscan:n=4,initialItemCount:r,horizontal:i,rtl:_,element:y=we,itemElement:d="div",onScroll:g,onScrollStop:I,onRangeChange:w,...C},s)=>{const l=m.useMemo(()=>{const S=[];return m.Children.forEach(e,v=>{ve(v)||S.push(v)}),S},[e]),u=l.length,c=ne(g),a=ne(I),[h,p]=m.useState(new Set),[b,E]=m.useState(!1),[o,f]=ge(()=>{const S=he(u,t,!!i,!!_,r,v=>{E(v),v||(p(new Set),a[R]&&a[R]())},v=>{c[R]&&c[R](v)});return[S,Se(S)]});o._updateCacheLength(u);const[O,L]=q(o._subscribe,o._getRange),z=q(o._subscribeJump,o._getJumpCount),x=m.useRef(null);P(()=>f._initRoot(x[R]),[]),P(()=>{const S=o._flushJump();S&&f._fixScrollJump(S[0],S[1],O)},[z]),m.useEffect(()=>{w&&w({start:O,end:L,count:u})},[O,L]),m.useImperativeHandle(s,()=>({get scrollOffset(){return o._getScrollOffset()},get scrollSize(){return f._getActualScrollSize()},get viewportSize(){return o._getViewportSize()},scrollToIndex(S){f._scrollToIndex(S,u)},scrollTo:f._scrollTo,scrollBy(S){f._scrollTo(o._getScrollOffset()+S)}}),[u]);const V=M(O-n,0),T=U(L+n,u-1),ce=m.useMemo(()=>{const S=[];for(let v=V;v<=T;v++)h.add(v);return h.forEach(v=>{const J=l[v];W(J)&&S.push(D(Ie,{_scroller:f,_store:o,_index:v,_element:d,_children:J},(J==null?void 0:J.key)||v))}),S},[l,h,V,T]);return D(ze,{_ref:x,_store:o,_element:y,_scrolling:b,_children:ce,_attrs:C})});try{re.displayName="VList",re.__docgenInfo={description:"Virtualized list component. See {@link VListProps} and {@link VListHandle}.",displayName:"VList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},itemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"itemSize",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},rtl:{defaultValue:null,description:"You have to set true if you use this component under `direction: rtl` style.",name:"rtl",required:!1,type:{name:"boolean"}},element:{defaultValue:{value:`forwardRef<any, CustomWindowComponentProps>(
  (
    { children, scrollSize, scrolling, horizontal, attrs },
    ref
  ): ReactElement => {
    return (
      <div ref={ref} {...attrs}>
        <div
          style={useMemo((): CSSProperties => {
            return {
              position: "relative",
              visibility: "hidden",
              width: horizontal ? scrollSize : "100%",
              height: horizontal ? "100%" : scrollSize,
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
@param offset Current scrollTop or scrollLeft.`,name:"onScroll",required:!1,type:{name:"(offset: number) => void"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(payload: { start: number; end: number; count: number; }) => void"}}}}}catch{}export{re as V};
//# sourceMappingURL=VList-8c95b9a0.js.map