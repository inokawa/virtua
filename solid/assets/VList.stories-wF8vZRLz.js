import{s as j,m as q,i as a,d as b,t as z,c as m,e as V,f as B}from"./web-DSIcfvkV.js";import{V as F}from"./Virtualizer-i2XK2Hyc.js";import"./utils-CGYXSo7W.js";var G=z("<div>");const _=e=>{const{ref:c,data:n,children:r,overscan:l,itemSize:s,shift:k,horizontal:h,onScroll:$,onScrollEnd:T,style:f,...t}=e;return(()=>{var i=G();return j(i,q(t,{get style(){return{display:h?"inline-block":"block",[h?"overflow-x":"overflow-y"]:"auto",contain:"strict",width:"100%",height:"100%",...e.style}}}),!1,!0),a(i,b(F,{ref(g){var u=e.ref;typeof u=="function"?u(g):e.ref=g},get data(){return e.data},get overscan(){return e.overscan},get itemSize(){return e.itemSize},get shift(){return e.shift},horizontal:h,get onScroll(){return e.onScroll},get onScrollEnd(){return e.onScrollEnd},get children(){return e.children}})),i})()};var S=z("<div>"),J=z("<div><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append");const W={component:_},y={render:()=>{const e=[20,40,80,77],c=Array.from({length:1e3}).map((n,r)=>e[r%4]);return b(_,{data:c,style:{height:"100vh"},children:(n,r)=>(()=>{var l=S();return n+"px"!=null?l.style.setProperty("height",n+"px"):l.style.removeProperty("height"),l.style.setProperty("border-bottom","solid 1px #ccc"),l.style.setProperty("background","#fff"),a(l,r),l})()})}},v={render:()=>{const e=[40,180,77],c=Array.from({length:1e3}).map((n,r)=>e[r%3]);return(()=>{var n=S();return n.style.setProperty("padding","10px"),a(n,b(_,{data:c,style:{width:"100%",height:"200px"},horizontal:!0,children:(r,l)=>(()=>{var s=S();return r+"px"!=null?s.style.setProperty("width",r+"px"):s.style.removeProperty("width"),s.style.setProperty("border-right","solid 1px #ccc"),s.style.setProperty("background","#fff"),a(s,l),s})()})),n})()}},x={render:()=>{const e=[20,40,180,77],c=t=>({index:t,height:e[t%4]}),[n,r]=m(Array.from({length:1e3}).map((t,i)=>c(i))),[l,s]=m(0),[k,h]=m(!1),[$,T]=m(567);let f;return(()=>{var t=J(),i=t.firstChild;i.firstChild;var g=i.nextSibling;g.firstChild;var u=g.nextSibling,P=u.firstChild,N=P.nextSibling,M=u.nextSibling,R=M.firstChild;return t.style.setProperty("height","100%"),t.style.setProperty("display","flex"),t.style.setProperty("flex-direction","column"),a(i,l,null),a(g,()=>String(k()),null),P.$$input=o=>{T(Number(o.target.value))},N.$$click=()=>{f==null||f.scrollToIndex($())},R.$$click=()=>{r(o=>[...o,...Array.from({length:100}).map((d,p)=>c(p+o.length))])},a(t,b(_,{ref:o=>{f=o},get data(){return n()},style:{height:"100vh"},onScroll:o=>{s(o),h(!0)},onScrollEnd:()=>{h(!1)},children:o=>(()=>{var d=S();return d.style.setProperty("border-bottom","solid 1px #ccc"),d.style.setProperty("background","#fff"),a(d,()=>o.index),V(p=>(p=o.height+"px")!=null?d.style.setProperty("height",p):d.style.removeProperty("height")),d})()}),null),V(()=>P.value=$()),t})()}};var C,I,L;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(L=(I=y.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var E,w,A;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(w=v.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var O,D,H;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(D=x.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};B(["input","click"]);const X=["Default","Horizontal","Controlls"];export{x as Controlls,y as Default,v as Horizontal,X as __namedExportsOrder,W as default};
