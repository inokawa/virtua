import{c as z,e as b,o as ee,f as te,h as U,i as M,s as ne,j as m,d as E,k as N,t as O,l as re,u as oe,n as le,m as se,p as ae}from"./web-ndUTLaYp.js";import{c as ie,U as ce,a as de,b as ge,d as ue,e as fe,A as he,L as _e,R as ve,f as ye,i as j,g as me,o as Se,h as be,j as xe,S as pe,k as Ee}from"./utils--lHl1Ixz.js";var Pe=O("<div>");const Te=e=>{let d;const{ref:l,data:s,children:a,overscan:h,itemSize:P,shift:x,horizontal:y=!1,onScroll:V,onScrollEnd:p,onRangeChange:i}=e,n=ie(e.data.length,P??40,void 0,void 0,!P),g=ye(n,y),c=Ee(n,y),[r,k]=z(n._getStateVersion()),w=n._subscribe(ce+de,()=>{k(n._getStateVersion())}),D=n._subscribe(ge,()=>{var t;(t=e.onScroll)==null||t.call(e,n._getScrollOffset())}),o=n._subscribe(ue,()=>{var t;(t=e.onScrollEnd)==null||t.call(e)}),_=b(t=>{r();const u=n._getRange();return t&&j(t,u)?t:u}),T=b(()=>r()&&n._getScrollDirection()),H=b(()=>r()&&n._getTotalSize());b(()=>r()&&me(n));const X=b(()=>r()&&n._getJumpCount()),Y=b(t=>{const u=e.overscan??4,[f,v]=_(),S=[Se(f,u,T()),be(v,u,T(),e.data.length)];return t&&j(t,S)?t:S});return ee(()=>{e.ref&&e.ref({get scrollOffset(){return n._getScrollOffset()},get scrollSize(){return xe(n)},get viewportSize(){return n._getViewportSize()},scrollToIndex:c._scrollToIndex,scrollTo:c._scrollTo,scrollBy:c._scrollBy});const t=d.parentElement;g._observeRoot(t),c._observe(t),re(()=>{e.ref&&e.ref(),w(),D(),o(),g._dispose(),c._dispose()})}),te(U(()=>e.data.length,(t,u)=>{fe(u)&&t!==u&&n._update(he,[t,e.shift])})),M(U(X,()=>{c._fixScrollJump()})),M(()=>{const t=_();e.onRangeChange&&e.onRangeChange(t[0],t[1])}),(()=>{var t=Pe(),u=d;return typeof u=="function"?oe(u,t):d=t,ne(t,{"overflow-anchor":"none"}),t.style.setProperty("overflow-anchor","none"),t.style.setProperty("flex","none"),t.style.setProperty("position","relative"),t.style.setProperty("visibility","hidden"),m(t,E(ve,{get _each(){return e.data},get _range(){return Y()},_render:(f,v)=>{const S=b(()=>(r(),n._getItemOffset(v))),C=b(()=>(r(),n._isUnmeasuredItem(v)));return E(_e,{_index:v,get _resizer(){return g._observeItem},get _offset(){return S()},get _hide(){return C()},get _children(){return e.children(f,v)},_isHorizontal:y})}})),N(f=>{var v=y?H()+"px":"100%",S=y?"100%":H()+"px",C=T()!==pe?"none":"auto";return v!==f.e&&((f.e=v)!=null?t.style.setProperty("width",v):t.style.removeProperty("width")),S!==f.t&&((f.t=S)!=null?t.style.setProperty("height",S):t.style.removeProperty("height")),C!==f.a&&((f.a=C)!=null?t.style.setProperty("pointer-events",C):t.style.removeProperty("pointer-events")),f},{e:void 0,t:void 0,a:void 0}),t})()};var Ce=O("<div>");const A=e=>{const{ref:d,data:l,children:s,overscan:a,itemSize:h,shift:P,horizontal:x=!1,onScroll:y,onScrollEnd:V,onRangeChange:p,style:i,...n}=e;return(()=>{var g=Ce();return le(g,se(n,{get style(){return{display:x?"inline-block":"block",[x?"overflow-x":"overflow-y"]:"auto",contain:"strict",width:"100%",height:"100%",...e.style}}}),!1,!0),m(g,E(Te,{ref(c){var r=e.ref;typeof r=="function"?r(c):e.ref=c},get data(){return e.data},get overscan(){return e.overscan},get itemSize(){return e.itemSize},get shift(){return e.shift},horizontal:x,get onScroll(){return e.onScroll},get onScrollEnd(){return e.onScrollEnd},get onRangeChange(){return e.onRangeChange},get children(){return e.children}})),g})()};var L=O("<div>"),ze=O("<div><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append");const Re={component:A},I={render:()=>{const e=[20,40,80,77],d=Array.from({length:1e3}).map((l,s)=>e[s%4]);return E(A,{data:d,style:{height:"100vh"},children:(l,s)=>(()=>{var a=L();return l+"px"!=null?a.style.setProperty("height",l+"px"):a.style.removeProperty("height"),a.style.setProperty("border-bottom","solid 1px #ccc"),a.style.setProperty("background","#fff"),m(a,s),a})()})}},$={render:()=>{const e=[40,180,77],d=Array.from({length:1e3}).map((l,s)=>e[s%3]);return(()=>{var l=L();return l.style.setProperty("padding","10px"),m(l,E(A,{data:d,style:{width:"100%",height:"200px"},horizontal:!0,children:(s,a)=>(()=>{var h=L();return s+"px"!=null?h.style.setProperty("width",s+"px"):h.style.removeProperty("width"),h.style.setProperty("border-right","solid 1px #ccc"),h.style.setProperty("background","#fff"),m(h,a),h})()})),l})()}},R={render:()=>{const e=[20,40,180,77],d=i=>({index:i,height:e[i%4]}),[l,s]=z(Array.from({length:1e3}).map((i,n)=>d(n))),[a,h]=z(0),[P,x]=z(!1),[y,V]=z(567);let p;return(()=>{var i=ze(),n=i.firstChild;n.firstChild;var g=n.nextSibling;g.firstChild;var c=g.nextSibling,r=c.firstChild,k=r.nextSibling,w=c.nextSibling,D=w.firstChild;return i.style.setProperty("height","100%"),i.style.setProperty("display","flex"),i.style.setProperty("flex-direction","column"),m(n,a,null),m(g,()=>String(P()),null),r.$$input=o=>{V(Number(o.target.value))},k.$$click=()=>{p==null||p.scrollToIndex(y())},D.$$click=()=>{s(o=>[...o,...Array.from({length:100}).map((_,T)=>d(T+o.length))])},m(i,E(A,{ref:o=>{p=o},get data(){return l()},style:{height:"100vh"},onScroll:o=>{h(o),x(!0)},onScrollEnd:()=>{x(!1)},children:o=>(()=>{var _=L();return _.style.setProperty("border-bottom","solid 1px #ccc"),_.style.setProperty("background","#fff"),m(_,()=>o.index),N(()=>o.height+"px"!=null?_.style.setProperty("height",o.height+"px"):_.style.removeProperty("height")),_})()}),null),N(()=>r.value=y()),i})()}};ae(["input","click"]);var B,G,J;I.parameters={...I.parameters,docs:{...(B=I.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};const Le=["Default","Horizontal","Controlls"];export{R as Controlls,I as Default,$ as Horizontal,Le as __namedExportsOrder,Re as default};
