import{a as e,j as h}from"./jsx-runtime-e162df28.js";import{r as l}from"./index-5284b0bf.js";import{V as p}from"./VList-ab9e42c8.js";import"./DefaultWindow-6a281355.js";import"./index-480187bb.js";import"./ListItem-7a3a5692.js";const k={component:p},t=[100,200,300,100,200,300,100,300,400,200],g=l.forwardRef(({children:d,height:n,attrs:a},i)=>{const[f,u]=l.useState(0),s=l.useRef(null);l.useLayoutEffect(()=>{s.current&&u(s.current.getBoundingClientRect().height)},[]);const r={color:"white",background:"darkgray"};return e("div",{...a,ref:i,children:h("table",{style:{height:n,tableLayout:"fixed",borderCollapse:"collapse",whiteSpace:"nowrap"},border:1,children:[e("thead",{ref:s,style:{position:"sticky",top:0,zIndex:1,height:20},children:h("tr",{style:{width:"100%"},children:[e("th",{style:{...r,minWidth:t[0]},children:"0"}),e("th",{style:{...r,minWidth:t[1]},children:"1"}),e("th",{style:{...r,minWidth:t[2]},children:"2"}),e("th",{style:{...r,minWidth:t[3]},children:"3"}),e("th",{style:{...r,minWidth:t[4]},children:"4"}),e("th",{style:{...r,minWidth:t[5]},children:"5"}),e("th",{style:{...r,minWidth:t[6]},children:"6"}),e("th",{style:{...r,minWidth:t[7]},children:"7"}),e("th",{style:{...r,minWidth:t[8]},children:"8"}),e("th",{style:{...r,minWidth:t[9]},children:"9"})]})}),e("tbody",{style:{height:n,marginTop:f,position:"absolute",top:0,left:0},children:d})]})})}),o={render:()=>e(p,{style:{width:"100%",height:"75%",background:"#fff",overflow:"auto"},element:g,itemElement:"tr",children:Array.from({length:1e3}).map((d,n)=>e(l.Fragment,{children:Array.from({length:10}).map((a,i)=>h("td",{style:{minWidth:t[i]},children:[n,", ",i]},i))},n))})};var m,c,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(c=o.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};const x=["Table"];export{o as Table,x as __namedExportsOrder,k as default};
//# sourceMappingURL=Table.stories-293a1c9f.js.map
