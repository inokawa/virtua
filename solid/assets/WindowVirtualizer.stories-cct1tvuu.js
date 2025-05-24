import{c as W,p as i,o as k,v as H,i as $,d as x,e as M,t as b,h as F,F as G,w as j,x as J,y as z}from"./web-DxNzkiKp.js";import{c as q,U as B,a as K,b as Q,L as X,h as Y,i as Z,A as ee,j as te}from"./utils-C0mXXBYW.js";var re=b("<div>");const V=t=>{let l;const{ref:d,data:u,children:m,overscan:_,itemSize:s,shift:oe,horizontal:f=!1,cache:w,onScrollEnd:ie}=t,r=q(t.data.length,s,_,void 0,w,!s),S=Y(r,f),g=te(r,f),[c,A]=W(r.$getStateVersion()),R=r.$subscribe(B,()=>{A(r.$getStateVersion())}),L=r.$subscribe(K,()=>{var e;(e=t.onScroll)==null||e.call(t)}),C=r.$subscribe(Q,()=>{var e;(e=t.onScrollEnd)==null||e.call(t)}),E=i(e=>{c();const a=r.$getRange();return e&&Z(e,a)?e:a}),O=i(()=>c()&&r.$isScrolling()),P=i(()=>c()&&r.$getTotalSize());k(()=>{t.ref&&t.ref({get cache(){return r.$getCacheSnapshot()},findStartIndex:r.$findStartIndex,findEndIndex:r.$findEndIndex,scrollToIndex:g.$scrollToIndex}),S.$observeRoot(l),g.$observe(l),j(()=>{t.ref&&t.ref(),R(),L(),C(),S.$dispose(),g.$dispose()})}),H(J(c,()=>{g.$fixScrollJump()}));const D=i(()=>{const e=t.data.length;z(()=>{e!==r.$getItemsLength()&&r.$update(ee,[e,t.shift])});const[a,n]=E();return n>=0?t.data.slice(a,n+1):[]});return(()=>{var e=re(),a=l;return typeof a=="function"?F(a,e):l=e,e.style.setProperty("overflow-anchor","none"),e.style.setProperty("flex","none"),e.style.setProperty("position","relative"),e.style.setProperty("visibility","hidden"),$(e,x(G,{get each(){return D()},children:(n,y)=>{const o=i(()=>E()[0]+y()),h=i(()=>(c(),r.$getItemOffset(o()))),N=i(()=>(c(),r.$isUnmeasuredItem(o()))),U=i(()=>z(()=>t.children(n,o)));return x(X,{get _index(){return o()},get _resizer(){return S.$observeItem},get _offset(){return h()},get _hide(){return N()},get _children(){return U()},_isHorizontal:f})}})),M(n=>{var y=f?P()+"px":"100%",o=f?"100%":P()+"px",h=O()?"none":void 0;return y!==n.e&&((n.e=y)!=null?e.style.setProperty("width",y):e.style.removeProperty("width")),o!==n.t&&((n.t=o)!=null?e.style.setProperty("height",o):e.style.removeProperty("height")),h!==n.a&&((n.a=h)!=null?e.style.setProperty("pointer-events",h):e.style.removeProperty("pointer-events")),n},{e:void 0,t:void 0,a:void 0}),e})()};var ne=b("<div><div>"),se=b("<div>");const ce={component:V},v={render:()=>{const t=[20,40,80,77],l=Array.from({length:1e3}).map((d,u)=>t[u%4]);return(()=>{var d=ne(),u=d.firstChild;return d.style.setProperty("padding","200px 100px"),u.style.setProperty("border","solid 1px gray"),$(u,x(V,{data:l,children:(m,_)=>(()=>{var s=se();return m+"px"!=null?s.style.setProperty("height",m+"px"):s.style.removeProperty("height"),s.style.setProperty("border-bottom","solid 1px #ccc"),s.style.setProperty("background","#fff"),$(s,_),s})()})),d})()}};var I,T,p;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(p=(T=v.parameters)==null?void 0:T.docs)==null?void 0:p.source}}};const de=["Default"];export{v as Default,de as __namedExportsOrder,ce as default};
