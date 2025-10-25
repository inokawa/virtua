import{a as _,t as m,s as l,i as o,c as h,b as y,g as N}from"./iframe-CnFkLNQD.js";import{V as v}from"./VList-TW0B0-Ce.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-CnoTs5rF.js";import"./utils-lDzlPgv4.js";var I=m('<div style="border-bottom:solid 1px #ccc">'),M=m("<div>"),R=m('<div style="border-right:solid 1px #ccc">'),j=m("<div style=flex-direction:column><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append</button><label><input type=checkbox>prepend");const K={component:v},g={render:()=>{const d=[20,40,80,77],a=Array.from({length:1e3}).map((n,t)=>d[t%4]);return _(v,{data:a,style:{height:"100vh"},children:(n,t)=>(()=>{var s=I();return l(s,"height",n+"px"),l(s,"background","#fff"),o(s,t),s})()})}},f={render:()=>{const d=[40,180,77],a=Array.from({length:1e3}).map((n,t)=>d[t%3]);return(()=>{var n=M();return l(n,"padding","10px"),o(n,_(v,{data:a,style:{width:"100%",height:"200px"},horizontal:!0,children:(t,s)=>(()=>{var c=R();return l(c,"width",t+"px"),l(c,"background","#fff"),o(c,s),c})()})),n})()}},u={render:()=>{const d=[20,40,180,77],a=r=>({index:r,height:d[r%4]}),[n,t]=h(Array.from({length:1e3}).map((r,p)=>a(p))),[s,c]=h(0),[V,$]=h(!1),[k,A]=h(567),[b,E]=h(!1);let T;return(()=>{var r=j(),p=r.firstChild;p.firstChild;var x=p.nextSibling;x.firstChild;var C=x.nextSibling,S=C.firstChild,O=S.nextSibling,D=C.nextSibling,L=D.firstChild,w=L.nextSibling,z=w.firstChild;return l(r,"height","100%"),l(r,"display","flex"),o(p,s,null),o(x,()=>String(V()),null),S.$$input=e=>{A(Number(e.target.value))},O.$$click=()=>{T?.scrollToIndex(k())},L.$$click=()=>{t(e=>{const i=Array.from({length:100}).map((H,P)=>a(P+e.length));return b()?[...i,...e]:[...e,...i]})},z.addEventListener("change",()=>{E(e=>!e)}),o(r,_(v,{ref:e=>{T=e},get data(){return n()},get shift(){return b()},style:{height:"100vh"},onScroll:e=>{c(e),$(!0)},onScrollEnd:()=>{$(!1)},children:e=>(()=>{var i=I();return l(i,"background","#fff"),o(i,()=>e.index),y(H=>l(i,"height",e.height+"px")),i})()}),null),y(()=>S.value=k()),y(()=>z.checked=b()),r})()}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};N(["input","click"]);const Q=["Default","Horizontal","Controlls"];export{u as Controlls,g as Default,f as Horizontal,Q as __namedExportsOrder,K as default};
