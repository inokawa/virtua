import{j as C}from"./jsx-runtime-DCrfGL6_.js";import{r as n}from"./index-98wxwTcn.js";import{a as M,A as Q,b as W,c as X,u as D,r,U as Y,h as Z,j as $,m as ee,g as se,s as te,S as re,d as oe,k as le,l as ne,n as ae}from"./useRerender-DRs1Esn8.js";import{u as ie,a as j,L as ce}from"./useChildren-BZcvfk6l.js";import{r as ue}from"./index-SCI4cgSJ.js";const fe=n.forwardRef(({children:k,count:x,overscan:H=4,keepMounted:S,itemSize:g,shift:N,horizontal:w,cache:U,startMargin:q,ssrCount:h,as:u="div",item:P="div",scrollRef:E,onScroll:B,onScrollEnd:G,onRangeChange:b},J)=>{u=u;const[K,a]=ie(k,x),v=n.useRef(null),I=n.useRef(!!h),z=j(B),R=j(G),[e,f,o,m]=M(()=>{const s=!!w,t=oe(a,g,h,U,!g,q);return[t,le(t,s),ne(t,s),s]});a!==e._getItemsLength()&&e._update(Q,[a,N]);const T=W(e),[d,_]=e._getRange(),L=e._getScrollDirection(),F=e._getJumpCount(),O=e._getTotalSize(),i=[],[V,y]=X(d,_,H,L,a),p=s=>{const t=K(s);return C.jsx(ce,{_resizer:f._observeItem,_index:s,_offset:e._getItemOffset(s),_hide:e._isUnmeasuredItem(s),_element:P,_children:t,_isHorizontal:m,_isSSR:I[r]},ae(t,s))};D(()=>{I[r]=!1;const s=e._subscribe(Y,c=>{c?ue.flushSync(T):T()}),t=e._subscribe(Z,()=>{z[r]&&z[r](e._getScrollOffset())}),l=e._subscribe($,()=>{R[r]&&R[r]()}),A=c=>{f._observeRoot(c),o._observe(c)};return E?ee(()=>A(E[r])):A(v[r].parentElement),()=>{s(),t(),l(),f._dispose(),o._dispose()}},[]),D(()=>{o._fixScrollJump()},[F]),n.useEffect(()=>{b&&b(d,_)},[d,_]),n.useImperativeHandle(J,()=>({get cache(){return e._getCacheSnapshot()},get scrollOffset(){return e._getScrollOffset()},get scrollSize(){return se(e)},get viewportSize(){return e._getViewportSize()},getItemOffset:e._getItemOffset,scrollToIndex:o._scrollToIndex,scrollTo:o._scrollTo,scrollBy:o._scrollBy}),[]);for(let s=V,t=y;s<=t;s++)i.push(p(s));if(S){const s=[],t=[];te(S).forEach(l=>{l<V&&s.push(p(l)),l>y&&t.push(p(l))}),i.unshift(...s),i.push(...t)}return C.jsx(u,{ref:v,style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:m?O:"100%",height:m?"100%":O,pointerEvents:L!==re?"none":"auto"},children:i})});fe.__docgenInfo={description:"Customizable list virtualizer for advanced usage. See {@link VirtualizerProps} and {@link VirtualizerHandle}.",methods:[{name:"cache",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollOffset",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollSize",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportSize",docblock:null,modifiers:["get"],params:[],returns:null}],displayName:"Virtualizer",props:{overscan:{defaultValue:{value:"4",computed:!1},required:!1},as:{defaultValue:{value:'"div"',computed:!1},required:!1},item:{defaultValue:{value:'"div"',computed:!1},required:!1}}};export{fe as V};
