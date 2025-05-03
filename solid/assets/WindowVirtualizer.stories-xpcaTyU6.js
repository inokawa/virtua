import{c as W,h as a,o as k,j as H,k as M,i as $,d as x,e as j,t as b,u as F,F as G,l as J,n as z,p as q}from"./web-CXCq-PRR.js";import{c as B,U as K,a as Q,b as X,L as Y,h as Z,i as ee,j as te,A as re}from"./utils-C9bggKDN.js";var ne=b("<div>");const V=t=>{let l;const{ref:c,data:u,children:v,overscan:_,itemSize:n,shift:ie,horizontal:f=!1,cache:A,onScrollEnd:ae}=t,r=B(t.data.length,n,_,void 0,A,!n),S=Z(r,f),g=te(r,f),[d,R]=W(r.$getStateVersion()),w=r.$subscribe(K,()=>{R(r.$getStateVersion())}),C=r.$subscribe(Q,()=>{var e;(e=t.onScroll)==null||e.call(t)}),L=r.$subscribe(X,()=>{var e;(e=t.onScrollEnd)==null||e.call(t)}),E=a(e=>{d();const o=r.$getRange();return e&&ee(e,o)?e:o}),O=a(()=>d()&&r.$isScrolling()),P=a(()=>d()&&r.$getTotalSize());k(()=>{t.ref&&t.ref({get cache(){return r.$getCacheSnapshot()},findStartIndex:r.$findStartIndex,findEndIndex:r.$findEndIndex,scrollToIndex:g.$scrollToIndex}),S.$observeRoot(l),g.$observe(l),J(()=>{t.ref&&t.ref(),w(),C(),L(),S.$dispose(),g.$dispose()})}),H(z(()=>t.data.length,e=>{e!==r.$getItemsLength()&&r.$update(re,[e,t.shift])})),M(z(d,()=>{g.$fixScrollJump()}));const D=a(()=>{const[e,o]=E();return o>=0?t.data.slice(e,o+1):[]});return(()=>{var e=ne(),o=l;return typeof o=="function"?F(o,e):l=e,e.style.setProperty("overflow-anchor","none"),e.style.setProperty("flex","none"),e.style.setProperty("position","relative"),e.style.setProperty("visibility","hidden"),$(e,x(G,{get each(){return D()},children:(s,y)=>{const i=a(()=>E()[0]+y()),h=a(()=>(d(),r.$getItemOffset(i()))),N=a(()=>(d(),r.$isUnmeasuredItem(i()))),U=a(()=>q(()=>t.children(s,i)));return x(Y,{get _index(){return i()},get _resizer(){return S.$observeItem},get _offset(){return h()},get _hide(){return N()},get _children(){return U()},_isHorizontal:f})}})),j(s=>{var y=f?P()+"px":"100%",i=f?"100%":P()+"px",h=O()?"none":void 0;return y!==s.e&&((s.e=y)!=null?e.style.setProperty("width",y):e.style.removeProperty("width")),i!==s.t&&((s.t=i)!=null?e.style.setProperty("height",i):e.style.removeProperty("height")),h!==s.a&&((s.a=h)!=null?e.style.setProperty("pointer-events",h):e.style.removeProperty("pointer-events")),s},{e:void 0,t:void 0,a:void 0}),e})()};var se=b("<div><div>"),oe=b("<div>");const ce={component:V},m={render:()=>{const t=[20,40,80,77],l=Array.from({length:1e3}).map((c,u)=>t[u%4]);return(()=>{var c=se(),u=c.firstChild;return c.style.setProperty("padding","200px 100px"),u.style.setProperty("border","solid 1px gray"),$(u,x(V,{data:l,children:(v,_)=>(()=>{var n=oe();return v+"px"!=null?n.style.setProperty("height",v+"px"):n.style.removeProperty("height"),n.style.setProperty("border-bottom","solid 1px #ccc"),n.style.setProperty("background","#fff"),$(n,_),n})()})),c})()}};var I,T,p;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(p=(T=m.parameters)==null?void 0:T.docs)==null?void 0:p.source}}};const ue=["Default"];export{m as Default,ue as __namedExportsOrder,ce as default};
