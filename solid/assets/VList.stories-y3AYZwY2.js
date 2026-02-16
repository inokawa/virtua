import{b as y,t as m,s,i as o,c as h,d as _,f as M}from"./iframe-bfv1pM6t.js";import{V as v}from"./VList-D6Xsv4Mm.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-BdfihRmZ.js";import"./utils-C8E46hyR.js";var V=m('<div style="border-bottom:solid 1px #ccc">'),R=m("<div>"),j=m('<div style="border-right:solid 1px #ccc">'),q=m("<div style=flex-direction:column><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append</button><label><input type=checkbox>prepend</label><button>pop");const Q={component:v},g={render:()=>{const d=[20,40,80,77],a=Array.from({length:1e3}).map((r,n)=>d[n%4]);return y(v,{data:a,style:{height:"100vh"},children:(r,n)=>(()=>{var i=V();return s(i,"height",r+"px"),s(i,"background","#fff"),o(i,n),i})()})}},f={render:()=>{const d=[40,180,77],a=Array.from({length:1e3}).map((r,n)=>d[n%3]);return(()=>{var r=R();return s(r,"padding","10px"),o(r,y(v,{data:a,style:{width:"100%",height:"200px"},horizontal:!0,children:(n,i)=>(()=>{var c=j();return s(c,"width",n+"px"),s(c,"background","#fff"),o(c,i),c})()})),r})()}},u={render:()=>{const d=[20,40,180,77],a=l=>({index:l,height:d[l%4]}),[r,n]=h(Array.from({length:1e3}).map((l,p)=>a(p))),[i,c]=h(0),[A,$]=h(!1),[k,E]=h(567),[b,O]=h(!1);let T;return(()=>{var l=q(),p=l.firstChild;p.firstChild;var x=p.nextSibling;x.firstChild;var C=x.nextSibling,S=C.firstChild,D=S.nextSibling,w=C.nextSibling,L=w.firstChild,z=L.nextSibling,I=z.firstChild,H=z.nextSibling;return s(l,"height","100%"),s(l,"display","flex"),o(p,i,null),o(x,()=>String(A()),null),S.$$input=e=>{E(Number(e.target.value))},D.$$click=()=>{T?.scrollToIndex(k())},L.$$click=()=>{n(e=>{const t=Array.from({length:100}).map((P,N)=>a(N+e.length));return b()?[...t,...e]:[...e,...t]})},I.addEventListener("change",()=>{O(e=>!e)}),H.$$click=()=>{n(e=>{const t=[...e];return t.pop(),t})},o(l,y(v,{ref:e=>{T=e},get data(){return r()},get shift(){return b()},style:{height:"100vh"},onScroll:e=>{c(e),$(!0)},onScrollEnd:()=>{$(!1)},children:e=>(()=>{var t=V();return s(t,"background","#fff"),o(t,()=>e.index),_(P=>s(t,"height",e.height+"px")),t})()}),null),_(()=>S.value=k()),_(()=>I.checked=b()),l})()}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
          <button onclick={() => {
          setData(prev => {
            const items = [...prev];
            items.pop();
            return items;
          });
        }}>
            pop
          </button>
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
}`,...u.parameters?.docs?.source}}};M(["input","click"]);const U=["Default","Horizontal","Controlls"];export{u as Controlls,g as Default,f as Horizontal,U as __namedExportsOrder,Q as default};
