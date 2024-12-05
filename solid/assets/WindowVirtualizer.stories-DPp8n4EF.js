import{c as D,h as l,o as N,j as U,k as W,i as S,d as b,e as j,t as x,u as k,l as H,n as P}from"./web-DSIcfvkV.js";import{c as M,U as G,a as J,b as F,L as q,R as B,h as K,i as Q,j as X,A as Y}from"./utils-CGYXSo7W.js";var Z=x("<div>");const p=t=>{let i;const{ref:d,data:c,children:h,overscan:_,itemSize:n,shift:re,horizontal:u=!1,onScrollEnd:ne}=t,r=M(t.data.length,n,_,void 0,void 0,!n),$=K(r,u),m=X(r,u),[a,R]=D(r.$getStateVersion()),A=r.$subscribe(G,()=>{R(r.$getStateVersion())}),C=r.$subscribe(J,()=>{var e;(e=t.onScroll)==null||e.call(t,r.$getScrollOffset())}),V=r.$subscribe(F,()=>{var e;(e=t.onScrollEnd)==null||e.call(t)}),w=l(e=>{a();const f=r.$getRange();return e&&Q(e,f)?e:f}),L=l(()=>a()&&r.$isScrolling()),E=l(()=>a()&&r.$getTotalSize()),O=l(()=>a()&&r.$getJumpCount());return N(()=>{t.ref&&t.ref({findStartIndex:r.$findStartIndex,findEndIndex:r.$findEndIndex,scrollToIndex:m.$scrollToIndex}),$.$observeRoot(i),m.$observe(i),H(()=>{t.ref&&t.ref(),A(),C(),V(),$.$dispose(),m.$dispose()})}),U(P(()=>t.data.length,e=>{e!==r.$getItemsLength()&&r.$update(Y,[e,t.shift])})),W(P(O,()=>{m.$fixScrollJump()})),(()=>{var e=Z(),f=i;return typeof f=="function"?k(f,e):i=e,e.style.setProperty("overflow-anchor","none"),e.style.setProperty("flex","none"),e.style.setProperty("position","relative"),e.style.setProperty("visibility","hidden"),S(e,b(B,{get _each(){return t.data},get _range(){return w()},_render:(o,s)=>{const y=l(()=>(a(),r.$getItemOffset(s))),g=l(()=>(a(),r.$isUnmeasuredItem(s)));return b(q,{_index:s,get _resizer(){return $.$observeItem},get _offset(){return y()},get _hide(){return g()},get _children(){return t.children(o(),s)},_isHorizontal:u})}})),j(o=>{var s=u?E()+"px":"100%",y=u?"100%":E()+"px",g=L()?"none":void 0;return s!==o.e&&((o.e=s)!=null?e.style.setProperty("width",s):e.style.removeProperty("width")),y!==o.t&&((o.t=y)!=null?e.style.setProperty("height",y):e.style.removeProperty("height")),g!==o.a&&((o.a=g)!=null?e.style.setProperty("pointer-events",g):e.style.removeProperty("pointer-events")),o},{e:void 0,t:void 0,a:void 0}),e})()};var ee=x("<div><div>"),te=x("<div>");const ie={component:p},v={render:()=>{const t=[20,40,80,77],i=Array.from({length:1e3}).map((d,c)=>t[c%4]);return(()=>{var d=ee(),c=d.firstChild;return d.style.setProperty("padding","200px 100px"),c.style.setProperty("border","solid 1px gray"),S(c,b(p,{data:i,children:(h,_)=>(()=>{var n=te();return h+"px"!=null?n.style.setProperty("height",h+"px"):n.style.removeProperty("height"),n.style.setProperty("border-bottom","solid 1px #ccc"),n.style.setProperty("background","#fff"),S(n,_),n})()})),d})()}};var z,I,T;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(T=(I=v.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const ae=["Default"];export{v as Default,ae as __namedExportsOrder,ie as default};
