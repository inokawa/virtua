import{c as N,h as l,o as U,j as W,k as $,i as b,d as x,e as j,t as E,u as k,l as H,n as z}from"./web-DSIcfvkV.js";import{c as M,U as G,a as J,b as F,L as q,R as B,h as K,i as Q,j as X,A as Y}from"./utils-CyH54_sY.js";var Z=E("<div>");const R=t=>{let i;const{ref:d,data:c,children:v,overscan:h,itemSize:n,shift:re,horizontal:u=!1,onScrollEnd:ne}=t,r=M(t.data.length,n,h,void 0,void 0,!n),S=K(r,u),g=X(r,u),[a,A]=N(r._getStateVersion()),C=r._subscribe(G,()=>{A(r._getStateVersion())}),V=r._subscribe(J,()=>{var e;(e=t.onScroll)==null||e.call(t,r._getScrollOffset())}),w=r._subscribe(F,()=>{var e;(e=t.onScrollEnd)==null||e.call(t)}),L=l(e=>{a();const _=r._getRange();return e&&Q(e,_)?e:_}),O=l(()=>a()&&r._isScrolling()),P=l(()=>a()&&r._getTotalSize()),D=l(()=>a()&&r._getJumpCount());return U(()=>{t.ref&&t.ref({findStartIndex:r._findStartIndex,findEndIndex:r._findEndIndex,scrollToIndex:g._scrollToIndex}),S._observeRoot(i),g._observe(i),H(()=>{t.ref&&t.ref(),C(),V(),w(),S._dispose(),g._dispose()})}),W(z(()=>t.data.length,e=>{e!==r._getItemsLength()&&r._update(Y,[e,t.shift])})),$(z(D,()=>{g._fixScrollJump()})),(()=>{var e=Z(),_=i;return typeof _=="function"?k(_,e):i=e,e.style.setProperty("overflow-anchor","none"),e.style.setProperty("flex","none"),e.style.setProperty("position","relative"),e.style.setProperty("visibility","hidden"),b(e,x(B,{get _each(){return t.data},get _range(){return L()},_render:(o,s)=>{const f=l(()=>(a(),r._getItemOffset(s))),y=l(()=>(a(),r._isUnmeasuredItem(s)));return x(q,{_index:s,get _resizer(){return S._observeItem},get _offset(){return f()},get _hide(){return y()},get _children(){return t.children(o(),s)},_isHorizontal:u})}})),j(o=>{var s=u?P()+"px":"100%",f=u?"100%":P()+"px",y=O()?"none":void 0;return s!==o.e&&((o.e=s)!=null?e.style.setProperty("width",s):e.style.removeProperty("width")),f!==o.t&&((o.t=f)!=null?e.style.setProperty("height",f):e.style.removeProperty("height")),y!==o.a&&((o.a=y)!=null?e.style.setProperty("pointer-events",y):e.style.removeProperty("pointer-events")),o},{e:void 0,t:void 0,a:void 0}),e})()};var ee=E("<div><div>"),te=E("<div>");const ie={component:R},m={render:()=>{const t=[20,40,80,77],i=Array.from({length:1e3}).map((d,c)=>t[c%4]);return(()=>{var d=ee(),c=d.firstChild;return d.style.setProperty("padding","200px 100px"),c.style.setProperty("border","solid 1px gray"),b(c,x(R,{data:i,children:(v,h)=>(()=>{var n=te();return v+"px"!=null?n.style.setProperty("height",v+"px"):n.style.removeProperty("height"),n.style.setProperty("border-bottom","solid 1px #ccc"),n.style.setProperty("background","#fff"),b(n,h),n})()})),d})()}};var I,T,p;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(p=(T=m.parameters)==null?void 0:T.docs)==null?void 0:p.source}}};const ae=["Default"];export{m as Default,ae as __namedExportsOrder,ie as default};
