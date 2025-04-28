import{s as J,m as K,i as d,d as b,t as T,c as p,e as z,f as Q}from"./web-DSIcfvkV.js";import{V as U}from"./Virtualizer-DjR_c0rv.js";import"./utils-EGZ2cTVs.js";var W=T("<div>");const x=e=>{const{ref:h,data:r,children:l,overscan:s,itemSize:o,shift:C,horizontal:g,onScroll:S,onScrollEnd:L,style:f,..._}=e;return(()=>{var a=W();return J(a,K(_,{get style(){return{display:g?"inline-block":"block",[g?"overflow-x":"overflow-y"]:"auto",contain:"strict",width:"100%",height:"100%",...e.style}}}),!1,!0),d(a,b(U,{ref(n){var c=e.ref;typeof c=="function"?c(n):e.ref=n},get data(){return e.data},get overscan(){return e.overscan},get itemSize(){return e.itemSize},get shift(){return e.shift},horizontal:g,get onScroll(){return e.onScroll},get onScrollEnd(){return e.onScrollEnd},get children(){return e.children}})),a})()};var v=T("<div>"),X=T("<div><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append</button><label><input type=checkbox>prepend");const te={component:x},u={render:()=>{const e=[20,40,80,77],h=Array.from({length:1e3}).map((r,l)=>e[l%4]);return b(x,{data:h,style:{height:"100vh"},children:(r,l)=>(()=>{var s=v();return r+"px"!=null?s.style.setProperty("height",r+"px"):s.style.removeProperty("height"),s.style.setProperty("border-bottom","solid 1px #ccc"),s.style.setProperty("background","#fff"),d(s,l),s})()})}},m={render:()=>{const e=[40,180,77],h=Array.from({length:1e3}).map((r,l)=>e[l%3]);return(()=>{var r=v();return r.style.setProperty("padding","10px"),d(r,b(x,{data:h,style:{width:"100%",height:"200px"},horizontal:!0,children:(l,s)=>(()=>{var o=v();return l+"px"!=null?o.style.setProperty("width",l+"px"):o.style.removeProperty("width"),o.style.setProperty("border-right","solid 1px #ccc"),o.style.setProperty("background","#fff"),d(o,s),o})()})),r})()}},y={render:()=>{const e=[20,40,180,77],h=n=>({index:n,height:e[n%4]}),[r,l]=p(Array.from({length:1e3}).map((n,c)=>h(c))),[s,o]=p(0),[C,g]=p(!1),[S,L]=p(567),[f,_]=p(!1);let a;return(()=>{var n=X(),c=n.firstChild;c.firstChild;var $=c.nextSibling;$.firstChild;var V=$.nextSibling,P=V.firstChild,q=P.nextSibling,B=V.nextSibling,E=B.firstChild,F=E.nextSibling,I=F.firstChild;return n.style.setProperty("height","100%"),n.style.setProperty("display","flex"),n.style.setProperty("flex-direction","column"),d(c,s,null),d($,()=>String(C()),null),P.$$input=t=>{L(Number(t.target.value))},q.$$click=()=>{a==null||a.scrollToIndex(S())},E.$$click=()=>{l(t=>{const i=Array.from({length:100}).map((k,G)=>h(G+t.length));return f()?[...i,...t]:[...t,...i]})},I.addEventListener("change",()=>{_(t=>!t)}),d(n,b(x,{ref:t=>{a=t},get data(){return r()},get shift(){return f()},style:{height:"100vh"},onScroll:t=>{o(t),g(!0)},onScrollEnd:()=>{g(!1)},children:t=>(()=>{var i=v();return i.style.setProperty("border-bottom","solid 1px #ccc"),i.style.setProperty("background","#fff"),d(i,()=>t.index),z(k=>(k=t.height+"px")!=null?i.style.setProperty("height",k):i.style.removeProperty("height")),i})()}),null),z(()=>P.value=S()),z(()=>I.checked=f()),n})()}};var w,A,O;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(O=(A=u.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var D,H,N;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var M,R,j;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(j=(R=y.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};Q(["input","click"]);const ne=["Default","Horizontal","Controlls"];export{y as Controlls,u as Default,m as Horizontal,ne as __namedExportsOrder,te as default};
