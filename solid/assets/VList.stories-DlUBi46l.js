import{c as C,e as x,o as ee,f as te,h as U,i as M,j as m,d as E,k as N,t as O,l as ne,u as re,s as oe,m as le,n as se}from"./web-DwhiH2Oy.js";import{c as ae,U as ie,a as ce,b as de,d as ge,e as ue,A as fe,L as he,R as _e,f as ye,i as j,g as ve,h as me,S as Se,j as be}from"./utils-C8WIbmel.js";var xe=O("<div>");const pe=e=>{let d;const{ref:l,data:s,children:a,overscan:f,itemSize:P,shift:b,horizontal:v=!1,onScroll:V,onScrollEnd:p,onRangeChange:i}=e,n=ae(e.data.length,P??40,void 0,void 0,!P),g=ye(n,v),c=be(n,v),[o,k]=C(n._getStateVersion()),w=n._subscribe(ie+ce,()=>{k(n._getStateVersion())}),D=n._subscribe(de,()=>{var t;(t=e.onScroll)==null||t.call(e,n._getScrollOffset())}),r=n._subscribe(ge,()=>{var t;(t=e.onScrollEnd)==null||t.call(e)}),h=x(t=>{o();const _=n._getRange();return t&&j(t,_)?t:_}),z=x(()=>o()&&n._getScrollDirection()),H=x(()=>o()&&n._getTotalSize()),X=x(()=>o()&&n._getJumpCount()),Y=x(t=>{const _=e.overscan??4,[u,y]=h(),S=ve(u,y,_,z(),e.data.length);return t&&j(t,S)?t:S});return ee(()=>{e.ref&&e.ref({get scrollOffset(){return n._getScrollOffset()},get scrollSize(){return me(n)},get viewportSize(){return n._getViewportSize()},scrollToIndex:c._scrollToIndex,scrollTo:c._scrollTo,scrollBy:c._scrollBy});const t=d.parentElement;g._observeRoot(t),c._observe(t),ne(()=>{e.ref&&e.ref(),w(),D(),r(),g._dispose(),c._dispose()})}),te(U(()=>e.data.length,(t,_)=>{ue(_)&&t!==_&&n._update(fe,[t,e.shift])})),M(U(X,()=>{c._fixScrollJump()})),M(()=>{const t=h();e.onRangeChange&&e.onRangeChange(t[0],t[1])}),(()=>{var t=xe(),_=d;return typeof _=="function"?re(_,t):d=t,t.style.setProperty("overflow-anchor","none"),t.style.setProperty("flex","none"),t.style.setProperty("position","relative"),t.style.setProperty("visibility","hidden"),m(t,E(_e,{get _each(){return e.data},get _range(){return Y()},_render:(u,y)=>{const S=x(()=>(o(),n._getItemOffset(y))),T=x(()=>(o(),n._isUnmeasuredItem(y)));return E(he,{_index:y,get _resizer(){return g._observeItem},get _offset(){return S()},get _hide(){return T()},get _children(){return e.children(u,y)},_isHorizontal:v})}})),N(u=>{var y=v?H()+"px":"100%",S=v?"100%":H()+"px",T=z()!==Se?"none":"auto";return y!==u.e&&((u.e=y)!=null?t.style.setProperty("width",y):t.style.removeProperty("width")),S!==u.t&&((u.t=S)!=null?t.style.setProperty("height",S):t.style.removeProperty("height")),T!==u.a&&((u.a=T)!=null?t.style.setProperty("pointer-events",T):t.style.removeProperty("pointer-events")),u},{e:void 0,t:void 0,a:void 0}),t})()};var Ee=O("<div>");const A=e=>{const{ref:d,data:l,children:s,overscan:a,itemSize:f,shift:P,horizontal:b=!1,onScroll:v,onScrollEnd:V,onRangeChange:p,style:i,...n}=e;return(()=>{var g=Ee();return oe(g,le(n,{get style(){return{display:b?"inline-block":"block",[b?"overflow-x":"overflow-y"]:"auto",contain:"strict",width:"100%",height:"100%",...e.style}}}),!1,!0),m(g,E(pe,{ref(c){var o=e.ref;typeof o=="function"?o(c):e.ref=c},get data(){return e.data},get overscan(){return e.overscan},get itemSize(){return e.itemSize},get shift(){return e.shift},horizontal:b,get onScroll(){return e.onScroll},get onScrollEnd(){return e.onScrollEnd},get onRangeChange(){return e.onRangeChange},get children(){return e.children}})),g})()};var L=O("<div>"),Pe=O("<div><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append");const ze={component:A},$={render:()=>{const e=[20,40,80,77],d=Array.from({length:1e3}).map((l,s)=>e[s%4]);return E(A,{data:d,style:{height:"100vh"},children:(l,s)=>(()=>{var a=L();return l+"px"!=null?a.style.setProperty("height",l+"px"):a.style.removeProperty("height"),a.style.setProperty("border-bottom","solid 1px #ccc"),a.style.setProperty("background","#fff"),m(a,s),a})()})}},R={render:()=>{const e=[40,180,77],d=Array.from({length:1e3}).map((l,s)=>e[s%3]);return(()=>{var l=L();return l.style.setProperty("padding","10px"),m(l,E(A,{data:d,style:{width:"100%",height:"200px"},horizontal:!0,children:(s,a)=>(()=>{var f=L();return s+"px"!=null?f.style.setProperty("width",s+"px"):f.style.removeProperty("width"),f.style.setProperty("border-right","solid 1px #ccc"),f.style.setProperty("background","#fff"),m(f,a),f})()})),l})()}},I={render:()=>{const e=[20,40,180,77],d=i=>({index:i,height:e[i%4]}),[l,s]=C(Array.from({length:1e3}).map((i,n)=>d(n))),[a,f]=C(0),[P,b]=C(!1),[v,V]=C(567);let p;return(()=>{var i=Pe(),n=i.firstChild;n.firstChild;var g=n.nextSibling;g.firstChild;var c=g.nextSibling,o=c.firstChild,k=o.nextSibling,w=c.nextSibling,D=w.firstChild;return i.style.setProperty("height","100%"),i.style.setProperty("display","flex"),i.style.setProperty("flex-direction","column"),m(n,a,null),m(g,()=>String(P()),null),o.$$input=r=>{V(Number(r.target.value))},k.$$click=()=>{p==null||p.scrollToIndex(v())},D.$$click=()=>{s(r=>[...r,...Array.from({length:100}).map((h,z)=>d(z+r.length))])},m(i,E(A,{ref:r=>{p=r},get data(){return l()},style:{height:"100vh"},onScroll:r=>{f(r),b(!0)},onScrollEnd:()=>{b(!1)},children:r=>(()=>{var h=L();return h.style.setProperty("border-bottom","solid 1px #ccc"),h.style.setProperty("background","#fff"),m(h,()=>r.index),N(()=>r.height+"px"!=null?h.style.setProperty("height",r.height+"px"):h.style.removeProperty("height")),h})()}),null),N(()=>o.value=v()),i})()}};se(["input","click"]);var B,G,J;$.parameters={...$.parameters,docs:{...(B=$.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(J=(G=$.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var F,Z,q;R.parameters={...R.parameters,docs:{...(F=R.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(Z=R.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var K,Q,W;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};const $e=["Default","Horizontal","Controlls"];export{I as Controlls,$ as Default,R as Horizontal,$e as __namedExportsOrder,ze as default};
