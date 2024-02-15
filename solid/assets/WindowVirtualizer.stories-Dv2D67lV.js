import{c as N,e as l,o as U,f as k,h as z,i as C,j as x,d as b,k as H,t as p,u as M,l as j}from"./web-DwhiH2Oy.js";import{c as G,U as J,a as F,d as Z,e as q,A as B,L as K,R as Q,k as X,i as T,g as Y,S as ee,l as te}from"./utils-Z74u-Jc0.js";var re=p("<div>");const D=t=>{let c;const{data:u,children:_,overscan:h,itemSize:f,shift:i,horizontal:g=!1,onScrollEnd:se,onRangeChange:ae}=t,r=G(t.data.length,f??40,void 0,void 0,!f),m=X(r,g),S=te(r,g),[d,L]=N(r._getStateVersion()),O=r._subscribe(J+F,()=>{L(r._getStateVersion())}),V=r._subscribe(Z,()=>{var e;(e=t.onScrollEnd)==null||e.call(t)}),E=l(e=>{d();const o=r._getRange();return e&&T(e,o)?e:o}),P=l(()=>d()&&r._getScrollDirection()),R=l(()=>d()&&r._getTotalSize()),W=l(()=>d()&&r._getJumpCount()),$=l(e=>{const o=t.overscan??4,[n,s]=E(),a=Y(n,s,o,P(),t.data.length);return e&&T(e,a)?e:a});return U(()=>{m._observeRoot(c),S._observe(c),j(()=>{O(),V(),m._dispose(),S._dispose()})}),k(z(()=>t.data.length,(e,o)=>{q(o)&&e!==o&&r._update(B,[e,t.shift])})),C(z(W,()=>{S._fixScrollJump()})),C(()=>{const e=E();t.onRangeChange&&t.onRangeChange(e[0],e[1])}),(()=>{var e=re(),o=c;return typeof o=="function"?M(o,e):c=e,e.style.setProperty("overflow-anchor","none"),e.style.setProperty("flex","none"),e.style.setProperty("position","relative"),e.style.setProperty("visibility","hidden"),x(e,b(Q,{get _each(){return t.data},get _range(){return $()},_render:(n,s)=>{const a=l(()=>(d(),r._getItemOffset(s))),y=l(()=>(d(),r._isUnmeasuredItem(s)));return b(K,{_index:s,get _resizer(){return m._observeItem},get _offset(){return a()},get _hide(){return y()},get _children(){return t.children(n,s)},_isHorizontal:g})}})),H(n=>{var s=g?R()+"px":"100%",a=g?"100%":R()+"px",y=P()!==ee?"none":"auto";return s!==n.e&&((n.e=s)!=null?e.style.setProperty("width",s):e.style.removeProperty("width")),a!==n.t&&((n.t=a)!=null?e.style.setProperty("height",a):e.style.removeProperty("height")),y!==n.a&&((n.a=y)!=null?e.style.setProperty("pointer-events",y):e.style.removeProperty("pointer-events")),n},{e:void 0,t:void 0,a:void 0}),e})()};var ne=p("<div><div>"),oe=p("<div>");const ce={component:D},v={render:()=>{const t=[20,40,80,77],c=Array.from({length:1e3}).map((u,_)=>t[_%4]);return(()=>{var u=ne(),_=u.firstChild;return u.style.setProperty("padding","200px 100px"),_.style.setProperty("border","solid 1px gray"),x(_,b(D,{data:c,children:(h,f)=>(()=>{var i=oe();return h+"px"!=null?i.style.setProperty("height",h+"px"):i.style.removeProperty("height"),i.style.setProperty("border-bottom","solid 1px #ccc"),i.style.setProperty("background","#fff"),x(i,f),i})()})),u})()}};var A,I,w;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(w=(I=v.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const de=["Default"];export{v as Default,de as __namedExportsOrder,ce as default};
