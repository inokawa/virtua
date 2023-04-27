import{j as e,a as o}from"./jsx-runtime-6c4ce591.js";import{r as i}from"./index-fcd6345f.js";import{L as f}from"./List-c4146baa.js";const w={component:f},t=[100,200,300,100,200,300,100,300,400,200],u=i.forwardRef(({children:a,style:h,scrollSize:s},n)=>{const[p,g]=i.useState(0),d=i.useRef(null);i.useLayoutEffect(()=>{d.current&&g(d.current.getBoundingClientRect().height)},[]);const r={color:"white",background:"darkgray"};return e("div",{style:h,ref:n,children:o("table",{style:{height:s,tableLayout:"fixed",borderCollapse:"collapse",whiteSpace:"nowrap"},border:1,children:[e("thead",{ref:d,style:{position:"sticky",top:0,zIndex:1,height:20},children:o("tr",{style:{width:"100%"},children:[e("th",{style:{...r,minWidth:t[0]},children:"0"}),e("th",{style:{...r,minWidth:t[1]},children:"1"}),e("th",{style:{...r,minWidth:t[2]},children:"2"}),e("th",{style:{...r,minWidth:t[3]},children:"3"}),e("th",{style:{...r,minWidth:t[4]},children:"4"}),e("th",{style:{...r,minWidth:t[5]},children:"5"}),e("th",{style:{...r,minWidth:t[6]},children:"6"}),e("th",{style:{...r,minWidth:t[7]},children:"7"}),e("th",{style:{...r,minWidth:t[8]},children:"8"}),e("th",{style:{...r,minWidth:t[9]},children:"9"})]})}),e("tbody",{style:{height:s,marginTop:p,position:"absolute",top:0,left:0},children:a})]})})}),l={render:()=>e(f,{style:{width:"100%",height:"75%",background:"#fff",overflow:"auto"},element:u,itemElement:"tr",children:Array.from({length:1e3}).map((a,h)=>e(i.Fragment,{children:Array.from({length:10}).map((s,n)=>o("td",{style:{minWidth:t[n]},children:[h,", ",n]},n))},h))})};var c,m,y;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <List style={{
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
      </List>;
  }
}`,...(y=(m=l.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const T=["Table"];export{l as Table,T as __namedExportsOrder,w as default};
//# sourceMappingURL=Table.stories-74946b3a.js.map
