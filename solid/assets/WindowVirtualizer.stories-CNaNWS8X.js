import{c as D,l as a,o as N,p as U,t as E,s as i,i as x,a as b,b as W,q as O,r as T,e as P,F as k,v as H}from"./iframe-Dhr-Rm2n.js";import{c as M,h as j,U as F,b as G,d as q,i as J,A as B,L as K,j as Q}from"./utils-BX4zUp_t.js";import"./preload-helper-PPVm8Dsz.js";var X=E("<div style=overflow-anchor:none>");const y=r=>{let d;const{ref:f,data:u,children:z,itemSize:m,shift:g,horizontal:h=!1,cache:V,onScrollEnd:ee}=r,e=M(r.data.length,m,void 0,V,!m),S=Q(e,h),v=j(e,h),[c,A]=D(e.$getStateVersion());e.$subscribe(F,()=>{A(e.$getStateVersion())}),e.$subscribe(G,()=>{r.onScroll?.()}),e.$subscribe(q,()=>{r.onScrollEnd?.()});const I=a(t=>{c();const o=e.$getRange(r.bufferSize);return t&&J(t,o)?t:o}),R=a(()=>c()&&e.$isScrolling()),p=a(()=>c()&&e.$getTotalSize());N(()=>{r.ref&&r.ref({get cache(){return e.$getCacheSnapshot()},findStartIndex:e.$findStartIndex,findEndIndex:e.$findEndIndex,scrollToIndex:v.$scrollToIndex}),S.$observeRoot(d),v.$observe(d),H(()=>{r.ref&&r.ref(),e.$dispose(),S.$dispose(),v.$dispose()})}),U(O(c,()=>{v.$fixScrollJump()}));const w=a(()=>{const t=r.data.length;T(()=>{t!==e.$getItemsLength()&&e.$update(B,[t,r.shift])});const o=[];for(let[n,l]=I();n<=l;n++)o.push(r.data[n]);return o});return(()=>{var t=X(),o=d;return typeof o=="function"?P(o,t):d=t,i(t,"contain","size paint style"),i(t,"overflow","clip"),i(t,"flex","none"),i(t,"position","relative"),x(t,b(k,{get each(){return w()},children:(n,l)=>{const s=a(()=>I()[0]+l()),_=a(()=>(c(),e.$getItemOffset(s()))),L=a(()=>(c(),e.$isUnmeasuredItem(s()))),C=a(()=>T(()=>r.children(n,s)));return b(K,{get _index(){return s()},get _resizer(){return S.$observeItem},get _offset(){return _()},get _hide(){return L()},get _children(){return C()},_isHorizontal:h})}})),W(n=>{var l=h?p()+"px":"100%",s=h?"100%":p()+"px",_=R()?"none":void 0;return l!==n.e&&i(t,"width",n.e=l),s!==n.t&&i(t,"height",n.t=s),_!==n.a&&i(t,"pointer-events",n.a=_),n},{e:void 0,t:void 0,a:void 0}),t})()};var Y=E("<div><div>"),Z=E('<div style="border-bottom:solid 1px #ccc">');const ie={component:y},$={render:()=>{const r=[20,40,80,77],d=Array.from({length:1e3}).map((f,u)=>r[u%4]);return(()=>{var f=Y(),u=f.firstChild;return i(f,"padding","200px 100px"),i(u,"border","solid 1px gray"),x(u,b(y,{data:d,children:(z,m)=>(()=>{var g=Z();return i(g,"height",z+"px"),i(g,"background","#fff"),x(g,m),g})()})),f})()}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};const oe=["Default"];export{$ as Default,oe as __namedExportsOrder,ie as default};
