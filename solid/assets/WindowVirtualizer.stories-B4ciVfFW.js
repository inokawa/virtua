import{c as N,e as l,o as U,f as k,h as z,i as C,j as b,d as x,k as j,t as p,u as H,l as M}from"./web-d1u52pZn.js";import{c as G,U as J,b as F,e as q,A as B,L as K,R as Q,j as X,i as I,g as Y,S as Z,k as ee}from"./utils-Xb8cYUBX.js";var te=p("<div>");const V=t=>{let c;const{data:u,children:_,overscan:h,itemSize:f,shift:i,horizontal:g=!1,onScrollEnd:oe,onRangeChange:se}=t,r=G(t.data.length,f??40,void 0,void 0,!f),m=X(r,g),S=ee(r,g),[d,D]=N(r._getStateVersion()),L=r._subscribe(J,()=>{D(r._getStateVersion())}),O=r._subscribe(F,()=>{var e;(e=t.onScrollEnd)==null||e.call(t)}),P=l(e=>{d();const o=r._getRange();return e&&I(e,o)?e:o}),R=l(()=>d()&&r._getScrollDirection()),E=l(()=>d()&&r._getTotalSize()),W=l(()=>d()&&r._getJumpCount()),$=l(e=>{const o=t.overscan??4,[n,s]=P(),a=Y(n,s,o,R(),t.data.length);return e&&I(e,a)?e:a});return U(()=>{m._observeRoot(c),S._observe(c),M(()=>{L(),O(),m._dispose(),S._dispose()})}),k(z(()=>t.data.length,(e,o)=>{q(o)&&e!==o&&r._update(B,[e,t.shift])})),C(z(W,()=>{S._fixScrollJump()})),C(()=>{const e=P();t.onRangeChange&&t.onRangeChange(e[0],e[1])}),(()=>{var e=te(),o=c;return typeof o=="function"?H(o,e):c=e,e.style.setProperty("overflow-anchor","none"),e.style.setProperty("flex","none"),e.style.setProperty("position","relative"),e.style.setProperty("visibility","hidden"),b(e,x(Q,{get _each(){return t.data},get _range(){return $()},_render:(n,s)=>{const a=l(()=>(d(),r._getItemOffset(s))),y=l(()=>(d(),r._isUnmeasuredItem(s)));return x(K,{_index:s,get _resizer(){return m._observeItem},get _offset(){return a()},get _hide(){return y()},get _children(){return t.children(n(),s)},_isHorizontal:g})}})),j(n=>{var s=g?E()+"px":"100%",a=g?"100%":E()+"px",y=R()!==Z?"none":"auto";return s!==n.e&&((n.e=s)!=null?e.style.setProperty("width",s):e.style.removeProperty("width")),a!==n.t&&((n.t=a)!=null?e.style.setProperty("height",a):e.style.removeProperty("height")),y!==n.a&&((n.a=y)!=null?e.style.setProperty("pointer-events",y):e.style.removeProperty("pointer-events")),n},{e:void 0,t:void 0,a:void 0}),e})()};var re=p("<div><div>"),ne=p("<div>");const le={component:V},v={render:()=>{const t=[20,40,80,77],c=Array.from({length:1e3}).map((u,_)=>t[_%4]);return(()=>{var u=re(),_=u.firstChild;return u.style.setProperty("padding","200px 100px"),_.style.setProperty("border","solid 1px gray"),b(_,x(V,{data:c,children:(h,f)=>(()=>{var i=ne();return h+"px"!=null?i.style.setProperty("height",h+"px"):i.style.removeProperty("height"),i.style.setProperty("border-bottom","solid 1px #ccc"),i.style.setProperty("background","#fff"),b(i,f),i})()})),u})()}};var T,w,A;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(w=v.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const ce=["Default"];export{v as Default,ce as __namedExportsOrder,le as default};
