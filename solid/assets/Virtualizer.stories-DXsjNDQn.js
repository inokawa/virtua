import{n as e}from"./chunk-BneVvdWh.js";import{C as t,c as n,d as r,g as i,h as a,l as o,m as s,p as c,s as l,u,w as d,x as f}from"./iframe-B6rVEr-z.js";import{i as p,t as m}from"./solid-CwXgYCYi.js";var h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{l(),m(),t(),h=c(`<div style=height:500px;overflow:auto><table><thead><tr style=height:40px>`),g=c(`<th>Header`),_=c(`<td>, `),v=c(`<div style=max-height:400px;overflow:auto><div style=display:grid;position:sticky;top:0;background-color:white;z-index:1;width:fit-content>`),y=c(`<div style=padding:10px>Header`),b=c(`<div>`),x=c(`<div style=padding:10px>, `),S={component:p},C=e=>Array.from({length:e}).map((e,t)=>t),w=[100,200,300,100,200,300,100,300,400,200],T={render:()=>{let e;return(()=>{var t=h(),r=t.firstChild,o=r.firstChild.firstChild,c=e;return typeof c==`function`?s(c,t):e=t,n(o,i(a,{each:w,children:(e,t)=>(()=>{var r=g();return r.firstChild,u(r,`width`,`${e}px`),n(r,t,null),r})()})),n(r,i(p,{scrollRef:e,startMargin:40,get data(){return C(1e4)},as:`tbody`,item:`tr`,children:(e,t)=>i(a,{each:w,children:(e,r)=>(()=>{var i=_(),a=i.firstChild;return u(i,`width`,`${e}px`),n(i,t,a),n(i,r,null),i})()})}),null),t})()}},E={render:()=>(()=>{var e=v(),t=e.firstChild;return n(t,()=>w.map((e,t)=>(()=>{var e=y();return e.firstChild,n(e,t,null),f(n=>u(e,`width`,`${w[t]}px`)),e})())),n(e,i(p,{get data(){return C(1e4)},item:e=>(()=>{var t=b();return r(t,d(e,{get style(){return{display:`grid`,"grid-template-columns":`repeat(${w.length}, 1fr)`,"border-bottom":`1px solid black`,...e.style,width:`fit-content`}}}),!1,!0),n(t,()=>e.children),t})(),children:(e,t)=>o(()=>w.map((e,r)=>(()=>{var e=x(),i=e.firstChild;return n(e,t,i),n(e,r,null),f(t=>u(e,`width`,`${w[r]}px`)),e})()))}),null),f(e=>u(t,`grid-template-columns`,`repeat(${w.length}, 1fr)`)),e})()},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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