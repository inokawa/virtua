import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,D as n,S as r,_ as i,b as a,g as o,h as s,k as c,m as l,p as u,x as d,y as f}from"./iframe-Bxj2zLSm.js";import{n as p,t as m}from"./Virtualizer-DFQf_5Fm.js";var h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{u(),p(),c(),h=f(`<div style=height:500px;overflow:auto><table><thead><tr style=height:40px>`),g=f(`<th>Header`),_=f(`<td>, `),v=f(`<div style=max-height:400px;overflow:auto><div style=display:grid;position:sticky;top:0;background-color:white;z-index:1;width:fit-content>`),y=f(`<div style=padding:10px>Header`),b=f(`<div>`),x=f(`<div style=padding:10px>, `),S={component:m},C=e=>Array.from({length:e}).map((e,t)=>t),w=[100,200,300,100,200,300,100,300,400,200],T={render:()=>{let e;return(()=>{var t=h(),n=t.firstChild,i=n.firstChild.firstChild,s=e;return typeof s==`function`?a(s,t):e=t,l(i,r(d,{each:w,children:(e,t)=>(()=>{var n=g();return n.firstChild,o(n,`width`,`${e}px`),l(n,t,null),n})()})),l(n,r(m,{scrollRef:e,startMargin:40,get data(){return C(1e4)},as:`tbody`,item:`tr`,children:(e,t)=>r(d,{each:w,children:(e,n)=>(()=>{var r=_(),i=r.firstChild;return o(r,`width`,`${e}px`),l(r,t,i),l(r,n,null),r})()})}),null),t})()}},E={render:()=>(()=>{var e=v(),a=e.firstChild;return l(a,()=>w.map((e,t)=>(()=>{var e=y();return e.firstChild,l(e,t,null),n(n=>o(e,`width`,`${w[t]}px`)),e})())),l(e,r(m,{get data(){return C(1e4)},item:e=>(()=>{var n=b();return i(n,t(e,{get style(){return{display:`grid`,"grid-template-columns":`repeat(${w.length}, 1fr)`,"border-bottom":`1px solid black`,...e.style,width:`fit-content`}}}),!1,!0),l(n,()=>e.children),n})(),children:(e,t)=>s(()=>w.map((e,r)=>(()=>{var e=x(),i=e.firstChild;return l(e,t,i),l(e,r,null),n(t=>o(e,`width`,`${w[r]}px`)),e})()))}),null),n(e=>o(a,`grid-template-columns`,`repeat(${w.length}, 1fr)`)),e})()},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const headerHeight = 40;
    let scrollRef: HTMLDivElement | undefined;
    return <div style="height: 500px;overflow:auto;" ref={scrollRef}>
        <table>
          <thead>
            <tr style={{
            height: headerHeight + "px"
          }}>
              <For each={COLUMN_WIDTHS}>
                {(width, j) => <th style={{
                width: \`\${width}px\`
              }}>Header{j()}</th>}
              </For>
            </tr>
          </thead>
          <Virtualizer scrollRef={scrollRef} startMargin={headerHeight} data={createRows(10000)} as="tbody" item="tr">
            {(_, i) => <For each={COLUMN_WIDTHS}>
                {(width, j) => <td style={{
              width: \`\${width}px\`
            }}>
                    {i()}, {j()}
                  </td>}
              </For>}
          </Virtualizer>
        </table>
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style="max-height: 400px; overflow: auto;">
        <div style={{
        display: "grid",
        position: "sticky",
        top: 0,
        "background-color": "white",
        "z-index": 1,
        width: "fit-content",
        "grid-template-columns": \`repeat(\${COLUMN_WIDTHS.length}, 1fr)\`
      }}>
          {COLUMN_WIDTHS.map((_, j) => <div style={{
          width: \`\${COLUMN_WIDTHS[j]}px\`,
          padding: "10px"
        }}>
              Header{j}
            </div>)}
        </div>
        <Virtualizer data={createRows(10000)} item={props => {
        return <div {...props} style={{
          display: "grid",
          "grid-template-columns": \`repeat(\${COLUMN_WIDTHS.length}, 1fr)\`,
          "border-bottom": "1px solid black",
          ...props.style,
          width: "fit-content"
        }}>
                {props.children}
              </div>;
      }}>
          {(_, i) => <>
              {COLUMN_WIDTHS.map((_, j) => <div style={{
            width: \`\${COLUMN_WIDTHS[j]}px\`,
            padding: "10px"
          }}>
                  {i()}, {j}
                </div>)}
            </>}
        </Virtualizer>
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D=[`TableElement`,`DivTable`]})))()}O();export{E as DivTable,T as TableElement,D as __namedExportsOrder,S as default};