import{m as v,c as A,h as a,o as C,j as S,k as x,d as _,D as L,l as V,n as g}from"./web-DSIcfvkV.js";import{c as N,U as y,a as D,b as U,R as w,L as H,d as M,i as P,g as F,e as G,A as j,f as B}from"./utils-Xv96Re0O.js";const q=r=>{let c;const{itemSize:u,horizontal:i=!1,overscan:d}=r;r=v({as:"div"},r);const e=N(r.data.length,u,d,void 0,void 0,!u),l=M(e,i),s=G(e,i),[o,m]=A(e._getStateVersion()),T=e._subscribe(y,()=>{m(e._getStateVersion())}),E=e._subscribe(D,()=>{var t;(t=r.onScroll)==null||t.call(r,e._getScrollOffset())}),I=e._subscribe(U,()=>{var t;(t=r.onScrollEnd)==null||t.call(r)}),b=a(t=>{o();const n=e._getRange();return t&&P(t,n)?t:n}),h=a(()=>o()&&e._isScrolling()),f=a(()=>o()&&e._getTotalSize()),z=a(()=>o()&&e._getJumpCount());return C(()=>{r.ref&&r.ref({get scrollOffset(){return e._getScrollOffset()},get scrollSize(){return F(e)},get viewportSize(){return e._getViewportSize()},get startIndex(){return e._getStartIndex()},get endIndex(){return e._getEndIndex()},getItemOffset:e._getItemOffset,getItemSize:e._getItemSize,scrollToIndex:s._scrollToIndex,scrollTo:s._scrollTo,scrollBy:s._scrollBy});const t=r.scrollRef||c.parentElement;l._observeRoot(t),s._observe(t),V(()=>{r.ref&&r.ref(),T(),E(),I(),l._dispose(),s._dispose()})}),S(g(()=>r.data.length,t=>{t!==e._getItemsLength()&&e._update(j,[t,r.shift])})),S(g(()=>r.startMargin||0,t=>{t!==e._getStartSpacerSize()&&e._update(B,t)})),x(g(z,()=>{s._fixScrollJump()})),_(L,{get component(){return r.as},ref(t){var n=c;typeof n=="function"?n(t):c=t},get style(){return{"overflow-anchor":"none",flex:"none",position:"relative",visibility:"hidden",width:i?f()+"px":"100%",height:i?"100%":f()+"px","pointer-events":h()?"none":void 0}},get children(){return _(w,{get _each(){return r.data},get _range(){return b()},_render:(t,n)=>{const O=a(()=>(o(),e._getItemOffset(n))),R=a(()=>(o(),e._isUnmeasuredItem(n)));return _(H,{get _as(){return r.item},_index:n,get _resizer(){return l._observeItem},get _offset(){return O()},get _hide(){return R()},get _children(){return r.children(t(),n)},_isHorizontal:i})}})}})};export{q as V};