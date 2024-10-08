import{c as N,h as l,o as U,j as k,k as z,i as b,d as p,e as j,t as x,u as H,l as M,n as C}from"./web-COM3HHJ7.js";import{c as G,U as J,b as F,L as q,R as B,j as K,i as I,g as Q,S as X,k as Y,A as Z}from"./utils-o_QlqO8D.js";var ee=x("<div>");const A=t=>{let c;const{data:u,children:_,overscan:h,itemSize:v,shift:a,horizontal:g=!1,onScrollEnd:ne,onRangeChange:oe}=t,r=G(t.data.length,v??40,void 0,void 0,!v),m=K(r,g),S=Y(r,g),[d,V]=N(r._getStateVersion()),D=r._subscribe(J,()=>{V(r._getStateVersion())}),O=r._subscribe(F,()=>{var e;(e=t.onScrollEnd)==null||e.call(t)}),P=l(e=>{d();const i=r._getRange();return e&&I(e,i)?e:i}),R=l(()=>d()&&r._getScrollDirection()),E=l(()=>d()&&r._getTotalSize()),W=l(()=>d()&&r._getJumpCount()),$=l(e=>{const i=t.overscan??4,[n,o]=P(),s=Q(n,o,i,R(),t.data.length);return e&&I(e,s)?e:s});return U(()=>{m._observeRoot(c),S._observe(c),M(()=>{D(),O(),m._dispose(),S._dispose()})}),k(C(()=>t.data.length,e=>{e!==r._getItemsLength()&&r._update(Z,[e,t.shift])})),z(C(W,()=>{S._fixScrollJump()})),z(()=>{const e=P();t.onRangeChange&&t.onRangeChange(e[0],e[1])}),(()=>{var e=ee(),i=c;return typeof i=="function"?H(i,e):c=e,e.style.setProperty("overflow-anchor","none"),e.style.setProperty("flex","none"),e.style.setProperty("position","relative"),e.style.setProperty("visibility","hidden"),b(e,p(B,{get _each(){return t.data},get _range(){return $()},_render:(n,o)=>{const s=l(()=>(d(),r._getItemOffset(o))),y=l(()=>(d(),r._isUnmeasuredItem(o)));return p(q,{_index:o,get _resizer(){return m._observeItem},get _offset(){return s()},get _hide(){return y()},get _children(){return t.children(n(),o)},_isHorizontal:g})}})),j(n=>{var o=g?E()+"px":"100%",s=g?"100%":E()+"px",y=R()!==X?"none":void 0;return o!==n.e&&((n.e=o)!=null?e.style.setProperty("width",o):e.style.removeProperty("width")),s!==n.t&&((n.t=s)!=null?e.style.setProperty("height",s):e.style.removeProperty("height")),y!==n.a&&((n.a=y)!=null?e.style.setProperty("pointer-events",y):e.style.removeProperty("pointer-events")),n},{e:void 0,t:void 0,a:void 0}),e})()};var te=x("<div><div>"),re=x("<div>");const ie={component:A},f={render:()=>{const t=[20,40,80,77],c=Array.from({length:1e3}).map((u,_)=>t[_%4]);return(()=>{var u=te(),_=u.firstChild;return u.style.setProperty("padding","200px 100px"),_.style.setProperty("border","solid 1px gray"),b(_,p(A,{data:c,children:(h,v)=>(()=>{var a=re();return h+"px"!=null?a.style.setProperty("height",h+"px"):a.style.removeProperty("height"),a.style.setProperty("border-bottom","solid 1px #ccc"),a.style.setProperty("background","#fff"),b(a,v),a})()})),u})()}};var L,T,w;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=(T=f.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const le=["Default"];export{f as Default,le as __namedExportsOrder,ie as default};
