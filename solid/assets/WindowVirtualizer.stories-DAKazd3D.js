import{c as D,l as o,o as N,p as U,t as E,s as a,i as x,a as b,b as W,q as O,r as p,e as P,F as k,v as H}from"./iframe-xgMg3iNZ.js";import{c as M,h as j,U as F,b as G,d as q,i as J,A as B,L as K,j as Q}from"./utils-zhSLsHAj.js";import"./preload-helper-PPVm8Dsz.js";var X=E("<div style=overflow-anchor:none>");const y=r=>{let d;const{ref:f,data:u,children:z,itemSize:m,shift:g,horizontal:h=!1,cache:V,onScrollEnd:ee}=r,e=M(r.data.length,m,void 0,V,!m),S=Q(e,h),_=j(e,h),[c,A]=D(e.$getStateVersion());e.$subscribe(F,()=>{A(e.$getStateVersion())}),e.$subscribe(G,()=>{r.onScroll?.()}),e.$subscribe(q,()=>{r.onScrollEnd?.()});const I=o(t=>{c();const i=e.$getRange(r.bufferSize);return t&&J(t,i)?t:i}),R=o(()=>c()&&e.$isScrolling()),T=o(()=>c()&&e.$getTotalSize());N(()=>{r.ref&&r.ref({get cache(){return e.$getCacheSnapshot()},findStartIndex:e.$findStartIndex,findEndIndex:e.$findEndIndex,scrollToIndex:_.$scrollToIndex}),S.$observeRoot(d),_.$observe(d),H(()=>{r.ref&&r.ref(),e.$dispose(),S.$dispose(),_.$dispose()})}),U(O(c,()=>{_.$fixScrollJump()}));const L=o(()=>{const t=r.data.length;p(()=>{t!==e.$getItemsLength()&&e.$update(B,[t,r.shift])});const i=[];for(let[n,l]=I();n<=l;n++)i.push(r.data[n]);return i});return(()=>{var t=X(),i=d;return typeof i=="function"?P(i,t):d=t,a(t,"contain","size paint style"),a(t,"flex","none"),a(t,"position","relative"),x(t,b(k,{get each(){return L()},children:(n,l)=>{const s=o(()=>I()[0]+l()),v=o(()=>(c(),e.$getItemOffset(s()))),w=o(()=>(c(),e.$isUnmeasuredItem(s()))),C=o(()=>p(()=>r.children(n,s)));return b(K,{get _index(){return s()},get _resizer(){return S.$observeItem},get _offset(){return v()},get _hide(){return w()},get _children(){return C()},_isHorizontal:h})}})),W(n=>{var l=h?T()+"px":"100%",s=h?"100%":T()+"px",v=R()?"none":void 0;return l!==n.e&&a(t,"width",n.e=l),s!==n.t&&a(t,"height",n.t=s),v!==n.a&&a(t,"pointer-events",n.a=v),n},{e:void 0,t:void 0,a:void 0}),t})()};var Y=E("<div><div>"),Z=E('<div style="border-bottom:solid 1px #ccc">');const ae={component:y},$={render:()=>{const r=[20,40,80,77],d=Array.from({length:1e3}).map((f,u)=>r[u%4]);return(()=>{var f=Y(),u=f.firstChild;return a(f,"padding","200px 100px"),a(u,"border","solid 1px gray"),x(u,b(y,{data:d,children:(z,m)=>(()=>{var g=Z();return a(g,"height",z+"px"),a(g,"background","#fff"),x(g,m),g})()})),f})()}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};const ie=["Default"];export{$ as Default,ie as __namedExportsOrder,ae as default};
