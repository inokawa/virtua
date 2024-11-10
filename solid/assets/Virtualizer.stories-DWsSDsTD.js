import{i as n,d as v,e as g,t as d,u as D,F as f,s as S,m as L,h as O}from"./web-DSIcfvkV.js";import{V as _}from"./Virtualizer-13olqZRd.js";import"./utils-DE5fsShl.js";var I=d("<div style=height:500px;overflow:auto;><table><thead><tr>"),N=d("<th>Header"),R=d("<td>, "),U=d("<div style=max-height:400px;overflow:auto;><div>"),W=d("<div>Header"),j=d("<div>"),z=d("<div>, ");const E={component:_},b=p=>Array.from({length:p}).map((t,e)=>e),o=[100,200,300,100,200,300,100,300,400,200],m={render:()=>{let t;return(()=>{var e=I(),r=e.firstChild,i=r.firstChild,s=i.firstChild,l=t;return typeof l=="function"?D(l,e):t=e,s.style.setProperty("height","40px"),n(s,v(f,{each:o,children:(y,h)=>(()=>{var a=N();return a.firstChild,`${y}px`!=null?a.style.setProperty("width",`${y}px`):a.style.removeProperty("width"),n(a,h,null),a})()})),n(r,v(_,{scrollRef:t,startMargin:40,get data(){return b(1e4)},as:"tbody",item:"tr",children:(y,h)=>v(f,{each:o,children:(a,T)=>(()=>{var c=R(),M=c.firstChild;return`${a}px`!=null?c.style.setProperty("width",`${a}px`):c.style.removeProperty("width"),n(c,h,M),n(c,T,null),c})()})}),null),e})()}},u={render:()=>(()=>{var p=U(),t=p.firstChild;return t.style.setProperty("display","grid"),t.style.setProperty("position","sticky"),t.style.setProperty("top","0"),t.style.setProperty("background-color","white"),t.style.setProperty("z-index","1"),t.style.setProperty("width","fit-content"),n(t,()=>o.map((e,r)=>(()=>{var i=W();return i.firstChild,i.style.setProperty("padding","10px"),n(i,r,null),g(s=>(s=`${o[r]}px`)!=null?i.style.setProperty("width",s):i.style.removeProperty("width")),i})())),n(p,v(_,{get data(){return b(1e4)},item:e=>(()=>{var r=j();return S(r,L(e,{get style(){return{display:"grid","grid-template-columns":`repeat(${o.length}, 1fr)`,"border-bottom":"1px solid black",...e.style,width:"fit-content"}}}),!1,!0),n(r,()=>e.children),r})(),overscan:5,children:(e,r)=>O(()=>o.map((i,s)=>(()=>{var l=z(),y=l.firstChild;return l.style.setProperty("padding","10px"),n(l,r,y),n(l,s,null),g(h=>(h=`${o[s]}px`)!=null?l.style.setProperty("width",h):l.style.removeProperty("width")),l})()))}),null),g(e=>(e=`repeat(${o.length}, 1fr)`)!=null?t.style.setProperty("grid-template-columns",e):t.style.removeProperty("grid-template-columns")),p})()};var $,x,w;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
                    {i}, {j()}
                  </td>}
              </For>}
          </Virtualizer>
        </table>
      </div>;
  }
}`,...(w=(x=m.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var P,H,C;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(C=(H=u.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};const A=["TableElement","DivTable"];export{u as DivTable,m as TableElement,A as __namedExportsOrder,E as default};
