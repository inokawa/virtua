import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,d as r,f as i,i as a,m as o}from"./iframe-xijWIvb4.js";import{n as s,t as c}from"./Virtualizer-oeCFXw5m.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{a(),s(),l=r(`<div style=width:100%;height:100vh;overflow-y:auto;overflow-anchor:none><div style=background-color:burlywood;height:400px>header</div><div style=background-color:steelblue;height:600px>footer`),u=r(`<div style="background:white;border-bottom:solid 1px #ccc">`),d=r(`<div style=width:100%;height:100vh;overflow-y:auto;overflow-anchor:none><div style=background-color:burlywood;padding:40px><div style=background-color:steelblue;padding:60px>`),f={component:c},p=[20,40,80,77],m={render:()=>{let e=Array.from({length:1e3}).map((e,t)=>p[t%4]);return(()=>{var r=l(),i=r.firstChild.nextSibling;return t(r,o(c,{data:e,startMargin:400,children:(e,r)=>(()=>{var i=u();return n(i,`height`,e+`px`),t(i,r),i})()}),i),r})()}},h={render:()=>{let e=Array.from({length:1e3}).map((e,t)=>p[t%4]),r;return(()=>{var a=d(),s=a.firstChild.firstChild,l=r;return typeof l==`function`?i(l,a):r=a,t(s,o(c,{data:e,scrollRef:r,startMargin:100,children:(e,r)=>(()=>{var i=u();return n(i,`height`,e+`px`),t(i,r),i})()})),a})()}},g=[`HeaderAndFooter`,`Nested`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{code:`const HeaderAndFooter = () => {
  const data = Array.from({ length: 1000 }).map((_, i) => sizes[i % 4]!);
  const headerHeight = 400;
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        "overflow-y": "auto",
        // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
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
`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{code:`const Nested = () => {
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
        // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
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
`,...h.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = Array.from({
      length: 1000
    }).map((_, i) => sizes[i % 4]!);
    const headerHeight = 400;
    return <div style={{
      width: "100%",
      height: "100vh",
      "overflow-y": "auto",
      // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
      // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
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
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as HeaderAndFooter,h as Nested,g as __namedExportsOrder,f as default};