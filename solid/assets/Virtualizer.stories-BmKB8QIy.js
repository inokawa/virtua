import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{T as t,a as n,c as r,d as i,f as a,i as o,m as s,x as c}from"./iframe-BewOe1b6.js";import{n as l,t as u}from"./Virtualizer-BRwp-MaQ.js";var d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{o(),c(),l(),d=i(`<div style=width:100%;height:100vh;overflow-y:auto;overflow-anchor:none><div style=background-color:burlywood;height:400px>header</div><div style=background-color:steelblue;height:600px>footer`),f=i(`<div style="background:white;border-bottom:solid 1px #ccc">`),p=i(`<div style=width:100%;height:100vh;overflow-y:auto;overflow-anchor:none><div style=background-color:burlywood;padding:40px><div style=background-color:steelblue;padding:60px>`),m=i(`<div style=height:100vh;overflow-y:auto;overflow-anchor:none;display:flex;flex-direction:column><div style=flex-grow:1>`),h={component:u},g=[20,40,80,77],_={render:()=>{let e=Array.from({length:1e3}).map((e,t)=>g[t%4]);return(()=>{var t=d(),i=t.firstChild.nextSibling;return n(t,s(u,{data:e,startMargin:400,children:(e,t)=>(()=>{var i=f();return r(i,`height`,e+`px`),n(i,t),i})()}),i),t})()}},v={render:()=>{let e=Array.from({length:1e3}).map((e,t)=>g[t%4]),t;return(()=>{var i=p(),o=i.firstChild.firstChild,c=t;return typeof c==`function`?a(c,i):t=i,n(o,s(u,{data:e,scrollRef:t,startMargin:100,children:(e,t)=>(()=>{var i=f();return r(i,`height`,e+`px`),n(i,t),i})()})),i})()}},y={render:()=>{let e=Array.from({length:1e3}).map((e,t)=>g[t%4]),i;return t(()=>{i?.scrollToIndex(999)}),(()=>{var t=m();return t.firstChild,n(t,s(u,{ref(e){var t=i;typeof t==`function`?t(e):i=e},data:e,children:(e,t)=>(()=>{var i=f();return r(i,`height`,e+`px`),n(i,t),i})()}),null),t})()}},b=[`HeaderAndFooter`,`Nested`,`Reverse`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{code:`const HeaderAndFooter = () => {
  const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]!);
  const headerHeight = 400;
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        "overflow-y": "auto",
        // opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer
        "overflow-anchor": "none",
      }}
    >
      <div
        style={{
          "background-color": "burlywood",
          height: headerHeight + "px",
        }}
      >
        header
      </div>
      <Virtualizer data={data} startMargin={headerHeight}>
        {(item, index) => (
          <div
            style={{
              height: item + "px",
              background: "white",
              "border-bottom": "solid 1px #ccc",
            }}
          >
            {index()}
          </div>
        )}
      </Virtualizer>
      <div style={{ "background-color": "steelblue", height: "600px" }}>
        footer
      </div>
    </div>
  );
};
`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{code:`const Nested = () => {
  const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]!);
  const outerPadding = 40;
  const innerPadding = 60;
  let scrollRef: HTMLDivElement | undefined;
  return (
    <div
      ref={scrollRef}
      style={{
        width: "100%",
        height: "100vh",
        "overflow-y": "auto",
        // opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer
        "overflow-anchor": "none",
      }}
    >
      <div
        style={{
          "background-color": "burlywood",
          padding: outerPadding + "px",
        }}
      >
        <div
          style={{
            "background-color": "steelblue",
            padding: innerPadding + "px",
          }}
        >
          <Virtualizer
            data={data}
            scrollRef={scrollRef}
            startMargin={outerPadding + innerPadding}
          >
            {(item, index) => (
              <div
                style={{
                  height: item + "px",
                  background: "white",
                  "border-bottom": "solid 1px #ccc",
                }}
              >
                {index()}
              </div>
            )}
          </Virtualizer>
        </div>
      </div>
    </div>
  );
};
`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{code:`const Reverse = () => {
  const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]!);
  let ref: VirtualizerHandle | undefined;
  onMount(() => {
    ref?.scrollToIndex(999);
  });
  return (
    <div
      style={{
        height: "100vh",
        "overflow-y": "auto",
        // opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer
        "overflow-anchor": "none",
        // flex style for spacer
        display: "flex",
        "flex-direction": "column",
      }}
    >
      <div
        style={{
          // spacer to align virtualizer to the bottom when all items are visible in the viewport
          "flex-grow": 1,
        }}
      />
      <Virtualizer ref={ref} data={data}>
        {(item, index) => (
          <div
            style={{
              height: item + "px",
              background: "white",
              "border-bottom": "solid 1px #ccc",
            }}
          >
            {index()}
          </div>
        )}
      </Virtualizer>
    </div>
  );
};
`,...y.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = Array.from({
      length: 1000
    }).map((_, i) => sizes[i % 4]!);
    const headerHeight = 400;
    return <div style={{
      width: "100%",
      height: "100vh",
      "overflow-y": "auto",
      // opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer
      "overflow-anchor": "none"
    }}>
        <div style={{
        "background-color": "burlywood",
        height: headerHeight + "px"
      }}>
          header
        </div>
        <Virtualizer data={data} startMargin={headerHeight}>
          {(item, index) => <div style={{
          height: item + "px",
          background: "white",
          "border-bottom": "solid 1px #ccc"
        }}>
              {index()}
            </div>}
        </Virtualizer>
        <div style={{
        "background-color": "steelblue",
        height: "600px"
      }}>
          footer
        </div>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = Array.from({
      length: 1000
    }).map((_, i) => sizes[i % 4]!);
    const outerPadding = 40;
    const innerPadding = 60;
    let scrollRef: HTMLDivElement | undefined;
    return <div ref={scrollRef} style={{
      width: "100%",
      height: "100vh",
      "overflow-y": "auto",
      // opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer
      "overflow-anchor": "none"
    }}>
        <div style={{
        "background-color": "burlywood",
        padding: outerPadding + "px"
      }}>
          <div style={{
          "background-color": "steelblue",
          padding: innerPadding + "px"
        }}>
            <Virtualizer data={data} scrollRef={scrollRef} startMargin={outerPadding + innerPadding}>
              {(item, index) => <div style={{
              height: item + "px",
              background: "white",
              "border-bottom": "solid 1px #ccc"
            }}>
                  {index()}
                </div>}
            </Virtualizer>
          </div>
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = Array.from({
      length: 1000
    }).map((_, i) => sizes[i % 4]!);
    let ref: VirtualizerHandle | undefined;
    onMount(() => {
      ref?.scrollToIndex(999);
    });
    return <div style={{
      height: "100vh",
      "overflow-y": "auto",
      // opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer
      "overflow-anchor": "none",
      // flex style for spacer
      display: "flex",
      "flex-direction": "column"
    }}>
        <div style={{
        // spacer to align virtualizer to the bottom when all items are visible in the viewport
        "flex-grow": 1
      }} />
        <Virtualizer ref={ref} data={data}>
          {(item, index) => <div style={{
          height: item + "px",
          background: "white",
          "border-bottom": "solid 1px #ccc"
        }}>
              {index()}
            </div>}
        </Virtualizer>
      </div>;
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{_ as HeaderAndFooter,v as Nested,y as Reverse,b as __namedExportsOrder,h as default};