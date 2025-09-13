import{t as s,s as t,i,a as f,b as v,e as L,F as y,k as O,j,m as I}from"./iframe-DXT5au5T.js";import{V as $}from"./Virtualizer-C1nbxFO3.js";import"./preload-helper-BQ24v_F8.js";import"./utils-BJjz4_VV.js";var N=s("<div style=height:500px;overflow:auto><table><thead><tr>"),R=s("<th>Header"),U=s("<td>, "),W=s("<div style=max-height:400px;overflow:auto><div style=background-color:white;z-index:1>"),z=s("<div>Header"),k=s("<div>"),V=s("<div>, ");const q={component:$},D=o=>Array.from({length:o}).map((r,e)=>e),d=[100,200,300,100,200,300,100,300,400,200],_={render:()=>{let r;return(()=>{var e=N(),n=e.firstChild,l=n.firstChild,p=l.firstChild,a=r;return typeof a=="function"?L(a,e):r=e,t(p,"height","40px"),i(p,f(y,{each:d,children:(m,u)=>(()=>{var h=R();return h.firstChild,t(h,"width",`${m}px`),i(h,u,null),h})()})),i(n,f($,{scrollRef:r,startMargin:40,get data(){return D(1e4)},as:"tbody",item:"tr",children:(m,u)=>f(y,{each:d,children:(h,M)=>(()=>{var c=U(),S=c.firstChild;return t(c,"width",`${h}px`),i(c,u,S),i(c,M,null),c})()})}),null),e})()}},g={render:()=>(()=>{var o=W(),r=o.firstChild;return t(r,"display","grid"),t(r,"position","sticky"),t(r,"top","0"),t(r,"width","fit-content"),i(r,()=>d.map((e,n)=>(()=>{var l=z();return l.firstChild,t(l,"padding","10px"),i(l,n,null),v(p=>t(l,"width",`${d[n]}px`)),l})())),i(o,f($,{get data(){return D(1e4)},item:e=>(()=>{var n=k();return j(n,I(e,{get style(){return{display:"grid","grid-template-columns":`repeat(${d.length}, 1fr)`,"border-bottom":"1px solid black",...e.style,width:"fit-content"}}}),!1,!0),i(n,()=>e.children),n})(),overscan:5,children:(e,n)=>O(()=>d.map((l,p)=>(()=>{var a=V(),m=a.firstChild;return t(a,"padding","10px"),i(a,n,m),i(a,p,null),v(u=>t(a,"width",`${d[p]}px`)),a})()))}),null),v(e=>t(r,"grid-template-columns",`repeat(${d.length}, 1fr)`)),o})()};var x,w,H;_.parameters={..._.parameters,docs:{...(x=_.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(H=(w=_.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var b,C,T;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
                  {i()}, {j}
                </div>)}
            </>}
        </Virtualizer>
      </div>;
  }
}`,...(T=(C=g.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const B=["TableElement","DivTable"];export{g as DivTable,_ as TableElement,B as __namedExportsOrder,q as default};
