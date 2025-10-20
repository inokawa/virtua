import{t as s,s as t,i,a as f,b as $,e as b,F as y,k as C,j as T,m as D}from"./iframe-Bli0I_Jx.js";import{V as v}from"./Virtualizer-CIab_UoL.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dj9jDBL5.js";var M=s("<div style=height:500px;overflow:auto><table><thead><tr>"),S=s("<th>Header"),L=s("<td>, "),O=s("<div style=max-height:400px;overflow:auto><div style=background-color:white;z-index:1>"),j=s("<div>Header"),I=s("<div>"),N=s("<div>, ");const k={component:v},x=o=>Array.from({length:o}).map((r,e)=>e),d=[100,200,300,100,200,300,100,300,400,200],_={render:()=>{let r;return(()=>{var e=M(),n=e.firstChild,l=n.firstChild,p=l.firstChild,a=r;return typeof a=="function"?b(a,e):r=e,t(p,"height","40px"),i(p,f(y,{each:d,children:(m,u)=>(()=>{var h=S();return h.firstChild,t(h,"width",`${m}px`),i(h,u,null),h})()})),i(n,f(v,{scrollRef:r,startMargin:40,get data(){return x(1e4)},as:"tbody",item:"tr",children:(m,u)=>f(y,{each:d,children:(h,w)=>(()=>{var c=L(),H=c.firstChild;return t(c,"width",`${h}px`),i(c,u,H),i(c,w,null),c})()})}),null),e})()}},g={render:()=>(()=>{var o=O(),r=o.firstChild;return t(r,"display","grid"),t(r,"position","sticky"),t(r,"top","0"),t(r,"width","fit-content"),i(r,()=>d.map((e,n)=>(()=>{var l=j();return l.firstChild,t(l,"padding","10px"),i(l,n,null),$(p=>t(l,"width",`${d[n]}px`)),l})())),i(o,f(v,{get data(){return x(1e4)},item:e=>(()=>{var n=I();return T(n,D(e,{get style(){return{display:"grid","grid-template-columns":`repeat(${d.length}, 1fr)`,"border-bottom":"1px solid black",...e.style,width:"fit-content"}}}),!1,!0),i(n,()=>e.children),n})(),children:(e,n)=>C(()=>d.map((l,p)=>(()=>{var a=N(),m=a.firstChild;return t(a,"padding","10px"),i(a,n,m),i(a,p,null),$(u=>t(a,"width",`${d[p]}px`)),a})()))}),null),$(e=>t(r,"grid-template-columns",`repeat(${d.length}, 1fr)`)),o})()};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const V=["TableElement","DivTable"];export{g as DivTable,_ as TableElement,V as __namedExportsOrder,k as default};
