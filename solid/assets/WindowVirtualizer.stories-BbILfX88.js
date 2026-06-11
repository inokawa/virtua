import{i as e}from"./preload-helper-xPQekRTU.js";import{E as t,O as n,P as r,T as i,j as a}from"./iframe-CX-WY8S1.js";import{n as o,t as s}from"./solid-Doh0iSZT.js";var c,l,u,d,f;e((()=>{i(),s(),c=a(`<div style="padding:200px 100px"><div style="border:solid 1px gray">`),l=a(`<div style="border-bottom:solid 1px #ccc;background:#fff">`),u={component:o},d={render:()=>{let e=[20,40,80,77],i=Array.from({length:1e3}).map((t,n)=>e[n%4]);return(()=>{var e=c(),a=e.firstChild;return t(a,r(o,{data:i,children:(e,r)=>(()=>{var i=l();return n(i,`height`,e+`px`),t(i,r),i})()})),e})()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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