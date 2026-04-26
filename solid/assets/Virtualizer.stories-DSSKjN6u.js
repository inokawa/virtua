import{n as e}from"./chunk-BneVvdWh.js";import{$ as t,B as n,G as r,H as i,J as a,K as o,U as s,V as c,nt as l,q as u,tt as d,z as f}from"./iframe-BxFNipAv.js";import{i as p,t as m}from"./solid-DILi_wF2.js";var h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{f(),m(),d(),h=r(`<div style=height:500px;overflow:auto><table><thead><tr style=height:40px>`),g=r(`<th>Header`),_=r(`<td>, `),v=r(`<div style=max-height:400px;overflow:auto><div style=display:grid;position:sticky;top:0;background-color:white;z-index:1;width:fit-content>`),y=r(`<div style=padding:10px>Header`),b=r(`<div>`),x=r(`<div style=padding:10px>, `),S={component:p},C=e=>Array.from({length:e}).map((e,t)=>t),w=[100,200,300,100,200,300,100,300,400,200],T={render:()=>{let e;return(()=>{var t=h(),r=t.firstChild,s=r.firstChild.firstChild,c=e;return typeof c==`function`?o(c,t):e=t,n(s,a(u,{each:w,children:(e,t)=>(()=>{var r=g();return r.firstChild,i(r,`width`,`${e}px`),n(r,t,null),r})()})),n(r,a(p,{scrollRef:e,startMargin:40,get data(){return C(1e4)},as:`tbody`,item:`tr`,children:(e,t)=>a(u,{each:w,children:(e,r)=>(()=>{var a=_(),o=a.firstChild;return i(a,`width`,`${e}px`),n(a,t,o),n(a,r,null),a})()})}),null),t})()}},E={render:()=>(()=>{var e=v(),r=e.firstChild;return n(r,()=>w.map((e,r)=>(()=>{var e=y();return e.firstChild,n(e,r,null),t(t=>i(e,`width`,`${w[r]}px`)),e})())),n(e,a(p,{get data(){return C(1e4)},item:e=>(()=>{var t=b();return s(t,l(e,{get style(){return{display:`grid`,"grid-template-columns":`repeat(${w.length}, 1fr)`,"border-bottom":`1px solid black`,...e.style,width:`fit-content`}}}),!1,!0),n(t,()=>e.children),t})(),children:(e,r)=>c(()=>w.map((e,a)=>(()=>{var e=x(),o=e.firstChild;return n(e,r,o),n(e,a,null),t(t=>i(e,`width`,`${w[a]}px`)),e})()))}),null),t(e=>i(r,`grid-template-columns`,`repeat(${w.length}, 1fr)`)),e})()},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`TableElement`,`DivTable`]}))();export{E as DivTable,T as TableElement,D as __namedExportsOrder,S as default};