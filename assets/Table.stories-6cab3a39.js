import{j as e,a as h}from"./jsx-runtime-f8a6c6ea.js";import{r as l}from"./index-5284b0bf.js";import{V as f}from"./VList-6bee5597.js";import"./DefaultWindow-c3190a8f.js";import"./index-480187bb.js";const _={component:f},t=[100,200,300,100,200,300,100,300,400,200],g=l.forwardRef(({children:d,height:n,attrs:a},i)=>{const[p,u]=l.useState(0),o=l.useRef(null);l.useLayoutEffect(()=>{o.current&&u(o.current.getBoundingClientRect().height)},[]);const r={color:"white",background:"darkgray"};return e("div",{...a,ref:i,children:h("table",{style:{height:n,tableLayout:"fixed",borderCollapse:"collapse",whiteSpace:"nowrap"},border:1,children:[e("thead",{ref:o,style:{position:"sticky",top:0,zIndex:1,height:20},children:h("tr",{style:{width:"100%"},children:[e("th",{style:{...r,minWidth:t[0]},children:"0"}),e("th",{style:{...r,minWidth:t[1]},children:"1"}),e("th",{style:{...r,minWidth:t[2]},children:"2"}),e("th",{style:{...r,minWidth:t[3]},children:"3"}),e("th",{style:{...r,minWidth:t[4]},children:"4"}),e("th",{style:{...r,minWidth:t[5]},children:"5"}),e("th",{style:{...r,minWidth:t[6]},children:"6"}),e("th",{style:{...r,minWidth:t[7]},children:"7"}),e("th",{style:{...r,minWidth:t[8]},children:"8"}),e("th",{style:{...r,minWidth:t[9]},children:"9"})]})}),e("tbody",{style:{height:n,marginTop:p,position:"absolute",top:0,left:0},children:d})]})})}),s={render:()=>e(f,{style:{width:"100%",height:"75%",background:"#fff",overflow:"auto"},element:g,itemElement:"tr",children:Array.from({length:1e3}).map((d,n)=>e(l.Fragment,{children:Array.from({length:10}).map((a,i)=>h("td",{style:{minWidth:t[i]},children:[n,", ",i]},i))},n))})};var c,m,y;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const k=["Table"];export{s as Table,k as __namedExportsOrder,_ as default};
//# sourceMappingURL=Table.stories-6cab3a39.js.map
