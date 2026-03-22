import{n as e}from"./chunk-BneVvdWh.js";import{c as t,g as n,p as r,s as i,u as a}from"./iframe-B6rVEr-z.js";import{n as o,t as s}from"./solid-CwXgYCYi.js";var c,l,u,d,f;e((()=>{i(),s(),c=r(`<div style="padding:200px 100px"><div style="border:solid 1px gray">`),l=r(`<div style="border-bottom:solid 1px #ccc;background:#fff">`),u={component:o},d={render:()=>{let e=[20,40,80,77],r=Array.from({length:1e3}).map((t,n)=>e[n%4]);return(()=>{var e=c(),i=e.firstChild;return t(i,n(o,{data:r,children:(e,n)=>(()=>{var r=l();return a(r,`height`,e+`px`),t(r,n),r})()})),e})()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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