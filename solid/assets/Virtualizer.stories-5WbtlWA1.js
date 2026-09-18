import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,_ as n,b as r,m as i,p as a,x as o}from"./iframe-D4FLxWRr.js";import{n as s,t as c}from"./Virtualizer-Dfem6T_o.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{a(),s(),l=r(`<div style=width:100%;height:100vh;overflow-y:auto;overflow-anchor:none><div style=background-color:burlywood;height:400px>header</div><div style=background-color:steelblue;height:600px>footer`),u=r(`<div style="background:white;border-bottom:solid 1px #ccc">`),d=r(`<div style=width:100%;height:100vh;overflow-y:auto;overflow-anchor:none><div style=background-color:burlywood;padding:40px><div style=background-color:steelblue;padding:60px>`),f={component:c},p=[20,40,80,77],m={render:()=>{let e=Array.from({length:1e3}).map((e,t)=>p[t%4]);return(()=>{var r=l(),a=r.firstChild.nextSibling;return i(r,t(c,{data:e,startMargin:400,children:(e,t)=>(()=>{var r=u();return n(r,`height`,e+`px`),i(r,t),r})()}),a),r})()}},h={render:()=>{let e=Array.from({length:1e3}).map((e,t)=>p[t%4]),r;return(()=>{var a=d(),s=a.firstChild.firstChild,l=r;return typeof l==`function`?o(l,a):r=a,i(s,t(c,{data:e,scrollRef:r,startMargin:100,children:(e,t)=>(()=>{var r=u();return n(r,`height`,e+`px`),i(r,t),r})()})),a})()}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`HeaderAndFooter`,`Nested`]})))()}_();export{m as HeaderAndFooter,h as Nested,g as __namedExportsOrder,f as default};