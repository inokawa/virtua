import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,b as n,c as r,d as i,i as a,m as o,r as s,x as c,y as l}from"./iframe-uYKieAhL.js";import{n as u,t as d}from"./VList-D8vEdW9_.js";var f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{a(),u(),c(),f=i(`<div style="border-bottom:solid 1px #ccc;background:#fff">`),p=i(`<div style=padding:10px>`),m=i(`<div style="border-right:solid 1px #ccc;background:#fff">`),h=i(`<div style=height:100%;display:flex;flex-direction:column><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append</button><label><input type=checkbox>prepend</label><button>pop`),g={component:d},_={render:()=>{let e=[20,40,80,77],n=Array.from({length:1e3}).map((t,n)=>e[n%4]);return o(d,{data:n,style:{height:`100vh`},children:(e,n)=>(()=>{var i=f();return r(i,`height`,e+`px`),t(i,n),i})()})}},v={render:()=>{let e=[40,180,77],n=Array.from({length:1e3}).map((t,n)=>e[n%3]);return(()=>{var e=p();return t(e,o(d,{data:n,style:{width:`100%`,height:`200px`},horizontal:!0,children:(e,n)=>(()=>{var i=m();return r(i,`width`,e+`px`),t(i,n),i})()})),e})()}},y={render:()=>{let e=[20,40,180,77],i=t=>({index:t,height:e[t%4]}),[a,s]=n(Array.from({length:1e3}).map((e,t)=>i(t))),[c,u]=n(0),[p,m]=n(!1),[g,_]=n(567),[v,y]=n(!1),b;return(()=>{var e=h(),n=e.firstChild;n.firstChild;var x=n.nextSibling;x.firstChild;var S=x.nextSibling,C=S.firstChild,w=C.nextSibling,T=S.nextSibling.firstChild,E=T.nextSibling,D=E.firstChild,O=E.nextSibling;return t(n,c,null),t(x,()=>String(p()),null),C.$$input=e=>{_(Number(e.target.value))},w.$$click=()=>{b?.scrollToIndex(g())},T.$$click=()=>{s(e=>{let t=Array.from({length:100}).map((t,n)=>i(n+e.length));return v()?[...t,...e]:[...e,...t]})},D.addEventListener(`change`,()=>{y(e=>!e)}),O.$$click=()=>{s(e=>{let t=[...e];return t.pop(),t})},t(e,o(d,{ref(e){var t=b;typeof t==`function`?t(e):b=e},get data(){return a()},get shift(){return v()},style:{height:`100vh`},onScroll:e=>{u(e),m(!0)},onScrollEnd:()=>{m(!1)},children:e=>(()=>{var n=f();return t(n,()=>e.index),l(t=>r(n,`height`,e.height+`px`)),n})()}),null),l(()=>C.value=g()),l(()=>D.checked=v()),e})()}},s([`input`,`click`]),b=[`Default`,`Horizontal`,`Controlls`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{code:`const Default = () => {
  const sizes = [20, 40, 80, 77];
  const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]);

  return (
    <VList data={data} style={{ height: "100vh" }}>
      {(d, i) => (
        <div
          style={{
            height: d + "px",
            "border-bottom": "solid 1px #ccc",
            background: "#fff",
          }}
        >
          {i()}
        </div>
      )}
    </VList>
  );
};
`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{code:`const Horizontal = () => {
  const sizes = [40, 180, 77];
  const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 3]);

  return (
    <div style={{ padding: "10px" }}>
      <VList data={data} style={{ width: "100%", height: "200px" }} horizontal>
        {(d, i) => (
          <div
            style={{
              width: d + "px",
              "border-right": "solid 1px #ccc",
              background: "#fff",
            }}
          >
            {i()}
          </div>
        )}
      </VList>
    </div>
  );
};
`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{code:`const Controlls = () => {
  const heights = [20, 40, 180, 77];
  const createItem = (i: number) => ({
    index: i,
    height: heights[i % 4],
  });

  const [data, setData] = createSignal(
    Array.from({ length: 1000 }).map((_, i) => createItem(i)),
  );

  const [scrollOffset, setScrollOffset] = createSignal(0);
  const [scrolling, setScrolling] = createSignal(false);
  const [scrollTarget, setScrollTarget] = createSignal(567);
  const [prepend, setPrepend] = createSignal(false);

  let handle: VListHandle | undefined;

  return (
    <div
      style={{ height: "100%", display: "flex", "flex-direction": "column" }}
    >
      <div>offset: {scrollOffset()}</div>
      <div>scrolling: {String(scrolling())}</div>
      <div>
        <input
          type="number"
          value={scrollTarget()}
          onInput={(e) => {
            setScrollTarget(Number((e.target as HTMLInputElement).value));
          }}
        />
        <button
          onClick={() => {
            handle?.scrollToIndex(scrollTarget());
          }}
        >
          scrollToIndex
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setData((prev) => {
              const items = Array.from({ length: 100 }).map((_, i) =>
                createItem(i + prev.length),
              );
              return prepend() ? [...items, ...prev] : [...prev, ...items];
            });
          }}
        >
          append
        </button>
        <label>
          <input
            type="checkbox"
            checked={prepend()}
            onchange={() => {
              setPrepend((prev) => !prev);
            }}
          />
          prepend
        </label>
        <button
          onclick={() => {
            setData((prev) => {
              const items = [...prev];
              items.pop();
              return items;
            });
          }}
        >
          pop
        </button>
      </div>
      <VList
        ref={handle}
        data={data()}
        shift={prepend()}
        style={{ height: "100vh" }}
        onScroll={(offset) => {
          setScrollOffset(offset);
          setScrolling(true);
        }}
        onScrollEnd={() => {
          setScrolling(false);
        }}
      >
        {(d) => (
          <div
            style={{
              height: d.height + "px",
              "border-bottom": "solid 1px #ccc",
              background: "#fff",
            }}
          >
            {d.index}
          </div>
        )}
      </VList>
    </div>
  );
};
`,...y.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
        <VList ref={handle} data={data()} shift={prepend()} style={{
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
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as Controlls,_ as Default,v as Horizontal,b as __namedExportsOrder,g as default};