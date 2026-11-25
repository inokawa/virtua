import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{C as t,a as n,f as r,g as i,h as a,n as o,o as s,r as c,s as l,w as u,y as d}from"./iframe-BeAdlezq.js";import{n as f,t as p}from"./VList-2pZrQVB1.js";var m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{s(),f(),u(),m=a(`<div style="border-bottom:solid 1px #ccc;background:#fff">`),h=a(`<div style=padding:10px>`),g=a(`<div style="border-right:solid 1px #ccc;background:#fff">`),_=a(`<div style=height:100%;display:flex;flex-direction:column><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append</button><label><input type=checkbox>prepend</label><button>pop`),v={component:p},y={render:()=>{let e=[20,40,80,77],t=Array.from({length:1e3}).map((t,n)=>e[n%4]);return d(p,{data:t,style:{height:`100vh`},children:(e,t)=>(()=>{var n=m();return r(n,`height`,e+`px`),l(n,t),n})()})}},b={render:()=>{let e=[40,180,77],t=Array.from({length:1e3}).map((t,n)=>e[n%3]);var n=h();return l(n,d(p,{data:t,style:{width:`100%`,height:`200px`},horizontal:!0,children:(e,t)=>(()=>{var n=g();return r(n,`width`,e+`px`),l(n,t),n})()})),n}},x={render:()=>{let e=[20,40,180,77],a=t=>({index:t,height:e[t%4]}),[s,c]=t(Array.from({length:1e3}).map((e,t)=>a(t))),[u,f]=t(0),[h,g]=t(!1),[v,y]=t(567),[b,x]=t(!1),S;var C=_(),w=C.firstChild,T=w.nextSibling,E=T.nextSibling,D=E.firstChild,O=D.nextSibling,k=E.nextSibling.firstChild,A=k.nextSibling,j=A.firstChild,M=A.nextSibling;return l(w,u,null),l(T,()=>String(h()),null),D._$$input=e=>{y(Number(e.target.value))},O._$$click=()=>{S?.scrollToIndex(v())},k._$$click=()=>{c(e=>{let t=Array.from({length:100}).map((t,n)=>a(n+e.length));return b()?[...t,...e]:[...e,...t]})},j.addEventListener(`change`,()=>{x(e=>!e)}),M._$$click=()=>{c(e=>{let t=[...e];return t.pop(),t})},l(C,d(p,{ref(e){var t=S;typeof t==`function`||Array.isArray(t)?o(t,e):S=e},get data(){return s()},get shift(){return b()},style:{height:`100vh`},onScroll:e=>{f(e),g(!0)},onScrollEnd:()=>{g(!1)},children:e=>(()=>{var t=m();return l(t,()=>e.index),n(()=>e.height+`px`,e=>{r(t,`height`,e)}),t})()}),null),n(()=>({e:v(),t:b(),a:i()}),({e,t,a:n},r)=>{e===r?.e&&n||(D.value=e??``),t===r?.t&&n||(j.checked=t)}),C}},c([`input`,`click`]),S=[`Default`,`Horizontal`,`Controlls`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{code:`const Default = () => {
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
`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{code:`const Horizontal = () => {
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
`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{code:`const Controlls = () => {
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
            onChange={() => {
              setPrepend((prev) => !prev);
            }}
          />
          prepend
        </label>
        <button
          onClick={() => {
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
`,...x.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
            <input type="checkbox" checked={prepend()} onChange={() => {
            setPrepend(prev => !prev);
          }} />
            prepend
          </label>
          <button onClick={() => {
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
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as Controlls,y as Default,b as Horizontal,S as __namedExportsOrder,v as default};