import{j as A}from"./jsx-runtime-DR9Q75dM.js";import{r as a}from"./index-DRjF_FHU.js";import{a as F,A as J,f as K,b as M,u as L,r,U as Q,h as W,j as X,m as Y,g as Z,s as $,c as ee,k as te,l as se,n as re}from"./useRerender-Ba-kRDiv.js";import{u as oe,a as x,L as le}from"./useChildren-DzgcxD_v.js";import{r as ne}from"./index-uWwxbAOW.js";const ie=a.forwardRef(({children:C,count:y,overscan:N,itemSize:m,shift:H,horizontal:j,keepMounted:S,cache:k,startMargin:p=0,ssrCount:g,as:c="div",item:w="div",scrollRef:I,onScroll:U,onScrollEnd:D},P)=>{c=c;const[q,u]=oe(C,y),E=a.useRef(null),h=a.useRef(!!g),b=x(U),z=x(D),[e,f,o,d]=F(()=>{const t=!!j,s=ee(u,m,N,g,k,!m);return[s,te(s,t),se(s,t),t]});u!==e._getItemsLength()&&e._update(J,[u,H]),p!==e._getStartSpacerSize()&&e._update(K,p);const v=M(e),[T,R]=e._getRange(),G=e._isScrolling(),B=e._getJumpCount(),O=e._getTotalSize(),n=[],_=t=>{const s=q(t);return A.jsx(le,{_resizer:f._observeItem,_index:t,_offset:e._getItemOffset(t),_hide:e._isUnmeasuredItem(t),_as:w,_children:s,_isHorizontal:d,_isSSR:h[r]},re(s,t))};L(()=>{h[r]=!1;const t=e._subscribe(Q,i=>{i?ne.flushSync(v):v()}),s=e._subscribe(W,()=>{b[r]&&b[r](e._getScrollOffset())}),l=e._subscribe(X,()=>{z[r]&&z[r]()}),V=i=>{f._observeRoot(i),o._observe(i)};return I?Y(()=>V(I[r])):V(E[r].parentElement),()=>{t(),s(),l(),f._dispose(),o._dispose()}},[]),L(()=>{o._fixScrollJump()},[B]),a.useImperativeHandle(P,()=>({get cache(){return e._getCacheSnapshot()},get scrollOffset(){return e._getScrollOffset()},get scrollSize(){return Z(e)},get viewportSize(){return e._getViewportSize()},findStartIndex:e._findStartIndex,findEndIndex:e._findEndIndex,getItemOffset:e._getItemOffset,getItemSize:e._getItemSize,scrollToIndex:o._scrollToIndex,scrollTo:o._scrollTo,scrollBy:o._scrollBy}),[]);for(let t=T,s=R;t<=s;t++)n.push(_(t));if(S){const t=[],s=[];$(S).forEach(l=>{l<T&&t.push(_(l)),l>R&&s.push(_(l))}),n.unshift(...t),n.push(...s)}return A.jsx(c,{ref:E,style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:d?O:"100%",height:d?"100%":O,pointerEvents:G?"none":void 0},children:n})});ie.__docgenInfo={description:"Customizable list virtualizer for advanced usage. See {@link VirtualizerProps} and {@link VirtualizerHandle}.",methods:[{name:"cache",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollOffset",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollSize",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportSize",docblock:null,modifiers:["get"],params:[],returns:null}],displayName:"Virtualizer",props:{startMargin:{defaultValue:{value:"0",computed:!1},required:!1},as:{defaultValue:{value:'"div"',computed:!1},required:!1},item:{defaultValue:{value:'"div"',computed:!1},required:!1}}};export{ie as V};
