import{d as C,b as h,k as N,l as x,m as d,e as z}from"./vue.esm-bundler-CbvoPaxB.js";import{c as L,U as A,a as V,b as y,g as D,d as U,e as M,L as w,S as H,f as B,h as P,A as k}from"./_plugin-vue_export-helper-DpAhIUVZ.js";const p={data:{type:Array,required:!0},overscan:{type:Number,default:4},itemSize:Number,shift:Boolean,horizontal:Boolean,startMargin:Number,endMargin:Number,ssrCount:Number},j=C({props:p,emits:["scroll","scrollEnd","rangeChange"],setup(t,{emit:c,expose:E,slots:T}){let f=!!t.ssrCount;const i=t.horizontal,g=h(),e=L(t.data.length,t.itemSize??40,t.ssrCount,void 0,!t.itemSize,t.startMargin,t.endMargin),_=B(e,i),n=P(e,i),l=h(e._getStateVersion()),v=e._subscribe(A,()=>{l.value=e._getStateVersion()}),I=e._subscribe(V,()=>{c("scroll",e._getScrollOffset())}),O=e._subscribe(y,()=>{c("scrollEnd")});return N(()=>{f=!1;const r=g.value.parentElement;r&&(_._observeRoot(r),n._observe(r))}),x(()=>{v(),I(),O(),_._dispose(),n._dispose()}),d(()=>t.data.length,r=>{e._update(k,[r,t.shift])}),d([l,e._getJumpCount],([,r],[,o])=>{r!==o&&n._fixScrollJump()},{flush:"post"}),d([l,e._getRange],([,[r,o]],[,[u,a]])=>{u===r&&a===o||c("rangeChange",r,o)},{flush:"post"}),E({get scrollOffset(){return e._getScrollOffset()},get scrollSize(){return D(e)},get viewportSize(){return e._getViewportSize()},getItemOffset:e._getItemOffset,scrollToIndex:n._scrollToIndex,scrollTo:n._scrollTo,scrollBy:n._scrollBy}),()=>{l.value;const r=t.data.length,[o,u]=e._getRange(),a=e._getScrollDirection(),S=e._getTotalSize(),m=[];for(let[s,R]=U(o,u,t.overscan,a,r);s<=R;s++){const b=T.default(t.data[s])[0];m.push(z(w,{key:M(b,s),_resizer:_._observeItem,_index:s,_offset:e._getItemOffset(s),_hide:e._isUnmeasuredItem(s),_children:b,_isHorizontal:i,_isSSR:f},null,8,["_resizer","_index","_offset","_hide","_children","_isHorizontal","_isSSR"]))}return z("div",{ref:g,style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:i?S+"px":"100%",height:i?"100%":S+"px",pointerEvents:a!==H?"none":"auto"}},[m],4)}}});export{j as V};
