import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{D as t,O as n,S as r,f as i,g as a,k as o,m as s,p as c,y as l}from"./iframe-C-znp_IU.js";import{n as u,t as d}from"./VList-B_QdPkrt.js";var f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{c(),u(),o(),f=l(`<div style="border-bottom:solid 1px #ccc;background:#fff">`),p=l(`<div style=padding:10px>`),m=l(`<div style="border-right:solid 1px #ccc;background:#fff">`),h=l(`<div style=height:100%;display:flex;flex-direction:column><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append</button><label><input type=checkbox>prepend</label><button>pop`),g={component:d},_={render:()=>{let e=[20,40,80,77],t=Array.from({length:1e3}).map((t,n)=>e[n%4]);return r(d,{data:t,style:{height:`100vh`},children:(e,t)=>(()=>{var n=f();return a(n,`height`,e+`px`),s(n,t),n})()})}},v={render:()=>{let e=[40,180,77],t=Array.from({length:1e3}).map((t,n)=>e[n%3]);return(()=>{var e=p();return s(e,r(d,{data:t,style:{width:`100%`,height:`200px`},horizontal:!0,children:(e,t)=>(()=>{var n=m();return a(n,`width`,e+`px`),s(n,t),n})()})),e})()}},y={render:()=>{let e=[20,40,180,77],i=t=>({index:t,height:e[t%4]}),[o,c]=n(Array.from({length:1e3}).map((e,t)=>i(t))),[l,u]=n(0),[p,m]=n(!1),[g,_]=n(567),[v,y]=n(!1),b;return(()=>{var e=h(),n=e.firstChild;n.firstChild;var x=n.nextSibling;x.firstChild;var S=x.nextSibling,C=S.firstChild,w=C.nextSibling,T=S.nextSibling.firstChild,E=T.nextSibling,D=E.firstChild,O=E.nextSibling;return s(n,l,null),s(x,()=>String(p()),null),C.$$input=e=>{_(Number(e.target.value))},w.$$click=()=>{b?.scrollToIndex(g())},T.$$click=()=>{c(e=>{let t=Array.from({length:100}).map((t,n)=>i(n+e.length));return v()?[...t,...e]:[...e,...t]})},D.addEventListener(`change`,()=>{y(e=>!e)}),O.$$click=()=>{c(e=>{let t=[...e];return t.pop(),t})},s(e,r(d,{ref:e=>{b=e},get data(){return o()},get shift(){return v()},style:{height:`100vh`},onScroll:e=>{u(e),m(!0)},onScrollEnd:()=>{m(!1)},children:e=>(()=>{var n=f();return s(n,()=>e.index),t(t=>a(n,`height`,e.height+`px`)),n})()}),null),t(()=>C.value=g()),t(()=>D.checked=v()),e})()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},i([`input`,`click`]),b=[`Default`,`Horizontal`,`Controlls`]})))()}x();export{y as Controlls,_ as Default,v as Horizontal,b as __namedExportsOrder,g as default};