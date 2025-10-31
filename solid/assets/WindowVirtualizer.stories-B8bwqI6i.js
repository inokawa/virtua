import{c as A,l as o,o as L,p as R,t as w,f as i,i as S,a as z,F as N,b as H,r as D,q as E,e as O,v as U}from"./iframe-BPkU1BWU.js";import{c as P,h as j,U as G,b as M,d as F,L as J,j as Y,i as B,A as K}from"./utils-BPsIH2TW.js";import"./preload-helper-PPVm8Dsz.js";var Q=w("<div style=overflow-anchor:none>");const y=t=>{let l;const{ref:u,data:f,children:x,itemSize:p,shift:m,horizontal:h=!1,cache:T,onScrollEnd:ee}=t,e=P(t.data.length,p,void 0,T,!p),_=Y(e,h),v=j(e,h),[d,I]=A(e.$getStateVersion());e.$subscribe(G,()=>{I(e.$getStateVersion())}),e.$subscribe(M,()=>{t.onScroll?.()}),e.$subscribe(F,()=>{t.onScrollEnd?.()});const V=o(n=>{d();const a=e.$getRange(t.bufferSize);return n&&B(n,a)?n:a}),k=o(()=>d()&&e.$isScrolling()),$=o(()=>d()&&e.$getTotalSize());L(()=>{t.ref&&t.ref({get cache(){return e.$getCacheSnapshot()},findStartIndex:e.$findStartIndex,findEndIndex:e.$findEndIndex,scrollToIndex:v.$scrollToIndex}),_.$observeRoot(l),v.$observe(l),U(()=>{t.ref&&t.ref(),e.$dispose(),_.$dispose(),v.$dispose()})}),R(D(d,()=>{v.$fixScrollJump()}));const W=o(()=>{const n=t.data.length;E(()=>{n!==e.$getItemsLength()&&e.$update(K,[n,t.shift])});const a=[];for(let[r,c]=V();r<=c;r++)a.push(t.data[r]);return a});return(()=>{var n=Q(),a=l;return typeof a=="function"?O(a,n):l=n,i(n,"contain","size paint style"),i(n,"flex","none"),i(n,"position","relative"),S(n,z(N,{get each(){return W()},children:(r,c)=>{const s=o(()=>V()[0]+c()),g=o(()=>(d(),e.$getItemOffset(s()))),C=o(()=>(d(),e.$isUnmeasuredItem(s()))),q=o(()=>E(()=>t.children(r,s)));return z(J,{get _index(){return s()},get _resizer(){return _.$observeItem},get _offset(){return g()},get _hide(){return C()},get _children(){return q()},_isHorizontal:h})}})),H(r=>{var c=h?$()+"px":"100%",s=h?"100%":$()+"px",g=k()?"none":void 0;return c!==r.e&&i(n,"width",r.e=c),s!==r.t&&i(n,"height",r.t=s),g!==r.a&&i(n,"pointer-events",r.a=g),r},{e:void 0,t:void 0,a:void 0}),n})()};try{y.displayName="WindowVirtualizer",y.__docgenInfo={description:"{@link Virtualizer } controlled by the window scrolling. See {@link WindowVirtualizerProps} and {@link WindowVirtualizerHandle}.",displayName:"WindowVirtualizer",props:{ref:{defaultValue:null,description:"Get reference to {@link WindowVirtualizerHandle}.",name:"ref",required:!1,type:{name:"((handle?: WindowVirtualizerHandle | undefined) => void) | undefined"}},data:{defaultValue:null,description:"The data items rendered by this component.",name:"data",required:!0,type:{name:"readonly T[]"}},children:{defaultValue:null,description:"The elements renderer function.",name:"children",required:!0,type:{name:"(data: T, index: Accessor<number>) => Element"}},bufferSize:{defaultValue:null,description:`Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 200`,name:"bufferSize",required:!1,type:{name:"number | undefined"}},itemSize:{defaultValue:null,description:`Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"itemSize",required:!1,type:{name:"number | undefined"}},shift:{defaultValue:null,description:"While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.",name:"shift",required:!1,type:{name:"boolean | undefined"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean | undefined"}},cache:{defaultValue:null,description:`You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WindowVirtualizerHandle.cache}.

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**`,name:"cache",required:!1,type:{name:"CacheSnapshot | undefined"}},onScroll:{defaultValue:null,description:"Callback invoked whenever scroll offset changes.",name:"onScroll",required:!1,type:{name:"(() => void) | undefined"}},onScrollEnd:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollEnd",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}var X=w("<div><div>"),Z=w('<div style="border-bottom:solid 1px #ccc">');const ie={component:y},b={render:()=>{const t=[20,40,80,77],l=Array.from({length:1e3}).map((u,f)=>t[f%4]);return(()=>{var u=X(),f=u.firstChild;return i(u,"padding","200px 100px"),i(f,"border","solid 1px gray"),S(f,z(y,{data:l,children:(x,p)=>(()=>{var m=Z();return i(m,"height",x+"px"),i(m,"background","#fff"),S(m,p),m})()})),u})()}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
