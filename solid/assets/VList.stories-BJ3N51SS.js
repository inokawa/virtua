import{s as j,m as q,i,d as b,t as z,c as y,e as T,f as B}from"./web-CyEQ2uJi.js";import{V as F}from"./Virtualizer-DuPdYvQe.js";import"./utils-DsPLEayC.js";var G=z("<div>");const $=e=>{const{ref:a,data:t,children:n,overscan:r,itemSize:s,shift:C,horizontal:h=!1,onScroll:P,onScrollEnd:k,onRangeChange:u,style:l,...c}=e;return(()=>{var d=G();return j(d,q(c,{get style(){return{display:h?"inline-block":"block",[h?"overflow-x":"overflow-y"]:"auto",contain:"strict",width:"100%",height:"100%",...e.style}}}),!1,!0),i(d,b(F,{ref(m){var f=e.ref;typeof f=="function"?f(m):e.ref=m},get data(){return e.data},get overscan(){return e.overscan},get itemSize(){return e.itemSize},get shift(){return e.shift},horizontal:h,get onScroll(){return e.onScroll},get onScrollEnd(){return e.onScrollEnd},get onRangeChange(){return e.onRangeChange},get children(){return e.children}})),d})()};var _=z("<div>"),J=z("<div><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append");const W={component:$},v={render:()=>{const e=[20,40,80,77],a=Array.from({length:1e3}).map((t,n)=>e[n%4]);return b($,{data:a,style:{height:"100vh"},children:(t,n)=>(()=>{var r=_();return t+"px"!=null?r.style.setProperty("height",t+"px"):r.style.removeProperty("height"),r.style.setProperty("border-bottom","solid 1px #ccc"),r.style.setProperty("background","#fff"),i(r,n),r})()})}},S={render:()=>{const e=[40,180,77],a=Array.from({length:1e3}).map((t,n)=>e[n%3]);return(()=>{var t=_();return t.style.setProperty("padding","10px"),i(t,b($,{data:a,style:{width:"100%",height:"200px"},horizontal:!0,children:(n,r)=>(()=>{var s=_();return n+"px"!=null?s.style.setProperty("width",n+"px"):s.style.removeProperty("width"),s.style.setProperty("border-right","solid 1px #ccc"),s.style.setProperty("background","#fff"),i(s,r),s})()})),t})()}},x={render:()=>{const e=[20,40,180,77],a=l=>({index:l,height:e[l%4]}),[t,n]=y(Array.from({length:1e3}).map((l,c)=>a(c))),[r,s]=y(0),[C,h]=y(!1),[P,k]=y(567);let u;return(()=>{var l=J(),c=l.firstChild;c.firstChild;var d=c.nextSibling;d.firstChild;var m=d.nextSibling,f=m.firstChild,H=f.nextSibling,N=m.nextSibling,M=N.firstChild;return l.style.setProperty("height","100%"),l.style.setProperty("display","flex"),l.style.setProperty("flex-direction","column"),i(c,r,null),i(d,()=>String(C()),null),f.$$input=o=>{k(Number(o.target.value))},H.$$click=()=>{u==null||u.scrollToIndex(P())},M.$$click=()=>{n(o=>[...o,...Array.from({length:100}).map((g,p)=>a(p+o.length))])},i(l,b($,{ref:o=>{u=o},get data(){return t()},style:{height:"100vh"},onScroll:o=>{s(o),h(!0)},onScrollEnd:()=>{h(!1)},children:o=>(()=>{var g=_();return g.style.setProperty("border-bottom","solid 1px #ccc"),g.style.setProperty("background","#fff"),i(g,()=>o.index),T(p=>(p=o.height+"px")!=null?g.style.setProperty("height",p):g.style.removeProperty("height")),g})()}),null),T(()=>f.value=P()),l})()}};B(["input","click"]);var V,E,I;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(I=(E=v.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var L,w,A;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=(w=S.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var O,D,R;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(D=x.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const X=["Default","Horizontal","Controlls"];export{x as Controlls,v as Default,S as Horizontal,X as __namedExportsOrder,W as default};
