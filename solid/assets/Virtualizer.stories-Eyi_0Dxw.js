import{i as r,a as g,m as b,e as C,f as T,b as $,s as c,F as y,t as d,u as D}from"./iframe-CGV9lI33.js";import{V as v}from"./Virtualizer-CKDilCHA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DI1V5x9b.js";var M=d("<div style=height:500px;overflow:auto><table><thead><tr style=height:40px>"),S=d("<th>Header"),L=d("<td>, "),O=d("<div style=max-height:400px;overflow:auto><div style=display:grid;position:sticky;top:0;background-color:white;z-index:1;width:fit-content>"),I=d("<div style=padding:10px>Header"),N=d("<div>"),R=d("<div style=padding:10px>, ");const V={component:v},x=s=>Array.from({length:s}).map((a,e)=>e),i=[100,200,300,100,200,300,100,300,400,200],_={render:()=>{let a;return(()=>{var e=M(),t=e.firstChild,l=t.firstChild,p=l.firstChild,n=a;return typeof n=="function"?D(n,e):a=e,r(p,g(y,{each:i,children:(m,u)=>(()=>{var o=S();return o.firstChild,c(o,"width",`${m}px`),r(o,u,null),o})()})),r(t,g(v,{scrollRef:a,startMargin:40,get data(){return x(1e4)},as:"tbody",item:"tr",children:(m,u)=>g(y,{each:i,children:(o,w)=>(()=>{var h=L(),H=h.firstChild;return c(h,"width",`${o}px`),r(h,u,H),r(h,w,null),h})()})}),null),e})()}},f={render:()=>(()=>{var s=O(),a=s.firstChild;return r(a,()=>i.map((e,t)=>(()=>{var l=I();return l.firstChild,r(l,t,null),$(p=>c(l,"width",`${i[t]}px`)),l})())),r(s,g(v,{get data(){return x(1e4)},item:e=>(()=>{var t=N();return C(t,T(e,{get style(){return{display:"grid","grid-template-columns":`repeat(${i.length}, 1fr)`,"border-bottom":"1px solid black",...e.style,width:"fit-content"}}}),!1,!0),r(t,()=>e.children),t})(),children:(e,t)=>b(()=>i.map((l,p)=>(()=>{var n=R(),m=n.firstChild;return r(n,t,m),r(n,p,null),$(u=>c(n,"width",`${i[p]}px`)),n})()))}),null),$(e=>c(a,"grid-template-columns",`repeat(${i.length}, 1fr)`)),s})()};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const k=["TableElement","DivTable"];export{f as DivTable,_ as TableElement,k as __namedExportsOrder,V as default};
