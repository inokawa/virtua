import{c as U,l as a,o as W,p as P,t as E,s,i as x,a as b,b as k,q as H,r as T,e as M,F as j,v as F}from"./iframe-Bqc5YeRu.js";import{c as G,h as q,U as J,b as B,d as K,i as Q,A as X,L as Y,j as Z}from"./utils-pQW3VAbo.js";import"./preload-helper-PPVm8Dsz.js";var ee=E("<div style=overflow-anchor:none>");const y=n=>{let l;const{ref:g,data:h,children:I,overscan:S,itemSize:i,shift:re,horizontal:m=!1,cache:V,onScrollEnd:oe}=n,t=G(n.data.length,i,S,void 0,V,!i),$=Z(t,m),v=q(t,m),[u,A]=U(t.$getStateVersion()),R=t.$subscribe(J,()=>{A(t.$getStateVersion())}),w=t.$subscribe(B,()=>{n.onScroll?.()}),L=t.$subscribe(K,()=>{n.onScrollEnd?.()}),z=a(e=>{u();const c=t.$getRange();return e&&Q(e,c)?e:c}),C=a(()=>u()&&t.$isScrolling()),p=a(()=>u()&&t.$getTotalSize());W(()=>{n.ref&&n.ref({get cache(){return t.$getCacheSnapshot()},findStartIndex:t.$findStartIndex,findEndIndex:t.$findEndIndex,scrollToIndex:v.$scrollToIndex}),$.$observeRoot(l),v.$observe(l),F(()=>{n.ref&&n.ref(),R(),w(),L(),$.$dispose(),v.$dispose()})}),P(H(u,()=>{v.$fixScrollJump()}));const O=a(()=>{const e=n.data.length;T(()=>{e!==t.$getItemsLength()&&t.$update(X,[e,n.shift])});const[c,r]=z(),d=[];for(let o=c,f=r;o<=f;o++)d.push(n.data[o]);return d});return(()=>{var e=ee(),c=l;return typeof c=="function"?M(c,e):l=e,s(e,"contain","size paint style"),s(e,"overflow","clip"),s(e,"flex","none"),s(e,"position","relative"),x(e,b(j,{get each(){return O()},children:(r,d)=>{const o=a(()=>z()[0]+d()),f=a(()=>(u(),t.$getItemOffset(o()))),D=a(()=>(u(),t.$isUnmeasuredItem(o()))),N=a(()=>T(()=>n.children(r,o)));return b(Y,{get _index(){return o()},get _resizer(){return $.$observeItem},get _offset(){return f()},get _hide(){return D()},get _children(){return N()},_isHorizontal:m})}})),k(r=>{var d=m?p()+"px":"100%",o=m?"100%":p()+"px",f=C()?"none":void 0;return d!==r.e&&s(e,"width",r.e=d),o!==r.t&&s(e,"height",r.t=o),f!==r.a&&s(e,"pointer-events",r.a=f),r},{e:void 0,t:void 0,a:void 0}),e})()};var te=E("<div><div>"),ne=E('<div style="border-bottom:solid 1px #ccc">');const ce={component:y},_={render:()=>{const n=[20,40,80,77],l=Array.from({length:1e3}).map((g,h)=>n[h%4]);return(()=>{var g=te(),h=g.firstChild;return s(g,"padding","200px 100px"),s(h,"border","solid 1px gray"),x(h,b(y,{data:l,children:(I,S)=>(()=>{var i=ne();return s(i,"height",I+"px"),s(i,"background","#fff"),x(i,S),i})()})),g})()}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const de=["Default"];export{_ as Default,de as __namedExportsOrder,ce as default};
