import{c as U,l as s,o as W,p as P,t as E,s as o,i as b,a as x,b as k,q as H,r as p,e as M,F as j,v as F}from"./iframe-CXkGEdWg.js";import{c as G,h as q,U as J,b as B,d as K,i as Q,A as X,L as Y,j as Z}from"./utils-DnHxAcfR.js";import"./preload-helper-PPVm8Dsz.js";var ee=E("<div style=overflow-anchor:none>");const y=n=>{let c;const{ref:u,data:f,children:z,itemSize:m,shift:g,horizontal:h=!1,cache:V,onScrollEnd:re}=n,t=G(n.data.length,m,void 0,V,!m),$=Z(t,h),v=q(t,h),[d,A]=U(t.$getStateVersion()),R=t.$subscribe(J,()=>{A(t.$getStateVersion())}),w=t.$subscribe(B,()=>{n.onScroll?.()}),L=t.$subscribe(K,()=>{n.onScrollEnd?.()}),I=s(e=>{d();const i=t.$getRange(n.bufferSize);return e&&Q(e,i)?e:i}),C=s(()=>d()&&t.$isScrolling()),T=s(()=>d()&&t.$getTotalSize());W(()=>{n.ref&&n.ref({get cache(){return t.$getCacheSnapshot()},findStartIndex:t.$findStartIndex,findEndIndex:t.$findEndIndex,scrollToIndex:v.$scrollToIndex}),$.$observeRoot(c),v.$observe(c),F(()=>{n.ref&&n.ref(),R(),w(),L(),$.$dispose(),v.$dispose()})}),P(H(d,()=>{v.$fixScrollJump()}));const O=s(()=>{const e=n.data.length;p(()=>{e!==t.$getItemsLength()&&t.$update(X,[e,n.shift])});const i=[];for(let[r,l]=I();r<=l;r++)i.push(n.data[r]);return i});return(()=>{var e=ee(),i=c;return typeof i=="function"?M(i,e):c=e,o(e,"contain","size paint style"),o(e,"overflow","clip"),o(e,"flex","none"),o(e,"position","relative"),b(e,x(j,{get each(){return O()},children:(r,l)=>{const a=s(()=>I()[0]+l()),_=s(()=>(d(),t.$getItemOffset(a()))),D=s(()=>(d(),t.$isUnmeasuredItem(a()))),N=s(()=>p(()=>n.children(r,a)));return x(Y,{get _index(){return a()},get _resizer(){return $.$observeItem},get _offset(){return _()},get _hide(){return D()},get _children(){return N()},_isHorizontal:h})}})),k(r=>{var l=h?T()+"px":"100%",a=h?"100%":T()+"px",_=C()?"none":void 0;return l!==r.e&&o(e,"width",r.e=l),a!==r.t&&o(e,"height",r.t=a),_!==r.a&&o(e,"pointer-events",r.a=_),r},{e:void 0,t:void 0,a:void 0}),e})()};var te=E("<div><div>"),ne=E('<div style="border-bottom:solid 1px #ccc">');const ae={component:y},S={render:()=>{const n=[20,40,80,77],c=Array.from({length:1e3}).map((u,f)=>n[f%4]);return(()=>{var u=te(),f=u.firstChild;return o(u,"padding","200px 100px"),o(f,"border","solid 1px gray"),b(f,x(y,{data:c,children:(z,m)=>(()=>{var g=ne();return o(g,"height",z+"px"),o(g,"background","#fff"),b(g,m),g})()})),u})()}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const ce=["Default"];export{S as Default,ce as __namedExportsOrder,ae as default};
