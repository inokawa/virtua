import{i as e}from"./preload-helper-xPQekRTU.js";import{A as t,F as n,G as r,I as i,K as a,L as o,M as s,N as c,R as l,U as u,j as d,k as f}from"./iframe-DzxPRBEQ.js";import{o as p,t as m}from"./solid-dDJE5kG2.js";var h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{f(),m(),r(),h=n(`<div style=height:500px;overflow:auto><table><thead><tr style=height:40px>`),g=n(`<th>Header`),_=n(`<td>, `),v=n(`<div style=max-height:400px;overflow:auto><div style=display:grid;position:sticky;top:0;background-color:white;z-index:1;width:fit-content>`),y=n(`<div style=padding:10px>Header`),b=n(`<div>`),x=n(`<div style=padding:10px>, `),S={component:p},C=e=>Array.from({length:e}).map((e,t)=>t),w=[100,200,300,100,200,300,100,300,400,200],T={render:()=>{let e;return(()=>{var n=h(),r=n.firstChild,a=r.firstChild.firstChild,c=e;return typeof c==`function`?i(c,n):e=n,t(a,l(o,{each:w,children:(e,n)=>(()=>{var r=g();return r.firstChild,s(r,`width`,`${e}px`),t(r,n,null),r})()})),t(r,l(p,{scrollRef:e,startMargin:40,get data(){return C(1e4)},as:`tbody`,item:`tr`,children:(e,n)=>l(o,{each:w,children:(e,r)=>(()=>{var i=_(),a=i.firstChild;return s(i,`width`,`${e}px`),t(i,n,a),t(i,r,null),i})()})}),null),n})()}},E={render:()=>(()=>{var e=v(),n=e.firstChild;return t(n,()=>w.map((e,n)=>(()=>{var e=y();return e.firstChild,t(e,n,null),u(t=>s(e,`width`,`${w[n]}px`)),e})())),t(e,l(p,{get data(){return C(1e4)},item:e=>(()=>{var n=b();return c(n,a(e,{get style(){return{display:`grid`,"grid-template-columns":`repeat(${w.length}, 1fr)`,"border-bottom":`1px solid black`,...e.style,width:`fit-content`}}}),!1,!0),t(n,()=>e.children),n})(),children:(e,n)=>d(()=>w.map((e,r)=>(()=>{var e=x(),i=e.firstChild;return t(e,n,i),t(e,r,null),u(t=>s(e,`width`,`${w[r]}px`)),e})()))}),null),u(e=>s(n,`grid-template-columns`,`repeat(${w.length}, 1fr)`)),e})()},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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