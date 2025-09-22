import{c as H,l as i,o as M,p as F,t as E,s as a,i as b,a as x,b as G,q as j,r as y,e as q,F as J,v as B}from"./iframe-B5X_puvm.js";import{c as K,h as Q,U as X,b as Y,d as Z,i as p,A as ee,L as te,j as ne}from"./utils-DiH09Cir.js";import"./preload-helper-BQ24v_F8.js";var re=E("<div style=overflow-anchor:none>");const w=t=>{let d;const{ref:u,data:f,children:z,overscan:S,itemSize:o,shift:oe,horizontal:g=!1,cache:L,onScrollEnd:se}=t,n=K(t.data.length,o,S,void 0,L,!o),$=ne(n,g),h=Q(n,g),[l,C]=H(n.$getStateVersion()),O=n.$subscribe(X,()=>{C(n.$getStateVersion())}),D=n.$subscribe(Y,()=>{var e;(e=t.onScroll)==null||e.call(t)}),N=n.$subscribe(Z,()=>{var e;(e=t.onScrollEnd)==null||e.call(t)}),I=i(e=>{l();const s=n.$getRange();return e&&p(e,s)?e:s}),U=i(()=>l()&&n.$isScrolling()),T=i(()=>l()&&n.$getTotalSize());M(()=>{t.ref&&t.ref({get cache(){return n.$getCacheSnapshot()},findStartIndex:n.$findStartIndex,findEndIndex:n.$findEndIndex,scrollToIndex:h.$scrollToIndex}),$.$observeRoot(d),h.$observe(d),B(()=>{t.ref&&t.ref(),O(),D(),N(),$.$dispose(),h.$dispose()})}),F(j(l,()=>{h.$fixScrollJump()}));const W=i(()=>{const e=t.data.length;y(()=>{e!==n.$getItemsLength()&&n.$update(ee,[e,t.shift])});const[s,r]=I();return r>=0?t.data.slice(s,r+1):[]});return(()=>{var e=re(),s=d;return typeof s=="function"?q(s,e):d=e,a(e,"contain","strict"),a(e,"overflow","clip"),a(e,"flex","none"),a(e,"position","relative"),b(e,x(J,{get each(){return W()},children:(r,m)=>{const c=i(()=>I()[0]+m()),v=i(()=>(l(),n.$getItemOffset(c()))),P=i(()=>(l(),n.$isUnmeasuredItem(c()))),k=i(()=>y(()=>t.children(r,c)));return x(te,{get _index(){return c()},get _resizer(){return $.$observeItem},get _offset(){return v()},get _hide(){return P()},get _children(){return k()},_isHorizontal:g})}})),G(r=>{var m=g?T()+"px":"100%",c=g?"100%":T()+"px",v=U()?"none":void 0;return m!==r.e&&a(e,"width",r.e=m),c!==r.t&&a(e,"height",r.t=c),v!==r.a&&a(e,"pointer-events",r.a=v),r},{e:void 0,t:void 0,a:void 0}),e})()};var ae=E("<div><div>"),ie=E('<div style="border-bottom:solid 1px #ccc">');const ue={component:w},_={render:()=>{const t=[20,40,80,77],d=Array.from({length:1e3}).map((u,f)=>t[f%4]);return(()=>{var u=ae(),f=u.firstChild;return a(u,"padding","200px 100px"),a(f,"border","solid 1px gray"),b(f,x(w,{data:d,children:(z,S)=>(()=>{var o=ie();return a(o,"height",z+"px"),a(o,"background","#fff"),b(o,S),o})()})),u})()}};var V,A,R;_.parameters={..._.parameters,docs:{...(V=_.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(A=_.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const fe=["Default"];export{_ as Default,fe as __namedExportsOrder,ue as default};
