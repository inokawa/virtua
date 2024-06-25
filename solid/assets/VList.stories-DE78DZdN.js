import{s as j,m as q,i,d as _,t as P,c as m,e as k,f as B}from"./web-BB0IMLXK.js";import{V as F}from"./Virtualizer-DBsKbJnf.js";import"./utils-BXxFqQ7p.js";var G=P("<div>");const b=e=>{const{ref:a,data:n,children:r,overscan:l,itemSize:s,shift:z,horizontal:h=!1,onScroll:$,onScrollEnd:C,onRangeChange:u,style:o,...c}=e;return(()=>{var d=G();return j(d,q(c,{get style(){return{display:h?"inline-block":"block",[h?"overflow-x":"overflow-y"]:"auto",contain:"strict",width:"100%",height:"100%",...e.style}}}),!1,!0),i(d,_(F,{ref(p){var f=e.ref;typeof f=="function"?f(p):e.ref=p},get data(){return e.data},get overscan(){return e.overscan},get itemSize(){return e.itemSize},get shift(){return e.shift},horizontal:h,get onScroll(){return e.onScroll},get onScrollEnd(){return e.onScrollEnd},get onRangeChange(){return e.onRangeChange},get children(){return e.children}})),d})()};var x=P("<div>"),J=P("<div><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append");const W={component:b},y={render:()=>{const e=[20,40,80,77],a=Array.from({length:1e3}).map((n,r)=>e[r%4]);return _(b,{data:a,style:{height:"100vh"},children:(n,r)=>(()=>{var l=x();return n+"px"!=null?l.style.setProperty("height",n+"px"):l.style.removeProperty("height"),l.style.setProperty("border-bottom","solid 1px #ccc"),l.style.setProperty("background","#fff"),i(l,r),l})()})}},v={render:()=>{const e=[40,180,77],a=Array.from({length:1e3}).map((n,r)=>e[r%3]);return(()=>{var n=x();return n.style.setProperty("padding","10px"),i(n,_(b,{data:a,style:{width:"100%",height:"200px"},horizontal:!0,children:(r,l)=>(()=>{var s=x();return r+"px"!=null?s.style.setProperty("width",r+"px"):s.style.removeProperty("width"),s.style.setProperty("border-right","solid 1px #ccc"),s.style.setProperty("background","#fff"),i(s,l),s})()})),n})()}},S={render:()=>{const e=[20,40,180,77],a=o=>({index:o,height:e[o%4]}),[n,r]=m(Array.from({length:1e3}).map((o,c)=>a(c))),[l,s]=m(0),[z,h]=m(!1),[$,C]=m(567);let u;return(()=>{var o=J(),c=o.firstChild;c.firstChild;var d=c.nextSibling;d.firstChild;var p=d.nextSibling,f=p.firstChild,R=f.nextSibling,H=p.nextSibling,N=H.firstChild;return o.style.setProperty("height","100%"),o.style.setProperty("display","flex"),o.style.setProperty("flex-direction","column"),i(c,l,null),i(d,()=>String(z()),null),f.$$input=t=>{C(Number(t.target.value))},R.$$click=()=>{u==null||u.scrollToIndex($())},N.$$click=()=>{r(t=>[...t,...Array.from({length:100}).map((g,M)=>a(M+t.length))])},i(o,_(b,{ref:t=>{u=t},get data(){return n()},style:{height:"100vh"},onScroll:t=>{s(t),h(!0)},onScrollEnd:()=>{h(!1)},children:t=>(()=>{var g=x();return g.style.setProperty("border-bottom","solid 1px #ccc"),g.style.setProperty("background","#fff"),i(g,()=>t.index),k(()=>t.height+"px"!=null?g.style.setProperty("height",t.height+"px"):g.style.removeProperty("height")),g})()}),null),k(()=>f.value=$()),o})()}};B(["input","click"]);var T,V,E;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(V=y.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var I,L,w;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(L=v.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var A,O,D;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(O=S.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const X=["Default","Horizontal","Controlls"];export{S as Controlls,y as Default,v as Horizontal,X as __namedExportsOrder,W as default};
