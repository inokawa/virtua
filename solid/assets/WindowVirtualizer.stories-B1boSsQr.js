import{c as O,h as g,o as D,j as N,k as U,i as S,d as b,e as W,t as x,u as k,l as H,n as P}from"./web-DSIcfvkV.js";import{c as M,U as j,a as G,b as F,L as J,R as q,h as B,i as K,j as Q,A as X}from"./utils-EGZ2cTVs.js";var Y=x("<div>");const R=t=>{let i;const{ref:l,data:d,children:h,overscan:_,itemSize:n,shift:te,horizontal:c=!1,onScrollEnd:re}=t,r=M(t.data.length,n,_,void 0,void 0,!n),$=B(r,c),v=Q(r,c),[a,p]=O(r.$getStateVersion()),V=r.$subscribe(j,()=>{p(r.$getStateVersion())}),A=r.$subscribe(G,()=>{var e;(e=t.onScroll)==null||e.call(t)}),w=r.$subscribe(F,()=>{var e;(e=t.onScrollEnd)==null||e.call(t)}),L=g(e=>{a();const u=r.$getRange();return e&&K(e,u)?e:u}),C=g(()=>a()&&r.$isScrolling()),E=g(()=>a()&&r.$getTotalSize());return D(()=>{t.ref&&t.ref({findStartIndex:r.$findStartIndex,findEndIndex:r.$findEndIndex,scrollToIndex:v.$scrollToIndex}),$.$observeRoot(i),v.$observe(i),H(()=>{t.ref&&t.ref(),V(),A(),w(),$.$dispose(),v.$dispose()})}),N(P(()=>t.data.length,e=>{e!==r.$getItemsLength()&&r.$update(X,[e,t.shift])})),U(P(a,()=>{v.$fixScrollJump()})),(()=>{var e=Y(),u=i;return typeof u=="function"?k(u,e):i=e,e.style.setProperty("overflow-anchor","none"),e.style.setProperty("flex","none"),e.style.setProperty("position","relative"),e.style.setProperty("visibility","hidden"),S(e,b(q,{get _each(){return t.data},get _range(){return L()},_render:(s,o)=>{const f=g(()=>(a(),r.$getItemOffset(o))),y=g(()=>(a(),r.$isUnmeasuredItem(o)));return b(J,{_index:o,get _resizer(){return $.$observeItem},get _offset(){return f()},get _hide(){return y()},get _children(){return t.children(s(),o)},_isHorizontal:c})}})),W(s=>{var o=c?E()+"px":"100%",f=c?"100%":E()+"px",y=C()?"none":void 0;return o!==s.e&&((s.e=o)!=null?e.style.setProperty("width",o):e.style.removeProperty("width")),f!==s.t&&((s.t=f)!=null?e.style.setProperty("height",f):e.style.removeProperty("height")),y!==s.a&&((s.a=y)!=null?e.style.setProperty("pointer-events",y):e.style.removeProperty("pointer-events")),s},{e:void 0,t:void 0,a:void 0}),e})()};var Z=x("<div><div>"),ee=x("<div>");const oe={component:R},m={render:()=>{const t=[20,40,80,77],i=Array.from({length:1e3}).map((l,d)=>t[d%4]);return(()=>{var l=Z(),d=l.firstChild;return l.style.setProperty("padding","200px 100px"),d.style.setProperty("border","solid 1px gray"),S(d,b(R,{data:i,children:(h,_)=>(()=>{var n=ee();return h+"px"!=null?n.style.setProperty("height",h+"px"):n.style.removeProperty("height"),n.style.setProperty("border-bottom","solid 1px #ccc"),n.style.setProperty("background","#fff"),S(n,_),n})()})),l})()}};var z,I,T;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
                {i}
              </div>}
          </WindowVirtualizer>
        </div>
      </div>;
  }
}`,...(T=(I=m.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const ie=["Default"];export{m as Default,ie as __namedExportsOrder,oe as default};
