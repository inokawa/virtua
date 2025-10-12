import{c as U,l as i,o as W,p as P,t as E,s as o,i as b,a as x,b as k,q as H,r as T,e as M,F as j,v as F}from"./iframe-wg7L6So_.js";import{c as G,h as q,U as J,b as B,d as K,i as Q,A as X,L as Y,j as Z}from"./utils-BUtCYh2b.js";import"./preload-helper-PPVm8Dsz.js";var ee=E("<div style=overflow-anchor:none>");const y=n=>{let d;const{ref:f,data:g,children:z,overscan:S,itemSize:a,shift:re,horizontal:h=!1,cache:V,onScrollEnd:oe}=n,t=G(n.data.length,a,S,void 0,V,!a),$=Z(t,h),m=q(t,h),[l,A]=U(t.$getStateVersion()),R=t.$subscribe(J,()=>{A(t.$getStateVersion())}),w=t.$subscribe(B,()=>{n.onScroll?.()}),L=t.$subscribe(K,()=>{n.onScrollEnd?.()}),p=i(e=>{l();const s=t.$getRange();return e&&Q(e,s)?e:s}),C=i(()=>l()&&t.$isScrolling()),I=i(()=>l()&&t.$getTotalSize());W(()=>{n.ref&&n.ref({get cache(){return t.$getCacheSnapshot()},findStartIndex:t.$findStartIndex,findEndIndex:t.$findEndIndex,scrollToIndex:m.$scrollToIndex}),$.$observeRoot(d),m.$observe(d),F(()=>{n.ref&&n.ref(),R(),w(),L(),$.$dispose(),m.$dispose()})}),P(H(l,()=>{m.$fixScrollJump()}));const O=i(()=>{const e=n.data.length;T(()=>{e!==t.$getItemsLength()&&t.$update(X,[e,n.shift])});const s=[];for(let[r,u]=p();r<=u;r++)s.push(n.data[r]);return s});return(()=>{var e=ee(),s=d;return typeof s=="function"?M(s,e):d=e,o(e,"contain","size paint style"),o(e,"overflow","clip"),o(e,"flex","none"),o(e,"position","relative"),b(e,x(j,{get each(){return O()},children:(r,u)=>{const c=i(()=>p()[0]+u()),v=i(()=>(l(),t.$getItemOffset(c()))),D=i(()=>(l(),t.$isUnmeasuredItem(c()))),N=i(()=>T(()=>n.children(r,c)));return x(Y,{get _index(){return c()},get _resizer(){return $.$observeItem},get _offset(){return v()},get _hide(){return D()},get _children(){return N()},_isHorizontal:h})}})),k(r=>{var u=h?I()+"px":"100%",c=h?"100%":I()+"px",v=C()?"none":void 0;return u!==r.e&&o(e,"width",r.e=u),c!==r.t&&o(e,"height",r.t=c),v!==r.a&&o(e,"pointer-events",r.a=v),r},{e:void 0,t:void 0,a:void 0}),e})()};var te=E("<div><div>"),ne=E('<div style="border-bottom:solid 1px #ccc">');const ce={component:y},_={render:()=>{const n=[20,40,80,77],d=Array.from({length:1e3}).map((f,g)=>n[g%4]);return(()=>{var f=te(),g=f.firstChild;return o(f,"padding","200px 100px"),o(g,"border","solid 1px gray"),b(g,x(y,{data:d,children:(z,S)=>(()=>{var a=ne();return o(a,"height",z+"px"),o(a,"background","#fff"),b(a,S),a})()})),f})()}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
