import{c as L,l as i,o as N,p as O,i as z,a as _,F as R,b as H,t as w,r as D,q as I,u as U,s as b,v as P}from"./iframe-CGV9lI33.js";import{c as j,h as G,U as M,b as F,d as J,L as Y,j as B,i as K,A as Q}from"./utils-DI1V5x9b.js";import"./preload-helper-PPVm8Dsz.js";var X=w('<div style="contain:size style;overflow-anchor:none;flex:none;position:relative">');const y=t=>{let l;const{ref:f,data:m,children:$,itemSize:h,shift:p,horizontal:c=!1,cache:T,onScrollEnd:te}=t,e=j(t.data.length,h,void 0,T,!h),S=B(e,c),u=G(e,c),[o,E]=L(e.$getStateVersion());e.$subscribe(M,()=>{E(e.$getStateVersion())}),e.$subscribe(F,()=>{t.onScroll?.()}),e.$subscribe(J,()=>{t.onScrollEnd?.()});const V=i(n=>{o();const a=e.$getRange(t.bufferSize);return n&&K(n,a)?n:a}),k=i(()=>o()&&e.$isScrolling()),x=i(()=>o()&&e.$getTotalSize()),W=i(()=>o()&&u.$isNegative());N(()=>{t.ref&&t.ref({get cache(){return e.$getCacheSnapshot()},get scrollOffset(){return e.$getScrollOffset()},get viewportSize(){return e.$getViewportSize()},findItemIndex:e.$findItemIndex,getItemOffset:e.$getItemOffset,getItemSize:e.$getItemSize,scrollToIndex:u.$scrollToIndex}),S.$observeRoot(l),u.$observe(l),P(()=>{t.ref&&t.ref(),e.$dispose(),S.$dispose(),u.$dispose()})}),O(D(o,()=>{u.$fixScrollJump()}));const C=i(()=>{const n=t.data.length;I(()=>{n!==e.$getItemsLength()&&e.$update(Q,[n,t.shift])});const a=[];for(let[r,d]=V();r<=d;r++)a.push(t.data[r]);return a});return(()=>{var n=X(),a=l;return typeof a=="function"?U(a,n):l=n,z(n,_(R,{get each(){return C()},children:(r,d)=>{const s=i(()=>V()[0]+d()),g=i(()=>(o(),e.$getItemOffset(s(),W()))),q=i(()=>(o(),e.$isUnmeasuredItem(s()))),A=i(()=>I(()=>t.children(r,s)));return _(Y,{get _index(){return s()},get _resizer(){return S.$observeItem},get _offset(){return g()},get _hide(){return q()},get _children(){return A()},_isHorizontal:c})}})),H(r=>{var d=c?x()+"px":"100%",s=c?"100%":x()+"px",g=k()?"none":void 0;return d!==r.e&&b(n,"width",r.e=d),s!==r.t&&b(n,"height",r.t=s),g!==r.a&&b(n,"pointer-events",r.a=g),r},{e:void 0,t:void 0,a:void 0}),n})()};try{y.displayName="WindowVirtualizer",y.__docgenInfo={description:"{@link Virtualizer } controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizerHandle}.",displayName:"WindowVirtualizer",props:{ref:{defaultValue:null,description:"Get reference to {@link WindowVirtualizerHandle}.",name:"ref",required:!1,type:{name:"((handle?: WindowVirtualizerHandle | undefined) => void) | undefined"}},data:{defaultValue:null,description:"The data items rendered by this component.",name:"data",required:!0,type:{name:"readonly T[]"}},children:{defaultValue:null,description:"The elements renderer function.",name:"children",required:!0,type:{name:"(data: T, index: Accessor<number>) => Element"}},bufferSize:{defaultValue:null,description:`Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 200`,name:"bufferSize",required:!1,type:{name:"number | undefined"}},itemSize:{defaultValue:null,description:`Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"itemSize",required:!1,type:{name:"number | undefined"}},shift:{defaultValue:null,description:"While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.",name:"shift",required:!1,type:{name:"boolean | undefined"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean | undefined"}},cache:{defaultValue:null,description:`You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WindowVirtualizerHandle.cache}.

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**`,name:"cache",required:!1,type:{name:"CacheSnapshot | undefined"}},onScroll:{defaultValue:null,description:"Callback invoked whenever scroll offset changes.",name:"onScroll",required:!1,type:{name:"(() => void) | undefined"}},onScrollEnd:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollEnd",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}var Z=w('<div style="padding:200px 100px"><div style="border:solid 1px gray">'),ee=w('<div style="border-bottom:solid 1px #ccc;background:#fff">');const ae={component:y},v={render:()=>{const t=[20,40,80,77],l=Array.from({length:1e3}).map((f,m)=>t[m%4]);return(()=>{var f=Z(),m=f.firstChild;return z(m,_(y,{data:l,children:($,h)=>(()=>{var p=ee();return b(p,"height",$+"px"),z(p,h),p})()})),f})()}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sizes = [20, 40, 80, 77];
    const data = Array.from({
      length: 1000
    }).map((_, i) => sizes[i % 4]);
    return <div style={{
      padding: "200px 100px"
    }}>
        <div style={{
        border: "solid 1px gray"
      }}>
          <WindowVirtualizer data={data}>
            {(d, i) => <div style={{
            height: d + "px",
            "border-bottom": "solid 1px #ccc",
            background: "#fff"
          }}>
                {i()}
              </div>}
          </WindowVirtualizer>
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const oe=["Default"];export{v as Default,oe as __namedExportsOrder,ae as default};
