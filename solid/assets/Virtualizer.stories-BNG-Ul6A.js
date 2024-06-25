import{i as l,d as u,e as _,t as o,u as D,F as f,s as S,m as L,h as O}from"./web-CyEQ2uJi.js";import{V as g}from"./Virtualizer-DuPdYvQe.js";import"./utils-DsPLEayC.js";var I=o("<div style=height:500px;overflow:auto;><table><thead><tr>"),N=o("<th>Header"),R=o("<td>, "),U=o("<div style=max-height:400px;overflow:auto;><div>"),W=o("<div>Header"),z=o("<div>"),V=o("<div>, ");const E={component:g},b=d=>Array.from({length:d}).map((e,t)=>t),n=[100,200,300,100,200,300,100,300,400,200],y={render:()=>{let e;return(()=>{var t=I(),r=t.firstChild,s=r.firstChild,p=s.firstChild,i=e;return typeof i=="function"?D(i,t):e=t,p.style.setProperty("height","40px"),l(p,u(f,{each:n,children:(c,v)=>(()=>{var a=N();return a.firstChild,`${c}px`!=null?a.style.setProperty("width",`${c}px`):a.style.removeProperty("width"),l(a,v,null),a})()})),l(r,u(g,{scrollRef:e,startMargin:40,get data(){return b(1e4)},as:"tbody",item:"tr",overscan:5,children:(c,v)=>u(f,{each:n,children:(a,T)=>(()=>{var h=R(),M=h.firstChild;return`${a}px`!=null?h.style.setProperty("width",`${a}px`):h.style.removeProperty("width"),l(h,v,M),l(h,T,null),h})()})}),null),t})()}},m={render:()=>(()=>{var d=U(),e=d.firstChild;return e.style.setProperty("display","grid"),e.style.setProperty("position","sticky"),e.style.setProperty("top","0"),e.style.setProperty("background-color","white"),e.style.setProperty("z-index","1"),e.style.setProperty("width","fit-content"),l(e,()=>n.map((t,r)=>(()=>{var s=W();return s.firstChild,s.style.setProperty("padding","10px"),l(s,r,null),_(()=>`${n[r]}px`!=null?s.style.setProperty("width",`${n[r]}px`):s.style.removeProperty("width")),s})())),l(d,u(g,{get data(){return b(1e4)},item:t=>(()=>{var r=z();return S(r,L(t,{get style(){return{display:"grid","grid-template-columns":`repeat(${n.length}, 1fr)`,"border-bottom":"1px solid black",...t.style,width:"fit-content"}}}),!1,!0),l(r,()=>t.children),r})(),overscan:5,children:(t,r)=>O(()=>n.map((s,p)=>(()=>{var i=V(),c=i.firstChild;return i.style.setProperty("padding","10px"),l(i,r,c),l(i,p,null),_(()=>`${n[p]}px`!=null?i.style.setProperty("width",`${n[p]}px`):i.style.removeProperty("width")),i})()))}),null),_(()=>`repeat(${n.length}, 1fr)`!=null?e.style.setProperty("grid-template-columns",`repeat(${n.length}, 1fr)`):e.style.removeProperty("grid-template-columns")),d})()};var $,x,w;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
          <Virtualizer scrollRef={scrollRef} startMargin={headerHeight} data={createRows(10000)} as="tbody" item="tr" overscan={5}>
            {(_, i) => <For each={COLUMN_WIDTHS}>
                {(width, j) => <td style={{
              width: \`\${width}px\`
            }}>
                    {i}, {j()}
                  </td>}
              </For>}
          </Virtualizer>
        </table>
      </div>;
  }
}`,...(w=(x=y.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var P,H,C;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
      }} overscan={5}>
          {(_, i) => <>
              {COLUMN_WIDTHS.map((_, j) => <div style={{
            width: \`\${COLUMN_WIDTHS[j]}px\`,
            padding: "10px"
          }}>
                  {i}, {j}
                </div>)}
            </>}
        </Virtualizer>
      </div>;
  }
}`,...(C=(H=m.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};const A=["TableElement","DivTable"];export{m as DivTable,y as TableElement,A as __namedExportsOrder,E as default};
