import{c as L,l as o,o as N,p as O,t as w,f as i,i as z,a as _,F as R,b as H,r as D,q as T,e as U,v as P}from"./iframe-Cca2FJqg.js";import{c as j,h as G,U as M,b as F,d as J,L as K,j as Y,i as B,A as Q}from"./utils-OnH6FHWO.js";import"./preload-helper-PPVm8Dsz.js";var X=w("<div style=overflow-anchor:none>");const y=n=>{let c;const{ref:f,data:m,children:$,itemSize:g,shift:h,horizontal:u=!1,cache:E,onScrollEnd:te}=n,e=j(n.data.length,g,void 0,E,!g),S=Y(e,u),p=G(e,u),[l,k]=L(e.$getStateVersion());e.$subscribe(M,()=>{k(e.$getStateVersion())}),e.$subscribe(F,()=>{n.onScroll?.()}),e.$subscribe(J,()=>{n.onScrollEnd?.()});const V=o(t=>{l();const d=e.$getRange(n.bufferSize);return t&&B(t,d)?t:d}),W=o(()=>l()&&e.$isScrolling()),x=o(()=>l()&&e.$getTotalSize()),I=o(()=>l()&&p.$isNegative());N(()=>{n.ref&&n.ref({get cache(){return e.$getCacheSnapshot()},get scrollOffset(){return e.$getScrollOffset()},get viewportSize(){return e.$getViewportSize()},findItemIndex:e.$findItemIndex,getItemOffset:e.$getItemOffset,getItemSize:e.$getItemSize,scrollToIndex:p.$scrollToIndex}),S.$observeRoot(c),p.$observe(c),P(()=>{n.ref&&n.ref(),e.$dispose(),S.$dispose(),p.$dispose()})}),O(D(l,()=>{p.$fixScrollJump()}));const C=o(()=>{const t=n.data.length;T(()=>{t!==e.$getItemsLength()&&e.$update(Q,[t,n.shift])});const d=!u&&I()?"unshift":"push",r=[];for(let[s,a]=V();s<=a;s++)r[d](n.data[s]);return r});return(()=>{var t=X(),d=c;return typeof d=="function"?U(d,t):c=t,i(t,"contain","size style"),i(t,"flex","none"),i(t,"position","relative"),z(t,_(R,{get each(){return C()},children:(r,s)=>{const a=o(()=>V()[0]+s()),v=o(()=>(l(),e.$getItemOffset(a(),I()))),q=o(()=>(l(),e.$isUnmeasuredItem(a()))),A=o(()=>T(()=>n.children(r,a)));return _(K,{get _index(){return a()},get _resizer(){return S.$observeItem},get _offset(){return v()},get _hide(){return q()},get _children(){return A()},_isHorizontal:u})}})),H(r=>{var s=u?x()+"px":"100%",a=u?"100%":x()+"px",v=W()?"none":void 0;return s!==r.e&&i(t,"width",r.e=s),a!==r.t&&i(t,"height",r.t=a),v!==r.a&&i(t,"pointer-events",r.a=v),r},{e:void 0,t:void 0,a:void 0}),t})()};try{y.displayName="WindowVirtualizer",y.__docgenInfo={description:"{@link Virtualizer } controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizerHandle}.",displayName:"WindowVirtualizer",props:{ref:{defaultValue:null,description:"Get reference to {@link WindowVirtualizerHandle}.",name:"ref",required:!1,type:{name:"((handle?: WindowVirtualizerHandle | undefined) => void) | undefined"}},data:{defaultValue:null,description:"The data items rendered by this component.",name:"data",required:!0,type:{name:"readonly T[]"}},children:{defaultValue:null,description:"The elements renderer function.",name:"children",required:!0,type:{name:"(data: T, index: Accessor<number>) => Element"}},bufferSize:{defaultValue:null,description:`Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 200`,name:"bufferSize",required:!1,type:{name:"number | undefined"}},itemSize:{defaultValue:null,description:`Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"itemSize",required:!1,type:{name:"number | undefined"}},shift:{defaultValue:null,description:"While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.",name:"shift",required:!1,type:{name:"boolean | undefined"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean | undefined"}},cache:{defaultValue:null,description:`You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WindowVirtualizerHandle.cache}.

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**`,name:"cache",required:!1,type:{name:"CacheSnapshot | undefined"}},onScroll:{defaultValue:null,description:"Callback invoked whenever scroll offset changes.",name:"onScroll",required:!1,type:{name:"(() => void) | undefined"}},onScrollEnd:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollEnd",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}var Z=w("<div><div>"),ee=w('<div style="border-bottom:solid 1px #ccc">');const ae={component:y},b={render:()=>{const n=[20,40,80,77],c=Array.from({length:1e3}).map((f,m)=>n[m%4]);return(()=>{var f=Z(),m=f.firstChild;return i(f,"padding","200px 100px"),i(m,"border","solid 1px gray"),z(m,_(y,{data:c,children:($,g)=>(()=>{var h=ee();return i(h,"height",$+"px"),i(h,"background","#fff"),z(h,g),h})()})),f})()}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const oe=["Default"];export{b as Default,oe as __namedExportsOrder,ae as default};
