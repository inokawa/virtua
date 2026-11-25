import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,h as n,k as r,n as i,o as a,s as o,u as s,w as c,y as l}from"./iframe-BeAdlezq.js";import{n as u,t as d}from"./Virtualizer-CqKga7xR.js";var f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{a(),c(),u(),f=n(`<div style=width:100%;height:100vh;overflow-y:auto;overflow-anchor:none><div style=background-color:burlywood;height:400px>header</div><div style=background-color:steelblue;height:600px>footer`),p=n(`<div style="background:white;border-bottom:solid 1px #ccc">`),m=n(`<div style=width:100%;height:100vh;overflow-y:auto;overflow-anchor:none><div style=background-color:burlywood;padding:40px><div style=background-color:steelblue;padding:60px>`),h=n(`<div style=height:100vh;overflow-y:auto;overflow-anchor:none;display:flex;flex-direction:column><div style=flex-grow:1>`),g={component:d},_=[20,40,80,77],v={render:()=>{let e=Array.from({length:1e3}).map((e,t)=>_[t%4]);var n=f(),r=n.firstChild.nextSibling;return o(n,l(d,{data:e,startMargin:400,children:(e,n)=>(()=>{var r=p();return t(r,`height`,e+`px`),o(r,n),r})()}),r),n}},y={render:()=>{let e=Array.from({length:1e3}).map((e,t)=>_[t%4]),n;var r=m(),i=r.firstChild.firstChild,a=n;return typeof a==`function`||Array.isArray(a)?s(()=>a,r):n=r,o(i,l(d,{data:e,scrollRef:n,startMargin:100,children:(e,n)=>(()=>{var r=p();return t(r,`height`,e+`px`),o(r,n),r})()})),r}},b={render:()=>{let e=Array.from({length:1e3}).map((e,t)=>_[t%4]),n;r(()=>{n?.scrollToIndex(999)});var a=h();return o(a,l(d,{ref(e){var t=n;typeof t==`function`||Array.isArray(t)?i(t,e):n=e},data:e,children:(e,n)=>(()=>{var r=p();return t(r,`height`,e+`px`),o(r,n),r})()}),null),a}},x=[`HeaderAndFooter`,`Nested`,`Reverse`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{code:`const HeaderAndFooter = () => {
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
`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{code:`const Nested = () => {
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
`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{code:`const Reverse = () => {
  const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]!);
  let ref: VirtualizerHandle | undefined;
  onSettled(() => {
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
`,...b.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = Array.from({
      length: 1000
    }).map((_, i) => sizes[i % 4]!);
    let ref: VirtualizerHandle | undefined;
    onSettled(() => {
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
}`,...b.parameters?.docs?.source}}}})))()}S();export{v as HeaderAndFooter,y as Nested,b as Reverse,x as __namedExportsOrder,g as default};