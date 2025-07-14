import{c as W,k as i,o as k,n as H,i as $,a as b,b as M,t as x,e as F,F as G,p as j,q,r as z}from"./iframe-Bqn8YFNw.js";import{c as J,U as B,a as K,b as Q,L as X,h as Y,i as Z,A as ee,j as te}from"./utils-B-U-wvfp.js";var re=x("<div>");const V=t=>{let l;const{ref:d,data:u,children:v,overscan:_,itemSize:s,shift:oe,horizontal:f=!1,cache:A,onScrollEnd:ie}=t,r=J(t.data.length,s,_,void 0,A,!s),S=Y(r,f),g=te(r,f),[c,R]=W(r.$getStateVersion()),w=r.$subscribe(B,()=>{R(r.$getStateVersion())}),L=r.$subscribe(K,()=>{var e;(e=t.onScroll)==null||e.call(t)}),C=r.$subscribe(Q,()=>{var e;(e=t.onScrollEnd)==null||e.call(t)}),E=i(e=>{c();const a=r.$getRange();return e&&Z(e,a)?e:a}),O=i(()=>c()&&r.$isScrolling()),P=i(()=>c()&&r.$getTotalSize());k(()=>{t.ref&&t.ref({get cache(){return r.$getCacheSnapshot()},findStartIndex:r.$findStartIndex,findEndIndex:r.$findEndIndex,scrollToIndex:g.$scrollToIndex}),S.$observeRoot(l),g.$observe(l),j(()=>{t.ref&&t.ref(),w(),L(),C(),S.$dispose(),g.$dispose()})}),H(q(c,()=>{g.$fixScrollJump()}));const D=i(()=>{const e=t.data.length;z(()=>{e!==r.$getItemsLength()&&r.$update(ee,[e,t.shift])});const[a,n]=E();return n>=0?t.data.slice(a,n+1):[]});return(()=>{var e=re(),a=l;return typeof a=="function"?F(a,e):l=e,e.style.setProperty("overflow-anchor","none"),e.style.setProperty("flex","none"),e.style.setProperty("position","relative"),e.style.setProperty("visibility","hidden"),$(e,b(G,{get each(){return D()},children:(n,y)=>{const o=i(()=>E()[0]+y()),h=i(()=>(c(),r.$getItemOffset(o()))),N=i(()=>(c(),r.$isUnmeasuredItem(o()))),U=i(()=>z(()=>t.children(n,o)));return b(X,{get _index(){return o()},get _resizer(){return S.$observeItem},get _offset(){return h()},get _hide(){return N()},get _children(){return U()},_isHorizontal:f})}})),M(n=>{var y=f?P()+"px":"100%",o=f?"100%":P()+"px",h=O()?"none":void 0;return y!==n.e&&((n.e=y)!=null?e.style.setProperty("width",y):e.style.removeProperty("width")),o!==n.t&&((n.t=o)!=null?e.style.setProperty("height",o):e.style.removeProperty("height")),h!==n.a&&((n.a=h)!=null?e.style.setProperty("pointer-events",h):e.style.removeProperty("pointer-events")),n},{e:void 0,t:void 0,a:void 0}),e})()};var ne=x("<div><div>"),se=x("<div>");const ce={component:V},m={render:()=>{const t=[20,40,80,77],l=Array.from({length:1e3}).map((d,u)=>t[u%4]);return(()=>{var d=ne(),u=d.firstChild;return d.style.setProperty("padding","200px 100px"),u.style.setProperty("border","solid 1px gray"),$(u,b(V,{data:l,children:(v,_)=>(()=>{var s=se();return v+"px"!=null?s.style.setProperty("height",v+"px"):s.style.removeProperty("height"),s.style.setProperty("border-bottom","solid 1px #ccc"),s.style.setProperty("background","#fff"),$(s,_),s})()})),d})()}};var I,T,p;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(p=(T=m.parameters)==null?void 0:T.docs)==null?void 0:p.source}}};const de=["Default"];export{m as Default,de as __namedExportsOrder,ce as default};
