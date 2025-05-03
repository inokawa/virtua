import{s as J,m as K,i as c,d as S,t as z,c as f,e as k,f as Q}from"./web-CXCq-PRR.js";import{V as U}from"./Virtualizer-aUHxE4ek.js";import"./utils-C9bggKDN.js";var W=z("<div>");const _=e=>{const{ref:d,data:r,children:l,overscan:s,itemSize:o,shift:T,horizontal:h,cache:u,onScroll:C,onScrollEnd:m,style:L,...g}=e;return(()=>{var t=W();return J(t,K(g,{get style(){return{display:h?"inline-block":"block",[h?"overflow-x":"overflow-y"]:"auto",contain:"strict",width:"100%",height:"100%",...e.style}}}),!1,!0),c(t,S(U,{ref(a){var p=e.ref;typeof p=="function"?p(a):e.ref=a},get data(){return e.data},get overscan(){return e.overscan},get itemSize(){return e.itemSize},get shift(){return e.shift},horizontal:h,cache:u,get onScroll(){return e.onScroll},get onScrollEnd(){return e.onScrollEnd},get children(){return e.children}})),t})()};var x=z("<div>"),X=z("<div><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append</button><label><input type=checkbox>prepend");const te={component:_},y={render:()=>{const e=[20,40,80,77],d=Array.from({length:1e3}).map((r,l)=>e[l%4]);return S(_,{data:d,style:{height:"100vh"},children:(r,l)=>(()=>{var s=x();return r+"px"!=null?s.style.setProperty("height",r+"px"):s.style.removeProperty("height"),s.style.setProperty("border-bottom","solid 1px #ccc"),s.style.setProperty("background","#fff"),c(s,l),s})()})}},v={render:()=>{const e=[40,180,77],d=Array.from({length:1e3}).map((r,l)=>e[l%3]);return(()=>{var r=x();return r.style.setProperty("padding","10px"),c(r,S(_,{data:d,style:{width:"100%",height:"200px"},horizontal:!0,children:(l,s)=>(()=>{var o=x();return l+"px"!=null?o.style.setProperty("width",l+"px"):o.style.removeProperty("width"),o.style.setProperty("border-right","solid 1px #ccc"),o.style.setProperty("background","#fff"),c(o,s),o})()})),r})()}},b={render:()=>{const e=[20,40,180,77],d=t=>({index:t,height:e[t%4]}),[r,l]=f(Array.from({length:1e3}).map((t,a)=>d(a))),[s,o]=f(0),[T,h]=f(!1),[u,C]=f(567),[m,L]=f(!1);let g;return(()=>{var t=X(),a=t.firstChild;a.firstChild;var p=a.nextSibling;p.firstChild;var V=p.nextSibling,$=V.firstChild,q=$.nextSibling,B=V.nextSibling,E=B.firstChild,F=E.nextSibling,I=F.firstChild;return t.style.setProperty("height","100%"),t.style.setProperty("display","flex"),t.style.setProperty("flex-direction","column"),c(a,s,null),c(p,()=>String(T()),null),$.$$input=n=>{C(Number(n.target.value))},q.$$click=()=>{g==null||g.scrollToIndex(u())},E.$$click=()=>{l(n=>{const i=Array.from({length:100}).map((P,G)=>d(G+n.length));return m()?[...i,...n]:[...n,...i]})},I.addEventListener("change",()=>{L(n=>!n)}),c(t,S(_,{ref:n=>{g=n},get data(){return r()},get shift(){return m()},style:{height:"100vh"},onScroll:n=>{o(n),h(!0)},onScrollEnd:()=>{h(!1)},children:n=>(()=>{var i=x();return i.style.setProperty("border-bottom","solid 1px #ccc"),i.style.setProperty("background","#fff"),c(i,()=>n.index),k(P=>(P=n.height+"px")!=null?i.style.setProperty("height",P):i.style.removeProperty("height")),i})()}),null),k(()=>$.value=u()),k(()=>I.checked=m()),t})()}};var w,A,O;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
            {i()}
          </div>}
      </VList>;
  }
}`,...(O=(A=y.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var D,H,N;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
              {i()}
            </div>}
        </VList>
      </div>;
  }
}`,...(N=(H=v.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var M,R,j;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    const [prepend, setPrepend] = createSignal(false);
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
          setData(prev => {
            const items = Array.from({
              length: 100
            }).map((_, i) => createItem(i + prev.length));
            return prepend() ? [...items, ...prev] : [...prev, ...items];
          });
        }}>
            append
          </button>
          <label>
            <input type="checkbox" checked={prepend()} onchange={() => {
            setPrepend(prev => !prev);
          }} />
            prepend
          </label>
        </div>
        <VList ref={h => {
        handle = h;
      }} data={data()} shift={prepend()} style={{
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
}`,...(j=(R=b.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};Q(["input","click"]);const ne=["Default","Horizontal","Controlls"];export{b as Controlls,y as Default,v as Horizontal,ne as __namedExportsOrder,te as default};
