import{c as N,e as l,o as U,f as k,h as z,i as C,j as E,d as b,k as H,t as p,u as M,l as j}from"./web-ZdxCXCJP.js";import{c as G,U as J,a as F,d as Z,e as q,A as B,L as K,R as Q,k as X,i as I,o as Y,g as ee,S as te,l as re}from"./utils-GkbAcbyB.js";var ne=p("<div>");const D=t=>{let d;const{data:u,children:_,overscan:h,itemSize:f,shift:i,horizontal:g=!1,onScrollEnd:ae,onRangeChange:ie}=t,r=G(t.data.length,f??40,void 0,void 0,!f),m=X(r,g),S=re(r,g),[c,L]=N(r._getStateVersion()),V=r._subscribe(J+F,()=>{L(r._getStateVersion())}),O=r._subscribe(Z,()=>{var e;(e=t.onScrollEnd)==null||e.call(t)}),P=l(e=>{c();const n=r._getRange();return e&&I(e,n)?e:n}),x=l(()=>c()&&r._getScrollDirection()),R=l(()=>c()&&r._getTotalSize()),W=l(()=>c()&&r._getJumpCount()),$=l(e=>{const n=t.overscan??4,[o,s]=P(),a=[Y(o,n,x()),ee(s,n,x(),t.data.length)];return e&&I(e,a)?e:a});return U(()=>{m._observeRoot(d),S._observe(d),j(()=>{V(),O(),m._dispose(),S._dispose()})}),k(z(()=>t.data.length,(e,n)=>{q(n)&&e!==n&&r._update(B,[e,t.shift])})),C(z(W,()=>{S._fixScrollJump()})),C(()=>{const e=P();t.onRangeChange&&t.onRangeChange(e[0],e[1])}),(()=>{var e=ne(),n=d;return typeof n=="function"?M(n,e):d=e,e.style.setProperty("overflow-anchor","none"),e.style.setProperty("flex","none"),e.style.setProperty("position","relative"),e.style.setProperty("visibility","hidden"),E(e,b(Q,{get _each(){return t.data},get _range(){return $()},_render:(o,s)=>{const a=l(()=>(c(),r._getItemOffset(s))),y=l(()=>(c(),r._isUnmeasuredItem(s)));return b(K,{_index:s,get _resizer(){return m._observeItem},get _offset(){return a()},get _hide(){return y()},get _children(){return t.children(o,s)},_isHorizontal:g})}})),H(o=>{var s=g?R()+"px":"100%",a=g?"100%":R()+"px",y=x()!==te?"none":"auto";return s!==o.e&&((o.e=s)!=null?e.style.setProperty("width",s):e.style.removeProperty("width")),a!==o.t&&((o.t=a)!=null?e.style.setProperty("height",a):e.style.removeProperty("height")),y!==o.a&&((o.a=y)!=null?e.style.setProperty("pointer-events",y):e.style.removeProperty("pointer-events")),o},{e:void 0,t:void 0,a:void 0}),e})()};var oe=p("<div><div>"),se=p("<div>");const ce={component:D},v={render:()=>{const t=[20,40,80,77],d=Array.from({length:1e3}).map((u,_)=>t[_%4]);return(()=>{var u=oe(),_=u.firstChild;return u.style.setProperty("padding","200px 100px"),_.style.setProperty("border","solid 1px gray"),E(_,b(D,{data:d,children:(h,f)=>(()=>{var i=se();return h+"px"!=null?i.style.setProperty("height",h+"px"):i.style.removeProperty("height"),i.style.setProperty("border-bottom","solid 1px #ccc"),i.style.setProperty("background","#fff"),E(i,f),i})()})),u})()}};var T,A,w;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(A=v.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};const ue=["Default"];export{v as Default,ue as __namedExportsOrder,ce as default};
