import{c as z,e as x,o as ee,f as te,h as U,i as M,j as m,d as P,k as N,t as O,l as ne,u as re,s as oe,m as le,n as se}from"./web-DwhiH2Oy.js";import{c as ae,U as ie,a as ce,b as de,e as ge,A as fe,L as ue,R as he,d as _e,i as j,g as ye,f as ve,S as me,h as Se}from"./utils-BZ4XFaVp.js";var be=O("<div>");const xe=e=>{let d;const{ref:l,data:s,children:a,overscan:u,itemSize:E,shift:b,horizontal:v=!1,onScroll:A,onScrollEnd:p,onRangeChange:i}=e,n=ae(e.data.length,E??40,void 0,void 0,!E),g=_e(n,v),c=Se(n,v),[o,k]=z(n._getStateVersion()),w=n._subscribe(ie,()=>{k(n._getStateVersion())}),D=n._subscribe(ce,()=>{var t;(t=e.onScroll)==null||t.call(e,n._getScrollOffset())}),r=n._subscribe(de,()=>{var t;(t=e.onScrollEnd)==null||t.call(e)}),h=x(t=>{o();const _=n._getRange();return t&&j(t,_)?t:_}),C=x(()=>o()&&n._getScrollDirection()),H=x(()=>o()&&n._getTotalSize()),Y=x(()=>o()&&n._getJumpCount()),Z=x(t=>{const _=e.overscan??4,[f,y]=h(),S=ye(f,y,_,C(),e.data.length);return t&&j(t,S)?t:S});return ee(()=>{e.ref&&e.ref({get scrollOffset(){return n._getScrollOffset()},get scrollSize(){return ve(n)},get viewportSize(){return n._getViewportSize()},getItemOffset:n._getItemOffset,scrollToIndex:c._scrollToIndex,scrollTo:c._scrollTo,scrollBy:c._scrollBy});const t=d.parentElement;g._observeRoot(t),c._observe(t),ne(()=>{e.ref&&e.ref(),w(),D(),r(),g._dispose(),c._dispose()})}),te(U(()=>e.data.length,(t,_)=>{ge(_)&&t!==_&&n._update(fe,[t,e.shift])})),M(U(Y,()=>{c._fixScrollJump()})),M(()=>{const t=h();e.onRangeChange&&e.onRangeChange(t[0],t[1])}),(()=>{var t=be(),_=d;return typeof _=="function"?re(_,t):d=t,t.style.setProperty("overflow-anchor","none"),t.style.setProperty("flex","none"),t.style.setProperty("position","relative"),t.style.setProperty("visibility","hidden"),m(t,P(he,{get _each(){return e.data},get _range(){return Z()},_render:(f,y)=>{const S=x(()=>(o(),n._getItemOffset(y))),T=x(()=>(o(),n._isUnmeasuredItem(y)));return P(ue,{_index:y,get _resizer(){return g._observeItem},get _offset(){return S()},get _hide(){return T()},get _children(){return e.children(f,y)},_isHorizontal:v})}})),N(f=>{var y=v?H()+"px":"100%",S=v?"100%":H()+"px",T=C()!==me?"none":"auto";return y!==f.e&&((f.e=y)!=null?t.style.setProperty("width",y):t.style.removeProperty("width")),S!==f.t&&((f.t=S)!=null?t.style.setProperty("height",S):t.style.removeProperty("height")),T!==f.a&&((f.a=T)!=null?t.style.setProperty("pointer-events",T):t.style.removeProperty("pointer-events")),f},{e:void 0,t:void 0,a:void 0}),t})()};var pe=O("<div>");const V=e=>{const{ref:d,data:l,children:s,overscan:a,itemSize:u,shift:E,horizontal:b=!1,onScroll:v,onScrollEnd:A,onRangeChange:p,style:i,...n}=e;return(()=>{var g=pe();return oe(g,le(n,{get style(){return{display:b?"inline-block":"block",[b?"overflow-x":"overflow-y"]:"auto",contain:"strict",width:"100%",height:"100%",...e.style}}}),!1,!0),m(g,P(xe,{ref(c){var o=e.ref;typeof o=="function"?o(c):e.ref=c},get data(){return e.data},get overscan(){return e.overscan},get itemSize(){return e.itemSize},get shift(){return e.shift},horizontal:b,get onScroll(){return e.onScroll},get onScrollEnd(){return e.onScrollEnd},get onRangeChange(){return e.onRangeChange},get children(){return e.children}})),g})()};var L=O("<div>"),Pe=O("<div><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append");const ze={component:V},I={render:()=>{const e=[20,40,80,77],d=Array.from({length:1e3}).map((l,s)=>e[s%4]);return P(V,{data:d,style:{height:"100vh"},children:(l,s)=>(()=>{var a=L();return l+"px"!=null?a.style.setProperty("height",l+"px"):a.style.removeProperty("height"),a.style.setProperty("border-bottom","solid 1px #ccc"),a.style.setProperty("background","#fff"),m(a,s),a})()})}},$={render:()=>{const e=[40,180,77],d=Array.from({length:1e3}).map((l,s)=>e[s%3]);return(()=>{var l=L();return l.style.setProperty("padding","10px"),m(l,P(V,{data:d,style:{width:"100%",height:"200px"},horizontal:!0,children:(s,a)=>(()=>{var u=L();return s+"px"!=null?u.style.setProperty("width",s+"px"):u.style.removeProperty("width"),u.style.setProperty("border-right","solid 1px #ccc"),u.style.setProperty("background","#fff"),m(u,a),u})()})),l})()}},R={render:()=>{const e=[20,40,180,77],d=i=>({index:i,height:e[i%4]}),[l,s]=z(Array.from({length:1e3}).map((i,n)=>d(n))),[a,u]=z(0),[E,b]=z(!1),[v,A]=z(567);let p;return(()=>{var i=Pe(),n=i.firstChild;n.firstChild;var g=n.nextSibling;g.firstChild;var c=g.nextSibling,o=c.firstChild,k=o.nextSibling,w=c.nextSibling,D=w.firstChild;return i.style.setProperty("height","100%"),i.style.setProperty("display","flex"),i.style.setProperty("flex-direction","column"),m(n,a,null),m(g,()=>String(E()),null),o.$$input=r=>{A(Number(r.target.value))},k.$$click=()=>{p==null||p.scrollToIndex(v())},D.$$click=()=>{s(r=>[...r,...Array.from({length:100}).map((h,C)=>d(C+r.length))])},m(i,P(V,{ref:r=>{p=r},get data(){return l()},style:{height:"100vh"},onScroll:r=>{u(r),b(!0)},onScrollEnd:()=>{b(!1)},children:r=>(()=>{var h=L();return h.style.setProperty("border-bottom","solid 1px #ccc"),h.style.setProperty("background","#fff"),m(h,()=>r.index),N(()=>r.height+"px"!=null?h.style.setProperty("height",r.height+"px"):h.style.removeProperty("height")),h})()}),null),N(()=>o.value=v()),i})()}};se(["input","click"]);var B,G,J;I.parameters={...I.parameters,docs:{...(B=I.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const sizes = [20, 40, 80, 77];
    const data = Array.from({
      length: 1000
    }).map((_, i) => sizes[i % 4]);
    return <VList data={data} style={{
      height: "100vh"
    }}>
        {(d, i) => <div style={{
        height: d + "px",
        "border-bottom": "solid 1px #ccc",
        background: "#fff"
      }}>
            {i}
          </div>}
      </VList>;
  }
}`,...(J=(G=I.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var F,q,K;$.parameters={...$.parameters,docs:{...(F=$.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const sizes = [40, 180, 77];
    const data = Array.from({
      length: 1000
    }).map((_, i) => sizes[i % 3]);
    return <div style={{
      padding: "10px"
    }}>
        <VList data={data} style={{
        width: "100%",
        height: "200px"
      }} horizontal>
          {(d, i) => <div style={{
          width: d + "px",
          "border-right": "solid 1px #ccc",
          background: "#fff"
        }}>
              {i}
            </div>}
        </VList>
      </div>;
  }
}`,...(K=(q=$.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,W,X;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const heights = [20, 40, 180, 77];
    const createItem = (i: number) => ({
      index: i,
      height: heights[i % 4]
    });
    const [data, setData] = createSignal(Array.from({
      length: 1000
    }).map((_, i) => createItem(i)));
    const [scrollOffset, setScrollOffset] = createSignal(0);
    const [scrolling, setScrolling] = createSignal(false);
    const [scrollTarget, setScrollTarget] = createSignal(567);
    let handle: VListHandle | undefined;
    return <div style={{
      height: "100%",
      display: "flex",
      "flex-direction": "column"
    }}>
        <div>offset: {scrollOffset()}</div>
        <div>scrolling: {String(scrolling())}</div>
        <div>
          <input type="number" value={scrollTarget()} onInput={e => {
          setScrollTarget(Number((e.target as HTMLInputElement).value));
        }} />
          <button onClick={() => {
          handle?.scrollToIndex(scrollTarget());
        }}>
            scrollToIndex
          </button>
        </div>
        <div>
          <button onClick={() => {
          setData(prev => [...prev, ...Array.from({
            length: 100
          }).map((_, i) => createItem(i + prev.length))]);
        }}>
            append
          </button>
        </div>
        <VList ref={h => {
        handle = h;
      }} data={data()} style={{
        height: "100vh"
      }} onScroll={offset => {
        setScrollOffset(offset);
        setScrolling(true);
      }} onScrollEnd={() => {
        setScrolling(false);
      }}>
          {d => <div style={{
          height: d.height + "px",
          "border-bottom": "solid 1px #ccc",
          background: "#fff"
        }}>
              {d.index}
            </div>}
        </VList>
      </div>;
  }
}`,...(X=(W=R.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const Ce=["Default","Horizontal","Controlls"];export{R as Controlls,I as Default,$ as Horizontal,Ce as __namedExportsOrder,ze as default};
