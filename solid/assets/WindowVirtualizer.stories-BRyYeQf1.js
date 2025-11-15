import{c as A,l as o,o as L,p as O,t as w,f as i,i as z,a as _,F as R,b as N,r as H,q as I,e as D,v as U}from"./iframe-URbSxfZb.js";import{c as P,h as j,U as G,b as M,d as F,L as J,j as Y,i as B,A as K}from"./utils-BVa2rAvi.js";import"./preload-helper-PPVm8Dsz.js";var Q=w("<div style=overflow-anchor:none>");const S=n=>{let l;const{ref:u,data:f,children:$,itemSize:p,shift:m,horizontal:h=!1,cache:T,onScrollEnd:ee}=n,e=P(n.data.length,p,void 0,T,!p),y=Y(e,h),g=j(e,h),[d,E]=A(e.$getStateVersion());e.$subscribe(G,()=>{E(e.$getStateVersion())}),e.$subscribe(M,()=>{n.onScroll?.()}),e.$subscribe(F,()=>{n.onScrollEnd?.()});const x=o(t=>{d();const a=e.$getRange(n.bufferSize);return t&&B(t,a)?t:a}),k=o(()=>d()&&e.$isScrolling()),V=o(()=>d()&&e.$getTotalSize());L(()=>{n.ref&&n.ref({get cache(){return e.$getCacheSnapshot()},findStartIndex:()=>e.$findItemIndex(e.$getScrollOffset()),findEndIndex:()=>e.$findItemIndex(e.$getScrollOffset()+e.$getViewportSize()),getItemOffset:e.$getItemOffset,getItemSize:e.$getItemSize,scrollToIndex:g.$scrollToIndex}),y.$observeRoot(l),g.$observe(l),U(()=>{n.ref&&n.ref(),e.$dispose(),y.$dispose(),g.$dispose()})}),O(H(d,()=>{g.$fixScrollJump()}));const W=o(()=>{const t=n.data.length;I(()=>{t!==e.$getItemsLength()&&e.$update(K,[t,n.shift])});const a=[];for(let[r,c]=x();r<=c;r++)a.push(n.data[r]);return a});return(()=>{var t=Q(),a=l;return typeof a=="function"?D(a,t):l=t,i(t,"contain","size style"),i(t,"flex","none"),i(t,"position","relative"),z(t,_(R,{get each(){return W()},children:(r,c)=>{const s=o(()=>x()[0]+c()),v=o(()=>(d(),e.$getItemOffset(s()))),C=o(()=>(d(),e.$isUnmeasuredItem(s()))),q=o(()=>I(()=>n.children(r,s)));return _(J,{get _index(){return s()},get _resizer(){return y.$observeItem},get _offset(){return v()},get _hide(){return C()},get _children(){return q()},_isHorizontal:h})}})),N(r=>{var c=h?V()+"px":"100%",s=h?"100%":V()+"px",v=k()?"none":void 0;return c!==r.e&&i(t,"width",r.e=c),s!==r.t&&i(t,"height",r.t=s),v!==r.a&&i(t,"pointer-events",r.a=v),r},{e:void 0,t:void 0,a:void 0}),t})()};try{S.displayName="WindowVirtualizer",S.__docgenInfo={description:"{@link Virtualizer } controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizerHandle}.",displayName:"WindowVirtualizer",props:{ref:{defaultValue:null,description:"Get reference to {@link WindowVirtualizerHandle}.",name:"ref",required:!1,type:{name:"((handle?: WindowVirtualizerHandle | undefined) => void) | undefined"}},data:{defaultValue:null,description:"The data items rendered by this component.",name:"data",required:!0,type:{name:"readonly T[]"}},children:{defaultValue:null,description:"The elements renderer function.",name:"children",required:!0,type:{name:"(data: T, index: Accessor<number>) => Element"}},bufferSize:{defaultValue:null,description:`Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 200`,name:"bufferSize",required:!1,type:{name:"number | undefined"}},itemSize:{defaultValue:null,description:`Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"itemSize",required:!1,type:{name:"number | undefined"}},shift:{defaultValue:null,description:"While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.",name:"shift",required:!1,type:{name:"boolean | undefined"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean | undefined"}},cache:{defaultValue:null,description:`You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WindowVirtualizerHandle.cache}.

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**`,name:"cache",required:!1,type:{name:"CacheSnapshot | undefined"}},onScroll:{defaultValue:null,description:"Callback invoked whenever scroll offset changes.",name:"onScroll",required:!1,type:{name:"(() => void) | undefined"}},onScrollEnd:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollEnd",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}var X=w("<div><div>"),Z=w('<div style="border-bottom:solid 1px #ccc">');const ie={component:S},b={render:()=>{const n=[20,40,80,77],l=Array.from({length:1e3}).map((u,f)=>n[f%4]);return(()=>{var u=X(),f=u.firstChild;return i(u,"padding","200px 100px"),i(f,"border","solid 1px gray"),z(f,_(S,{data:l,children:($,p)=>(()=>{var m=Z();return i(m,"height",$+"px"),i(m,"background","#fff"),z(m,p),m})()})),u})()}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const ae=["Default"];export{b as Default,ae as __namedExportsOrder,ie as default};
