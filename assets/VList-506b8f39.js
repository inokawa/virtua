import{j as E}from"./jsx-runtime-c3d7f245.js";import{r as d}from"./index-c6dae603.js";import{s as ue}from"./index-778f7dbf.js";const W=Math.min,V=Math.max,Y=Date.now,L=e=>e!=null,B=(e,t)=>Array.from({length:e},(n,r)=>t(r)),ce=(e,t)=>{let n;const r=()=>{L(n)&&clearTimeout(n)},l=()=>{r(),n=setTimeout(()=>{n=null,e()},t)};return l._cancel=r,l},ae=(e,t)=>{let n=Y()-t;return(...r)=>{const l=Y();n+t<l&&(n=l,e(...r))}},fe=e=>{let t=!1,n;return(...r)=>(t||(t=!0,n=e(...r)),n)},A=-1,M=(e,t)=>{const n=e._sizes[t];return n===A?e._defaultItemSize:n},de=(e,t,n)=>{e._sizes[t]=n,e._measuredOffsetIndex=W(t,e._measuredOffsetIndex)},se=(e,t,n)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return n?e._offsets[t]+M(e,t):e._offsets[t];let r=e._measuredOffsetIndex,l=e._offsets[r];for(;r<=t&&(e._offsets[r]=l,!(r===t&&!n));)l+=M(e,r),r++;return e._measuredOffsetIndex=t,l},me=e=>se(e,e._length-1,!0),Q=(e,t)=>se(e,t),oe=(e,t,n)=>{let r=0;if(n>=0)for(;t<e._length-1;){const l=M(e,t++);if((r+=l)>=n){r-l/2>=n&&t--;break}}else for(;t>0;){const l=M(e,--t);if((r-=l)<=n){r+l/2<n&&t++;break}}return W(V(t,0),e._length-1)},X=(e,t,n,r)=>oe(e,n,t-r),Z=oe,_e=(e,t,n)=>{for(let r=t;r<=n;r++)if(e._sizes[r]===A)return!0;return!1},G=(e,t,n)=>({_defaultItemSize:t,_length:e,_measuredOffsetIndex:n?W(n._measuredOffsetIndex,e-1):0,_sizes:B(e,r=>{const l=n&&n._sizes[r];return L(l)?l:A}),_offsets:B(e,r=>{if(r===0)return 0;const l=n&&n._offsets[r];return L(l)?l:A})}),q=1,le=2,H=3,F=4,pe=(e,t,n,r,l=0,p,v)=>{let h=n?t*V(l-1,0):0,m=n?0:t*V(l-1,0),g=0,z=[],f=G(e,t),b=[0,l],I;const w=new Set,o=()=>n?h:m;return{_getRange(){const[s,i]=b,c=Q(f,s),a=X(f,g,s,c),_=Z(f,a,o());return s===a&&i===_?b:b=[a,_]},_isUnmeasuredItem(s){return f._sizes[s]===A},_hasUnmeasuredItemsInRange(s){return _e(f,s,Z(f,s,o()))},_getItemOffset(s){return Q(f,s)},_getScrollOffset(){return g},_getViewportSize(){return o()},_getScrollSize(){return me(f)},_getJump(){return z},_isHorizontal(){return n},_isRtl(){return r},_getItemIndexForScrollTo(s){return X(f,s,0,0)},_waitForScrollDestinationItemsMeasured(){return I&&I[1](),new Promise((s,i)=>{I=[()=>{Promise.resolve().then(()=>{s(),I=void 0})},i]})},_subscribe(s){return w.add(s),()=>{w.delete(s)}},_update(s,i){(()=>{switch(s){case q:{const a=i.filter(([u,y])=>f._sizes[u]!==y);if(!a.length)return!1;const _=[];return a.forEach(([u,y])=>{_.push([u,y-M(f,u)]),de(f,u,y)}),z=_,!0}case le:return h===i._width&&m===i._height?!1:(h=i._width,m=i._height,!0);case H:case F:{const a=g;return(g=i)!==a}}})()&&(w.forEach(a=>{a()}),s===H?v(g):I&&s===q&&I[0]())},_updateIsScrolling(s){p(s)},_updateCacheLength(s){f._length!==s&&(f=G(s,t,f))}}},k=typeof window<"u"?d.useLayoutEffect:d.useEffect,N=(e,t)=>ue.useSyncExternalStore(e,t,t),$=fe((e,t)=>{const n=e[t];e[t]=1;const r=e[t]===0;return e[t]=n,r}),x=0,he=1,ee=2,U=3,ge=e=>{let t=-1,n=x,r=!1,l,p;const v=e._isHorizontal(),h=e._isRtl(),m=v?"scrollLeft":"scrollTop",g=new WeakMap,z=()=>p||(p=new ResizeObserver(o=>{const s=[];for(const i of o)if(i.target===l)e._update(le,{_width:i.contentRect.width,_height:i.contentRect.height});else{const c=g.get(i.target);L(c)&&s.push([c,i.contentRect[v?"width":"height"]])}s.length&&(e._update(q,s),r=!0)})),f=()=>l?e._isHorizontal()?l.scrollWidth:l.scrollHeight:0,b=(o,s)=>{l&&(h&&$(l,m)&&(o*=-1),s?l[m]+=o:(l[m]=o,n=U))},I=async(o,s)=>{const i=()=>{let c=s();const a=f(),_=e._getViewportSize();return a-(c+_)<=0&&(c=a-_),c};if(e._hasUnmeasuredItemsInRange(o)){do{e._update(F,i());try{await e._waitForScrollDestinationItemsMeasured()}catch{return}}while(e._hasUnmeasuredItemsInRange(o));b(i())}else{const c=i();b(c),e._update(F,c)}},w=o=>o.reduce((s,[,i])=>s+i,0);return{_initRoot(o){l=o;const s=z(),i=()=>{let u=o[m];h&&$(o,m)&&(u*=-1),t!==u&&(n===x||!r?n!==U&&(n=t>u?ee:he):r=!1,e._update(H,t=u))},c=ce(()=>{i(),n=x,e._updateIsScrolling(!1)},150),a=()=>{const u=n===x;i(),u&&e._updateIsScrolling(!0),c()},_=ae(u=>{n!==x&&(u.ctrlKey||(v?u.deltaX:u.deltaY)&&t>0&&t<e._getScrollSize()-e._getViewportSize()&&c())},50);return s.observe(o),o.addEventListener("scroll",a),o.addEventListener("wheel",_,{passive:!0}),()=>{s.disconnect(),o.removeEventListener("scroll",a),o.removeEventListener("wheel",_),c._cancel()}},_initItem(o,s){const i=z();return g.set(o,s),i.observe(o),()=>{g.delete(o),i.unobserve(o)}},_getActualScrollSize:f,_scrollTo(o){o=V(o,0),I(e._getItemIndexForScrollTo(o),()=>o)},_scrollToIndex(o,s){o=V(W(o,s-1),0),I(o,()=>e._getItemOffset(o))},_fixScrollJump:(o,s)=>{if(n===ee){const i=w(o);i&&b(i,!0)}else if(n===U){const i=e._getScrollOffset();if(i!==0){const c=w(o);if(e._getScrollSize()-(i+e._getViewportSize()+c)<=0)c&&b(i+c);else{const a=o.reduce((_,[u,y])=>(u<s&&(_+=y),_),0);a&&b(a,!0)}}}}}},R="current",te=e=>{const t=d.useRef();return t[R]||(t[R]=e())},ne=e=>{const t=d.useRef(e);return k(()=>{t[R]=e},[e]),t},Se=d.memo(({_children:e,_scroller:t,_store:n,_index:r,_element:l})=>{const p=d.useRef(null),v=N(n._subscribe,()=>n._getItemOffset(r)),h=N(n._subscribe,()=>n._isUnmeasuredItem(r));return k(()=>t._initItem(p[R],r),[r]),E(l,{ref:p,style:d.useMemo(()=>{const m=n._isHorizontal(),g=n._isRtl()?"right":"left",z={margin:0,padding:0,position:"absolute",[m?"height":"width"]:"100%",[m?"top":g]:0,[m?g:"top"]:v,visibility:h?"hidden":"visible"};return m&&(z.display="flex"),z},[v,h]),children:e})}),Ie=e=>!L(e)||typeof e=="boolean",we=d.forwardRef(({children:e,scrollSize:t,scrolling:n,horizontal:r,attrs:l},p)=>E("div",{ref:p,...l,children:E("div",{style:d.useMemo(()=>({position:"relative",visibility:"hidden",width:r?t:"100%",height:r?"100%":t,pointerEvents:n?"none":"auto"}),[t,n]),children:e})})),ve=({_children:e,_ref:t,_store:n,_element:r,_scrolling:l,_attrs:p})=>{const v=N(n._subscribe,n._getScrollSize),h=n._isHorizontal();return E(r,{ref:t,scrollSize:v,scrolling:l,horizontal:h,attrs:d.useMemo(()=>({...p,style:{overflow:h?"auto hidden":"hidden auto",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...p.style}}),[p]),children:e})},re=d.forwardRef(({children:e,itemSize:t=40,overscan:n=4,initialItemCount:r,horizontal:l,rtl:p,element:v=we,itemElement:h="div",onScroll:m,onScrollStop:g,onRangeChange:z,...f},b)=>{const I=d.useMemo(()=>{const S=[];return d.Children.forEach(e,O=>{Ie(O)||S.push(O)}),S},[e]),w=I.length,o=ne(m),s=ne(g),[i,c]=d.useState(new Set),[a,_]=d.useState(!1),u=te(()=>pe(w,t,!!l,!!p,r,S=>{_(S),S||(c(new Set),s[R]&&s[R]())},S=>{o[R]&&o[R](S)}));u._updateCacheLength(w);const[y,P]=N(u._subscribe,u._getRange),D=N(u._subscribe,u._getJump),J=d.useRef(null),C=te(()=>ge(u));k(()=>C._initRoot(J[R]),[]),k(()=>{D.length&&C._fixScrollJump(D,y)},[D]),d.useEffect(()=>{z&&z({start:y,end:P,count:w})},[y,P]),d.useImperativeHandle(b,()=>({get scrollOffset(){return u._getScrollOffset()},get scrollSize(){return C._getActualScrollSize()},get viewportSize(){return u._getViewportSize()},scrollToIndex(S){C._scrollToIndex(S,w)},scrollTo:C._scrollTo,scrollBy(S){C._scrollTo(u._getScrollOffset()+S)}}),[w]);const K=V(y-n,0),j=W(P+n,w-1),ie=d.useMemo(()=>{const S=[];for(let O=K;O<=j;O++)i.add(O);return i.forEach(O=>{const T=I[O];L(T)&&S.push(E(Se,{_scroller:C,_store:u,_index:O,_element:h,_children:T},(T==null?void 0:T.key)||O))}),S},[I,i,K,j]);return E(ve,{_ref:J,_store:u,_element:v,_scrolling:a,_children:ie,_attrs:f})});try{re.displayName="VList",re.__docgenInfo={description:"Virtualized list component. See {@link VListProps} and {@link VListHandle}.",displayName:"VList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},itemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
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
//# sourceMappingURL=VList-506b8f39.js.map
