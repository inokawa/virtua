import{c as U,l as s,o as W,p as P,t as E,s as o,i as b,a as x,b as k,q as H,r as p,e as M,F,v as G}from"./iframe-CouGoxWk.js";import{c as j,h as q,U as J,b as B,d as K,i as Q,A as X,L as Y,j as Z}from"./utils-B1hQoGD-.js";import"./preload-helper-PPVm8Dsz.js";var ee=E("<div style=overflow-anchor:none>");const y=n=>{let d;const{ref:u,data:f,children:z,overscan:S,itemSize:a,shift:re,horizontal:g=!1,cache:V,onScrollEnd:oe}=n,t=j(n.data.length,a,S,void 0,V,!a),$=Z(t,g),h=q(t,g),[l,A]=U(t.$getStateVersion()),R=t.$subscribe(J,()=>{A(t.$getStateVersion())}),w=t.$subscribe(B,()=>{n.onScroll?.()}),L=t.$subscribe(K,()=>{n.onScrollEnd?.()}),I=s(e=>{l();const i=t.$getRange();return e&&Q(e,i)?e:i}),C=s(()=>l()&&t.$isScrolling()),T=s(()=>l()&&t.$getTotalSize());W(()=>{n.ref&&n.ref({get cache(){return t.$getCacheSnapshot()},findStartIndex:t.$findStartIndex,findEndIndex:t.$findEndIndex,scrollToIndex:h.$scrollToIndex}),$.$observeRoot(d),h.$observe(d),G(()=>{n.ref&&n.ref(),R(),w(),L(),$.$dispose(),h.$dispose()})}),P(H(l,()=>{h.$fixScrollJump()}));const O=s(()=>{const e=n.data.length;p(()=>{e!==t.$getItemsLength()&&t.$update(X,[e,n.shift])});const[i,r]=I();return r>=0?n.data.slice(i,r+1):[]});return(()=>{var e=ee(),i=d;return typeof i=="function"?M(i,e):d=e,o(e,"contain","strict"),o(e,"overflow","clip"),o(e,"flex","none"),o(e,"position","relative"),b(e,x(F,{get each(){return O()},children:(r,m)=>{const c=s(()=>I()[0]+m()),v=s(()=>(l(),t.$getItemOffset(c()))),D=s(()=>(l(),t.$isUnmeasuredItem(c()))),N=s(()=>p(()=>n.children(r,c)));return x(Y,{get _index(){return c()},get _resizer(){return $.$observeItem},get _offset(){return v()},get _hide(){return D()},get _children(){return N()},_isHorizontal:g})}})),k(r=>{var m=g?T()+"px":"100%",c=g?"100%":T()+"px",v=C()?"none":void 0;return m!==r.e&&o(e,"width",r.e=m),c!==r.t&&o(e,"height",r.t=c),v!==r.a&&o(e,"pointer-events",r.a=v),r},{e:void 0,t:void 0,a:void 0}),e})()};var te=E("<div><div>"),ne=E('<div style="border-bottom:solid 1px #ccc">');const ce={component:y},_={render:()=>{const n=[20,40,80,77],d=Array.from({length:1e3}).map((u,f)=>n[f%4]);return(()=>{var u=te(),f=u.firstChild;return o(u,"padding","200px 100px"),o(f,"border","solid 1px gray"),b(f,x(y,{data:d,children:(z,S)=>(()=>{var a=ne();return o(a,"height",z+"px"),o(a,"background","#fff"),b(a,S),a})()})),u})()}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
