import{c as L,l as a,o as N,p as O,t as w,f as i,i as z,a as _,F as R,b as H,r as D,q as I,e as U,v as P}from"./iframe-dlGyoWNi.js";import{c as j,h as G,U as M,b as F,d as J,L as Y,j as B,i as K,A as Q}from"./utils--bRAbBhN.js";import"./preload-helper-PPVm8Dsz.js";var X=w("<div style=overflow-anchor:none>");const y=n=>{let d;const{ref:u,data:f,children:$,itemSize:g,shift:m,horizontal:h=!1,cache:T,onScrollEnd:te}=n,e=j(n.data.length,g,void 0,T,!g),S=B(e,h),p=G(e,h),[s,E]=L(e.$getStateVersion());e.$subscribe(M,()=>{E(e.$getStateVersion())}),e.$subscribe(F,()=>{n.onScroll?.()}),e.$subscribe(J,()=>{n.onScrollEnd?.()});const V=a(t=>{s();const o=e.$getRange(n.bufferSize);return t&&K(t,o)?t:o}),k=a(()=>s()&&e.$isScrolling()),x=a(()=>s()&&e.$getTotalSize()),W=a(()=>s()&&p.$isNegative());N(()=>{n.ref&&n.ref({get cache(){return e.$getCacheSnapshot()},get scrollOffset(){return e.$getScrollOffset()},get viewportSize(){return e.$getViewportSize()},findItemIndex:e.$findItemIndex,getItemOffset:e.$getItemOffset,getItemSize:e.$getItemSize,scrollToIndex:p.$scrollToIndex}),S.$observeRoot(d),p.$observe(d),P(()=>{n.ref&&n.ref(),e.$dispose(),S.$dispose(),p.$dispose()})}),O(D(s,()=>{p.$fixScrollJump()}));const C=a(()=>{const t=n.data.length;I(()=>{t!==e.$getItemsLength()&&e.$update(Q,[t,n.shift])});const o=[];for(let[r,c]=V();r<=c;r++)o.push(n.data[r]);return o});return(()=>{var t=X(),o=d;return typeof o=="function"?U(o,t):d=t,i(t,"contain","size style"),i(t,"flex","none"),i(t,"position","relative"),z(t,_(R,{get each(){return C()},children:(r,c)=>{const l=a(()=>V()[0]+c()),v=a(()=>(s(),e.$getItemOffset(l(),W()))),q=a(()=>(s(),e.$isUnmeasuredItem(l()))),A=a(()=>I(()=>n.children(r,l)));return _(Y,{get _index(){return l()},get _resizer(){return S.$observeItem},get _offset(){return v()},get _hide(){return q()},get _children(){return A()},_isHorizontal:h})}})),H(r=>{var c=h?x()+"px":"100%",l=h?"100%":x()+"px",v=k()?"none":void 0;return c!==r.e&&i(t,"width",r.e=c),l!==r.t&&i(t,"height",r.t=l),v!==r.a&&i(t,"pointer-events",r.a=v),r},{e:void 0,t:void 0,a:void 0}),t})()};try{y.displayName="WindowVirtualizer",y.__docgenInfo={description:"{@link Virtualizer } controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizerHandle}.",displayName:"WindowVirtualizer",props:{ref:{defaultValue:null,description:"Get reference to {@link WindowVirtualizerHandle}.",name:"ref",required:!1,type:{name:"((handle?: WindowVirtualizerHandle | undefined) => void) | undefined"}},data:{defaultValue:null,description:"The data items rendered by this component.",name:"data",required:!0,type:{name:"readonly T[]"}},children:{defaultValue:null,description:"The elements renderer function.",name:"children",required:!0,type:{name:"(data: T, index: Accessor<number>) => Element"}},bufferSize:{defaultValue:null,description:`Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 200`,name:"bufferSize",required:!1,type:{name:"number | undefined"}},itemSize:{defaultValue:null,description:`Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"itemSize",required:!1,type:{name:"number | undefined"}},shift:{defaultValue:null,description:"While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.",name:"shift",required:!1,type:{name:"boolean | undefined"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean | undefined"}},cache:{defaultValue:null,description:`You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WindowVirtualizerHandle.cache}.

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**`,name:"cache",required:!1,type:{name:"CacheSnapshot | undefined"}},onScroll:{defaultValue:null,description:"Callback invoked whenever scroll offset changes.",name:"onScroll",required:!1,type:{name:"(() => void) | undefined"}},onScrollEnd:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollEnd",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}var Z=w("<div><div>"),ee=w('<div style="border-bottom:solid 1px #ccc">');const ae={component:y},b={render:()=>{const n=[20,40,80,77],d=Array.from({length:1e3}).map((u,f)=>n[f%4]);return(()=>{var u=Z(),f=u.firstChild;return i(u,"padding","200px 100px"),i(f,"border","solid 1px gray"),z(f,_(y,{data:d,children:($,g)=>(()=>{var m=ee();return i(m,"height",$+"px"),i(m,"background","#fff"),z(m,g),m})()})),u})()}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
