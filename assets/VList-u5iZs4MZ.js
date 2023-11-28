import{j as w}from"./jsx-runtime-KhpQ_ow-.js";import{r as n}from"./index-G6kSzgdV.js";import{u as W,A as X,a as F,b as z,r as l,U as K,c as Z,n as Q,e as $,v as ee,V as te,d as oe,f as ne,o as se,m as re,S as le,i as ae,j as ie}from"./useRerender-Kvj1ythD.js";import{u as ce,a as E,L as ue}from"./useChildren-kdhwbrLV.js";import{r as de}from"./index-xBZDQ2qw.js";const L=n.forwardRef(({children:p,count:T,overscan:h=4,initialItemSize:b,initialItemCount:R,shift:x,horizontal:k,reverse:q,cache:O,components:{Root:H=te,Item:A="div"}=oe,onScroll:N,onScrollStop:j,onRangeChange:_,...c},D)=>{const[P,a]=ce(p,T),S=E(N),y=E(j),[t,g,s,r]=W(()=>{const e=!!k,o=ne(a,b,R,O,!!q,!b);return[o,se(o,e),re(o,e),e]});a!==t._getItemsLength()&&t._update(X,[a,x]);const I=F(),[u,d]=t._getRange(),m=t._getScrollDirection(),U=t._getJumpCount(),v=t._getTotalSize(),V=n.useRef(null),f=m!==le;z(()=>{const e=V[l],o=t._subscribe(K+Z,M=>{M?de.flushSync(I):I()}),i=t._subscribe(Q,()=>{S[l]&&S[l](t._getScrollOffset())}),B=g._observeRoot(e),G=s._observe(e);return()=>{o(),i(),B(),G()}},[]),z(()=>{const e=t._flushJump();e&&s._fixScrollJump(e)},[U]),n.useEffect(()=>{f||y[l]&&y[l]()},[f]),n.useEffect(()=>{_&&_(u,d)},[u,d]),n.useImperativeHandle(D,()=>({get cache(){return t._getCache()},get scrollOffset(){return t._getScrollOffset()},get scrollSize(){return t._getTotalSize()},get viewportSize(){return t._getViewportSize()},scrollToIndex:s._scrollToIndex,scrollTo:s._scrollTo,scrollBy:s._scrollBy}),[]);const J=ie(u,h,m),Y=ae(d,h,m,a),C=[];for(let e=J;e<=Y;e++){const o=P(e),i=o.key;C.push(w(ue,{_resizer:g,_index:e,_offset:t._getItemOffset(e),_hide:t._isUnmeasuredItem(e),_element:A,_children:o,_isHorizontal:r},$(i)?i:"_"+e))}return w(H,{ref:V,width:r?v:void 0,height:r?void 0:v,scrolling:f,attrs:n.useMemo(()=>({...c,style:{display:r?"inline-block":"block",[r?"overflowX":"overflowY"]:"auto",overflowAnchor:"none",contain:"strict",width:"100%",height:"100%",...c.style}}),ee(c)),children:C})});try{L.displayName="VList",L.__docgenInfo={description:"Virtualized list component. See {@link VListProps} and {@link VListHandle}.",displayName:"VList",props:{children:{defaultValue:null,description:`Elements rendered by this component.

You can also pass a function and set {@link VListProps.count} to create elements lazily.`,name:"children",required:!0,type:{name:"ReactNode | ((index: number) => ReactElement<any, string | JSXElementConstructor<any>>)"}},count:{defaultValue:null,description:"If you set a function to {@link VListProps.children}, you have to set total number of items to this prop.",name:"count",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},shift:{defaultValue:null,description:"While true is set, scroll position will be maintained from the end not usual start when items are shifted/unshifted. It is useful for reverse infinite scrolling.",name:"shift",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},reverse:{defaultValue:null,description:"If true, some styles will be adjusted to be suitable for bottom-to-top scrolling.",name:"reverse",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VListHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Item?: CustomItemComponentOrElement; }"}},onScroll:{defaultValue:null,description:`Callback invoked whenever scroll offset changes.
@param offset Current scrollTop or scrollLeft.`,name:"onScroll",required:!1,type:{name:"(offset: number) => void"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(startIndex: number, endIndex: number) => void"}}}}}catch{}export{L as V};
//# sourceMappingURL=VList-u5iZs4MZ.js.map