import{j as x}from"./jsx-runtime-DR9Q75dM.js";import{r as i}from"./index-DRjF_FHU.js";import{N as F,a as J,A as K,f as M,b as Q,u as V,r,U as W,h as X,j as Y,m as Z,g as $,s as ee,c as te,k as se,l as re,n as oe}from"./useRerender-CoF9yDGp.js";import{u as le,a as A,L as ne}from"./useChildren-DqJQo84Z.js";import{r as ae}from"./index-uWwxbAOW.js";const ie=i.forwardRef(({children:N,count:C,overscan:k,itemSize:_,shift:y,horizontal:H,keepMounted:p,cache:j,startMargin:S=0,ssrCount:g,as:c="div",item:U="div",scrollRef:I,onScroll:w,onScrollEnd:D},P)=>{c=c;const[q,u]=le(N,C),b=i.useRef(F),h=i.useRef(!!g),E=A(w),z=A(D),[e,f,o,d]=J(()=>{const t=!!H,s=te(u,_,k,g,j,!_);return[s,se(s,t),re(s,t),t]});u!==e._getItemsLength()&&e._update(K,[u,y]),S!==e._getStartSpacerSize()&&e._update(M,S);const v=Q(e),[T,R]=e._getRange(),G=e._isScrolling(),B=e._getJumpCount(),L=e._getTotalSize(),n=[],m=t=>{const s=q(t);return x.jsx(ne,{_resizer:f._observeItem,_index:t,_offset:e._getItemOffset(t),_hide:e._isUnmeasuredItem(t),_as:U,_children:s,_isHorizontal:d,_isSSR:h[r]},oe(s,t))};V(()=>{h[r]=!1;const t=e._subscribe(W,a=>{a?ae.flushSync(v):v()}),s=e._subscribe(X,()=>{E[r]&&E[r](e._getScrollOffset())}),l=e._subscribe(Y,()=>{z[r]&&z[r]()}),O=a=>{f._observeRoot(a),o._observe(a)};return I?Z(()=>O(I[r])):O(b[r].parentElement),()=>{t(),s(),l(),f._dispose(),o._dispose()}},[]),V(()=>{o._fixScrollJump()},[B]),i.useImperativeHandle(P,()=>({get cache(){return e._getCacheSnapshot()},get scrollOffset(){return e._getScrollOffset()},get scrollSize(){return $(e)},get viewportSize(){return e._getViewportSize()},get startIndex(){return e._getStartIndex()},get endIndex(){return e._getEndIndex()},getItemOffset:e._getItemOffset,getItemSize:e._getItemSize,scrollToIndex:o._scrollToIndex,scrollTo:o._scrollTo,scrollBy:o._scrollBy}),[]);for(let t=T,s=R;t<=s;t++)n.push(m(t));if(p){const t=[],s=[];ee(p).forEach(l=>{l<T&&t.push(m(l)),l>R&&s.push(m(l))}),n.unshift(...t),n.push(...s)}return x.jsx(c,{ref:b,style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:d?L:"100%",height:d?"100%":L,pointerEvents:G?"none":void 0},children:n})});ie.__docgenInfo={description:"Customizable list virtualizer for advanced usage. See {@link VirtualizerProps} and {@link VirtualizerHandle}.",methods:[{name:"cache",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollOffset",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollSize",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportSize",docblock:null,modifiers:["get"],params:[],returns:null},{name:"startIndex",docblock:null,modifiers:["get"],params:[],returns:null},{name:"endIndex",docblock:null,modifiers:["get"],params:[],returns:null}],displayName:"Virtualizer",props:{startMargin:{defaultValue:{value:"0",computed:!1},required:!1},as:{defaultValue:{value:'"div"',computed:!1},required:!1},item:{defaultValue:{value:'"div"',computed:!1},required:!1}}};export{ie as V};