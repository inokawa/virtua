import{c as p,i,a as y,b as S,s as _,t as u,d as M}from"./iframe-CGV9lI33.js";import{V as m}from"./VList-BzP-quoT.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-CKDilCHA.js";import"./utils-DI1V5x9b.js";var V=u('<div style="border-bottom:solid 1px #ccc;background:#fff">'),R=u("<div style=padding:10px>"),j=u('<div style="border-right:solid 1px #ccc;background:#fff">'),q=u("<div style=height:100%;display:flex;flex-direction:column><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append</button><label><input type=checkbox>prepend</label><button>pop");const Q={component:m},h={render:()=>{const a=[20,40,80,77],o=Array.from({length:1e3}).map((r,n)=>a[n%4]);return y(m,{data:o,style:{height:"100vh"},children:(r,n)=>(()=>{var l=V();return _(l,"height",r+"px"),i(l,n),l})()})}},g={render:()=>{const a=[40,180,77],o=Array.from({length:1e3}).map((r,n)=>a[n%3]);return(()=>{var r=R();return i(r,y(m,{data:o,style:{width:"100%",height:"200px"},horizontal:!0,children:(n,l)=>(()=>{var c=j();return _(c,"width",n+"px"),i(c,l),c})()})),r})()}},f={render:()=>{const a=[20,40,180,77],o=s=>({index:s,height:a[s%4]}),[r,n]=p(Array.from({length:1e3}).map((s,d)=>o(d))),[l,c]=p(0),[A,$]=p(!1),[k,E]=p(567),[v,O]=p(!1);let T;return(()=>{var s=q(),d=s.firstChild;d.firstChild;var b=d.nextSibling;b.firstChild;var C=b.nextSibling,x=C.firstChild,D=x.nextSibling,w=C.nextSibling,L=w.firstChild,z=L.nextSibling,I=z.firstChild,H=z.nextSibling;return i(d,l,null),i(b,()=>String(A()),null),x.$$input=e=>{E(Number(e.target.value))},D.$$click=()=>{T?.scrollToIndex(k())},L.$$click=()=>{n(e=>{const t=Array.from({length:100}).map((P,N)=>o(N+e.length));return v()?[...t,...e]:[...e,...t]})},I.addEventListener("change",()=>{O(e=>!e)}),H.$$click=()=>{n(e=>{const t=[...e];return t.pop(),t})},i(s,y(m,{ref:e=>{T=e},get data(){return r()},get shift(){return v()},style:{height:"100vh"},onScroll:e=>{c(e),$(!0)},onScrollEnd:()=>{$(!1)},children:e=>(()=>{var t=V();return i(t,()=>e.index),S(P=>_(t,"height",e.height+"px")),t})()}),null),S(()=>x.value=k()),S(()=>I.checked=v()),s})()}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};M(["input","click"]);const U=["Default","Horizontal","Controlls"];export{f as Controlls,h as Default,g as Horizontal,U as __namedExportsOrder,Q as default};
