import{c as z,e as x,o as ee,f as te,h as U,i as M,j as m,d as E,k as N,t as O,l as ne,u as re,s as oe,m as le,n as se}from"./web-ZdxCXCJP.js";import{c as ae,U as ie,a as ce,b as de,d as ge,e as ue,A as fe,L as he,R as _e,f as ve,i as j,o as ye,g as me,h as Se,S as be,j as xe}from"./utils-hOAROgIY.js";var pe=O("<div>");const Ee=e=>{let d;const{ref:l,data:s,children:a,overscan:h,itemSize:P,shift:b,horizontal:y=!1,onScroll:V,onScrollEnd:p,onRangeChange:i}=e,n=ae(e.data.length,P??40,void 0,void 0,!P),g=ve(n,y),c=xe(n,y),[o,k]=z(n._getStateVersion()),w=n._subscribe(ie+ce,()=>{k(n._getStateVersion())}),D=n._subscribe(de,()=>{var t;(t=e.onScroll)==null||t.call(e,n._getScrollOffset())}),r=n._subscribe(ge,()=>{var t;(t=e.onScrollEnd)==null||t.call(e)}),_=x(t=>{o();const u=n._getRange();return t&&j(t,u)?t:u}),T=x(()=>o()&&n._getScrollDirection()),H=x(()=>o()&&n._getTotalSize()),X=x(()=>o()&&n._getJumpCount()),Y=x(t=>{const u=e.overscan??4,[f,v]=_(),S=[ye(f,u,T()),me(v,u,T(),e.data.length)];return t&&j(t,S)?t:S});return ee(()=>{e.ref&&e.ref({get scrollOffset(){return n._getScrollOffset()},get scrollSize(){return Se(n)},get viewportSize(){return n._getViewportSize()},scrollToIndex:c._scrollToIndex,scrollTo:c._scrollTo,scrollBy:c._scrollBy});const t=d.parentElement;g._observeRoot(t),c._observe(t),ne(()=>{e.ref&&e.ref(),w(),D(),r(),g._dispose(),c._dispose()})}),te(U(()=>e.data.length,(t,u)=>{ue(u)&&t!==u&&n._update(fe,[t,e.shift])})),M(U(X,()=>{c._fixScrollJump()})),M(()=>{const t=_();e.onRangeChange&&e.onRangeChange(t[0],t[1])}),(()=>{var t=pe(),u=d;return typeof u=="function"?re(u,t):d=t,t.style.setProperty("overflow-anchor","none"),t.style.setProperty("flex","none"),t.style.setProperty("position","relative"),t.style.setProperty("visibility","hidden"),m(t,E(_e,{get _each(){return e.data},get _range(){return Y()},_render:(f,v)=>{const S=x(()=>(o(),n._getItemOffset(v))),C=x(()=>(o(),n._isUnmeasuredItem(v)));return E(he,{_index:v,get _resizer(){return g._observeItem},get _offset(){return S()},get _hide(){return C()},get _children(){return e.children(f,v)},_isHorizontal:y})}})),N(f=>{var v=y?H()+"px":"100%",S=y?"100%":H()+"px",C=T()!==be?"none":"auto";return v!==f.e&&((f.e=v)!=null?t.style.setProperty("width",v):t.style.removeProperty("width")),S!==f.t&&((f.t=S)!=null?t.style.setProperty("height",S):t.style.removeProperty("height")),C!==f.a&&((f.a=C)!=null?t.style.setProperty("pointer-events",C):t.style.removeProperty("pointer-events")),f},{e:void 0,t:void 0,a:void 0}),t})()};var Pe=O("<div>");const A=e=>{const{ref:d,data:l,children:s,overscan:a,itemSize:h,shift:P,horizontal:b=!1,onScroll:y,onScrollEnd:V,onRangeChange:p,style:i,...n}=e;return(()=>{var g=Pe();return oe(g,le(n,{get style(){return{display:b?"inline-block":"block",[b?"overflow-x":"overflow-y"]:"auto",contain:"strict",width:"100%",height:"100%",...e.style}}}),!1,!0),m(g,E(Ee,{ref(c){var o=e.ref;typeof o=="function"?o(c):e.ref=c},get data(){return e.data},get overscan(){return e.overscan},get itemSize(){return e.itemSize},get shift(){return e.shift},horizontal:b,get onScroll(){return e.onScroll},get onScrollEnd(){return e.onScrollEnd},get onRangeChange(){return e.onRangeChange},get children(){return e.children}})),g})()};var L=O("<div>"),Te=O("<div><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append");const Ie={component:A},I={render:()=>{const e=[20,40,80,77],d=Array.from({length:1e3}).map((l,s)=>e[s%4]);return E(A,{data:d,style:{height:"100vh"},children:(l,s)=>(()=>{var a=L();return l+"px"!=null?a.style.setProperty("height",l+"px"):a.style.removeProperty("height"),a.style.setProperty("border-bottom","solid 1px #ccc"),a.style.setProperty("background","#fff"),m(a,s),a})()})}},$={render:()=>{const e=[40,180,77],d=Array.from({length:1e3}).map((l,s)=>e[s%3]);return(()=>{var l=L();return l.style.setProperty("padding","10px"),m(l,E(A,{data:d,style:{width:"100%",height:"200px"},horizontal:!0,children:(s,a)=>(()=>{var h=L();return s+"px"!=null?h.style.setProperty("width",s+"px"):h.style.removeProperty("width"),h.style.setProperty("border-right","solid 1px #ccc"),h.style.setProperty("background","#fff"),m(h,a),h})()})),l})()}},R={render:()=>{const e=[20,40,180,77],d=i=>({index:i,height:e[i%4]}),[l,s]=z(Array.from({length:1e3}).map((i,n)=>d(n))),[a,h]=z(0),[P,b]=z(!1),[y,V]=z(567);let p;return(()=>{var i=Te(),n=i.firstChild;n.firstChild;var g=n.nextSibling;g.firstChild;var c=g.nextSibling,o=c.firstChild,k=o.nextSibling,w=c.nextSibling,D=w.firstChild;return i.style.setProperty("height","100%"),i.style.setProperty("display","flex"),i.style.setProperty("flex-direction","column"),m(n,a,null),m(g,()=>String(P()),null),o.$$input=r=>{V(Number(r.target.value))},k.$$click=()=>{p==null||p.scrollToIndex(y())},D.$$click=()=>{s(r=>[...r,...Array.from({length:100}).map((_,T)=>d(T+r.length))])},m(i,E(A,{ref:r=>{p=r},get data(){return l()},style:{height:"100vh"},onScroll:r=>{h(r),b(!0)},onScrollEnd:()=>{b(!1)},children:r=>(()=>{var _=L();return _.style.setProperty("border-bottom","solid 1px #ccc"),_.style.setProperty("background","#fff"),m(_,()=>r.index),N(()=>r.height+"px"!=null?_.style.setProperty("height",r.height+"px"):_.style.removeProperty("height")),_})()}),null),N(()=>o.value=y()),i})()}};se(["input","click"]);var B,G,J;I.parameters={...I.parameters,docs:{...(B=I.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(J=(G=I.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var F,Z,q;$.parameters={...$.parameters,docs:{...(F=$.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(Z=$.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var K,Q,W;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};const $e=["Default","Horizontal","Controlls"];export{R as Controlls,I as Default,$ as Horizontal,$e as __namedExportsOrder,Ie as default};
