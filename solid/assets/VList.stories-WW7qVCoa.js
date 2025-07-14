import{a as $,i,c as p,b as _,f as J,t as N}from"./iframe-Bqn8YFNw.js";import{V as y}from"./VList-5O6ZEm2B.js";import"./Virtualizer-Dr9QGpTH.js";import"./utils-B-U-wvfp.js";var m=N("<div>"),K=N("<div><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append</button><label><input type=checkbox>prepend");const Y={component:y},g={render:()=>{const c=[20,40,80,77],a=Array.from({length:1e3}).map((t,n)=>c[n%4]);return $(y,{data:a,style:{height:"100vh"},children:(t,n)=>(()=>{var r=m();return t+"px"!=null?r.style.setProperty("height",t+"px"):r.style.removeProperty("height"),r.style.setProperty("border-bottom","solid 1px #ccc"),r.style.setProperty("background","#fff"),i(r,n),r})()})}},f={render:()=>{const c=[40,180,77],a=Array.from({length:1e3}).map((t,n)=>c[n%3]);return(()=>{var t=m();return t.style.setProperty("padding","10px"),i(t,$(y,{data:a,style:{width:"100%",height:"200px"},horizontal:!0,children:(n,r)=>(()=>{var o=m();return n+"px"!=null?o.style.setProperty("width",n+"px"):o.style.removeProperty("width"),o.style.setProperty("border-right","solid 1px #ccc"),o.style.setProperty("background","#fff"),i(o,r),o})()})),t})()}},u={render:()=>{const c=[20,40,180,77],a=s=>({index:s,height:c[s%4]}),[t,n]=p(Array.from({length:1e3}).map((s,d)=>a(d))),[r,o]=p(0),[M,P]=p(!1),[k,R]=p(567),[v,j]=p(!1);let h;return(()=>{var s=K(),d=s.firstChild;d.firstChild;var b=d.nextSibling;b.firstChild;var T=b.nextSibling,x=T.firstChild,q=x.nextSibling,B=T.nextSibling,C=B.firstChild,F=C.nextSibling,L=F.firstChild;return s.style.setProperty("height","100%"),s.style.setProperty("display","flex"),s.style.setProperty("flex-direction","column"),i(d,r,null),i(b,()=>String(M()),null),x.$$input=e=>{R(Number(e.target.value))},q.$$click=()=>{h==null||h.scrollToIndex(k())},C.$$click=()=>{n(e=>{const l=Array.from({length:100}).map((S,G)=>a(G+e.length));return v()?[...l,...e]:[...e,...l]})},L.addEventListener("change",()=>{j(e=>!e)}),i(s,$(y,{ref:e=>{h=e},get data(){return t()},get shift(){return v()},style:{height:"100vh"},onScroll:e=>{o(e),P(!0)},onScrollEnd:()=>{P(!1)},children:e=>(()=>{var l=m();return l.style.setProperty("border-bottom","solid 1px #ccc"),l.style.setProperty("background","#fff"),i(l,()=>e.index),_(S=>(S=e.height+"px")!=null?l.style.setProperty("height",S):l.style.removeProperty("height")),l})()}),null),_(()=>x.value=k()),_(()=>L.checked=v()),s})()}};var z,I,V;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(V=(I=g.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var A,E,O;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=(E=f.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var w,D,H;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(H=(D=u.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};J(["input","click"]);const Z=["Default","Horizontal","Controlls"];export{u as Controlls,g as Default,f as Horizontal,Z as __namedExportsOrder,Y as default};
