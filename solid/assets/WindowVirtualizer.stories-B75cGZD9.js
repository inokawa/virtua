import{n as e}from"./chunk-BneVvdWh.js";import{B as t,G as n,H as r,J as i,z as a}from"./iframe-BxFNipAv.js";import{n as o,t as s}from"./solid-DILi_wF2.js";var c,l,u,d,f;e((()=>{a(),s(),c=n(`<div style="padding:200px 100px"><div style="border:solid 1px gray">`),l=n(`<div style="border-bottom:solid 1px #ccc;background:#fff">`),u={component:o},d={render:()=>{let e=[20,40,80,77],n=Array.from({length:1e3}).map((t,n)=>e[n%4]);return(()=>{var e=c(),a=e.firstChild;return t(a,i(o,{data:n,children:(e,n)=>(()=>{var i=l();return r(i,`height`,e+`px`),t(i,n),i})()})),e})()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sizes = [20, 40, 80, 77];
    const data = Array.from({
      length: 1000
    }).map((_, i) => sizes[i % 4]);
    return <div style={{
      padding: "200px 100px"
    }}>
        <div style={{
        border: "solid 1px gray"
      }}>
          <WindowVirtualizer data={data}>
            {(d, i) => <div style={{
            height: d + "px",
            "border-bottom": "solid 1px #ccc",
            background: "#fff"
          }}>
                {i()}
              </div>}
          </WindowVirtualizer>
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`]}))();export{d as Default,f as __namedExportsOrder,u as default};