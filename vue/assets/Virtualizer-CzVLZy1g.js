import{d as V,b,m as c,q as L,s as j,v as d,e as E,i as H}from"./vue.esm-bundler-lSza16jR.js";import{c as U,U as w,a as B,b as D,m as M,g as p,d as G,L as P,e as k,f as q,i as F,A as J,h as K}from"./_plugin-vue_export-helper-dXY3n-Nj.js";function Q(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!H(t)}const W={data:{type:Array,required:!0},overscan:Number,itemSize:Number,shift:Boolean,horizontal:Boolean,startMargin:{type:Number,default:0},ssrCount:Number,scrollRef:Object,as:{type:String,default:"div"},item:{type:String,default:"div"}},Z=V({props:W,emits:["scroll","scrollEnd"],setup(t,{emit:_,expose:z,slots:v}){let f=!!t.ssrCount;const l=t.horizontal,S=b(),e=U(t.data.length,t.itemSize,t.overscan,t.ssrCount,void 0,!t.itemSize),u=k(e,l),r=q(e,l),o=b(e._getStateVersion()),T=e._subscribe(w,()=>{o.value=e._getStateVersion()}),I=e._subscribe(B,()=>{_("scroll",e._getScrollOffset())}),h=e._subscribe(D,()=>{_("scrollEnd")}),x=c(n=>{o.value;const s=e._getRange();return n&&F(n,s)?n:s}),O=c(()=>o.value&&e._isScrolling()),R=c(()=>o.value&&e._getTotalSize()),y=c(()=>o.value&&e._getJumpCount());return L(()=>{f=!1,M(()=>{const n=s=>{u._observeRoot(s),r._observe(s)};t.scrollRef?n(t.scrollRef):n(S.value.parentElement)})}),j(()=>{T(),I(),h(),u._dispose(),r._dispose()}),d(()=>t.data.length,n=>{e._update(J,[n,t.shift])}),d(()=>t.startMargin,n=>{e._update(K,n)},{immediate:!0}),d([y],()=>{r._fixScrollJump()},{flush:"post"}),z({get scrollOffset(){return e._getScrollOffset()},get scrollSize(){return p(e)},get viewportSize(){return e._getViewportSize()},findStartIndex:e._findStartIndex,findEndIndex:e._findEndIndex,getItemOffset:e._getItemOffset,getItemSize:e._getItemSize,scrollToIndex:r._scrollToIndex,scrollTo:r._scrollTo,scrollBy:r._scrollBy}),()=>{const n=t.as,s=t.item,[N,A]=x.value,m=R.value,a=[];for(let i=N,C=A;i<=C;i++){const g=v.default({item:t.data[i],index:i})[0];a.push(E(P,{key:G(g,i),_rerender:o,_store:e,_resizer:u._observeItem,_index:i,_children:g,_isHorizontal:l,_isSSR:f,_as:s},null,8,["_rerender","_store","_resizer","_index","_children","_isHorizontal","_isSSR","_as"]))}return E(n,{ref:S,style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:l?m+"px":"100%",height:l?"100%":m+"px",pointerEvents:O.value?"none":void 0}},Q(a)?a:{default:()=>[a],_:2},8,["style"])}}});export{Z as V};