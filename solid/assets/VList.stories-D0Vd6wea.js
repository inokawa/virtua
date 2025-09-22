import{a as $,t as v,s as l,i as o,c as h,b as _,g as K}from"./iframe-B5X_puvm.js";import{V as b}from"./VList-CMfNbFxD.js";import"./preload-helper-BQ24v_F8.js";import"./Virtualizer-BFidQU2z.js";import"./utils-DiH09Cir.js";var N=v('<div style="border-bottom:solid 1px #ccc">'),Q=v("<div>"),U=v('<div style="border-right:solid 1px #ccc">'),W=v("<div style=flex-direction:column><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append</button><label><input type=checkbox>prepend");const te={component:b},f={render:()=>{const d=[20,40,80,77],a=Array.from({length:1e3}).map((n,t)=>d[t%4]);return $(b,{data:a,style:{height:"100vh"},children:(n,t)=>(()=>{var s=N();return l(s,"height",n+"px"),l(s,"background","#fff"),o(s,t),s})()})}},u={render:()=>{const d=[40,180,77],a=Array.from({length:1e3}).map((n,t)=>d[t%3]);return(()=>{var n=Q();return l(n,"padding","10px"),o(n,$(b,{data:a,style:{width:"100%",height:"200px"},horizontal:!0,children:(t,s)=>(()=>{var c=U();return l(c,"width",t+"px"),l(c,"background","#fff"),o(c,s),c})()})),n})()}},m={render:()=>{const d=[20,40,180,77],a=r=>({index:r,height:d[r%4]}),[n,t]=h(Array.from({length:1e3}).map((r,p)=>a(p))),[s,c]=h(0),[M,k]=h(!1),[T,R]=h(567),[x,j]=h(!1);let g;return(()=>{var r=W(),p=r.firstChild;p.firstChild;var S=p.nextSibling;S.firstChild;var C=S.nextSibling,y=C.firstChild,q=y.nextSibling,B=C.nextSibling,L=B.firstChild,F=L.nextSibling,z=F.firstChild;return l(r,"height","100%"),l(r,"display","flex"),o(p,s,null),o(S,()=>String(M()),null),y.$$input=e=>{R(Number(e.target.value))},q.$$click=()=>{g==null||g.scrollToIndex(T())},L.$$click=()=>{t(e=>{const i=Array.from({length:100}).map((G,J)=>a(J+e.length));return x()?[...i,...e]:[...e,...i]})},z.addEventListener("change",()=>{j(e=>!e)}),o(r,$(b,{ref:e=>{g=e},get data(){return n()},get shift(){return x()},style:{height:"100vh"},onScroll:e=>{c(e),k(!0)},onScrollEnd:()=>{k(!1)},children:e=>(()=>{var i=N();return l(i,"background","#fff"),o(i,()=>e.index),_(G=>l(i,"height",e.height+"px")),i})()}),null),_(()=>y.value=T()),_(()=>z.checked=x()),r})()}};var I,V,A;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(V=f.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var E,O,D;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(O=u.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var w,H,P;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(P=(H=m.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};K(["input","click"]);const re=["Default","Horizontal","Controlls"];export{m as Controlls,f as Default,u as Horizontal,re as __namedExportsOrder,te as default};
