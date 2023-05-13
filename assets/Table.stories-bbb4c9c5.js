import{j as e,a as o}from"./jsx-runtime-c3d7f245.js";import{r as h}from"./index-c6dae603.js";import{V as f}from"./VList-7d1466f0.js";import"./index-778f7dbf.js";const T={component:f},t=[100,200,300,100,200,300,100,300,400,200],u=h.forwardRef(({children:d,scrollSize:n,attrs:a},i)=>{const[p,g]=h.useState(0),s=h.useRef(null);h.useLayoutEffect(()=>{s.current&&g(s.current.getBoundingClientRect().height)},[]);const r={color:"white",background:"darkgray"};return e("div",{...a,ref:i,children:o("table",{style:{height:n,tableLayout:"fixed",borderCollapse:"collapse",whiteSpace:"nowrap"},border:1,children:[e("thead",{ref:s,style:{position:"sticky",top:0,zIndex:1,height:20},children:o("tr",{style:{width:"100%"},children:[e("th",{style:{...r,minWidth:t[0]},children:"0"}),e("th",{style:{...r,minWidth:t[1]},children:"1"}),e("th",{style:{...r,minWidth:t[2]},children:"2"}),e("th",{style:{...r,minWidth:t[3]},children:"3"}),e("th",{style:{...r,minWidth:t[4]},children:"4"}),e("th",{style:{...r,minWidth:t[5]},children:"5"}),e("th",{style:{...r,minWidth:t[6]},children:"6"}),e("th",{style:{...r,minWidth:t[7]},children:"7"}),e("th",{style:{...r,minWidth:t[8]},children:"8"}),e("th",{style:{...r,minWidth:t[9]},children:"9"})]})}),e("tbody",{style:{height:n,marginTop:p,position:"absolute",top:0,left:0},children:d})]})})}),l={render:()=>e(f,{style:{width:"100%",height:"75%",background:"#fff",overflow:"auto"},element:u,itemElement:"tr",children:Array.from({length:1e3}).map((d,n)=>e(h.Fragment,{children:Array.from({length:10}).map((a,i)=>o("td",{style:{minWidth:t[i]},children:[n,", ",i]},i))},n))})};var c,m,y;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      width: "100%",
      height: "75%",
      background: "#fff",
      overflow: "auto"
    }} element={TableList} itemElement="tr">
        {Array.from({
        length: 1000
      }).map((_, i) => <Fragment key={i}>
            {Array.from({
          length: 10
        }).map((_, j) => <td key={j} style={{
          minWidth: COLUMN_WIDTHS[j]
        }}>
                {i}, {j}
              </td>)}
          </Fragment>)}
      </VList>;
  }
}`,...(y=(m=l.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const _=["Table"];export{l as Table,_ as __namedExportsOrder,T as default};
//# sourceMappingURL=Table.stories-bbb4c9c5.js.map
