import{c as N,h as l,o as U,j as W,k as $,i as b,d as x,e as j,t as E,u as k,l as H,n as z}from"./web-DSIcfvkV.js";import{c as M,U as G,a as J,b as F,L as q,R as B,h as K,i as Q,j as X,A as Y}from"./utils-Xv96Re0O.js";var Z=E("<div>");const T=t=>{let a;const{ref:d,data:c,children:m,overscan:v,itemSize:n,shift:re,horizontal:u=!1,onScrollEnd:ne}=t,r=M(t.data.length,n,v,void 0,void 0,!n),h=K(r,u),S=X(r,u),[i,A]=N(r._getStateVersion()),C=r._subscribe(G,()=>{A(r._getStateVersion())}),V=r._subscribe(J,()=>{var e;(e=t.onScroll)==null||e.call(t,r._getScrollOffset())}),w=r._subscribe(F,()=>{var e;(e=t.onScrollEnd)==null||e.call(t)}),L=l(e=>{i();const _=r._getRange();return e&&Q(e,_)?e:_}),O=l(()=>i()&&r._isScrolling()),P=l(()=>i()&&r._getTotalSize()),D=l(()=>i()&&r._getJumpCount());return U(()=>{t.ref&&t.ref({get startIndex(){return r._getStartIndex()},get endIndex(){return r._getEndIndex()}}),h._observeRoot(a),S._observe(a),H(()=>{t.ref&&t.ref(),C(),V(),w(),h._dispose(),S._dispose()})}),W(z(()=>t.data.length,e=>{e!==r._getItemsLength()&&r._update(Y,[e,t.shift])})),$(z(D,()=>{S._fixScrollJump()})),(()=>{var e=Z(),_=a;return typeof _=="function"?k(_,e):a=e,e.style.setProperty("overflow-anchor","none"),e.style.setProperty("flex","none"),e.style.setProperty("position","relative"),e.style.setProperty("visibility","hidden"),b(e,x(B,{get _each(){return t.data},get _range(){return L()},_render:(s,o)=>{const f=l(()=>(i(),r._getItemOffset(o))),g=l(()=>(i(),r._isUnmeasuredItem(o)));return x(q,{_index:o,get _resizer(){return h._observeItem},get _offset(){return f()},get _hide(){return g()},get _children(){return t.children(s(),o)},_isHorizontal:u})}})),j(s=>{var o=u?P()+"px":"100%",f=u?"100%":P()+"px",g=O()?"none":void 0;return o!==s.e&&((s.e=o)!=null?e.style.setProperty("width",o):e.style.removeProperty("width")),f!==s.t&&((s.t=f)!=null?e.style.setProperty("height",f):e.style.removeProperty("height")),g!==s.a&&((s.a=g)!=null?e.style.setProperty("pointer-events",g):e.style.removeProperty("pointer-events")),s},{e:void 0,t:void 0,a:void 0}),e})()};var ee=E("<div><div>"),te=E("<div>");const ae={component:T},y={render:()=>{const t=[20,40,80,77],a=Array.from({length:1e3}).map((d,c)=>t[c%4]);return(()=>{var d=ee(),c=d.firstChild;return d.style.setProperty("padding","200px 100px"),c.style.setProperty("border","solid 1px gray"),b(c,x(T,{data:a,children:(m,v)=>(()=>{var n=te();return m+"px"!=null?n.style.setProperty("height",m+"px"):n.style.removeProperty("height"),n.style.setProperty("border-bottom","solid 1px #ccc"),n.style.setProperty("background","#fff"),b(n,v),n})()})),d})()}};var p,I,R;y.parameters={...y.parameters,docs:{...(p=y.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(R=(I=y.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const ie=["Default"];export{y as Default,ie as __namedExportsOrder,ae as default};
