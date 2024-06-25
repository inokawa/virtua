import{i as s,d as g,e as m,t as p,s as _,m as f,h as $}from"./web-BB0IMLXK.js";import{V as h}from"./Virtualizer-DBsKbJnf.js";import"./utils-BXxFqQ7p.js";var x=p("<div style=max-height:400px;overflow:auto;><div>"),w=p("<div>Header"),P=p("<div>"),C=p("<div>, ");const M={component:h},b=o=>Array.from({length:o}).map((e,n)=>n),r=[100,200,300,100,200,300,100,300,400,200],a={render:()=>(()=>{var o=x(),e=o.firstChild;return e.style.setProperty("display","grid"),e.style.setProperty("position","sticky"),e.style.setProperty("top","0"),e.style.setProperty("background-color","white"),e.style.setProperty("z-index","1"),e.style.setProperty("width","fit-content"),s(e,()=>r.map((n,t)=>(()=>{var i=w();return i.firstChild,i.style.setProperty("padding","10px"),s(i,t,null),m(()=>`${r[t]}px`!=null?i.style.setProperty("width",`${r[t]}px`):i.style.removeProperty("width")),i})())),s(o,g(h,{get data(){return b(1e4)},item:n=>(()=>{var t=P();return _(t,f(n,{get style(){return{display:"grid","grid-template-columns":`repeat(${r.length}, 1fr)`,"border-bottom":"1px solid black",...n.style,width:"fit-content"}}}),!1,!0),s(t,()=>n.children),t})(),overscan:5,children:(n,t)=>$(()=>r.map((i,d)=>(()=>{var l=C(),v=l.firstChild;return l.style.setProperty("padding","10px"),s(l,t,v),s(l,d,null),m(()=>`${r[d]}px`!=null?l.style.setProperty("width",`${r[d]}px`):l.style.removeProperty("width")),l})()))}),null),m(()=>`repeat(${r.length}, 1fr)`!=null?e.style.setProperty("grid-template-columns",`repeat(${r.length}, 1fr)`):e.style.removeProperty("grid-template-columns")),o})()};var y,c,u;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const O=["DivTable"];export{a as DivTable,O as __namedExportsOrder,M as default};
