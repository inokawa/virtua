import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,D as n,S as r,_ as i,b as a,g as o,h as s,k as c,m as l,p as u,x as d,y as f}from"./iframe-ddyHgCZI.js";import{n as p,t as m}from"./Virtualizer-CPiBXa_Z.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{u(),p(),c(),h=f(`<div style=width:100%;height:100vh;overflow-y:auto;overflow-anchor:none><div style=background-color:burlywood;height:400px>header</div><div style=background-color:steelblue;height:600px>footer`),g=f(`<div style="background:white;border-bottom:solid 1px #ccc">`),_=f(`<div style=width:100%;height:100vh;overflow-y:auto;overflow-anchor:none><div style=background-color:burlywood;padding:40px><div style=background-color:steelblue;padding:60px>`),v=f(`<div style=height:500px;overflow:auto><table><thead><tr style=height:40px>`),y=f(`<th>Header`),b=f(`<td>, `),x=f(`<div style=max-height:400px;overflow:auto><div style=display:grid;position:sticky;top:0;background-color:white;z-index:1;width:fit-content>`),S=f(`<div style=padding:10px>Header`),C=f(`<div>`),w=f(`<div style=padding:10px>, `),T={component:m},E=e=>Array.from({length:e}).map((e,t)=>t),D=[100,200,300,100,200,300,100,300,400,200],O=[20,40,80,77],k={render:()=>{let e=Array.from({length:1e3}).map((e,t)=>O[t%4]);return(()=>{var t=h(),n=t.firstChild.nextSibling;return l(t,r(m,{data:e,startMargin:400,children:(e,t)=>(()=>{var n=g();return o(n,`height`,e+`px`),l(n,t),n})()}),n),t})()}},A={render:()=>{let e=Array.from({length:1e3}).map((e,t)=>O[t%4]),t;return(()=>{var n=_(),i=n.firstChild.firstChild,s=t;return typeof s==`function`?a(s,n):t=n,l(i,r(m,{data:e,scrollRef:t,startMargin:100,children:(e,t)=>(()=>{var n=g();return o(n,`height`,e+`px`),l(n,t),n})()})),n})()}},j={render:()=>{let e;return(()=>{var t=v(),n=t.firstChild,i=n.firstChild.firstChild,s=e;return typeof s==`function`?a(s,t):e=t,l(i,r(d,{each:D,children:(e,t)=>(()=>{var n=y();return n.firstChild,o(n,`width`,`${e}px`),l(n,t,null),n})()})),l(n,r(m,{scrollRef:e,startMargin:40,get data(){return E(1e4)},as:`tbody`,item:`tr`,children:(e,t)=>r(d,{each:D,children:(e,n)=>(()=>{var r=b(),i=r.firstChild;return o(r,`width`,`${e}px`),l(r,t,i),l(r,n,null),r})()})}),null),t})()}},M={render:()=>(()=>{var e=x(),a=e.firstChild;return l(a,()=>D.map((e,t)=>(()=>{var e=S();return e.firstChild,l(e,t,null),n(n=>o(e,`width`,`${D[t]}px`)),e})())),l(e,r(m,{get data(){return E(1e4)},item:e=>(()=>{var n=C();return i(n,t(e,{get style(){return{display:`grid`,"grid-template-columns":`repeat(${D.length}, 1fr)`,"border-bottom":`1px solid black`,...e.style,width:`fit-content`}}}),!1,!0),l(n,()=>e.children),n})(),children:(e,t)=>s(()=>D.map((e,r)=>(()=>{var e=w(),i=e.firstChild;return l(e,t,i),l(e,r,null),n(t=>o(e,`width`,`${D[r]}px`)),e})()))}),null),n(e=>o(a,`grid-template-columns`,`repeat(${D.length}, 1fr)`)),e})()},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N=[`HeaderAndFooter`,`Nested`,`TableElement`,`DivTable`]})))()}P();export{M as DivTable,k as HeaderAndFooter,A as Nested,j as TableElement,N as __namedExportsOrder,T as default};